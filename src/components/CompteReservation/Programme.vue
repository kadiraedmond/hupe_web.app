<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { collection, query, setDoc, doc, Timestamp, where, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

import Swal from 'sweetalert2'

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'eZSPjwcD94CINnFyEJNp' || savedUser.uid || authStore.user.uid

const programColRef = collection(firestoreDb, 'programmes')

const programs = ref([])

onBeforeMount(async () => {
    const q = query(programColRef, where('compagnie_uid', '==', userId))
    const snapshot = await getDocs(q)
    snapshot.docs.forEach(doc => programs.value.push(doc.data()))
})


const lieu_depart = ref('')
const destination = ref('')
const montant = ref()
const heure_depart = ref()
const heure_convocation = ref()
const escales_a_faire = ref('')
const jour_du_voyage = ref('')

const addNewProgram = async () => {

  const data = {
    uid: '', 
    compagnie_uid: userId, 
    destination: destination.value,
    country: savedUser.country,
    escales: escales_a_faire.value, 
    heure_convocation: heure_convocation.value,
    heure_depart: heure_depart.value, 
    jour_voyage: jour_du_voyage.value, 
    lieu_depart: lieu_depart.value, 
    montant: montant.value, 
    createdAt: Timestamp.now()
  }

  const addedDoc = await addDoc(programColRef, data)

  if(addedDoc) {
    console.log('Document ajouté')
    try {
      await updateDoc(addedDoc, { uid: `${addedDoc.id}` })
      console.log('ID ajouté')

      const newData = { ...data, uid: `${addedDoc.id}` }
      programs.value.push(newData)
    
    } catch (error) {
      console.log(error)
    }
    document.querySelector('.btn-close-program').click() 
    Swal.fire({
      title: "Succès",
      text: "Programme ajouté",
      icon: "success"
    })
  } 
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
                <div class="col-md-6 text-end">
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style="background-color: #219935; border-color: #219935"
                >
                    <img
                    src="/assets/img/icone/plus.png"
                    class="img-fluid"
                    alt="..."
                    />
                    Ajouter
                </button>

                <!-- Modal -->
                <div
                    class="modal fade"
                    id="exampleModal5"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel5"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #219935; color : white">
                            <h1 class="modal-title fs-5" id="exampleModalLabel5">
                                Ajouter un programme
                            </h1>
                            <button
                                type="button"
                                class="btn-close-program text-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="addNewProgram" class="row g-3 needs-validation text-start" novalidate>
                                    <div class="col-md-12">
                                        <label for="validationCustom01" class="form-label"
                                            >Jours</label
                                        >
                                        <select v-model="jour_du_voyage" class="form-select" aria-label="Default select example">
                                            <option selected>....</option>
                                            <option value="Lundi">Lundi</option>
                                            <option value="Mardi">Mardi</option>
                                            <option value="Mercredi">Mercredi</option>
                                            <option value="Jeudi">Jeudi</option>
                                            <option value="Vendredi">Vendredi</option>
                                            <option value="Samedi">Samedi</option>
                                            <option value="Dimanche">Dimanche</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure de convocation</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
                                            required
                                        />
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure de départ</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_depart"
                                        />
                                    </div>

                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Lieu de départ</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="lieu_depart"
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Destination</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="destination"
                                        />
                                    </div>

                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Escales</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="escales_a_faire"
                                        />
                                    </div>

                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Prix</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="montant"
                                        />
                                    </div>
                                
                                    <div class="col-12 text-center">
                                        <button
                                            class="btn btn-primary"
                                            style="background-color: #219935; border-color: #219935"
                                            type="submit"
                                        >
                                            Enregistrer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-12 mt-2">
            <div class="table-responsive">
                <table class="table table-striped" ref="exportable_table">
                <thead>
                    <tr>
                        
                        <th scope="col">N°</th>
                        <th scope="col">Jours</th>
                        <th scope="col">Heure de convocation </th>
                        <th scope="col">Heure de depart</th>
                        <th scope="col">Trajet </th>
                        <th scope="col">Escales </th>
                        <th scope="col">Prix</th>
                        <th scope="col">Actions</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(program, i) in programs" :key="i">
                        
                    <td>{{ i + 1 }}</td>
                    <td>{{ program.jour_voyage }}</td>
                    <td>{{ program.heure_convocation }}</td>
                    <td> {{ program.heure_depart }}</td>
                    <td> {{ program.lieu_depart }} - {{ program.destination }}</td>
                    <td>{{ program.escales }} </td>
                    <td> {{ program.montant }}</td>
                        
                    <td>
                        <div class="dropdown dropend position-static">
                            <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="background: transparent; border-color: transparent; color: black;">
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal51">  
                                    Modifier
                                </button>
                            </li>
                                
                            <li>
                                <button type="button" class="btn">  
                                    Supprimer
                                </button>
                            </li>
                            
                            </ul>
                        </div>
                        <!-- <button class="btn btn-primary"> Modifier</button>
                        <button class="btn btn-primary"> Supprimer</button> -->
                    </td>     

                    </tr>
                    
                </tbody>
            </table>
            </div>

            <!-- Modal  de modification -->
            <div
                class="modal fade"
                id="exampleModal51"
                tabindex="-1"
                aria-labelledby="exampleModalLabel51"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #219935; color : white">
                        <h1 class="modal-title fs-5" id="exampleModalLabel51">
                            Modifier un programme
                        </h1>
                        <button
                            type="button"
                            class="btn-close-program text-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="addNewProgram" class="row g-3 needs-validation text-start" novalidate>
                                <div class="col-md-12">
                                    <label for="validationCustom01" class="form-label"
                                        >Jours</label
                                    >
                                    <select v-model="jour_du_voyage" class="form-select" aria-label="Default select example">
                                        <option selected>....</option>
                                        <option value="Lundi">Lundi</option>
                                        <option value="Mardi">Mardi</option>
                                        <option value="Mercredi">Mercredi</option>
                                        <option value="Jeudi">Jeudi</option>
                                        <option value="Vendredi">Vendredi</option>
                                        <option value="Samedi">Samedi</option>
                                        <option value="Dimanche">Dimanche</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Heure de convocation</label
                                    >
                                    <input
                                        type="time"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="heure_convocation"
                                        required
                                    />
                                </div>
                                
                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Heure de départ</label
                                    >
                                    <input
                                        type="time"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="heure_depart"
                                    />
                                </div>

                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Lieu de départ</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="lieu_depart"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Destination</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="destination"
                                    />
                                </div>

                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Escales</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="escales_a_faire"
                                    />
                                </div>

                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label"
                                        >Prix</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationCustom02"
                                        v-model="montant"
                                    />
                                </div>
                            
                                <div class="col-12 text-center">
                                    <button
                                        class="btn btn-primary"
                                        style="background-color: #219935; border-color: #219935"
                                        type="submit"
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>

        </div>
    </section>
    <!-- End Portfolio Details Section -->
</template>

<style>
</style>