<script setup>
import { useReservationStore } from "@/store/reservation.js"
import { useAuthStore } from "@/store/auth.js"

import { onBeforeMount, onMounted, ref, reactive } from "vue";


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
  })
}

const reservationStore = useReservationStore();
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  reservationStore.setUserReservations(userId) 

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

  updateReservationsDashboard(reservationStore.userReservations)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <div class="col-md-6 " style="
    border-bottom: 2px solid #eee;
    margin: -1px; padding: 12px;">
    <div class="row">
      <div class="col-md-6">
        <div
          class="card h-100 border-0 text-center"
          style="background: #f6f8fb"
        >
          <router-link to="/reservation_de_ticket" class="mt-4">
            <img
              src="/assets/img/service/bus.png"
              class="img-fluid w-25"
              alt="..."
            />
          </router-link>

          <div class="card-body">
            <h5 class="card-title" style="font-size: 17px">
              Réservation de ticket
            </h5>
            <p class="card-text" style="font-size: 14px">
              Embarquez pour l'aventure avec nos réservations de bus.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="`/reservation_de_ticket/${`en-attente`}`">
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
            <router-link :to="`/reservation_de_ticket/${`valide`}`">
              <boutton
                class="btn btn-primary w-100"
                style="background: #bbded8; border-color: #bbded8"
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
            <router-link :to="`/reservation_de_ticket/${`annule`}`">
              <boutton
                class="btn btn-primary w-100"
                style="background: #f9f9f9; border-color: #f9f9f9"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-x-circle"></i>  Annulé
                  </div>
                  
                  <div class="col-2">{{ annulees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link :to="`/reservation_de_ticket/${`confirme`}`">
              <boutton
                class="btn btn-primary w-100"
                style="background: #bbded8; border-color: #bbded8"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-check-square"></i>  Confirmé
                  </div>
                  
                  <div class="col-2">{{ confirmees.totalNumber }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link :to="`/reservation_de_ticket/${`utilise`}`">
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
            <router-link :to="`/reservation_de_ticket/${`en-attente-de-report`}`">
              <boutton
                class="btn btn-primary w-100"
                style="background: #bbded8; border-color: #bbded8"
              >
                <div class="row text-black">
                  <div class="col-10 text-start">
                    <i class="bx bx-error-alt"></i> En attente de report
                  </div>
                
                  <div class="col-2">{{ 0 }}</div>
                </div>
              </boutton>
            </router-link>
          </div>
          <div class="col-md-12 mt-2">
            <router-link :to="`/reservation_de_ticket/${`reporte`}`">
              <boutton
                class="btn btn-primary w-100"
                style="background: #f8e4dd; border-color: #f8e4dd"
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
        </div>
      </div>
    </div>
  </div>
   
</template>
