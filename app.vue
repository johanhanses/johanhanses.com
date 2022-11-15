<script setup lang="ts">
useHead({
  title: 'Home',
  titleTemplate: (title: string) =>
    title ? `${title} - Johan Hanses` : 'Johan Hanses'
})
</script>

<template>
  <div
    class="bg-zinc-300 dark:bg-zinc-800 h-screen text-zinc-700 dark:text-zinc-300"
  >
    <Nav />
    <NuxtPage />
  </div>
</template>
