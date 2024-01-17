<script setup lang="ts"></script>
import { RouterView } from "vue-router";
<template>
  <RouterView v-slot="{ Component }">
    <div class="mt-[5em] bg-[242424] p-1 text-white max-w-lg m-auto flex flex-col">
      <img class="flex" src="@/assets/it-title.svg" alt="Ci Capiamo" />
<!--      <h1-->
<!--        class="font-montserrat font-black text-[40px] leading-12.5 -rotate-4.5 inline-block font-outline-6"-->
<!--      >-->
<!--        Ci Capiamo-->
<!--      </h1>-->
<!--      <h1-->
<!--        class="font-montserrat font-black text-[40px] leading-12.5 -rotate-4.5 inline-block bg-gradient-to-r from-[#D300E5] to-[#EB00FF] bg-clip-text text-transparent"-->
<!--      >-->
<!--        Ci Capiamo-->
<!--      </h1>-->
      <Component :is="Component" />
    </div>
  </RouterView>
</template>

<style scoped></style>
