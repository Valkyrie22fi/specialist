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
  <!-- Задача 2 -->
   <h2>Список фруктов</h2>
    <MyList :items="fruits" />

    <h2>Список овощей</h2>
    <MyList :items="vegetables" />

    <h2>Список цветов</h2>
    <MyList :items="colors" />
</template>

<script>
import MyItem from "./MyItem.vue";
import MyList from "./MyList.vue";

export default {
  components: {
    MyItem,
    MyList
  },
  data() {
    return {
      fruits: ["Яблоко", "Банан", "Апельсин"],
      vegetables: ["Морковь", "Огурец", "Картофель"],
      colors: ["Красный", "Зелёный", "Синий"]
    };
  }
}
</script>
