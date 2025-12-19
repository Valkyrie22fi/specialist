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

    <!-- Задача 3 -->
     <nav>
      <router-link
        v-for="route in menuRoutes"
        :key="route.path"
        :to="route.path"
        class="nav-link"
      >
        {{ route.title }}
      </router-link>
      <router-view />
    </nav>

    <!-- Задача 4 -->
    <div>
        <h2>Студенты</h2>
        <p>Удалено студентов: {{ removedCount }}</p>

        <MyStudentTable
            :students="students"
            @student-removed="onStudentRemoved"
        >
            <!-- Передаем caption через именованный слот -->
            <template #caption>
                Список студентов группы 101
            </template>
        </MyStudentTable>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
import MyList from "./MyList.vue";
import MyStudentTable from "./MyStudentTable.vue";


export default {
  components: {
    MyItem,
    MyList,
    MyStudentTable
  },
  data() {
    return {
      fruits: ["Яблоко", "Банан", "Апельсин"],
      vegetables: ["Морковь", "Огурец", "Картофель"],
      colors: ["Красный", "Зелёный", "Синий"],
      menuRoutes: [
        { path: "/", title: "Главная" },
        { path: "/products", title: "Товары" }
      ],
      removedCount: 0,
      students: [
        { id: 1, name: "Иван Иванов", age: 20 },
        { id: 2, name: "Мария Петрова", age: 19 },
        { id: 3, name: "Сергей Сидоров", age: 21 }
      ]
    };
  },
  methods: {
    onStudentRemoved(student) {
      this.removedCount++;
      console.log("Удален студент:", student);
    }
  }
}
</script>
<style>
nav {
  margin-bottom: 20px;
}

.nav-link {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}

.nav-link.router-link-active {
  font-weight: bold;
}
</style>
