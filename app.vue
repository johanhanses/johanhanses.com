<script setup lang="ts">
useHead({
  title: 'Home',
  titleTemplate: (title: string) =>
    title ? `${title} - Johan Hanses` : 'Johan Hanses'
})
</script>

<template>
  <div
    class="bg-gradient-to-tr dark:from-zinc-800 dark:to-zinc-700 from-zinc-200 to-zinc-100 h-screen text-zinc-700 dark:text-zinc-300 p-6 font-karla"
  >
    <section class="2xl:max-w-7xl mx-auto">
      <div class="relative max-w-3xl p-4 py-24 sm:p-20 lg:p-28">
        <Nav />
        <main>
          <NuxtPage />
        </main>
      </div>
    </section>
  </div>
</template>
