<script setup lang="ts">
const props = defineProps({
  disabled: Boolean,
});
</script>

<template>
  <!-- TODO: check why click not always detected on mobile -->
  <img
    src="@/assets/locked.png"
    class="max-h-[230px] pr-[6px]"
    alt="disabled"
    v-if="props.disabled"
  />
  <img
    class="max-h-[230px] active:pt-[8px] active:pr-[3px]"
    alt="active"
    v-else
  />
</template>

<style scoped>
img {
  margin-top: 55px;
}
@media (max-height: 740px) {
  img {
    margin-top: 0;
  }
}

img[alt="active"] {
  content: url("@/assets/active.png");
}

img[alt="active"]:active {
  content: url("@/assets/pressed.png");
}
</style>
