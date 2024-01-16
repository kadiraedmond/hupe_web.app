<script setup>
import { useUserStore } from "@/store/user.js"
import { useAuthStore } from "@/store/auth.js"
import { onBeforeMount, onMounted, ref } from "vue"
import router from '@/router/router.js'

import { addDoc, updateDoc, setDoc, getDoc, doc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"
import Swal from 'sweetalert2'

import { useLocationStore } from '@/store/location.js'


const userStore = useUserStore()
const authStore = useAuthStore()
const locationStore = useLocationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'Pxr3ZohT9Y6vOztEeNhf' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  userStore.setUser(userId)
  locationStore.setUserLocations(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})


const date_report = ref()

const reporter = async (location) => {
  const reportColRef = collection(firestoreDb, 'location_reporter')

  const { status, ...extracted_location } = location

  console.log(new Date(date_report.value))
  const docRef = await addDoc(reportColRef, { ...extracted_location, status: 'En attente', report: new Date(date_report.value) })
        .then(() => {
          console.log('Document ajouté')
          toast.info("Location reportée", {
            autoClose: 3500,
            position: toast.POSITION.TOP_CENTER,
          })
        }) 

  await updateDoc(docRef, { uid: `${docRef.id}` })

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
    // Debiter le solde du client
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

      const notificationColRef = collection(firestoreDb, 'notifications')

      const uneJournee = 24 * 60 * 60 * 1000

      const dateRetrait = new Date(location.date_retrait)
      const dateRetour = new Date(location.date_retour)

      const differenceEnMs = Math.abs(dateRetour - dateRetrait) 

      const differenceEnJours = Math.round(differenceEnMs / uneJournee)

      const client_notif = {
        title: 'Paiement pour location', 
        message: `Vous avez effectué un paiement de caution de FCFA ${location.montant} pour la location de votre ${location.vehicule} ${location.modele} ${location.annee_vehicule} pour une durée de ${differenceEnJours} jours.`, 
        destinataire: userId, 
        lu: false, 
        createdAt: Timestamp.now()
      }

      await addDoc(notificationColRef, client_notif)
  
      // ajouter la somme sur le compte de la compagnie
      const comp_companieDocRef = doc(firestoreDb, 'compagnies', `${location.compagnie_uid}`)
      const comp_accountColRef = collection(comp_companieDocRef, 'myAccount')
      const comp_accountDocRef = doc(comp_accountColRef, 'account')

      const snapshot = await getDoc(comp_accountDocRef)
      let companieAccount
      if(snapshot.exists()) companieAccount = snapshot.data()

      const comp_data = {
        solde: Number(companieAccount.solde) + Number(location.montant)
      }

      await updateDoc(comp_accountDocRef, comp_data)

      const comp_notif = {
        title: 'Réception de paiement', 
        message: `Vous avez reçu un paiement de caution de FCFA ${location.montant} pour la location de votre ${location.vehicule} ${location.modele} ${location.annee_vehicule}.`, 
        userId: location.compagnie_uid, 
        type: 'compagnie', 
        lu: false, 
        createdAt: Timestamp.now()
      }

      await addDoc(notificationColRef, comp_notif)
      
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

  await addDoc(messageColRef, data).then('Document ajouté')

}

</script>

<template>
  <div class="row mt-5">
    <h1 class="mb-4">Mes Locations</h1>
    <div class="col-md-4 mb-4" v-for="(location, index) in locationStore.userLocations" :key="index">
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
            <div class="col-md-6">
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
                      {{ new Intl.DateTimeFormat('fr-FR', options).format(location.createdAt.toDate()) }} <br />
                      <strong> {{ location.number }} </strong>
                    </p>
                  </div>

                  <div class="col-6">
                    <button class="btn btn-primary">
                      {{ location.montant }}
                    </button>
                  </div>
                </div>
                <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Location |
                  <strong style="color: #219935">{{ location.status }} </strong>
                </p>
                <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  <strong>{{ location.modele }} </strong> |
                  <!-- <strong> Santafe 2022 </strong> -->
                </p>
                <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  {{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }}
                </p>
                <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  chauffeur | <strong>{{ location.chauffeur }} </strong>
                </p>
                <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
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
                    margin-top: -32px;
                    margin-bottom: -8px;
                  "
                >
                  Retrait | <strong>{{ location.date_retrait }} </strong> |
                  <strong>{{ location.heure_retrait }}</strong>
                </p>

                <br />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Retour | <strong>{{ location.date_retour }} </strong>
                </p>
                <br />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Nombres de jours de location |
                  <strong>{{ location.number }}</strong>
                </p>
                <br />

                <div class="row" v-if="location.status == 'Validé'">
                  <div class="col-md-6">
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
                  </div>

                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background: #219935; border-color: #219935"
                      @click="payer(location)"
                    >
                      Procéder au paiement
                    </button>
                  </div>

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

                <div class="row" v-if="location.status == 'Confirmé'">
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
                              Votre Message à : {{ location.companieInfos.raison_social }}
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form id="reportForm" @submit.prevent="sendMessage(location)" style="height: 500px">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>