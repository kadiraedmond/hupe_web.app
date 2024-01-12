<script setup>
import { useReservationStore } from '@/store/reservation.js'
import { useAuthStore } from '@/store/auth.js'
import { reactive, ref, onBeforeMount, onMounted } from "vue"
import { collection, query, doc, where, Timestamp, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

import ExcelJS from 'exceljs';

const reservationStore = useReservationStore()
const authStore = useAuthStore()

let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0
})

const updateReservationsDashboard = () => {
  reservationStore.companieReservations.forEach(reservation => {
    if(reservation.status == 'En attente') {
      enAttente.totalNumber++
      enAttente.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Validé') {
      valides.totalNumber++
      valides.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Confirmé') {
      confirmees.totalNumber++
      confirmees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Annuler') {
      annulees.totalNumber++
      annulees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Reporté') {
      reportees.totalNumber++
      reportees.totalPrice += Number(reservation.montant)
    }
    
    else if(reservation.status == 'Utilisé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(reservation.montant)
    }
  })
}

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid

const elements_en_attente = ref([])
const elements_valide = ref([])
const elements_reporte = ref([])
const elements_confirme = ref([])
const elements_utilise = ref([])
const elements_annule = ref([])

onBeforeMount(async () => {
  await reservationStore.setCompanieReservations(userId) 

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

  reservationStore.companieReservations.forEach(comp => {
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
    }
  })
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const valider = async (reservation) => {
  const docRef = doc(firestoreDb, 'reservation', `${reservation.uid}`)

  try {
    await updateDoc(docRef, { status: 'Validé' })
    Swal.fire({
      title: "Succès",
      text: "Validation effectuée",
      icon: "success"
    })

    const userDocRef = doc(firestoreDb, 'users', `${reservation.client_id}`)
    const snapshot = await getDoc(userDocRef)
    let user
    if(snapshot.exists()) user = snapshot.data()

    const notificationColRef = collection(firestoreDb, 'notifications')
    
    const data = {
      title: 'Validation de réservation', 
      message: `Votre demande de réservation de ticket pour le trajet « ${reservation.lieu_depart} - ${reservation.destination} » le « ${reservation.date_depart} » a été validée, vous pouvez procéder au paiement dès maintenant.`, 
      destinataire: reservation.client_id, 
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

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
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
            <li>Confirmée</li>
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
                  <table class="table table-striped" ref="exportable_table">
                    <thead>
                      <tr>
                         
                        <th scope="col">N°</th>
                        <th scope="col">NomClient</th>
                        <th scope="col">Lieu de départ</th>
                        <th scope="col">Heure de depart</th>
                        <th scope="col">Convocation</th>
                        <th scope="col">Escale</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Jours de voyages</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Statut</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(reservation, index) in elements_confirme" :key="index">
                         
                        <td></td>
                        <td>{{ reservation.nom_client }}</td>
                        <td> {{ reservation.lieu_depart }} </td>
                        <td> {{ reservation.heure_depart }}</td>
                        <td>{{ reservation.convocation ? reservation.convocation : 'NaN' }}</td>
                        <td> {{ reservation.escale }}</td>
                        <td> {{ reservation.destination }} </td>
                        <td> {{ reservation.jours_voyage ? reservation.jours_voyage : 'NaN' }}</td>
                        <td> {{ reservation.montant }}</td>
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px;">{{ reservation.status }}</div></td>
                         

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