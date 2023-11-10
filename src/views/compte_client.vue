<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";

import Location from '@/components/compte_client/Location.vue'
import Reservation from '@/components/compte_client/Reservation.vue'
import MesReservations from '@/components/compte_client/MesReservations.vue'
import MesLocations from '@/components/compte_client/MesLocations.vue'
import GrosEngin from '@/components/compte_client/GrosEngins.vue'
import AchatVehicule from '@/components/compte_client/AchatVehicule.vue'
import Apropos from '@/components/compte_client/Apropos.vue'
import Compte from '@/components/compte_client/Compte.vue'
import Post from '@/components/compte_client/Post.vue'

import { addDoc, collection } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  userStore.setUser(userId)

});

const service = ref('')
const object = ref('')
const post = ref('')

const clientPublicationColRef = collection(firestoreDb, 'client_publication')

const submitPost = async () => {
  const newData = {
    client_id: authStore.user.uid,
    createdAt: new Date(),
    demande: post.value,
    lecteurs: [],
    objet: object.value,
    service: service.value,
    status: 'En attente'
  }

  try {
    const addedDoc = await addDoc(clientPublicationColRef, newData)
    
    if(addedDoc) {
      console.log('Document added successfull')
      toast.success("Publication effectuée avec succès", { 
        autoClose: 3500, 
        position: toast.POSITION.TOP_CENTER
    })
    } 
  } catch (error) {
    console.log(error)
  }

  document.querySelector('#postForm').reset()
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
        src="/public/assets/img/clt1.jpg"
        alt=""
        class="img-fluid w-100"
        style="height: 380px; object-fit: cover"
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
                    :src="userStore.user.imageUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 100px"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 16px;">
                      {{ userStore.user.lastName }}
                      {{ userStore.user.firstName }}
                    </h5>
                    <p class="card-text" style="font-size: 15px;">{{ userStore.user.profession }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-8">
            <div class="row g-2" style="margin-top: 55px;">
             
              <div class="col-md-3">
                <router-link to="/location">
                  <button class="btn btn-primary"> Louer un véhicule</button>
                </router-link>
               
              </div>
              <div class="col-md-3">
                <router-link to="/location">
                  <button class="btn btn-primary">Reserver un ticket</button>
                </router-link>
               
              </div>
              <div class="col-md-3">
                <router-link to="/location">
                  <button class="btn btn-primary">Louer un gros engin</button>
                </router-link>
               
              </div>

               <div class="col-md-3">
                <router-link to="/location">
                  <button class="btn btn-primary"> Acheter un engin</button>
                </router-link>
               
              </div>

            </div>
          </div> -->
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
                  Activités
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
                  Post
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Historiques
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li> -->
              <!-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="politique-tab" data-bs-toggle="tab" data-bs-target="#politique-tab-pane" type="button" role="tab" aria-controls="politique-tab-pane" aria-selected="false">Politique</button>
            </li> -->
              <!-- <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="res-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#res-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="res-tab-pane"
                  aria-selected="false"
                >
                Mes réservations
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="loc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#loc-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="loc-tab-pane"
                  aria-selected="false"
                >
                Mes locations
                </button>
              </li> -->
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
                 Informations personnelles
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
                  <div class="col-md-12 mt-4">
                    <div class="row">
                      <Location />
                      <Reservation />
                      <GrosEngin />
                      <AchatVehicule />
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
                <div class="row mt-4">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      style="background-color: #219935; border-color: #219935"
                    >
                      <img
                        src="/public/assets/img/icone/plus.png"
                        class="img-fluid"
                        alt="..."
                      />
                      Ajouter
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
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Faire une publication
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
                              id="postForm"
                              class="row g-3 needs-validation text-start"
                              novalidate
                              @submit.prevent="submitPost"
                            >
                              <div class="col-md-12">
                                <label
                                  for="validationDefault04"
                                  class="form-label"
                                  >Sélectionner un service</label
                                >
                                <select
                                  class="form-select"
                                  id="validationDefault04"
                                  v-model="service"
                                  required
                                >
                                  <option selected value="Location de véhicules">
                                    Location de véhicules
                                  </option>
                                  <option value="Réservation de tickets de bus">
                                    Réservation de tickets de bus
                                  </option>
                                  <option value="Location de gros engins">
                                    Location de gros engins
                                  </option>
                                  <option value="Vente d'engins">Vente d'engins</option>
                                </select>
                              </div>
                              <div class="col-md-12">
                                <label
                                  for="validationCustom02"
                                  class="form-label"
                                  >Objet</label
                                >
                                <textarea
                                  type="text"
                                  class="form-control"
                                  id="validationCustom02"
                                  v-model="object"
                                  required
                                ></textarea>
                              </div>

                              <div class="col-md-12">
                                <label
                                  for="validationCustom02"
                                  class="form-label"
                                  >Entrer votre demande</label
                                >
                                <textarea
                                  type="text"
                                  class="form-control"
                                  id="validationCustom02"
                                  v-model="post"
                                  required
                                  style="height: 130px"
                                ></textarea>
                              </div>

                              <div class="col-12 text-center">
                                <button
                                  class="btn btn-primary"
                                  style="
                                    background-color: #219935;
                                    border-color: #219935;
                                  "
                                  type="submit"
                                >
                                  Envoyer
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Post />
              </div>
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <Compte />
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

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="res-tab-pane"
                role="tabpanel"
                aria-labelledby="res-tab"
                tabindex="0"
              >
                <MesReservations />
              </div>

              <div
                class="tab-pane fade"
                id="loc-tab-pane"
                role="tabpanel"
                aria-labelledby="loc-tab"
                tabindex="0"
              >
                <MesLocations />
              </div>

              <div
                class="tab-pane fade"
                id="apropos-tab-pane"
                role="tabpanel"
                aria-labelledby="apropos-tab"
                tabindex="0"
              >
                <Apropos />
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
