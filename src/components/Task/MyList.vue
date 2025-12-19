<template>
  <ul class="my-list">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.my-list {
  margin: 10px 0;
  padding: 0;
  list-style: none;
}

.my-list li {
  padding: 6px;
  border-bottom: 1px solid #ddd;
}
</style>
