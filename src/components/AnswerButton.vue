<script setup lang="ts"></script>

<template>
  <div class="flex flex-col relative">
    <span
      id="border"
      class="h-40 w-40 absolute top-2 rounded-full bg-[#b300c2]"
    ></span>
    <span
      id="bottom"
      class="h-40 w-[166px] absolute top-5 rounded-full bg-[#690083]"
    ></span>
    <span id="bottom" class="top-20 h-7 w-[166px] absolute bg-[#690083]"></span>
    <span
      id="border"
      class="h-40 w-40 z-0 bg-white hover:mt-2 rounded-full flex items-center justify-center bg-gradient-to-b from-[#e600fa] to-[#b300c2]"
    >
      <p class="font-montserrat font-extrabold leading-5 uppercase text-[20px]">
        Rispondi
      </p>
    </span>
  </div>
</template>

<style scoped>
p {
  color: transparent;
  text-shadow:
    0 -1px 1px #690083,
    0 0 0 black,
    0 -1px 1px black;
}

#border {
  box-shadow:
    1px 0 6px #b800c9,
    1px 0 6px #b800c9,
    0 1px 6px #b800c9,
    0 1px 6px #b800c9;
  transform: rotateX(30deg);
}

#bottom {
  transform: rotateX(30deg) translateX(-3px);
}
</style>
