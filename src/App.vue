<script setup lang="ts"></script>
import { RouterView } from "vue-router";
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-4 bg-[242424] text-white p-4 max-w-lg m-auto">
      <h1 class="text-4xl rounded bg-red-600 p-2 font-bold text-white">Ci Capiamo?</h1>
      <Component :is="Component" />
    </div>
  </RouterView>
</template>

<style scoped></style>
