<script setup>
import { useUserStore } from "@/store/user.js"
import { useAuthStore } from "@/store/auth.js"
import { onBeforeMount, onMounted, ref } from "vue"
import router from '@/router/router.js'

import { addDoc, updateDoc, setDoc, getDoc, doc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"

import { useReservationStore } from '@/store/reservation.js'


const userStore = useUserStore()
const authStore = useAuthStore()
const reservationStore = useReservationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  userStore.setUser(userId)
  reservationStore.setUserReservations(userId)
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

const reporter = async (reservation) => {
  
  const reportColRef = collection(firestoreDb, 'reservation_reporter')

  const { status, ...extracted_reservation } = reservation

  const docRef = await addDoc(reportColRef, { ...extracted_reservation, status: 'En attente', report: new Date(date_report.value) })
        .then(() => {
          console.log('Document ajouté')
          toast.info("Réservation reportée", {
            autoClose: 3500,
            position: toast.POSITION.TOP_RIGHT,
          })
        }) 

  await updateDoc(docRef, { uid: `${docRef.id}` })

  document.querySelector('#reportForm').reset()
  document.querySelector('.btn-close').click()
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

      const notificationColRef = collection(firestoreDb, 'notifications')

      const client_notif = {
        title: 'Paiement pour réservation', 
        message: `Vous avez effectué un paiement de FCFA ${reservation.montant} pour la réservation du ticket N° ${reservation.number} pour le trajet de ${reservation.lieu_depart} à ${reservation.destination}.`, 
        destinataire: userId, 
        lu: false, 
        createdAt: new Date()
      }

      await addDoc(notificationColRef, client_notif)
  
      // ajouter la somme sur le compte de la compagnie
      const comp_companieDocRef = doc(firestoreDb, 'compagnies', `${reservation.compagnie_uid}`)
      const comp_accountColRef = collection(comp_companieDocRef, 'myAccount')
      const comp_accountDocRef = doc(comp_accountColRef, 'account')

      const snapshot = await getDoc(comp_accountDocRef)
      let companieAccount
      if(snapshot.exists()) companieAccount = snapshot.data()

      const comp_data = {
        solde: Number(companieAccount.solde) + Number(reservation.montant)
      }

      await updateDoc(comp_accountDocRef, comp_data)

      const comp_notif = {
        title: 'Réception de paiement', 
        message: `Vous avez reçu un paiement de FCFA ${reservation.montant} pour la réservation du ticket N° ${reservation.number} pour le trajet de ${reservation.lieu_depart} à ${reservation.destination}.`, 
        userId: reservation.compagnie_uid, 
        lu: false, 
        createdAt: new Date()
      }

      await addDoc(notificationColRef, comp_notif)
      
      console.log('Payement effectué')
    } catch (error) {
      console.log(error)
    }
    }
  }
}

</script>

<template>

  <div class="row mt-5">
    <h1 class="mb-4">Mes réservations</h1>
    <div class="col-md-4 mb-4" v-for="(reservation, index) in reservationStore.userReservations" :key="index">
      <div
        class="card h-100 border-0"
        id="card_compagnie"
        style="box-shadow: none; background: none"
      >
        <div
          class="card mb-3 mt-4"
          style="margin: 10px; margin-top: -10px !important; width: 98%"
        >
          <div class="row g-0" style="margin: 10px">
            <div class="col-md-12">
              <div class="card-body">
                <div class="row">
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
                      {{ new Intl.DateTimeFormat(undefined, options).format(reservation.createdAt) }} <br />
                      <strong> {{ reservation.number }} </strong>
                    </p>
                  </div>

                  <div class="col-6 text-end" style="margin-top: -10px">
                    <button class="btn btn-primary" style="background-color: #219935; border: #219935">
                      {{ reservation.montant }}
                    </button>
                  </div>
                </div>
               <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Reservation |
                  <strong style="color: #219935">{{ reservation.status }} </strong>
                </p>
               <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  <strong>{{ reservation.modele }} </strong> |
                  <!-- <strong> Santafe 2022 </strong> -->
                </p>
               <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  {{ reservation.moteur }} | {{ reservation.boite }} | {{ reservation.plaque_vehicule }}
                </p>
               <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  chauffeur | <strong>{{ reservation.chauffeur }} </strong>
                </p>
               <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Intérieur | <strong>{{ reservation.interieurPays }} </strong>
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
                    margin-top: -32px;
                    margin-bottom: -8px;
                  "
                >
                  Retrait | <strong>{{ reservation.date_retrait }} </strong> |
                  <strong>{{ reservation.heure_retrait }}</strong>
                </p>

               <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Retour | <strong>{{ reservation.date_retour }} </strong>
                </p>
               <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Nombres de jours de reservation |
                  <strong>{{ reservation.number }}</strong>
                </p>
               <br />

                <div class="row" v-if="reservation.status == 'Validé'">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="
                        background: white;
                        border-color: #219935;
                        color: #219935;
                      "
                      data-bs-toggle="modal"
                      data-bs-target="#reportModal10"
                    >
                      Reporter
                    </button>

                    <!-- Modal -->
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
                          <form id="reportForm" @submit.prevent="reporter(reservation)">
                            <label>Nouvelle Date</label>
                            <input v-model="date_report" type="date" />

                            <button type="submit" class="btn btn-primary">
                              Enregistrer
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background: #219935; border-color: #219935"
                      @click="payer(reservation)"
                    >
                      Procéder au paiement
                    </button>
                  </div>
                </div>

                <div class="row" v-if="reservation.status == 'Confirmé'">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary w-75"
                      style="
                        background: white;
                        border-color: #219935;
                        color: #219935;
                      "
                    >
                      Appel
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary w-75"
                      style="background: #219935; border-color: #219935"
                      data-bs-toggle="modal"
                      data-bs-target="#messageModal10"
                    >
                      Message
                    </button>

                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="messageModal10"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel10"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel10">
                              Votre Message à : {{ reservation.companieInfos.raison_social }}
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form id="reportForm" @submit.prevent="sendMessage(reservation)" style="height: 500px">
                            <div class="d-flex w-100" style="position: absolute; bottom: 0">
                              <input type="text" v-model="message" class="w-100" />
                              <button type="submit" class="btn btn-primary">
                                Envoyer
                              </button>
                            </div>

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" v-if="reservation.status == 'En attente'">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary w-75"
                      style="
                        background: white;
                        border-color: crimson;
                        color: crimson;
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
                              <option value="Je n'ai plus besoin du ticket" selected>Je n'ai plus besoin du ticket</option>
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
