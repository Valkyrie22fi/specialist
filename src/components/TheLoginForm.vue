<template>
  <div class="login-form">
    <!-- Форма входа -->
    <form v-if="!isSuccess" @submit.prevent="login">
      <div>
        <label>Логин:</label>
        <input type="text" v-model.trim="loginValue">
      </div>

      <div>
        <label>Пароль:</label>
        <input type="password" v-model.trim="passwordValue">
      </div>

      <button type="submit">Вход</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>

    <!-- Сообщение об успешном входе -->
    <p v-else class="success">
      Выполнен успешный вход в систему ({{ loginValue }})!
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loginValue = ref('')
const passwordValue = ref('')
const error = ref('')
const isSuccess = ref(false)

const login = () => {
  error.value = ''

  if (!loginValue.value || !passwordValue.value) {
    error.value = 'Логин и пароль должны быть заполнены'
    return
  }

  isSuccess.value = true
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
}

.login-form div {
  margin-bottom: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  font-weight: bold;
}
</style>
