<script setup lang="ts">
import { ref } from "vue";
import Peer from "peerjs";
import { useRouter } from "vue-router";

const code = ref("");
const router = useRouter();

const peer = ref(new Peer());

function connectToQuestionDevice() {
  // @ts-ignore
  const conn = peer.value.connect(__APP_ID__ + "-" + code.value);
  conn.on("open", () => {
    conn.send({ status: "connected" });
    conn.on("data", (data) => {
      // @ts-ignore
      if (data.status === "connected") {
        router.push("/game");
      }
    });
  });
}
</script>

<template>
  <div class="mt-4 justify-center">
    <span class="text-center">Step 2: Ora devi inserire il codice che ti viene mostrato sul secondo dispositvo.</span>
    <div class="mt-4 items-center justify-center">
      <span class="font-bold mr-1">Inserisci il codice a 5 cifre:</span>
      <input type="number" placeholder="Codice" v-model="code" class="p-2 rounded bg-white text-black mt-3 mr-1" />
      <input
        type="button"
        value="Connettiti"
        @click="connectToQuestionDevice"
        class="p-2 mt-5 rounded bg-white text-black font-bold cursor-pointer uppercase"
      />
    </div>
  </div>
</template>

<style scoped></style>
