<script setup lang="ts">
const mailURL = 'mailto:johanhanses@gmail.com'
const linkedInURL = 'https://www.linkedin.com/in/johanhanses/'
const githubURL = 'https://github.com/johanhanses'
</script>

<template>
  <div class="flex space-x-4">
    <a
      :href="mailURL"
      target="_blank"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <Email />
    </a>

    <NuxtLink
      :to="linkedInURL"
      target="_blank"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <LinkedIn />
    </NuxtLink>

    <NuxtLink
      :to="githubURL"
      target="_blank"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <Github />
    </NuxtLink>
  </div>
</template>
