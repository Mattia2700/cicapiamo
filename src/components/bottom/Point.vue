<script setup lang="ts">
const props = defineProps<{
  flavor: "correct" | "wrong";
  disabled?: boolean;
}>();
</script>

<template>
  <button
    class="h-[3.5rem] w-full rounded-2xl leading-[3.25rem] font-montserrat font-semibold text-[18px] uppercase"
    :style="
      props.disabled
        ? {
            color: props.flavor === 'correct' ? '#003324' : '#330712',
            backgroundColor: props.flavor === 'correct' ? '#2e7b64' : '#8e223c',
            cursor: 'not-allowed',
          }
        : {
            backgroundColor: props.flavor === 'correct' ? '#00ff00' : '#ff0000',
          }
    "
  >
    <slot />
  </button>
</template>

<style scoped></style>
