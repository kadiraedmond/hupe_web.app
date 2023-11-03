<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCompanieStore } from "@/store/companie.js";
import { usePromotionStore } from "@/store/promotion.js";
import Loader from "@/components/Loader.vue";

import { collection, doc, addDoc } from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";
import { toast } from "vue3-toastify";

import { useAuthStore } from "@/store/auth.js";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const companieStore = useCompanieStore();
const promotionStore = usePromotionStore();

const authStore = useAuthStore();
const carId = route.params.id;

onBeforeMount(async () => {
  const companieId = await companieStore.companie.uid
  companieStore.setCarById(carId, companieId)
});

onMounted(() => {
  window.scrollTo(0, 0);
});

const user = JSON.parse(localStorage.getItem("user")) || authStore.user;

const name = ref("");
const avecChauffeur = ref(false);
const sansChauffeur = ref(false);
const capitalPays = ref(false);
const interieurPays = ref(false);
const dateRetrait = ref();
const heureRetrait = ref();
const lieuRetrait = ref("");
const dateRetour = ref();
const permis = ref();

const toggleChauffeur = (num) => {
  if (num == 1) {
    avecChauffeur.value = true;
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

const handleFileChange = () => {
  const fileInput = document.querySelector("#fileInput");

  const selectedFile = fileInput.files[0];

  permis.value = selectedFile;
};

const locationColRef = collection(firestoreDb, "location_vehicules");

const isLoading = ref(false);

const reserver = async (car) => {
  const Data = {
    boite: car.boite,
    chauffeur: avecChauffeur.value === true ? "Oui" : "Non",
    client_id: user.uid || "",
    client_profil_url: user.imageUrl || "",
    compagnie_id: companieStore.companie.uid,
    created_at: new Date(),
    date_retour: dateRetour.value,
    date_retrait: dateRetrait.value,
    enPromo: car.enPromo,
    heure_retrait: heureRetrait.value,
    identite_image_url: permis.value || "",
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
    telephone_client: user.telephone,
    ticket_id: uuidv4(),
    vehicule: car.vehicule,
    vehicule_image_url: car.vehicule_image_url,
  }

  if(Data)  isLoading.value = true

  try {
    const docRef = await addDoc(locationColRef, Data);

    if (docRef) {
      console.log("Document ajouté avec success");

      isLoading.value = false;

      document.querySelector(".btn-close").click();

      toast.success("Réservation effectuée avec succès", {
        autoClose: 3500,
        position: toast.POSITION.TOP_CENTER,
      });
    }

    document.querySelector("#reservationForm").reset();
  } catch (error) {
    console.log(error);
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
                  <p class="card-text text-white">{{ companieStore.car.vehicule }}</p>
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
                  <p class="card-text text-white">{{ companieStore.car.modele }}</p>
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
                  <p class="card-text text-white">{{ companieStore.car.anne_vehicule }}</p>
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
                  <p class="card-text text-white">{{ companieStore.car.moteur }}</p>
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
                  <p class="card-text text-white">{{ companieStore.car.serie_vehicule }}</p>
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
                  <p class="card-text text-white">{{ companieStore.car.boite }}</p>
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
                {{ companieStore.car.montant }} FCFA
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
                <i class="bx bx-plus"></i> {{ companieStore.car.avecchauffeurprix }} FCFA
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
                <i class="bx bx-plus"></i> {{ companieStore.car.interieurpaysprix }} FCFA
              </button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-12 mt-4 text-start">
              <!-- Button trigger modal -->
            <div class="col-md-6 text-end">
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
                          @submit.prevent="reserver(car)"
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
                              :value="companieStore.car.vehicule"
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
                              :value="companieStore.serie_vehicule"
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
                              :value="companieStore.car.modele"
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
                              :value="companieStore.car.moteur"
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
                              :value="companieStore.car.boite"
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
                  "
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <img
            :src="companieStore.car.vehicule_image_url"
            alt=""
            class="img-fluid"
            style="border-radius: 5px; width: 800px; height: 350px; max-width: 800px; max-height: 350px"
          />
          <div class="row mt-4">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="margin-top: 14px">
              <div class="row mt-4">
                <div class="col-md-3">
                  <img
                    :src="companieStore.car.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px; max-width: 120px; max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="companieStore.car.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px; max-width: 120px; max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="companieStore.car.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px; max-width: 120px; max-height: 60px"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    :src="companieStore.car.vehicule_image_url"
                    alt=""
                    class="img-fluid"
                    style="border-radius: 5px; width: 120px; height: 60px; max-width: 120px; max-height: 60px"
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
            <router-link to="/details_vente_engin">
              <img
                :src="car.vehicule_image_url"
                class="card-img-top"
                alt="..."
                style="border-radius: 10px 10px 0px 0px; max-width: 350px; width: 350px; height: 280px; margin: 0 1rem"
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
              <router-link to="/details_vente_engin">
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
