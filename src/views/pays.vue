<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue";

import { useCompanieStore } from "@/store/companie.js";

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const companieStore = useCompanieStore();
 

onBeforeMount(() => {
  

  companieStore.getAllCompanies

  companieStore.getLocationCompanies

})

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Acceuil</router-link></li>
            <li>Partenaires par pays  </li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
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
                            <button class="nav-link active" id="nav-location-tab" data-bs-toggle="tab" data-bs-target="#nav-location" type="button" role="tab" aria-controls="nav-location" aria-selected="true" style="border-radius: 5px 0px 0px 0px !important;"> Location de véhicule</button>
                            <button class="nav-link" id="nav-reservation-tab" data-bs-toggle="tab" data-bs-target="#nav-reservation" type="button" role="tab" aria-controls="nav-reservation" aria-selected="false"> Reservation de ticket</button>
                            <button class="nav-link" id="nav-local-tab" data-bs-toggle="tab" data-bs-target="#nav-local" type="button" role="tab" aria-controls="nav-local" aria-selected="false"> Location de gros engin </button>
                            <button class="nav-link " id="nav-vente-tab" data-bs-toggle="tab" data-bs-target="#nav-vente" type="button" role="tab" aria-controls="nav-vente" aria-selected="true">Vente de véhicule </button>
                            
                          </div>
                        </nav>
                      </div>
                    </div>
                    
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-location" role="tabpanel" aria-labelledby="nav-location-tab" tabindex="0">
                        <div class="row mt-4">
                          <div class="col-md-12">
                            <div class="d-flex align-items-start">
                              <div class="row">
                                <div class="col-md-3">
                                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active text-start" id="v-pills-togo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-togo" type="button" role="tab" aria-controls="v-pills-togo" aria-selected="true"><img src="/assets/img/logo/togo.png" alt="" class="img-fluid"> Togo</button>
                                    <button class="nav-link text-start" id="v-pills-ci-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ci" type="button" role="tab" aria-controls="v-pills-ci" aria-selected="false"> <img src="/assets/img/logo/ci.png" alt="" class="img-fluid">  Côte d'ivoire </button>
                                    <button class="nav-link text-start" id="v-pills-mali-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mali" type="button" role="tab" aria-controls="v-pills-mali" aria-selected="false">  <img src="/assets/img/logo/mali.png" alt="" class="img-fluid"> Mali </button>
                                    <button class="nav-link text-start" id="v-pills-benin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-benin" type="button" role="tab" aria-controls="v-pills-benin" aria-selected="false">  <img src="/assets/img/logo/benin.png" alt="" class="img-fluid"> Benin </button>
                                    <button class="nav-link text-start" id="v-pills-burkina-tab" data-bs-toggle="pill" data-bs-target="#v-pills-burkina" type="button" role="tab" aria-controls="v-pills-burkina" aria-selected="false">  <img src="/assets/img/logo/burkina.png" alt="" class="img-fluid">  Burkina Faso</button>
                                    <button class="nav-link text-start" id="v-pills-guinne-tab" data-bs-toggle="pill" data-bs-target="#v-pills-guinne" type="button" role="tab" aria-controls="v-pills-guinne" aria-selected="false"> <img src="/assets/img/logo/guine.png" alt="" class="img-fluid">   Guinée Conakry </button>
                                    <button class="nav-link text-start" id="v-pills-niger-tab" data-bs-toggle="pill" data-bs-target="#v-pills-niger" type="button" role="tab" aria-controls="v-pills-niger" aria-selected="false"> <img src="/assets/img/logo/niger.png" alt="" class="img-fluid">  Niger  </button>
                                    <button class="nav-link text-start" id="v-pills-senegal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-senegal" type="button" role="tab" aria-controls="v-pills-senegal" aria-selected="false"> <img src="/assets/img/logo/senegal.png" alt="" class="img-fluid"> Sénégal  </button>
                                  </div>
                                </div>
                                <div class="col-md-9">
                                  <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="v-pills-togo" role="tabpanel" aria-labelledby="v-pills-togo-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-ci" role="tabpanel" aria-labelledby="v-pills-ci-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-mali" role="tabpanel" aria-labelledby="v-pills-mali-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-benin" role="tabpanel" aria-labelledby="v-pills-benin-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-burkina" role="tabpanel" aria-labelledby="v-pills-burkina-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-guinne" role="tabpanel" aria-labelledby="v-pills-guinne-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-niger" role="tabpanel" aria-labelledby="v-pills-niger-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-senegal" role="tabpanel" aria-labelledby="v-pills-senegal-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
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
                      </div>
                      <div class="tab-pane fade" id="nav-reservation" role="tabpanel" aria-labelledby="nav-reservation-tab" tabindex="0">
                        <div class="row mt-4">
                          <div class="col-md-12">
                            <div class="d-flex align-items-start">
                              <div class="row">
                                <div class="col-md-3">
                                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active text-start" id="v-pills-togo1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-togo1" type="button" role="tab" aria-controls="v-pills-togo1" aria-selected="true"><img src="/assets/img/logo/togo.png" alt="" class="img-fluid"> Togo</button>
                                    <button class="nav-link text-start" id="v-pills-ci1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ci1" type="button" role="tab" aria-controls="v-pills-ci1" aria-selected="false"> <img src="/assets/img/logo/ci.png" alt="" class="img-fluid">  Côte d'ivoire </button>
                                     <button class="nav-link text-start" id="v-pills-mali1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mali1" type="button" role="tab" aria-controls="v-pills-mali1" aria-selected="false">  <img src="/assets/img/logo/mali.png" alt="" class="img-fluid"> Mali </button>
                                    <button class="nav-link text-start" id="v-pills-benin1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-benin1" type="button" role="tab" aria-controls="v-pills-benin1" aria-selected="false">  <img src="/assets/img/logo/benin.png" alt="" class="img-fluid"> Benin </button>
                                    <button class="nav-link text-start" id="v-pills-burkina1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-burkina1" type="button" role="tab" aria-controls="v-pills-burkina1" aria-selected="false">  <img src="/assets/img/logo/burkina.png" alt="" class="img-fluid">  Burkina Faso</button>
                                    <button class="nav-link text-start" id="v-pills-guinne1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-guinne1" type="button" role="tab" aria-controls="v-pills-guinne1" aria-selected="false"> <img src="/assets/img/logo/guine.png" alt="" class="img-fluid">   Guinée Conakry </button>
                                     <button class="nav-link text-start" id="v-pills-niger1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-niger1" type="button" role="tab" aria-controls="v-pills-niger1" aria-selected="false"> <img src="/assets/img/logo/niger.png" alt="" class="img-fluid">  Niger  </button>
                                    <button class="nav-link text-start" id="v-pills-senegal1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-senegal1" type="button" role="tab" aria-controls="v-pills-senegal1" aria-selected="false"> <img src="/assets/img/logo/senegal.png" alt="" class="img-fluid"> Sénégal  </button>
                                  </div>
                                </div>
                                <div class="col-md-9">
                                  <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="v-pills-togo1" role="tabpanel" aria-labelledby="v-pills-togo1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-ci1" role="tabpanel" aria-labelledby="v-pills-ci1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-mali1" role="tabpanel" aria-labelledby="v-pills-mali1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-benin1" role="tabpanel" aria-labelledby="v-pills-benin1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-burkina1" role="tabpanel" aria-labelledby="v-pills-burkina1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-guinne1" role="tabpanel" aria-labelledby="v-pills-guinne1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-niger1" role="tabpanel" aria-labelledby="v-pills-niger1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="v-pills-senegal1" role="tabpanel" aria-labelledby="v-pills-senegal1-tab" tabindex="0">
                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                      <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
                                        <div
                                          class="card h-100"
                                          id="compagnie_card"
                                          style="background: #f9f9f9; box-shadow: none"
                                        >
                                          <router-link :to="`/detail/${companie.uid}`">
                                            <img
                                              :src="companie.imageCouvertureUrl"
                                              class="card-img-top"
                                              alt="..."
                                              style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                                            />
                                          </router-link>
                                          <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                          <div class="card-body">
                                            <router-link :to="`/detail/${companie.uid}`">
                                              <div class="row mt-2">
                                                <div class="col-md-7">
                                                  <h5
                                                    class="card-title"
                                                    style="font-size: 15px; color: black"
                                                  >
                                                    {{ companie.raison_social }}
                                                  </h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                  <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                      background: white;
                                                      border-color: white;
                                                      border-radius: 30px;
                                                      color: #219935;
                                                      margin-top: -9px;
                                                    "
                                                  >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                  </boutton>
                                                </div>
                                              </div>
                                            </router-link>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <p class="card-text mt-2" style="font-size: 14px">
                                                  <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                                </p>
                                              </div>
                                              <div class="col-md-4 text-center mt-2">
                                                <i
                                                  class="bx bx-car"
                                                  style="color: #8b8b8b; font-size: 21px"
                                                ></i>
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