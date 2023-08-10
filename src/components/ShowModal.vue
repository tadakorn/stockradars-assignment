<script setup>
import { useDataStore } from '../stores/data'

const store = useDataStore()
</script>
<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="infoModal"
    tabindex="-1"
    aria-labelledby="infoModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content card-style">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="infoModalLabel">
            Data : {{ store.currentData.N_name }}
          </h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p style="font-weight: 500">
            ชื่อย่อภาษาอังกฤษ : <span class="market">{{ store.currentData.N_name || ' - ' }}</span>
          </p>
          <p style="font-weight: 500">
            ชื่อย่อภาษาไทย :
            <span class="market">{{ store.currentData.N_shortname || ' - ' }}</span>
          </p>
          <p>
            มูลค่า : <span class="market">{{ store.currentData.marketcap || ' - ' }}</span>
          </p>
          <p style="font-weight: 500">
            ชื่อบริษัท TH :
            <span class="market">
              {{ store.currentData.N_COMPANY_T || ' - ' }}
            </span>
          </p>
          <p style="font-weight: 500">
            ชื่อบริษัท EN :
            <span class="market">
              {{ store.currentData.N_COMPANY_E || ' - ' }}
            </span>
          </p>
          <p style="font-weight: 500">
            ลิงก์ : <span class="market"> {{ store.currentData.N_URL || ' - ' }} </span>
          </p>

          <p style="font-weight: 500">
            Type :
            <span class="market">
              {{ store.currentData.F_TYPE || ' - ' }}
            </span>
          </p>
          <p style="font-weight: 500">
            Business type :
            <span class="market">
              {{ store.currentData.N_BUSINESS_TYPE_E || ' - ' }}
            </span>
          </p>
          <p style="font-weight: 500">
            การแบ่งประเภทธุรกิจ :
            <span class="market">
              {{ store.currentData.N_BUSINESS_TYPE_T || ' - ' }}
            </span>
          </p>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-style {
  background-color: rgb(30 41 59);
  color: rgb(203 213 225);
}
.market {
  color: rgb(148 163 184);
}
</style>
