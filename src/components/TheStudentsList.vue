<template>
  <div class="students">

    <h2>Добавление студента</h2>

    <form @submit.prevent="addStudent">
      <div>
        <label>Фамилия:</label>
        <input type="text" v-model.trim="student.lastName">
      </div>

      <div>
        <label>Имя:</label>
        <input type="text" v-model.trim="student.firstName">
      </div>

      <div>
        <label>Возраст:</label>
        <input type="number" v-model.number="student.age">
      </div>

      <div>
        <label>Средний балл:</label>
        <input type="number" step="0.1" v-model.number="student.grade">
      </div>

      <button type="submit">Добавить</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>

    <h2>Список студентов</h2>

    <table v-if="students.length">
      <thead>
        <tr>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Средний балл</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(s, index) in students" :key="index">
          <td>{{ s.lastName }}</td>
          <td>{{ s.firstName }}</td>
          <td>{{ s.age }}</td>
          <td>{{ s.grade }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3"><strong>Средний балл по группе</strong></td>
          <td><strong>{{ averageGrade }}</strong></td>
        </tr>
      </tfoot>
    </table>

    <p v-else>Студенты отсутствуют</p>

  </div>
</template>

<script>
export default {
  name: 'StudentsTable',

  data() {
    return {
      student: {
        lastName: '',
        firstName: '',
        age: null,
        grade: null
      },
      students: [],
      error: ''
    }
  },

  computed: {
    averageGrade() {
      if (this.students.length === 0) return 0
      const sum = this.students.reduce((acc, s) => acc + s.grade, 0)
      return (sum / this.students.length).toFixed(2)
    }
  },

  methods: {
    addStudent() {
      this.error = ''

      if (!this.student.lastName || !this.student.firstName) {
        this.error = 'Введите имя и фамилию'
        return
      }

      if (this.student.age <= 0) {
        this.error = 'Возраст должен быть положительным числом'
        return
      }

      if (this.student.grade < 1 || this.student.grade > 5) {
        this.error = 'Средний балл должен быть в диапазоне от 1 до 5'
        return
      }

      this.students.push({ ...this.student })

      this.student.lastName = ''
      this.student.firstName = ''
      this.student.age = null
      this.student.grade = null
    }
  }
}
</script>

<style scoped>
.students {
  max-width: 600px;
}

form div {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
