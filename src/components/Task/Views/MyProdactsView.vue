<template>
  <div>
    <h2>Список товаров</h2>

    <MyProdacts
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
    />
  </div>
</template>

<script>
import MyProdacts from "@/components/Task/MyProdacts.vue";

export default {
  name: "MyProdactsView",
  components: {
    MyProdacts
  },
  data() {
    return {
      products: [
        { id: 1, title: "Ноутбук", price: 50000 },
        { id: 2, title: "Смартфон", price: 30000 },
        { id: 3, title: "Планшет", price: 20000 }
      ]
    };
  }
}
</script>
