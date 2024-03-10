<script setup lang="ts">
const props = defineProps({
  disabled: Boolean,
});
</script>

<template>
  <!-- TODO: check why click not always detected on mobile -->
  <img
    src="@/assets/locked.png"
    class="max-h-[230px] mr-[6px]"
    alt="disabled"
    v-if="props.disabled"
  />
  <img class="max-h-[230px]" alt="active" v-else />
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
  margin-top: 44px;
  content: url("@/assets/active.png");
}

img[alt="active"]:active {
  margin-top: 64px;
  margin-right: 2px;
  content: url("@/assets/pressed.png");
}
</style>
