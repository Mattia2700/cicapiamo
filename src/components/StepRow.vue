<script setup lang="ts">

import Step from "@/components/Step.vue";
</script>

<template>
  <div class="justify-between items-stretch flex mt-[1.5em] relative">
    <img src="@/assets/dash.svg" alt="---" class="absolute mt-[0.725em] w-[90%] z-0">
    <Step :idx="1" :selected="true" />
    <Step :idx="2" :selected="false" />
    <Step :idx="3" :selected="false" />
  </div>
</template>

<style scoped>

</style>