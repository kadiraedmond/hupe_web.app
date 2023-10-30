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
  <main id="main">

     <!-- ======= Breadcrumbs ======= -->
     <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Location de gros engin</li>
            <!-- <li>Toyota yaris 2022</li> -->

          </ol>
  
        </div>
    </section><!-- End Breadcrumbs -->
     <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features mt-4">
      <div class="container">
        
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f3f4f6; box-shadow: none"
              v-if="companie.offre == 'vip' && index < 4"
            >
              <router-link :to="`/detail/${companie.uid}`">
                <img
                  :src="companie.imageLogoUrl"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                />
              </router-link>

              <div class="card-body">
                <router-link :to="`/detail/${companie.uid}`">
                  <div class="row">
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
    </section>



 </main>
    <!-- End #main -->    
</template>
<style>
</style>