<script setup>
import TheTable from './components/TheTable.vue'
import TheСonvert from './components/TheСonvert.vue'
import TheMatrix from './components/TheMatrix.vue'
import TheDinamicList from './components/TheDinamicList.vue';
</script>

<template>
  <div class="wrapper">
    <TheTable />
    <TheСonvert />
    <TheMatrix />
    <TheDinamicList />
  </div>
</template>


<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
</style>