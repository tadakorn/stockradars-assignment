<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const route = useRoute()
const data = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  ref: ''
})
const errorMessage = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  ref: ''
})

function submitForm() {
  if (!data.value.firstName) {
    errorMessage.value.firstName = 'กรุณากรอกชื่อ'
  } else {
    errorMessage.value.firstName = ''
  }

  if (!data.value.lastName) {
    errorMessage.value.lastName = 'กรุณากรอกนามสกุล'
  } else {
    errorMessage.value.lastName = ''
  }

  if (!data.value.phoneNumber) {
    errorMessage.value.phoneNumber = 'กรุณากรอกเบอร์โทรศัพท์'
  } else if (!/^0[0-9]{8,9}$/.test(data.value.phoneNumber)) {
    errorMessage.value.phoneNumber = 'เบอร์โทรศัพท์ผิดรูปแบบ'
  } else {
    errorMessage.value.phoneNumber = ''
  }

  if (!data.value.email) {
    errorMessage.value.email = 'กรุณากรอกอีเมล'
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.value.email)) {
    errorMessage.value.email = 'อีเมลผิดรูปแบบ'
  } else {
    errorMessage.value.email = ''
  }

  if (!data.value.ref) {
    errorMessage.value.ref = 'กรุณากรอก Ref'
  } else {
    errorMessage.value.ref = ''
  }

  if (
    !errorMessage.value.firstName &&
    !errorMessage.value.lastName &&
    !errorMessage.value.phoneNumber &&
    !errorMessage.value.email &&
    !errorMessage.value.ref
  ) {
    Swal.fire('Success', 'Your info was sent', 'success')
    data.value.firstName = ''
    data.value.lastName = ''
    data.value.phoneNumber = ''
    data.value.email = ''
    data.value.ref = ''
  }
}

function initQueryParams() {
  data.value.firstName = route.query.first_name || ''
  data.value.lastName = route.query.last_name || ''
  data.value.phoneNumber = route.query.phone_number || ''
  data.value.email = route.query.email || ''
  data.value.ref = route.query.ref || ''
}

onMounted(() => {
  initQueryParams()
})
</script>

<template>
  <div class="row align-items-center justify-content-center mt-4">
    <div class="col-12 col-sm-8 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title text-center">Register</h3>
          <form class="mt-4" @submit.prevent="submitForm" novalidate>
            <div class="mb-3">
              <label for="inputFirstName" class="form-label">ชื่อ</label>
              <input
                type="text"
                class="form-control"
                id="inputFirstName"
                v-model="data.firstName"
                required
              />
              <small class="text-danger">{{ errorMessage.firstName }}</small>
            </div>
            <div class="mb-3">
              <label for="inputLastName" class="form-label">นามสกุล</label>
              <input
                type="text"
                class="form-control"
                id="inputLastName"
                v-model="data.lastName"
                required
              />
              <small class="text-danger">{{ errorMessage.lastName }}</small>
            </div>
            <div class="mb-3">
              <label for="inputPhone" class="form-label">เบอร์โทรศัพท์</label>
              <input
                type="text"
                class="form-control"
                id="inputPhone"
                v-model="data.phoneNumber"
                required
                maxlength="10"
              />
              <small class="text-danger">{{ errorMessage.phoneNumber }}</small>
            </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">อีเมล</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                v-model="data.email"
                required
              />
              <small class="text-danger">{{ errorMessage.email }}</small>
            </div>
            <div class="mb-3">
              <label for="inputRef" class="form-label">Ref</label>
              <input type="text" class="form-control" id="inputRef" v-model="data.ref" required />
              <small class="text-danger">{{ errorMessage.ref }}</small>
            </div>

            <button type="submit" class="btn mt-4 w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgb(30 41 59);
  color: rgb(203 213 225);
}
.btn {
  background: rgb(49, 177, 118);
  background: linear-gradient(
    90deg,
    rgba(49, 177, 118, 1) 0%,
    rgba(18, 108, 67, 1) 48%,
    rgba(27, 102, 67, 1) 100%
  );
  color: rgb(203 213 225);
  border: transparent;
}
</style>
