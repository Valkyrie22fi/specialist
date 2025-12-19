<template>
  <div class="home">
    <h1>Главная страница</h1>
    <p>
      Используйте навигационное меню, чтобы перейти к списку товаров.
    </p>
    <!-- Кнопка для перехода на страницу контактов -->
    <button @click="goToContacts">Перейти на контакты</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToContacts() {
      // программная навигация через Vue Router
      this.$router.push({ name: "Contacts" });
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.home h1 {
  margin-bottom: 10px;
}

.home p {
  font-size: 16px;
}

button {
  padding: 8px 15px;
  margin-top: 15px;
  cursor: pointer;
}

</style>
