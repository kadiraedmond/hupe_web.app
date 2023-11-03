<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from "@/components/Loader.vue"

import { collection, doc, addDoc } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const companieId = route.params.id

onBeforeMount(() => {
  companieStore.setCompanieById(companieId)
  companieStore.setCompanieCars(companieId)
  promotionStore.setCompaniePromotionCars(companieId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const name = ref('')
const avecChauffeur = ref(false)
const sansChauffeur = ref(false)
const capitalPays = ref(false)
const interieurPays = ref(false)
const dateRetrait = ref()
const heureRetrait = ref()
const lieuRetrait = ref('')
const dateRetour = ref()
const permis = ref()

const toggleChauffeur = (num) => {
  if(num == 1) {
    avecChauffeur.value = true
    sansChauffeur.value = false
  } else if(num == 2) {
    sansChauffeur.value = true
    avecChauffeur.value = false
  }
}

const togglePays = (num) => {
  if(num == 3) {
    capitalPays.value = true
    interieurPays.value = false
  } else if(num == 4) {
    interieurPays.value = true
    capitalPays.value = false
  }
}

const handleFileChange = () => {
    const fileInput = document.querySelector('#fileInput')
    
    const selectedFile = fileInput.files[0]

    permis.value = selectedFile
}

const locationColRef = collection(firestoreDb, 'location_vehicules')

const isLoading = ref(false)

const reserver = async (car) => {
  isLoading.value = true

  const Data = {
    boite: car.boite,
    chauffeur: avecChauffeur.value === true ? 'Oui' : 'Non',
    client_id: user.uid || '',
    client_profil_url: user.imageUrl || '',
    compagnie_id: companieId || companieStore.companie.uid,
    created_at: new Date(),
    date_retour: dateRetour.value,
    date_retrait: dateRetrait.value,
    enPromo: car.enPromo,
    heure_retrait: heureRetrait.value,
    identite_image_url: permis.value || '',
    interieurPays: interieurPays.value === true ? 'Oui' : 'Non',
    latitude: '',
    lieu_retrait: lieuRetrait.value,
    longitude: '',
    modele: car.modele,
    montant: car.montant,
    moteur: car.moteur,
    nom_client: name.value,
    number: '',
    payement: 'En attente',
    plaque_vehicule: car.serie_vehicule,
    status: 'En attente',
    telephone_client: user.telephone,
    ticket_id: uuidv4(),
    vehicule: car.vehicule,
    vehicule_image_url: car.vehicule_image_url,
  }

  try {
    const docRef = await addDoc(locationColRef, Data)

    if(docRef) {
      console.log('Document ajouté avec success')
      
      isLoading.value = false

      document.querySelector('.btn-close').click()

      toast.success("Réservation effectuée avec succès", { 
        autoClose: 3500, 
        position: toast.POSITION.TOP_CENTER
      })
    }

    document.querySelector('#reservationForm').reset()
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <main id="main">
    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: 0px"
    >
      <img
        :src="companieStore.companie.imageCouvertureUrl"
        alt=""
        class="img-fluid w-100"
        style="height: 380px; object-fit: cover"
      />
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="companieStore.companie.imageLogoUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 150px; height: 150px; max-width: 150px; max-height: 150px; object-fit: cover;"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ companieStore.companie.raison_social }}</h5>
                    <p class="card-text">
                      {{ companieStore.companie.description }}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: -40px"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Véhicules
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Promotion
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li> -->
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="politique-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#politique-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="politique-tab-pane"
                  aria-selected="false"
                >
                  Politique
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="apropos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#apropos-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="apropos-tab-pane"
                  aria-selected="false"
                >
                  A propos
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div class="row mt-4">
                  <div class="col-md-6 mb-2" v-for="(car, i) in companieStore.companieCars" :key="i">
                    <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            :src="car.vehicule_image_url"
                            class="img-fluid rounded-start"
                            alt="..."
                            style="height: 100%; object-fit: cover"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                <p class="card-text" style="font-size: 13px">
                                  <strong>{{ car.moteur }} | {{ car.modele }} | {{ car.anne_vehicule }} </strong>
                                </p>
                              </div>
                              <div class="col-md-6 text-end">
                                <button
                                  class="btn btn-primary"
                                  style="
                                    background-color: #219935;
                                    border-color: #219935;
                                    font-size: 13px;
                                  "
                                >
                                  {{ car.montant }} FCFA
                                </button>
                              </div>

                              <div class="col-md-12 mt-3">
                                <p class="card-text" style="font-size: 13px">
                                  {{ car.moteur }} | {{ car.boite }} | {{ car.serie_vehicule }}
                                </p>
                              </div>
                              <div class="col-md-12 mt-3">
                                <p class="card-text" style="font-size: 13px">
                                  Location simple | <strong> {{ car.montant }} CFA </strong>
                                </p>
                                <p class="card-text" style="font-size: 13px">
                                  Location avec chauffeur |
                                  <strong> {{ car.avecchauffeurprix }} CFA </strong>
                                </p>
                                <p class="card-text" style="font-size: 13px">
                                  Location vers l'intérieur |
                                  <strong> {{ car.interieurpaysprix }} CFA </strong>
                                </p>
                              </div>

                              <div class="col-md-12 mt-4 text-start">
                                <!-- Button trigger modal -->
                                <router-link :to="`/detail_vehicule_location/${car.uid}`">
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    data-bs-toggle="modal"
                                    :data-bs-target="'#exampleModal' + i"
                                  >
                                    Voir plus
                                  </button>
                                </router-link>

                                <!-- Modal -->
                                <!-- <div
                                  class="modal fade"
                                  :id="'exampleModal' + i"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div
                                        class="modal-header"
                                        style="background: #deeee4"
                                      >
                                        <h1
                                          class="modal-title fs-5"
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
                                          @submit.prevent="reserver(car)"
                                          id="reservationForm"
                                        >
                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Nom & prénoms</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="name"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
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
                                              >Marque</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.vehicule"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Immatriculation</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.serie_vehicule"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Modèle</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.modele"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Moteur</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.moteur"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Transmission</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.boite"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
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

                                          <div class="col-md-6">
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

                                          <div class="col-md-6">
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

                                          <div class="col-md-6">
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
                                </div> -->
                                
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
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col" v-for="(promoCar, i) in promotionStore.companiePromotionCars" :key="i">
                    <div class="card" style="background: #f7f7f78a">
                      <div class="row" style="padding: 6px">
                        <div class="col-md-12 d-flex">
                          <img
                            :src="companieStore.companie.imageLogoUrl"
                            class="img-fluid"
                            alt="..."
                            style="width: 25px; height: 25px; margin-top: 6px"
                          />
                          <h6
                            style="
                              font-size: 12px;
                              margin-left: 5px;
                              margin-top: 10px;
                            "
                          >
                            {{ companieStore.companie.raison_social }}
                          </h6>
                          <p
                            style="
                              font-size: 12px;
                              margin-left: 5px;
                              margin-top: 6px;
                            "
                          >
                            <img
                              src="/public/assets/img/icone/map.png"
                              class="img-fluid"
                              alt="..."
                            />
                            {{ companieStore.companie.adresse }}
                          </p>
                        </div>
                      </div>
                      <div
                        class="card h-100"
                        id="compagnie_card"
                        style="padding: 6px; background: #a6a6a621"
                      >
                        <a
                          v-bind:href="'/detail'"
                          style="
                            border: 1px solid;
                            border-radius: 5px;
                            border-color: #a6a6a6;
                          "
                        >
                          <img
                            src="/public/assets/img/car3.jpg"
                            class="card-img-top"
                            alt="..."
                            style="
                              border-radius: 5px 5px 5px 5px;
                              height: 215px !important;
                              object-fit: cover;
                            "
                          />
                        </a>
                        <button class="btn btn-primary" id="badges">
                          <s> {{ promoCar.ancien_montant }} FCFA </s>
                        </button>
                        <button class="btn btn-primary" id="badges0">
                          {{ promoCar.montant }} FCFA
                        </button>
                        <button class="btn btn-primary" id="badges012">
                          {{ promoCar.pourcentage }}%
                        </button>
                        <button class="btn btn-primary" id="badges0121">
                          {{ promoCar.vehicule }} {{ promoCar.modele }} {{ promoCar.anne_vehicule }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="politique-tab-pane"
                role="tabpanel"
                aria-labelledby="politique-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <H6>Lorem ipsum dolor sit amet</H6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequatLorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat
                        </p>

                        <H6>Lorem ipsum dolor sit amet</H6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          <br />
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequatLorem
                          ipsum dolor sit amet, <br />consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat
                        </p>

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="apropos-tab-pane"
                role="tabpanel"
                aria-labelledby="apropos-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12">
                            <p>
                              <strong>Raison sociale |</strong> {{ companieStore.companie.raison_social }}
                            </p>

                            <p><strong> Responsable |</strong> {{ companieStore.companie.responsable }}</p>
                          </div>

                          <div
                            class="row row-cols-1 row-cols-md-4 mb-4 g-4"
                            style="margin-top: -5px"
                          >
                            <div class="col">
                              <div class="card h-100 text-center border-0">
                                <div
                                  class="row mt-4"
                                  style="justify-content: center"
                                >
                                  <img
                                    src="/public/assets/img/icone/mail.png"
                                    class="img-fluid"
                                    alt="..."
                                    style="width: 64px"
                                  />
                                </div>

                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.adresse_mail }}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card h-100 text-center border-0">
                                <div
                                  class="row mt-4"
                                  style="justify-content: center"
                                >
                                  <img
                                    src="/public/assets/img/icone/web.png"
                                    class="img-fluid"
                                    alt="..."
                                    style="width: 64px"
                                  />
                                </div>

                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.site_web }}
                                  </h5>
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.telephone }}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card h-100 text-center border-0">
                                <div
                                  class="row mt-4"
                                  style="justify-content: center"
                                >
                                  <img
                                    src="/public/assets/img/icone/maps.png"
                                    class="img-fluid"
                                    alt="..."
                                    style="width: 64px"
                                  />
                                </div>

                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.adresse }}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card h-100 text-center border-0">
                                <div
                                  class="row mt-4"
                                  style="justify-content: center"
                                >
                                  <img
                                    src="/public/assets/img/icone/location.png"
                                    class="img-fluid"
                                    alt="..."
                                    style="width: 64px"
                                  />
                                </div>

                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.latitude }} {{ companieStore.companie.longitude }}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
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
  </main>
  <!-- End #main -->
</template>
<style></style>
