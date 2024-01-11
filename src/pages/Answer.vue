<script setup lang="ts">
import { ref } from "vue";
import Peer from "peerjs";

const id = ref("");
const msg = ref("");

const peer = new Peer();
peer.on("open", (peerid) => {
  id.value = peerid;
  peer.on("connection", (conn) => {
    conn.on("data", (data) => {
      msg.value = data as string;
    });
  });
});
</script>

<template>
  <div class="mt-4 justify-center">
    <span class="text-center">Step 2: Ora devi inserire il codice che ti viene mostrato sul secondo dispositvo.</span>
    <div class="mt-4 items-center justify-center">
      <span class="font-bold mr-1">Inserisci il codice a 9 cifre:</span>
      <input type="number" id="code" placeholder="Codice" class="p-2 rounded text-black mt-3 mr-1" />
      <input
        type="button"
        value="Connettiti"
        onclick="connectToQuestionDevice()"
        class="p-2 mt-5 rounded bg-white text-black font-bold cursor-pointer uppercase"
      />
      <p class="mt-3">{{ id }}</p>
      <p class="mt-3">{{ msg }}</p>
    </div>
  </div>
</template>

<style scoped></style>
