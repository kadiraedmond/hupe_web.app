<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";

import { addDoc, updateDoc, setDoc, getDoc, doc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"

import { useReservationStore } from '@/store/reservation.js'

import { useRoute } from 'vue-router'

const route = useRoute()

const param = route.params.param


const userStore = useUserStore()
const authStore = useAuthStore()
const reservationStore = useReservationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid

const reservations = ref([])
onBeforeMount(async () => {

  userStore.setUser(userId) 
  await reservationStore.setUserReservations(userId)

  userStore.setUser(userId) 
  await reservationStore.setUserReservations(userId)

  reservations.value = [] 
  reservationStore.userReservations.forEach(reservation => {
    if(param === 'en-attente' && reservation.status === 'En attente') {
      reservations.value.push(reservation)
    }
    
    if(param === 'valide' && reservation.status === 'Validé') {
      reservations.value.push(reservation)
    }
    
    if(param === 'reporte' && reservation.status === 'Reporté') {
      reservations.value.push(reservation)
    }
    
    if(param === 'utilise' && reservation.status === 'Utilisé') {
      reservations.value.push(reservation)
    }
    
    if(param === 'confirme' && reservation.status === 'Confirmé') {
      reservations.value.push(reservation)
    }
    
    if(param === 'annule' && reservation.status === 'Annuler') {
      reservations.value.push(reservation)
    } else if(param === 'en-attente-de-report' && reservation.status === 'En report') {
      reservations.value.push(reservation)
    }
    
    if(param === 'en-attente-de-report' && reservation.status === 'En report') {
      reservations.value.push(reservation)
    }
  }) 
})

const option = ref('')
const autre_raison = ref('')

const annul = async (reservation) => {
  const docRef = doc(firestoreDb, 'reservation', `${reservation.uid}`)

  console.log(option.value)

  let raison
  if(option.value !== '' || option.value) {
    raison = option.value
  } else if(option.value == 'Autre' && autre_raison.value !== '') {
    raison = autre_raison.value
  }

  await setDoc(docRef, { status: 'Annuler', raison_annulation: raison }, { merge: true })
        .then(() => {
          console.log('Document mis a jour')
          toast.warn("Réservation annulée", {
            autoClose: 3500,
            position: toast.POSITION.TOP_RIGHT,
          })
        }) 
  
  document.querySelector('.btn-close').click()
}

const date_report = ref()
const heure_report = ref()

const reporter = async (reservation) => {
  const reportColRef = collection(firestoreDb, 'reservation_reporter')
  const reservationDocRef = doc(firestoreDb, 'reservation', `${reservation.uid}`)

  const { status, ...extracted_reservation } = reservation

  try {
    // const docRef = await addDoc(reportColRef, { ...extracted_reservation, status: 'En attente', report: new Date(date_report.value) })
    await setDoc(doc(reportColRef, `${reservation.uid}`), { ...extracted_reservation, status: 'En attente', date_report: new Date(date_report.value), heure_report: heure_report.value })

    await updateDoc(reservationDocRef, { status: 'En report', date_depart: new Date(date_report.value), heure_depart: heure_report.value }) 
  
    const notificationColRef = collection(firestoreDb, 'notifications')
  
    const data = { 
      uid: '', 
      title: 'Report de réservation', 
      message: `Vous avez une demande de report de la réservation N° ${reservation.number}`, 
      userId: `${reservation.compagnie_uid}`, 
      lu: false, 
      createdAt: Timestamp.now()  
    }
  
    const docRef = await addDoc(notificationColRef, data)
    
    
    await updateDoc(docRef, { uid: `${docRef.id}` })

    
    document.querySelector('.btn-close-report').click()
    
    
    Swal.fire({
      title: "Succès",
      text: "Votre demande de report a été envoyé", 
      icon: "success"
    })

    
  } catch (error) {
    console.log(error)
  }
}

const payer = async (reservation) => {
  const userDocRef = doc(firestoreDb, 'users', `${userId}`)
  const userSubColRef = collection(userDocRef, 'myAccount')
  const accountDocRef = doc(userSubColRef, 'account')

  const snapshot = await getDoc(accountDocRef)

  let amount
  if(snapshot.exists()) amount = snapshot.data()

  if(!amount.solde || amount.solde == 0 || amount.solde === '' || amount.solde < Number(reservation.montant)) {
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
      solde: Number(amount.solde) - Number(reservation.montant), 
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

      const client_notif = { 
        uid: '', 
        title: 'Paiement pour réservation', 
        message: `Vous avez effectué un paiement de FCFA ${reservation.montant} pour la réservation du ticket N° ${reservation.number} pour le trajet de ${reservation.lieu_depart} à ${reservation.destination}.`, 
        destinataire: userId,
        lu: false, 
        createdAt: Timestamp.now() 
      }

      const client_docRef = await addDoc(notificationColRef, client_notif)

      await updateDoc(client_docRef, { uid: `${client_docRef.id}` })
  
      // Recherche de la compagnie dans la base
      const comp_companieDocRef = doc(firestoreDb, 'compagnies', `${reservation.compagnie_uid}`) 

      const comp_snapshot = await getDoc(comp_companieDocRef)
      let companieInfos
      if(comp_snapshot.exists()) companieInfos = comp_snapshot.data()

      // calcul du montant suite a l'application de la commission selon l'offre de la compagnie
      let montant_apres_commission
      
      if(companieInfos.offre == 'basique') {

        montant_apres_commission = Number(reservation.montant) - (0.15 * Number(reservation.montant))

      } 
      
      else if(companieInfos.offre == 'vip') {

        montant_apres_commission = Number(reservation.montant) - (0.20 * Number(reservation.montant))

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
        message: `Vous avez reçu un paiement de FCFA ${montant_apres_commission} pour la réservation du ticket N° ${reservation.number} pour le trajet de ${reservation.lieu_depart} à ${reservation.destination}.`, 
        userId: `${reservation.compagnie_uid}`,
        lu: false, 
        createdAt: Timestamp.now() 
      }

      const comp_docRef = await addDoc(notificationColRef, comp_notif)

      await updateDoc(comp_docRef, { uid: `${comp_docRef.id}` })

      // mise a jour du status de la réservation
      const reservationDocRef = doc(firestoreDb, 'reservation', `${reservation.uid}`)
      await updateDoc(reservationDocRef, { status: 'Confirmé', payement: 'éffectuer' })

      
      reservations.value = reservations.value.filter(reser => reser.uid !== reservation.uid)
      
      console.log('Payement effectué')
    } catch (error) {
      console.log(error)
    }
    }
  }
}

const message = ref('')

const sendMessage = async (reservation) => {
  const doc_id = `${userId}_${reservation.companieInfos.uid}`

  const conversationDocRef = doc(firestoreDb, 'conversations', `${doc_id}`)

  const docRef = await setDoc(conversationDocRef, {})

  const messageColRef = collection(docRef, 'messages')
  
  const data = {
    clientNumber: savedUser.telephone || authStore.user.telephone,
    message: message.value,
    otherUserId: reservation.companieInfos.uid,
    sendAt: Timestamp.now(),
    userId: userId
  }

  await addDoc(messageColRef, data).then('Document ajouté')
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
            <li>Resérvation de ticket</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
            <div class="container">
  
              <div class="row no-gutters g-4 mt-4">
                <div class="col-md-4 mb-4" v-for="(reservation, index) in reservations" :key="index">
                <div
                    class="card h-100 border-0"
                    id="card_compagnie"
                    style=" background: none ;padding: 6px;"
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
                                        {{ reservation.companieInfos.raison_social }}
                                    </h5>
                                    <p class="card-text" style="font-size: 12px">
                                        <i
                                        class="bx bx-map"
                                        style="color: rgb(139 139 139); margin-left: 2px"
                                        ></i>
                                     {{ reservation.companieInfos.adresse }}
                                    </p>
                                    </div>
                                </div>
                                </div>
                            

                                <div class="col-6 text-end">
                                    <strong style="color: #219935 ;font-size: 12px; margin-right: 10px; font-weight: 500;"> {{ reservation.status }} </strong>
                                <button
                                    class="btn btn-primary"
                                    style="
                                    background: #219935;
                                    border-color: #219935;
                                    margin-top: 5px;
                                    font-size: 10px;
                                    "
                                >
                                {{ reservation.montant }} FCFA
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
                            
                          <div class="row mb-2" v-if="reservation.status == 'Confirmé'" style=" margin-top: 0px; margin-bottom: 24px !important;">
                              <div class="col-6 text-start">
                                <router-link :to="`/ticket_reservation/${reservation.uid}`">
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
                                          <button type="button" class="btn-close-report" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 text-center">
                                              <p>Pour reporter votre ticket , veuillez séléctionner une nouvelle date</p>
                                            </div>
                                            <div class="col-md-12">
                                              <form class="row g-3 needs-validation" novalidate @submit.prevent="reporter(reservation)">
                                                <div class="col-md-12">
                                                  <label for="validationCustom01" class="form-label">Nouvelle date</label>
                                                  <input type="date" class="form-control" v-model="date_report" id="validationCustom01"  required>
                                                  <div class="valid-feedback">
                                                    Looks good!
                                                  </div>
                                                </div>
                                                <div class="col-md-12">
                                                  <label for="validationCustom01" class="form-label">Nouvelle heure</label>
                                                  <input type="time" class="form-control" v-model="heure_report" id="validationCustom01"  required>
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
                                  {{ new Intl.DateTimeFormat('fr-FR', options).format(reservation.createdAt.toDate()) }} <br />
                                
                                  </p>
                              </div>
                              <div class="col-6">
                                <p
                                  class="card-text"
                                  style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                                  >
                                  N° |  <strong> {{ reservation.number }} </strong>
                                  
                                </p>
                              </div> 

                            </div>

                            <br />

                            <p
                              class="card-text"
                              style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                              >
                              Place à réserver | <strong>{{ reservation.nombre_personne }} </strong> 
                              <!-- <strong> Santafe 2022 </strong> -->
                            </p>

                            <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                            >
                              Trajet | {{ reservation.lieu_depart }} - {{ reservation.destination }}
                            </p>

                            <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                            >
                            Escale | <strong>{{ reservation.escale }} </strong>
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
                            Départ | <strong>{{ new Intl.DateTimeFormat('fr-FR', options).format(reservation.date_depart.toDate()) }} </strong> |
                            <strong>{{ reservation.heure_depart }}</strong>
                            </p>

                        <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Convocation | <strong>{{ reservation.heure_convocation }} </strong>
                            </p>
                        <br />

                            

                            
                          <div class="row" v-if="reservation.status == 'Validé'">
                           

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

                                 Modal
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
                                                      <a :href="`/raison/reservation/${reservation.uid}`">
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
                                                        <a :href="`tel:${reservation.companieInfos.telephone}`">
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

                            <div class="col-md-6">
                              <!-- Button trigger modal -->
                                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background: #219935; border-color: #219935 ;font-size: 12px;">
                                    Procéder au paiement
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content" style="width: 87%;">
                                        <div class="modal-header" style="background-color: #219935 ; color: white">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Details pour le paiement</h1>
                                          <button type="button" class="btn-close-payer" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="row">
                                            <div class="col-md-12 mb-4">
                                              <div class="card">
                                                <img src="" class="card-img-top" alt="..." style="    height: 215px; object-fit: cover;">
                                                
                                              </div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                              <h5 style="font-size: 16px;color: black;">Compagnie {{ reservation.companieInfos.raison_social }} </h5>
                                            </div>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;">  Place à réserver <strong>{{ reservation.nombre_personne }} </strong> |</p>
                                              <p style="margin-top: -15px; font-size: 14px;">Trajet | {{ reservation.lieu_depart }} - {{ reservation.destination }}</p>
                                              <p style="margin-top: -15px; font-size: 14px;"> chauffeur | <strong>{{ reservation.chauffeur }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;">  Escale | <strong>{{ reservation.escale }} </strong></p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Départ | <strong>{{ reservation.date_depart }} </strong> |  <strong>{{ reservation.heure_depart }}</strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Convocation | <strong>{{ reservation.heure_convocation }} </strong> </p>
                                             </div>
                                            <hr>
                                            <div class="col-md-12">
                                              <p style="font-size: 14px;"> Nom & prénoms | <strong>{{ reservation.nom_client }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Solde | <strong>{{ reservation.solde }} </strong> </p>
                                            </div>

                                            <hr>
                                            <div class="col-md-12">
                                              <p style=" font-size: 14px;"> Prix de reservation | <strong>{{ reservation.montant }} </strong> </p>
                                              <p style="margin-top: -15px; font-size: 14px;"> Total | <strong>{{ reservation.montant }} </strong><strong>{{ reservation.montant }} </strong> </p>
                                            </div>

                                            <div class="col-md-12 text-center">
                                              <button class="btn btn-primary"  @click="payer(reservation)" style="background-color:#219935 ; border-color: #219935">Payer maintenant</button>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                                <!-- <button
                                class="btn btn-primary"
                                style="background: #219935; border-color: #219935 ;font-size: 12px;"
                                @click="payer(reservation)"
                                >
                                Procéder au paiement
                                </button> -->
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
                                  <button @click="annul(reservation)" class="btn btn-primary">Enregistrer</button>
                                </div>
                              </div>
                            </div>
                          </div>  -->

                          <div class="row" v-if="reservation.status == 'Confirmé'">
                            <div class="col-md-6">
                              <a :href="`tel:${reservation.companieInfos.telephone}`">
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
                            <div class="col-md-6">
                              <router-link :to="`/messagerie/${reservation.companieInfos.uid}`">
                                <button type="button" class="btn btn-primary position-relative" style="background: #219935; border-color: #219935 ; font-size: 12px; ">
                                  Message
                                  <!-- <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                  </span> -->
                                </button>
                              </router-link>
                              <!-- <router-link :to="`/messagerie/${reservation.companieInfos.uid}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ; font-size: 12px; "
                                  >
                                      Message
                                  </button>
                              </router-link> -->
                            </div>
                            
                          </div>

                          <div class="row" v-if="reservation.status == 'Annuler'">
                              
                            <div class="col-md-12 text-center">
                              <router-link :to="`/detail_reservation_ticket/${reservation.trajet_id}`">
                                  <button
                                  class="btn btn-primary w-75"
                                  style="background: #219935; border-color: #219935 ; font-size: 12px; "
                                  >
                                      Commander à nouveau
                                  </button>
                              </router-link>
                            </div>
                            
                          </div>

                          <div class="row" v-if="reservation.status == 'Utilisé'">
                              
                              <div class="col-md-12 text-center">
                              <router-link :to="`/detail_reservation_ticket/${reservation.trajet_id}`">
                                    <button
                                    class="btn btn-primary w-75"
                                    style="background: #219935; border-color: #219935 ; font-size: 12px; "
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