<script setup>
import { useRoute } from "vue-router"
import { onBeforeMount, onMounted, ref } from "vue"

import { collection, doc, addDoc, getDoc, getDocs, query, where, updateDoc, Timestamp } from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

import { decryptParam } from '@/utils/hash.js'

const route = useRoute()

 
onMounted(() => {
  window.scrollTo(0, 0)
})


</script>

<template>
  <main id="main">
    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: 70px"
    >
      <div class="container">
        <div class="row g-4">
          <div class="col-12">
            <img
            src="/assets/img/col.jpg"
              alt=""
              class="img-fluid w-100"
              id="img_couv"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
 

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="/assets/img/avatars/1.png"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="
                      width: 150px;
                      height: 150px !important;
                      object-fit: cover;
                      border: 2.8px solid #e8e8e8;
                    "
                  />
                </div>
                <div class="col-8">
                  <div class="card-body" id="card_espace">
                    <p class="card-text">
                        <strong>  JHON DOE </strong>
                    </p>
                    
                    <p class="card-text" style="margin-top: -11px !important;">
                        +000 00 00 00 00
                    </p>                  
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn btn-primary" style="background-color: #219935; border-color: #219935;"> Total : 5000</button>
          </div>
        </div>
      </div>
    </section>
     
    <!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: -70px"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <h5>Scanneur de tickets</h5>
          </div>
          <div class="col-lg-12">
            <div class="table-responsive">
                  <table class="table table-striped" ref="exportable_table">
                    <thead>
                      <tr>
                         
                        <th scope="col">N°</th>
                        <th scope="col">N° ticket</th>
                        <th scope="col">Date</th>
                        <th scope="col">Nom & Prénoms</th>
                        <th scope="col">Télephone</th>
                         
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                         
                        <td>loren</td>
                        <td>loren</td>
                        <td>loren</td>
                        <td>loren</td>
                        <td>loren</td>
                         
                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>     
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
  </main>
  <!-- End #main -->
</template>
<style scoped>
 

#img_couv {
  height: 250px;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  border-radius: 10px;
  border: 1px solid #219935;
  object-position: 50% 75% !important;
}

#card_espace{
    margin-left: -38px;
  }

@media (max-width: 984px) {
  #card_espace{
    margin-left: 50px;
    /* width: 260px; */
  }
  
}
</style>
