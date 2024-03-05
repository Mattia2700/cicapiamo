<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

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
  <button
    class="text-black text-base font-semibold font-montserrat bg-white uppercase py-4 shadow-sm rounded-2xl max-w-[32rem]"
    :style="{ width: width + 'px' }"
  >
    <slot />
  </button>
</template>

<style scoped></style>
