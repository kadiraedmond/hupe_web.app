<script setup>
import { useUserStore } from "@/store/user.js"
import { useAuthStore } from "@/store/auth.js"

import { onBeforeMount, onMounted, reactive } from "vue";


let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0
})

const updateReservationsDashboard = (data) => {
  data.forEach(data => {
    if(data.status == 'En attente') {
      enAttente.totalNumber++
      enAttente.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Validé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Confirmé') {
      confirmees.totalNumber++
      confirmees.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Annuler') {
      annulees.totalNumber++
      annulees.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Reporté') {
      reportees.totalNumber++
      reportees.totalPrice += Number(data.montant)
    }
    
    else if(data.status == 'Utilisé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(data.montant)
    }
  })
}

const userStore = useUserStore();
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  await userStore.setReservationTickets(userId)

  updateReservationsDashboard(userStore.reservationTickets)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <div class="col-md-6">
    <div class="row">
      <div class="col-md-6">
        <div
          class="card h-100 border-0 text-center"
          style="background: #f6f8fb"
        >
          <router-link to="/" class="mt-4">
            <img
              src="/public/assets/img/bus.png"
              class="img-fluid w-25"
              alt="..."
            />
          </router-link>

          <div class="card-body">
            <h5 class="card-title" style="font-size: 17px">
              Réservation de ticket
            </h5>
            <p class="card-text" style="font-size: 14px">
              Évitez les files d'attente et réservez vos billets de bus en
              quelques instants.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <boutton
              class="btn btn-primary w-100"
              style="background: #f77f00; border-color: #f77f00"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-time"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">En attente</div>
                <div class="col-2">{{ enAttente.totalNumber }}</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #219935; border-color: #219935"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Validé</div>
                <div class="col-2">{{ valides.totalNumber }}</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: red; border-color: red"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-x-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Annulé</div>
                <div class="col-2">{{ annulees.totalNumber }}</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #3987fb; border-color: #3987fb"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-square"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Confirmer</div>
                <div class="col-2">{{ confirmees.totalNumber }}</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #931d96; border-color: #931d96"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Utilisé</div>
                <div class="col-2">{{ utilisees.totalNumber }}</div>
              </div>
            </boutton>
          </div>

          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #f77f00; border-color: #f77f00"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-error-alt"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">En attente de report</div>
                <div class="col-2">{{ enAttente.totalNumber }}</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #219935; border-color: #219935"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-reset"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Reporté</div>
                <div class="col-2">{{ reportees.totalNumber }}</div>
              </div>
            </boutton>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>
