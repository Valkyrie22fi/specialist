<template>
    <!-- Задача 1 -->
  <ul>
    <my-item>
      <template #title>
        Первый элемент
      </template>
    </my-item>

    <my-item>
      <template #title>
        Второй элемент
      </template>
    </my-item>

    <my-item>
      <template v-slot:title>
        Третий элемент
      </template>
    </my-item>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  components: {
    MyItem
  }
}
</script>
