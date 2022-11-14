<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
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
</template>
