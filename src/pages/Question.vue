<script setup lang="ts">
import Peer from "peerjs";
// import { POSITION, useToast } from "vue-toastification";
import { useRouter } from "vue-router";

// const target = ref("");
const code = String(Math.round(Math.random() * 100000)).padStart(5, "0");
// @ts-ignore
const peer = new Peer(__APP_ID__ + "-" + code);
// const toast = useToast();
const router = useRouter();

peer.on("connection", (conn) => {
  conn.on("data", (data) => {
    // @ts-ignore
    if (data.status === "connected") {
      conn.send({ status: "connected" });
      router.push("/game");
    }
  });
});

// toast.info(data, {
//   position: POSITION.BOTTOM_CENTER,
//   closeOnClick: true,
//   pauseOnFocusLoss: false,
//   pauseOnHover: false,
// });
</script>

<template>
  <div class="mt-4 justify-center">
    <span class="text-center">Step 2: Ora inserisci questo codice sul secondo dispositvo.</span>
    <div class="flex mt-4 items-center justify-center">
      <span class="font-bold mr-1 p-2 rounded bg-green-600 text-xl">{{ code }}</span>
    </div>
  </div>
</template>

<style scoped></style>
