<script setup>
 import { onMounted, onBeforeMount } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

import { usePromotionStore } from '@/store/promotion.js'

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const promotionStore = usePromotionStore()

onBeforeMount(() => {
  promotionStore.getPromotionOffres
})

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3  g-2">
        <div class="col" v-for="(offre, index) in promotionStore.offresVehicules" :key="index">
          <div
            class="card border-0"
            style="background: #f3f4f6; padding: 6px"
          >
            <div class="row" style="padding: 6px">
              <div class="col-md-12 d-flex">
                <img
                  :src="
                    offre.companieInfos.imageLogoUrl
                    ? offre.companieInfos.imageLogoUrl
                    : '/assets/img/avatars/1.png'
                    "
                  alt="..."
                  class="img-fluid"
                  style="width: 32px; height: 32px; border-radius: 50%; margin-top: 0px; object-fit: contains; border: 1px solid #8b8b8b;"
                />
                <h6
                  style="font-size: 12px; margin-left: 5px; margin-top: 10px"
                >
                {{ offre.companieInfos.raison_social }}
                </h6>
                <p style="font-size: 12px; margin-left: 5px; margin-top: 8px">
                  <i class='bx bxs-map'></i>

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
                margin-top: -14px;
              "
            >
              <router-link
                :to="`/detail_vehicule_location/${encryptParam(offre.companieInfos.uid)}/${encryptParam(offre.uid)}`"
                style="
                  border: 1px solid;
                  border-radius: 5px;
                  border-color: #a6a6a6;
                "
              >
                <img
                  :src="offre.vehicule_image_url
                  ? offre.vehicule_image_url
                    : '/assets/img/service/car.png'"
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
   
</template>
<style scoped>
#badges012 {
    background: #219935;
    display: inline-block;
    left: 190px;
    /* width: 92px; */
    /* padding: 1px 14px; */
    font-weight: 700;
    border-radius: 0;
    text-align: center;
    position: absolute;
    text-transform: uppercase;
    border-radius: 5px;
    /* line-height: 24px; */
    border: none;
    margin-top: 177px;
    font-size: 12px;
    color: white;
}
</style>
