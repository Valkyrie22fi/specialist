<template>
  <table class="u-table">
    <thead>
      <tr>
        <th v-for="(col, index) in columns" :key="index">
          {{ col }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(company, index) in companies" :key="company.inn">
        <td>{{ index + 1 }}</td>
        <td>{{ company.name }}</td>
        <td>{{ company.inn }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'u-list',

  props: {
    columns: {
      type: Array,
      required: true
    },
    companies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.u-table {
  width: 100%;
  border-collapse: collapse;
}

.u-table th,
.u-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.u-table th {
  background-color: #f5f5f5;
  color: #000;
}
</style>
