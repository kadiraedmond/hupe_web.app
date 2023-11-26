<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'

import { collection, query, doc, getDoc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js"
 
import { useReservationStore } from '@/store/reservation.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const reservationStore = useReservationStore()

const reservationId = route.params.id

const reservation = ref({})
const companie = ref({})

onBeforeMount(async () => {
    await reservationStore.setReservationById(reservationId)
    reservation.value = reservationStore.reservation 

    const docRef = doc(firestoreDb, 'compagnies', `${reservationStore.reservation.compagnie_uid}`)
    const snapshot = await getDoc(docRef)

    if(snapshot.exists()) companie.value = snapshot.data()
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const telecharger = () => {
    const element = document.getElementById('element-to-print')
    const op = {
        margin: 0.2,
        filename: 'ticket_reservation.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    }

    html2pdf().set(op).from(element).save()
}
</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
   

    <section id="features" class="features" style="margin-top: 70px;">
      <div id="element-to-print" class="container">
        <div class="row">
           <div class="col-md-2"></div>
           <div class="col-md-8">
            <div class="card border-0" style="background: #F4F4F4; border-radius: 15px 15px 15px 15px;">
            <div class="card-body">
               <div class="row" style="margin-top: -16px; margin-bottom: -16px;  margin-right: -16px;">
                <div class="col-md-7">
                    <div class="row mt-2">
                        <div class="col-md-12 d-flex">
                            <img :src="companie.imageLogoUrl" alt="logo" class="img-fluid" style="height: 35px;"> 
                            <div style="margin-top: 11px; margin-left: 9px;">
                                <h6>  | {{ companie.raison_social }}</h6>
                            </div>
                           
                        </div>
                         
                    </div>
                    <hr style="border: 1px solid; border-color: #219935;">
                    <div class="row">
                        <div class="col-md-6">
                            <P style="font-size: 8px; font-weight: 700;">NOM DU PASSAGER</P>
                        </div>
                        <div class="col-md-6 text-end">
                            <P style="font-size: 8px; font-weight: 700;"><Strong>N° de ticket  | {{ reservation.number }}</Strong> </P>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-7">
                            <P style="font-size: 19px;">{{ reservation.nom_client }}</P>
                        </div>
                        <div class="col-md-5 text-end">
                            <button class="btn btn-primary" style="background: #219935; border-color: #219935; color: white ; font-size: 14px;">{{ reservation.montant }} FCFA </button>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col-md-8">
                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">TRAJET |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.lieu_depart }} - {{ reservation.destination }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">ESCALE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.escale }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">CONVOCATION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.date_depart }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">HEURE DE DEPART |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.heure_depart }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">JOURS DE VOYAGE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.jours_voyage }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">NBRS DE PLACE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.nb_place }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">NBRS DE PERSONNES |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">{{ reservation.nombre_personne }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-bottom">
                           <img src="/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 100%; margin-top: 27px;">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 text-white" style="background: #219935; border-radius: 0px 15px 15px 0px;">
                    <div class="row mt-2">
                        <div class="col-md-12 d-flex">
                            <img src="/assets/img/logo2.png" alt="logo" class="img-fluid" style="height: 35px;"> 
                            <div style="margin-top: 11px; margin-left: 9px;">
                                <h6> | Hupe africa</h6>
                            </div>
                           
                        </div>
                         
                    </div>
                    <hr style="border: 1px solid; border-color: white;">
                    <div class="row">
                        <div class="col-md-7">
                            <P>{{ reservation.nom_client }}</P>
                        </div>
                        <div class="col-md-5 text-end">
                            <button class="btn btn-primary" style="background: white; border-color: white; color:#219935 ; font-size: 9px;">{{ reservation.montant }} FCFA </button>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">TRAJET |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.lieu_depart }} - {{ reservation.destination }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">ESCALE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.escale }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">CONVOCATION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.date_depart }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">HEURE DE DEPART |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.heure_depart }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">JOURS DE VOYAGE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.jours_voyage }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">NBRS DE PLACE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.nb_place }}</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">NBRS DE PERSONNES |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">{{ reservation.nombre_personne }}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row mt-2 mb-2">
                        <div class="col-md-8">
                            
                        </div>
                        <div class="col-md-4 text-end">
                           <img src="/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 75%; margin-top: 7px;">
                        </div>
                        
                    </div>
                </div>
               </div>
            </div>
            </div>
           </div>
           <div class="col-md-2"></div>
        </div>
      </div>
    <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-end">
            <button @click="telecharger" class="btn btn-primary" style="background: #219935; border-color: #219935;">Télécharger le ticket</button>
        </div>
    </div>
    </section>

  </main>
    <!-- End #main -->
    
</template>
<style scoped>
 
</style>