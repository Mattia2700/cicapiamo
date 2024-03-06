<script setup lang="ts"></script>

<template>
  <div class="fixed flex flex-col items-center justify-center w-full">
    <slot />
  </div>
</template>

<style scoped>
div {
  bottom: 3.5rem;
}

@media (max-height: 800px) {
  div {
    bottom: 1rem;
  }
}
</style>
