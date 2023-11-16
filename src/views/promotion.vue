<script setup>
import { onMounted, onBeforeMount } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

import { useCompanieStore } from "@/store/companie.js";
import { useReservationStore } from "@/store/reservation.js";
import { usePromotionStore } from '@/store/promotion.js'

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const companieStore = useCompanieStore();
const reservationStore = useReservationStore();
const promotionStore = usePromotionStore()

onBeforeMount(() => {
  promotionStore.getPromotionOffres
  promotionStore.getPopularDestinations
  promotionStore.getPopularCars
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Promotions</li>
            

          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->

        <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ">
            <h4>En promotions</h4>
            <p> Ne manquez pas nos offres spéciales du moment ! Découvrez des
                promotions exclusives pour rendre votre voyage encore plus
                mémorable.</p>
          </div>
           
        </div>
        <div class="row">
          <div class="col-12">
            <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Location de véhicule</button>
              <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Reservation de ticket</button>
              <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >Locations de gros engin</button>
              <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Vente de vehicule</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                <div class="col" v-for="(offre, index) in promotionStore.offresVehicules" :key="index">
                  <div
                    class="card border-0"
                    style="background: #f3f4f6; padding: 6px"
                  >
                    <div class="row" style="padding: 6px">
                      <div class="col-md-12 d-flex">
                        <img
                          :src="offre.companieInfos.imageLogoUrl"
                          class="img-fluid"
                          alt="..."
                          style="width: 25px; height: 25px; border-radius: 50%; margin-top: 6px; object-fit: contains"
                        />
                        <h6
                          style="font-size: 12px; margin-left: 5px; margin-top: 10px"
                        >
                        {{ offre.companieInfos.raison_social }}
                        </h6>
                        <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
                          <img
                            src="/public/assets/img/icone/map.png"
                            class="img-fluid"
                            alt="..."
                          />
                          {{ offre.companieInfos.adresse }}
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
                      "
                    >
                      <router-link
                        :to="`/detail/${offre.companieInfos.uid}`"
                        style="
                          border: 1px solid;
                          border-radius: 5px;
                          border-color: #a6a6a6;
                        "
                      >
                        <img
                          :src="offre.vehicule_image_url"
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
                        <s> {{ offre.ancien_montant }} FCFA </s>
                      </button>
                      <button class="btn btn-primary" id="badges0">{{ offre.montant }} FCFA</button>
                      <button class="btn btn-primary" id="badges012">{{ offre.pourcentage }}%</button>
                      <button class="btn btn-primary" id="badges0121">
                        {{ offre.vehicule }} {{ offre.modele }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
              <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </section>
  
      

     



</template>

<style>
</style>