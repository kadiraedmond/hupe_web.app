<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import { useCompanieStore } from "@/store/companie.js"

import {
  collection,
  query,
  doc,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const companieStore = useCompanieStore() 

// const vipLocationCompanies = ref([])

onBeforeMount(() => {
  companieStore.getAllCompanies

  companieStore.getLocationCompanies

  // getNotation()
}) 

// const getNotation = async () => {
//   companieStore.vipLocationCompanies.forEach(async location_comp => {

//     const docRef = doc(firestoreDb, 'compagnies', `${location_comp.uid}`)

//     const notationColRef = collection(docRef, 'client_avis') 
    
//     const snapshots = await getDocs(notationColRef) 

//     let totalEtoiles = 0 
//     let notation = 0
//     if(snapshots.docs.length > 0) {
//       snapshots.docs.forEach(not_doc => { 
//           const notationData = not_doc.data() 
//           totalEtoiles += Number(notationData.nombre_etoile)
//       }) 

//       notation = Math.round((totalEtoiles / snapshots.docs.length) * 20) 
//     }

//     vipLocationCompanies.value.push({ ...location_comp, notation })
//   })
// }
</script>
<template>
  <!-- <div
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
  </div> -->

  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col"   v-for="(companie, index) in companieStore.vipLocationCompanies"
          :key="index > 6">
      <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
        <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="padding: 9px;">
          <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
        </router-link>
        <router-link :to="`/detail/${companie.uid}`" id="router-link">
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

#badgesLogo1 {
     
     width: 45px;
     height: 45px;
     border-radius: 50%;
     border: 1px solid #ffffff;
     /* object-fit: cover; */
 }
 
 #router-link{
   color: black !important;
 }
 
 #router-link:hover{
   color: black !important;
 }

 

</style>
