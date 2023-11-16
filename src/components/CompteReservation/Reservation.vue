<script setup>
import { useReservationStore } from '@/store/reservation.js'
import { useAuthStore } from '@/store/auth.js'
import { reactive, ref, onBeforeMount, onMounted } from "vue"
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

const reservationStore = useReservationStore()
const authStore = useAuthStore()

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

const updateReservationsDashboard = () => {
  reservationStore.companieReservations.forEach(reservation => {
    if(reservation.status == 'En attente') {
      enAttente.totalNumber++
      enAttente.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Validé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Confirmé') {
      confirmees.totalNumber++
      confirmees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Annuler') {
      annulees.totalNumber++
      annulees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Reporté') {
      reportees.totalNumber++
      reportees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Utilisé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(reservation.montant)
    }
  })
}

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid

const elements_en_attente = ref([])
const elements_valide = ref([])
const elements_reporte = ref([])
const elements_confirme = ref([])
const elements_utilise = ref([])
const elements_annule = ref([])

onBeforeMount(async () => {
  await reservationStore.setCompanieReservations(userId)
  updateReservationsDashboard()

  reservationStore.companieReservations.forEach(comp => {
    if(comp.status == 'En attente') {
      elements_en_attente.value.push(comp)
    } else if(comp.status == 'Validé') {
      elements_valide.value.push(comp)
    } else if(comp.status == 'Reporté') {
      elements_reporte.value.push(comp)
    } else if(comp.status == 'Confirmé') {
      elements_confirme.value.push(comp)
    } else if(comp.status == 'Annuler') {
      elements_annule.value.push(comp)
    }
  })
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const valider = async (reservation) => {
  const docRef = doc(firestoreDb, 'reservation', `${reservation.uid}`)

  try {
    await updateDoc(docRef, { status: 'Validé' })
    Swal.fire({
      title: "Succès",
      text: "Validation effectuée",
      icon: "success"
    })

    const userDocRef = doc(firestoreDb, 'users', `${reservation.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const notificationColRef = collection(firestoreDb, 'notifications')
    
    const data = {
      title: 'Validation de réservation', 
      destinataire: reservation.client_id, 
      message: `Votre demande de réservation de ticket pour le trajet « ${reservation.lieu_depart} - ${reservation.destination} » le « ${reservation.date_depart} » a été validée, vous pouvez procéder au paiement dès maintenant.`, 
      lu: false, 
      createdAt: new Date()
    }

    await addDoc(notificationColRef, data)
  } catch (error) {
    Swal.fire({
      title: "Erreur",
      text: "Erreur lors de la validation",
      icon: "error"
    })
    console.log(error)
  }
} 

</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12 mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <div class="row">
          <div class="col-md-4">
            <li class="nav-item mb-3" role="presentation">
              <button
                class="nav-link active w-100"
                id="attente-tab"
                data-bs-toggle="tab"
                data-bs-target="#attente-tab-pane"
                type="button"
                role="tab"
                aria-controls="attente-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #f77f00 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ enAttente.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;"> <i class="bx bx-time"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ enAttente.totalNumber }}
                          </button>
                          Tickets en attente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#valid-tab-pane"
                type="button"
                role="tab"
                aria-controls="valid-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #219935 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ valides.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;"> <i class="bx bx-check-circle"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ valides.totalNumber }}
                          </button>
                          Tickets validés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="confirm-tab"
                data-bs-toggle="tab"
                data-bs-target="#confirm-tab-pane"
                type="button"
                role="tab"
                aria-controls="confirm-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ confirmees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;"> <i class="bx bx-check-square"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ confirmees.totalNumber }}
                          </button>
                          Tickets confirmés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="annul-tab"
                data-bs-toggle="tab"
                data-bs-target="#annul-tab-pane"
                type="button"
                role="tab"
                aria-controls="annul-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #931d96 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ annulees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;">  <i class="bx bx-x-circle"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ annulees.totalNumber }}
                          </button>
                          Tickets annulés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="report-tab"
                data-bs-toggle="tab"
                data-bs-target="#report-tab-pane"
                type="button"
                role="tab"
                aria-controls="report-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ reportees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;">  <i class="bx bx-reset"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ reportees.totalNumber }}
                          </button>
                          Tickets reportés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="use-tab"
                data-bs-toggle="tab"
                data-bs-target="#use-tab-pane"
                type="button"
                role="tab"
                aria-controls="use-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #fb3232 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ utilisees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p style=" font-size: 23px;margin-top: -6px; color: white;">   <i class="bx bx-check-circle"></i> </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ utilisees.totalNumber }}
                          </button>
                          Tickets utilisés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>
        </div>
      </ul>
      
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="attente-tab-pane"
          role="tabpanel"
          aria-labelledby="attente-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                  <div class="row">
                    <div class="col-md-4" v-for="(reservation, index) in elements_en_attente" :key="index">
                      <div class="accordion-item mb-3" style="border: 1px solid #d2d2d2; border-radius: 5px;" >
                      <h2 class="accordion-header" :id="'flush-headingOne' + index">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#flush-collapseOne' + index"
                          aria-expanded="false"
                          :aria-controls="'flush-collapseOne' + index"
                          id="reser"
                        >
                          <div class="row g-1 d-flex mt-1" style=" width: 100%">
                            <div class="col-md-6 d-flex">
                              <img
                              :src="reservation.client_profil_url"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                              />
                              <div>
                                <div class="card-body" style="margin-left: 10px; margin-top: 10px; ">
                                  <h5 class="card-title" style="font-size: 12px ; margin-bottom: 6px;">
                                    {{ reservation.nom_client }}
                                  </h5>
                                  <p class="card-text" style="font-size: 12px">
                                    <i
                                      class="bx bx-map"
                                      style="color: rgb(139 139 139);"
                                    ></i>
                                    CI,rue 250
                                  </p>
                                </div>
                              </div>
                             
                            </div>
                            <div class="col-md-6 text-end">
                              
                                  <strong style="color: rgb(247 127 0);font-size: 12px; margin-right: 10px; font-weight: 500;">{{ location.status }} </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                       
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        :id="'flush-collapseOne' + index"
                        class="accordion-collapse collapse"
                        :aria-labelledby="'flush-headingOne' + index"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: 8px ; padding: 7px;">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card  mt-4"
                              style="
                                 
                                margin-top: -10px !important;
                                width: 100%;
                              "
                            >
                              <div class="row g-0" style="margin: -2px">
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <div class="row mt-2">
                                        <div class="col-6">
                                            <p
                                            class="card-text"
                                            style="
                                                background: #efefef;
                                                padding: 4px;
                                                border-radius: 5px;
                                                font-size: 12px;
                                                margin-top: -15px;
                                            "
                                            >
                                            {{ new Intl.DateTimeFormat(undefined, options).format(reservation.createdAt) }} <br />
                                            
                                            </p>
                                        </div>       
                                    </div>
                                    <br />
                                          

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -11px;
                                        margin-bottom: 11px;
                                      "
                                    >
                                    Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                   
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: 0px;
                                        margin-bottom: 11px;
                                      "
                                    >
                                    Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                   
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: 0px;
                                        margin-bottom: 11px;
                                      "
                                    >
                                    Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: 0px;
                                        margin-bottom: 11px;
                                      "
                                    >
                                    Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>
                                   
                                  </div>
                                </div>
                                <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                    Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>

                                    
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: 20px;
                                        margin-bottom: 20px;
                                      "
                                    >
                                      Retour |
                                      <strong>{{ location.date_retour }} </strong>
                                    </p>
                                     

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -11px;
                                        margin-bottom: 11px;
                                      "
                                    >
                                    Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                    <button 
                                    class="btn btn-primary text-white mb-2" 
                                    style="background: #219935; border: #219935; float: right" 
                                    @click="valider(reservation)"
                                    >
                                      Valider
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade show active"
          id="valid-tab-pane"
          role="tabpanel"
          aria-labelledby="valid-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(reservation, index) in elements_valide" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: #fafafa"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="reservation.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ reservation.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          id="icon_menu"
                                          style="color: #219935"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              <div class="row">
                                <div class="col-4 text-end">
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ reservation.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card mb-3 mt-4"
                              style="
                                margin: 10px;
                                margin-top: -10px !important;
                                width: 98%;
                              "
                            >
                              <div class="row g-0" style="margin: 10px">
                                <div class="col-md-6">
                                  <div class="card-body">
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    src="/public/assets/img/car2.jpg"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active"
          id="confirm-tab-pane"
          role="tabpanel"
          aria-labelledby="confirm-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(reservation, index) in elements_confirme" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: #fafafa"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="reservation.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ reservation.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          id="icon_menu"
                                          style="color: #219935"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              <div class="row">
                                <div class="col-4 text-end">
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ reservation.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card mb-3 mt-4"
                              style="
                                margin: 10px;
                                margin-top: -10px !important;
                                width: 98%;
                              "
                            >
                              <div class="row g-0" style="margin: 10px">
                                <div class="col-md-6">
                                  <div class="card-body">
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    src="/public/assets/img/car2.jpg"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade show active"
          id="annul-tab-pane"
          role="tabpanel"
          aria-labelledby="annul-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(reservation, index) in elements_annule" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: #fafafa"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="reservation.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ reservation.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          id="icon_menu"
                                          style="color: #219935"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              <div class="row">
                                <div class="col-4 text-end">
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ reservation.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card mb-3 mt-4"
                              style="
                                margin: 10px;
                                margin-top: -10px !important;
                                width: 98%;
                              "
                            >
                              <div class="row g-0" style="margin: 10px">
                                <div class="col-md-6">
                                  <div class="card-body">
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    src="/public/assets/img/car2.jpg"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade show active"
          id="report-tab-pane"
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(reservation, index) in elements_reporte" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: #fafafa"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="reservation.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ reservation.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          id="icon_menu"
                                          style="color: #219935"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              <div class="row">
                                <div class="col-4 text-end">
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ reservation.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card mb-3 mt-4"
                              style="
                                margin: 10px;
                                margin-top: -10px !important;
                                width: 98%;
                              "
                            >
                              <div class="row g-0" style="margin: 10px">
                                <div class="col-md-6">
                                  <div class="card-body">
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    src="/public/assets/img/car2.jpg"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade show active"
          id="use-tab-pane"
          role="tabpanel"
          aria-labelledby="use-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(reservation, index) in elements_utilise" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: #fafafa"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="reservation.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ reservation.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          id="icon_menu"
                                          style="color: #219935"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              <div class="row">
                                <div class="col-4 text-end">
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ reservation.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ reservation.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
                            <div
                              class="card mb-3 mt-4"
                              style="
                                margin: 10px;
                                margin-top: -10px !important;
                                width: 98%;
                              "
                            >
                              <div class="row g-0" style="margin: 10px">
                                <div class="col-md-6">
                                  <div class="card-body">
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Lieu de départ | <strong> {{ reservation.lieu_depart }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Déstinations | <strong>{{ reservation.destination }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Heure de départ |
                                      <strong>{{ reservation.heure_depart }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    src="/public/assets/img/car2.jpg"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Convocation | <strong>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Escale | <strong>{{ reservation.escale }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Jours de voyages | <strong>{{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-tabs .nav-link {
    /* margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); */
    /* background: 0 0; */
    /* border: var(--bs-nav-tabs-border-width) solid transparent; */
    /* border-top-left-radius: var(--bs-nav-tabs-border-radius); */
    /* border-top-right-radius: var(--bs-nav-tabs-border-radius); */
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    border: var(--bs-nav-tabs-border-width) solid transparent;
    border-color: #219935;
    color: black;
    border-radius: 5px;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #fff;
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: #219935;
    background: #21993554;
}
</style>
