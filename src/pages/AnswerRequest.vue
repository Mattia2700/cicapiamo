<script setup lang="ts">
import { ref, watch } from "vue";
import Text from "@/components/Text.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import BottomButton from "@/components/bottom/BottomButton.vue";
import router from "@/router";
import Peer, { DataConnection } from "peerjs";

const props = defineProps<{
  myself: Peer;
  otherDevice: DataConnection | null;
}>();
const emit = defineEmits<{
  (event: "update", value: DataConnection): void;
}>();

const isConnected = ref(false);
const questionDevice = ref("");
const emitValue = ref<DataConnection | null>(null);

function connectToQuestionDevice() {
  emitValue.value = props.myself.connect(
    __APP_ID__ + "-" + questionDevice.value,
  );
  emitValue.value!.on("open", () => {
    emitValue.value!.send({ status: "connected" });
    emitValue.value!.on("data", (data: any) => {
      // @ts-ignore
      if (data.status === "connected") {
        isConnected.value = true;
      }
    });
  });
}

watch(
  () => isConnected.value,
  (newValue) => {
    if (newValue) {
      emit("update", emitValue.value);
      router.push("/answer");
    }
  },
);
</script>

<template>
  <div class="flex flex-col items-center">
    <Text>
      Ora devi inserire il <span class="font-semibold">codice</span> che ti
      viene mostrato sul secondo dispositvo
    </Text>
    <input
      type="number"
      placeholder="Inserisci il codice a 5 cifre"
      v-model="questionDevice"
      class="leading-[3.25rem] w-full font-montserrat text-center text-[16px] font-medium rounded-xl bg-[#605d66] text-[#cac4d0] mt-14"
    />
    <Bottom>
      <BottomButton @click="connectToQuestionDevice"> Connettiti </BottomButton>
    </Bottom>
  </div>
</template>

<style scoped></style>
