<script setup lang="ts">
import { useRouter } from "vue-router";
import Text from "@/components/Text.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import BottomButton from "@/components/bottom/BottomButton.vue";
import { onMounted } from "vue";
import Peer, { DataConnection } from "peerjs";

const props = defineProps<{
  myself: Peer | null;
  otherDevice: DataConnection | null;
  code: string;
}>();
const emit = defineEmits<{
  (event: "updateOther", value: DataConnection | null): void;
  (event: "updateMe", value: Peer | null): void;
  (event: "updateCode", value: string): void;
}>();

onMounted(() => {
  // reset all the values

  const code = String(Math.round(Math.random() * (99999 - 10000) + 1));

  emit("updateCode", code);

  if (props.otherDevice?.open) {
    props.otherDevice.close();
  }
  emit("updateOther", null);

  if (props.myself?.open) {
    props.myself.destroy();
  }
  emit(
    "updateMe",
    new Peer(
      // @ts-ignore
      __APP_ID__ + "-" + code,
      {
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
      },
    ),
  );
});

// const target = ref("");
const router = useRouter();

function redirectToQuestion() {
  router.push("/question-request");
}

function redirectToAnswer() {
  router.push("/answer-request");
}
</script>

<template>
  <div class="flex flex-col items-center">
    <Text>
      Scegli se questo dispositivo sarà usato per
      <span class="font-semibold">rispondere</span> o per
      <span class="font-semibold">fare le domande</span>
    </Text>
    <Bottom>
      <BottomButton @click="redirectToAnswer"> Rispondere </BottomButton>
      <div class="my-6" />
      <BottomButton @click="redirectToQuestion"> Fare Domande </BottomButton>
    </Bottom>
  </div>
</template>

<style scoped></style>
