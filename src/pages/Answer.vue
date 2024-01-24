<script setup lang="ts">
import { ref } from "vue";
import Peer, { DataConnection } from "peerjs";
import { POSITION, useToast } from "vue-toastification";
import type { ToastID } from "vue-toastification/dist/types/types";
import Text from "@/components/Text.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import BottomButton from "@/components/bottom/BottomButton.vue";

const questionDevice = ref("");
const pause = ref(false);
const wait = ref(true);
const toastId = ref<ToastID | null>(null);
const timeout = ref<NodeJS.Timeout | null>(null);
const code = String(Math.round(Math.random() * 100000)).padStart(5, "0");
const isConnected = ref(false);
const otherDevice = ref<DataConnection | null>(null);
const guessedCount = ref(0);
const toast = useToast();
const myself = ref(
  // @ts-ignore
  new Peer(__APP_ID__ + "-" + code, {
    debug: 3,
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"], username: "peerjs", credential: "peerjsp" },
      ],
      sdpSemantics: "unified-plan",
    },
  }),
);

function connectToQuestionDevice() {
  // @ts-ignore
  otherDevice.value = myself.value.connect(__APP_ID__ + "-" + questionDevice.value);
  otherDevice.value!.on("open", () => {
    otherDevice.value!.send({ status: "connected" });
    otherDevice.value!.on("data", (data: any) => {
      // @ts-ignore
      if (data.status === "connected") {
        isConnected.value = true;
      } else if (data.command === "start") {
        wait.value = false;
      } else if (data.command === "passo") {
        pause.value = false;
        wait.value = true;
      } else if ("score" in data) {
        guessedCount.value = data.score;
      }
    });
  });
}

function wantToAnswer() {
  otherDevice.value!.send({ command: "answer" });
  pause.value = true;
  timeout.value = setTimeout(() => {
    if (guessedCount.value > 0) {
      guessedCount.value--;
    }
    pause.value = !pause.value;
    wait.value = true;
    otherDevice.value!.send({ command: "continue" });
    otherDevice.value!.send({ score: guessedCount.value });
  }, 10000);
  toastId.value = toast.info("Rispondi!", {
    position: POSITION.BOTTOM_CENTER,
    timeout: 10000,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    closeButton: false,
  });
}

function correct() {
  if (timeout.value) {
    clearTimeout(timeout.value);
    toast.dismiss(toastId.value!);
  }
  guessedCount.value++;
  pause.value = false;
  wait.value = true;
  otherDevice.value!.send({ command: "continue" });
  otherDevice.value!.send({ score: guessedCount.value });
}

function wrong() {
  if (timeout.value) {
    clearTimeout(timeout.value);
    toast.dismiss(toastId.value!);
  }
  if (guessedCount.value > 0) {
    guessedCount.value--;
  }
  pause.value = false;
  wait.value = true;
  otherDevice.value!.send({ command: "continue" });
  otherDevice.value!.send({ score: guessedCount.value });
}
</script>

<template>
  <div v-if="!isConnected" class="flex flex-col items-center">
    <Text>
      Ora devi inserire il <span class="font-semibold">codice</span> che ti viene mostrato sul secondo dispositvo
    </Text>
    <input
      type="number"
      placeholder="Inserisci il codice a 5 cifre"
      v-model="questionDevice"
      class="leading-[3.25rem] w-full font-montserrat text-center text-[16px] font-medium rounded-xl bg-[#605d66] text-[#cac4d0] mt-14" />
    <Bottom>
      <BottomButton @click="connectToQuestionDevice">
        Connettiti
      </BottomButton>
    </Bottom>
  </div>
  <div v-else class="flex flex-col mt-4 justify-center items-center w-full">
    <span class="text-center">Step 3: Gioca!</span>
    <button
      @click="wantToAnswer"
      class="m-8 w-52 aspect-square bg-red-600 rounded-full flex justify-center items-center text-xl font-bold uppercase disabled:opacity-20"
      :disabled="wait || pause"
    >
      Rispondi
    </button>
    <div class="mt-4 flex">
      <div class="flex-1 w-full flex justify-start">
        <button
          @click="correct"
          class="mr-2 w-fit p-1 bg-green-600 uppercase font-bold rounded disabled:opacity-20 h-12"
          :disabled="wait || !pause"
        >
          Corretto
        </button>
      </div>
      <div class="flex-1 flex justify-end">
        <button
          @click="wrong"
          class="ml-2 w-fit p-1 bg-red-600 uppercase font-bold rounded disabled:opacity-20"
          :disabled="wait || !pause"
        >
          Sbagliato
        </button>
      </div>
    </div>
    <span class="flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center mt-3">
      Indovinate
      <span id="guessedCount" class="text-xl">
        {{ guessedCount }}
      </span>
    </span>
  </div>
</template>

<style scoped></style>
