import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('data', () => {
  const originalDataList = ref([])
  const dataList = ref([])
  const currentData = ref({})
  const currentFilter = ref('')

  function getData() {
    currentFilter.value = ''
    axios.get(' https://stockradars.co/assignment/data.php').then((res) => {
      originalDataList.value = [...res.data]
      dataList.value = [...res.data]
    })
  }

  function applyFilter() {
    let originalList = [...originalDataList.value]
    if (!currentFilter.value) {
      dataList.value = [...originalList]
    } else if (currentFilter.value == 'marketcap') {
      dataList.value = [...originalList.sort((a, b) => a.marketcap - b.marketcap)]
    } else if (currentFilter.value == '-marketcap') {
      dataList.value = [...originalList.sort((a, b) => b.marketcap - a.marketcap)]
    } else if (currentFilter.value == 'name') {
      dataList.value = [...originalList.sort((a, b) => a.N_name.localeCompare(b.N_name))]
    } else if (currentFilter.value == '-name') {
      dataList.value = [...originalList.sort((a, b) => b.N_name.localeCompare(a.N_name))]
    }
  }
  function formatNumber(num) {
    if (num == null) {
      return ''
    } else {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }

  return { dataList, currentData, currentFilter, getData, applyFilter, formatNumber }
})
