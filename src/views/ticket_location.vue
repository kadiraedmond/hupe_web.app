<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'

import { collection, query, doc, getDoc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js"
 
import { useLocationStore } from '@/store/location.js'
import { useRoute } from 'vue-router' 

import { decryptParam } from '@/utils/hash.js'

import QrcodeVue from 'qrcode.vue' 

const route = useRoute()
const locationStore = useLocationStore()

const locationId = decryptParam(route.params.id)

const location = ref({})
const companie = ref({})

onBeforeMount(async () => {
    await locationStore.setLocationById(locationId)
    location.value = locationStore.location 

    const docRef = doc(firestoreDb, 'compagnies', `${locationStore.location.compagnie_uid}`)
    const snapshot = await getDoc(docRef)

    if(snapshot.exists()) companie.value = snapshot.data()
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
//   hour: '2-digit', 
//   minute: '2-digit', 
//   second: '2-digit', 
}

const telecharger = () => {
    const element = document.getElementById('element-to-print')
    const op = {
        margin: 0.2,
        filename: 'ticket_location.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    }

    html2pdf().set(op).from(element).save()
}

onMounted(() => {
  window.scrollTo(0, 0)
//   this.refresh()
})
</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section class="features" style="margin-top: 70px;">
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
                                <P style="font-size: 8px; font-weight: 700;">NOM DU LOCATAIRE</P>
                            </div>
                            <div class="col-md-6 text-end">
                                <P style="font-size: 8px; font-weight: 700;"><Strong>N° de ticket  |</Strong> {{ location.number }} </P>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-7">
                                <P style="font-size: 19px;">{{ location.nom_client }}</P>
                            </div>
                            <div class="col-md-5 text-end">
                                <button class="btn btn-primary" style="background: #219935; border-color: #219935; color: white ; font-size: 14px;">{{ location.montant }} FCFA </button>
                            </div>
                        </div>

                        <div class="row mt-2">
                            
                            <div class="col-md-8">
                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">MARQUE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">MODELE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.modele }} </p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">ANNEE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.annee_vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">MOTEUR |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.moteur }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">IMMATRICULATION |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.plaque_vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">TRANSMISSION |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.boite }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">OPTION CHAUFFEUR|</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.chauffeur }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">INTERIEUR DU PAYS |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;">{{ location.interieurPays }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">CAUTION PAYER |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px; color:#219935">{{ location.montant }} FCFA</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">DATE DE RETRAIT |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;"> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retrait.toDate()) }} </p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">LIEU DE RETRAIT |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;"> {{ location.lieu_retrait }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 9px; font-weight: 700;">DATE DE RETOUR |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 9px;"> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retour.toDate()) }} </p>
                                    </div>
                                </div>
                            </div>
                            
                    
                            <div class="col-md-4 text-bottom">
                                <!-- <img src="/public/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 100%; margin-top: 104px;">  -->
                                <qrcode-vue :value="location.ticket_id" :size="100" level="H" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 text-white" style="background: #219935; border-radius: 0px 15px 15px 0px;">
                        <div class="row mt-2">
                            <div class="col-md-12 d-flex">
                                <img src="/public/assets/img/logo2.png" alt="logo" class="img-fluid" style="height: 35px;"> 
                                <div style="margin-top: 11px; margin-left: 9px;">
                                    <h6> | Hupe africa</h6>
                                </div>
                            
                            </div>
                            
                        </div>
                        <hr style="border: 1px solid; border-color: white;">
                        <div class="row">
                            <div class="col-md-7">
                                <P>{{ location.nom_client }}</P>
                            </div>
                            <div class="col-md-5 text-end">
                                <button class="btn btn-primary" style="background: white; border-color: white; color:#219935 ; font-size: 9px;">{{ location.montant }} FCFA </button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">MARQUE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">MODELE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.modele }} </p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">ANNEE |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.annee_vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">MOTEUR |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.moteur }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">IMMATRICULATION |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.plaque_vehicule }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">TRANSMISSION |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.boite }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">OPTION CHAUFFEUR|</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.chauffeur }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">INTERIEUR DU PAYS |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;">{{ location.interieurPays }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">CAUTION PAYER |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px; color:#219935">{{ location.montant }} FCFA</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">DATE DE RETRAIT |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;"> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retrait.toDate()) }} </p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">LIEU DE RETRAIT |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;"> {{ location.lieu_retrait }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-top: -10px;">
                                    <div class="col-md-6">
                                        <p style=" font-size: 7px; font-weight: 700;">DATE DE RETOUR |</p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <p style=" font-size: 7px;"> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retour.toDate()) }} </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="row mt-2 mb-2">
                            <div class="col-md-8">
                                
                            </div>
                            <div class="col-md-4 text-end">
                            <!-- <img src="/public/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 75%; margin-top: 7px;">  -->
                                <qrcode-vue :value="location.ticket_id" :size="68" level="H" />
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