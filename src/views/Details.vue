<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'

import { collection, doc, addDoc } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'

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
const savedUser = JSON.parse(localStorage.getItem('user'))

const reserver = async (programme) => {
  const Data = {
    client_id: authStore.user.uid || savedUser.user.uid,
    client_profil_url: authStore.user.imageUrl || '',
    compagnie_id: companieId || programme.compagnie_id,
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
    telephone_client: authStore.user.telephone,
    ticket_id: uuidv4()
  }

  try {
    const docRef = await addDoc(reservationColRef, Data)

    if(docRef) console.log('Document ajouté avec success')

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
      <div class="container" data-aos="fade-up">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="companieStore.companie.imageLogoUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 160px"
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
                  Programmes
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
                  <div class="col-md-6" v-for="(programme, i) in companieStore.programmeVoyages" :key="i">
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
                              Reserver
                            </button>

                            <!-- Modal -->
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
                ...
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
