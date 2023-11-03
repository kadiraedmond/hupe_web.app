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
          <div class="col-12">
            <div class="section-title text-center">
              <h2>En promotions</h2>
              <p>
                Ne manquez pas nos offres spéciales du moment ! Découvrez des
                promotions exclusives pour rendre votre voyage encore plus
                mémorable.
              </p>
            </div>
          </div>
        </div>
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
    </section>
  
      

     



</template>

<style>
</style>