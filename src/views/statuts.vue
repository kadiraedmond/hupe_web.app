<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { addDoc, updateDoc, collection, doc, getDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"
import Swal from 'sweetalert2'

import { useLocationStore } from '@/store/location.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const param = route.params.param


const userStore = useUserStore()
const authStore = useAuthStore()
const locationStore = useLocationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid

const locations = ref([])
onBeforeMount(async () => {
  userStore.setUser(userId)
  locationStore.setUserLocations(userId)

  
  locationStore.userLocations.forEach(location => {
    if(param === 'en-attente' && location.status === 'En attente') {
      locations.value.push(location)
    } else if(param === 'valide' && location.status === 'Validé') {
      locations.value.push(location)
    } else if(param === 'reporte' && location.status === 'Reporté') {
      location.value.push(location)
    } else if(param === 'utilise' && location.status === 'Utilisé') {
      locations.value.push(location)
    } else if(param === 'confirme' && location.status === 'Confirmé') {
      locations.value.push(location)
    } else if(param === 'annule' && location.status === 'Annuler') {
      locations.value.push(location)
    }
  })
})

const router = useRouter();
const refresh = ()=>{

  router.push({
    name:'Raison'
  })
  
 } 
 

onMounted(() => {
  window.scrollTo(0, 0)
})


const date_report = ref()

const reporter = async (location) => {
  const reportColRef = collection(firestoreDb, 'location_reporter')
  const locationDocRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)

  const { status, ...extracted_location } = location

  const docRef = await addDoc(reportColRef, { extracted_location, status: 'En attente', report: new Date(date_report.value) })
  
  if(docRef) {
    Swal.fire({
      title: "Succès",
      text: "Votre demande de report a été envoyé", 
      icon: "success"
    })

    await updateDoc(locationDocRef, { status: 'En attente de report' }) 

    const notificationColRef = collection(firestoreDb, 'notifications')

    const data = {
      title: 'Report de location', 
      message: `Vous avez une demande de report de la location Numéro ${location.number}`, 
      userId: location.compagnie_id, 
      lu: false, 
      createdAt: new Date() 
    }

    await addDoc(notificationColRef, data)
    
    await updateDoc(docRef, { uid: `${docRef.id}` })
  }

  document.querySelector('#reportForm').reset()
  document.querySelector('.btn-close').click()
}

const option = ref('')
const autre_raison = ref('')

const annul = async (location) => {
  const docRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)

  let raison
  if(option.value !== '' || option.value) {
    raison = option.value
  } else if(option.value == 'Autre' && autre_raison.value !== '') {
    raison = autre_raison.value
  }

  await setDoc(docRef, { status: 'Annuler', raison_annulation: raison }, { merge: true })
        .then(() => {
          console.log('Document mis a jour')
          toast.warn("Location annulée", {
            autoClose: 3500,
            position: toast.POSITION.TOP_CENTER,
          })
        }) 
  
  document.querySelector('.btn-close').click()
}

const payer = async (location) => {
  const userDocRef = doc(firestoreDb, 'users', `${userId}`)
  const userSubColRef = collection(userDocRef, 'myAccount')
  const accountDocRef = doc(userSubColRef, 'account')

  const snapshot = await getDoc(accountDocRef)

  let amount
  if(snapshot.exists()) amount = snapshot.data()

  if(!amount.solde || amount.solde == 0 || amount.solde === '' || amount.solde < Number(location.montant)) {
    Swal.fire({
      title: "Error",
      text: "Votre solde est insuffisant",
      icon: "error"
    })
  } else {
    const result = await Swal.fire({
      title: 'Continuez le payement ?',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    })
      
    if (result.isConfirmed) {
      const data = {
        solde: Number(amount.solde) - Number(location.montant), 
      }
  
      try {
        await updateDoc(accountDocRef, data)
        Swal.fire({
          title: "Succès",
          text: "Payement effectué",
          icon: "success"
        })
        console.log('Payement effectué')
      } catch (error) {
        console.log(error)
      }
    }
  }
}

const message = ref('')
const sendMessage = async (location) => {
  const doc_id = `${userId}_${location.companieInfos.uid}`

  const conversationDocRef = doc(firestoreDb, 'conversations', `${doc_id}`)

  const docRef = await setDoc(conversationDocRef, {})

  const messageColRef = collection(docRef, 'messages')
  
  const data = {
    clientNumber: savedUser.telephone || authStore.user.telephone,
    message: message.value,
    otherUserId: location.companieInfos.uid,
    sendAt: Timestamp.now(),
    userId: userId
  }

  await addDoc(messageColRef, data).then(() => console.log('Document ajouté'))

}

onMounted(() => {
  window.scrollTo(0, 0)
})

 



</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Location de véhicule</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">
  
              <div class="row  g-4 mt-4">
                <div class="col-md-4 mb-4" v-for="(location, index) in locations" :key="index">
                <div
                    class="card h-100 border-0 "
                    id="card_compagnie"
                    style="   background: none; padding: 6px;"
                >
                <div class="row" style="margin: 0px">
                  <div class="col-md-12">
                    <div
                      class="card  border-0"
                      style="background: white;"
                    >
                      <div class="row g-1 d-flex mt-1">
                        
                        <div class="col-6 d-flex">
                          <img
                            src="/public/assets/img/avatars/1.png"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                          />
                          <div>
                            <div class="card-body" style="margin-top: -10px;">
                              <h5 class="card-title" style="font-size: 12px">
                                {{ location.companieInfos.raison_social }}
                              </h5>
                              <p class="card-text" style="font-size: 12px">
                                <i
                                  class="bx bx-map"
                                  style="color: rgb(139 139 139); margin-left: 2px"
                                ></i>
                                {{ location.companieInfos.adresse }}
                              </p>
                            </div>
                          </div>
                        </div>
                       

                        <div class="col-6 text-end">
                            <strong style="color: #219935 ;font-size: 12px; margin-right: 10px; font-weight: 500;"> {{ location.status }} </strong>
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
                    </div>
                  </div>
                </div>
                    <div
                    class="card h-100"
                    
                    >
                    <div class="row g-0" style="margin: -2px">
                        <div class="col-md-12">
                        <div class="card-body">

                            <div class="row mb-2" v-if="location.status == 'Confirmé'" style=" margin-top: 0px; margin-bottom: 24px !important;">
                              <div class="col-6 text-start">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="
                                      color: white;
                                      border-color: #219935;
                                      background: #219935;
                                      font-size: 12px; 
                                  "
                                  >
                                  <i class='bx bxs-download'></i>
                                  </button>
                              </div>
                              <div class="col-6 text-end">
                                <!-- Button trigger modal -->
                                  <button type="button" class="btn btn-primary" style="background: #219935; border-color: #219935 ;font-size: 12px; " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Reporter
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog text-start">
                                      <div class="modal-content">
                                        <div class="modal-header" style="background-color:#219935 !important; color: white ">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Demande de report</h1>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 text-center">
                                              <p>Pour reporter votre ticket , veuillez séléctionner une nouvelle date</p>
                                            </div>
                                            <div class="col-md-12">
                                              <form class="row g-3 needs-validation" novalidate>
                                              <div class="col-md-12">
                                                <label for="validationCustom01" class="form-label">Date de retrait</label>
                                                <input type="date" class="form-control" id="validationCustom01" value="Mark" required>
                                                <div class="valid-feedback">
                                                  Looks good!
                                                </div>
                                              </div>
                                              <div class="col-md-12">
                                                <label for="validationCustom02" class="form-label">Date de retour</label>
                                                <input type="date" class="form-control" id="validationCustom02" value="Otto" required>
                                                <div class="valid-feedback">
                                                  Looks good!
                                                </div>
                                              </div>
                                              
                                              <div class="col-12 text-center">
                                                <button class="btn btn-primary" type="submit" style="background-color:#219935; border-color :#219935">Confirmer</button>
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
                                    {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }} <br />
                                     
                                    </p>
                                </div> 
                                <div class="col-6" >
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
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            <strong>{{ location.modele }} </strong> |
                            <!-- <strong> Santafe 2022 </strong> -->
                            </p>
                            <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            {{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }}
                            </p>
                            <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            chauffeur | <strong>{{ location.chauffeur }} </strong>
                            </p>
                            <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Intérieur | <strong>{{ location.interieurPays }} </strong>
                            </p>
                            <br />
                        </div>
                        </div>
                        <!-- <div class="col-md-6">
                        <img
                            src="/public/assets/img/car2.jpg"
                            class="img-fluid rounded-start h-100"
                            alt="..."
                            style="height: 85% !important"
                        />
                        </div> -->
                        <div class="col-md-12">
                        <div class="card-body">
                            <p
                            class="card-text"
                            style="
                                font-size: 13px;
                                margin-top: -41px;
                                margin-bottom: -8px;
                            "
                            >
                            Retrait | <strong>{{ location.date_retrait }} </strong> |
                            <strong>{{ location.heure_retrait }}</strong>
                            </p>

                            <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Retour | <strong>{{ location.date_retour }} </strong>
                            </p>
                            <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Nombres de jours de location |
                            <strong>{{  }}</strong>
                            </p>
                            <br />

                            <div class="row" v-if="location.status == 'Validé'">
                            <!-- <div class="col-md-6">
                                <button
                                class="btn btn-primary"
                                style="
                                    background: white;
                                    border-color: #219935;
                                    color: #219935;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#reportModal10"
                                >
                                Reporter
                                </button>

                                
                                <div
                                class="modal fade"
                                id="reportModal10"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel10"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel10">
                                        Donnez les informations du report
                                        </h1>
                                        <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        ></button>
                                    </div>
                                    <form id="reportForm" @submit.prevent="reporter(location)">
                                        <label>Nouvelle Date</label>
                                        <input v-model="date_report" type="date" />

                                        <button type="submit" class="btn btn-primary">
                                        Enregistrer
                                        </button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div> -->

                            <div class="col-md-5">
                                <button
                                class="btn btn-primary"
                                style="
                                    background: white;
                                    border-color: crimson;
                                    color: crimson;
                                    font-size: 12px; 
                                "
                                data-bs-toggle="modal"
                                data-bs-target="#annulModal10"
                                >
                                Annuler
                                </button>

                                <!-- Modal -->
                                <div
                                class="modal fade"
                                id="annulModal10"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel10"
                                aria-hidden="true"
                                >
                                  <div class="modal-dialog">
                                      <div class="modal-content" style="width: 75% !important">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel10">
                                              <img
                                                src="/public/assets/img/avatars/1.png"
                                                alt
                                                class="w-px-40 h-auto rounded-circle"
                                                style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                              />
                                            </h1>
                                            <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            ></button>
                                        </div>

                                        <div class="modal-body">
                                          <div class="row">
                                             
                                            <div class="col-md-12 text-center">
                                              <div class="row">
                                                <div class="col-12" style=" padding: 18px;margin-top: -13px; color: black;">
                                                  <p>La compagnie à valider votre commande et est en attente de votre paiement</p>
                                                </div>
                                                <div class="col-12">
                                                  <div class="row">
                                                    <div class="col-md-1"></div>
                                                    <div class="col-md-10">
                                                      <div class="row">
                                                        <div class="col-md-12 mb-3">
                                                          <!-- <router-link to="/raison_d_annulation"> -->
                                                            <button
                                                            class="btn btn-primary w-100" @click="refresh()"
                                                            style="background:#D9D9D9; border-color: #D9D9D9 ; color: black; border-radius: 10px"
                                                           
                                                            >
                                                            Annuler quand même
                                                            </button>
                                                          <!-- </router-link> -->
                                                            

                                                            
                                                        </div>
                                                        

                                                        <div class="col-md-12 mb-3" data-bs-dismiss="modal" aria-label="Close">
                                                          <button class="btn btn-primary w-100" style="background:#D9D9D9; border-color: #D9D9D9 ; color: black; border-radius: 10px">Attendre</button>
                                                        </div>

                                                        <div class="col-md-12 mb-3">
                                                          <button class="btn btn-primary w-100" style="background:red; border-color: red ; border-radius: 10px">Appeler la compagnie</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="col-md-1"></div>
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

                            <div class="col-md-7 ">
                              <!-- Button trigger modal -->
                                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background: #219935; border-color: #219935 ;font-size: 12px;">
                                    Procéder au paiement
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content" style="width: 87%;">
                                        <div class="modal-header">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 mb-4">
                                              <div class="card">
                                                <img :src="location.vehicule_image_url" class="card-img-top" alt="..." style="    height: 215px; object-fit: cover;">
                                                
                                              </div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                              <h5 style="font-size: 16px;color: black;">Compagnie {{ location.companieInfos.raison_social }} </h5>
                                            </div>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;"> {{ location.marque }} {{ location.modele }} {{ location.annee }}</p>
                                              <p style="margin-top: -15px; font-size: 14px;">{{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }} </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> chauffeur | <strong>{{ location.chauffeur }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Intérieur | <strong>{{ location.interieurPays }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;">Retrait | <strong>{{ location.date_retrait }} </strong> | <strong>{{ location.heure_retrait }}</strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Retour | <strong>{{ location.date_retour }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Nombres de jours de location |<strong>{{  }}</strong></p>
                                            </div>
                                            <hr>
                                            <div class="col-md-12">
                                              <p style="font-size: 14px;"> Nom & prénoms | <strong>{{ location.chauffeur }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Solde | <strong>{{ location.interieurPays }} </strong> </p>
                                            </div>

                                            <hr>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;"> Prix de location | <strong>{{ location.montant }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Intérieur du pays | <strong>{{ location.interieurpaysprix}} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Chauffeur | <strong>{{location.avecchauffeurprix}} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Total | <strong> {{ location.avecchauffeurprix + location.interieurpaysprix + location.montant }} </strong> </p>
                                            </div>

                                            <div class="col-md-12 text-center">
                                              <button class="btn btn-primary"  @click="payer(location)" style="background-color:#219935 ; border-color: #219935">Payer maintenant</button>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                                <!-- <button
                                class="btn btn-primary"
                                style="background: #219935; border-color: #219935 ;font-size: 12px;"
                                @click="payer(location)"
                                >
                                Procéder au paiement
                                </button> -->
                            </div>
                            </div>

                            <div class="row" v-if="location.status == 'En attente'">
                            <div class="col-md-6">
                                <button
                                class="btn btn-primary w-75"
                                style="
                                    background: white;
                                    border-color: crimson;
                                    color: crimson;
                                    font-size: 12px; 
                                "
                                data-bs-toggle="modal"
                                data-bs-target="#annulModal10"
                                >
                                Annuler
                                </button>

                                <!-- Modal -->
                                <div
                                class="modal fade"
                                id="annulModal10"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel10"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel10">
                                        Donnez la raison de l'annulation
                                        </h1>
                                        <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        ></button>
                                    </div>
                                    
                                    <div>
                                        <select v-model="option" class="w-100 mb-2">
                                        <option value="Je n'ai plus besoin du ticket" selected>Je n'ai plus besoin du Véhicule</option>
                                        <option value="J'ai changé d'avis">J'ai changé d'avis</option>
                                        <option value="J'ai une autre option">J'ai une autre option</option>
                                        <option value="Autre">Autre</option>
                                        </select>
                                        <div class="mb-2">
                                        <textarea v-model="autre_raison" class="w-100" cols="30" rows="10" />
                                        </div>
                                    </div>
                                    <button @click="annul(location)" class="btn btn-primary">Enregistrer</button>
                                    </div>
                                </div>
                              </div>
                            </div>
                            </div>
                            </div>

                            <div class="row mb-2" v-if="location.status == 'Confirmé'" style="margin: 4px; margin-top: -15px;">
                              <div class="col-6 text-start">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="
                                      background: white;
                                      border-color: #219935;
                                      color: #219935;
                                      font-size: 12px; 
                                  "
                                  >
                                  Appel
                                  </button>
                              </div>
                              <div class="col-6 text-end">
                                <router-link :to="`/messagerie/${location.companieInfos.uid}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ;font-size: 12px; "
                                  >
                                  Message
                                  </button>
                                </router-link>
                              </div>
                            </div>

                            <div class="row mb-2" v-if="location.status == 'Utilisé'" style="margin: 4px; margin-top: -15px;">
                               
                              <div class="col-12 text-center">
                                <router-link :to="`/messagerie/${location.companieInfos.uid}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ;font-size: 12px; "
                                  >
                                  Commander à nouveau
                                  </button>
                                </router-link>
                              </div>
                            </div>

                            <div class="row mb-2" v-if="location.status == 'Annuler'" style="margin: 4px; margin-top: -15px;">
                               
                               <div class="col-12 text-center">
                                 <router-link :to="`/messagerie/${location.companieInfos.uid}`">
                                   <button
                                   class="btn btn-primary w-75"
                                   style="background: #219935; border-color: #219935 ;font-size: 12px; "
                                   >
                                   Commander à nouveau
                                   </button>
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
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>
#card_compagnie {
    border-radius: 5px !important;
    /* background: rgba(217, 217, 217, 0.13); */
    
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25) !important;
}
</style>