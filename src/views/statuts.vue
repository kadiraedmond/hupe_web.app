<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { addDoc, query, where, updateDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"
import Swal from 'sweetalert2'

import { encryptParam } from '@/utils/hash.js'

import { useLocationStore } from '@/store/location.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const param = route.params.param


const userStore = useUserStore()
const authStore = useAuthStore()
const locationStore = useLocationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'Pxr3ZohT9Y6vOztEeNhf' || savedUser.uid || authStore.user.uid

const locations = ref([])
onBeforeMount(async () => { 

  userStore.setUser(userId) 
  await locationStore.setUserLocations(userId)

  userStore.setTotalAmount(userId)

  locations.value = [] 
  locationStore.userLocations.forEach(async location => {
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

      const documentID = `${location.companieInfos.uid}_${userId}`
  
      const conversationDocRef = doc(firestoreDb, 'conversations', documentID)

      const messagesColRef = collection(conversationDocRef, 'messages')

      const q = query(messagesColRef, where('lu', '==', false))

      const snapshot = await getDocs(q)
      
      locations.value.push({ ...location, unreadMessagesCount: snapshot.docs.length })
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
    await setDoc(doc(reportColRef, `${location.uid}`), { ...extracted_location, status: 'En attente', report_retrait: new Date(date_retrait.value), report_retour: new Date(date_retour.value) })

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

    document.querySelector('.btn-close-reporter').click()

    Swal.fire({
      title: "Succès",
      text: "Votre demande de report a été envoyé", 
      icon: "success"
    }) 

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
  const hystoryColRef = collection(userDocRef, 'hystory')

  const snapshot = await getDoc(accountDocRef) 

  const differenceEnJours = Math.round((location.date_retour - location.date_retrait) / (24 * 60 * 60))
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

  const montant_a_payer = total_a_payer * differenceEnJours

  let amount
  if(snapshot.exists()) amount = snapshot.data()

  if(!amount.solde || amount.solde == 0 || amount.solde === '' || amount.solde < montant_a_payer) {
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
      
    if(result.isConfirmed) {
    // Debiter le solde du client
    const data = {
      solde: Number(amount.solde) - montant_a_payer, 
    }

    try {
      await updateDoc(accountDocRef, data)

      document.querySelector('.btn-close-payer').click()

      Swal.fire({
        title: "Succès",
        text: "Payement effectué",
        icon: "success"
      }) 

      const notificationColRef = collection(firestoreDb, 'notifications')

      const client_notif = { 
        uid: '', 
        title: 'Paiement pour location', 
        message: `Vous avez effectué un paiement de caution de FCFA ${montant_a_payer} pour la location de votre ${location.vehicule} ${location.modele} pour une durée de ${differenceEnJours} jours.`, 
        destinataire: userId,
        lu: false, 
        createdAt: Timestamp.now() 
      }

      const client_docRef = await addDoc(notificationColRef, client_notif)


      await updateDoc(client_docRef, { uid: `${client_docRef.id}` })

      // ajout de l'hisqtorique client
      const client_hystory = {
        body: montant_a_payer,
        title: 'Paiement pour location',
        topic: 'Paiement',
        solde: amount.solde,
        date: Timestamp.now()
      }
      
      await addDoc(hystoryColRef, client_hystory)

      // -----------------------------------------------
  
      // Recherche de la compagnie dans la base
      const comp_companieDocRef = doc(firestoreDb, 'compagnies', `${location.compagnie_uid}`)

      const comp_snapshot = await getDoc(comp_companieDocRef)
      let companieInfos
      if(comp_snapshot.exists()) companieInfos = comp_snapshot.data()

      // calcul du montant suite a l'application de la commission selon l'offre de la compagnie
      let montant_apres_commission
      
      if(companieInfos.offre === 'basique') {

        if(differenceEnJours >= 1 && differenceEnJours <= 3) {
          montant_apres_commission = Number(montant_a_payer) - (0.15 * Number(montant_a_payer))
        } 

        if(differenceEnJours >= 4 && differenceEnJours <= 7) {
          montant_apres_commission = Number(montant_a_payer) - (2 * 0.15 * Number(montant_a_payer))
        } 

        if(differenceEnJours > 7) {
          montant_apres_commission = Number(montant_a_payer) - (3 * 0.15 * Number(montant_a_payer))
        }

      } 
      
      else if(companieInfos.offre === 'vip') {

        if(differenceEnJours >= 1 && differenceEnJours <= 3) {
          montant_apres_commission = Number(montant_a_payer) - (0.20 * Number(montant_a_payer))
        } 

        if(differenceEnJours >= 4 && differenceEnJours <= 7) {
          montant_apres_commission = Number(montant_a_payer) - (2 * 0.20 * Number(montant_a_payer))
        } 

        if(differenceEnJours > 7) {
          montant_apres_commission = Number(montant_a_payer) - (3 * 0.20 * Number(montant_a_payer))
        }

      }

      // ajouter la somme sur le compte de la compagnie
      const comp_accountColRef = collection(comp_companieDocRef, 'myAccount')
      const comp_accountDocRef = doc(comp_accountColRef, 'account')
      const comp_hystoryColRef = collection(comp_companieDocRef, 'hystory')

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

      // ajout de l'historique de la compagnie
      const comp_hystory = {
        title: 'Réception de paiement',
        solde: companieAccount.solde,
        montantVerser: montant_a_payer,
        datePayement: Timestamp.now()
      }

      await addDoc(comp_hystoryColRef, comp_hystory)

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
    <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Location de véhicule</li>
          </ol>
  
        </div>
      </section> -->
      <!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details" style="margin-top: 50px;">
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
                              :src="location.companieInfos.imageLogoUrl"
                                alt
                                class="w-px-40 h-auto"
                                style="width: 40px !important; height: 40px !important; border: 1px solid rgb(214, 214, 214); border-radius: 50%;"
                            />
                          <div>
                            <div class="card-body">
                              <h5 class="card-title" style="font-size: 12px">
                                {{ location.companieInfos.raison_social }}
                              </h5>
                               
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
                                <router-link :to="`/ticket_location/${encryptParam(location.uid)}`">
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
                                    {{ new Intl.DateTimeFormat('fr-FR', options).format(location.created_at.toDate()) }} <br />
                                     
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
                           
                            <div class="row" style="margin-top: 10px;">
                              <div class="col-6">
                                <p
                                  class="card-text"
                                  style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                  >
                                   <strong> Véhicule </strong> <br> {{ location.vehicule }} | {{ location.modele }} | {{ location.vehicule_annee}}
                                   
                                </p>
                              </div>
                              <div class="col-6">
                                <p
                                class="card-text"
                                style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                >
                                <strong> Moteur </strong> <br>   {{ location.moteur }} 
                                </p>

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
                        
                        <div class="col-md-12 mt-2">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-6">
                                <p
                                  class="card-text"
                                  style="
                                      font-size: 13px;
                                      margin-top: -41px;
                                      margin-bottom: -8px;
                                  "
                                  >
                                  <strong>Retrait</strong> <br> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retrait.toDate()) }}  |
                                  {{ location.heure_retrait }}
                                </p>
                              </div>

                              <div class="col-6">
                                <p
                                class="card-text"
                                style="font-size: 13px; margin-top: -41px; margin-bottom: -8px"
                                >
                                <strong>Retour</strong> <br> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retour.toDate()) }}
                                </p>  
                              </div>
                            </div>
                           

                            <br />
                             
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -7px; margin-bottom: -11px"
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
                                            :src="location.companieInfos.imageLogoUrl"
                                              alt
                                              class="w-px-40 h-auto"
                                              style="width: 40px !important; height: 40px !important; border: 1px solid rgb(214, 214, 214); border-radius: 50%;"
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
                                                        <a :href="`/raison/location/${encryptParam(location.uid)}`">
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
                                              <p style=" font-size: 14px;"> <strong> {{ location.vehicule }} {{ location.modele }} {{ location.annee_vehicule }} </strong> </p>
                                              <div class="row mt-4">
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> <strong>Moteur</strong> <br> {{ location.moteur }} </p>
                                                </div>
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> <strong>Transmission</strong> <br> {{ location.boite }} </p>
                                                </div>
                                              </div>
                                              <div class="row mt-2">
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"><strong>Immatriculation </strong> <br> {{ location.plaque_vehicule }} </p>
                                                </div>
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"><strong>Année </strong> <br> {{ location.annee_vehicule }} </p>

                                                </div>
                                              </div>
                                              <div class="row mt-2">
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> chauffeur <strong> <br> {{ location.chauffeur }} </strong> </p>
                                                </div>
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> Intérieur <strong> <br> {{ location.interieurPays }} </strong> </p>
                                                </div>
                                              </div>
                                              <div class="row mt-2">
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;">Retrait <strong> <br>{{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retrait.toDate()) }} </strong> | <strong>{{ location.heure_retrait }}</strong> </p>
                                                </div>
                                                <div class="col-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> Retour  <strong> <br> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retour.toDate()) }} </strong> </p>

                                                </div>
                                              </div>
                                              <div class="row mt-2">
                                                 
                                                <div class="col-12">
                                                  <p style="margin-top: -15px; font-size: 14px;"> <strong>Nombre de jours de location</strong> <br> {{ Math.round((location.date_retour - location.date_retrait) / (24 * 60 * 60)) }}</p>

                                                </div>
                                              </div>
                                              
                                              
                                              
                                            </div>
                                            
                                            <div class="col-md-12">
                                              <hr>
                                              <div class="row mt-2">
                                                <div class="col-md-6 mt-2">
                                                  <p style="margin-top: -15px; font-size: 14px;"><strong> Solde </strong> <br> </p>
                                                </div>
                                                <div class="col-md-6 mt-2">
                                                  <p style="margin-top: -15px; font-size: 14px;"> {{ userStore.totalAmount.solde ? userStore.totalAmount.solde : 0 }} </p>
                                                </div>
                                              </div>
                                              <hr style="margin-top: -8px;">
                                              <!-- <p style="font-size: 14px;"> Nom & prénoms | <strong>{{ savedUser.lastName }} {{ savedUser.firstName }} </strong> </p> -->
                                             
                                            </div>

                                           
                                            <div class="col-md-12">
                                              <div class="row mt-2">
                                                <div class="col-md-6">
                                                  <p style=" font-size: 14px;"><strong> Prix de location </strong> <br></p>
                                                </div>
                                                <div class="col-md-6">
                                                  <p style=" font-size: 14px;"> {{ location.montant }} FCFA </p>
                                                </div>
                                              </div>
                                              <div class="row mt-2">
                                                <div class="col-md-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"> <strong> Intérieur du pays </strong> </p>

                                                </div>
                                                <div class="col-md-6">
                                                  <p style="margin-top: -15px; font-size: 14px;">
                                                    {{ location.interieurPays === 'Oui' ? location.interieurpaysprix : 0 }} FCFA 
                                                  </p>
                                                </div>
                                              </div>

                                              <div class="row mt-2">
                                                <div class="col-md-6">
                                                  <p style="margin-top: -15px; font-size: 14px;"><strong>Chauffeur  </strong> </p>

                                                </div>
                                                <div class="col-md-6">
                                                  <p style="margin-top: -15px; font-size: 14px;">{{ location.chauffeur === 'Oui' ? location.avecchauffeurprix : 0 }} FCFA</p>
                                                </div>
                                              </div>
                                              <hr style="margin-top: -4px;">
                                              <div class="row mt-2">
                                                <div class="col-md-6">
                                                  <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"><strong> Total</strong> </p>
                                                  <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"><strong> Total</strong> </p>
                                                  <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"><strong> Total</strong> </p>
                                                  <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"><strong> Total</strong> </p>
                                                </div>
                                                <div class="col-md-6">
                                                  <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"> {{ Number(location.avecchauffeurprix) + Number(location.montant) }} FCFA  </p>
                                                  <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"> {{ Number(location.interieurpaysprix) + Number(location.montant) }} FCFA  </p>
                                                  <p v-if="location.chauffeur === 'Non' && location.interieurPays === 'Non'" style="margin-top: -15px; font-size: 14px;"> {{ Number(location.montant) }} FCFA  </p>
                                                  <p v-if="location.chauffeur === 'Oui' && location.interieurPays === 'Oui'" style="margin-top: -15px; font-size: 14px;"> {{ Number(location.avecchauffeurprix) + Number(location.interieurpaysprix) + Number(location.montant) }} FCFA  </p>
                                                </div>
                                              </div>
                                             
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
                                <router-link :to="`/messagerie/${encryptParam(location.companieInfos.uid)}`">
                                  <button type="button" class="btn btn-primary position-relative" style="background: #219935; border-color: #219935 ; font-size: 12px; ">
                                    Message
                                    <span v-if="location.unreadMessagesCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      {{ location.unreadMessagesCount }}
                                      <span class="visually-hidden">unread messages</span>
                                    </span>
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
                                <router-link :to="`/detail_vehicule_location/${encryptParam(location.vehicule_id)}`">
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
                                 <router-link :to="`/detail_vehicule_location/${encryptParam(location.vehicule_id)}`">
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