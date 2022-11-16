<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="w-full">
    <div>
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
    <hr
      class="border border-dotted border-b-transparent border-x-transparent border-zinc-300/10 my-6"
    />
  </header>
</template>
