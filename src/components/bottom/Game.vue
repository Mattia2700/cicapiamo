<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Point from "@/components/bottom/Point.vue";

const props = defineProps<{
  disabled: boolean;
  score: number;
}>();

const emits = defineEmits<{
  (correct: "correct"): void;
  (wrong: "wrong"): void;
}>();

const width = ref();

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

function updateWidth() {
  const title = document.getElementById("title");
  const titleStyle = getComputedStyle(title!);
  const titlePadding =
    parseFloat(titleStyle.paddingLeft) + parseFloat(titleStyle.paddingRight);
  width.value = title!.offsetWidth - titlePadding;
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="flex justify-between bg-[#322f37] leading-[3.8125rem] rounded-xl"
      :style="{ width: width + 'px' }"
    >
      <span class="ml-4 font-montserrat font-medium text-[16px]"
        >Indovinate</span
      >
      <span class="mr-4 font-montserrat font-medium text-[24px]">{{
        props.score
      }}</span>
    </div>
    <div
      class="flex flex-row items-center mt-4 w-full"
      :style="{ width: width + 'px' }"
    >
      <Point
        flavor="correct"
        :disabled="props.disabled"
        @click="emits('correct')"
        ><p>Corretto</p></Point
      >
      <span class="w-6" />
      <Point flavor="wrong" :disabled="props.disabled" @click="emits('wrong')"
        >Sbagliato</Point
      >
    </div>
  </div>
</template>

<style scoped></style>
