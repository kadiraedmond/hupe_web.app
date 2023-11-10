<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue";

import { useCompanieStore } from "@/store/companie.js";

import {
  collection,
  query,
  doc,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const companieStore = useCompanieStore();

onBeforeMount(() => {
  companieStore.getAllCompanies;

  companieStore.getLocationCompanies;
});
</script>
<template>
  <div
    class="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand"
  >
    <ul class="slider-container py-4" id="slider2">
      <li
        style="margin-left: 14px; white-space: nowrap"
        v-for="(companie, index) in companieStore.vipLocationCompanies"
        :key="index"
      >
      <div
        class="card h-100"
        id="compagnie_card"
        style="background: #f9f9f9; box-shadow: none"
        v-if="companie.offre == 'vip' && index < 4"
      >
        <router-link :to="`/detail/${companie.uid}`">
          <img
            :src="companie.imageCouvertureUrl"
            class="card-img-top"
            alt="..."
            style="
              border-radius: 10px 10px 0px 0px;
              max-height: 174px;
              min-height: 174px;
              object-fit: cover;
            "
          />
        </router-link>

        <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

        <div class="card-body">
          <router-link :to="`/detail/${companie.uid}`">
            <div class="row mt-2">
              <div class="col-7">
                <h5
                  class="card-title"
                  style="font-size: 15px; color: black"
                >
                  {{ companie.raison_social }}
                </h5>
              </div>
              <div class="col-5 text-end">
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
            <div class="col-8">
              <p class="card-text mt-2" style="font-size: 14px">
                <i class="bx bx-map" style="color: #8b8b8b"></i>
                {{ companie.adresse }}
              </p>
            </div>
            <div class="col-4 text-center mt-2">
              <i
                class="bx bx-car"
                style="color: #8b8b8b; font-size: 21px"
              ></i>
            </div>
          </div>
        </div>
      </div>
      </li>
    </ul>

    <button
      type="button"
      class="slider-nav"
      aria-label="Aller à la page précédente"
      _mstaria-label="214682"
      _msthash="250"
    ></button>
    <button
      type="button"
      class="slider-nav slider-nav-next"
      aria-label="Aller à la suivante"
      _mstaria-label="118885"
      _msthash="251"
    ></button>
  </div>
</template>

<style scoped>
.slider-item-show3 {
    --swiffy-slider-item-count: 3.7 !important;
}

@media (max-width: 768px) {
  .slider-item-show3 {
    --swiffy-slider-item-count: 0.9 !important;
  }
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
</style>
