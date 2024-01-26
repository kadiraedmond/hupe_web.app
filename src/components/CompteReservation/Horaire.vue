<script setup>
import { ref, onBeforeMount } from 'vue'
import { collection, query, setDoc, doc, Timestamp, where, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"

import Swal from 'sweetalert2'

const heure_1 = ref('')
const heure_2 = ref('')
const heure_3 = ref('')
const heure_4 = ref('')
const heure_5 = ref('')

const horaire = ref([])

const alreadyExists = ref(false)

const horaireColRef = collection(firestoreDb, 'horaires')

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'eZSPjwcD94CINnFyEJNp' || savedUser.uid || authStore.user.uid

onBeforeMount(async () => {
    const q = query(horaireColRef, where('compagnie_uid', '==', userId))
    const snapshot = await getDocs(q)

    if(snapshot.docs.length > 0) {
        alreadyExists.value = true
        
        snapshot.docs.forEach(doc => horaire.value.push(doc.data()))
    }
})


const handleSubmit = async () => {
    if(alreadyExists.value === true) {
        document.querySelector('.btn-close-horaire').click()

        Swal.fire({
            title: "Erreur",
            text: "Une horaire existe déjà",
            icon: "error"
        })
    }

    else {
        const data = {
            uid: '',
            compagnie_uid: userId,
            heure1: heure_1.value,
            heure2: heure_2.value,
            heure3: heure_3.value,
            heure4: heure_4.value,
            heure5: heure_5.value,
            createdAt: Timestamp.now()
        }
        
        const docRef = await addDoc(horaireColRef, data)
        await updateDoc(docRef, { uid: docRef.id })
        horaire.value.push({ ...data, uid: docRef.id })
        alreadyExists.value = true

        document.querySelector('.btn-close-horaire').click()
        Swal.fire({
            title: "Succès",
            text: "Horaire ajouté",
            icon: "success"
        })
    }
}
</script>
<template>
    
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
        <div class="container">

            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="row">
                    
                        <div class="col-md-12 text-end">
                            <!-- Button trigger modal -->
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal5Horaire"
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
                                id="exampleModal5Horaire"
                                tabindex="-1"
                                aria-labelledby="exampleModal5Horaire"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header" style="background-color: #219935; color : white">
                                        <h1 class="modal-title fs-5" id="exampleModal5Horaire">
                                            Définir les horaires
                                        </h1>
                                        <button
                                            type="button"
                                            class="btn-close-horaire text-white"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                                                <div class="col-md-12">
                                                    <label for="validationCustom02" class="form-label"
                                                        >Heure N° 1</label
                                                    >
                                                    <input
                                                        type="time"
                                                        class="form-control"
                                                        id="validationCustom02"
                                                        v-model="heure_1"
                                                        required
                                                    />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="validationCustom02" class="form-label"
                                                        >Heure N° 2</label
                                                    >
                                                    <input
                                                        type="time"
                                                        class="form-control"
                                                        id="validationCustom02"
                                                        v-model="heure_2"
                                                        required
                                                    />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="validationCustom02" class="form-label"
                                                        >Heure N° 3</label
                                                    >
                                                    <input
                                                        type="time"
                                                        class="form-control"
                                                        id="validationCustom02"
                                                        v-model="heure_3"
                                                    />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="validationCustom02" class="form-label"
                                                        >Heure N° 4</label
                                                    >
                                                    <input
                                                        type="time"
                                                        class="form-control"
                                                        id="validationCustom02"
                                                        v-model="heure_4"
                                                    />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="validationCustom02" class="form-label"
                                                        >Heure N° 5</label
                                                    >
                                                    <input
                                                        type="time"
                                                        class="form-control"
                                                        id="validationCustom02"
                                                        v-model="heure_5"
                                                    />
                                                </div>
                                            
                                                <div class="col-12 text-center">
                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary"
                                                        style="background-color: #219935; border-color: #219935"
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
                                
                            <th scope="col">Heure N° 1</th>
                            <th scope="col">Heure N° 2 </th>
                            <th scope="col">Heure N° 3</th>
                            <th scope="col">Heure N° 4 </th>
                            <th scope="col">Heure N° 5 </th>
                            <th scope="col">Actions</th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in horaire" :key="i">
                                
                                <td>{{ item.heure1 }}</td>
                                <td> {{ item.heure2 }}</td>
                                <td> {{ item.heure3 }}</td>
                                <td>{{ item.heure4 }} </td>
                                <td> {{ item.heure5 }}</td>
                                    
                                <td>
                                    <div class="dropdown dropend position-static">
                                        <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="background: transparent; border-color: transparent; color: black;">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <!-- Button trigger modal -->
                                            <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal5Horaires">  
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

                    <!-- Modal de modifications -->
                     <!-- Modal -->
                     <div
                        class="modal fade"
                        id="exampleModal5Horaires"
                        tabindex="-1"
                        aria-labelledby="exampleModal5Horaires"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: #219935; color : white">
                                <h1 class="modal-title fs-5" id="exampleModal5Horaires">
                                   Modifier les horaires
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close-horaire text-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label"
                                                >Heure N° 1</label
                                            >
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="validationCustom02"
                                                v-model="heure_1"
                                                required
                                            />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label"
                                                >Heure N° 2</label
                                            >
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="validationCustom02"
                                                v-model="heure_2"
                                                required
                                            />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label"
                                                >Heure N° 3</label
                                            >
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="validationCustom02"
                                                v-model="heure_3"
                                            />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label"
                                                >Heure N° 4</label
                                            >
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="validationCustom02"
                                                v-model="heure_4"
                                            />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label"
                                                >Heure N° 5</label
                                            >
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="validationCustom02"
                                                v-model="heure_5"
                                            />
                                        </div>
                                    
                                        <div class="col-12 text-center">
                                            <button
                                                type="submit"
                                                class="btn btn-primary"
                                                style="background-color: #219935; border-color: #219935"
                                            >
                                                Enregistrer
                                            </button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- end Modal de modifications -->
                
                </div>
           </div>

        </div>
    </section>
    <!-- End Portfolio Details Section -->
</template>