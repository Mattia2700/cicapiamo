<script setup lang="ts">
import { DataConnection } from "peerjs";
import { computed, onMounted, ref, watch } from "vue";
import words from "@/assets/words.json";
import { POSITION, useToast } from "vue-toastification";

const props = defineProps<{
  otherDevice: DataConnection | null;
}>();

const toast = useToast();
const wordIndex = ref(-1);
const displayedWord = computed(() => {
  return wordIndex.value !== -1 && remainingTime.value !== 0
    ? words.words[wordIndex.value]
    : "Caricamento...";
});
const running = ref(false);
const remainingTime = ref(60);
const guessedCount = ref(0);
const remainingSkipCount = ref(3);
const interval = ref<NodeJS.Timeout | null>(null);
const pause = ref(false);

watch(remainingTime, (newValue) => {
  if (newValue < 0) {
    stopTimer();
    remainingTime.value = 0;
    props.otherDevice!.send({ command: "passo" });
    pause.value = true;
  }
});

onMounted(() => {
  props.otherDevice!.on("data", (data: any) => {
    if (data.command === "answer") {
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
    props.otherDevice!.send({ score: 0 });
  }
  interval.value = setInterval(() => {
    remainingTime.value--;
  }, 1000);
  props.otherDevice!.send({ command: "start" });
  wordIndex.value = Math.floor(Math.random() * (words.words.length + 1));
  running.value = true;
}

function stopTimer(passo: boolean = false) {
  if (passo) {
    if (remainingSkipCount.value > 0) {
      remainingSkipCount.value--;
      props.otherDevice!.send({ command: "passo" });
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
  <div class="flex flex-col mt-4 justify-center items-center w-full">
    <span class="text-center">Step 3: Gioca!</span>
    <button
      v-if="!running"
      @click="startTimer"
      class="mt-4 p-2 font-bold bg-green-600 text-xl rounded uppercase"
    >
      Parti
    </button>
    <span class="mt-4 text-md font-bold uppercase opacity-40">La parola è</span>
    <div
      id="word"
      class="mt-3 p-4 rounded bg-green-600 text-xl font-bold w-fit uppercase"
    >
      {{ displayedWord }}
    </div>
    <div class="flex flex-col w-full mt-4">
      <span
        class="flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center"
      >
        Indovinate
        <span class="text-xl">{{ guessedCount }}</span>
      </span>
      <div class="flex-1 flex flex-col items-center justify-center mt-3">
        <button
          @click="stopTimer(true)"
          class="p-2 rounded bg-red-600 uppercase font-bold"
          :disabled="!running"
        >
          Passo
        </button>
        <span id="remainingSkipCount">{{ remainingSkipCount }}</span>
      </div>
      <span
        id="time"
        class="flex-1 text-lg font-bold flex items-center justify-center mt-3"
        >{{ remainingTime }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
