<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { addDoc, updateDoc, collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
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

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid

const locations = ref([])
onBeforeMount(async () => { 

  userStore.setUser(userId) 
  await locationStore.setUserLocations(userId)

  userStore.setTotalAmount(userId)

  locations.value = [] 
  locationStore.userLocations.forEach(location => {
    if(param === 'en-attente' && location.status === 'En attente') {
      locations.value.push(location)
    }
    
    if(param === 'valide' && location.status === 'Validé') {
      locations.value.push(location)
    }
    
    if(param === 'reporte' && location.status === 'Reporté') {
      locations.value.push(location)
    }
    
    if(param === 'utilise' && location.status === 'Utilisé') {
      locations.value.push(location)
    }
    
    if(param === 'confirme' && location.status === 'Confirmé') {
      locations.value.push(location)
    }
    
    if(param === 'annule' && location.status === 'Annuler') {
      locations.value.push(location)
    }
    
    if(param === 'en-attente-de-report' && location.status === 'En report') {
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
const date_retrait = ref()
const date_retour = ref()

const reporter = async (location) => {
  const reportColRef = collection(firestoreDb, 'location_reporter')
  const locationDocRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)

  const { status, ...extracted_location } = location

  try {
    // const docRef = await addDoc(reportColRef, { ...extracted_location, status: 'En attente', report: new Date(date_report.value) }) 
    await setDoc(doc(reportColRef, `${location.uid}`), { ...location, status: 'En attente', report_retrait: new Date(date_retrait.value), report_retour: new Date(date_retour.value) })
    

    document.querySelector('#reportForm').reset()
    document.querySelector('.btn-close-reporter').click()

    Swal.fire({
      title: "Succès",
      text: "Votre demande de report a été envoyé", 
      icon: "success"
    }) 

    const report_data = {
      status: 'En report', 
      date_retrait: new Date(date_retrait.value), 
      date_retour: new Date(date_retour.value) 
    }
  
    await updateDoc(locationDocRef, report_data) 
  
    const notificationColRef = collection(firestoreDb, 'notifications')
  
    const data = { 
      uid: '', 
      title: 'Report de location', 
      message: `Vous avez une demande de report de la location N° ${location.number}`, 
      userId: `${location.compagnie_uid}`, 
      lu: false, 
      createdAt: Timestamp.now()  
    }
  
    const docRef = await addDoc(notificationColRef, data)

    await updateDoc(docRef, { uid: `${docRef.id}` })

    locations.value = locations.value.filter(loca => loca.uid !== location.uid)
    
    
  } catch (error) {
    console.log(error)
  }

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

  let total_a_payer = 0 

  if(location.chauffeur == 'Oui' && location.interieurPays == 'Non') {
    total_a_payer = Number(location.montant) + Number(location.avecchauffeurprix)
  } 

  else if(location.chauffeur == 'Non' && location.interieurPays == 'Oui') {
    total_a_payer = Number(location.montant) + Number(interieurpaysprix)
  } 

  else if(location.chauffeur == 'Non' && location.interieurPays == 'Non') {
    total_a_payer = Number(location.montant)
  } 

  else if(location.chauffeur == 'Oui' && location.interieurPays == 'Oui') {
    total_a_payer = Number(location.montant) + Number(location.avecchauffeurprix) + Number(location.interieurpaysprix)
  }

  let amount
  if(snapshot.exists()) amount = snapshot.data()

  if(!amount.solde || amount.solde == 0 || amount.solde === '' || amount.solde < total_a_payer) {
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
    // Debiter le solde du client
    const data = {
      solde: Number(amount.solde) - total_a_payer, 
    }

    try {
      await updateDoc(accountDocRef, data)

      Swal.fire({
        title: "Succès",
        text: "Payement effectué",
        icon: "success"
      }) 

      
      document.querySelector('.btn-close-payer').click()

      const notificationColRef = collection(firestoreDb, 'notifications')

      const differenceEnJours = Math.round((location.date_retour - location.date_retrait) / (24 * 60 * 60))

      const client_notif = { 
        uid: '', 
        title: 'Paiement pour location', 
        message: `Vous avez effectué un paiement de caution de FCFA ${total_a_payer} pour la location de votre ${location.vehicule} ${location.modele} pour une durée de ${differenceEnJours} jours.`, 
        destinataire: userId,
        lu: false, 
        createdAt: Timestamp.now() 
      }

      const client_docRef = await addDoc(notificationColRef, client_notif)


      await updateDoc(client_docRef, { uid: `${client_docRef.id}` })
  
      // Recherche de la compagnie dans la base
      const comp_companieDocRef = doc(firestoreDb, 'compagnies', `${location.compagnie_uid}`)

      const comp_snapshot = await getDoc(comp_companieDocRef)
      let companieInfos
      if(comp_snapshot.exists()) companieInfos = comp_snapshot.data()

      // calcul du montant suite a l'application de la commission selon l'offre de la compagnie
      let montant_apres_commission
      if(companieInfos.offre == 'basique') {
        montant_apres_commission = Number(total_a_payer) - 0.15 * Number(total_a_payer)
      } else if(companieInfos.offre == 'vip') {
        montant_apres_commission = Number(total_a_payer) - 0.2 * Number(total_a_payer)
      }

      // ajouter la somme sur le compte de la compagnie
      const comp_accountColRef = collection(comp_companieDocRef, 'myAccount')
      const comp_accountDocRef = doc(comp_accountColRef, 'account')

      const snapshot = await getDoc(comp_accountDocRef)
      let companieAccount
      if(snapshot.exists()) companieAccount = snapshot.data()

      const comp_data = {
        solde: Number(companieAccount.solde) + montant_apres_commission
      }

      await updateDoc(comp_accountDocRef, comp_data)

      const comp_notif = { 
        uid: '', 
        title: 'Réception de paiement', 
        message: `Vous avez reçu un paiement de caution de FCFA ${montant_apres_commission} pour la location de votre ${location.vehicule} ${location.modele}.`, 
        userId: `${location.compagnie_uid}`,
        lu: false, 
        createdAt: Timestamp.now() 
      }

      const comp_docRef = await addDoc(notificationColRef, comp_notif)


      await updateDoc(comp_docRef, { uid: `${comp_docRef.id}` })

      // mise a jour du status de la location
      const locationDocRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)
      await updateDoc(locationDocRef, { status: 'Confirmé', payement: 'éffectuer' })


      locations.value = locations.value.filter(loca => loca.uid !== location.uid)
      
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

 
const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  // hour: '2-digit', 
  // minute: '2-digit', 
  // second: '2-digit', 
}


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
                            src="/assets/img/avatars/1.png"
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
                                <router-link :to="`/ticket_location/${location.uid}`">
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
                                </router-link>
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
                                          <button type="button" class="btn-close-reporter" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 text-center">
                                              <p>Pour reporter votre ticket , veuillez séléctionner une nouvelle date</p>
                                            </div>
                                            <div class="col-md-12">
                                              <form @submit.prevent="reporter(location)" class="row g-3 needs-validation" novalidate>
                                              <div class="col-md-12">
                                                <label for="validationCustom01" class="form-label">Date de retrait</label>
                                                <input type="date" class="form-control" id="validationCustom01" v-model="date_retrait" required>
                                                <div class="valid-feedback">
                                                  Looks good!
                                                </div>
                                              </div>
                                              <div class="col-md-12">
                                                <label for="validationCustom02" class="form-label">Date de retour</label>
                                                <input type="date" class="form-control" id="validationCustom02" v-model="date_retour" required>
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
                                    {{ new Intl.DateTimeFormat(undefined, options).format(location.created_at) }} <br />
                                     
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
                            src="/assets/img/car2.jpg"
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
                            Retrait | <strong>{{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} </strong> |
                            <strong>{{ location.heure_retrait }}</strong>
                            </p>

                            <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Retour | <strong>{{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }} </strong>
                            </p>
                            <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Nombres de jours de location | <strong>{{ Math.round((location.date_retour - location.date_retrait) / (24 * 60 * 60)) }}</strong>
                            </p>
                            <br />

                            <div class="row" v-if="location.status === 'Validé'">
                              
                              <div class="col-md-6">
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
                                              src="/assets/img/avatars/1.png"
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
                                                        <a :href="`/raison/location/${location.uid}`">
                                                          <button
                                                          class="btn btn-primary w-100"
                                                          style="background:#D9D9D9; border-color: #D9D9D9 ; color: black; border-radius: 10px"
                                                        
                                                          >
                                                          Annuler quand même
                                                          </button>
                                                        </a>
                                                          

                                                          
                                                      </div>
                                                      

                                                      <div class="col-md-12 mb-3" data-bs-dismiss="modal" aria-label="Close">
                                                        <button class="btn btn-primary w-100" style="background:#D9D9D9; border-color: #D9D9D9 ; color: black; border-radius: 10px">Attendre</button>
                                                      </div>

                                                      <div class="col-md-12 mb-3"> 
                                                        <a :href="`tel:${location.companieInfos.telephone}`">
                                                          <button class="btn btn-primary w-100" style="background:red; border-color: red ; border-radius: 10px">Appeler la compagnie</button>
                                                        </a>
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

                              <!-- Procéder au payement -->
                              <div class="col-md-6">
                                <!-- Button trigger modal -->
                                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background: #219935; border-color: #219935 ;font-size: 12px;">
                                    Procéder au paiement
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content" style="width: 87%;">
                                        <div class="modal-header text-white" style="background: #219935">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Détails du paiement</h1>
                                          <button type="button" class="btn-close-payer" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 mb-4">
                                              <div class="card">
                                                <img :src="location.vehicule_image_url" class="card-img-top" alt="..." style="    height: 215px; object-fit: cover;">
                                                
                                              </div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                              <h5 style="font-size: 16px;color: black;">Compagnie : {{ location.companieInfos.raison_social }} </h5>
                                            </div>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;"> {{ location.marque }} {{ location.modele }} {{ location.annee }}</p>
                                              <p style="margin-top: -15px; font-size: 14px;">{{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }} </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> chauffeur | <strong>{{ location.chauffeur }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Intérieur | <strong>{{ location.interieurPays }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;">Retrait | <strong>{{ new Intl.DateTimeFormat(undefined, options).format(location.date_retrait) }} </strong> | <strong>{{ location.heure_retrait }}</strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Retour | <strong>{{ new Intl.DateTimeFormat(undefined, options).format(location.date_retour) }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Nombre de jours de location | <strong> {{ Math.round((location.date_retour - location.date_retrait) / (24 * 60 * 60)) }}</strong></p>
                                            </div>
                                            <hr>
                                            <div class="col-md-12">
                                              <p style="font-size: 14px;"> Nom & prénoms | <strong>{{ savedUser.lastName }} {{ savedUser.firstName }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Solde | <strong>{{ userStore.totalAmount.solde ? userStore.totalAmount.solde : 0 }} FCFA </strong> </p>
                                            </div>

                                            <hr>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;"> Prix de location | <strong>{{ location.montant }} FCFA </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Intérieur du pays | <strong>{{ location.interieurPays === 'Oui' ? location.interieurpaysprix : 0 }} FCFA </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Chauffeur | <strong>{{ location.chauffeur === 'Oui' ? location.avecchauffeurprix : 0 }} FCFA </strong> </p>
                                              <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"> Total | <strong> {{ Number(location.avecchauffeurprix) + Number(location.montant) }} FCFA </strong> </p>
                                              <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"> Total | <strong> {{ Number(location.interieurpaysprix) + Number(location.montant) }} FCFA </strong> </p>
                                              <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"> Total | <strong> {{ Number(location.montant) }} FCFA </strong> </p>
                                              <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"> Total | <strong> {{ Number(location.avecchauffeurprix) + Number(location.interieurpaysprix) + Number(location.montant) }} FCFA </strong> </p>
                                            </div>

                                            <div class="col-md-12 text-center">
                                              <button class="btn btn-primary" @click="payer(location)" style="background-color:#219935 ; border-color: #219935">Payer maintenant</button>
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
                              
                            </div>

                            <!-- <div class="col-md-6">
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

                                
                                  <div
                                  class="modal fade"
                                  id="annulModal10"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel10"
                                  aria-hidden="true"
                                  >
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div style="background: #219935" class="modal-header">
                                        <h1 class="modal-title text-white fs-5" id="exampleModalLabel10">
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
                            </div>  -->

                            <div class="row" v-if="location.status === 'En attente'">
                              <!--  -->
                            </div>

                            <div class="row mb-2" v-if="location.status === 'Confirmé'" style="margin: 4px; margin-top: -15px;">
                              <div class="col-6 text-start"> 
                                <a :href="`tel:${location.companieInfos.telephone}`">
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
                                </a>
                              </div>
                              <div class="col-6 text-end">
                                <router-link :to="`/messagerie/${location.companieInfos.uid}`">
                                  <button type="button" class="btn btn-primary position-relative" style="background: #219935; border-color: #219935 ; font-size: 12px; ">
                                    Message
                                    <!-- <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      99+
                                      <span class="visually-hidden">unread messages</span>
                                    </span> -->
                                  </button>
                                </router-link>
                                <!-- <router-link :to="`/messagerie/${location.companieInfos.uid}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ;font-size: 12px; "
                                  >
                                  Message
                                  </button>
                                </router-link> -->
                              </div>
                            </div>

                            <div class="row mb-2" v-if="location.status === 'Utilisé'" style="margin: 4px; margin-top: -15px;">
                               
                              <div class="col-12 text-center">
                                <router-link :to="`/detail_vehicule_location/${location.vehicule_id}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ;font-size: 12px; "
                                  >
                                  Commander à nouveau
                                  </button>
                                </router-link>
                              </div>
                            </div>

                            <div class="row mb-2" v-if="location.status === 'Annuler'" style="margin: 4px; margin-top: -15px;">
                               
                              <div class="col-12 text-center">
                                 <router-link :to="`/detail_vehicule_location/${location.vehicule_id}`">
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