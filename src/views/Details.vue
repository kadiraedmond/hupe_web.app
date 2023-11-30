<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from '@/components/Loader.vue'

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

onBeforeMount(async () => {
  await companieStore.setCompanieById(companieId)

  toast.success(`Bienvenue chez ${companieStore.companie.raison_social}`, { 
    autoClose: 3500, 
    position: toast.POSITION.TOP_CENTER
  })

  companieStore.setCompanieCars(companieId)
  companieStore.setProgrammesVoyages(companieId)
  promotionStore.setCompaniePromotionCars(companieId)
})

const name = ref('')
const villeDepart = ref('')
const villeArrive = ref('')
const dateDepart = ref()
const heureDepart = ref()
const nombrePersonnes = ref()

const reservationColRef = collection(firestoreDb, 'reservation')

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const isLoading = ref(false)

const reserver = async (programme) => {
  isLoading.value = true
  const Data = {
    client_id: user.uid,
    client_profil_url: user.imageUrl || '',
    compagnie_uid: companieId || programme.compagnie_uid,
    createdAt: new Date(),
    date_depart: dateDepart,
    destination: programme.destination,
    escale: programme.escale,
    heure_depart: heureDepart.value,
    lieu_depart: villeDepart.value,
    lieu_arrive: villeArrive.value,
    montant: programme.montant,
    nom_client: name.value,
    nombre_personne: nombrePersonnes.value,
    number: programme.number,
    payement: 'En attente',
    status: programme.status,
    telephone_client: user.telephone,
    ticket_id: uuidv4()
  }

  try {
    const docRef = await addDoc(reservationColRef, Data)

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

onMounted(() => {
  window.scrollTo(0, 0)
})

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
        
        id="img_couv"
      />
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card mb-3 border-0" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="companieStore.companie.imageLogoUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 100px; height: 100px !important; object-fit: cover;  border: 2.8px solid #E8E8E8"
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
                  style="border-radius: 5px 0px 0px 0px !important;"
                >
                  Programmes
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="promotion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#promotion-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="promotion-tab-pane"
                  aria-selected="false"
                >
                  Promotion
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                >
                  Tarifs
                </button>
              </li>
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
                  Politiques
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
                  style="border-radius: 0px 5px 0px 0px !important;"
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
               <div v-if="companieStore.programmeVoyages.length > 0">
                <div class="row mt-4">
                  <div class="col-md-6 mb-4" v-for="(programme, i) in companieStore.programmeVoyages" :key="i">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6 mt-2">
                            <button
                              class="btn btn-primary mb-2"
                              style="
                                background-color: #219935;
                                border-color: #219935;
                              "
                            >
                              {{ programme.montant }} FCFA
                            </button>
                          </div>
                          <div class="col-md-6"></div>

                          <div class="col-md-6 mt-2">
                            <p><strong>Lieu de départ |</strong> {{ programme.lieu_depart }}</p>
                          </div>

                          <div class="col-md-6 mt-2">
                            <p><strong>Destinations |</strong> {{ programme.destination }}</p>
                          </div>

                          <div class="col-md-6 mt-2">
                            <p><strong> Heure de départ |</strong> {{ programme.heure_depart }}</p>
                          </div>

                          <div class="col-md-6 mt-2">
                            <p><strong>Convocation |</strong> {{ programme.heure_convocation }}</p>
                          </div>

                          <div class="col-md-6 mt-3">
                            <p><strong>Escale | </strong> {{ programme.escale }}</p>
                          </div>

                          <div class="col-md-6 mt-3">
                            <p><strong>Jours de voyage |</strong> {{ programme.jours_voyage }}</p>
                          </div>
                          <div class="col-md-12">
                            <!-- Button trigger modal -->
                            <router-link :to="`/detail_reservation_ticket/${programme.uid}`">
                              <button
                                type="button"
                                class="btn btn-primary"
                                style="
                                  background-color: #219935;
                                  border-color: #219935;
                                "
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                Voir plus
                              </button>
                            </router-link>

                            <!-- Modal -->
                            <!-- <div
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
                                    style="background: #deeee4"
                                  >
                                    <h1
                                      class="modal-title fs-5"
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
                                      @submit.prevent="reserver(programme)"
                                    >
                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
                                          >Nom & Prénoms</label
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
                                          >Ville de départ</label
                                        >
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="villeDepart"
                                          required
                                        />
                                      </div>

                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
                                          >Ville d'arrivée</label
                                        >
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="villeArrive"
                                          required
                                        />
                                      </div>

                                      <div class="col-md-6">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
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
                                          >Heure de départ</label
                                        >
                                        <input
                                          type="time"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="heure_depart"
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
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               <div class="w-100" v-else>
                <div class="row mt-4">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                    <div class="card text-center border-0">
                      <div class="text-center">
                        <img src="/assets/img/icone/trajet.png" alt="" class="img-fluid w-50">
                      </div>
                      
                      <div class="card-body">
                        <p class="card-text">Aucun trajet disponible</p>
                      </div>
                    </div>
                  
                    
                  </div>
                  <div class="col-md-3"></div>
                </div>
               </div>
                
              </div>
              <div
                class="tab-pane fade"
                id="promotion-tab-pane"
                role="tabpanel"
                aria-labelledby="promotion-tab"
                tabindex="0"
              >
              <div  v-if="promotionStore.companiePromotionCars.length > 0">
                  <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col" v-for="(promoCar, i) in promotionStore.companiePromotionCars" :key="i">
                    
                    <div
                      class="card border-0"
                      style="background: #f3f4f6; padding: 6px"
                    >
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
                              src="/assets/img/icone/map.png"
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
                        style="
                          padding: 6px;
                          background: #a6a6a621;
                          box-shadow: none;
                          background: transparent;
                        "
                      >
                        <router-link
                          to="'/detail'"
                          style="
                            border: 1px solid;
                            border-radius: 5px;
                            border-color: #a6a6a6;
                          "
                        >
                          <img
                            src="/assets/img/car3.jpg"
                            class="card-img-top"
                            alt="..."
                            style="
                              border-radius: 5px 5px 5px 5px;
                              height: 215px !important;
                              object-fit: cover;
                            "
                          />
                    </router-link>
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
                <div class="w-100" v-else>
                  <div class="row mt-4">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                      <div class="card text-center border-0">
                        <div class="text-center">
                          <img src="/assets/img/icone/promo.png" alt="" class="img-fluid w-50">
                        </div>
                        
                        <div class="card-body">
                          <p class="card-text">Aucune promotion disponible.</p>
                        </div>
                      </div>
                    
                      
                    </div>
                    <div class="col-md-3"></div>
                  </div>
                </div>
                 
              </div>
              <div
                class="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <p class="card-text">
                              <strong>Location Hyundai Santa fe 2022 </strong>
                            </p>
                          </div>
                          <div class="col-md-6 text-end">
                            <button
                              class="btn btn-primary"
                              style="background: #219935; border-color: #219935"
                            >
                              5000 FCFA
                            </button>
                          </div>
                        </div>
                        <hr />

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
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

                            <p><strong> Responsable |</strong>{{ companieStore.companie.responsable }}</p>
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
                                    src="/assets/img/icone/mail.png"
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
                                    src="/assets/img/icone/web.png"
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
                                    src="/assets/img/icone/maps.png"
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
                                    src="/assets/img/icone/location.png"
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
<style scoped>
  .nav-tabs .nav-link {
      /* margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); */
      /* background: 0 0; */
      /* border: var(--bs-nav-tabs-border-width) solid transparent; */
      /* border-top-left-radius: var(--bs-nav-tabs-border-radius); */
      /* border-top-right-radius: var(--bs-nav-tabs-border-radius); */
      margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
      border: var(--bs-nav-tabs-border-width) solid transparent;
      /* border-color: #219935; */
      border-radius: 0px !important;
  }

  #img_couv{
  height: 450px;
    /* object-fit: cover; */
  object-fit: fill;
  image-rendering: -webkit-optimize-contrast;
}

</style>
