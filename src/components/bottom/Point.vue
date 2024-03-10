<script setup lang="ts">
const props = defineProps<{
  flavor: "correct" | "wrong";
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (event: "click"): void;
}>();
</script>

<template>
  <!-- TODO: add shadow -->
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
            color: props.flavor === 'correct' ? '#003324' : '#330712',
            backgroundColor: props.flavor === 'correct' ? '#00dd9b' : '#e93173',
          }
    "
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped></style>
