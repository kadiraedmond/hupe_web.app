<script setup>
import { onBeforeMount, onMounted, ref } from "vue"

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const locationCompanies =  ref([])
const transportCompanies = ref([])
const country = ref('TG')

const companiesColRef = collection(firestoreDb, "compagnies")

onBeforeMount(() => {

  getCountryData()

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const getCountryData = async () => {
  // Locations
  locationCompanies.value = []
  const locationQuery = query(companiesColRef, where('type_compagnie', '==', 'Location'), where('country', '==', `${country.value}`), where('status', '==', 'active'))
  const locationSnapshot = await getDocs(locationQuery)
  locationSnapshot.docs.forEach((doc) => {
      locationCompanies.value.push(doc.data())
  }) 

  // Réservations
  transportCompanies.value = []
  const transportQuery = query(companiesColRef, where('type_compagnie', '==', 'Transport'), where('country', '==', `${country.value}`), where('status', '==', 'active'))
  const transportSnapshot = await getDocs(transportQuery)
  transportSnapshot.docs.forEach((doc) => {
    transportCompanies.value.push(doc.data())
  })
}

const loadDataFrom = (val) => {
  country.value = val

  getCountryData()
}

</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Acceuil</router-link></li>
            <li>Partenaires par pays  </li>
          </ol>
  
        </div>
    </section> -->
      
    <!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details" style="margin-top : 50px;">
          <div class="container">
  
              <div class="row no-gutters mt-4">

                <div class="col-md-12 mb-4">
                  <h4>Nos Partenaires</h4>
                </div>
                   
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-3"></div>
                      <div class="col-md-9">
                        <nav>
                          <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-location-tab" data-bs-toggle="tab" data-bs-target="#nav-location" type="button" role="tab" aria-controls="nav-location" aria-selected="true" style="border-radius: 5px 0px 0px 0px !important;"> Location de véhicules</button>
                            <button class="nav-link" id="nav-reservation-tab" data-bs-toggle="tab" data-bs-target="#nav-reservation" type="button" role="tab" aria-controls="nav-reservation" aria-selected="false"> Réservation de tickets</button>
                            <button class="nav-link" id="nav-local-tab" data-bs-toggle="tab" data-bs-target="#nav-local" type="button" role="tab" aria-controls="nav-local" aria-selected="false"> Location de gros engins </button>
                            <button class="nav-link " id="nav-vente-tab" data-bs-toggle="tab" data-bs-target="#nav-vente" type="button" role="tab" aria-controls="nav-vente" aria-selected="true">Vente de véhicules </button>
                            
                          </div>
                        </nav>
                      </div>
                    </div>
                    
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-location" role="tabpanel" aria-labelledby="nav-location-tab" tabindex="0">
                        <div class="row mt-4">
                          <div class="col-md-12">
                            <div class="d-flex align-items-start">
                              <div class="row w-100">
                                <div class="col-md-3">
                                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button @click="loadDataFrom('TG')" class="nav-link active text-start" id="v-pills-togo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-togo" type="button" role="tab" aria-controls="v-pills-togo" aria-selected="true"><img src="/assets/img/logo/togo.png" alt="" class="img-fluid"> Togo</button>
                                    <button @click="loadDataFrom('CI')" class="nav-link text-start" id="v-pills-ci-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ci" type="button" role="tab" aria-controls="v-pills-ci" aria-selected="false"> <img src="/assets/img/logo/ci.png" alt="" class="img-fluid">  Côte d'ivoire </button>
                                    <button @click="loadDataFrom('ML')" class="nav-link text-start" id="v-pills-mali-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mali" type="button" role="tab" aria-controls="v-pills-mali" aria-selected="false">  <img src="/assets/img/logo/mali.png" alt="" class="img-fluid"> Mali </button>
                                    <button @click="loadDataFrom('BJ')" class="nav-link text-start" id="v-pills-benin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-benin" type="button" role="tab" aria-controls="v-pills-benin" aria-selected="false">  <img src="/assets/img/logo/benin.png" alt="" class="img-fluid"> Benin </button>
                                    <button @click="loadDataFrom('BF')" class="nav-link text-start" id="v-pills-burkina-tab" data-bs-toggle="pill" data-bs-target="#v-pills-burkina" type="button" role="tab" aria-controls="v-pills-burkina" aria-selected="false">  <img src="/assets/img/logo/burkina.png" alt="" class="img-fluid">  Burkina Faso</button>
                                    <button @click="loadDataFrom('GN')" class="nav-link text-start" id="v-pills-guinne-tab" data-bs-toggle="pill" data-bs-target="#v-pills-guinne" type="button" role="tab" aria-controls="v-pills-guinne" aria-selected="false"> <img src="/assets/img/logo/guine.png" alt="" class="img-fluid">   Guinée Conakry </button>
                                    <button @click="loadDataFrom('NE')" class="nav-link text-start" id="v-pills-niger-tab" data-bs-toggle="pill" data-bs-target="#v-pills-niger" type="button" role="tab" aria-controls="v-pills-niger" aria-selected="false"> <img src="/assets/img/logo/niger.png" alt="" class="img-fluid">  Niger  </button>
                                    <button @click="loadDataFrom('SN')" class="nav-link text-start" id="v-pills-senegal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-senegal" type="button" role="tab" aria-controls="v-pills-senegal" aria-selected="false"> <img src="/assets/img/logo/senegal.png" alt="" class="img-fluid"> Sénégal  </button>
                                  </div>
                                </div>
                                <div class="col-md-9">
                                  <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="v-pills-togo" role="tabpanel" aria-labelledby="v-pills-togo-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-ci" role="tabpanel" aria-labelledby="v-pills-ci-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-mali" role="tabpanel" aria-labelledby="v-pills-mali-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-benin" role="tabpanel" aria-labelledby="v-pills-benin-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-burkina" role="tabpanel" aria-labelledby="v-pills-burkina-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-guinne" role="tabpanel" aria-labelledby="v-pills-guinne-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-niger" role="tabpanel" aria-labelledby="v-pills-niger-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-senegal" role="tabpanel" aria-labelledby="v-pills-senegal-tab" tabindex="0">
                                    <div v-if="locationCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in locationCompanies"
                                            :key="index">
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/detail/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935;font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                    
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
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
                          
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-reservation" role="tabpanel" aria-labelledby="nav-reservation-tab" tabindex="0">
                        <div class="row mt-4">
                          <div class="col-md-12">
                            <div class="d-flex align-items-start">
                              <div class="row w-100">
                                <div class="col-md-3">
                                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button @click="loadDataFrom('TG')" class="nav-link active text-start" id="v-pills-togo1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-togo1" type="button" role="tab" aria-controls="v-pills-togo1" aria-selected="true"><img src="/assets/img/logo/togo.png" alt="" class="img-fluid"> Togo</button>
                                    <button @click="loadDataFrom('CI')" class="nav-link text-start" id="v-pills-ci1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ci1" type="button" role="tab" aria-controls="v-pills-ci1" aria-selected="false"> <img src="/assets/img/logo/ci.png" alt="" class="img-fluid">  Côte d'ivoire </button>
                                    <button @click="loadDataFrom('ML')" class="nav-link text-start" id="v-pills-mali1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mali1" type="button" role="tab" aria-controls="v-pills-mali1" aria-selected="false">  <img src="/assets/img/logo/mali.png" alt="" class="img-fluid"> Mali </button>
                                    <button @click="loadDataFrom('BJ')" class="nav-link text-start" id="v-pills-benin1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-benin1" type="button" role="tab" aria-controls="v-pills-benin1" aria-selected="false">  <img src="/assets/img/logo/benin.png" alt="" class="img-fluid"> Benin </button>
                                    <button @click="loadDataFrom('BF')" class="nav-link text-start" id="v-pills-burkina1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-burkina1" type="button" role="tab" aria-controls="v-pills-burkina1" aria-selected="false">  <img src="/assets/img/logo/burkina.png" alt="" class="img-fluid">  Burkina Faso</button>
                                    <button @click="loadDataFrom('GN')" class="nav-link text-start" id="v-pills-guinne1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-guinne1" type="button" role="tab" aria-controls="v-pills-guinne1" aria-selected="false"> <img src="/assets/img/logo/guine.png" alt="" class="img-fluid">   Guinée Conakry </button>
                                    <button @click="loadDataFrom('NE')" class="nav-link text-start" id="v-pills-niger1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-niger1" type="button" role="tab" aria-controls="v-pills-niger1" aria-selected="false"> <img src="/assets/img/logo/niger.png" alt="" class="img-fluid">  Niger  </button>
                                    <button @click="loadDataFrom('SN')" class="nav-link text-start" id="v-pills-senegal1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-senegal1" type="button" role="tab" aria-controls="v-pills-senegal1" aria-selected="false"> <img src="/assets/img/logo/senegal.png" alt="" class="img-fluid"> Sénégal  </button>
                                  </div>
                                </div>
                                <div class="col-md-9">
                                  <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="v-pills-togo1" role="tabpanel" aria-labelledby="v-pills-togo1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                        <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                          <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                            <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                              <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                            </router-link>
                                            <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                              <div class="card-body">
                                                <div class="row">
                                                  <div class="col-8">
                                                    <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                  </div>
                                                  <div class="col-4">
                                                    <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                  </div>

                                                </div>

                                                <div class="row" style="margin-top: -11px;">
                                                  <div class="col-8">
                                                    <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                          {{ companie.adresse }}</p>
                                                  </div>
                                                  <div class="col-4">
                                                    <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                  </div>

                                                </div>
                                              
                                                
                                              </div>
                                            </router-link>
                                            
                                          </div>
                                        </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-ci1" role="tabpanel" aria-labelledby="v-pills-ci1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-mali1" role="tabpanel" aria-labelledby="v-pills-mali1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-benin1" role="tabpanel" aria-labelledby="v-pills-benin1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-burkina1" role="tabpanel" aria-labelledby="v-pills-burkina1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-guinne1" role="tabpanel" aria-labelledby="v-pills-guinne1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-niger1" role="tabpanel" aria-labelledby="v-pills-niger1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-senegal1" role="tabpanel" aria-labelledby="v-pills-senegal1-tab" tabindex="0">
                                    <div v-if="transportCompanies.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in transportCompanies" :key="index"> 
                                        <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                                            <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
                                          </router-link>
                                          <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                                            <div class="card-body">
                                              <div class="row">
                                                <div class="col-8">
                                                  <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                                                </div>
                                                <div class="col-4">
                                                  <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
                                                </div>

                                              </div>

                                              <div class="row" style="margin-top: -11px;">
                                                <div class="col-8">
                                                  <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                                                        {{ companie.adresse }}</p>
                                                </div>
                                                <div class="col-4">
                                                  <img :src="companie.imageLogoUrl" alt="" id="badgesLogo1">
                                                </div>

                                              </div>
                                            
                                              
                                            </div>
                                          </router-link>
                                          
                                        </div>
                                      </div>  
                                      
                                    </div>
                                    <div class="w-100" v-else>
                                      <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            
                                            <div class="text-center">
                                              <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                            </div>
                                            
                                            <div class="card-body text-center">
                                              <p class="card-text">Aucune compagnie disponible</p>
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
                          
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-local" role="tabpanel" aria-labelledby="nav-local-tab" tabindex="0">...</div>
                      <div class="tab-pane fade" id="nav-vente" role="tabpanel" aria-labelledby="nav-vente-tab" tabindex="0">
                        ...
                      </div>
                       
                    </div>
                  </div>
                  
              </div>
  
          </div>
      </section>

      
      <!-- End Portfolio Details Section -->
</template>

<style scoped>
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

#badgesLogo {
  display: inline-block;
    left: 9px;
    width: 45px;
    height: 45px;
    /* padding: 1px 14px; */
    position: absolute;
    margin-top: 150px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    object-fit: cover;
}

#badgesLogo1 {
     
     width: 45px;
     height: 45px;
     border-radius: 50%;
     border: 1px solid #ffffff;
     /* object-fit: cover; */
 }

#search {
    width: 491px !important;
    height: 54px;
    /* border-radius: 30px; */
    font-size: 14px;
    background-color: white;
    border-color: #219935;
    color: black !important;
    border-radius: 10px;
}

#icon_search {
    margin-left: -51px;
    font-size: 25px;
    margin-top: 16px;
    color: #019934;
}

#router-link{
   color: black !important;
 }
 
 #router-link:hover{
   color: black !important;
 }
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #219935;
}

.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius);
    color: black;
}
</style>