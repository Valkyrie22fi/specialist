<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFoundView"
};
</script>

<style scoped>
.not-found {
  padding: 20px;
  text-align: center;
}

.not-found h1 {
  font-size: 48px;
  margin-bottom: 10px;
}
</style>
