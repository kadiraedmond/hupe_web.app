<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { decryptParam } from '@/utils/hash.js'

import { collection, query, setDoc, doc, Timestamp, where, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

const route = useRoute()

const companieId = decryptParam(route.params.id)

const programColRef = collection(firestoreDb, 'programmes')
const horaireColRef = collection(firestoreDb, 'horaires')

const programsLundi = ref([])
const programsMardi = ref([])
const programsMercredi = ref([])
const programsJeudi = ref([])
const programsVendredi = ref([])
const programsSamedi = ref([])
const programsDimanche = ref([])

const horaire = ref([])

onBeforeMount(() => {
    getLundiPrograms()
    getMardiPrograms()
    getMercrediPrograms()
    getJeudiPrograms()
    getVendrediPrograms()
    getSamediPrograms()
    getDimanchePrograms()

    getHoraire()
})

const getHoraire = async () => {
    const q = query(horaireColRef, where('compagnie_uid', '==', companieId))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => horaire.value.push(doc.data()))
}

const getLundiPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Lundi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsLundi.value.push(doc.data()))
}
const getMardiPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Mardi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsMardi.value.push(doc.data()))
}
const getMercrediPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Mercredi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsMercredi.value.push(doc.data()))
}
const getJeudiPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Jeudi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsJeudi.value.push(doc.data()))
}
const getVendrediPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Vendredi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsVendredi.value.push(doc.data()))
}
const getSamediPrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Samedi'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsSamedi.value.push(doc.data()))
}
const getDimanchePrograms = async () => {
    const q = query(programColRef, where('compagnie_uid', '==', companieId), where('jour_voyage', '==', 'Dimanche'))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programsDimanche.value.push(doc.data()))
}

const exportToExcel = () => {}

</script>
<template>
    
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">

              <div class="row mt-4">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button @click="exportToExcel" class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-12 mt-4">
                <div class="table">
                  <table class="table table-bordered">
                    <thead>
                      <tr v-for="(item, i) in horaire" :key="i" style="background: #219935; color: white;">
                         
                        <th scope="col">Jours</th>
                        <th scope="col">{{ item.heure1 }} </th>
                        <th scope="col">{{ item.heure2 }}</th>
                        <th scope="col">{{ item.heure3 }}</th>
                        <th scope="col">{{ item.heure4 }} </th>
                        <th scope="col">{{ item.heure5 }} </th>
             
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                            <td>Lundi</td>
                            <td v-for="(program, i) in programsLundi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                         
                            <td>Mardi</td>
                            <td v-for="(program, i) in programsMardi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>                         
 
                        </tr>

                        <tr>
                            
                            <td>Mercredi</td>
                            <td v-for="(program, i) in programsMercredi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>                        
    
                        </tr>


                        <tr>
                            <td>Jeudi</td>
                            <td v-for="(program, i) in programsJeudi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>                         
    
                        </tr>


                        <tr>
                            
                            <td>Vendredi</td>
                            <td v-for="(program, i) in programsVendredi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>

                        <tr>
                            
                            <td>Samedi</td>
                            <td v-for="(program, i) in programsSamedi" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>

                        <tr>
                            
                            <td>Dimanche</td>
                            <td v-for="(program, i) in programsDimanche" :key="i">
                                <div class="row">
                                    <div class="col-12">
                                        <p> <strong>Trajet</strong> <br> {{ program.lieu_depart }} - {{ program.destination }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Escales</strong> <br> {{ program.escales }}</p>
                                    </div>
                                    <div class="col-12">
                                        <p> <strong>Prix</strong> <br> {{ program.montant }} FCFA</p>
                                    </div>
                                </div>
                            </td>                         
    
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