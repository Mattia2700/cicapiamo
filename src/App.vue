<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView } from "vue-router";
import { computed, onMounted, ref } from "vue";

const installPrompt = ref<Event | null>(null);
const isInstalled = ref(false);
const isPWA = computed(() => {
  return window.matchMedia("(display-mode: standalone)").matches;
});
const installing = ref(false);


onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt.value = e;
  });
  window.addEventListener("appinstalled", () => {
    isInstalled.value = true;
    installing.value = false;
  });
});

function openApp() {
  window.open("https://mattia2700.github.io/cicapiamo/", "_blank");
}

async function install() {
  if (installPrompt.value) {
    // @ts-ignore
    const result = await installPrompt.value.prompt();
    installing.value = true;
    console.log(result);
  }
}

</script>
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-[1.5em] p-1 px-[1rem] text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo" />
      <div v-if="isPWA">
        <StepRow />
        <Component :is="Component" />
      </div>
      <div v-else>
        <button
          v-if="installing"
          disabled
          class="mt-8 opacity-50 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
          Attendi...
        </button>
        <button
          v-else-if="!isInstalled"
          @click="install"
          class="mt-8 mb-3 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
          Installa l'applicazione
        </button>
        <button
          v-else
          @click="openApp"
          class="mt-8 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
          Apri l'applicazione
        </button>
      </div>

    </div>
  </RouterView>
</template>

<style scoped></style>
