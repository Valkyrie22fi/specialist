<script setup>
import { ref } from "vue";

const columns = ref(["Name", "Age", "Weight"]);

const data = ref([
  { name: "Иван", age: 25, weight: 70 },
  { name: "Анна", age: 30, weight: 60 },
  { name: "Пётр", age: 22, weight: 80 }
]);
</script>

<template>
  <table border="1" cellpadding="6">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col">
          {{ col }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="col in columns" :key="col">
          {{ item[col.toLowerCase()] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
