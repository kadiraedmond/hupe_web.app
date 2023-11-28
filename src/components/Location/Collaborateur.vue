<script setup>
import { useScannerStore } from '@/store/scanner.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from 'vue'

const scannerStore = useScannerStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  scannerStore.setCompanyScanners(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="row mt-5">
    <div v-if="scannerStore.companyScanners.length > 0">
      <div class="col-md-6" v-for="(scanner, index) in scannerStore.companyScanners" :key="index">
      <div
        class="card mb-3 border-0"
        style="
          max-width: 540px;
          background: #f6f8fb;
          padding: 16px;
          border-radius: 5px;
        "
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/assets/img/avatars/1.png"
              alt=""
              class="w-px-40 h-auto rounded-circle"
              style="width: 140px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ scanner.nom }} {{ scanner.prenom }}</h5>
              <p class="card-text">+000 0000000000</p>
              <p class="card-text">
                <small class="text-muted">loren ipsun dalor</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-100" v-else>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <!-- <div class="card text-center border-0"> -->
              <div class="text-center">
                <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
              </div>
              
              <div class="card-body">
                <p class="card-text">Aucun collaborateur disponible</p>
              </div>
          </div>
   
        <div class="col-md-3"></div>
      </div>
    </div>
    
  </div>
</template>
