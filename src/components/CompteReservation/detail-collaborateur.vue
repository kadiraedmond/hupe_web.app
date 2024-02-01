<script setup>
import { useRoute } from "vue-router"
import { onBeforeMount, onMounted, ref } from "vue"

import { collection, doc, addDoc, getDoc, getDocs, query, where, updateDoc, Timestamp } from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

import { decryptParam } from '@/utils/hash.js'

const route = useRoute()

const scannerId = decryptParam(route.params.scannerId)

const scannerColRef = collection(firestoreDb, 'scanneur')
const reservationColRef = collection(firestoreDb, 'reservation')
const scanner = ref({})

const tickets = ref([])

const total = ref(0)

onBeforeMount(async () => {
  const docRef = doc(scannerColRef, scannerId)
  const snapshot = await getDoc(docRef)
  scanner.value = snapshot.data()

  // Recherche des tickets scannés
  const q = query(reservationColRef, where('scanner_id', '==', scanner.value.uid), where('is_scanned', '==', true))
  const snapshots = await getDocs(q)
  snapshots.docs.forEach(doc => tickets.value.push(doc.data()))

  // calcul du montant total de tickets scannés
  tickets.value.forEach(ticket => total.value += Number(ticket.montant))
})

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
                    :src="scanner.image_url !== '' ? scanner.image_url : '/assets/img/avatars/1.png'"
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
                        <strong>  {{ scanner.lastName }} {{ scanner.firstName }} </strong>
                    </p>
                    
                    <p class="card-text" style="margin-top: -11px !important;">
                        {{ scanner.telephone }}
                    </p>                  
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn btn-primary" style="background-color: #219935; border-color: #219935;"> Total : {{ total }}</button>
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
                      <tr v-for="(ticket, i) in tickets" :key="i">
                         
                        <td>{{ i + 1 }}</td>
                        <td>{{ ticket.number }}</td>
                        <td>{{ new Intl.DateTimeFormat('fr-FR').format(ticket.scan_date.toDate()) }}</td>
                        <td>{{ ticket.nom_client }}</td>
                        <td>{{ ticket.telephone_client }}</td>
                         
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
