<script setup>
import { useCompanieStore } from "@/store/companie.js"
import { useAuthStore } from "@/store/auth.js"
import { reactive, ref, onBeforeMount, onMounted } from "vue"
import Swal from 'sweetalert2'
import { collection, query, doc, where, Timestamp, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

import ExcelJS from 'exceljs';

const companieStore = useCompanieStore()
const authStore = useAuthStore()

let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});

const updateReservationsDashboard = () => {
  companieStore.companieLocations.forEach((location) => {
    if(location.status == "En attente") {
      enAttente.totalNumber++;
      enAttente.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Validé") { 
      valides.totalNumber++;
      valides.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Confirmé") { 
      confirmees.totalNumber++;
      confirmees.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Annuler") { 
      annulees.totalNumber++;
      annulees.totalPrice += Number(location.montant) 
    } 
    
    else if(location.status == "Reporté") { 
      reportees.totalNumber++;
      reportees.totalPrice += Number(location.montant) 

    } 
    
    else if(location.status == "Utilisé") { 
      utilisees.totalNumber++;
      utilisees.totalPrice += Number(location.montant) 

    }
  });
};
const savedUser = JSON.parse(localStorage.getItem("user"))

const userId = savedUser.uid || authStore.user.uid
// const userId = "YYiQmKBenyUzKzyxIEO1vHxfEPb2" || savedUser.uid || authStore.user.uid

const elements_en_attente = ref([])
const elements_valide = ref([])
const elements_reporte = ref([])
const elements_confirme = ref([])
const elements_utilise = ref([])
const elements_annule = ref([])

onBeforeMount(async () => {
  await companieStore.setCompanieLocations(userId) 

  enAttente.totalNumber = 0
  enAttente.totalPrice = 0

  valides.totalNumber = 0 
  valides.totalPrice = 0 

  confirmees.totalNumber = 0 
  confirmees.totalPrice = 0 

  annulees.totalNumber = 0 
  annulees.totalPrice = 0 

  reportees.totalNumber = 0 
  reportees.totalPrice = 0 
  
  utilisees.totalNumber = 0
  utilisees.totalPrice = 0 
  
  updateReservationsDashboard() 
  
  companieStore.companieLocations.forEach(comp => {
    if(comp.status == 'En attente') {
      elements_en_attente.value.push(comp)
    } else if(comp.status == 'Validé') {
      elements_valide.value.push(comp)
    } else if(comp.status == 'Reporté') {
      elements_reporte.value.push(comp)
    } else if(comp.status == 'Confirmé') {
      elements_confirme.value.push(comp)
    } else if(comp.status == 'Annuler') {
      elements_annule.value.push(comp)
    } else if(comp.status == 'Utilisé') {
      elements_utilise.value.push(comp)
    }
    
  })
});

onMounted(() => {
  window.scrollTo(0, 0);
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  // hour: '2-digit', 
  // minute: '2-digit', 
  // second: '2-digit', 
}

const valider = async (location) => {
  const docRef = doc(firestoreDb, 'location_vehicules', `${location.uid}`)

  try {
    await updateDoc(docRef, { status: 'Validé' })
    Swal.fire({
      title: "Succès",
      text: "Validation effectuée",
      icon: "success"
    })

    const userDocRef = doc(firestoreDb, 'users', `${location.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const notificationColRef = collection(firestoreDb, 'notifications')

    const uneJournee = 24 * 60 * 60 * 1000

    const dateRetrait = new Date(location.date_retrait)
    const dateRetour = new Date(location.date_retour)

    const differenceEnMs = Math.abs(dateRetour - dateRetrait) 

    const differenceEnJours = Math.round(differenceEnMs / uneJournee)

    const formatedDateRetrait = new Intl.DateTimeFormat(undefined, options).format(location.date_retrait)
    const formatedDateRetour = new Intl.DateTimeFormat(undefined, options).format(location.date_retour)
    
    const data = {
      title: 'Validation de réservation', 
      message: `Votre demande de réservation du véhicule « ${location.vehicule} ${location.modele} » pour une durée de « ${differenceEnJours} jours » du « ${formatedDateRetrait} » au « ${formatedDateRetour} » a été validée, vous pouvez procéder au paiement dès maintenant.`, 
      destinataire: location.client_id, 
      lu: false, 
      createdAt: Timestamp.now()
    }

    await addDoc(notificationColRef, data)
  } catch (error) {
    Swal.fire({
      title: "Erreur",
      text: "Erreur lors de la validation",
      icon: "error"
    })
    console.log(error)
  }
} 

// Exportation en excel

const exportToExcel = () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  // Accédez à votre tableau HTML (assurez-vous qu'il a une structure appropriée)
  const table = document.querySelector('table');

  // Parcourez les lignes et colonnes du tableau et ajoutez-les à la feuille Excel
  table.querySelectorAll('tr').forEach((row, rowIndex) => {
    const excelRow = worksheet.addRow();

    row.querySelectorAll('th, td').forEach((cell, cellIndex) => {
      excelRow.getCell(cellIndex + 1).value = cell.textContent;
    });
  });

  // Téléchargez le fichier Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'exported_data.xlsx';
    link.click();
  });
};

 
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Activité</router-link></li>
            <li>annulée</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">
  
            <div class="row mb-4" >
                <div class="col-md-1"></div>
                <div class="col-md-10" style=" padding: 13px; border-radius: 5px; border: 1px solid #f2f2f2; background-color: #f7f7f7;">
                  <form class="row g-3 needs-validation" method="post" action="">
                   
                    <div class="col-md-2">
                       
                       
                     
                    </div>
                     
                    <div class="col-md-6">
                      
                        <div class="row">
                          <div class="col-6">
                            <input type="date" name="" class="form-control" id="validationCustomUsername" placeholder="date début" aria-describedby="inputGroupPrepend">
                          </div>
                          <div class="col-6">
                            <input type="date" name="" class="form-control" id="validationCustomUsername" placeholder="Prix" aria-describedby="inputGroupPrepend">
                          </div>
                        </div>
                         
                    </div>
                   
                    <div class="col-2">
                      <div class="row g-1">
                        <div class="col-md-12">
                          <button class="btn btn-primary" type="submit" style="background: #219935; border-color: #219935;">Consulter</button>
                        </div>
                         
                      </div>
                      
                    </div>
                  </form>
                 
                </div>
                <div class="col-md-1"></div>
              </div>

              <div class="row mt-4">
                <div class="col-md-12">
                  <div class="row">
                  
                    <div class="col-6 text-start">
                      <button @click="exportToExcel" class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
                <div class="col-md-12 mt-2">
                  <div class="table-responsive">
                    <table class="table table-striped" ref="exportable_table" >
                      <thead>
                        <tr>
                          <th scope="col">N°</th>
                          <th scope="col">NomClient</th>
                          <th scope="col">Marque</th>
                          <th scope="col">Modele</th>
                          <th scope="col">Année</th>
                          <th scope="col">Moteur</th>
                          <th scope="col">Transmission</th>
                          <th scope="col">Immatriculation</th>
                          <th scope="col">Chauffeur</th>
                          <th scope="col">Intérieur</th>
                          <th scope="col">D.retrait</th>
                          <th scope="col">H.retrait</th>
                          <th scope="col">D.retour</th>
                          <th scope="col">H.retour</th>
                          <th scope="col">N.jours</th>
                          
                          <th scope="col">Prix</th>
                          <th scope="col">Statut</th>
                        
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(location, index) in elements_annule" :key="index">
                           
                          <td>{{ location.uid }}</td>
                          <td>{{ location.nom_client }}</td>
                          
                          <td> {{ location.vehicule }}</td>
                          <td> {{ location.modele }}</td>
                          <td> {{ location.année }}</td>
                          <td>{{ location.moteur }}</td>
                          <td> {{ location.boite }}</td>
                          <td>{{ location.plaque_vehicule }}</td>
                          <td>{{ location.chauffeur }}</td>
                          <td>{{ location.interieurPays }}</td>
                          <td> {{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retrait.toDate()) }}</td>
                          <td>{{ location.heure_retrait }}</td>
                          <td>{{ new Intl.DateTimeFormat('fr-FR', options).format(location.date_retour.toDate()) }}</td>
                          <td> {{ location.heure_retour }}</td>
                          <td></td>
                          <td> {{ location.montant }}</td>
                         
                          <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px; background-color:#219935; border-color:#219935 ; width: 86px;">{{ location.status }}</div></td>
                          
                        </tr>
                      
                        
                        
                      </tbody>
                  </table>
                  </div>
                  
                </div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style>
</style>