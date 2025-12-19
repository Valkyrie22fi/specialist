<template>
  <div class="product">
    <h3>{{ title }}</h3>
    <p>Цена: {{ price }} ₽</p>
  </div>
</template>

<script>
export default {
  name: "MyProdacts",
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
