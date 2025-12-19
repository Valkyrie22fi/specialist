<template>
  <table border="1">
    <caption>
      <slot name="caption" />
    </caption>

    <thead>
      <tr>
        <th>ID</th>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Действие</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>
          <MyButton @click="confirmRemove(student)">
            Удалить
          </MyButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import MyButton from './MyButton.vue'

defineProps({
  students: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['remove'])

const confirmRemove = (student) => {
  if (confirm(`Удалить студента ${student.name}?`)) {
    emit('remove', student)
  }
}
</script>
