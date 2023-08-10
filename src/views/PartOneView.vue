<script setup>
import { onMounted } from 'vue'
import { useDataStore } from '../stores/data'

import DataList from '../components/DataList.vue'
import DataModal from '../components/DataModal.vue'
import DataFilter from '../components/DataFilter.vue'

const store = useDataStore()

onMounted(() => {
  store.getData()
})
</script>

<template>
  <DataFilter />
  <DataList />
  <DataModal />
</template>
