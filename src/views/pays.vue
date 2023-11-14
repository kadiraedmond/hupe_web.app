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
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-Togo-tab" data-bs-toggle="tab" data-bs-target="#nav-Togo" type="button" role="tab" aria-controls="nav-Togo" aria-selected="true" style="border-radius: 5px 0px 0px 0px !important;">  Togo  <img src="/public/assets/img/logo/togo.png" alt="" class="img-fluid"></button>
                        <button class="nav-link" id="nav-Côte-tab" data-bs-toggle="tab" data-bs-target="#nav-Côte" type="button" role="tab" aria-controls="nav-Côte" aria-selected="false">  Côte d'ivoire  <img src="/public/assets/img/logo/ci.png" alt="" class="img-fluid"></button>
                        <button class="nav-link" id="nav-Mali-tab" data-bs-toggle="tab" data-bs-target="#nav-Mali" type="button" role="tab" aria-controls="nav-Mali" aria-selected="false"> Mali <img src="/public/assets/img/logo/mali.png" alt="" class="img-fluid"> </button>
                        <button class="nav-link " id="nav-Benin-tab" data-bs-toggle="tab" data-bs-target="#nav-Benin" type="button" role="tab" aria-controls="nav-Benin" aria-selected="true">Benin  <img src="/public/assets/img/logo/benin.png" alt="" class="img-fluid"> </button>
                        <button class="nav-link " id="nav-Burkina-tab" data-bs-toggle="tab" data-bs-target="#nav-Burkina" type="button" role="tab" aria-controls="nav-Burkina" aria-selected="true">  Burkina Faso <img src="/public/assets/img/logo/burkina.png" alt="" class="img-fluid">  </button>
                        <button class="nav-link" id="nav-Guinée-tab" data-bs-toggle="tab" data-bs-target="#nav-Guinée" type="button" role="tab" aria-controls="nav-Guinée" aria-selected="false">  Guinée Conakry <img src="/public/assets/img/logo/guine.png" alt="" class="img-fluid">  </button>
                        <button class="nav-link" id="nav-Niger-tab" data-bs-toggle="tab" data-bs-target="#nav-Niger" type="button" role="tab" aria-controls="nav-Niger" aria-selected="false">  Niger <img src="/public/assets/img/logo/niger.png" alt="" class="img-fluid">  </button>
                        <button class="nav-link" id="nav-Sénégal-tab" data-bs-toggle="tab" data-bs-target="#nav-Sénégal" type="button" role="tab" aria-controls="nav-Sénégal" aria-selected="false" style="border-radius: 0px 5px 0px 0px!important;"> Sénégal <img src="/public/assets/img/logo/senegal.png" alt="" class="img-fluid">  </button>
                         
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-Togo" role="tabpanel" aria-labelledby="nav-Togo-tab" tabindex="0">
                        <div class="row mt-4">
                          <div class="col-md-12">
                            <div class="d-flex align-items-start">
                              <div class="row">
                                <div class="col-md-3">
                                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Location de véhicule</button>
                                    <button class="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Reservation de ticket</button>
                                     <button class="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Location de gros engin</button>
                                    <button class="nav-link text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Vente de véhicule</button>
                                  </div>
                                </div>
                                <div class="col-md-9">
                                  <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
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
                                  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
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
                                  <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
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
                                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
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
                                  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
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
                      <div class="tab-pane fade" id="nav-Côte" role="tabpanel" aria-labelledby="nav-Côte-tab" tabindex="0">
                        ....
                      </div>
                      <div class="tab-pane fade" id="nav-Mali" role="tabpanel" aria-labelledby="nav-Mali-tab" tabindex="0">...</div>
                      <div class="tab-pane fade" id="nav-Benin" role="tabpanel" aria-labelledby="nav-Benin-tab" tabindex="0">
                        ...
                      </div>
                      <div class="tab-pane fade" id="nav-Burkina" role="tabpanel" aria-labelledby="nav-Burkina-tab" tabindex="0">
                        ...
                      </div>
                      <div class="tab-pane fade" id="nav-Guinée" role="tabpanel" aria-labelledby="nav-Guinée-tab" tabindex="0">
                        ....
                      </div>
                      <div class="tab-pane fade" id="nav-Niger" role="tabpanel" aria-labelledby="nav-Niger-tab" tabindex="0">
                        .....
                      </div>

                      <div class="tab-pane fade" id="nav-Sénégal" role="tabpanel" aria-labelledby="nav-Sénégal-tab" tabindex="0">
                        ....
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
    border-color: #219935;
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