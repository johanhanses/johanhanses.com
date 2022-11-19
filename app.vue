<script setup lang="ts">
useHead({
  title: 'Home',
  titleTemplate: title => (title ? `${title} - Johan Hanses` : 'Johan Hanses'),
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Home of Johan Hanses, TypeScripter.' },
    { property: 'og:description', content: 'Home of Johan Hanses, TypeScripter.' },
  ],
})
</script>

<template>
  <div
    class="bg-gradient-to-tr dark:from-zinc-900 dark:to-zinc-800 from-zinc-200 to-zinc-100 min-h-screen text-zinc-700 dark:text-zinc-300 px-2 md:px-6 font-karla tracking-wide"
  >
    <section class="2xl:max-w-7xl mx-auto">
      <div class="relative max-w-3xl p-4 py-24 sm:p-20 lg:p-28">
        <Nav />
        <main>
          <NuxtPage />
        </main>
        <footer class="text-zinc-400 dark:text-zinc-700 text-sm absolute bottom-0">
          Built using Nuxt 3, TypeScript and Vercel
        </footer>
      </div>
    </section>
  </div>
</template>
