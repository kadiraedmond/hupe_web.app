<script setup>
import { useUserStore } from "@/store/user.js"
import { useAuthStore } from "@/store/auth.js"

import { onBeforeMount, onMounted, ref, reactive } from "vue"
import { useLocationStore } from '@/store/location.js' 

import router from '@/router/router.js'

const locationStore = useLocationStore()

const enAttente = ref({
  totalNumber: 0,
  totalPrice: 0
})
const valides = ref({
  totalNumber: 0,
  totalPrice: 0
})
const confirmees = ref({
  totalNumber: 0,
  totalPrice: 0
})
const annulees = ref({
  totalNumber: 0,
  totalPrice: 0
})
const reportees = ref({
  totalNumber: 0,
  totalPrice: 0
})
const utilisees = ref({
  totalNumber: 0,
  totalPrice: 0
})
const en_report = ref({
  totalNumber: 0,
  totalPrice: 0
})

const updateReservationsDashboard = (datas) => {
  datas.forEach(data => {
    if(data.status == 'En attente') {
      enAttente.value.totalNumber++
      enAttente.value.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Validé') {
      valides.value.totalNumber++
      valides.value.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Confirmé') {
      confirmees.value.totalNumber++
      confirmees.value.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Annuler') {
      annulees.value.totalNumber++
      annulees.value.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Reporté') {
      reportees.value.totalNumber++
      reportees.value.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Utilisé') {
      utilisees.value.totalNumber++
      utilisees.value.totalPrice += Number(data.montant)
    } 

    else if(data.status == 'En report') {
      en_report.value.totalNumber++
      en_report.value.totalPrice += Number(data.montant)
    }
  })
}

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'Pxr3ZohT9Y6vOztEeNhf' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  enAttente.value.totalNumber = 0
  enAttente.value.totalPrice = 0

  valides.value.totalNumber = 0 
  valides.value.totalPrice = 0 

  confirmees.value.totalNumber = 0 
  confirmees.value.totalPrice = 0 

  annulees.value.totalNumber = 0 
  annulees.value.totalPrice = 0 

  reportees.value.totalNumber = 0 
  reportees.value.totalPrice = 0 
  
  utilisees.value.totalNumber = 0
  utilisees.value.totalPrice = 0 

  en_report.value.totalNumber = 0
  en_report.value.totalPrice = 0 

  await locationStore.setUserLocations(userId) 
  updateReservationsDashboard(locationStore.userLocations)
})

onMounted(() => {
  window.scrollTo(0, 0)
}) 

const goTo_attente = async () => {
  await router.push(`/location_de_vehicule/${`en-attente`}`) 
  window.location.reload() 
}
const goTo_valide = async () => {
  await router.push(`/location_de_vehicule/${`valide`}`) 
  window.location.reload() 
}
const goTo_annule = async () => {
  await router.push(`/location_de_vehicule/${`annule`}`) 
  window.location.reload() 
}
const goTo_confirme = async () => {
  await router.push(`/location_de_vehicule/${`confirme`}`) 
  window.location.reload() 
}
const goTo_utilise = async () => {
  await router.push(`/location_de_vehicule/${`utilise`}`) 
  window.location.reload() 
}
const goTo_reporte = async () => {
  await router.push(`/location_de_vehicule/${`reporte`}`) 
  window.location.reload() 
}
const goTo_attente_de_report = async () => {
  await router.push(`/location_de_vehicule/${`en-attente-de-report`}`) 
  window.location.reload() 
}

</script>

<template>
  <div class="col-md-6 " style="border-right: 2px solid #eee;
    border-bottom: 2px solid #eee;
    margin: -1px; padding: 12px;">
    <div class="row mb-3">
      <div class="col-md-6">
        <div
          class="card h-100 border-0 text-center"
          style="background: #f6f8fb"
        >
          <router-link to="/" class="mt-4">
            <img
              src="/assets/img/service/car.png"
              class="img-fluid w-25"
              alt="..."
            />
          </router-link>

          <div class="card-body">
            <h5 class="card-title" style="font-size: 17px">
              Location de voiture
            </h5>
            <p class="card-text" style="font-size: 14px">
              Découvrez le confort, la flexibilité et l'aventure avec Hupe.
            </p>
          </div>
        </div>
         
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
          <router-link @click="goTo_attente" to="">
            <boutton
              class="btn btn-primary w-100"
              style="background: #62bfc4; border-color: #62bfc4"
            >
              <div class="row text-black">
                <div class="col-10 text-start">
                  <i class="bx bx-time"></i> En attente
                </div>
                <div class="col-2">{{ enAttente.totalNumber }}</div>
              </div>
            </boutton>
          </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link @click="goTo_valide" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background:  #bbded8; border-color: #bbded8"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-check-circle"></i> Validé
                  </div>
                  
                  <div class="col-2">{{ valides.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link @click="goTo_annule" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background: #f9f9f9; border-color: #f9f9f9"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-x-circle"></i> Annulé
                  </div>
                 
                  <div class="col-2">{{ annulees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link @click="goTo_confirme" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background: #bbded8; border-color:#bbded8"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-check-square"></i> Confirmé
                  </div>
                 
                  <div class="col-2">{{ confirmees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link @click="goTo_utilise" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background: #f9f9f9; border-color: #f9f9f9"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-check-circle"></i>  Utilisé
                  </div>
                   
                  <div class="col-2">{{ utilisees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link @click="goTo_reporte" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background:#bbded8; border-color:#bbded8"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-reset"></i> Reporté
                  </div>
                  
                  <div class="col-2">{{ reportees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>

          <div class="col-md-12 mt-2"> 
            <router-link @click="goTo_attente_de_report" to="">
              <boutton
                class="btn btn-primary w-100"
                style="background: #f8e4dd; ; border-color:#f8e4dd; "
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-error-alt"></i>  En attente de report
                  </div>
                  
                  <div class="col-2">{{ en_report.totalNumber }}</div>
                </div>
              </boutton> 
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
