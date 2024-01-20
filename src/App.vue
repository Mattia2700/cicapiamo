<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-[5em] p-1 px-[1rem] text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo" />
      <StepRow />
      <Component :is="Component" />
    </div>
  </RouterView>
</template>

<style scoped></style>
