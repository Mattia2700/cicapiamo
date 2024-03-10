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
      guessedCount.value = 0;
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
      icon: false,
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
  </div>
</template>

<style scoped></style>
