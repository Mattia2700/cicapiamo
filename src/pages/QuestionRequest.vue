<script setup lang="ts">
import Peer, { DataConnection } from "peerjs";
import { onMounted, ref, UnwrapRef, watch } from "vue";
import Text from "@/components/Text.vue";
import router from "@/router";

const props = defineProps<{
  myself: Peer;
  otherDevice: DataConnection | null;
  code: string;
}>();
const emit = defineEmits<{
  (event: "update", value: UnwrapRef<DataConnection>): void;
}>();

const emitValue = ref<DataConnection | null>(null);

watch(
  () => emitValue.value,
  (newValue) => {
    if (newValue !== null) {
      emit("update", newValue);
    }
  },
);

onMounted(() => {
  props.myself.on("connection", (conn) => {
    emitValue.value = conn;
    emitValue.value.on("data", (data: any) => {
      if (data.status === "connected") {
        conn.send({ status: "connected" });
        router.push("/question");
      }
    });
  });
});
</script>

<template>
  <div class="mt-4 justify-center">
    <Text> Ora inserisci questo codice sul secondo dispositivo </Text>
    <div class="flex mt-4 items-center justify-center">
      <span
        class="leading-[3.5rem] w-full font-montserrat text-center text-[20px] font-medium rounded-xl bg-[#00dd9b] text-black mt-14"
        >{{ code }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
