<script setup lang="ts">
import { ref } from "vue";
import Peer from "peerjs";

const target = ref("");

const peer = new Peer();

function sendMessage() {
  if (target.value && target.value.length == 36) {
    const conn = peer.connect(target.value);
    conn.on("open", () => {
      conn.send("hi!");
    });
  }
}
</script>

<template>
  <div class="mt-4 justify-center">
    <span class="text-center">Step 2: Ora inserisci questo codice sul secondo dispositvo.</span>
    <div class="flex mt-4 items-center justify-center">
      <span class="font-bold mr-1 p-2 rounded bg-green-600 text-xl" id="code">000000000</span>
    </div>
    <input type="text" v-model="target" />
    <button class="mt-3" @click="sendMessage">Manda</button>
  </div>
</template>

<style scoped></style>
