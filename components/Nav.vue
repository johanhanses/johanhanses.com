<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="w-full h-16">
    <div>
      <button
        v-if="colorMode.value === 'light'"
        @click="colorMode.preference = 'dark'"
      >
        Dark
      </button>
      <button
        v-else
        @click="colorMode.preference = 'light'"
      >
        Light
      </button>
    </div>
  </header>
</template>
