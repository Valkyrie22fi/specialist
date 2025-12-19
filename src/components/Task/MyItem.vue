<template>
  <li class="item">
    <!-- Именованный слот -->
    <slot name="title"></slot>
  </li>
</template>

<script>
export default {
  name: "MyItem"
}
</script>

<style scoped>
.item {
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 4px;
}
</style>
