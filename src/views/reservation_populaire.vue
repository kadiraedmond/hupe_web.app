<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import { useCompanieStore } from "@/store/companie.js"
import { usePromotionStore } from "@/store/promotion.js"


import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()

const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
 

 

onBeforeMount(async () => {
  
  companieStore.getAllCompanies

  await promotionStore.getPopularDestinations
  items.value = promotionStore.popularDestinations

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const results = ref([])
const searchTerm = ref('')

const handleSearch = async () => {
  results.value = []
  
  let popularDestinations = []

  const miseEnAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
  const programmeEnAvantColRef = collection(miseEnAvantDocRef, 'programme_en_avant')

  const q = query(programmeEnAvantColRef, where('country', '==', `${companieStore.country}`)) 

  const snapshots = await getDocs(q)
  for(let i = 0; i < snapshots.docs.length; i++) {
      const programData = snapshots.docs[i].data()
      const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
      const snapshot = await getDoc(companieDocRef)

      let company = {}
      if(snapshot.exists()) company = snapshot.data()
      popularDestinations.push({ ...programData, companieInfos: company })

  }
  
  popularDestinations.forEach(programme => {
    if(programme.lieu_depart.toLowerCase().includes(searchTerm.value.toLowerCase()) 
      || programme.destination.toLowerCase().includes(searchTerm.value.toLowerCase()) 
      || programme.lieu_depart.toLowerCase() == searchTerm.value.toLowerCase() 
      || programme.destination.toLowerCase() == searchTerm.value.toLowerCase()
    ) {
        results.value.push(programme) 
    }
  })

  promotionStore.popularDestinations = results.value
  items.value = results.value
}

// Pagination

const items = ref([])
const itemsPerPage = ref(12)
const currentPage = ref(1)

const totalItems = computed(() => items.value.length)

const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return items.value.slice(start, end)
})

const previousPage = () => {
  currentPage.value = currentPage.value - 1
}
    
const nextPage = () => {
  currentPage.value = currentPage.value + 1
}

</script>

<template>
  <main id="main">

     <!-- ======= Breadcrumbs ======= -->
     <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Destinations populaires</li>
            

          </ol>
  
        </div>
    </section> -->
    <!-- End Breadcrumbs -->
     <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: 90px;" >
      <div class="container">
        <div class="row mb-4" style="margin-top: -51px; margin-bottom: 33px !important;">
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
                  </form>

                 
                </div>
              </div>
          </div>
        </div>

        <div v-if="promotionStore.popularDestinations.length > 0" class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for=" (popularDestination, index) in currentItems" :key="index"
          >
            <router-link
            :to="`/detail_reservation_ticket/${encryptParam(popularDestination.companieInfos.uid)}/${encryptParam(popularDestination.uid)}`"
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
                          :src="popularDestination.companieInfos.imageLogoUrl"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="width: 40px; height: 40px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 10px">
                                {{
                                    popularDestination.companieInfos
                                      .raison_social
                                  }}
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
                          {{ popularDestination.montant }}  FCFA
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                  <img
                          src="/assets/img/rb.jpg"
                          class="img-fluid h-100"
                          alt="..."
                          style="object-fit: cover ; border-radius: 11px;height: 197px !important;"
                   />

                   <div class="row" style=" background: white; border-radius: 5px; position: absolute; margin-top: 155px; width: 97%; margin-left: 4px;">
                      <div class="col-md-12 mt-2 ">
                        <h5 class="card-title " style=" font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                /> {{ popularDestination.lieu_depart }} - {{ popularDestination.destination }}  </h5>
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
        <div class="row mt-5">
          <div class="col-2"></div>
          <div class="col-8 d-flex justify-content-center">
            <div class="pagination">
              <button class="btn btn-primary" style="background-color: #219935; border-color: #219935;  width: 100px; height: 36px;" @click="previousPage" :disabled="currentPage === 1">Précédent</button>
              <span class="m-3" style="margin-top: 7px !important;">{{ currentPage }} / {{ totalPages }}</span>
              <button class="btn btn-primary" style="background-color: #219935; border-color: #219935; width: 100px; height: 36px;"  @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
            </div>
          </div>
          <div class="col-2"></div>
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
    color: #219935 !important;
    border-radius: 10px;
}

#icon_search {
    margin-left: -51px;
    font-size: 25px;
    margin-top: 16px;
    color: #019934;
}
</style>