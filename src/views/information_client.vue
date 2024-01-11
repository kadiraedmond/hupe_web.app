<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import router from '@/router/router.js'
import { useAuthStore } from '@/store/auth.js'
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const savedUser = JSON.parse(localStorage.getItem('user'))

let docRef
onMounted(() => {
  window.scrollTo(0, 0)
  docRef = doc(firestoreDb, 'users', authStore.uniqueIdentifier)
}) 

const nom = ref('')
const prenom = ref('')
const sexe = ref('') 
const email = ref('')  

const handleSubmit = async () => { 

  try { 

    await updateDoc(docRef, {
      lastName: nom.value, 
      firstName: prenom.value, 
      sexe: sexe.value,
      email: email.value, 
    })
    
    console.log('Document ajouté') 

    Swal.fire({
      title: "Succès",
      text: "Votre compte a été créé", 
      icon: "success"
    })

    const snapshot = await getDoc(docRef)
    let user
    if(snapshot.exists()) user = snapshot.data()
    authStore.setUser(user)
    localStorage.setItem('user', JSON.stringify(user)) 
  
    await router.push('/compte_client') 
    window.location.reload() 
    
  } catch (error) {
    console.log(error)
  } 
} 

</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 50px">
      <div class="container mt-2 mb-5">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                
                <li class=" active w-50 text-center" aria-current="page"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">1</button> Téléphone</li>
                
                <li class="breadcrumb-item  w-50 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: #219935;border-color: #219935">2</button>Informations</li>
                
                <!-- Ajoutez plus d'étapes si nécessaire -->
              </ol>
            </nav>
          </div>
          <div class="col-md-1"></div>
        </div>
            
      </div>
            
      <div class="container">
        <div class="row">
          <div class="col-md-3">
           
             
            </div>
          <div
            class="col-md-6"
            style="
            /* background: #d5f8e5 */
             border-radius: 5px; padding: 20px ;
            border: 1px solid #219935;"
          >
            <div class="col-md-12 text-center">
              <p style="font-weight: 700">
                Complétez vos informations personnelles
              </p>
            </div>
            <form @submit.prevent="handleSubmit" id="form" class="row g-3">
              <div class="col-md-12">
                <label for="text" class="form-label">Nom </label>
                <input type="text" v-model="nom" class="form-control" id="inputEmail4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Prénoms </label>
                <input type="text" v-model="prenom" class="form-control" id="inputPassword4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Sexe </label>
                <!-- <input type="text" v-model="sexe" class="form-control" id="inputPassword4" required /> -->
                <select v-model="sexe" class="form-select1" style="background: #E8E8E8; color: black" id="validationCustom04" required>
                  <option value="Masculin" selected>Masculin</option>
                  <option value="Féminin">Féminin</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Adresse email</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="inputAddress"
                  required
                />
              </div>
               
 

              <div class="row text-center mt-4">
                    <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Valider</button>
                      </div> -->
                      <div class="col-md-6 text-start">
                        <router-link to="/connexion-client">
                          <button
                        
                        class="btn btn-primary "
                        style="
                          background-color: white;
                          color: #219935;
                          border-color: #219935  ;
                        "
                      >
                      <i class='bx bx-left-arrow-alt' ></i>   Précédent 
                      </button>
                        </router-link>
                     
                    </div>
                    <div class="col-md-6 text-end">
                      <!-- <button
                        type="submit"
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                          
                        "
                      >
                        Terminer  <i class='bx bx-check'></i> 
                      </button> -->

                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="
                          background-color: #219935;
                          border-color: #219935;
                          width: 60%;
                        ">
                       Terminer  <i class='bx bx-check'></i>
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header" style="border: none;">
                              <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="padding: 25px;">
                              <div class="row no-gutters mt-4" style="margin-top: -20px !important;">
                                <!-- <div class="col-md-3" style="width: 30% !important;"></div> -->
                                <div class="col-md-12" style="text-align: justify; border: 1px solid #efefef; border-radius: 5px;">
                                  <div class="row" style="    padding: 10px;">
                                      <div class="col-md-12 text-center">
                                          <img src="/assets/img/favicon.png" alt=""   class="img-fluid"  style="margin-top: -6px ; width: 50px;"
                                      />
                                      </div>
                                      <div class="col-md-12 text-center">
                                          <h3 class="mt-5 mb-4" style="font-size: 18px;">Politiques de confidentialité et Termes & Conditions d'utilisation </h3>

                                      </div>
                                      <div class="col-md-12" style="font-size: 14px;">
                                          <p data-aos=" -up">
                                              Pour créer un compte Google, vous devez accepter les <router-link to='/legales' >  Termes & Conditions d'utilisation </router-link> ci-dessous. 
                                              
                                          </p>

                                          <p data-aos=" -up">
                                              De plus, lorsque vous créez un compte, nous traitons vos informations comme décrit dans nos <router-link to='/legales' >Politiques de confidentialité</router-link> ,
                                          </p>
                                      </div>
                                      <div class="col-md-12 mb-4" style="font-size: 14px;">
                                          <p data-aos=" -up"> Les informations que nous collectons Nous pouvons collecter les types de données suivants : </p>
                                          <ul>
                                              <li>Informations personnelles telles que votre nom, adresse, numéro de téléphone, adresse e-mail, et informations de paiement.</li>
                                              <li>Informations sur les véhicules loués ou achetés, les réservations de tickets de bus et les transactions effectuées sur la plateforme. </li>
                                              <li>Données de localisation lorsque cela est nécessaire pour fournir nos services. </li>
                                          </ul>
                                            
                                          <p data-aos=" -up">Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web. <br>
                                          Nous utilisons vos données personnelles pour :  </p>
                                          <ul>
                                              <li>Fournir les services que vous demandez, tels que la location de véhicules, la réservation de tickets de bus, etc. </li>
                                              <li>Améliorer et personnaliser votre expérience sur notre plateforme. </li>
                                              <li>Communiquer avec vous, notamment pour vous envoyer des confirmations de réservation, des mises à jour de compte, et des informations sur nos services.</li>
                                              <li> Respecter nos obligations légales et réglementaires.</li>
                                          </ul>
                                      </div>
                                      <div class="col-md-12">
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <router-link to=''>
                                                      <button class="btn btn-primary" id="btn-left" style="    background: white; color: #219935; border-color: #219935;" > Annuler</button>
                                                  </router-link>
                                                  
                                              </div>
                                              <div class="col-md-6 text-end">
                                                  
                                                  <button class="btn btn-primary" type="submit" style="background-color: #219935 ; border-color: #219935;" :disabled="isUploading"> J'accepte</button>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                
                                  
                                    
                                </div>
                                <!-- <div class="col-md-3" style="width: 30% !important;"></div> -->
                            </div>
                            </div>
                            <!-- <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              <!-- <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div> -->
            </form>
          </div>
          <div class="col-md-3">
             
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style></style>
