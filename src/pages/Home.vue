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
  <div class="mt-[1.5em] flex justify-center">
    <p class="text-left font-montserrat font-normal leading-5 text-[16px] pl-2 border-l-4 border-l-[#e600fa] rounded-l-sm">
      Scegli se questo dispositivo sarà usato per
      <span class="font-semibold">rispondere</span> o per
      <span class="font-semibold">fare le domande</span>
    </p>
    <div class="fixed bottom-14 flex flex-col items-center justify-center w-full px-4 md:px-[30%]">
      <button @click="redirectToAnswer"
        class="text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl">
        Rispondere
      </button>
      <div class="my-6"/>
      <button
        value="Fare Domande"
        @click="redirectToQuestion"
        class="text-black text-base font-semibold font-montserrat bg-white uppercase w-full py-4 shadow-sm rounded-2xl"
      >
        Fare Domande
      </button>
    </div>
  </div>
</template>

<style scoped></style>
