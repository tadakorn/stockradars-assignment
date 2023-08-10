<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6">
        <ul class="nav nav-pills nav-justified mb-3 justify-content-center">
          <li class="nav-item">
            <router-link
              to="/part-1"
              class="nav-link text-white"
              :class="route.name == 'part-1' ? 'active' : ''"
              >Part I</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/part-2"
              class="nav-link text-white"
              :class="route.name == 'part-2' ? 'active' : ''"
              >Part II</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.active {
  background-color: rgb(30 41 59) !important;
}
</style>
