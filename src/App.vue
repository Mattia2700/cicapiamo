<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView } from "vue-router";
import { computed, onMounted, ref } from "vue";

const installPrompt = ref<Event | null>(null);
const isInstalled = computed(async () => {
  // @ts-ignore
  await navigator.getInstalledRelatedApps().then((apps) => {
    console.log(apps);
    return apps.length > 0;
  });
});
const isPWA = computed(() => {
  console.log(window.matchMedia("(display-mode: standalone)").matches);
  return window.matchMedia("(display-mode: standalone)").matches;
});

onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt.value = e;
  });
  console.log(isInstalled.value);
});

function openApp() {
  window.open("http://localhost:5173/cicapiamo/", "_blank");
}

async function install() {
  if (installPrompt.value) {
    // @ts-ignore
    const result = await installPrompt.value.prompt();
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
          @click="install"
          class="mt-8 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
          Installa la applicazione per giocare
        </button>
        <button
          @click="openApp"
          class="mt-8 text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
          Apri la applicazione
        </button>
      </div>

    </div>
  </RouterView>
</template>

<style scoped></style>
