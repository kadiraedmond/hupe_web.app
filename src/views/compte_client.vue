<script setup>
import { useUserStore } from "@/store/user.js" 
import { useDemandeStore } from '@/store/demande.js'
import { useAuthStore } from "@/store/auth.js"
import { onBeforeMount, onMounted, ref } from "vue"

import Location from '@/components/compte_client/Location.vue'
import Reservation from '@/components/compte_client/Reservation.vue'
import MesReservations from '@/components/compte_client/MesReservations.vue'
import MesLocations from '@/components/compte_client/MesLocations.vue'
import GrosEngin from '@/components/compte_client/GrosEngins.vue'
import AchatVehicule from '@/components/compte_client/AchatVehicule.vue'
import Apropos from '@/components/compte_client/Apropos.vue'
import Compte from '@/components/compte_client/Compte.vue'
import Post from '@/components/compte_client/Post.vue' 
import Swal from 'sweetalert2'

import { addDoc, updateDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

const userStore = useUserStore()
const authStore = useAuthStore() 
const demandeStore = useDemandeStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'Pxr3ZohT9Y6vOztEeNhf' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  userStore.setUser(userId) 
})


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
      style="margin-top: 70px"
    >
      <div class="container">
        <div class="row g-4">
          <div class="col-12">
            <img
            src="/assets/img/clt1.jpg"
              alt=""
              class="img-fluid w-100"
              id="img_couv"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-4">
                  <img
                  :src="userStore.user.imageUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="
                      width: 150px;
                      height: 150px !important;
                      object-fit: cover;
                      border: 2.8px solid #e8e8e8;
                    "
                  />
                </div>
                <div class="col-8">
                  <div class="card-body" id="card_espace">
                    <h5 class="card-title">
                      {{ userStore.user.lastName }}
                      {{ userStore.user.firstName }}
                    </h5>
                    <p class="card-text">
                      {{ userStore.user.profession }}
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
      style="margin-top: -70px"
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
                  Posts
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
                  style="border-radius: 0px 5px 0px 0px !important;"
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
<style scoped>

.nav-tabs .nav-link {
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    border: var(--bs-nav-tabs-border-width) solid transparent;
    border-radius: 0px !important;
}

#img_couv {
  height: 250px;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  border-radius: 10px;
  border: 1px solid #219935;
  object-position: 50% 75% !important;
}

#card_espace{
    margin-left: -38px;
  }

@media (max-width: 984px) {
  #card_espace{
    margin-left: 50px;
    /* width: 260px; */
  }
  
}
</style>
