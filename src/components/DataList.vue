<script setup>
import { useDataStore } from '../stores/data'

const store = useDataStore()
</script>
<template>
  <div class="row my-2 g-4">
    <div class="col-12 col-sm-6 col-lg-4" v-for="item in store.dataList" :key="item">
      <a
        href="#"
        class="text-decoration-none"
        data-bs-toggle="modal"
        data-bs-target="#infoModal"
        @click="store.currentData = item"
      >
        <div class="card border-0 p-3 h-100">
          <div class="card-body">
            <div>
              <span class="title mb-2 py-1 px-3 rounded">
                {{ item.N_name }}
              </span>
            </div>
            <p class="card-title mt-3" style="font-weight: 500">
              {{ item.N_COMPANY_T }}
            </p>
            <p class="card-text">
              มูลค่า :
              <span class="market">{{ store.formatNumber(item.marketcap) || ' - ' }} บาท</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  background-color: rgb(30 41 59);
  color: rgb(203 213 225);
  font-size: 15px;
}

.title {
  background: rgb(49, 177, 118);
  background: linear-gradient(
    90deg,
    rgba(49, 177, 118, 1) 0%,
    rgba(18, 108, 67, 1) 48%,
    rgba(27, 102, 67, 1) 100%
  );
  color: rgb(203 213 225);
  font-size: 15px;
}

.market {
  color: rgb(148 163 184);
}
</style>
