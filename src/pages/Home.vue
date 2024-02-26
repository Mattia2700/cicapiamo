<script setup lang="ts">
import { useRouter } from "vue-router";
import Text from "@/components/Text.vue";
import Bottom from "@/components/bottom/Bottom.vue";
import BottomButton from "@/components/bottom/BottomButton.vue";

const props = defineProps<{
  myself: any;
  otherDevice: any;
  code: string;
}>();

// const target = ref("");
const router = useRouter();

function redirectToQuestion() {
  router.push("/question-request");
}

function redirectToAnswer() {
  console.log(props.myself._id);
  props.myself._id = "12345";
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
