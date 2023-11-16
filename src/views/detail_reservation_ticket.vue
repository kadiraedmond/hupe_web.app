<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from '@/components/Loader.vue'

import { collection, doc, getDoc, addDoc } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'

import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const programmeId = route.params.id


onBeforeMount(async () => {
  await promotionStore.setProgramme(programmeId)

  const companieId = await promotionStore.programme.compagnie_id

  companieStore.setCompanieById(companieId)
  companieStore.setProgrammesVoyages(companieId)
})

const name = ref('')
const nombrePersonnes = ref()

const reservationColRef = collection(firestoreDb, 'reservation')

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const isLoading = ref(false)

const reserver = async (programme) => {
  isLoading.value = true
  const Data = {
    client_id: user.uid,
    client_profil_url: user.imageUrl || '',
    compagnie_id: programme.compagnie_id,
    createdAt: new Date(),
    date_depart: programme.date_depart || '',
    destination: programme.destination,
    escale: programme.escale,
    heure_depart: programme.heure_depart,
    lieu_depart: programme.lieu_depart,
    lieu_arrive: programme.destination,
    montant: programme.montant,
    nom_client: name.value,
    nombre_personne: nombrePersonnes.value,
    number: programme.number || '',
    payement: 'En attente',
    status: 'En attente',
    telephone_client: user.phoneNumber,
    ticket_id: uuidv4()
  }

  if(Data)  isLoading.value = true

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
  <!-- ======= Breadcrumbs ======= -->
  <!-- <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <ol>
        <li><router-link to="/" style="color: #219935">Home</router-link></li>
        <li>Rerservation</li>
        <li>{{ companieStore.programme.lieu_depart }} - {{ companieStore.programme.destination }}</li>
      </ol>
    </div>
  </section> -->
  <!-- End Breadcrumbs -->

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details mt-5">
    <div class="container">
      <div class="row no-gutters mt-4">
        <div class="col-md-5">
          <div class="row row-cols-1 row-cols-md-3 g-2">
            <div class="col">
              <div class="card border-0" style="background: #219935">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Trajet
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #f77f00">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Escale
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.escale }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #3987fb">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Heure de départ
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.heure_depart }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #ffd700">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Convocation
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.heure_convocation }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #ff5733">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Jours du voyage
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.jours_voyage }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #665d1e">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 13px; font-weight: 700"
                  >
                    Nombres de place
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.programme.nb_place }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <p>Montant</p>
            </div>
            <div class="col-md-6 text-end">
              <button
                class="btn btn-primary w-100"
                style="background: #219935; border-color: #219935"
              >
                {{ promotionStore.programme.montant }} FCFA
              </button>
            </div>
          </div>

          <div class="row mt-4">
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
                    v-if="user.uid"
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
                                v-model="name"
                                required
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
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                :value="promotionStore.programme.date_depart"
                                required
                                disabled
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
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                :value="promotionStore.programme.heure_depart"
                                required
                                disabled
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
            <div class="col-md-6 text-end">
              <!-- <button
                class="btn btn-primary w-100"
                style="
                  background: #8b8b8b;
                  border-color: #efefef;
                  width: 70px !important;
                  height: 70px;
                  border-radius: 50%;
                "
              >
              </button> -->
              <router-link :to="`/details/${companieId}`">
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
          </div>
        </div>
        <div class="col-md-7">
          <img
            src="/public/assets/img/rb.jpg"
            alt=""
            class="img-fluid"
            style="border-radius: 5px ;height: 397px; width: 100%; object-fit: cover;"
          />
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

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="(programme, i) in companieStore.programmeVoyages" :key="i">
          <div
            class="card h-100"
            id="compagnie_card"
            style="background: #f3f4f6; box-shadow: none"
          >
            <router-link to="/details_vente_engin">
              <img
                src="/public/assets/img/rb.jpg"
                class="card-img-top"
                alt="..."
                style="border-radius: 10px 10px 0px 0px"
              />
            </router-link>
            <button
              class="btn btn-primary"
              id="badges0"
              style="left: 10px !important"
            >
              {{ programme.montant }} FCFA
            </button>

            <div class="card-body">
              <router-link to="/details_vente_engin">
                <div class="row">
                  <div class="col-md-12">
                    <h5
                      class="card-title"
                      style="font-size: 15px; color: black"
                    >
                      {{ programme.lieu_depart }} - {{ programme.destination }}
                    </h5>
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

<style></style>
