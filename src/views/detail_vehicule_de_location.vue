<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useCompanieStore } from "@/store/companie.js"
import { usePromotionStore } from "@/store/promotion.js"
import Loader from "@/components/Loader.vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage' 
import Swal from 'sweetalert2' 

import router from '@/router/router.js' 

import { collection, doc, addDoc, updateDoc, Timestamp } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from "vue3-toastify"

import { useAuthStore } from "@/store/auth.js"
import { v4 as uuidv4 } from "uuid"

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const carId = route.params.vehiculeId

const companieId = route.params.companieId

const vehicules = ref([]) 
const autresVehicules = ref([])

onBeforeMount(async () => {
  await promotionStore.setVehicule(companieId, carId)

  // companieId = await promotionStore.vehicule.compagnie_uid
  // console.log(companieId)

  companieStore.setCompanieById(companieId)
  await companieStore.setCompanieCars(companieId) 

  vehicules.value = companieStore.companieCars 

  vehicules.value.forEach(vehicule => {
    if(vehicule.uid !== carId) {
      autresVehicules.value.push(vehicule)
    }
  })
});

onMounted(() => {
  window.scrollTo(0, 0)
})

const user = JSON.parse(localStorage.getItem("user")) || authStore.user

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
  // hour: '2-digit', 
  // minute: '2-digit', 
  // second: '2-digit', 
}


const reserver = async (car) => {
  isLoading.value = true
  const Data = { 
    uid: '', 
    boite: car.boite,
    chauffeur: avecChauffeur.value === true ? "Oui" : "Non",
    client_id: user.uid || "", 
    client_addresse: user.addresse, 
    client_profil_url: user.imageUrl || "",
    compagnie_uid: companieId, 
    vehicule_id: car.uid, 
    created_at: Timestamp.now(),
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
    annee_vehicule: car.anne_vehicule, 
    montant: car.montant, 
    avecchauffeurprix: car.avecchauffeurprix, 
    interieurpaysprix: car.interieurpaysprix, 
    moteur: car.moteur,
    nom_client: `${user.lastName} ${user.firstName}`, 
    number: `T_${Date.now()}`, 
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
    const docRef = await addDoc(locationColRef, Data)

    console.log("Document ajouté avec success") 

    await updateDoc(docRef, { uid: `${docRef.id}` })

    isLoading.value = false


    const notificationColRef = collection(firestoreDb, 'notifications')

    const differenceEnJours = Math.round((Data.date_retour - Data.date_retrait) / (24 * 60 * 60))

    const userDocRef = doc(firestoreDb, 'users', `${car.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const formatedDateRetrait = new Intl.DateTimeFormat(undefined, options).format(Data.date_retrait)
    const formatedDateRetour = new Intl.DateTimeFormat(undefined, options).format(Data.date_retour)
    
    const comp_notif = {
      uid: '', 
      title: 'Location de véhicule', 
      message: `Vous avez une réservation du véhicule « ${car.vehicule} ${car.modele} » en attente de validation venant du client « ${user.lastName} ${user.firstName} » pour le trajet de « ${differenceEnJours} jours » du « ${formatedDateRetrait} » au « ${formatedDateRetour} », veuillez valider ou annuler cette réservation.`, 
      userId: Data.compagnie_uid,
      lu: false, 
      createdAt: Timestamp.now() 
    }

    const comp_docRef = await addDoc(notificationColRef, comp_notif)

    await updateDoc(comp_docRef, { uid: `${comp_docRef.id}` }) 

    document.querySelector("#reservationForm").reset() 
    document.querySelector('.btn-close').click()

    Swal.fire({
      title: "Succès",
      text: "Réservation effectuée avec succès",
      icon: "success"
    })

    await router.push(`/notation/${companieId}`) 
    window.location.reload() 
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

          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <img
              :src="promotionStore.vehicule.vehicule_image_url"
                alt=""
                class="img-fluid"
                style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
              />      
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
              <img
              :src="promotionStore.vehicule.vehicule_image_url2"
                alt=""
                class="img-fluid"
                style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
              />
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
              <img
              :src="promotionStore.vehicule.vehicule_image_url3"
                alt=""
                class="img-fluid"
                style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
              />
            </div>
            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
              <img
              :src="promotionStore.vehicule.vehicule_image_url4"
                alt=""
                class="img-fluid"
                style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
              />
            </div>

            <div class="tab-pane fade" id="disableds-tab-pane" role="tabpanel" aria-labelledby="disableds-tab" tabindex="0">
              <img
              :src="promotionStore.vehicule.vehicule_image_url5"
                alt=""
                class="img-fluid"
                style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
              />
            </div>
          </div>

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <div class="row mt-4">
                <div class="col-md-1"></div>
                <div class="col-md-10" style="margin-top: 14px">
                  <div class="row row-cols-5 row-cols-md-5 g-4">
                    <div class="col">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                          <img
                            :src="promotionStore.vehicule.vehicule_image_url"
                            alt=""
                            class="img-fluid"
                            style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                          />
                        </button>
                      </li>
                    </div>
                    <div class="col">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                          <img
                            :src="promotionStore.vehicule.vehicule_image_url2"
                            alt=""
                            class="img-fluid"
                            style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                          />
                        </button>
                      </li>
                    </div>
                    <div class="col">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                          <img
                            :src="promotionStore.vehicule.vehicule_image_url3"
                            alt=""
                            class="img-fluid"
                            style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                          />
                        </button>
                      </li>
                    </div>
                    <div class="col">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                          <img
                            :src="promotionStore.vehicule.vehicule_image_url4"
                            alt=""
                            class="img-fluid"
                            style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                          />
                        </button>
                      </li>
                    </div>
                    <div class="col">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="disableds-tab" data-bs-toggle="tab" data-bs-target="#disableds-tab-pane" type="button" role="tab" aria-controls="disableds-tab-pane" aria-selected="false">
                          <img
                            :src="promotionStore.vehicule.vehicule_image_url5"
                            alt=""
                            class="img-fluid"
                            style="border-radius: 5px; width: 120px; height: 60px;   max-height: 60px"
                          />
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="col-md-1"></div>
            </div>
 
          </ul>
         
         
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="row">
                <div class="row">
                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;">Caracteristique</h5>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/marque.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Marque</h5>
                        <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.vehicule.vehicule }}</p>
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/modele.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Modéle</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.vehicule.modele }}
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/annee.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Année</h5>
                          <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.vehicule.anne_vehicule }}</p>
                        </div>

                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/ima.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Immatriculation</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.vehicule.serie_vehicule }}
                          </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/trans.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Transmission</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.vehicule.boite }}
                          </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-md-8 d-flex">
                        <button class="btn btn-primary" id="btn_circle">
                          <img src="/assets/img/detail/moteur.png" alt="" class="img-fluid">
                        </button>
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Moteur</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.vehicule.moteur }}
                          </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>

                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;">Prix</h5>

                  <div class="col-md-12 mt-3">
                    <div class="card">
                      <div class="card-body text-center">
                        <p class="card-title" style="font-weight: 600;">La valeur de la voiture est estimée à</p>
                         
                        <p class="card-text" style="font-size: 50px; font-weight: 500; color: #219935;"> {{ promotionStore.vehicule.montant }} FCFA</p>
                         
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 mt-3">
                    <p class="" style="font-size: 14px">Options chauffeur</p>
                    <div class="card">
                      <div class="card-body">
                        <p class="" style="font-size: 14px ; margin-bottom: -5px;">{{ promotionStore.vehicule.avecchauffeurprix }} FCFA</p>
                         
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 mt-3">
                    <p class="" style="font-size: 14px">Option Intérieur</p>
                    <div class="card">
                      <div class="card-body">
                        <p class="" style="font-size: 14px ; margin-bottom: -5px;"> {{ promotionStore.vehicule.interieurpaysprix }} FCFA</p>
                         
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
                          Commencer la réservation
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
                          Commencer la réservation
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
                  <h5 class="card-title">{{ promotionStore.vehicule.vehicule }} {{ promotionStore.vehicule.modele }} {{ promotionStore.vehicule.anne_vehicule }}</h5>

                  <p class="card-text"></p>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <h6>Montant</h6>
                        </div>
                        <div class="col-6">
                          <h6 style=" color: #219935 !important">
                            {{ promotionStore.vehicule.montant }} FCFA
                          </h6>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <h6>Options chauffeur</h6>
                        </div>
                        <div class="col-6">
                          <h6 style=" color: #219935 !important">
                          +  {{ promotionStore.vehicule.avecchauffeurprix }} FCFA
                          </h6>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6">
                          <h6>Option Intérieur</h6>
                        </div>
                        <div class="col-6">
                          <h6 style=" color: #219935 !important">
                          +  {{ promotionStore.vehicule.interieurpaysprix }} FCFA
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

                    

                    🚗 Réservez Maintenant, Explorez Plus Tard : Ne manquez pas l'opportunité de vivre l'aventure. Réservez notre {{ promotionStore.vehicule.vehicule }} {{ promotionStore.vehicule.modele }} {{ promotionStore.vehicule.anne_vehicule }} dès maintenant et ouvrez la porte à une expérience   sans limites.
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
                                  style="background: #219935"
                                >
                                  <h1
                                    class="modal-title text-white fs-5"
                                    id="exampleModalLabel"
                                    style="font-size: 17px !important"
                                  >
                                    Réserver
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
  </section>
  <!-- End Portfolio Details Section -->

  <!-- ======= Expertise et conseils en immobiliers Section ======= -->
  <section id="features" class="features" style="margin-top: -60px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2 style="font-size: 22px; color: black">
              Recommandé par ce partenaire
            </h2>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="(car, i) in autresVehicules" :key="i">
          <div
            class="card h-100"
            id="compagnie_card"
            style="background: #f3f4f6; box-shadow: none"
          >
            <router-link :to="`/detail_vehicule_location/${companieId}/${car.uid}`">
              <img
                :src="car.vehicule_image_url"
                class="card-img-top"
                alt="..."
                style="border-radius: 10px 10px 0px 0px;  height: 179px; object-fit: cover;"
              />
            </router-link>
            
              <router-link
                :to="`/detail_vehicule_location/${car.uid}`"
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
                            <img
                              :src="car.companieInfos.imageLogoUrl"
                              alt
                              class="w-px-40 h-auto rounded-circle"
                              style="width: 50px; height: 50px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;"
                            />
                            <div>
                              <div class="card-body d-flex">
                                <h5 class="card-title" style="font-size: 12px">
                                  {{ car.companieInfos.raison_social }}
                                </h5>
                                
                              </div>
                            </div>
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
                              {{ car.montant }} FCFA
                            </button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                    <div :id="'carouselExampleControls' + index" class="carousel slide"  data-ride="false"  data-interval="false">
                      <div class="carousel-inner">
                        <div class="carousel-item active ">
                          <img :src="car.vehicule_image_url" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px;">
                        </div>
                        <div class="carousel-item">
                          <img :src="car.vehicule_image_url" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px;">
                        </div>
                        <div class="carousel-item">
                          <img :src="car.vehicule_image_url" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px;">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="prev">
                        <i class='bx bx-chevron-left' style="font-size: 34px;"></i>
                      </button>
                      <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="next">
                        <i class='bx bx-chevron-right' style="font-size: 34px;"></i>
                      </button>
                    </div>
                  
                    <div class="card-body" style="background-color:#f9f9f9;">
                      <div class="row" style=" background: white; border-radius: 5px;">
                        <div class="col-md-12 mt-2 mb-2">
                          <h5 class="card-title " style=" font-size: 15px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                  />   {{ car.vehicule }}  {{ car.modele }} {{ car.anne_vehicule }}</h5>
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

.nav-tabs {
    --bs-nav-tabs-border-width: 1px;
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-border-radius: 0.375rem;
    --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;
    --bs-nav-tabs-link-active-color: #495057;
    --bs-nav-tabs-link-active-bg: #fff;
    --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
    border-bottom: none !important;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #fff;
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
    border-radius: 5px;
}

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
    border-radius: 5px !important;
}
</style>
