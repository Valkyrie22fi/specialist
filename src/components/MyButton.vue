<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(['click'])
</script>

<style scoped>
button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
