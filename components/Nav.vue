<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="w-full">
    <div class="flex space-x-6 h-full">
      <div class="pt-[1px]">
        <button
          v-if="colorMode.value === 'light'"
          @click="colorMode.preference = 'dark'"
        >
          <Moon />
        </button>
        <button
          v-else
          @click="colorMode.preference = 'light'"
        >
          <Sun />
        </button>
      </div>
      <nav>
        <NuxtLink
          to="https://cv.johanhanses.com"
          target="_blank"
          class="hover:underline hover:text-zinc-900 hover:dark:text-zinc-100 text-lg"
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
