<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from '@/components/Loader.vue' 

import Swal from 'sweetalert2' 

import router from '@/router/router.js' 

import { collection, doc, getDoc, addDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'

import { v4 as uuidv4 } from 'uuid'
import { encryptParam, decryptParam } from '@/utils/hash.js'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const programmeId = decryptParam(route.params.trajetId) 

const programmes = ref([]) 
const autresProgrammes = ref([]) 

const companieId = decryptParam(route.params.companieId)

onBeforeMount(async () => {
  await promotionStore.setProgramme(companieId, programmeId) 

  // companieId = await promotionStore.programme.compagnie_uid

  companieStore.setCompanieById(companieId)
  await companieStore.setProgrammesVoyages(companieId) 

  programmes.value = companieStore.programmeVoyages 

  programmes.value.forEach(programme => {
    if(programme.uid !== programmeId) {
      autresProgrammes.value.push(programme)
    }
  })
})

const name = ref('')
const nombrePersonnes = ref() 
const dateDepart = ref() 
const heureDepart = ref() 

const reservationColRef = collection(firestoreDb, 'reservation')

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const isLoading = ref(false)

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const reserver = async (programme) => {
  isLoading.value = true
  const Data = { 
    uid: '', 
    client_id: user.uid,
    client_profil_url: user.imageUrl || '', 
    client_addresse: user.addresse, 
    compagnie_uid: companieId, 
    trajet_id: programme.uid, 
    createdAt: Timestamp.now(),
    date_depart: new Date(dateDepart.value) || '',
    destination: programme.destination,
    escale: programme.escale,
    heure_depart: heureDepart.value, 
    lieu_depart: programme.lieu_depart,
    lieu_arrive: programme.destination,
    montant: programme.enPromo === true ? programme.montant_promotion : programme.montant,
    nom_client: `${user.lastName} ${user.firstName}`,
    nombre_personne: nombrePersonnes.value,
    number: `T_${Date.now()}`, 
    payement: 'En attente',
    status: 'En attente',
    telephone_client: user.telephone,
    ticket_id: uuidv4()
  }

  if(Data)  isLoading.value = true

  try {
    const docRef = await addDoc(reservationColRef, Data)

    console.log('Document ajouté avec success')

    document.querySelector('#closeReservation').click()

    Swal.fire({
      title: "Succès",
      text: "Réservation effectuée avec succès",
      icon: "success"
    })

    await updateDoc(docRef, { uid: `${docRef.id}` })

    isLoading.value = false

    const notificationColRef = collection(firestoreDb, 'notifications')

    const formatedDateDepart = new Intl.DateTimeFormat('fr-FR', options).format((new Date(dateDepart.value)))
    
    const comp_notif = {
      uid: '', 
      title: 'Réservation de ticket', 
      message: `Vous avez une réservation de ticket N° ${Data.number} en attente de validation venant du client « ${user.lastName} ${user.firstName} » pour le trajet « ${programme.lieu_depart} - ${programme.destination} » du « ${formatedDateDepart} », veuillez valider ou annuler cette réservation.`, 
      userId: Data.compagnie_uid,
      lu: false, 
      createdAt: Timestamp.now() 
    }

    const comp_docRef = await addDoc(notificationColRef, comp_notif)

    await updateDoc(comp_docRef, { uid: `${comp_docRef.id}` }) 

    document.querySelector('#reservationForm').reset() 

    await router.push(`/notation/${encryptParam(companieId)}`) 
    window.location.reload() 
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})

const goToRelatedProgram = async (programUID) => {
  await router.push(`/detail_reservation_ticket/${encryptParam(companieId)}/${encryptParam(programUID)}`)
  location.reload()
}

</script>
<template>
 
   <!-- ======= Portfolio Details Section ======= -->
   <section id="portfolio-details" class="portfolio-details" style="margin-top: 50px;">
    <div class="container">
      <div class="row no-gutters mt-4">
        <div class="col-md-8">
          <img
          src="/assets/img/rb.jpg"
            alt=""
            class="img-fluid"
            style="border-radius: 5px; width: 800px; height: 350px;  max-height: 350px"
          />
          

          <div class="row mt-4">
            <div class="col-md-12">
              <div class="row">
                <div class="row">
                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;" >Détails du trajet</h5>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        <!-- <button class="btn btn-primary" id="btn_circle"> -->
                          <img src="/assets/img/detail/1.svg" alt="" class="img-fluid" id="ImIcone">
                        <!-- </button> -->
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Trajet</h5>
                          <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}</p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                         
                           <img src="/assets/img/detail/2.svg" alt="" class="img-fluid" id="ImIcone">
                        
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Escale</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.escale }}
                        </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        
                          <img src="/assets/img/detail/3.svg" alt="" class="img-fluid" id="ImIcone">
                         
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Heure de départ</h5>
                        <p style="margin-top: -6px; font-size: 14px">{{ promotionStore.programme.heure_depart }}</p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                         
                           <img src="/assets/img/detail/3.svg" alt="" class="img-fluid" id="ImIcone">
                        
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Convocation</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.heure_convocation }}
                        </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                        
                           <img src="/assets/img/detail/4.svg" alt="" class="img-fluid" id="ImIcone">
                        
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Jours du voyage</h5>
                          <p style="margin-top: -6px; font-size: 14px">
                            {{ promotionStore.programme.jours_voyage }}
                          </p>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                  <div class="col-6 mt-3">
                    <div class="row g-0">
                      <div class="col-12 d-flex">
                         
                           <img src="/assets/img/detail/5.svg" alt="" class="img-fluid" id="ImIcone">
                        
                        <div id="space-left">
                          <h5 style="font-size: 18px; font-weight: 600;">Nombres de place</h5>
                        <p style="margin-top: -6px; font-size: 14px">
                          {{ promotionStore.programme.nb_place }}
                        </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <h5 class="mt-4" style="font-size: 22px; font-weight: 600;">Compagnie</h5>
                  <div class="card mb-3 mt-4 border-0" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-2">
                        <router-link :to="`/detail/${encryptParam(companieStore.companie.uid)}`">
                          <img :src="companieStore.companie.imageLogoUrl" class="img-fluid" alt="..." style="width: 96px; height: 96px; border: 2px solid; object-fit: cover;">
                        </router-link>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h4 class="card-title" style="font-size: 18px; font-weight: 600; margin-top: -17px;">{{ companieStore.companie.raison_social }}</h4>
                            <p class="card-text" style="font-size">{{ companieStore.companie.description }} </p>
                            <p class="card-text" font-size> <i class='bx bx-map'></i> {{ companieStore.companie.adresse }} </p>
                           
                            <!-- <button class="btn btn-primary" style=" width: 115px; background: #219935 !important; border-radius: 20px; border-color: #219935 !important;"><i class="bx bx-like" style="color: white"></i> {{ notation !== NaN ? notation : 0 }}%</button>
                             -->
                          </div>
                        </div>
                      </div>
                  </div>

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
                  <h5 class="card-title">{{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}</h5>

                  <p class="card-text"> </p>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <h6>Montant</h6>
                        </div>
                        <div class="col-6">
                          <h6 style=" color: #219935 !important">
                            {{ promotionStore.programme.enPromo === true ? promotionStore.programme.montant_promotion : promotionStore.programme.montant }} FCFA
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

                    

                    🌍 Réservez Maintenant, Explorez Plus Tard : Ne manquez pas l'opportunité de vivre l'aventure. Réservez pour se trajet ({{ promotionStore.programme.lieu_depart }} - {{ promotionStore.programme.destination }}) dès maintenant et ouvrez la porte à une expérience sans limites.
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
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                          v-if="user.uid"
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
                                    Réservation de ticket
                                </h1>
                                <button
                                    id="closeReservation"
                                    type="button"
                                    class="btn-close-reservation"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                </div>
                                <div class="modal-body">
                                <form
                                    id="reservationForm"
                                    class="row g-3 needs-validation"
                                    novalidate
                                    @submit.prevent="reserver(promotionStore.programme)"
                                >
                                  <div class="col-md-12">
                                    <label
                                        for="validationCustom01"
                                        class="form-label"
                                        style="float: left"
                                        >Nom & Prénoms</label
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
                                        >Ville de départ</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom01"
                                        :value="promotionStore.programme.lieu_depart"
                                        required
                                        disabled
                                    />
                                  </div>

                                  <div class="col-md-12">
                                    <label
                                        for="validationCustom01"
                                        class="form-label"
                                        style="float: left"
                                        >Ville d'arrivée</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom01"
                                        :value="promotionStore.programme.destination"
                                        required
                                        disabled
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label
                                        for="validationCustom01"
                                        class="form-label"
                                        style="float: left"
                                        >Date de départ</label
                                    >
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="validationCustom01"
                                        v-model="dateDepart"
                                        required
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label
                                        for="validationCustom01"
                                        class="form-label"
                                        style="float: left"
                                        >Heure de départ</label
                                    >
                                    <input
                                        type="time"
                                        class="form-control"
                                        id="validationCustom01"
                                        v-model="heureDepart"
                                        required
                                    />
                                  </div>

                                  <Loader 
                                    style="position: absolute; top: 35%"
                                    v-if="isLoading" 
                                  />

                                  <div class="col-md-12">
                                    <label
                                        for="validationCustom01"
                                        class="form-label"
                                        style="float: left"
                                        >Nombres de personnes</label
                                    >
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="validationCustom01"
                                        v-model="nombrePersonnes"
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
                                        Soumettre
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
              Trajets de la même compagnie
            </h2>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="(programme, i) in autresProgrammes" :key="i">
          <div
            class="card h-100"
            id="compagnie_card"
            style="background: #f3f4f6; box-shadow: none"
          >
            <router-link @click="goToRelatedProgram(programme.uid)" to=""> 
              <img
                src="/assets/img/rb.jpg"
                class="card-img-top"
                alt="..."
                style="border-radius: 10px 10px 0px 0px"
              />
            </router-link>
            <button
              class="btn btn-primary"
              id="badges0"
              style="left: 10px !important"
            >
              {{ programme.enPromo === true ? programme.montant_promotion : programme.montant }} FCFA
            </button>

            <div class="card-body">
              <router-link to="/details_vente_engin">
                <div class="row">
                  <div class="col-md-12">
                    <h5
                      class="card-title"
                      style="font-size: 15px; color: black"
                    >
                      {{ programme.lieu_depart }} - {{ programme.destination }}
                    </h5>
                  </div>
                </div>
              </router-link>
            </div>
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
  border-color: white;
  width: 100px;
  height: 100px;
}
#space-left{
  margin-left: 12px;
  margin-top: 10px;
}

#ImIcone{
  width: 60px;
  margin-top: -8px;
}
</style>
