<script setup lang="ts">
import Step from "@/components/Step.vue";

const props = defineProps<{
  current_idx: number;
}>();
</script>

<template>
  <div class="justify-between items-stretch flex mt-[1.5rem] relative">
    <img
      src="@/assets/dash.svg"
      alt="---"
      class="absolute mt-[0.725em] w-[100%] z-0"
    />
    <Step :idx="1" :selected="props.current_idx === 1" />
    <Step :idx="2" :selected="props.current_idx === 2" />
    <Step :idx="3" :selected="props.current_idx === 3" />
  </div>
</template>

<style scoped></style>
