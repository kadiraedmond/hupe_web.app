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


</script>
<template>
   <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col"> 
          
      <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
        <router-link to="/details" style="padding: 9px;">
          <img src="/assets/img/car3.jpg" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
        </router-link>
        <router-link to="/details" id="router-link">
          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/cars.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> Raison social</h5>
              </div>
              <div class="col-4">
                <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
              </div>

            </div>

            <div class="row" style="margin-top: -11px;">
              <div class="col-8">
                <p class="card-text" style="margin-top: 10px; color: #8b8b8b; font-size: 14px;"><i class="bx bx-map" style="color: #8b8b8b"></i>
                     Lomé <Tarea></Tarea>ogo</p>
              </div>
              <div class="col-4">
                <img src="/assets/img/car3.jpg" alt="" id="badgesLogo1">
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
