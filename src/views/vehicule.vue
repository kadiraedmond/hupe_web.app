<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue";

import { useCompanieStore } from "@/store/companie.js";
import { usePromotionStore } from "@/store/promotion.js"


import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const companieStore = useCompanieStore();
const promotionStore = usePromotionStore()

const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')

onBeforeMount(() => {
  

  companieStore.getAllCompanies

  promotionStore.getPopularCars;

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const results = ref([])
const searchTerm = ref('')

const handleSearch = async () => {
  results.value = []
  
  let popularCars = []

  const miseEnAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
  const vehiculesEnAvantColRef = collection(miseEnAvantDocRef, 'vehicule_en_avant') 

  const q = query(vehiculesEnAvantColRef, where('country', '==', `${companieStore.country}`)) 
                
  const snapshots = await getDocs(q)
  for(let i = 0; i < snapshots.docs.length; i++) {
      const programData = snapshots.docs[i].data()
      const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
      const snapshot = await getDoc(companieDocRef)

      let company = {}
      if(snapshot.exists()) company = snapshot.data()
      popularCars.push({ ...programData, companieInfos: company })

  }
  
  popularCars.forEach(car => {
    if(car.vehicule.toLowerCase().includes(searchTerm.value.toLowerCase()) || car.modele.toLowerCase().includes(searchTerm.value.toLowerCase())) {
        results.value.push(car) 
    }
  })

  promotionStore.popularCars = results.value
}

</script>

<template>
  <main id="main">

     <!-- ======= Breadcrumbs ======= -->
     <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Véhicules populaires</li>
          </ol>
  
        </div>
      </section>

    <section id="features" class="features mt-4">
      <div class="container">
        <div class="row mb-4" style="margin-top: -51px; margin-bottom: 33px !important;">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="row" style="padding: 10px; border-radius: 5px;">
                <div class="col-md-12">
                  <form @submit.prevent="handleSearch" class="d-flex" role="search">
                    <input
                      class="form-control me-2 text-white"
                      type="search"
                      placeholder="Rechercher"
                      v-model="searchTerm"
                      aria-label="Search"
                      id="search"
                    />
                    <i class="bx bx-search" type="submit" id="icon_search"></i>
                    <!-- <button class="btn btn-outline-success" type="submit" style="margin-left: -90px;">Search</button> -->
                  </form>

                 
                </div>
              </div>
          </div>
        </div>
        

        <div v-if="promotionStore.popularCars.length > 0" class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for="(vehicule, index) in promotionStore.popularCars"
            :key="index"
          >
            <router-link
              :to="`/detail_vehicule_location/${vehicule.companieInfos.uid}/${vehicule.uid}`"
              style="color: #000"
            >
              <div class="card h-100 border-0" id="card_compagnie" style="box-shadow: none;">
                <div class="row" style="margin: 0px">
                  <div class="col-md-12">
                    <div
                      class="card h-100 mb-3 border-0"
                      style="background: #f9f9f9;"
                    >
                      <div class="row g-1 d-flex mt-2">
                        
                        <div class="col-7 d-flex">
                          <img
                            :src="vehicule.companieInfos.imageLogoUrl"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="width: 40px; height: 40px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 10px">
                                {{ vehicule.companieInfos.raison_social }}
                              </h5>
                               
                            </div>
                          </div>
                        </div>

                        <div class="col-5 text-end">
                          <button
                            class="btn btn-primary"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 5px;
                              font-size: 12px;
                            "
                          >
                            {{ vehicule.montant }} FCFA
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                  <div :id="'carouselExampleControls' + index" class="carousel slide"  data-ride="false"  data-interval="false">
                    <div class="carousel-inner">
                      <div class="carousel-item active ">
                        <img :src="vehicule.vehicule_image_url" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url2" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url3" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url4" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url5" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="prev" id="btn1">
                      <i class='bx bx-chevron-left' style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                    </button>
                    <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="next" id="btn1">
                      <i class='bx bx-chevron-right' style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                    </button>
                  </div>

                  <div class="row" style=" background: white; border-radius: 5px; position: absolute; margin-top: 182px; width: 97%; margin-left: 5px;">
                      <div class="col-md-12 mt-2">
                        <h5 class="card-title " style=" font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                /> {{ vehicule.vehicule }} {{ vehicule.modele }} {{  vehicule.annee }}  </h5>
                      </div>
                    </div>
                   
                
                  
                </div>
                 
              </div>
            </router-link>
          </div>
        </div>

        <div class="w-100" v-else>
          <div class="row mt-4">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="card text-center border-0">
                <div class="text-center">
                  <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                </div>
                
                <div class="card-body">
                  <p class="card-text">Aucun résultat</p>
                </div>
              </div>
            
              
            </div>
            <div class="col-md-3"></div>
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

#search {
  width: 491px !important;
  height: 54px;
  /* border-radius: 30px; */
  font-size: 14px;
  background-color: white;
  border-color: #219935;
  color: black !important;
  border-radius: 10px;
}

#icon_search {
  margin-left: -51px;
  font-size: 25px;
  margin-top: 16px;
  color: #019934;
}
</style>