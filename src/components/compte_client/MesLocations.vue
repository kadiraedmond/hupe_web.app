<script setup>
import { useUserStore } from "@/store/user.js"
import { useAuthStore } from "@/store/auth.js"
import { onBeforeMount, onMounted, ref } from "vue"
import router from '@/router/router.js'

import { addDoc, updateDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from "vue3-toastify"

import { useLocationStore } from '@/store/location.js'


const userStore = useUserStore()
const authStore = useAuthStore()
const locationStore = useLocationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
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
  const docRef = await addDoc(reportColRef, { extracted_location, status: 'En attente', report: new Date(date_report.value) })
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
  function checkout() {
      CinetPay.setConfig({
          apikey: '8147832776464ac622a6806.22624295',//   YOUR APIKEY
          site_id: '132831',//YOUR_SITE_ID
          // notify_url: 'http://mondomaine.com/notify/',
          // mode: 'PRODUCTION'
          mode: 'DEVELOPEMENT'
      });
      CinetPay.getCheckout({
          transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
          amount: Number(location.montant),
          currency: 'XOF',
          channels: 'ALL',
          description: `Paiement pour la location ${location.number}`,   
            //Fournir ces variables pour le paiements par carte bancaire
          customer_name: `${userStore.user.lastName}`,//Le nom du client
          customer_surname: `${userStore.user.firstName}`,//Le prenom du client
          customer_email: `${userStore.user.email}`,//l'email du client
          customer_phone_number: `${userStore.user.telephone}`,//l'email du client
          customer_address : `${userStore.user.addresse}`,//addresse du client
          customer_city: '',// La ville du client
          customer_country : `${userStore.user.country}`,// le code ISO du pays
          customer_state : `${userStore.user.country}`,// le code ISO l'état
          customer_zip_code : '', // code postal

      });
      CinetPay.waitResponse((data) => {
          if (data.status == "REFUSED") {
              toast.warn("Votre paiement a échoué", {
                autoClose: 3500,
                position: toast.POSITION.TOP_CENTER,
              })
            window.location.reload()
          } else if (data.status == "ACCEPTED") {
            toast.success("Votre paiement a été effectué avec succès", {
              autoClose: 3500,
              position: toast.POSITION.TOP_CENTER,
            })
            window.location.reload()
          }
      });
      CinetPay.onError((data) => {
          console.log(data)
      })
  }

  checkout()
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
                      {{ new Intl.DateTimeFormat(undefined, options).format(location.createdAt) }} <br />
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