<template>
  <div style="font-family: Arial; max-width: 300px;">
    <h3>Матрица N×N</h3>

    <table border="1" cellpadding="8" cellspacing="0">
      <tr v-for="(row, rIndex) in matrix" :key="rIndex">
        <td
          v-for="(value, cIndex) in row"
          :key="cIndex"
          :style="{ 
            fontWeight: value >= 0 && value % 2 === 0 ? 'bold' : 'normal',
            textAlign: 'center',
            width: '40px',
            height: '30px'
          }"
        >
          <!-- Если число отрицательное — показываем пустую ячейку -->
          {{ value < 0 ? '' : value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

// пример N = 4
const N = 4;

// исходная матрица NxN — реактивная
const matrix = ref([
  [ 1,  2, -3,  4],
  [-5,  6,  7,  8],
  [ 9, -10, 11, 12],
  [13, 14, 15, -16]
]);
</script>
