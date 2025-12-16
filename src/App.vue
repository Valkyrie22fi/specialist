<script setup>
  import { ref } from 'vue'

import TheTable from './components/TheTable.vue'
import TheСonvert from './components/TheСonvert.vue'
import TheMatrix from './components/TheMatrix.vue'
import TheDinamicList from './components/TheDinamicList.vue';
import TheSquare from './components/TheSquare.vue';
import TheStudentsList from './components/TheStudentsList.vue';
import TheList from './components/TheList.vue';
import TheLoginForm from './components/TheLoginForm.vue';

const tableColumns = ref([
  '№',
  'Название компании',
  'ИНН'
])

const companies = ref([
  { name: 'ООО Ромашка', inn: '7701234567' },
  { name: 'АО Вектор', inn: '7812345678' },
  { name: 'ИП Иванов', inn: '5009876543' }
])
</script>

<template>
  <div class="wrapper">
    <TheTable />
    <TheСonvert />
    <TheMatrix />
    <TheDinamicList />
    <TheSquare />
    <TheStudentsList />
    <h2>Список компаний</h2>
    <TheList
      :columns="tableColumns"
      :companies="companies"
    />
    <TheLoginForm />
  </div>
</template>


<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
</style>