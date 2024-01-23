<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from '@/components/Loader.vue'
import Programme from "@/components/CompteReservation/Programme-client.vue"

import { collection, doc, addDoc, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'
import { encryptParam } from '@/utils/hash.js'

import { v4 as uuidv4 } from 'uuid'
import { decryptParam } from '@/utils/hash.js'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const companieId = decryptParam(route.params.id) 

const politiques = ref('') 
const politiqueColRef = collection(firestoreDb, 'politiques')


const getPolitiques = async () => {
  const q = query(politiqueColRef, where('compagnie_uid', '==', `${companieId}`)) 
  const snapshots = await getDocs(q) 

  politiques.value = snapshots.docs[0].data()
}

const notation = ref(0)
const getNotation = async () => {

  const docRef = doc(firestoreDb, 'compagnies', `${companieId}`)

  const notationColRef = collection(docRef, 'client_avis') 
  
  const snapshots = await getDocs(notationColRef) 

  let totalEtoiles = 0 
  if(snapshots.docs.length > 0) {
    snapshots.docs.forEach(not_doc => { 
        const notationData = not_doc.data() 
        totalEtoiles += Number(notationData.nombre_etoile)
    }) 

    notation.value = Math.round((totalEtoiles / snapshots.docs.length) * 20) 
  }
}

onBeforeMount(async () => {
  await companieStore.setCompanieById(companieId)

  toast.success(`Bienvenue chez ${companieStore.companie.raison_social}`, { 
    autoClose: 3500, 
    position: toast.POSITION.TOP_CENTER
  })

  companieStore.setCompanieCars(companieId)
  companieStore.setProgrammesVoyages(companieId)
  promotionStore.setCompaniePromotionProgrammes(companieId) 

  getPolitiques()
  
  getNotation()
})

const name = ref('')
const villeDepart = ref('')
const villeArrive = ref('')
const dateDepart = ref()
const heureDepart = ref()
const nombrePersonnes = ref()

const reservationColRef = collection(firestoreDb, 'reservation')

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const isLoading = ref(false)

const reserver = async (programme) => {
  isLoading.value = true
  const Data = {
    client_id: user.uid,
    client_profil_url: user.imageUrl || '',
    compagnie_uid: companieId || programme.compagnie_uid,
    createdAt: new Date(),
    date_depart: dateDepart,
    destination: programme.destination,
    escale: programme.escale,
    heure_depart: heureDepart.value,
    lieu_depart: villeDepart.value,
    lieu_arrive: villeArrive.value,
    montant: programme.montant,
    nom_client: name.value,
    nombre_personne: nombrePersonnes.value,
    number: programme.number,
    payement: 'En attente',
    status: programme.status,
    telephone_client: user.telephone,
    ticket_id: uuidv4()
  }

  try {
    const docRef = await addDoc(reservationColRef, Data)

    if(docRef) {
      console.log('Document ajouté avec success')

      isLoading.value = false

      document.querySelector('.btn-close').click()

      toast.success("Réservation effectuée avec succès", { 
        autoClose: 3500, 
        position: toast.POSITION.TOP_CENTER
      })
    }

    document.querySelector('#reservationForm').reset()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <main id="main">
    <!-- ======= start imageCouverture ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: 70px ;" 
    >
      <div class="container">
        <div class="row g-4"></div>
          <div class="col-12">
            <img
              :src="companieStore.companie.imageCouvertureUrl"
              alt=""
              class="img-fluid w-100"
              
              id="img_couv"
            />
          </div>
      </div>

     
    </section>
    <!-- ======= End imageCouverture ======= -->

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-7">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    :src="companieStore.companie.imageLogoUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 150px; height: 150px !important; object-fit: cover;  border: 2.8px solid #E8E8E8"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body" id="card_espace">
                    <h5 class="card-title">{{ companieStore.companie.raison_social }}</h5>
                    <p class="card-text">
                      {{ companieStore.companie.description }}
                    </p>
                    <button class="btn btn-primary" style=" width: 115px; background: rgb(33 153 53); border-radius: 20px; border-color: rgb(33 153 53);"><i class="bx bx-like" style="color: white"></i> {{ notation }}%</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End profils -->

     <!-- ======= start meunu ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: -70px"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  style="border-radius: 5px 0px 0px 0px !important;"
                >
                  Trajet
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="promotion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#promotion-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="promotion-tab-pane"
                  aria-selected="false"
                >
                  Promotion
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                >
                 Programmes
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="politique-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#politique-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="politique-tab-pane"
                  aria-selected="false"
                >
                  Politiques
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="apropos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#apropos-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="apropos-tab-pane"
                  aria-selected="false"
                  style="border-radius: 0px 5px 0px 0px !important;"
                >
                  A propos
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
               <div v-if="companieStore.programmeVoyages.length > 0">
                <div class="row mt-4">
                  <div class=" col-lg-4 col-sm-6 mb-4" v-for="(programme, i) in companieStore.programmeVoyages" :key="i">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">

                          <div class="col-6 mt-2 mb-2">
                            <button
                              class="btn btn-primary mb-2"
                              style="
                                background-color: #219935;
                                border-color: #219935;
                                font-size: 13px;
                              "
                            >
                              {{ programme.montant }} FCFA
                            </button>
                          </div>
                          
                          <div class="col-6 mt-2 mb-2"> 
                            <p style="font-size: 13px;"><strong>Départ - Arrivé </strong> <br> {{ programme.lieu_depart }} - {{ programme.destination }}</p>
                          </div>
                          
                          <!-- <div class="col-md-6 mt-2">
                            <p style="font-size: 13px;"><strong>Lieu de départ </strong> <br> {{ programme.lieu_depart }}</p>
                          </div>

                          <div class="col-md-6 mt-2">
                            <p style="font-size: 13px;"><strong>Destinations </strong> <br> {{ programme.destination }}</p>
                          </div> -->

                          <div class="col-6 mt-4" style="margin-top: -9px !important;">
                            <p style="font-size: 13px;"><strong> Heure de départ </strong> <br> {{ programme.heure_depart }}</p>
                          </div>

                          <div class="col-6 mt-4" style="margin-top: -9px !important;">
                            <p style="font-size: 13px;"><strong>Convocation </strong> <br> {{ programme.heure_convocation }}</p>
                          </div>

                          <div class="col-6 mt-3" style="margin-top: -9px !important;">
                            <p style="font-size: 13px;"><strong>Escale  </strong> <br> {{ programme.escale }}</p>
                          </div>

                          <div class="col-6 mt-3" style="margin-top: -9px !important;">
                            <p style="font-size: 13px;"><strong>Jours de voyage</strong> <br> {{ programme.jours_voyage }}</p>
                          </div>
                          <div class="col-12 text-center">
                            <!-- Button trigger modal -->
                            <router-link :to="`/detail_reservation_ticket/${encryptParam(companieId)}/${encryptParam(programme.uid)}`">
                              <button
                                type="button"
                                class="btn btn-primary w-50"
                                style="
                                  background-color: #219935;
                                  border-color: #219935;
                                  font-size: 13px;
                                "
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                Voir plus
                              </button>
                            </router-link>

                            <!-- Modal -->
                            <!-- <div
                              class="modal fade"
                              id="exampleModal"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div
                                    class="modal-header"
                                    style="background: #deeee4"
                                  >
                                    <h1
                                      class="modal-title fs-5"
                                      id="exampleModalLabel"
                                      style="font-size: 17px !important"
                                    >
                                      Réservation de ticket
                                    </h1>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <form
                                      id="reservationForm"
                                      class="row g-3 needs-validation"
                                      novalidate
                                      @submit.prevent="reserver(programme)"
                                    >
                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
                                          >Nom & Prénoms</label
                                        >
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="name"
                                          required
                                        />
                                      </div>

                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
                                          >Ville de départ</label
                                        >
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="villeDepart"
                                          required
                                        />
                                      </div>

                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
                                          >Ville d'arrivée</label
                                        >
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="villeArrive"
                                          required
                                        />
                                      </div>

                                      <div class="col-md-6">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
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
                                          >Heure de départ</label
                                        >
                                        <input
                                          type="time"
                                          class="form-control"
                                          id="validationCustom01"
                                          v-model="heure_depart"
                                          required
                                        />
                                      </div>

                                      <Loader 
                                        style="position: absolute; left: 35%; top: 15%"
                                        v-if="isLoading" 
                                      />

                                      <div class="col-md-12">
                                        <label
                                          for="validationCustom01"
                                          class="form-label"
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
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               <div class="w-100" v-else>
                <div class="row mt-4">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                    <div class="card text-center border-0">
                      <div class="text-center">
                        <img src="/assets/img/icone/trajet.png" alt="" class="img-fluid w-50">
                      </div>
                      
                      <div class="card-body">
                        <p class="card-text">Aucun trajet disponible</p>
                      </div>
                    </div>
                  
                    
                  </div>
                  <div class="col-md-3"></div>
                </div>
               </div>
                
              </div>
              <div
                class="tab-pane fade"
                id="promotion-tab-pane"
                role="tabpanel"
                aria-labelledby="promotion-tab"
                tabindex="0"
              >

                <div  v-if="promotionStore.companiePromotionProgrammes.length > 0">
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 g-4">
                  <div class="col" v-for="(promoProgram, i) in promotionStore.companiePromotionProgrammes" :key="i">
                    
                    <div
                      class="card border-0"
                      style="background: #f3f4f6; padding: 6px"
                    >
                      <div class="row" style="padding: 6px">
                        <div class="col-md-12 d-flex"  style="margin-top: -11px;">
                          <img
                          :src="companieStore.companie.imageLogoUrl"
                            class="img-fluid"
                            alt="..."
                            style="width: 40px; height: 40px; border-radius: 50%; margin-top: 6px; object-fit: contains; border: 1px solid #8b8b8b;"
                          />
                          <h6
                          style="
                              font-size: 15px;
                              margin-left: 5px;
                              margin-top: 16px;
                            "
                          >
                          {{ companieStore.companie.raison_social }}
                          </h6>
                          <p
                          style="
                              font-size: 15px;
                              margin-left: 5px;
                              margin-top: 14px;
                            "
                          >
                          <i class='bx bxs-map'></i>
                            {{ companieStore.companie.adresse }}
                          </p>
                        </div>
                      </div>
                      <div
                        class="card h-100"
                        id="compagnie_card"
                        style="
                          padding: 6px;
                          background: #a6a6a621;
                          box-shadow: none;
                          background: transparent;
                          margin-top: -10px;
                        "
                      >
                        <router-link
                          :to="`/detail_reservation_ticket/${encryptParam(companieId)}/${encryptParam(promoProgram.uid)}`"
                          style="
                            border: 1px solid;
                            border-radius: 5px;
                            border-color: #a6a6a6;
                          "
                        >
                          <img
                            src="/assets/img/rb.jpg"
                            class="card-img-top"
                            alt="..."
                            style="
                              border-radius: 5px 5px 5px 5px;
                              height: 215px !important;
                              object-fit: cover;
                            "
                          />
                    </router-link>
                        <button class="btn btn-primary" id="badges">
                          <s> {{ promoProgram.ancien_montant }} FCFA </s>
                        </button>
                        <button class="btn btn-primary" id="badges0">
                          {{ promoProgram.montant }} FCFA
                        </button>
                        <button class="btn btn-primary" id="badges012">
                          {{ promoProgram.pourcentage }}%
                        </button>
                        <button class="btn btn-primary" id="badges0121">
                          {{ promoProgram.lieu_depart }} - {{ promoProgram.destination }}
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="w-100" v-else>
                  <div class="row mt-4">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                      <div class="card text-center border-0">
                        <div class="text-center">
                          <img src="/assets/img/icone/promo.png" alt="" class="img-fluid w-50">
                        </div>
                        
                        <div class="card-body">
                          <p class="card-text">Aucune promotion disponible.</p>
                        </div>
                      </div>
                    
                      
                    </div>
                    <div class="col-md-3"></div>
                  </div>
                </div>
                 
              </div>
              <div
                class="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
              <Programme />
              </div>

              <div
                class="tab-pane fade"
                id="politique-tab-pane"
                role="tabpanel"
                aria-labelledby="politique-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100"  >
                      <div class="card-body">
                        <div  v-if="politiques.length > 0">
                        <p>
                          {{ politiques.text }}
                        </p>
                      </div>

                        <div class="w-100" v-else>
                          <div class="row mt-4">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                              <div class="card text-center border-0">
                                <div class="text-center">
                                  <img src="/assets/img/icone/promo.png" alt="" class="img-fluid w-50">
                                </div>
                                
                                <div class="card-body">
                                  <p class="card-text">Aucune politique disponible.</p>
                                </div>
                              </div>
                            
                              
                            </div>
                            <div class="col-md-3"></div>
                          </div>
                        </div> 
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="apropos-tab-pane"
                role="tabpanel"
                aria-labelledby="apropos-tab"
                tabindex="0"
              >
                 

                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card mb-3 border-0">
                      <div class="row g-2">
                        <div class="col-md-3 text-center">
                          <div class="card text-bg-white" style="padding: 10px;">
                            <img src="/assets/img/service/bus.png" class="card-img" alt="...">
                            <div class="card-img-overlay">
                               
                            </div>
                          </div>
                          
                         
                        </div>
                        <div class="col-md-9">
                          <div class="card-body">
                             <div class="row">
                               <div class="col-md-4">
                                <h6 id="h6"> <i class='bx bx-car'></i>  Raison sociale</h6>
                                <p>{{ companieStore.companie.raison_social }} </p>
                               </div>
                               <div class="col-md-4">
                                <h6 id="h6"> <i class='bx bx-user' ></i> Responsable </h6>
                                <p> {{ companieStore.companie.responsable }} </p>
                               </div>
                               <div class="col-md-4">
                                <h6 id="h6"> <i class='bx bx-phone' ></i> Téléphone</h6>
                                <p>{{ companieStore.companie.telephone }} </p>
                                <p>{{ companieStore.companie.site_web }}</p>
                               </div>
                             </div>
                             <hr>
                             <div class="row">
                               <div class="col-md-4">
                                <h6 id="h6"> <i class='bx bx-envelope' ></i>  Email</h6>
                                <p>{{ companieStore.companie.email }} </p>
                               </div>
                               <div class="col-md-4">
                                <h6 id="h6"><i class='bx bx-map'></i> Adresse</h6>
                                <p>  {{ companieStore.companie.adresse }} </p>
                               </div>

                               <div class="col-md-4">
                                <h6 id="h6"> <i class='bx bx-map-pin' ></i> Localisation</h6>
                                <p>  {{ companieStore.companie.latitude }} {{ companieStore.companie.longitude }} </p>
                               </div>
                             </div>
                             <hr>
                             <div class="row">
                               <div class="col-md-12">
                                <h6 id="h6">Présentation</h6>
                                <p>{{ companieStore.companie.presentation }}</p>
                               </div>
                                                    
                             </div>
                             <hr>
                             <div class="row">
                               
                               <div class="col-md-12">
                                <h6 id="h6">Description</h6>
                                <p>{{ companieStore.companie.description }}</p>
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
    <!-- End menu -->
  </main>
  <!-- End #main -->
</template>
<style scoped>
  .nav-tabs .nav-link {
      margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
      border: var(--bs-nav-tabs-border-width) solid transparent;
      border-radius: 0px !important;
  }

  #img_couv{
  height: 250px;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  border-radius: 10px;
  border: 1px solid #219935;
  object-position: 50% 75% !important;
}

#h6{
  font-size: 14px;
  font-weight: 600;
  color: #21993599;
}

#card_espace{
    margin-left: -38px;
  }

@media (max-width: 984px) {
  #card_espace{
    margin-left: 50px;
    /* width: 260px; */
  }

  #badges012 {
    left: 75%;
}
  
}

</style>
