<template>
  <table border="1">
    <!-- Именованный слот для заголовка -->
    <caption>
      <slot name="caption">Таблица студентов</slot>
    </caption>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in studentsData" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>
          <button @click="removeStudent(index)">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyStudentTable",
  props: {
    students: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // локальная копия, чтобы можно было удалять студентов
      studentsData: [...this.students]
    };
  },
  methods: {
    removeStudent(index) {
      const removedStudent = this.studentsData.splice(index, 1)[0];
      // Отправляем событие родителю с информацией об удаленном студенте
      this.$emit("student-removed", removedStudent);
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

th, td {
  padding: 8px;
  text-align: left;
}

button {
  padding: 4px 10px;
  cursor: pointer;
}
</style>
