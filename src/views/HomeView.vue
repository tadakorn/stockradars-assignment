<script setup>
// import ShowChart from '../components/ShowChart.vue'
import DataList from '../components/DataList.vue'
import ShowModal from '../components/ShowModal.vue'
import DataFilter from '../components/DataFilter.vue'
import { onMounted } from 'vue'
import { useDataStore } from '../stores/data'

const store = useDataStore()

onMounted(() => {
  store.getData()
})
</script>

<template>
  <main>
    <div class="container my-4">
      <div class="row gap-4 align-items-center justify-content-between">
        <div class="col-12 col-md-4">
          <h1 class="text-white mb-0">ข้อมูลหุ้น</h1>
        </div>
        <DataFilter />
      </div>
      <DataList />
      <ShowModal />
    </div>
  </main>
</template>
