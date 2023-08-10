<script setup>
import { useDataStore } from '../stores/data'

const store = useDataStore()
</script>
<template>
  <div class="col-12 col-md-4">
    <div class="d-flex gap-2 align-items-center">
      <div class="market text-nowrap">Sort by</div>
      <select
        class="form-select"
        aria-label="example"
        v-model="store.currentFilter"
        @change="store.applyFilter()"
      >
        <option value="">Default</option>
        <option value="marketcap">Marketcap Ascending</option>
        <option value="-marketcap">Marketcap Descending</option>
        <option value="name">Name Ascending</option>
        <option value="-name">Name Descending</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.market {
  color: rgb(148 163 184);
}
</style>
