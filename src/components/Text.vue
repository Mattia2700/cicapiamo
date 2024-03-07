<script setup lang="ts">
import { onMounted, ref } from "vue";

const lineHeight = ref("2.5em");

onMounted(() => {
  const slot = document.getElementById("text")!;
  if (slot.offsetHeight > 40) {
    lineHeight.value = "1.25em";
  }
});
</script>

<template>
  <div
    class="mt-6 text-left font-montserrat font-normal min-h-10 text-[16px] pl-2 border-l-4 border-l-[#e600fa] rounded-l-sm w-full"
    id="text"
    :style="{ 'line-height': lineHeight }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
