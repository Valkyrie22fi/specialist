<template>
  <div class="my-list">
    <input
      v-model="search"
      type="text"
      placeholder="Введите для фильтрации"
    />

    <ul>
      <li
        v-for="item in filteredList"
        :key="item.id"
        @click="selectItem(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select'])

const search = ref('')
const debouncedSearch = ref('')

let timeout
watch(search, (value) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    debouncedSearch.value = value
  }, 300)
})

const filteredList = computed(() => {
  return props.items.filter(item =>
    item.title.toLowerCase().includes(
      debouncedSearch.value.toLowerCase()
    )
  )
})

const selectItem = (item) => {
  emit('select', item)
}
</script>

<style scoped>
.my-list {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 6px;
  margin-bottom: 8px;
}

li {
  cursor: pointer;
}

li:hover {
  background: #f0f0f0;
}
</style>
