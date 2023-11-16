<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useCompanieStore } from "@/store/companie.js"
import { usePromotionStore } from "@/store/promotion.js"
import Loader from "@/components/Loader.vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'

import { collection, doc, addDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from "vue3-toastify"

import { useAuthStore } from "@/store/auth.js"
import { v4 as uuidv4 } from "uuid"

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const carId = route.params.id

let companieId 

onBeforeMount(async () => {
  await promotionStore.setVehicule(carId)

  companieId = promotionStore.vehicule.compagnie_id
  console.log(companieId)

  companieStore.setCompanieById(companieId)
  companieStore.setCompanieCars(companieId)
});

onMounted(() => {
  window.scrollTo(0, 0);
});

const user = JSON.parse(localStorage.getItem("user")) || authStore.user;

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
  if (num == 1) {
    avecChauffeur.value = true
    sansChauffeur.value = false;
  } else if (num == 2) {
    sansChauffeur.value = true;
    avecChauffeur.value = false;
  }
};

const togglePays = (num) => {
  if (num == 3) {
    capitalPays.value = true;
    interieurPays.value = false;
  } else if (num == 4) {
    interieurPays.value = true;
    capitalPays.value = false;
  }
};

const handleFileChange = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieId}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)
  permis.value = downloadURL
}

const locationColRef = collection(firestoreDb, "location_vehicules");

const isLoading = ref(false)

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}


const reserver = async (car) => {
  isLoading.value = true
  const Data = {
    boite: car.boite,
    chauffeur: avecChauffeur.value === true ? "Oui" : "Non",
    client_id: user.uid || "",
    client_profil_url: user.imageUrl || "",
    compagnie_id: companieId,
    created_at: new Date(),
    date_retour: new Date(dateRetour.value),
    date_retrait: new Date(dateRetrait.value),
    enPromo: car.enPromo || false,
    heure_retrait: heureRetrait.value,
    identite_image_url: permis.value || '',
    interieurPays: interieurPays.value === true ? "Oui" : "Non",
    latitude: "",
    lieu_retrait: lieuRetrait.value,
    longitude: "",
    modele: car.modele,
    montant: car.montant,
    moteur: car.moteur,
    nom_client: name.value,
    number: "",
    payement: "En attente",
    plaque_vehicule: car.serie_vehicule,
    status: "En attente",
    telephone_client: user.phoneNumber,
    ticket_id: uuidv4(),
    vehicule: car.vehicule,
    vehicule_image_url: car.vehicule_image_url,
  }

  if(Data)  isLoading.value = true

  try {
    await addDoc(locationColRef, Data)

    console.log("Document ajouté avec success")

    isLoading.value = false

    document.querySelector(".btn-close").click()

    Swal.fire({
      title: "Succès",
      text: "Réservation effectuée avec succès",
      icon: "success"
    })

    const notificationColRef = collection(firestoreDb, 'notifications')

    const uneJournee = 24 * 60 * 60 * 1000

    const dateRetrait = new Date(car.date_retrait)
    const dateRetour = new Date(car.date_retour)

    const differenceEnMs = Math.abs(dateRetour - dateRetrait) 

    const differenceEnJours = Math.round(differenceEnMs / uneJournee)

    const userDocRef = doc(firestoreDb, 'users', `${car.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const formatedDateRetrait = new Intl.DateTimeFormat(undefined, options).format(car.date_retrait)
    const formatedDateRetour = new Intl.DateTimeFormat(undefined, options).format(car.date_retour)
    
    const comp_notif = {
      title: 'Location de véhicule', 
      message: `Vous avez une réservation du véhicule « ${car.vehicule} ${car.modele} » en attente de validation venant du client « ${user.lastName} ${user.firstName} » pour le trajet de « ${differenceEnJours} jours » du « ${formatedDateRetrait} » au « ${formatedDateRetour} », veuillez valider ou annuler cette réservation.`, 
      userId: car.compagnie_id,
      lu: false, 
      createdAt: new Date()
    }

    await addDoc(notificationColRef, comp_notif)

    document.querySelector("#reservationForm").reset()
  } catch (error) {
    console.log(error)
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <!-- ======= Breadcrumbs ======= -->
  <!-- <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <ol>
        <li><router-link to="/" style="color: #219935">Home</router-link></li>
        <li>Location de véhicule</li>
        <li>{{ companieStore.car.vehicule }} {{ companieStore.car.modele }} {{ companieStore.car.anne_vehicule }}</li>
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
                    style="font-size: 15px; font-weight: 700"
                  >
                    Marque
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.vehicule }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #f77f00">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 15px; font-weight: 700"
                  >
                    Modéle
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.modele }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #3987fb">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 15px; font-weight: 700"
                  >
                    Année
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.anne_vehicule }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #ffd700">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 15px; font-weight: 700"
                  >
                    Moteur
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.moteur }}</p>
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
                    Immatriculation
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.serie_vehicule }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0" style="background: #665d1e">
                <div class="card-body text-center">
                  <h5
                    class="card-title"
                    style="font-size: 15px; font-weight: 700"
                  >
                    Transmission
                  </h5>
                  <hr style="color: white" />
                  <p class="card-text text-white">{{ promotionStore.vehicule.boite }}</p>
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
                {{ promotionStore.vehicule.montant }} FCFA
              </button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <p>Option chauffeur</p>
            </div>
            <div class="col-md-6 text-end">
              <button
                class="btn btn-primary w-100"
                style="background: #219935; border-color: #219935"
              >
                <i class="bx bx-plus"></i> {{ promotionStore.vehicule.avecchauffeurprix }} FCFA
              </button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <p>Intérieur du pays</p>
            </div>
            <div class="col-md-6 text-end">
              <button
                class="btn btn-primary w-100"
                style="background: #219935; border-color: #219935"
              >
                <i class="bx bx-plus"></i> {{ promotionStore.vehicule.interieurpaysprix }} FCFA
              </button>
            </div>
          </div>

          <div class="row mt-4">
              <!-- Button trigger modal -->
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
                              v-model="name"
                              required
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
                              :value="user.phoneNumber"
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
          </div>
          </div>
        <div class="col-md-7">
          <img
            :src="promotionStore.vehicule.vehicule_image_url"
            alt=""
            class="img-fluid"
            style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
          />
          <div class="row mt-4">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="margin-top: 14px">
              <div class="row mt-4">
                <div class="col-md-3">
                  <img
                    :src="promotionStore.vehicule.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="promotionStore.vehicule.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="promotionStore.vehicule.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="promotionStore.vehicule.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px;  max-height: 60px"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
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
              Véhicules de la même compagnie
            </h2>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="(car, i) in companieStore.companieCars" :key="i">
          <div
            class="card h-100"
            id="compagnie_card"
            style="background: #f3f4f6; box-shadow: none"
          >
            <router-link to="/detail_vehicule_location">
              <img
                :src="car.vehicule_image_url"
                class="card-img-top"
                alt="..."
                style="border-radius: 10px 10px 0px 0px;  height: 179px; object-fit: cover;"
              />
            </router-link>
            <button
              class="btn btn-primary"
              id="badges0"
              style="left: 10px !important"
            >
              {{ car.montant }} FCFA
            </button>

            <div class="card-body">
              <router-link to="/detail_vehicule_location">
                <div class="row">
                  <div class="col-md-12">
                    <h5
                      class="card-title"
                      style="font-size: 15px; color: black;"
                    >
                      {{ car.modele }} {{ car.vehicule }} {{ car.anne_vehicule }}
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
