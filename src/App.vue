<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView, useRouter } from "vue-router";
import { computed, ref } from "vue";
import Peer, { DataConnection } from "peerjs";
//import Pwa from "@/components/Pwa.vue";

//const isPWA = computed(() => {
//  return window.matchMedia("(display-mode: standalone)").matches;
//});

const code = String(Math.round(Math.random() * (99999 - 10000) + 1));
let otherDevice = ref<DataConnection | null>(null);
const myself = ref(
  // @ts-ignore
  new Peer(__APP_ID__ + "-" + code, {
    debug: 3,
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: [
            "turn:eu-0.turn.peerjs.com:3478",
            "turn:us-0.turn.peerjs.com:3478",
          ],
          username: "peerjs",
          credential: "peerjsp",
        },
      ],
      sdpSemantics: "unified-plan",
    },
  }),
);

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
  console.log(value);
  otherDevice.value = value;
}

//const playAnyway = ref(false);
const router = useRouter();
</script>
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-4 p-1 px-[1.5rem] text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo?" />
      <div>
        <StepRow :current_idx="currentRoute" />
        <Component
          :is="Component"
          :myself="myself"
          :otherDevice="otherDevice"
          :code="code"
          @update="updateOtherDevice($event)"
        />
      </div>
      <!--<div v-else>-->
      <!--<Pwa @play="playAnyway = true"/>-->
      <!--</div>-->
    </div>
  </RouterView>
</template>

<style scoped></style>
