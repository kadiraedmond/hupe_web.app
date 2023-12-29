<script setup>
import { useCompanieStore } from "@/store/companie.js"
import { useAuthStore } from "@/store/auth.js"
import { reactive, ref, onBeforeMount, onMounted } from "vue"
import Swal from 'sweetalert2'
import { collection, query, doc, where, Timestamp, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

const companieStore = useCompanieStore()
const authStore = useAuthStore()

let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});

const updateReservationsDashboard = () => {
  companieStore.companieLocations.forEach((location) => {
    if(location.status == "En attente") {
      enAttente.totalNumber++;
      enAttente.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Validé") { 
      valides.totalNumber++;
      valides.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Confirmé") { 
      confirmees.totalNumber++;
      confirmees.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Annuler") { 
      annulees.totalNumber++;
      annulees.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Reporté") { 
      reportees.totalNumber++;
      reportees.totalPrice += Number(location.montant) 

    } 
    
    else if(location.status == "Utilisé") { 
      utilisees.totalNumber++;
      utilisees.totalPrice += Number(location.montant) 

    }
  });
};
const savedUser = JSON.parse(localStorage.getItem("user"))

// const userId = savedUser.uid || authStore.user.uid
const userId = "qdo1Ig1tnMlmvFCxa6OE" || savedUser.uid || authStore.user.uid

const elements_en_attente = ref([])
const elements_valide = ref([])
const elements_reporte = ref([])
const elements_confirme = ref([])
const elements_utilise = ref([])
const elements_annule = ref([])

onBeforeMount(async () => {
  await companieStore.setCompanieLocations(userId) 

  enAttente.totalNumber = 0
  enAttente.totalPrice = 0

  valides.totalNumber = 0 
  valides.totalPrice = 0 

  confirmees.totalNumber = 0 
  confirmees.totalPrice = 0 

  annulees.totalNumber = 0 
  annulees.totalPrice = 0 

  reportees.totalNumber = 0 
  reportees.totalPrice = 0 
  
  utilisees.totalNumber = 0
  utilisees.totalPrice = 0 
  
  updateReservationsDashboard() 
  
  companieStore.companieLocations.forEach(comp => {
    if(comp.status == 'En attente') {
      elements_en_attente.value.push(comp)
    } else if(comp.status == 'Validé') {
      elements_valide.value.push(comp)
    } else if(comp.status == 'Reporté') {
      elements_reporte.value.push(comp)
    } else if(comp.status == 'Confirmé') {
      elements_confirme.value.push(comp)
    } else if(comp.status == 'Annuler') {
      elements_annule.value.push(comp)
    } else if(comp.status == 'Utilisé') {
      elements_utilise.value.push(comp)
    }
    
  })
});

onMounted(() => {
  window.scrollTo(0, 0);
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const valider = async (location) => {
  const docRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)

  try {
    await updateDoc(docRef, { status: 'Validé' })
    Swal.fire({
      title: "Succès",
      text: "Validation effectuée",
      icon: "success"
    })

    const userDocRef = doc(firestoreDb, 'users', `${location.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const notificationColRef = collection(firestoreDb, 'notifications')

    const uneJournee = 24 * 60 * 60 * 1000

    const dateRetrait = new Date(location.date_retrait)
    const dateRetour = new Date(location.date_retour)

    const differenceEnMs = Math.abs(dateRetour - dateRetrait) 

    const differenceEnJours = Math.round(differenceEnMs / uneJournee)

    const formatedDateRetrait = new Intl.DateTimeFormat(undefined, options).format(location.date_retrait)
    const formatedDateRetour = new Intl.DateTimeFormat(undefined, options).format(location.date_retour)
    
    const data = {
      title: 'Validation de réservation', 
      message: `Votre demande de réservation du véhicule « ${location.vehicule} ${location.modele} » pour une durée de « ${differenceEnJours} jours » du « ${formatedDateRetrait} » au « ${formatedDateRetour} » a été validée, vous pouvez procéder au paiement dès maintenant.`, 
      destinataire: location.client_id, 
      lu: false, 
      createdAt: Timestamp.now()
    }

    await addDoc(notificationColRef, data)
  } catch (error) {
    Swal.fire({
      title: "Erreur",
      text: "Erreur lors de la validation",
      icon: "error"
    })
    console.log(error)
  }
} 
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12 mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <div class="row">
          <div class="col-md-4">
            <li class="nav-item mb-4" role="presentation">
              <button
                class="nav-link active w-100"
                id="attente-tab"
                data-bs-toggle="tab"
                data-bs-target="#attente-tab-pane"
                type="button"
                role="tab"
                aria-controls="attente-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #f77f00 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ enAttente.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-time"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ enAttente.totalNumber }}
                          </button>
                          Locations en attente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#valid-tab-pane"
                type="button"
                role="tab"
                aria-controls="valid-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #219935 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ valides.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-circle"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ valides.totalNumber }}
                          </button>
                          Locations validées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="confirm-tab"
                data-bs-toggle="tab"
                data-bs-target="#confirm-tab-pane"
                type="button"
                role="tab"
                aria-controls="confirm-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">
                          {{ confirmees.totalPrice }} CFA
                        </p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-square"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ confirmees.totalNumber }}
                          </button>
                          Locations confirmées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="annul-tab"
                data-bs-toggle="tab"
                data-bs-target="#annul-tab-pane"
                type="button"
                role="tab"
                aria-controls="annule-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #931d96 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ annulees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-x-circle"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ annulees.totalNumber }}
                          </button>
                          Locations annulées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="report-tab"
                data-bs-toggle="tab"
                data-bs-target="#report-tab-pane"
                type="button"
                role="tab"
                aria-controls="report-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ reportees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-reset"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ reportees.totalNumber }}
                          </button>
                          Locations reportées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="use-tab"
                data-bs-toggle="tab"
                data-bs-target="#use-tab-pane"
                type="button"
                role="tab"
                aria-controls="use-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #fb3232 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ utilisees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-circle"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50% ; width: 35px; height: 35px;"
                          >
                            {{ utilisees.totalNumber }}
                          </button>
                          Locations utilisées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>
        </div>
      </ul>
      <div class="tab-content" id="myTabContent"> 
        <div
          class="tab-pane fade show active"
          id="attente-tab-pane"
          role="tabpanel"
          aria-labelledby="attente-tab"
          tabindex="0"
        >
          <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <div class="row w-100">
              <div class="col-9"></div>
              <div class="col-3 text-end d-flex">
                <li class="nav-item" role="presentation" style="margin-left: 8px;">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  Vue grille <i class='bx bxs-dashboard'></i> </button>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                  
                </li>
              </div>
            </div>
        
          
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="row">
                          <div
                            class="col-md-4"
                            v-for="(location, index) in elements_en_attente" :key="index">
                            <div
                              class="accordion-item mb-3"
                              style="border: 1px solid #d2d2d2; border-radius: 5px"
                            >
                              <h2
                                class="accordion-header"
                                :id="'flush-headingOne' + index"
                              >
                                <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  :data-bs-target="'#flush-collapseOne' + index"
                                  aria-expanded="false"
                                  :aria-controls="'flush-collapseOne' + index"
                                  id="reser"
                                >
                                  <div
                                    class="row g-1 d-flex mt-1"
                                    style="width: 100%"
                                  >
                                    <div class="col-md-6 d-flex">
                                      <img
                                        :src="location.client_profil_url"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="
                                          max-width: 50px;
                                          max-height: 50px;
                                          border: 1px solid rgb(214, 214, 214);
                                        "
                                      />
                                      <div>
                                        <div
                                          class="card-body"
                                          style="
                                            margin-left: 10px;
                                            margin-top: 10px;
                                          "
                                        >
                                          <h5
                                            class="card-title"
                                            style="
                                              font-size: 12px;
                                              margin-bottom: 6px;
                                            "
                                          >
                                            {{ location.nom_client }}
                                          </h5>
                                          <p
                                            class="card-text"
                                            style="font-size: 12px"
                                          >
                                            <i
                                              class="bx bx-map"
                                              style="color: rgb(139 139 139)"
                                            ></i>
                                            CI,rue 250
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 text-end">
                                      <strong
                                        style="
                                          color: rgb(247 127 0);
                                          font-size: 12px;
                                          margin-right: 10px;
                                          font-weight: 500;
                                        "
                                        >{{ location.status }}
                                      </strong>
                                      <button
                                        class="btn btn-primary"
                                        style="
                                          background: #219935;
                                          border-color: #219935;
                                          margin-top: 5px;
                                          font-size: 12px;
                                        "
                                      >
                                        {{ location.montant }} FCFA
                                      </button>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                :id="'flush-collapseOne' + index"
                                class="accordion-collapse collapse"
                                :aria-labelledby="'flush-headingOne' + index"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div
                                  class="accordion-body"
                                  style="margin-top: 8px; padding: 7px"
                                >
                                  <div
                                    class="card h-100 border-0"
                                    id="card_compagnie"
                                    style="box-shadow: none; background: none"
                                  >
                                    <div
                                      class="card mt-4"
                                      style="
                                        margin-top: -10px !important;
                                        width: 100%;
                                      "
                                    >
                                      <div class="row g-0" style="margin: -2px">
                                        <div class="col-md-12">
                                          <div class="card-body">
                                            <div class="row mt-2">
                                              <div class="col-6">
                                                <p
                                                  class="card-text"
                                                  style="
                                                    background: #efefef;
                                                    padding: 4px;
                                                    border-radius: 5px;
                                                    font-size: 12px;
                                                    margin-top: -15px;
                                                  "
                                                >
                                                  {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                  <br />
                                                </p>
                                              </div>
                                              <div class="col-6">
                                                <p
                                                  class="card-text"
                                                  style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                  >
                                                  N° |
                                                  <strong style="color: #219935"> {{ location.number }} </strong>
                                                  </p>
                                                  </div>
                                                </div>
                                                <br />

                                                <p
                                              class="card-text"
                                              style="
                                                font-size: 13px;
                                                margin-top: -11px;
                                                margin-bottom: 11px;
                                              "
                                            >
                                            <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                            </p>

                                            <br />
                                            <div class="row" style="margin-top: -14px;">
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                                </p>

                                              </div>
                                              <div class="col-6">
                                                
                                              </div>
                                            </div>

                                            <div class="row" style="margin-top: 32px;">
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                                </p>

                                              </div>
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong> Transmission</strong> <br> {{ location.boite }} 
                                                </p>
                                              </div>
                                            </div>
                                            
                                            <br />
                                            <div class="row" style="margin-top: 10px;">
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                                </p>

                                              </div>
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                                </p>
                                              </div>
                                            </div>
                                            <br />
                                          </div>
                                        </div>
                                      
                                        <div class="col-md-12">
                                          <div class="card-body">
                                            <div class="row" style="margin-top: -26px;">
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                                </p>

                                              </div>
                                              <div class="col-6">
                                                <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                                </p>
                                              </div>
                                          </div>
                                            
                                            <br />

                                            <p
                                            class="card-text"
                                            style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                            >
                                            <strong>Nombres de jours de location </strong>  <br/>
                                            
                                            </p>
                                            <br />
                                            <div class="row">
                                              <div class="col-6 text-start">
                                                <button 
                                                class="btn btn-primary mb-2" 
                                                style="background: white; border-color: #219935; color: #219935 ;" 
                                                
                                                >
                                                  Annuler
                                                </button>
                                              </div>
                                              <div class="col-6 text-end">
                                                <button 
                                                class="btn btn-primary text-white mb-2" 
                                                style="background: #219935; border: #219935; float: right" 
                                                @click="valider(location)"
                                                >
                                                  Valider
                                                </button>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

              <!-- <div class="row mb-4" >
                <div class="col-md-1"></div>
                <div class="col-md-10" style=" padding: 13px; border-radius: 5px; border: 1px solid #f2f2f2;">
                  <form class="row g-3 needs-validation" method="post" action="">
                   
                    <div class="col-md-2">
                       
                       
                     
                    </div>
                     
                    <div class="col-md-6">
                      
                        <div class="row">
                          <div class="col-6">
                            <input type="date" name="prix" class="form-control" id="validationCustomUsername" placeholder="date début" aria-describedby="inputGroupPrepend">
                          </div>
                          <div class="col-6">
                            <input type="date" name="prix" class="form-control" id="validationCustomUsername" placeholder="Prix" aria-describedby="inputGroupPrepend">
                          </div>
                        </div>
                         
                    </div>
                   
                    <div class="col-2">
                      <div class="row g-1">
                        <div class="col-md-12">
                          <button class="btn btn-primary" type="submit" style="background: #219935; border-color: #219935;">Consulter</button>
                        </div>
                         
                      </div>
                      
                    </div>
                  </form>
                 
                </div>
                <div class="col-md-1"></div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                  
                    <div class="col-6 text-start">
                      <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
                <div class="col-md-12 mt-2">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">N°</th>
                          <th scope="col">NomClient</th>
                          <th scope="col">Marque</th>
                          <th scope="col">Modele</th>
                          <th scope="col">Année</th>
                          <th scope="col">Moteur</th>
                          <th scope="col">Transmission</th>
                          <th scope="col">Immatriculation</th>
                          <th scope="col">Chauffeur</th>
                          <th scope="col">Intérieur</th>
                          <th scope="col">D.retrait</th>
                          <th scope="col">H.retrait</th>
                          <th scope="col">D.retour</th>
                          <th scope="col">H.retour</th>
                          <th scope="col">N.jours</th>
                          
                          <th scope="col">Prix</th>
                          <th scope="col">Statut</th>
                        
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(location, index) in elements_en_attente" :key="index">
                           
                          <td></td>
                          <td>{{ location.nom_client }}</td>
                          
                          <td> {{ location.vehicule }}</td>
                          <td> {{ location.modele }}</td>
                          <td> {{ location.année }}</td>
                          <td>{{ location.moteur }}</td>
                          <td> {{ location.boite }}</td>
                          <td>{{ location.plaque_vehicule }}</td>
                          <td>{{ location.chauffeur }}</td>
                          <td>{{ location.interieurPays }}</td>
                          <td>{{ location.date_retrait }}</td>
                          <td>{{ location.heure_retrait }}</td>
                          <td> {{ location.date_retour }}</td>
                          <td> {{ location.heure_retour }}</td>
                          <td> {{ location.montant }}</td>
                          <td></td>
                        
                          <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px; background-color:#219935; border-color:#219935">{{ location.status }}</div></td>
                          
                        </tr>
                      
                        
                        
                      </tbody>
                  </table>
                  </div>
                  
                </div>
              </div> -->
            </div>
            
          </div>
         
        </div>

        <div
          class="tab-pane fade show"
          id="valid-tab-pane"
          role="tabpanel"
          aria-labelledby="valid-tab"
          tabindex="0"
        >
        <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <div class="row w-100">
              <div class="col-9"></div>
              <div class="col-3 text-end d-flex">
                <li class="nav-item" role="presentation" style="margin-left: 8px;">
                  <button class="nav-link active" id="pills-home-tab2" data-bs-toggle="pill" data-bs-target="#pills-home2" type="button" role="tab" aria-controls="pills-home2" aria-selected="true">  Vue grille <i class='bx bxs-dashboard'></i> </button>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                </li>
              </div>
            </div>
        
          
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab2" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="( location, index ) in elements_valide" :key="index">
                          <div
                            class="accordion-item mb-3"
                            style="border: 1px solid #d2d2d2; border-radius: 5px"
                          >
                            <h2
                              class="accordion-header"
                              :id="'flush-headingTwo' + index"
                            >
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseTwo' + index"
                                aria-expanded="false"
                                :aria-controls="'flush-collapseTwo' + index"
                                id="reser"
                              >
                                <div
                                  class="row g-1 d-flex mt-1"
                                  style="width: 100%"
                                >
                                  <div class="col-md-6 d-flex">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="
                                        max-width: 50px;
                                        max-height: 50px;
                                        border: 1px solid rgb(214, 214, 214);
                                      "
                                    />
                                    <div>
                                      <div
                                        class="card-body"
                                        style="
                                          margin-left: 10px;
                                          margin-top: 10px;
                                        "
                                      >
                                        <h5
                                          class="card-title"
                                          style="
                                            font-size: 12px;
                                            margin-bottom: 6px;
                                          "
                                        >
                                          {{ location.nom_client }}
                                        </h5>
                                        <p
                                          class="card-text"
                                          style="font-size: 12px"
                                        >
                                          <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139)"
                                          ></i>
                                          CI,rue 250
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <strong
                                      style="
                                        color: rgb(247 127 0);
                                        font-size: 12px;
                                        margin-right: 10px;
                                        font-weight: 500;
                                      "
                                      >{{ location.status }}
                                    </strong>
                                    <button
                                      class="btn btn-primary"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                        margin-top: 5px;
                                        font-size: 12px;
                                      "
                                    >
                                      {{ location.montant }} FCFA
                                    </button>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              :id="'flush-collapseTwo' + index"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-headingTwo' + index"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div
                                class="accordion-body"
                                style="margin-top: 8px; padding: 7px"
                              >
                                <div
                                  class="card h-100 border-0"
                                  id="card_compagnie"
                                  style="box-shadow: none; background: none"
                                >
                                  <div
                                    class="card mt-4"
                                    style="
                                      margin-top: -10px !important;
                                      width: 100%;
                                    "
                                  >
                                    <div class="row g-0" style="margin: -2px">
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row mt-2">
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="
                                                  background: #efefef;
                                                  padding: 4px;
                                                  border-radius: 5px;
                                                  font-size: 12px;
                                                  margin-top: -15px;
                                                "
                                              >
                                                {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                <br />
                                              </p>
                                            </div>
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                N° |
                                                <strong style="color: #219935"> {{ location.number }} </strong>
                                                </p>
                                                </div>
                                              </div>
                                              <br />

                                              <p
                                            class="card-text"
                                            style="
                                              font-size: 13px;
                                              margin-top: -11px;
                                              margin-bottom: 11px;
                                            "
                                          >
                                          <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                          </p>

                                          <br />
                                          <div class="row" style="margin-top: -14px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              
                                            </div>
                                          </div>

                                          <div class="row" style="margin-top: 32px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Transmission</strong> <br> {{ location.boite }} 
                                              </p>
                                            </div>
                                          </div>
                                          
                                          <br />
                                          <div class="row" style="margin-top: 10px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row" style="margin-top: -26px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                              </p>
                                            </div>
                                        </div>
                                          
                                          <br />

                                          <p
                                          class="card-text"
                                          style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                          >
                                          <strong>Nombres de jours de location </strong>  <br/>
                                          
                                          </p>
                                          <br />
                                        
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
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2" tabindex="0">

              <div class="row">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-md-12 mt-2">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">N°</th>
                        <th scope="col">NomClient</th>
                        <th scope="col">Marque</th>
                        <th scope="col">Modele</th>
                        <th scope="col">Année</th>
                        <th scope="col">Moteur</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Immatriculation</th>
                        <th scope="col">Chauffeur</th>
                        <th scope="col">Intérieur</th>
                        <th scope="col">D.retrait</th>
                        <th scope="col">H.retrait</th>
                        <th scope="col">D.retour</th>
                        <th scope="col">H.retour</th>
                        <th scope="col">N.jours</th>
                        
                        <th scope="col">Prix</th>
                        <th scope="col">Statut</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(
                          location, index
                        ) in elements_valide"
                        :key="index">
                        <th scope="row">1</th>
                        <td></td>
                        <td>{{ location.nom_client }}</td>
                        
                        <td> {{ location.vehicule }}</td>
                        <td> {{ location.modele }}</td>
                        <td> {{ location.année }}</td>
                        <td>{{ location.moteur }}</td>
                        <td> {{ location.boite }}</td>
                        <td>{{ location.plaque_vehicule }}</td>
                        <td>{{ location.chauffeur }}</td>
                        <td>{{ location.interieurPays }}</td>
                        <td>{{ location.date_retrait }}</td>
                        <td>{{ location.heure_retrait }}</td>
                        <td> {{ location.date_retour }}</td>
                        <td> {{ location.heure_retour }}</td>
                        <td> {{ location.montant }}</td>
                        <td></td>
                      
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ location.status }}</div></td>
                        
                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>
                
              </div>
            </div>
            </div>
            
          </div>
          
        </div>

        <div
              class="tab-pane fade show"
              id="confirm-tab-pane"
              role="tabpanel"
              aria-labelledby="confirm-tab"
              tabindex="0"
            >

          <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
              <div class="row w-100">
                <div class="col-9"></div>
                <div class="col-3 text-end d-flex">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" type="button" role="tab" aria-controls="pills-home3" aria-selected="true">  Vue grille <i class='bx bxs-dashboard'></i> </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                  </li>
                </div>
              </div>
          
            
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home3" role="tabpanel" aria-labelledby="pills-home-tab3" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="(
                              location, index
                            ) in elements_confirme"
                            :key="index">
                          <div
                            class="accordion-item mb-3"
                            style="border: 1px solid #d2d2d2; border-radius: 5px"
                          >
                            <h2
                              class="accordion-header"
                              :id="'flush-headingOne' + index"
                            >
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseOne' + index"
                                aria-expanded="false"
                                :aria-controls="'flush-collapseOne' + index"
                                id="reser"
                              >
                                <div
                                  class="row g-1 d-flex mt-1"
                                  style="width: 100%"
                                >
                                  <div class="col-md-6 d-flex">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="
                                        max-width: 50px;
                                        max-height: 50px;
                                        border: 1px solid rgb(214, 214, 214);
                                      "
                                    />
                                    <div>
                                      <div
                                        class="card-body"
                                        style="
                                          margin-left: 10px;
                                          margin-top: 10px;
                                        "
                                      >
                                        <h5
                                          class="card-title"
                                          style="
                                            font-size: 12px;
                                            margin-bottom: 6px;
                                          "
                                        >
                                          {{ location.nom_client }}
                                        </h5>
                                        <p
                                          class="card-text"
                                          style="font-size: 12px"
                                        >
                                          <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139)"
                                          ></i>
                                          CI,rue 250
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <strong
                                      style="
                                        color: rgb(247 127 0);
                                        font-size: 12px;
                                        margin-right: 10px;
                                        font-weight: 500;
                                      "
                                      >{{ location.status }}
                                    </strong>
                                    <button
                                      class="btn btn-primary"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                        margin-top: 5px;
                                        font-size: 12px;
                                      "
                                    >
                                      {{ location.montant }} FCFA
                                    </button>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              :id="'flush-collapseOne' + index"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-headingOne' + index"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div
                                class="accordion-body"
                                style="margin-top: 8px; padding: 7px"
                              >
                                <div
                                  class="card h-100 border-0"
                                  id="card_compagnie"
                                  style="box-shadow: none; background: none"
                                >
                                  <div
                                    class="card mt-4"
                                    style="
                                      margin-top: -10px !important;
                                      width: 100%;
                                    "
                                  >
                                    <div class="row g-0" style="margin: -2px">
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row mt-2">
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="
                                                  background: #efefef;
                                                  padding: 4px;
                                                  border-radius: 5px;
                                                  font-size: 12px;
                                                  margin-top: -15px;
                                                "
                                              >
                                                {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                <br />
                                              </p>
                                            </div>
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                N° |
                                                <strong style="color: #219935"> {{ location.number }} </strong>
                                                </p>
                                                </div>
                                              </div>
                                              <br />

                                              <p
                                            class="card-text"
                                            style="
                                              font-size: 13px;
                                              margin-top: -11px;
                                              margin-bottom: 11px;
                                            "
                                          >
                                          <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                          </p>

                                          <br />
                                          <div class="row" style="margin-top: -14px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              
                                            </div>
                                          </div>

                                          <div class="row" style="margin-top: 32px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Transmission</strong> <br> {{ location.boite }} 
                                              </p>
                                            </div>
                                          </div>
                                          
                                          <br />
                                          <div class="row" style="margin-top: 10px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                          
                                        </div>
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row" style="margin-top: -26px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                              </p>
                                            </div>
                                        </div>
                                          
                                          <br />

                                          <p
                                          class="card-text"
                                          style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                          >
                                          <strong>Nombres de jours de location </strong>  <br/>
                                          
                                          </p>
                                          <br />
                                          
                                          <div class="col-md-12">
                                          <div class="row" style="    padding: 10px;top: -19px;">
                                            <div class="col-md-6 text-start">
                                              <button class="btn " style="background:white ; color:#219935 ; border-color:#219935 ; font-size: 12px;">Appel</button>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <router-link :to="`/messagerie-compagnie/${location.client_id}`">
                                                <button class="btn " style="background:#219935 ; color:white; font-size: 12px; ">Message</button>
                                              </router-link>
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
                    </div>
                  </div>
                   
                  </div>
                </div>
                 
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab3" tabindex="0">

            <div class="row">
            <div class="col-md-12">
              <div class="row">
              
                <div class="col-6 text-start">
                  <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                </div>
                <div class="col-6"></div>
              </div>
            </div>
            <div class="col-md-12 mt-2">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">N°</th>
                      <th scope="col">NomClient</th>
                      <th scope="col">Marque</th>
                      <th scope="col">Modele</th>
                      <th scope="col">Année</th>
                      <th scope="col">Moteur</th>
                      <th scope="col">Transmission</th>
                      <th scope="col">Immatriculation</th>
                      <th scope="col">Chauffeur</th>
                      <th scope="col">Intérieur</th>
                      <th scope="col">D.retrait</th>
                      <th scope="col">H.retrait</th>
                      <th scope="col">D.retour</th>
                      <th scope="col">H.retour</th>
                      <th scope="col">N.jours</th>
                      
                      <th scope="col">Prix</th>
                      <th scope="col">Statut</th>
                    
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr  v-for="(
                        location, index
                      ) in elements_confirme"
                      :key="index">
                      <th scope="row">1</th>
                      <td></td>
                      <td>{{ location.nom_client }}</td>
                      
                      <td> {{ location.vehicule }}</td>
                      <td> {{ location.modele }}</td>
                      <td> {{ location.année }}</td>
                      <td>{{ location.moteur }}</td>
                      <td> {{ location.boite }}</td>
                      <td>{{ location.plaque_vehicule }}</td>
                      <td>{{ location.chauffeur }}</td>
                      <td>{{ location.interieurPays }}</td>
                      <td>{{ location.date_retrait }}</td>
                      <td>{{ location.heure_retrait }}</td>
                      <td> {{ location.date_retour }}</td>
                      <td> {{ location.heure_retour }}</td>
                      <td> </td>
                      <td> {{ location.montant }}</td>
                      <td></td>
                    
                      <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ location.status }}</div></td>
                      
                    </tr>
                  
                    
                    
                  </tbody>
              </table>
              </div>
              
            </div>
            </div>
          </div>
          </div>
          
        </div>

        <div
          class="tab-pane fade show"
          id="annul-tab-pane"
          role="tabpanel"
          aria-labelledby="annul-tab"
          tabindex="0"
        >

          <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <div class="row w-100">
              <div class="col-9"></div>
              <div class="col-3 text-end d-flex">
                <li class="nav-item" role="presentation" style="margin-left: 8px;">
                  <button class="nav-link active" id="pills-home-tab4" data-bs-toggle="pill" data-bs-target="#pills-home4" type="button" role="tab" aria-controls="pills-home4" aria-selected="true">  Vue grille <i class='bx bxs-dashboard'></i> </button>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                </li>
              </div>
            </div>
        
          
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home4" role="tabpanel" aria-labelledby="pills-home-tab4" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="(
                          location, index
                        ) in elements_annule"
                        :key="index">
                          <div
                            class="accordion-item mb-3"
                            style="border: 1px solid #d2d2d2; border-radius: 5px"
                          >
                            <h2
                              class="accordion-header"
                              :id="'flush-headingTwo' + index"
                            >
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseTwo' + index"
                                aria-expanded="false"
                                :aria-controls="'flush-collapseTwo' + index"
                                id="reser"
                              >
                                <div
                                  class="row g-1 d-flex mt-1"
                                  style="width: 100%"
                                >
                                  <div class="col-md-6 d-flex">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="
                                        max-width: 50px;
                                        max-height: 50px;
                                        border: 1px solid rgb(214, 214, 214);
                                      "
                                    />
                                    <div>
                                      <div
                                        class="card-body"
                                        style="
                                          margin-left: 10px;
                                          margin-top: 10px;
                                        "
                                      >
                                        <h5
                                          class="card-title"
                                          style="
                                            font-size: 12px;
                                            margin-bottom: 6px;
                                          "
                                        >
                                          {{ location.nom_client }}
                                        </h5>
                                        <p
                                          class="card-text"
                                          style="font-size: 12px"
                                        >
                                          <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139)"
                                          ></i>
                                          CI,rue 250
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <strong
                                      style="
                                        color: rgb(247 127 0);
                                        font-size: 12px;
                                        margin-right: 10px;
                                        font-weight: 500;
                                      "
                                      >{{ location.status }}
                                    </strong>
                                    <button
                                      class="btn btn-primary"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                        margin-top: 5px;
                                        font-size: 12px;
                                      "
                                    >
                                      {{ location.montant }} FCFA
                                    </button>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              :id="'flush-collapseTwo' + index"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-headingTwo' + index"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div
                                class="accordion-body"
                                style="margin-top: 8px; padding: 7px"
                              >
                                <div
                                  class="card h-100 border-0"
                                  id="card_compagnie"
                                  style="box-shadow: none; background: none"
                                >
                                  <div
                                    class="card mt-4"
                                    style="
                                      margin-top: -10px !important;
                                      width: 100%;
                                    "
                                  >
                                    <div class="row g-0" style="margin: -2px">
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row mt-2">
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="
                                                  background: #efefef;
                                                  padding: 4px;
                                                  border-radius: 5px;
                                                  font-size: 12px;
                                                  margin-top: -15px;
                                                "
                                              >
                                                {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                <br />
                                              </p>
                                            </div>
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                N° |
                                                <strong style="color: #219935"> {{ location.number }} </strong>
                                                </p>
                                                </div>
                                              </div>
                                              <br />

                                              <p
                                            class="card-text"
                                            style="
                                              font-size: 13px;
                                              margin-top: -11px;
                                              margin-bottom: 11px;
                                            "
                                          >
                                          <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                          </p>

                                          <br />
                                          <div class="row" style="margin-top: -14px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              
                                            </div>
                                          </div>

                                          <div class="row" style="margin-top: 32px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Transmission</strong> <br> {{ location.boite }} 
                                              </p>
                                            </div>
                                          </div>
                                          
                                          <br />
                                          <div class="row" style="margin-top: 10px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row" style="margin-top: -26px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                              </p>
                                            </div>
                                        </div>
                                          
                                          <br />

                                          <p
                                          class="card-text"
                                          style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                          >
                                          <strong>Nombres de jours de location </strong>  <br/>
                                          
                                          </p>
                                          <br />
                                        
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
                </div>
                 
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile4" role="tabpanel" aria-labelledby="pills-profile-tab4" tabindex="0">

              <div class="row">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-md-12 mt-2">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">N°</th>
                        <th scope="col">NomClient</th>
                        <th scope="col">Marque</th>
                        <th scope="col">Modele</th>
                        <th scope="col">Année</th>
                        <th scope="col">Moteur</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Immatriculation</th>
                        <th scope="col">Chauffeur</th>
                        <th scope="col">Intérieur</th>
                        <th scope="col">D.retrait</th>
                        <th scope="col">H.retrait</th>
                        <th scope="col">D.retour</th>
                        <th scope="col">H.retour</th>
                        <th scope="col">N.jours</th>
                        
                        <th scope="col">Prix</th>
                        <th scope="col">Statut</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(location, index) in elements_annule" :key="index">
                        <th scope="row">1</th>
                        <td></td>
                        <td>{{ location.nom_client }}</td>
                        
                        <td> {{ location.vehicule }}</td>
                        <td> {{ location.modele }}</td>
                        <td> {{ location.année }}</td>
                        <td>{{ location.moteur }}</td>
                        <td> {{ location.boite }}</td>
                        <td>{{ location.plaque_vehicule }}</td>
                        <td>{{ location.chauffeur }}</td>
                        <td>{{ location.interieurPays }}</td>
                        <td>{{ location.date_retrait }}</td>
                        <td>{{ location.heure_retrait }}</td>
                        <td> {{ location.date_retour }}</td>
                        <td> {{ location.heure_retour }}</td>
                        <td> {{ location.montant }}</td>
                        <td></td>
                      
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ location.status }}</div></td>
                        
                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>
                
              </div>
            </div>
            </div>
            
          </div>
          
        </div>

        <div
          class="tab-pane fade show"
          id="report-tab-pane"
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
        >
          <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <div class="row w-100">
              <div class="col-9"></div>
              <div class="col-3 text-end d-flex">
                <li class="nav-item" role="presentation" style="margin-left: 8px;">
                  <button class="nav-link active" id="pills-home-tab5" data-bs-toggle="pill" data-bs-target="#pills-home5" type="button" role="tab" aria-controls="pills-home5" aria-selected="true">   Vue grille<i class='bx bxs-dashboard'></i> </button>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                </li>
              </div>
            </div>
        
          
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home5" role="tabpanel" aria-labelledby="pills-home-tab5" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="(
                              location, index
                            ) in elements_reporte"
                            :key="index">
                          <div
                            class="accordion-item mb-3"
                            style="border: 1px solid #d2d2d2; border-radius: 5px"
                          >
                            <h2
                              class="accordion-header"
                              :id="'flush-headingTwo' + index"
                            >
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseTwo' + index"
                                aria-expanded="false"
                                :aria-controls="'flush-collapseTwo' + index"
                                id="reser"
                              >
                                <div
                                  class="row g-1 d-flex mt-1"
                                  style="width: 100%"
                                >
                                  <div class="col-md-6 d-flex">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="
                                        max-width: 50px;
                                        max-height: 50px;
                                        border: 1px solid rgb(214, 214, 214);
                                      "
                                    />
                                    <div>
                                      <div
                                        class="card-body"
                                        style="
                                          margin-left: 10px;
                                          margin-top: 10px;
                                        "
                                      >
                                        <h5
                                          class="card-title"
                                          style="
                                            font-size: 12px;
                                            margin-bottom: 6px;
                                          "
                                        >
                                          {{ location.nom_client }}
                                        </h5>
                                        <p
                                          class="card-text"
                                          style="font-size: 12px"
                                        >
                                          <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139)"
                                          ></i>
                                          CI,rue 250
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <strong
                                      style="
                                        color: rgb(247 127 0);
                                        font-size: 12px;
                                        margin-right: 10px;
                                        font-weight: 500;
                                      "
                                      >{{ location.status }}
                                    </strong>
                                    <button
                                      class="btn btn-primary"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                        margin-top: 5px;
                                        font-size: 12px;
                                      "
                                    >
                                      {{ location.montant }} FCFA
                                    </button>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              :id="'flush-collapseTwo' + index"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-headingTwo' + index"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div
                                class="accordion-body"
                                style="margin-top: 8px; padding: 7px"
                              >
                                <div
                                  class="card h-100 border-0"
                                  id="card_compagnie"
                                  style="box-shadow: none; background: none"
                                >
                                  <div
                                    class="card mt-4"
                                    style="
                                      margin-top: -10px !important;
                                      width: 100%;
                                    "
                                  >
                                    <div class="row g-0" style="margin: -2px">
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row mt-2">
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="
                                                  background: #efefef;
                                                  padding: 4px;
                                                  border-radius: 5px;
                                                  font-size: 12px;
                                                  margin-top: -15px;
                                                "
                                              >
                                                {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                <br />
                                              </p>
                                            </div>
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                N° |
                                                <strong style="color: #219935"> {{ location.number }} </strong>
                                                </p>
                                                </div>
                                              </div>
                                              <br />

                                              <p
                                            class="card-text"
                                            style="
                                              font-size: 13px;
                                              margin-top: -11px;
                                              margin-bottom: 11px;
                                            "
                                          >
                                          <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                          </p>

                                          <br />
                                          <div class="row" style="margin-top: -14px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              
                                            </div>
                                          </div>

                                          <div class="row" style="margin-top: 32px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Transmission</strong> <br> {{ location.boite }} 
                                              </p>
                                            </div>
                                          </div>
                                          
                                          <br />
                                          <div class="row" style="margin-top: 10px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row" style="margin-top: -26px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                              </p>
                                            </div>
                                        </div>
                                          
                                          <br />

                                          <p
                                          class="card-text"
                                          style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                          >
                                          <strong>Nombres de jours de location </strong>  <br/>
                                          
                                          </p>
                                          <br />
                                        
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
                </div>
                 
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile5" role="tabpanel" aria-labelledby="pills-profile-tab5" tabindex="0">

              <div class="row">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-md-12 mt-2">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">N°</th>
                        <th scope="col">NomClient</th>
                        <th scope="col">Marque</th>
                        <th scope="col">Modele</th>
                        <th scope="col">Année</th>
                        <th scope="col">Moteur</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Immatriculation</th>
                        <th scope="col">Chauffeur</th>
                        <th scope="col">Intérieur</th>
                        <th scope="col">D.retrait</th>
                        <th scope="col">H.retrait</th>
                        <th scope="col">D.retour</th>
                        <th scope="col">H.retour</th>
                        <th scope="col">N.jours</th>
                        
                        <th scope="col">Prix</th>
                        <th scope="col">Statut</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(location, index) in elements_reporte" :key="index">
                        <th scope="row">1</th>
                        <td></td>
                        <td>{{ location.nom_client }}</td>
                        
                        <td> {{ location.vehicule }}</td>
                        <td> {{ location.modele }}</td>
                        <td> {{ location.année }}</td>
                        <td>{{ location.moteur }}</td>
                        <td> {{ location.boite }}</td>
                        <td>{{ location.plaque_vehicule }}</td>
                        <td>{{ location.chauffeur }}</td>
                        <td>{{ location.interieurPays }}</td>
                        <td>{{ location.date_retrait }}</td>
                        <td>{{ location.heure_retrait }}</td>
                        <td> {{ location.date_retour }}</td>
                        <td> {{ location.heure_retour }}</td>
                        <td> {{ location.montant }}</td>
                        <td></td>
                      
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ location.status }}</div></td>
                        
                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>
                
              </div>
            </div>
            </div>
            
          </div>
          
        </div>

        <div
          class="tab-pane fade show"
          id="use-tab-pane"
          role="tabpanel"
          aria-labelledby="use-tab"
          tabindex="0"
        >
        <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <div class="row w-100">
              <div class="col-9"></div>
              <div class="col-3 text-end d-flex">
                <li class="nav-item" role="presentation" style="margin-left: 8px;">
                  <button class="nav-link active" id="pills-home-tab6" data-bs-toggle="pill" data-bs-target="#pills-home6" type="button" role="tab" aria-controls="pills-home6" aria-selected="true">   Vue grille<i class='bx bxs-dashboard'></i> </button>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link to="/liste-location">
                    <button class="nav-link"> Vue liste  <i class='bx bx-list-ul'></i> </button>
                  </router-link>
                </li>
              </div>
            </div>
        
          
          </ul>
          <hr>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home6" role="tabpanel" aria-labelledby="pills-home-tab6" tabindex="0">
               <div class="row mt-5">

                <div class="col-md-12">
                  <div class="row g-1">
                    <div class="col-md-12">
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="(
                              location, index
                            ) in elements_utilise"
                            :key="index">
                          <div
                            class="accordion-item mb-3"
                            style="border: 1px solid #d2d2d2; border-radius: 5px"
                          >
                            <h2
                              class="accordion-header"
                              :id="'flush-headingTwo' + index"
                            >
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseTwo' + index"
                                aria-expanded="false"
                                :aria-controls="'flush-collapseTwo' + index"
                                id="reser"
                              >
                                <div
                                  class="row g-1 d-flex mt-1"
                                  style="width: 100%"
                                >
                                  <div class="col-md-6 d-flex">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="
                                        max-width: 50px;
                                        max-height: 50px;
                                        border: 1px solid rgb(214, 214, 214);
                                      "
                                    />
                                    <div>
                                      <div
                                        class="card-body"
                                        style="
                                          margin-left: 10px;
                                          margin-top: 10px;
                                        "
                                      >
                                        <h5
                                          class="card-title"
                                          style="
                                            font-size: 12px;
                                            margin-bottom: 6px;
                                          "
                                        >
                                          {{ location.nom_client }}
                                        </h5>
                                        <p
                                          class="card-text"
                                          style="font-size: 12px"
                                        >
                                          <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139)"
                                          ></i>
                                          CI,rue 250
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <strong
                                      style="
                                        color: rgb(247 127 0);
                                        font-size: 12px;
                                        margin-right: 10px;
                                        font-weight: 500;
                                      "
                                      >{{ location.status }}
                                    </strong>
                                    <button
                                      class="btn btn-primary"
                                      style="
                                        background: #219935;
                                        border-color: #219935;
                                        margin-top: 5px;
                                        font-size: 12px;
                                      "
                                    >
                                      {{ location.montant }} FCFA
                                    </button>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              :id="'flush-collapseTwo' + index"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-headingTwo' + index"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div
                                class="accordion-body"
                                style="margin-top: 8px; padding: 7px"
                              >
                                <div
                                  class="card h-100 border-0"
                                  id="card_compagnie"
                                  style="box-shadow: none; background: none"
                                >
                                  <div
                                    class="card mt-4"
                                    style="
                                      margin-top: -10px !important;
                                      width: 100%;
                                    "
                                  >
                                    <div class="row g-0" style="margin: -2px">
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row mt-2">
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="
                                                  background: #efefef;
                                                  padding: 4px;
                                                  border-radius: 5px;
                                                  font-size: 12px;
                                                  margin-top: -15px;
                                                "
                                              >
                                                {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }}
                                                <br />
                                              </p>
                                            </div>
                                            <div class="col-6">
                                              <p
                                                class="card-text"
                                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                                >
                                                N° |
                                                <strong style="color: #219935"> {{ location.number }} </strong>
                                                </p>
                                                </div>
                                              </div>
                                              <br />

                                              <p
                                            class="card-text"
                                            style="
                                              font-size: 13px;
                                              margin-top: -11px;
                                              margin-bottom: 11px;
                                            "
                                          >
                                          <strong>{{ location.vehicule }} | {{ location.modele }} | {{ location.annee }} </strong> 
                                          </p>

                                          <br />
                                          <div class="row" style="margin-top: -14px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              
                                            </div>
                                          </div>

                                          <div class="row" style="margin-top: 32px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Immatriculation </strong> <br>  {{ location.plaque_vehicule }}
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Transmission</strong> <br> {{ location.boite }} 
                                              </p>
                                            </div>
                                          </div>
                                          
                                          <br />
                                          <div class="row" style="margin-top: 10px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> chauffeur </strong> <br>   {{ location.chauffeur }}  
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>Intérieur</strong> <br> {{ location.interieurPays }}  
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <div class="row" style="margin-top: -26px;">
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong>  Retrait </strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} 
                                              </p>

                                            </div>
                                            <div class="col-6">
                                              <p
                                              class="card-text"
                                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                              >
                                              <strong> Retour</strong> <br> {{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }}
                                              </p>
                                            </div>
                                        </div>
                                          
                                          <br />

                                          <p
                                          class="card-text"
                                          style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
                                          >
                                          <strong>Nombres de jours de location </strong>  <br/>
                                          
                                          </p>
                                          <br />
                                        
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
                </div>
                 
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile6" role="tabpanel" aria-labelledby="pills-profile-tab6" tabindex="0">

              <div class="row">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-md-12 mt-2">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">N°</th>
                        <th scope="col">NomClient</th>
                        <th scope="col">Marque</th>
                        <th scope="col">Modele</th>
                        <th scope="col">Année</th>
                        <th scope="col">Moteur</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Immatriculation</th>
                        <th scope="col">Chauffeur</th>
                        <th scope="col">Intérieur</th>
                        <th scope="col">D.retrait</th>
                        <th scope="col">H.retrait</th>
                        <th scope="col">D.retour</th>
                        <th scope="col">H.retour</th>
                        <th scope="col">N.jours</th>
                        
                        <th scope="col">Prix</th>
                        <th scope="col">Statut</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(location, index) in elements_utilise" :key="index">
                        <th scope="row">1</th>
                        <td></td>
                        <td>{{ location.nom_client }}</td>
                        
                        <td> {{ location.vehicule }}</td>
                        <td> {{ location.modele }}</td>
                        <td> {{ location.année }}</td>
                        <td>{{ location.moteur }}</td>
                        <td> {{ location.boite }}</td>
                        <td>{{ location.plaque_vehicule }}</td>
                        <td>{{ location.chauffeur }}</td>
                        <td>{{ location.interieurPays }}</td>
                        <td>{{ location.date_retrait }}</td>
                        <td>{{ location.heure_retrait }}</td>
                        <td> {{ location.date_retour }}</td>
                        <td> {{ location.heure_retour }}</td>
                        <td> {{ location.montant }}</td>
                        <td></td>
                      
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ location.status }}</div></td>
                        
                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>
                
              </div>
            </div>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  </div>
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
  border-color: #219935;
  color: black;
  border-radius: 5px;
}

.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius);
    color: black;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fff;
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: #219935;
  background: #21993554;
}

.accordion-button::after {
    flex-shrink: 0;
    width: var(--bs-accordion-btn-icon-width);
    height: var(--bs-accordion-btn-icon-width);
    margin-left: auto;
    content: "";
    background-image: var(--bs-accordion-btn-icon);
    background-repeat: no-repeat;
    background-size: var(--bs-accordion-btn-icon-width);
    transition: var(--bs-accordion-btn-icon-transition);
    display: none;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #219935;
}
</style>
