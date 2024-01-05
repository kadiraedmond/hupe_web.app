<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import { useCompanieStore } from "@/store/companie.js"
 

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const companieStore = useCompanieStore()

const companiesColRef = collection(firestoreDb, "compagnies")

// onBeforeMount(() => {
//   companieStore.getAllCompanies
//   companieStore.getTransportCompanies
// })

onBeforeMount(async () => {
  
  companieStore.getAllCompanies

  await companieStore.getTransportCompanies
  items.value = companieStore.transportCompanies

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

// Pagination

const items = ref([])
const itemsPerPage = ref(1)
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
                  </form>
                 
                </div>
              </div>
          </div>
        </div>

        <div v-if="companieStore.transportCompanies.length > 0" class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col"  v-for="(companie, index) in currentItems" :key="index"> 
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