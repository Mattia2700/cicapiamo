<script setup lang="ts">
import { useRouter } from "vue-router";

// const target = ref("");
const router = useRouter();

function redirectToQuestion() {
  router.push("/question");
}

function redirectToAnswer() {
  router.push("/answer");
}
</script>

<template>
  <div class="mt-4 justify-center">
    <span class="text-center">Step 1: Scegli se questo dispositivo sarà usato per rispondere o per fare le domande.</span>
    <div class="mt-4">
      <button @click="redirectToAnswer" class="p-2 rounded bg-white text-black font-bold mr-1 cursor-pointer uppercase">
        Rispondere
      </button>
      <button
        value="Fare Domande"
        @click="redirectToQuestion"
        class="mt-1 p-2 rounded bg-white text-black font-bold cursor-pointer uppercase"
      >
        Fare Domande
      </button>
    </div>
  </div>
</template>

<style scoped></style>
