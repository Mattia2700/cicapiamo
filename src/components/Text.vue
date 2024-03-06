<script setup lang="ts"></script>

<template>
  <div
    class="mt-[1.5em] text-left font-montserrat font-normal leading-5 min-h-10 text-[16px] pl-2 border-l-4 border-l-[#e600fa] rounded-l-sm w-full"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  margin-top: 1.5em;
}

@media (max-height: 700px) {
  div {
    margin-top: 0;
  }
}
</style>
