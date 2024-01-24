<script setup lang="ts">
import { useRouter } from "vue-router";
import Text from "@/components/Text.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import BottomButton from "@/components/bottom/BottomButton.vue";

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
  <div class="flex flex-col items-center">
    <Text>
      Scegli se questo dispositivo sarà usato per
      <span class="font-semibold">rispondere</span> o per
      <span class="font-semibold">fare le domande</span>
    </Text>
    <Bottom>
      <BottomButton @click="redirectToAnswer">
        Rispondere
      </BottomButton>
      <div class="my-6"/>
      <BottomButton @click="redirectToQuestion">
        Fare Domande
      </BottomButton>
    </Bottom>
  </div>
</template>

<style scoped></style>
