<script setup lang="ts">
import Peer, { DataConnection } from "peerjs";
import { computed, ref, watch } from "vue";
import words from "@/assets/words.json";
import { POSITION, useToast } from "vue-toastification";
import Text from "@/components/Text.vue";

const toast = useToast();
const wordIndex = ref(-1);
const isConnected = ref(false);
const displayedWord = computed(() => {
  return wordIndex.value !== -1 && remainingTime.value !== 0 ? words.words[wordIndex.value] : "Caricamento...";
});
const running = ref(false);
const code = String(Math.round(Math.random() * 100000)).padStart(5, "0");
const remainingTime = ref(60);
const guessedCount = ref(0);
const remainingSkipCount = ref(3);
const interval = ref<NodeJS.Timeout | null>(null);
const pause = ref(false);
const otherDevice = ref<DataConnection | null>(null);
const mySelf = ref(
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

watch(remainingTime, (newValue) => {
  if (newValue < 0) {
    stopTimer();
    remainingTime.value = 0;
    otherDevice.value!.send({ command: "passo" });
    pause.value = true;
  }
});

mySelf.value.on("connection", (conn) => {
  otherDevice.value = conn;
  conn.on("data", (data: any) => {
    if (data.status === "connected") {
      conn.send({ status: "connected" });
      isConnected.value = true;
    } else if (data.command === "answer") {
      stopTimer();
      running.value = true;
    } else if (data.command === "continue") {
      running.value = false;
    } else if ("score" in data) {
      guessedCount.value = data.score;
    }
  });
});

function startTimer() {
  if (remainingTime.value === 0) {
    remainingTime.value = 60;
    guessedCount.value = 0;
    remainingSkipCount.value = 3;
    otherDevice.value!.send({ score: 0 });
  }
  interval.value = setInterval(() => {
    remainingTime.value--;
  }, 1000);
  otherDevice.value!.send({ command: "start" });
  wordIndex.value = Math.floor(Math.random() * (words.words.length + 1));
  running.value = true;
}

function stopTimer(passo: boolean = false) {
  if (passo) {
    if (remainingSkipCount.value > 0) {
      remainingSkipCount.value--;
      otherDevice.value!.send({ command: "passo" });
      clearInterval(interval.value!);
      running.value = false;
    } else {
      toast.error("Non puoi più passare!", {
        position: POSITION.BOTTOM_CENTER,
      });
    }
  } else {
    clearInterval(interval.value!);
    running.value = false;
  }
}
</script>

<template>
  <div v-if="!isConnected" class="mt-4 justify-center">
    <Text>
      Ora inserisci questo codice sul secondo dispositivo
    </Text>
    <div class="flex mt-4 items-center justify-center">
      <span class="leading-[3.5rem] w-full font-montserrat text-center text-[20px] font-medium rounded-xl bg-[#00dd9b] text-black mt-14">{{ code }}</span>
    </div>
  </div>
  <div v-else class="flex flex-col mt-4 justify-center items-center w-full">
    <span class="text-center">Step 3: Gioca!</span>
    <button v-if="!running" @click="startTimer" class="mt-4 p-2 font-bold bg-green-600 text-xl rounded uppercase">Parti</button>
    <span class="mt-4 text-md font-bold uppercase opacity-40">La parola è</span>
    <div id="word" class="mt-3 p-4 rounded bg-green-600 text-xl font-bold w-fit uppercase">
      {{ displayedWord }}
    </div>
    <div class="flex flex-col w-full mt-4">
      <span class="flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center">
        Indovinate
        <span class="text-xl">{{ guessedCount }}</span>
      </span>
      <div class="flex-1 flex flex-col items-center justify-center mt-3">
        <button @click="stopTimer(true)" class="p-2 rounded bg-red-600 uppercase font-bold" :disabled="!running">Passo</button>
        <span id="remainingSkipCount">{{ remainingSkipCount }}</span>
      </div>
      <span id="time" class="flex-1 text-lg font-bold flex items-center justify-center mt-3">{{ remainingTime }}</span>
    </div>
  </div>
</template>

<style scoped></style>
