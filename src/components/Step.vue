<script setup lang="ts">
  const props = defineProps({
    idx: Number,
    selected: Boolean,
  });
</script>

<template>
  <span class="text-xs z-10 font-semibold aspect-[2.9565217391304346] px-4 py-1.5 rounded-2xl"
        :class="selected ? 'bg-[#e600fa] text-black' : 'bg-[#1d1a22] text-[#605d66]'"
  >
    Step {{ props.idx }}
  </span>
</template>

<style scoped>

</style>