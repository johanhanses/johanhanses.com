<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="w-full">
    <div class="flex space-x-6 h-full text-lg items-center">
      <div class="mt-0.5 w-[32px]">
        <button
          v-if="colorMode.value === 'light'"
          aria-label="Set color mode to dark"
          class="hover:bg-zinc-200 px-4 py-1 rounded-md"
          @click="colorMode.preference = 'dark'"
        >
          <Sun />
        </button>
        <button
          v-if="colorMode.value === 'dark'"
          aria-label="Set color mode to light"
          class="hover:bg-zinc-700 px-4 py-1 rounded-md"
          @click="colorMode.preference = 'light'"
        >
          <Moon />
        </button>
      </div>
      <nav>
        <NuxtLink
          to="https://cv.johanhanses.com"
          target="_blank"
          class="hover:bg-zinc-200 hover:dark:bg-zinc-700 px-4 py-1 rounded-md transition-colors duration-300"
        >
          CV
        </NuxtLink>
      </nav>
    </div>
    <hr
      class="border border-dotted border-b-transparent border-x-transparent dark:border-zinc-300/10 border-zinc-800/10 my-6"
    >
  </header>
</template>
