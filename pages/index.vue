<script setup lang="ts">
const mailURL = 'mailto:johanhanses@gmail.com'
const linkedInURL = 'https://www.linkedin.com/in/johanhanses/'
const githubURL = 'https://github.com/johanhanses'
</script>

<template>
  <PageHeading>Johan Hanses</PageHeading>
  <Text>
    TypeScript/Frontend developer based in Falun, Sweden. Building HR-Tech at
    <NuxtLink
      to="https://worklygroup.com"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      Workly</NuxtLink
    >
    using TypeScript, Nextjs and React Native. Interested in Cloud/Platform
    engineering and very passionated/obsessed about Nuxt3 and all its new
    tooling, its server engine Nitro to mention something.
  </Text>

  <div class="flex space-x-4">
    <a
      :href="`mailto:${mailURL}`"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <Email />
    </a>

    <NuxtLink
      :to="linkedInURL"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <LinkedIn />
    </NuxtLink>

    <NuxtLink
      :to="githubURL"
      class="underline hover:text-zinc-900 hover:dark:text-zinc-100"
    >
      <Github />
    </NuxtLink>
  </div>
</template>
