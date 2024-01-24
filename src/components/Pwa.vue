<script setup lang="ts">
import { onMounted, ref } from "vue";

const emits = defineEmits<{
  (event: "play"): void;
}>();

const installPrompt = ref<Event | null>(null);

onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt.value = e;
  });
});

function openApp() {
  window.open("https://mattia2700.github.io/cicapiamo/", "_blank");
}

async function install() {
  if (installPrompt.value) {
    // @ts-ignore
    const result = await installPrompt.value.prompt();
    console.log(result);
  }
}

function playAnyway() {
  emits("play");
}

</script>

<template>
  <div class="flex flex-col h-[60svh]">
    <span class="flex flex-col basis-[40%] items-center justify-center">
      <p class="mt-4 text-center font-semibold font-montserrat">
        Per una migliore esperienza di gioco, installa la Progressive Web App!
      </p>
      <button
        @click="install"
        class="mt-4 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
        Installa l'applicazione
      </button>
    </span>
    <span class="flex flex-col basis-[30%] items-center justify-center">
      <p class="text-center font-semibold font-montserrat">
        Se è già installata, aprila!
      </p>
      <button
        @click="openApp"
        class="mt-4 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
        Apri l'applicazione
      </button>
    </span>
    <span class="flex flex-col basis-[30%] min-h-[30%] items-center justify-center">
      <p class="text-center font-semibold font-montserrat">
        O se preferisci, gioca dal browser.
      </p>
      <button
        @click="playAnyway"
        class="mt-4 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
        Continua a giocare
      </button>
    </span>
  </div>
</template>

<style scoped>

</style>