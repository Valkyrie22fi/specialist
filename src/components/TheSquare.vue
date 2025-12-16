<template>
  <div class="rectangle">
    <h2>Площадь прямоугольника</h2>

    <label>
      Сторона A:
      <input type="number" v-model.number="sideA">
    </label>

    <br><br>

    <label>
      Сторона B:
      <input type="number" v-model.number="sideB">
    </label>

    <br><br>

    <p>Площадь: <strong>{{ area }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'RectangleArea',

  data() {
    return {
      sideA: 0,
      sideB: 0,
      area: 0
    }
  },

  watch: {
    sideA() {
      this.updateArea()
    },
    sideB() {
      this.updateArea()
    }
  },

  methods: {
    updateArea() {
      this.area = this.sideA * this.sideB
    }
  }
}
</script>

<style scoped>
.rectangle {
  max-width: 300px;
  padding: 15px;
  border: 1px solid #ccc;
}
</style>
