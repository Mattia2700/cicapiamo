<script setup lang="ts">
import { onMounted, ref } from "vue";
import { POSITION, useToast } from "vue-toastification";
import type { ToastID } from "vue-toastification/dist/types/types";
import AnswerButton from "@/components/AnswerButton.vue";
import { DataConnection } from "peerjs";
import Game from "@/components/bottom/Game.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import Text from "@/components/Text.vue";

const props = defineProps<{
  otherDevice: DataConnection | null;
}>();

const pause = ref(false);
const wait = ref(true);
const toastId = ref<ToastID | null>(null);
const timeout = ref<NodeJS.Timeout | null>(null);
const guessedCount = ref(0);
const toast = useToast();

onMounted(() => {
  props.otherDevice!.on("data", (data: any) => {
    if (data.command === "start") {
      wait.value = false;
    } else if (data.command === "passo") {
      pause.value = false;
      wait.value = true;
    } else if ("score" in data) {
      guessedCount.value = data.score;
    }
  });
});

function wantToAnswer() {
  if (!(wait.value || pause.value)) {
    props.otherDevice!.send({ command: "answer" });
    pause.value = true;
    timeout.value = setTimeout(() => {
      if (guessedCount.value > 0) {
        guessedCount.value--;
      }
      pause.value = !pause.value;
      wait.value = true;
      props.otherDevice!.send({ command: "continue" });
      props.otherDevice!.send({ score: guessedCount.value });
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
}

function correct() {
  if (timeout.value) {
    clearTimeout(timeout.value);
    toast.dismiss(toastId.value!);
  }
  guessedCount.value++;
  pause.value = false;
  wait.value = true;
  props.otherDevice!.send({ command: "continue" });
  props.otherDevice!.send({ score: guessedCount.value });
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
  props.otherDevice!.send({ command: "continue" });
  props.otherDevice!.send({ score: guessedCount.value });
}
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <Text>Gioca !</Text>
    <AnswerButton :disabled="wait || pause" @click="wantToAnswer" />
    <Bottom>
      <Game
        :score="guessedCount"
        :disabled="wait || !pause"
        @correct="correct"
        @wrong="wrong"
      />
    </Bottom>
    <!--    <div class="mt-4 flex">-->
    <!--      <div class="flex-1 w-full flex justify-start">-->
    <!--        <button-->
    <!--          @click="correct"-->
    <!--          class="mr-2 w-fit p-1 bg-green-600 uppercase font-bold rounded disabled:opacity-20 h-12"-->
    <!--          :disabled="wait || !pause"-->
    <!--        >-->
    <!--          Corretto-->
    <!--        </button>-->
    <!--      </div>-->
    <!--      <div class="flex-1 flex justify-end">-->
    <!--        <button-->
    <!--          @click="wrong"-->
    <!--          class="ml-2 w-fit p-1 bg-red-600 uppercase font-bold rounded disabled:opacity-20"-->
    <!--          :disabled="wait || !pause"-->
    <!--        >-->
    <!--          Sbagliato-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <span-->
    <!--      class="flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center mt-3"-->
    <!--    >-->
    <!--      Indovinate-->
    <!--      <span id="guessedCount" class="text-xl">-->
    <!--        {{ guessedCount }}-->
    <!--      </span>-->
    <!--    </span>-->
  </div>
</template>

<style scoped></style>
