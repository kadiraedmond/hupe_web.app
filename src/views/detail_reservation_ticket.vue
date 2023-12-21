<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from '@/components/Loader.vue' 

import router from '@/router/router.js' 

import { collection, doc, getDoc, addDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'

import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const programmeId = route.params.id 

const programmes = ref([]) 
const autresProgrammes = ref([]) 

let companieId

onBeforeMount(async () => {
  await promotionStore.setProgramme(programmeId) 

  companieId = await promotionStore.programme.compagnie_uid

  companieStore.setCompanieById(companieId)
  companieStore.setProgrammesVoyages(companieId) 

  programmes.value = companieStore.programmeVoyages 

  programmes.value.forEach(programme => {
    if(programme.uid !== programmeId) {
      autresProgrammes.value.push(programme)
    }
  })
})

const name = ref('')
const nombrePersonnes = ref() 
const dateDepart = ref() 
const heureDepart = ref() 

const reservationColRef = collection(firestoreDb, 'reservation')

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const isLoading = ref(false)

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const reserver = async (programme) => {
  isLoading.value = true
  const Data = {
    client_id: user.uid,
    client_profil_url: user.imageUrl || '',
    compagnie_uid: programme.compagnie_uid,
    createdAt: Timestamp.now(),
    date_depart: new Date(dateDepart.value) || '',
    destination: programme.destination,
    escale: programme.escale,
    heure_depart: heureDepart.value, 
    lieu_depart: programme.lieu_depart,
    lieu_arrive: programme.destination,
    montant: programme.montant,
    nom_client: `${user.lastName} ${user.firstName}`,
    nombre_personne: nombrePersonnes.value,
    number: `T_${Date.now()}`, 
    payement: 'En attente',
    status: 'En attente',
    telephone_client: user.telephone,
    ticket_id: uuidv4()
  }

  if(Data)  isLoading.value = true

  try {
    await addDoc(reservationColRef, Data)

    console.log('Document ajouté avec success')

    isLoading.value = false

    document.querySelector('.btn-close').click()

    Swal.fire({
      title: "Succès",
      text: "Réservation effectuée avec succès",
      icon: "success"
    })

    const notificationColRef = collection(firestoreDb, 'notifications')

    const userDocRef = doc(firestoreDb, 'users', `${programme.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const formatedDateDepart = new Intl.DateTimeFormat(undefined, options).format(programme.date_depart)
    
    const comp_notif = {
      title: 'Réservation de ticket', 
      message: `Vous avez une réservation de ticket N° ${programme.number} en attente de validation venant du client « ${user.lastName} ${user.firstName} » pour le trajet « ${programme.lieu_depart} - ${programme.destination} » du « ${formatedDateDepart} », veuillez valider ou annuler cette réservation.`, 
      userId: programme.compagnie_uid,
      lu: false, 
      createdAt: Timestamp.now() 
    }

    await addDoc(notificationColRef, comp_notif)

    document.querySelector('#reservationForm').reset() 
    router.push(`/notation/${companieId}`)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>
<template>
 
   <!-- ======= Portfolio Details Section ======= -->
   <section id="portfolio-details" class="portfolio-details" style="margin-top: 50px;">
    <div class="container">
      <div class="row no-gutters mt-4">
        <div class="col-md-8">
          <img
          src="/assets/img/rb.jpg"
            alt=""
            class="img-fluid"
            style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
          />
          

          <div class="row mt-4">
            <div class="col-md-12">
              <div class="row">
                <div class="row">
                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;" >Détails du trajet</h5>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/1.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Trajet</h5>
                          <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}</p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                           <img src="/assets/img/detail/2.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Escale</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.escale }}
                        </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/3.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Heure de départ</h5>
                        <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.programme.heure_depart }}</p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                           <img src="/assets/img/detail/3.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Convocation</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.heure_convocation }}
                        </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                           <img src="/assets/img/detail/4.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Jours du voyage</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.programme.jours_voyage }}
                          </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                           <img src="/assets/img/detail/5.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Nombres de place</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.nb_place }}
                        </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;">Prix</h5>

                  <div class="col-md-12 mt-3">
                    <div class="card">
                      <div class="card-body text-center">
                        <p class="card-title" style="font-weight: 600;">La valeur du trajet est estimée à</p>
                         
                        <p class="card-text" style="font-size: 50px; font-weight: 500; color: #219935;"> {{ promotionStore.programme.montant }} FCFA</p>
                         
                      </div>
                    </div>
                  </div>

                  

                  <div class="col-md-12 text-center">
                        <router-link v-if="!user.uid" to="/connexion-client">
                          <button
                            class="btn btn-primary w-100"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 20px;
                            "
                          >
                            Réserver
                          </button>
                        </router-link>
                        <router-link v-if="user.uid && !user.raison_social" to="">
                          <button
                            class="btn btn-primary w-100"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 20px;
                            "
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Réserver
                          </button>
                        </router-link>

                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                          v-if="user.uid"
                      >
                          <div class="modal-dialog">
                          <div class="modal-content">
                              <div
                              class="modal-header"
                              style="background: #219935"
                              >
                              <h1
                                  class="modal-title text-white fs-5"
                                  id="exampleModalLabel"
                                  style="font-size: 17px !important"
                              >
                                  Réservation de ticket
                              </h1>
                              <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                              ></button>
                              </div>
                              <div class="modal-body">
                              <form
                                  id="reservationForm"
                                  class="row g-3 needs-validation"
                                  novalidate
                                  @submit.prevent="reserver(promotionStore.programme)"
                              >
                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Nom & Prénoms</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="`${user.lastName} ${user.firstName}`"
                                      required 
                                      disabled 
                                  />
                                  </div>

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Ville de départ</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.programme.lieu_depart"
                                      required
                                      disabled
                                  />
                                  </div>

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Ville d'arrivée</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.programme.destination"
                                      required
                                      disabled
                                  />
                                  </div>

                                  <div class="col-md-6">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Date de départ</label
                                  >
                                  <input
                                      type="date"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="dateDepart"
                                      required
                                  />
                                  </div>
                                  <div class="col-md-6">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Heure de départ</label
                                  >
                                  <input
                                      type="time"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="heureDepart"
                                      required
                                  />
                                  </div>

                                  <Loader 
                                  style="position: absolute; left: 35%; top: 15%"
                                  v-if="isLoading" 
                                  />

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Nombres de personnes</label
                                  >
                                  <input
                                      type="number"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="nombrePersonnes"
                                      required
                                  />
                                  </div>

                                  <div class="col-12 text-center">
                                  <button
                                      class="btn btn-primary"
                                      type="submit"
                                      style="
                                      background: #219935;
                                      border-color: #219935;
                                      "
                                  >
                                      Soumettre
                                  </button>
                                  </div>
                              </form>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                   
                  <!-- <div class="row mt-4">
                      
                    <div class="col-md-6 text-end">
                      <router-link v-if="!user.uid" to="/connexion-client">
                        <button
                          class="btn btn-primary w-100"
                          style="
                            background: #219935;
                            border-color: #219935;
                            margin-top: 20px;
                          "
                        >
                          Réserver
                        </button>
                      </router-link>
                      <router-link v-if="user.uid && !user.raison_social" to="">
                        <button
                          class="btn btn-primary w-100"
                          style="
                            background: #219935;
                            border-color: #219935;
                            margin-top: 20px;
                          "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Réserver
                        </button>
                      </router-link>

                      
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div
                                class="modal-header"
                                style="background: #219935"
                              >
                                <h1
                                  class="modal-title text-white fs-5"
                                  id="exampleModalLabel"
                                  style="font-size: 17px !important"
                                >
                                  Réservation de véhicule
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <form
                                  class="row g-3 needs-validation"
                                  novalidate
                                  @submit.prevent="reserver(promotionStore.vehicule)"
                                  id="reservationForm"
                                >
                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Nom & prénoms</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="`${user.lastName} ${user.firstName}`"
                                      required 
                                      disabled 
                                    />
                                  </div>

                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Téléphone</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="user.telephone"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Marque</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.vehicule.vehicule"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Immatriculation</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.vehicule.serie_vehicule"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Modèle</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.vehicule.modele"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Moteur</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.vehicule.moteur"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Transmission</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.vehicule.boite"
                                      required
                                      disabled
                                    />
                                  </div>

                                  <div class="col-md-6 d-flex justify-content-between">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      >Avec chauffeur</label
                                    >
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="gridRadios"
                                        id="gridRadios2"
                                        value="Oui"
                                        @click="toggleChauffeur(1)"
                                        v-model="avecChauffeur"
                                        :checked="avecChauffeur"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-md-6 d-flex justify-content-between">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      >Sans chauffeur</label
                                    >
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="gridRadios"
                                        id="gridRadios1"
                                        value="Non"
                                        @click="toggleChauffeur(2)"
                                        v-model="sansChauffeur"
                                        :checked="sansChauffeur"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-md-6 d-flex justify-content-between">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      >Capital du pays</label
                                    >
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="gridRadios"
                                        id="gridRadios4"
                                        value="Non"
                                        @click="togglePays(3)"
                                        v-model="capitalPays"
                                        :checked="capitalPays"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-md-6 d-flex justify-content-between">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      >Intérieur du pays</label
                                    >
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="gridRadios"
                                        id="gridRadios5"
                                        value="Oui"
                                        @click="togglePays(4)"
                                        v-model="interieurPays"
                                        :checked="interieurPays"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Date de Retrait</label
                                    >
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="dateRetrait"
                                      required
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Heure de Retrait</label
                                    >
                                    <input
                                      type="time"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="heureRetrait"
                                      required
                                    />
                                  </div>
                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Lieu du Retrait</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="lieuRetrait"
                                      required
                                    />
                                  </div>

                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Date de retour</label
                                    >
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="dateRetour"
                                      required
                                    />
                                  </div>

                                  <Loader 
                                    style="position: absolute; left: 35%; top: 15%"
                                    v-if="isLoading" 
                                  />

                                  <div class="col-md-12">
                                    <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Permis de conduire</label
                                    >
                                    <input
                                      type="file"
                                      class="form-control"
                                      id="fileInput"
                                      @change="handleFileChange"
                                      required
                                    />
                                  </div>

                                  <div class="col-12 text-center">
                                    <button
                                      class="btn btn-primary"
                                      type="submit"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                      "
                                    >
                                      Réserver
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  
                    <div class="col-md-6 text-end">
                      <router-link :to="`/detail/${companieStore.companie.uid}`">
                        <img
                          :src="companieStore.companie.imageLogoUrl"
                          alt="logo"
                          style="
                            width: 70px !important;
                            height: 70px;
                            border-radius: 50%;
                            border: 2.8px solid #E8E8E8
                          "
                        />
                      </router-link>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
             
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}</h5>

                  <p class="card-text"> </p>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <h6>Montant</h6>
                        </div>
                        <div class="col-6">
                          <h6 style=" color: #219935 !important">
                            {{ promotionStore.programme.montant }} FCFA
                          </h6>
                        </div>
                      </div>
                       
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 mt-4">
              <div class="card">
                <div class="card-body text-center">
                   
                   
                    <p class="card-text" style="line-height: 2"></p>
                    <div class="row">
                       
                    </div>

                    <div class="row">
                       
 
                    </div>

                    

                    🌍 Réservez Maintenant, Explorez Plus Tard : Ne manquez pas l'opportunité de vivre l'aventure. Réservez pour se trajet ({{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}) dès maintenant et ouvrez la porte à une expérience sans limites.
                    <div class="row mt-3">
                      <div class="col-md-12 text-center">
                        <router-link v-if="!user.uid" to="/connexion-client">
                          <button
                            class="btn btn-primary w-100"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 20px;
                            "
                          >
                            Réserver
                          </button>
                        </router-link>
                        <router-link v-if="user.uid && !user.raison_social" to="">
                          <button
                            class="btn btn-primary w-100"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 20px;
                            "
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Réserver
                          </button>
                        </router-link>

                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                          v-if="user.uid"
                      >
                          <div class="modal-dialog">
                          <div class="modal-content">
                              <div
                              class="modal-header"
                              style="background: #219935"
                              >
                              <h1
                                  class="modal-title text-white fs-5"
                                  id="exampleModalLabel"
                                  style="font-size: 17px !important"
                              >
                                  Réservation de ticket
                              </h1>
                              <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                              ></button>
                              </div>
                              <div class="modal-body">
                              <form
                                  id="reservationForm"
                                  class="row g-3 needs-validation"
                                  novalidate
                                  @submit.prevent="reserver(promotionStore.programme)"
                              >
                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Nom & Prénoms</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="`${user.lastName} ${user.firstName}`"
                                      required 
                                      disabled 
                                  />
                                  </div>

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Ville de départ</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.programme.lieu_depart"
                                      required
                                      disabled
                                  />
                                  </div>

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Ville d'arrivée</label
                                  >
                                  <input
                                      type="text"
                                      class="form-control"
                                      id="validationCustom01"
                                      :value="promotionStore.programme.destination"
                                      required
                                      disabled
                                  />
                                  </div>

                                  <div class="col-md-6">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Date de départ</label
                                  >
                                  <input
                                      type="date"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="dateDepart"
                                      required
                                  />
                                  </div>
                                  <div class="col-md-6">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Heure de départ</label
                                  >
                                  <input
                                      type="time"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="heureDepart"
                                      required
                                  />
                                  </div>

                                  <Loader 
                                  style="position: absolute; left: 35%; top: 15%"
                                  v-if="isLoading" 
                                  />

                                  <div class="col-md-12">
                                  <label
                                      for="validationCustom01"
                                      class="form-label"
                                      style="float: left"
                                      >Nombres de personnes</label
                                  >
                                  <input
                                      type="number"
                                      class="form-control"
                                      id="validationCustom01"
                                      v-model="nombrePersonnes"
                                      required
                                  />
                                  </div>

                                  <div class="col-12 text-center">
                                  <button
                                      class="btn btn-primary"
                                      type="submit"
                                      style="
                                      background: #219935;
                                      border-color: #219935;
                                      "
                                  >
                                      Soumettre
                                  </button>
                                  </div>
                              </form>
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
  </section>
  <!-- End Portfolio Details Section -->

  <!-- ======= Expertise et conseils en immobiliers Section ======= -->
  <section id="features" class="features" style="margin-top: -60px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2 style="font-size: 22px; color: black">
              Trajets de la même compagnie
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div
              class="col"
              v-for="(programme, i) in autresProgrammes" :key="i"
            >
              <router-link
              :to="`/detail_reservation_ticket/${programme.uid}`"
                style="color: #000"
              >
                <div class="card h-100 border-0" id="card_compagnie" style="box-shadow: none;">
                  <div class="row" style="margin: 0px">
                    <div class="col-md-12">
                      <div
                        class="card h-100 mb-3 border-0"
                        style="background: #f9f9f9;"
                      >
                        <div class="row g-1 d-flex mt-2">
                          
                          <div class="col-6 d-flex">
                             
                          </div>

                          <div class="col-6 text-end">
                            <button
                              class="btn btn-primary"
                              style="
                                background: #219935;
                                border-color: #219935;
                                margin-top: 5px;
                                font-size: 12px;
                              "
                            >
                            {{ programme.montant }}  FCFA
                            </button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                    <img
                            src="/assets/img/rb.jpg"
                            class="img-fluid h-100"
                            alt="..."
                            style="object-fit: cover ; border-radius: 11px;"
                    />
                  
                    <div class="card-body" style="background-color:#f9f9f9;">
                      <div class="row" style=" background: white; border-radius: 5px;">
                        <div class="col-md-12 mt-2 mb-2">
                          <h5 class="card-title " style=" font-size: 15px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                  /> {{ programme.lieu_depart }} -
                              {{ programme.destination }}  </h5>
                        </div>
                      </div>
                    
                    
                      
                    </div>
                  </div>
                  
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

#btn_circle {
  font-size: 30px;
  border-radius: 50%;
  color: black;
  background: white;
  border-color: #8b8b8b;
  width: 60px;
  height: 60px;
}
#space-left{
  margin-left: 12px;
  margin-top: 10px;
}
</style>
