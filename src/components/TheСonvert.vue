<template>
  <div>
    <h3>Конвертер °F → °C</h3>

    <input type="number" v-model.number="fahrenheit" @input="convert" />

    <p>Результат в °C: <strong>{{ celsius }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fahrenheit: 0,
      celsius: 0
    };
  },
  methods: {
    convert() {
      this.celsius = ((this.fahrenheit - 32) / 1.8).toFixed(2);
    }
  }
};
</script>