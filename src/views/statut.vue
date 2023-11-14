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

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid

const reservations = ref([])
onBeforeMount(async () => {
  userStore.setUser(userId)
  reservationStore.setUserReservations(userId)

  reservationStore.userReservations.forEach(reservation => {
    if(param === 'en-attente' && reservation.status === 'En attente') {
      reservations.value.push(reservation)
    } else if(param === 'valide' && reservation.status === 'Validé') {
      reservations.value.push(reservation)
    } else if(param === 'reporte' && reservation.status === 'Reporté') {
      reservations.value.push(reservation)
    } else if(param === 'utilise' && reservation.status === 'Utilisé') {
      reservations.value.push(reservation)
    } else if(param === 'confirme' && reservation.status === 'Confirmé') {
      reservations.value.push(reservation)
    } else if(param === 'annule' && reservation.status === 'Annuler') {
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

const reporter = async (reservation) => {
  
  const reportColRef = collection(firestoreDb, 'reservation_reporter')

  const { status, ...extracted_reservation } = reservation

  const docRef = await addDoc(reportColRef, { extracted_reservation, status: 'En attente', report: new Date(date_report.value) })
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
        title: 'Continuer le payement ?',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
    })
      
    if (result.isConfirmed) {
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
                                    src="/public/assets/img/avatars/1.png"
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
                                {{ new Intl.DateTimeFormat(undefined, options).format(reservation.createdAt) }} <br />
                               
                                </p>
                            </div>

                            
                            </div>
                        <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            N° |  <strong> {{ reservation.number }} </strong>
                             
                            </p>
                        <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
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
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Intérieur | <strong>{{ reservation.interieurPays }} </strong>
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
                            Retrait | <strong>{{ reservation.date_retrait }} </strong> |
                            <strong>{{ reservation.heure_retrait }}</strong>
                            </p>

                        <br />
                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
                            >
                            Retour | <strong>{{ reservation.date_retour }} </strong>
                            </p>
                        <br />

                            <p
                            class="card-text"
                            style="font-size: 13px; margin-top: -11px; margin-bottom: -11px"
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
                            <div class="row" v-if="reservation.status == 'validé'">
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