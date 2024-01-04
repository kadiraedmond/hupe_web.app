<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import { useCompanieStore } from "@/store/companie.js"
 

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const companieStore = useCompanieStore()

const companiesColRef = collection(firestoreDb, "compagnies")

onBeforeMount(() => {
  companieStore.getAllCompanies
  companieStore.getTransportCompanies
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const searchTerm = ref('')

const results = ref([])

const handleSearch = async () => {
  results.value = []
  const q = query(companiesColRef, 
              where('type_compagnie', '==', 'Transport'), 
              where('country', '==', `${companieStore.country}`),
              where('status', '==', 'active')
            )

  const snapshot = await getDocs(q)
  
  snapshot.docs.forEach(doc => {
    const companieData = doc.data() 

    if(companieData.raison_social.toLowerCase().includes(searchTerm.value.toLowerCase()) || companieData.description.toLowerCase().includes(searchTerm.value.toLowerCase())) {
        results.value.push(companieData) 
    }
  })

  companieStore.transportCompanies = results.value
}

</script>
<template>
  <main id="main">
    <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Réservations de billets de bus</li>
           

          </ol>
  
        </div>
    </section> -->
    <!-- End Breadcrumbs -->

     <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: 90px;">
      <div class="container">
        <div class="row mb-4" style="margin-top: -51px;
    margin-bottom: 33px !important;">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="row" style="padding: 10px; border-radius: 5px;">
                <div class="col-md-12">
                  <form class="d-flex" role="search" @submit.prevent="handleSearch" id="search">
                    <div class="input-group">
                      <span class="input-group-text" style="background: white; border-color: #219935; color: #219935; width: 60px;">
                        
                        <i class="bi bi-search" style="margin-left: 10px; font-size: 20px;"></i>
                      </span>
                      <input type="search" class="form-control" placeholder="Recherche..." v-model="searchTerm" aria-label="Recherche" style="border-color: #219935;">
                    </div>
                    <!-- <button class="btn btn-primary" type="submit">Rechercher</button> -->
                  </form>
                  <!-- <form class="d-flex" role="search" @submit.prevent="handleSearch">
                    <input
                      class="form-control me-2 text-white"
                      type="search"
                      placeholder="Rechercher"
                      v-model="searchTerm"
                      aria-label="Search"
                      id="search"
                    />
                    <i class="bx bx-search" type="submit" id="icon_search"></i>
                   </form> -->

                 
                </div>
              </div>
          </div>
        </div>
        
        <!-- <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(companie, index) in companieStore.transportCompanies" :key="index">
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f9f9f9; box-shadow: none"
            >
              <router-link :to="`/details/${companie.uid}`">
                <img
                  :src="companie.imageCouvertureUrl"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px ; max-height: 174px; min-height: 174px; object-fit: cover;"
                />
              </router-link>
              <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

              <div class="card-body">
                <router-link :to="`/details/${companie.uid}`">
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
        </div> -->

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col"  v-for="(companie, index) in companieStore.transportCompanies" :key="index"> 
            <div class="card h-100 border-0 " style="background-color: #f7f7f7; border-radius: 11px;">
              <router-link :to="`/details/${encryptParam(companie.uid)}`" style="padding: 9px;">
                <img :src="companie.imageCouvertureUrl" class="card-img-top" alt="..." style="border-radius: 11px; height: 225.02px;">
              </router-link>
              <router-link :to="`/details/${encryptParam(companie.uid)}`" id="router-link">
                <div class="card-body">
                  <div class="row">
                    <div class="col-8">
                      <h5 class="card-title" style="font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important; "> {{ companie.raison_social }}</h5>
                    </div>
                    <div class="col-4">
                      <p> <i class="bx bx-like" style="color: #219935; font-size: 14px;"></i> 30% </p>
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

      </div>
    </section>



 </main>
    <!-- End #main -->    
</template>
<style scoped>
 /* #badgesLogo {
  display: inline-block;
    left: 9px;
    width: 45px;
    height: 45px;
    
    position: absolute;
    margin-top: 150px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    object-fit: cover;
} */

#search {
    width: 491px !important;
    height: 54px;
    /* border-radius: 30px; */
    font-size: 14px;
    background-color: white;
    border-color: #219935;
    color: #219935 !important;
    border-radius: 10px;
}

#icon_search {
    margin-left: -51px;
    font-size: 25px;
    margin-top: 16px;
    color: #019934;
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