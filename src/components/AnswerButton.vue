<script setup lang="ts">
const props = defineProps({
  disabled: Boolean,
});
</script>

<template>
  <img
    src="@/assets/locked.png"
    class="max-h-[230px] pt-[12px] pr-[6px]"
    alt="disabled"
    v-if="props.disabled"
  />
  <img
    class="max-h-[230px] active:pt-[20px] active:pr-[3px]"
    alt="active"
    v-else
  />
</template>

<style scoped>
img[alt="active"] {
  content: url("@/assets/active.png");
}

img[alt="active"]:active {
  content: url("@/assets/pressed.png");
}
</style>
