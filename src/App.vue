<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView, useRouter } from "vue-router";
import { computed, ref } from "vue";
import Peer, { DataConnection } from "peerjs";
import Pwa from "@/components/Pwa.vue";

const isPWA = computed(() => {
  return window.matchMedia("(display-mode: standalone)").matches;
});

const playAnyway = ref(false);
const code = ref(String(Math.round(Math.random() * (99999 - 10000) + 1)));
const otherDevice = ref<DataConnection | null>(null);
const myself = ref<Peer | null>(null);

const currentRoute = computed(() => {
  if (router.currentRoute.value.name === "home") {
    return 1;
  } else if (
    router.currentRoute.value.name === "question-request" ||
    router.currentRoute.value.name === "answer-request"
  ) {
    return 2;
  } else {
    return 3;
  }
});

function updateOtherDevice(value: DataConnection) {
  console.log("other" + value);
  otherDevice.value = value;
}

function updateMe(value: Peer) {
  console.log("me" + value);
  myself.value = value;
}

function updateCode(value: string) {
  console.log("code" + value);
  code.value = value;
}

//const playAnyway = ref(false);
const router = useRouter();
</script>
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-4 p-1 px-[1.5rem] text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo?" />
      <div v-if="isPWA || playAnyway">
        <StepRow :current_idx="currentRoute" />
        <Component
          :is="Component"
          :myself="myself"
          :otherDevice="otherDevice"
          :code="code"
          @updateOther="updateOtherDevice($event)"
          @updateCode="updateCode($event)"
          @updateMe="updateMe($event)"
        />
      </div>
      <div v-else>
        <Pwa @play="playAnyway = true" />
      </div>
    </div>
  </RouterView>
</template>

<style scoped></style>
