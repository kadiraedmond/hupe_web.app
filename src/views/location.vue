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
            <li>Location de véhicule</li>
            <!-- <li>Toyota yaris 2022</li> -->

          </ol>
  
        </div>
    </section><!-- End Breadcrumbs -->
     <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features mt-4">
      <div class="container">
        <div class="row mb-4" style="margin-top: -51px;
    margin-bottom: 33px !important;">
          <div class="col-md-3"></div>
          <div class="col-md-9">
            <div class="row" style="background: rgb(249 249 249); padding: 10px; border-radius: 5px;">
                <div class="col-md-12">
                  <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-3">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option> <b placeholder="type"></b> </option>
                        <option value=""></option>
                         
                      </select>
                      
                    </div>
                    <div class="col-md-3">
                       
                      <input type="text" name="adresse" class="form-control" id="validationCustom02" placeholder="Adresse">
                    
                    </div>
                    <div class="col-md-3">
                      
                        <input type="text" name="prix" class="form-control" id="validationCustomUsername" placeholder="Prix" aria-describedby="inputGroupPrepend">
                         
                    </div>
                   
                    <div class="col-3">
                      <div class="row g-1">
                        <div class="col-md-12">
                          <button class="btn btn-primary w-75" type="submit" style="background: #219935; border-color: #219935;">Filtrer</button>
                        </div>
                         
                      </div>
                      
                    </div>
                  </form>
                 
                </div>
              </div>
          </div>
        </div>
        
        <div class="row row-cols-1 row-cols-md-4 g-4">
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
    </section>



 </main>
    <!-- End #main -->    
</template>
<style scoped>

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