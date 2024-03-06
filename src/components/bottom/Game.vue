<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Point from "@/components/bottom/Point.vue";

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
      <span class="ml-4 font-montserrat font-medium">Indovinate</span>
      <span class="mr-4 font-montserrat font-medium">0</span>
    </div>
    <div
      class="flex flex-row items-center mt-4 w-full"
      :style="{ width: width + 'px' }"
    >
      <Point flavor="correct" disabled><p>Corretto</p></Point>
      <span class="w-6" />
      <Point flavor="wrong" disabled>Sbagliato</Point>
    </div>
  </div>
</template>

<style scoped></style>
