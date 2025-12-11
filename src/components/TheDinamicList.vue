<script setup>
import { ref } from "vue";

// массив объектов — реактивная модель данных
const options = ref([
  { id: 1, label: "Красный",  value: "red" },
  { id: 2, label: "Зелёный", value: "green" },
  { id: 3, label: "Синий",   value: "blue" }
]);

// выбранное значение
const selectedOption = ref("");
</script>
<template>
  <div style="font-family: Arial; max-width: 300px;">
    <h3>Динамический список опций</h3>

    <select v-model="selectedOption">
      <option 
        v-for="item in options"
        :key="item.id"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <p>Вы выбрали: <strong>{{ selectedOption }}</strong></p>
  </div>
</template>


