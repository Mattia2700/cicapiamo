<script setup lang="ts">
import StepRow from "@/components/StepRow.vue";
import { RouterView, useRouter } from "vue-router";
import { computed } from "vue";
//import Pwa from "@/components/Pwa.vue";

//const isPWA = computed(() => {
//  return window.matchMedia("(display-mode: standalone)").matches;
//});
const currentRoute = computed(() => {
  if (router.currentRoute.value.name === "home") {
    return 1;
  } else if (router.currentRoute.value.name === "question" || router.currentRoute.value.name === "answer") {
    return 2;
  } else {
    return 3;
  }
});
//const playAnyway = ref(false);
const router = useRouter();

</script>
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-4 p-1 px-[1.5rem] text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo?" />
      <div>
        <StepRow :current_idx="currentRoute" />
        <Component :is="Component" />
      </div>
      <!--<div v-else>-->
        <!--<Pwa @play="playAnyway = true"/>-->
      <!--</div>-->
    </div>
  </RouterView>
</template>

<style scoped></style>
