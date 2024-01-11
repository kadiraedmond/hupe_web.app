<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import Loader from "@/components/Loader.vue"

import { collection, doc, addDoc, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth.js'
import { v4 as uuidv4 } from 'uuid'
import { encryptParam, decryptParam } from '@/utils/hash.js'

const route = useRoute()
const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const authStore = useAuthStore()
const companieId = decryptParam(route.params.id) 

const politiques = ref({}) 
const politiqueColRef = collection(firestoreDb, 'politiques')

const getPolitiques = async () => {
  const q = query(politiqueColRef, where('compagnie_uid', '==', `${companieId}`)) 
  const snapshots = await getDocs(q) 

  if(snapshots.docs.length > 0) {
    politiques.value = snapshots.docs[0].data()
  }

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
  await companieStore.resetCompanieCars()
  await companieStore.setCompanieById(companieId)

  toast.success(`Bienvenue chez ${companieStore.companie.raison_social}`, { 
    autoClose: 3500, 
    position: toast.POSITION.TOP_CENTER
  })

  companieStore.setCompanieCars(companieId)
  promotionStore.setCompaniePromotionCars(companieId) 

  getPolitiques()

  getNotation()
  
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const user = JSON.parse(localStorage.getItem('user')) || authStore.user

const name = ref('')
const avecChauffeur = ref(false)
const sansChauffeur = ref(false)
const capitalPays = ref(false)
const interieurPays = ref(false)
const dateRetrait = ref()
const heureRetrait = ref()
const lieuRetrait = ref('')
const dateRetour = ref()
const permis = ref()

const toggleChauffeur = (num) => {
  if(num == 1) {
    avecChauffeur.value = true
    sansChauffeur.value = false
  } else if(num == 2) {
    sansChauffeur.value = true
    avecChauffeur.value = false
  }
}

const togglePays = (num) => {
  if(num == 3) {
    capitalPays.value = true
    interieurPays.value = false
  } else if(num == 4) {
    interieurPays.value = true
    capitalPays.value = false
  }
}

const handleFileChange = () => {
    const fileInput = document.querySelector('#fileInput')
    
    const selectedFile = fileInput.files[0]

    permis.value = selectedFile
}

const locationColRef = collection(firestoreDb, 'location_vehicules')

const isLoading = ref(false)
</script>

<template>
  <main id="main">
    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: -21px ; padding: 122px;" 
    >
    <!-- <div class="card text-bg-dark">
        <img :src="companieStore.companie.imageCouvertureUrl" class="card-img" alt="..."  id="img_couv">
          <div class="card-img-overlay">
                               
         </div>
    </div> -->
    <img
       :src="companieStore.companie.imageCouvertureUrl"
        alt=""
        class="img-fluid w-100"
        
        id="img_couv"
      />
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -140px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-5">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="companieStore.companie.imageLogoUrl"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 150px; height: 150px !important; object-fit: cover;  border: 2.8px solid #E8E8E8"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ companieStore.companie.raison_social }}</h5>
                    <p class="card-text">
                      {{ companieStore.companie.description }}
                    </p>
                    <button class="btn btn-primary" style=" width: 115px; background: #219935 !important; border-radius: 20px; border-color: #219935 !important;"><i class="bx bx-like" style="color: white"></i> {{ notation !== NaN ? notation : 0 }}%</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
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
                  Véhicules
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Promotions
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li> -->
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
              <div v-if="companieStore.companieCars.length > 0">
                <div class="row mt-4">
                  <div class="col-md-6 mb-2" v-for="(car, i) in companieStore.companieCars" :key="i">
                    <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0">
                        <div class="col-md-5">
                          <img
                            :src="car.vehicule_image_url"
                            class="img-fluid rounded-start"
                            alt="..."
                            style="height: 218px; object-fit: cover;  width: 100%;"
                          />
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                            <div class="row g-1">
                              <div class="col-md-12">
                                <div class="row mb-2">
                                  <div class="col-md-9">
                                    <p class="card-text" style="font-size: 14px">
                                      <strong>{{ car.vehicule }} | {{ car.modele }} | {{ car.anne_vehicule }} </strong> 
                                    </p>
                                  </div>

                                  <div class="col-md-3"> 
                                      <button
                                      class="btn btn-primary"
                                      style="
                                        background-color: #219935;
                                        border-color: #219935;
                                        font-size: 14px;
                                        margin-left: -44px;
                                        width: 104px;
                                        position: absolute;
                                        margin-top: -8px;
                                      "
                                    >
                                      {{ car.montant }} FCFA
                                    </button>
                                   
                                  </div>
                                </div>
                                
                              </div>
                               

                               
                              <div class="col-md-12 mt-2">
                                 
                                <div class="row mt-2">
                                  <div class="col-6">
                                      <p class="card-text" style="font-size: 14px">
                                        <strong>  Moteur</strong> <br>
                                      {{ car.moteur }} 
                                      </p>
                                  </div>
                                  
                                  <div class="col-6">
                                    <p class="card-text" style="font-size: 14px ; margin-left: 32px;">
                                      <strong>  Transmission </strong> <br>
                                      {{ car.vehicule.boite}} CFA 
                                   </p>
                                  </div>
                                </div>
                                <div class="row mt-2">
                                  <div class="col-6">
                                    <p class="card-text" style="font-size: 14px">
                                      <strong>  Avec chauffeur </strong> <br>
                                   {{ car.avecchauffeurprix }} CFA 
                                   </p>
                                  </div>

                                  <div class="col-6">
                                    <p class="card-text" style="font-size: 14px ; margin-left: 27px;">
                                      <strong>  Vers l'intérieur </strong> <br>
                                      {{ car.interieurpaysprix }} CFA 
                                   </p>
                                  </div>
                                </div>
                                
                                 
                              </div>


                              <div class="col-md-12 mt-2 text-start">
                                <div class="row">
                                  <div class="col-6">
                                    <p class="card-text" style="font-size: 14px">
                                      <strong>  Immatriculation</strong> <br>
                                   {{ car.serie_vehicule }} CFA 
                                   </p>
                                  </div>

                                  
                                  <div class="col-6">
                                    <router-link :to="`/detail_vehicule_location/${encryptParam(companieId)}/${encryptParam(car.uid)}`">
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        style="
                                          background-color: #219935;
                                          border-color: #219935;
                                          margin-left: 40px;
                                          font-size: 14px;
                                        "
                                        data-bs-toggle="modal"
                                        :data-bs-target="'#exampleModal' + i"
                                      >
                                        Voir plus
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
              </div>
              <div class="w-100" v-else>
                <div class="row mt-4">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                    <div class="card text-center border-0">
                      <div class="text-center">
                        <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                      </div>
                      
                      <div class="card-body">
                        <p class="card-text">Aucun véhicule disponible</p>
                      </div>
                    </div>
                  
                    
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>
                
              </div>

              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div v-if="promotionStore.companiePromotionCars.length > 0">
                  <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col" v-for="(promoCar, i) in promotionStore.companiePromotionCars" :key="i">
                    
                    <div
                      class="card border-0"
                      style="background: #f3f4f6; padding: 6px"
                    >
                      <div class="row" style="padding: 6px">
                        <div class="col-md-12 d-flex" style="margin-top: -11px;">
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
                          :to="`/detail_vehicule_location/${encryptParam(companieId)}/${encryptParam(promoCar.uid)}`"
                          style="
                            border: 1px solid;
                            border-radius: 5px;
                            border-color: #a6a6a6;
                          "
                        >
                          <img
                            :src="promoCar.vehicule_image_url"
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
                          <s> {{ promoCar.ancien_montant }} FCFA </s>
                        </button>
                        <button class="btn btn-primary" id="badges0">
                          {{ promoCar.montant }} FCFA
                        </button>
                        <button class="btn btn-primary" id="badges012">
                          {{ promoCar.pourcentage }}%
                        </button>
                        <button class="btn btn-primary" id="badges0121">
                          {{ promoCar.vehicule }} {{ promoCar.modele }} {{ promoCar.anne_vehicule }}
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
                id="politique-tab-pane"
                role="tabpanel"
                aria-labelledby="politique-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100">
                      <div class="card-body">
                        <p>
                          {{ politiques.text }}
                        </p>

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
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
                            <img src="/assets/img/service/car.png" class="card-img" alt="...">
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

                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 14px"
                                  >
                                    {{ companieStore.companie.latitude }} - {{ companieStore.companie.longitude }}
                                  </h5>
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
  </main>
  <!-- End #main -->
</template>
<style scoped>
/* .nav-tabs .nav-link {
    border: none !important;
} */

.nav-tabs .nav-link {
    /* margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); */
    /* background: 0 0; */
    /* border: var(--bs-nav-tabs-border-width) solid transparent; */
    /* border-top-left-radius: var(--bs-nav-tabs-border-radius); */
    /* border-top-right-radius: var(--bs-nav-tabs-border-radius); */
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    border: var(--bs-nav-tabs-border-width) solid transparent;
    /* border-color: #219935; */
    border-radius: 0px !important;
}

/* #img_couv{
  max-height: 431px;
    
    min-width: 392px !important;
    max-inline-size: -webkit-fill-available;
} */

#img_couv{
  height: 250px;
    object-fit: cover;
  /* object-fit: fill; */
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


</style>
