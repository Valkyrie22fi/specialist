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
import MyList from './components/MyList.vue';

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

const fruits = [
  { id: 1, title: 'Яблоко' },
  { id: 2, title: 'Банан' },
  { id: 3, title: 'Апельсин' }
]

const countries = [
  { id: 1, title: 'Россия' },
  { id: 2, title: 'Германия' },
  { id: 3, title: 'Япония' }
]

const onSelect = (item) => {
  console.log('Выбран элемент:', item)
}
</script>

<template>
  <div class="wrapper">
    <h2>Фрукты</h2>
    <MyList :items="fruits" @select="onSelect" />

    <h2>Страны</h2>
    <MyList :items="countries" @select="onSelect" />
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