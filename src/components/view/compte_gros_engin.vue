<script setup>
import { reactive } from 'vue'; 
 import { onMounted, onBeforeMount, ref } from 'vue'
//  import { useCompagnieStore } from '@/axios_store/compagnie.js'

//  Get From axios
 import axios from "axios"
 const compagnieId = '657b5f1d-c793-436d-ba47-7230ea88a78a'


 const vehicules = reactive({
  list: []
 });

 const promotion = reactive({
  vehicule_id: '',
  taux_de_reduction: '',
  montant: "",
  date_de_debut: '',
  date_de_fin: ''
 })

 const addPromotion = (_id) => {
  console.log('Click'),
  axios({
    headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
    url: "https://hupe-api-beta-test.cyclic.app//api/promotion/",
    method: 'POST',
    data: {
      'id_vehicule': _id,
      'taux_de_reduction': promotion.taux_de_reduction,
      'montant' : promotion.montant,
      'date_de_fin': promotion.date_de_fin,
      'date_de_debut' : promotion.date_de_debut
    }
  }).then((response) => {
  console.log('Insert')
    // vehicules.list = response.data
 }).catch((err) => {
  console.log('Error: ', + err)
 })
 }

 const getVehiculeForCompagnie = () => {
  console.log('API Started')
  axios({
    headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
    url: "https://hupe-api-beta-test.cyclic.app//api/vehicule/for-me?from_company=" + compagnieId,
    method: 'GET',
 }).then((response) => {
  console.log('Response: ', + response.data)
    vehicules.list = response.data
 }).catch((err) => {
  console.log('Error: ', + err)
 })
 }

 

//  const compagnieStore = useCompagnieStore()



 onMounted(() => {
  getVehiculeForCompagnie()
 });


</script>

<template>
  

  <main id="main">


    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" style="margin-top: 0px;">
      <img src="/public/assets/img/car2.jpg" alt="" class="img-fluid w-100" style="height: 380px; object-fit: cover;">
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px;">
      <div class="container" data-aos="fade-up">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 100px;" />
                </div>
                <div class="col-md-5">
                  <div class="card-body">
                    <!-- <h5 class="card-title" style="font-size:16px"> {{ compagnieStore.compagnie.raison_sociale }}</h5>
                    <p class="card-text" style="font-size:15px">{{compagnieStore.compagnie.description}} </p> -->
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 text-end">
          <a v-bind:href="'/dashboard'" id="a_compagnie">
            <button class="btn btn-primary" style="background: #219935;border-color: #219935;"> Tableau de bord</button>
          </a>
          
        </div> -->

        </div>
      </div>
    </section><!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" style="margin-top: -40px;">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="voiture-tab" data-bs-toggle="tab" data-bs-target="#voiture-tab-pane"
                  type="button" role="tab" aria-controls="voiture-tab-pane" aria-selected="true">Véhicules</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Promotion</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                  type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Réservations</button>
              </li>


              <li class="nav-item" role="presentation">
                <button class="nav-link" id="demande-tab" data-bs-toggle="tab" data-bs-target="#demande-tab-pane"
                  type="button" role="tab" aria-controls="demande-tab-pane" aria-selected="false">Demande</button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="categorie-tab" data-bs-toggle="tab" data-bs-target="#categorie-tab-pane"
                  type="button" role="tab" aria-controls="categorie-tab-pane" aria-selected="false">Catégorie</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="politique-tab" data-bs-toggle="tab" data-bs-target="#politique-tab-pane"
                  type="button" role="tab" aria-controls="politique-tab-pane" aria-selected="false">Politique</button>
              </li>
             
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
                  type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Offres</button>
              </li>
             
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="comptes-tab" data-bs-toggle="tab" data-bs-target="#comptes-tab-pane"
                  type="button" role="tab" aria-controls="comptes-tab-pane" aria-selected="false">Comptes</button>
              </li>
              
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="apropos-tab" data-bs-toggle="tab" data-bs-target="#apropos-tab-pane"
                  type="button" role="tab" aria-controls="apropos-tab-pane" aria-selected="false">A propos</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="voiture-tab-pane" role="tabpanel" aria-labelledby="voiture-tab"
                tabindex="0">
                <div class="row mt-4">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style=" background-color: #219935; border-color: #219935;">
                        <img
                          src="/public/assets/img/icone/plus.png" class="img-fluid " alt="..."> Ajouter
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter un véhicule</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form class="row g-3 needs-validation text-start" novalidate action="">
                            <div class="col-md-6">
                              <label for="validationCustom01" class="form-label">Marque</label>
                              <input type="text" class="form-control" id="validationCustom01"  required>
                               
                            </div>
                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Modéle</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom01" class="form-label">Catégories</label>
                              <input type="text" class="form-control" id="validationCustom01"  required>
                               
                            </div>
                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Moteur</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Transmission</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Année</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label">Prix</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Etat</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label">Kilométrage</label>
                              <input type="text" class="form-control" id="validationCustom02"  required>
                               
                            </div>
                           
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label">Ajouter une images</label>
                              <input type="file" class="form-control" id="validationCustom02"  required>
                               
                            </div>
                             
                            <div class="col-12 text-center">
                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                            </div>
                          </form>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-6" v-for="(vehicule, index) in vehicules.list" :key="index">
                    <div class="card mb-3" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..."
                            style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                <p class="card-text"> <strong> {{ vehicule.marque }}  {{ vehicule.annee }} </strong></p>
                              </div>
                              <div class="col-md-6 text-end">
                                <button class="btn btn-primary" style="    background-color: #219935;
                                  border-color: #219935;"> {{ vehicule.prix }} FCFA</button>
                              </div>
                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Catégorie  | </strong> {{ vehicule.categories }}</p>
                              </div>

                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Modèle  | </strong> {{ vehicule.modele }}</p>
                              </div>

                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Moteur  | </strong> {{ vehicule.moteur }}</p>
                              </div>
                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Etat  | </strong> {{ vehicule.etat }}</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                <p class="card-text"> <strong>Transmission  | </strong> {{ vehicule.transmission }}</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                <p class="card-text"> <strong>Kilométrage  | </strong> {{ vehicule.kilometrage }}</p>
                              </div>

                              <div class="col-md-12 mt-4 text-start">
                                <div class="row row-clols-md-5">
                                  <div class="col">
                                    

                                     <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4" style="    background-color:rgb(33 153 53 / 58%);
                                      border-color: rgb(33 153 53 / 58%);">
                                      <img src="/public/assets/img/icone/edit.png"
                                          class="img-fluid " alt="...">
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel4">Modifier un véhicule</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body">
                                            <form class="row g-3 needs-validation text-start" novalidate>
                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Marque</label>
                                            <input type="text" class="form-control" id="validationCustom01"  required>
                                            
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Modéle</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Catégories</label>
                                            <input type="text" class="form-control" id="validationCustom01"  required>
                                            
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Moteur</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Transmission</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Année</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                          <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Prix</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Etat</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Kilométrage</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                        
                                          <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Ajouter une images</label>
                                            <input type="file" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                          
                                          <div class="col-12 text-center">
                                            <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                                          </div>
                                        </form>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col">
                                  
                                      <button class="btn btn-primary" style="    background-color: #219935;
                                      border-color: #219935;"><img src="/public/assets/img/icone/star.png" class="img-fluid "
                                          alt="..."> </button>
                                   
                                  </div>
                                  <div class="col">
                                     <!-- Button trigger modal -->
                                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" style=" background-color: #219935; border-color: #219935;">
                                        <img src="/public/assets/img/icone/promotion.png"
                                          class="img-fluid " alt="..."> 
                                      </button>

                                      <!-- Modal -->
                                      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h1 class="modal-title fs-5" id="exampleModalLabel">Promouvoir un vehicule</h1>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                              <form class="row g-3 needs-validation text-start" method="POST" @submit.prevent='addPromotion(vehicule._id)' novalidate>
                                            <div class="col-md-12">
                                              <label for="validationCustom01"  class="form-label">Taux de réduction</label>
                                              <input type="text" v-model="promotion.taux_de_reduction" class="form-control" id="validationCustom01"  required>
                                              
                                            </div>
                                            <div class="col-md-12">
                                              <label for="validationCustom02" class="form-label">Montant</label>
                                              <input type="text" class="form-control" v-model="promotion.montant"  id="validationCustom02"  required>
                                              
                                            </div>

                                            <div class="col-md-6">
                                              <label for="validationCustom01"  class="form-label">Date de debut</label>
                                              <input type="date" class="form-control" v-model="promotion.date_de_debut" id="validationCustom01"  required>
                                              
                                            </div>
                                            <div class="col-md-6">
                                              <label for="validationCustom02" class="form-label">Date de fin</label>
                                              <input type="date" class="form-control" v-model="promotion.date_de_fin" n id="validationCustom02"  required>
                                              
                                            </div>
                                             
                                            
                                            <div class="col-12 text-center">
                                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Promouvoir</button>
                                            </div>
                                          </form>
                                            </div>
                                            
                                          </div>
                                        </div>
                                      </div> 
                                  </div>
                                  <div class="col">
                                   
                                      <button class="btn btn-primary" style="    background-color: #219935;
                                      border-color: #219935;"><img src="/public/assets/img/icone/unlock.png" class="img-fluid "
                                          alt="..."> </button>
                                   
                                  </div>
                                  <div class="col text-center">
                                    
                                      <button class="btn btn-primary" style="    background-color: #ff000087;
                                      border-color: #ff000087;"><img src="/public/assets/img/icone/delete.png"
                                          class="img-fluid " alt="..."> </button>
                                    
                                  </div>
                                </div>

                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card mb-3" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..."
                            style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <!--  -->
                              <div class="col-md-6 text-end">
                                <button class="btn btn-primary" style="    background-color: #219935;
                                  border-color: #219935;"> 5000 FCFA</button>
                              </div>
                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Catégorie  | </strong> Tracteur</p>
                              </div>

                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Modèle  | </strong> Santafé</p>
                              </div>

                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Moteur  | </strong> essence</p>
                              </div>
                              <div class="col-md-6 mt-3">
                                <p class="card-text"> <strong>Etat  | </strong> 100km/h</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                <p class="card-text"> <strong>Transmission  | </strong> loren ipsu</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                <p class="card-text"> <strong>Kilométrage  | </strong> 100km/h</p>
                              </div>

                              <div class="col-md-12 mt-4 text-start">
                                <div class="row row-clols-md-5">
                                  <div class="col">
                                    

                                     <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4" style="    background-color:rgb(33 153 53 / 58%);
                                      border-color: rgb(33 153 53 / 58%);">
                                      <img src="/public/assets/img/icone/edit.png"
                                          class="img-fluid " alt="...">
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel4">Modifier un véhicule</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body">
                                            <form class="row g-3 needs-validation text-start" novalidate>
                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Marque</label>
                                            <input type="text" class="form-control" id="validationCustom01"  required>
                                            
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Modéle</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Catégories</label>
                                            <input type="text" class="form-control" id="validationCustom01"  required>
                                            
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Moteur</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Transmission</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Année</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                          <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Prix</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Etat</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>

                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Kilométrage</label>
                                            <input type="text" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                        
                                          <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Ajouter une images</label>
                                            <input type="file" class="form-control" id="validationCustom02"  required>
                                            
                                          </div>
                                          
                                          <div class="col-12 text-center">
                                            <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                                          </div>
                                        </form>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col">
                                  
                                      <button class="btn btn-primary" style="    background-color: #219935;
                                      border-color: #219935;"><img src="/public/assets/img/icone/star.png" class="img-fluid "
                                          alt="..."> </button>
                                   
                                  </div>
                                  <div class="col">
                                     <!-- Button trigger modal -->
                                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" style=" background-color: #219935; border-color: #219935;">
                                        <img src="/public/assets/img/icone/promotion.png"
                                          class="img-fluid " alt="..."> 
                                      </button>

                                      <!-- Modal -->
                                      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h1 class="modal-title fs-5" id="exampleModalLabel">Promouvoir un vehicule</h1>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                              <form class="row g-3 needs-validation text-start" novalidate>
                                            <div class="col-md-12">
                                              <label for="validationCustom01" class="form-label">Taux de réduction</label>
                                              <input type="text" class="form-control" id="validationCustom01"  required>
                                              
                                            </div>
                                            <div class="col-md-12">
                                              <label for="validationCustom02" class="form-label">Montant</label>
                                              <input type="text" class="form-control" id="validationCustom02"  required>
                                              
                                            </div>

                                            <div class="col-md-6">
                                              <label for="validationCustom01" class="form-label">Date de debut</label>
                                              <input type="date" class="form-control" id="validationCustom01"  required>
                                              
                                            </div>
                                            <div class="col-md-6">
                                              <label for="validationCustom02" class="form-label">Date de fin</label>
                                              <input type="date" class="form-control" id="validationCustom02"  required>
                                              
                                            </div>
                                             
                                            
                                            <div class="col-12 text-center">
                                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Promouvoir</button>
                                            </div>
                                          </form>
                                            </div>
                                            
                                          </div>
                                        </div>
                                      </div> 
                                  </div>
                                  <div class="col">
                                   
                                      <button class="btn btn-primary" style="    background-color: #219935;
                                      border-color: #219935;"><img src="/public/assets/img/icone/unlock.png" class="img-fluid "
                                          alt="..."> </button>
                                   
                                  </div>
                                  <div class="col text-center">
                                    
                                      <button class="btn btn-primary" style="    background-color: #ff000087;
                                      border-color: #ff000087;"><img src="/public/assets/img/icone/delete.png"
                                          class="img-fluid " alt="..."> </button>
                                    
                                  </div>
                                </div>

                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col">
                    <div class="card" style="background:#a6a6a621;">
                      <div class="row" style="padding: 6px;">
                        <div class="col-md-12 d-flex">
                          <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                            style=" width: 25px; height: 25px; margin-top: 6px;">
                          <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                          <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                              src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                        </div>
                      </div>
                      <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;">
                        <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px;  border-color: #a6a6a6;">
                          <img src="/public/assets/img/car4.jpg" class="card-img-top" alt="..."
                            style="border-radius: 5px 5px 5px 5px; height: 215px !important; object-fit: cover;">
                        </a>
                        <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                        <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                        <button class="btn btn-primary" id="badges012"> 93% </button>
                        <button class="btn btn-primary" id="badges0121">Toyota yaris 2022 </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style="background:#a6a6a621;">
                      <div class="row" style="padding: 6px;">
                        <div class="col-md-12 d-flex">
                          <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                            style=" width: 25px; height: 25px; margin-top: 6px;">
                          <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                          <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                              src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                        </div>
                      </div>
                      <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;">
                        <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px;  border-color: #a6a6a6;">
                          <img src="/public/assets/img/car4.jpg" class="card-img-top" alt="..."
                            style="border-radius: 5px 5px 5px 5px; height: 215px !important; object-fit: cover;">
                        </a>
                        <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                        <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                        <button class="btn btn-primary" id="badges012"> 93% </button>
                        <button class="btn btn-primary" id="badges0121">Toyota yaris 2022 </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style="background:#a6a6a621;">
                      <div class="row" style="padding: 6px;">
                        <div class="col-md-12 d-flex">
                          <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                            style=" width: 25px; height: 25px; margin-top: 6px;">
                          <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                          <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                              src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                        </div>
                      </div>
                      <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;">
                        <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px;  border-color: #a6a6a6;">
                          <img src="/public/assets/img/car4.jpg" class="card-img-top" alt="..."
                            style="border-radius: 5px 5px 5px 5px; height: 215px !important; object-fit: cover;">
                        </a>
                        <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                        <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                        <button class="btn btn-primary" id="badges012"> 93% </button>
                        <button class="btn btn-primary" id="badges0121">Toyota yaris 2022 </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-12 mt-4">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <div class="row">
                        <div class="col-md-4">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link active w-100" id="attente-tab" data-bs-toggle="tab"
                              data-bs-target="#attente-tab-pane" type="button" role="tab" aria-controls="attente-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #F77F00 !important;">

                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6 text-start">
                                      <p class="text-white">0 CFA</p>
                                    </div>

                                    <div class="col-md-6 text-end">
                                      <p>ICONE</p>
                                    </div>

                                    <div class="col-md-12 text-start">
                                      <p class="text-white">
                                        <button class="btn btn-primary border-0 text-white"
                                          style="background: #0000008f; border-radius: 50%;">0</button> Location en attente 
                                      </p>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </li>

                        </div>

                        <div class="col-md-4">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link  w-100" id="valid-tab" data-bs-toggle="tab"
                              data-bs-target="#valid-tab-pane" type="button" role="tab" aria-controls="valid-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #219935 !important;">

                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6 text-start">
                                      <p class="text-white">0 CFA</p>
                                    </div>

                                    <div class="col-md-6 text-end">
                                      <p>ICONE</p>
                                    </div>

                                    <div class="col-md-12 text-start">
                                      <p class="text-white">
                                        <button class="btn btn-primary border-0 text-white"
                                          style="background: #0000008f; border-radius: 50%;">0</button> Locations validées 
                                      </p>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </li>

                        </div>

                        <div class="col-md-4 ">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link  w-100" id="valid-tab" data-bs-toggle="tab"
                              data-bs-target="#confirm-tab-pane" type="button" role="tab" aria-controls="confirm-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #3987FB !important;">

                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6 text-start">
                                      <p class="text-white">0 CFA</p>
                                    </div>

                                    <div class="col-md-6 text-end">
                                      <p>ICONE</p>
                                    </div>

                                    <div class="col-md-12 text-start">
                                      <p class="text-white">
                                        <button class="btn btn-primary border-0 text-white"
                                          style="background: #0000008f; border-radius: 50%;">0</button> Cautions payées 
                                      </p>

                                    </div>
                                  </div>
                                </div>
                                </div>
                            </button>
                          </li>
                          
                        </div>

                        <div class="col-md-4">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link  w-100" id="valid-tab" data-bs-toggle="tab"
                              data-bs-target="#annul-tab-pane" type="button" role="tab" aria-controls="annule-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #931D96 !important;">

                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-6 text-start">
                                    <p class="text-white">0 CFA</p>
                                  </div>

                                  <div class="col-md-6 text-end">
                                    <p>ICONE</p>
                                  </div>

                                  <div class="col-md-12 text-start">
                                    <p class="text-white">
                                      <button class="btn btn-primary border-0 text-white"
                                        style="background: #0000008f; border-radius: 50%;">0</button> Locations annulées 
                                    </p>

                                  </div>
                                </div>
                              </div>
                              </div>
                            </button>
                          </li>
                          
                        </div>

                        <div class="col-md-4">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link  w-100" id="valid-tab" data-bs-toggle="tab"
                              data-bs-target="#report-tab-pane" type="button" role="tab" aria-controls="report-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #3987FB !important;">

                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-6 text-start">
                                    <p class="text-white">0 CFA</p>
                                  </div>

                                  <div class="col-md-6 text-end">
                                    <p>ICONE</p>
                                  </div>

                                  <div class="col-md-12 text-start">
                                    <p class="text-white">
                                      <button class="btn btn-primary border-0 text-white"
                                        style="background: #0000008f; border-radius: 50%;">0</button> Locations reportées 
                                    </p>

                                  </div>
                                </div>
                              </div>
                              </div>
                            </button>
                          </li> 
                        </div>

                        <div class="col-md-4">
                          <li class="nav-item " role="presentation">
                            <button class="nav-link  w-100" id="valid-tab" data-bs-toggle="tab"
                              data-bs-target="#use-tab-pane" type="button" role="tab" aria-controls="use-tab-pane"
                              aria-selected="true">
                              <div class="card text-bg-warning mb-3 border-0" style="background: #FB3232 !important;">

                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-6 text-start">
                                    <p class="text-white">0 CFA</p>
                                  </div>

                                  <div class="col-md-6 text-end">
                                    <p>ICONE</p>
                                  </div>

                                  <div class="col-md-12 text-start">
                                    <p class="text-white">
                                      <button class="btn btn-primary border-0 text-white"
                                        style="background: #0000008f; border-radius: 50%;">0</button>Locations utilisées 
                                    </p>

                                  </div>
                                </div>
                              </div>
                              </div>
                            </button>
                          </li> 
                        </div>
 
                      </div>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="attente-tab-pane" role="tabpanel"
                        aria-labelledby="attente-tab" tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px; background: #fafafa;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:rgb(247 127 0);">Attente
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong> 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>essence </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Etat | <strong>new </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Transmission  |  <strong>loren ipsun</strong>   </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Kilométrage |   <strong>100km/h </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  <hr>
                                                  <div class="row">
                                                    <div class="col-md-6">
                                                      <button class="btn btn-primary w-75" style="background: red; border-color:red;">Rejeter</button>
                                                    </div>
                                                    <div class="col-md-6 text-end">
                                                      <button class="btn btn-primary w-75" style="background: #219935; border-color:#219935;" >Valider</button>
                                                    </div>
                                                  </div>
                                                 
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="valid-tab-pane" role="tabpanel" aria-labelledby="valid-tab"
                        tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingV">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseV" aria-expanded="false"
                                        aria-controls="flush-collapseV" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#219935;">Validé
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseV" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingV" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong>  2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Modéle | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>hp4Lh </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Etat  |  <strong>Neuve </strong>  </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Transmission |   <strong>Automatique </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                   Kilométrage  |   <strong>100km/h</strong></p>
                                                   <hr>
                                                   <div class="row">
                                                     
                                                    <div class="col-md-12 text-center">
                                                      <button class="btn btn-primary" style="background:  #219935; border-color:#219935;">Annuler</button>
                                                    </div>
                                                   </div>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingVA">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseVA" aria-expanded="false"
                                        aria-controls="flush-collapseVA" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#219935;">Validé
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseVA" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingVA" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong>  2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Modéle | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>hp4Lh </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Etat  |  <strong>Neuve </strong>  </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Transmission |   <strong>Automatique </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                   Kilométrage  |   <strong>100km/h</strong></p>
                                                   <hr>
                                                   <div class="row">
                                                    <div class="col-md-6">
                                                       <button class="btn btn-primary w-75" style="background: white; border-color: #219935; color: #219935;">Annuler</button>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <button class="btn btn-primary" style="background:  #219935; border-color:#219935;">Procéder au paiement</button>
                                                    </div>
                                                   </div>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                               
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="confirm-tab-pane" role="tabpanel" aria-labelledby="annule-tab"
                        tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingC">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseC" aria-expanded="false"
                                        aria-controls="flush-collapseC" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#3987FB ;">Confirmé
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseC" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong>  2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Modéle | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>hp4Lh </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Etat  |  <strong>Neuve </strong>  </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Transmission |   <strong>Automatique </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                   Kilométrage  |   <strong>100km/h</strong></p>
                                                   
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="annul-tab-pane" role="tabpanel" aria-labelledby="annule-tab"
                        tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingC">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseC" aria-expanded="false"
                                        aria-controls="flush-collapseC" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931D96 ;">Annulé
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseC" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong>  2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Modéle | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>hp4Lh </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Etat  |  <strong>Neuve </strong>  </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Transmission |   <strong>Automatique </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                   Kilométrage  |   <strong>100km/h</strong></p>
                                                    
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tab-pane fade" id="report-tab-pane" role="tabpanel" aria-labelledby="report-tab"
                        tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingO">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseO" aria-expanded="false"
                                        aria-controls="flush-collapseO" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #931d96">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseO" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingO" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingT">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseT" aria-expanded="false"
                                        aria-controls="flush-collapseT" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px; ">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #931d96">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseT" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingT" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTh">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTh" aria-expanded="false"
                                        aria-controls="flush-collapseTh" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px; ">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Reporté
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseTh" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingTh" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Hyundai </strong> | <strong> Santafe 2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Essence | automatique | BG 5314</p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    chauffeur | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Intérieur | <strong>kara </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Retrait  |  <strong>2023-07-29 </strong> | <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Retour |   <strong>2023-07-29 </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Nombres de jours de location  |   <strong>5 jours</strong></p>
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tab-pane fade" id="use-tab-pane" role="tabpanel" aria-labelledby="use-tab"
                        tabindex="0">
                        <div class="row mt-5">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingU">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseU" aria-expanded="false"
                                        aria-controls="flush-collapseC" id="reser">
                                        <div class="row" style="margin: 10px; width:100%">
                                            <div class="col-md-6">
                                              <div class="card mb-3 border-0"
                                                style="max-width: 540px;">
                                                <div class="row g-1">
                                                  <div class="col-md-4">
                                                    <img src="/public/assets/img/avatars/1.png" alt
                                                      class="w-px-40 h-auto rounded-circle" style="width: 50px;" />
                                                  </div>
                                                  <div class="col-md-8">
                                                    <div class="card-body">
                                                      <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                      <p class="card-text mt-2" style="font-size: 10px; "> <i
                                                          class='bx bx-map' id="icon_menu" style="color: #219935;"></i>
                                                        CI,rue 250</p>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-6 text-end">
                                              <div class="row">
                                                <div class="col-4 text-end">
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:red ;">Utilisé
                                                  </h6>
                                                </div>
                                                <div class="col-8">
                                                  <button class="btn btn-primary"
                                                    style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                                </div>
                                              </div>

                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="flush-collapseU" class="accordion-collapse collapse"
                                      aria-labelledby="flush-headingU" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="margin-top: -40px;">
                                        <div class="card h-100 border-0" id="card_compagnie" style=" box-shadow: none; background: none;">
                                          
                                          <div class="card mb-3 mt-4"
                                            style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                            <div class="row g-0" style="margin: 10px;">

                                              <div class="col-md-6">
                                                
                                                <div class="card-body">
                                                  <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                               <p class="card-text" style="background: #efefef; padding: 4px; border-radius: 5px; font-size: 12px; margin-top: -15px;">
                                                    Il y a environ un jour <br>
                                                   <strong> T22356_1253523 </strong> </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    <strong>Caterpillar </strong> | <strong>  2022 </strong> </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Catégorie | Tracteur </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Modéle | <strong>01 </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Moteur | <strong>hp4Lh </strong> </p>
                                                  <hr>

                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100"
                                                  alt="..." style="height: 85% !important;">
                                              </div>
                                              <div class="col-md-12">
                                                <div class="card-body">
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">
                                                      Etat  |  <strong>Neuve </strong>  </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Transmission |   <strong>Automatique </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                   Kilométrage  |   <strong>100km/h</strong></p>
                                                   
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <!-- <div class="row gy-4 mt-2">
                      <div class="col-lg-12">
                          <ul class="nav nav-tabs" id="myTab" role="tablist" style="background-color: #efefef;">
                            <div class="row w-100">
                              <div class="col-md-6">
                                <li class="nav-item " role="presentation">
                                  <button class="nav-link active w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Réservation normale</button>
                                </li>
                              </div>
                              <div class="col-md-6">
                                <li class="nav-item" role="presentation">
                                <button class="nav-link w-100" id="prof-tab" data-bs-toggle="tab" data-bs-target="#prof-tab-pane" type="button" role="tab" aria-controls="prof-tab-pane" aria-selected="false" style="width: 107% !important;">Réservation reportée</button>
                                </li>
                              
                              </div>
                            </div>
                              
                          
                          </ul>
                          
                      </div>          
                    </div>  -->
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="categorie-tab-pane" role="tabpanel" aria-labelledby="categorie-tab"
                tabindex="0">

                <div class="row mt-4">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModaled" style=" background-color: #219935; border-color: #219935;">
                        <img
                          src="/public/assets/img/icone/plus.png" class="img-fluid " alt="..."> Ajouter
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModaled" tabindex="-1" aria-labelledby="exampleModalLabeled" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabeled">Ajouter</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form class="row g-3 needs-validation text-start" novalidate>
                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label">Titre</label>
                              <input type="text" class="form-control" id="validationCustom01"  required>
                               
                            </div>
                           
                             
                            <div class="col-12 text-center">
                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                            </div>
                          </form>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-md-12">
                    <h6 class="mb-3">Liste des catégories</h6>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Titre</th>
                           
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                         
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          
                        </tr>
                         
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-12">
 
                        <div class="row">
                          <div class="col-md-6">
                            <p> <strong> Profile actuel   | </strong>  <b style="color: #219935">Vip</b> </p>
       
                            <div class="card mb-4 rounded-1 shadow-sm border-primary" style="border-color:#219935 !important">
                                <div class="card-header py-3 text-bg-primary border-primary" style="background:#219935 !important ; border-color:#219935 !important">
                                  <h4 class="my-0 fw-normal text-center">Vip</h4>
                                </div>
                                <div class="card-body">
                                 
                                  <ul class="list-unstyled mt-3 mb-4">
                                    <li> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Creation de compte</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;"> Présence sur la liste des prestataires</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;"> En vedette sur la pages d'accueil</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;"> Une espace publicitaire </li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Mise en avant d’un véhicule ou d’une destination </li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Promotion d’une destination ou d’un véhicule </li>
                                  </ul>
                                  <h4 style="font-size: 18px; color: #219935; text-align: center;">Abonnement mensuel de 30 000 par mois </h4>
                                  <div class="row">
                                    <!-- <div class="col-md-12 text-center mb-3">
                                      <button type="button" class=" btn btn-primary text-center" style="background: white; border-color: #219935;"> <h5 class="card-title pricing-card-title " style="color:#219935">20%</h5></button>
                                    </div> -->
                                    <!-- <div class="col-md-12 text-center">
                                      <button type="button" class=" btn btn-primary text-center" style="background: #219935; border-color: #219935;">Sélectionner</button>
                                    </div> -->
                                  </div>
                                  
                                </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p> <strong>Changer de Profile  </strong> </p>
                            <div class="card mb-4 rounded-1 shadow-sm border-primary" style="border-color:#219935 !important">
                                <div class="card-header py-3 text-bg-primary border-primary" style="background:rgb(62 66 63) !important ; border-color:#219935 !important">
                                  <h4 class="my-0 fw-normal text-center">Basique</h4>
                                </div>
                                <div class="card-body">
                                 
                                  <ul class="list-unstyled mt-3 mb-4">
                                    <li> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Creation de compte</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;"> Présence sur la liste des prestataires</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/no.png" alt="" class="img-fluid" style=" margin-top: -4px;"> En vedette sur la pages d'accueil</li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/no.png" alt="" class="img-fluid" style=" margin-top: -4px;"> Une espace publicitaire </li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/no.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Mise en avant d’un véhicule ou d’une destination </li>
                                    <li class="mt-3"> <img src="/public/assets/img/icone/no.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Promotion d’une destination ou d’un véhicule </li>
                                  </ul>
                                  <h4 style="font-size: 18px; color: #219935; text-align: center;">Abonnement de 20 000 par mois </h4>
                                  <div class="row">
                                   
                                    <div class="col-md-12 text-center">
                                      <button type="button" class=" btn btn-primary text-center" style="background: #219935; border-color: #219935;">Sélectionner</button>
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                          </div>
                        </div>
 
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="demande-tab-pane" role="tabpanel" aria-labelledby="demande-tab"
                tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-6">
                    <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal10" style="background:white !important;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  border: none; ">
                    <p style="color:#219935 ;"> frgthyjukilm </p>
                    <p class="text-black"> dvfbghjk </p>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel10" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel10">Informations du client </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form class="row g-3">
                          <div class="col-md-12">
                            <p> client  |  joe</p>
                            <p> Adresse  | lolkjml </p>
                            <p> Contact  | +000 0000000 </p>
                            <p> Objet  | frgthyjukilm </p>
                            <p> Demande  | dvfbghjk </p>
                          </div>
                          <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Entrez votre reponse  </label>
                            <textarea class="form-control" id="validationTextarea" placeholder="Reponse" required></textarea>
                          </div>
                          
                          <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary" style="background: #219935 ; border-color:#219935;">Repondre</button>
                          </div>
                        </form>
                        </div>
                         
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-6">
                    <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal10" style="background:white !important;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  border: none; ">
                    <p style="color:#219935 ;"> frgthyjukilm </p>
                    <p class="text-black"> dvfbghjk </p>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel10" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel10">Informations du client </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form class="row g-3">
                          <div class="col-md-12">
                            <p> client  |  joe</p>
                            <p> Adresse  | lolkjml </p>
                            <p> Contact  | +000 0000000 </p>
                            <p> Objet  | frgthyjukilm </p>
                            <p> Demande  | dvfbghjk </p>
                          </div>
                          <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Entrez votre reponse  </label>
                            <textarea class="form-control" id="validationTextarea" placeholder="Reponse" required></textarea>
                          </div>
                          
                          <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary" style="background: #219935 ; border-color:#219935;">Repondre</button>
                          </div>
                        </form>
                        </div>
                         
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="politique-tab-pane" role="tabpanel" aria-labelledby="politique-tab"
                tabindex="0">

                <div class="row mt-4">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalede" style=" background-color: #219935; border-color: #219935;">
                        <img
                          src="/public/assets/img/icone/plus.png" class="img-fluid " alt="..."> Ajouter
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModalede" tabindex="-1" aria-labelledby="exampleModalLabelede" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabelede">Ajouter</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form class="row g-3 needs-validation text-start" novalidate>
                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label">Contenue</label>
                              <textarea type="text" class="form-control" id="validationCustom01"  required></textarea>
                               
                            </div>
                           
                             
                            <div class="col-12 text-center">
                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                            </div>
                          </form>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <H6>Lorem ipsum dolor sit amet</H6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>

                        <H6>Lorem ipsum dolor sit amet</H6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequatLorem ipsum dolor sit amet, <br>consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="row">
                              <div class="col-md-12">
                                <button class="btn btn-primary" style="background: #219935; border-color : #219935">Modifier</button>
                                <button class="btn btn-primary" style="background-color:red; border-color:red; margin-left: 10px;">Supprimer</button>
                              </div>
                               
                            </div>
                          </div>
                        </div>

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="tab-pane fade" id="apropos-tab-pane" role="tabpanel" aria-labelledby="apropos-tab" tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                          <div class="row">
                            <div class="col-md-12">
                              <p><strong>Raison sociale |</strong>   {{ compagnieStore.compagnie.raison_sociale }}</p>

                              <p>  <strong> Responsable |</strong>   Mr joe</p>
                            </div>

                            <div class="row row-cols-1 row-cols-md-4 mb-4 g-4" style="margin-top: -5px;">
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/mail.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">{{ compagnieStore.compagnie.email }}</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/web.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">{{ compagnieStore.compagnie.site_web }}</h5>
                                    <h5 class="card-title" style="font-size: 14px">{{ compagnieStore.compagnie.telephone }}</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/maps.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">{{ compagnieStore.compagnie.adresse }}</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/location.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">{{ compagnieStore.compagnie.long }} - {{ compagnieStore.compagnie.lat}}</h5>
                                   </div>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

              <div class="tab-pane fade" id="activite-tab-pane" role="tabpanel" aria-labelledby="activite-tab"
                tabindex="0">
                <div class="row mt-4">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style=" background-color: #219935; border-color: #219935;">
                        <img
                          src="/public/assets/img/icone/plus.png" class="img-fluid " alt="..."> Ajouter
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabeled" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabeled">Ajouter</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form class="row g-3 needs-validation text-start" novalidate>
                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label">Titre</label>
                              <input type="text" class="form-control" id="validationCustom01"  required>
                               
                            </div>
                           
                             
                            <div class="col-12 text-center">
                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Enregistrer</button>
                            </div>
                          </form>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                Lomé-Dapaong
                              </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">
                                <div class="card h-100" id="card_compagnie">
                                  <div class="row" style="margin: 10px;">
                                    <div class="col-md-6">
                                      <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                        <div class="row g-1">
                                          <div class="col-md-4">
                                            <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                              style="width: 90px;" />
                                          </div>
                                          <div class="col-md-8">
                                            <div class="card-body">
                                              <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                              <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                  id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 text-end">
                                      <div class="row">
                                        <div class="col-4 text-end">
                                          <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                        </div>
                                        <div class="col-8">
                                          <button class="btn btn-primary"
                                            style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="card mb-3 mt-4"
                                    style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                    <div class="row g-0" style="margin: 10px;">

                                      <div class="col-md-6">
                                        <div class="card-body">
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                            <strong>Location Hyundai Santa fe 2022 </strong></p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                            essence BG 5314</p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                            chauffeur </p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                            pays </p>
                                          <hr>

                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                          style="height: 85% !important;">
                                      </div>
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                            <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                            <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                          <hr>

                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                            <strong>Nombres de jours de location </strong> 5 jours</p>
                                          <hr>
                                          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Kara-Lomé
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">
                                <div class="card h-100" id="card_compagnie">
                                  <div class="row" style="margin: 10px;">
                                    <div class="col-md-6">
                                      <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                        <div class="row g-1">
                                          <div class="col-md-4">
                                            <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                              style="width: 90px;" />
                                          </div>
                                          <div class="col-md-8">
                                            <div class="card-body">
                                              <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                              <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                  id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 text-end">
                                      <div class="row">
                                        <div class="col-4 text-end">
                                          <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                        </div>
                                        <div class="col-8">
                                          <button class="btn btn-primary"
                                            style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="card mb-3 mt-4"
                                    style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                    <div class="row g-0" style="margin: 10px;">

                                      <div class="col-md-6">
                                        <div class="card-body">
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                            <strong>Location Hyundai Santa fe 2022 </strong></p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                            essence BG 5314</p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                            chauffeur </p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                            pays </p>
                                          <hr>

                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                          style="height: 85% !important;">
                                      </div>
                                      <div class="col-md-12">
                                        <div class="card-body">
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                            <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                            <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                          <hr>

                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                            <strong>Nombres de jours de location </strong> 5 jours</p>
                                          <hr>
                                          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Lomè-Ouaga
                              </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">
                                <div class="card h-100" id="card_compagnie">
                                  <div class="row" style="margin: 10px;">
                                    <div class="col-md-6">
                                      <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                        <div class="row g-1">
                                          <div class="col-md-4">
                                            <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                              style="width: 90px;" />
                                          </div>
                                          <div class="col-md-8">
                                            <div class="card-body">
                                              <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                              <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                  id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 text-end">
                                      <div class="row">
                                        <div class="col-4 text-end">
                                          <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                        </div>
                                        <div class="col-8">
                                          <button class="btn btn-primary"
                                            style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="card mb-3 mt-4"
                                    style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                    <div class="row g-0" style="margin: 10px;">

                                      <div class="col-md-6">
                                        <div class="card-body">
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                            <strong>Location Hyundai Santa fe 2022 </strong></p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                            essence BG 5314</p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                            chauffeur </p>
                                          <hr>
                                          <p class="card-text"
                                            style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                            pays </p>
                                          <hr>

                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                        style="height: 85% !important;">
                                    </div>
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                          <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                          <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                        <hr>

                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Nombres de jours de location </strong> 5 jours</p>
                                        <hr>
                                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-6">
                      <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingO">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseO" aria-expanded="false" aria-controls="flush-collapseO">
                              Lomé-Dapaong
                            </button>
                          </h2>
                          <div id="flush-collapseO" class="accordion-collapse collapse" aria-labelledby="flush-headingO"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                              <div class="card h-100" id="card_compagnie">
                                <div class="row" style="margin: 10px;">
                                  <div class="col-md-6">
                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                      <div class="row g-1">
                                        <div class="col-md-4">
                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                            style="width: 90px;" />
                                        </div>
                                        <div class="col-md-8">
                                          <div class="card-body">
                                            <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                            <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <div class="row">
                                      <div class="col-4 text-end">
                                        <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                      </div>
                                      <div class="col-8">
                                        <button class="btn btn-primary"
                                          style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <div class="card mb-3 mt-4"
                                  style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                  <div class="row g-0" style="margin: 10px;">

                                    <div class="col-md-6">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Location Hyundai Santa fe 2022 </strong></p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                          essence BG 5314</p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                          chauffeur </p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                          pays </p>
                                        <hr>

                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                        style="height: 85% !important;">
                                    </div>
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                          <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                          <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                        <hr>

                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Nombres de jours de location </strong> 5 jours</p>
                                        <hr>
                                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingT">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseT" aria-expanded="false" aria-controls="flush-collapseT">
                              Kara-Lomé
                            </button>
                          </h2>
                          <div id="flush-collapseT" class="accordion-collapse collapse" aria-labelledby="flush-headingT"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                              <div class="card h-100" id="card_compagnie">
                                <div class="row" style="margin: 10px;">
                                  <div class="col-md-6">
                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                      <div class="row g-1">
                                        <div class="col-md-4">
                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                            style="width: 90px;" />
                                        </div>
                                        <div class="col-md-8">
                                          <div class="card-body">
                                            <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                            <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <div class="row">
                                      <div class="col-4 text-end">
                                        <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                      </div>
                                      <div class="col-8">
                                        <button class="btn btn-primary"
                                          style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <div class="card mb-3 mt-4"
                                  style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                  <div class="row g-0" style="margin: 10px;">

                                    <div class="col-md-6">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Location Hyundai Santa fe 2022 </strong></p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                          essence BG 5314</p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                          chauffeur </p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                          pays </p>
                                        <hr>

                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                        style="height: 85% !important;">
                                    </div>
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                          <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                          <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                        <hr>

                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Nombres de jours de location </strong> 5 jours</p>
                                        <hr>
                                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingTh">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTh" aria-expanded="false" aria-controls="flush-collapseTh">
                              Lomè-Ouaga
                            </button>
                          </h2>
                          <div id="flush-collapseTh" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingTh" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                              <div class="card h-100" id="card_compagnie">
                                <div class="row" style="margin: 10px;">
                                  <div class="col-md-6">
                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                      <div class="row g-1">
                                        <div class="col-md-4">
                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"
                                            style="width: 90px;" />
                                        </div>
                                        <div class="col-md-8">
                                          <div class="card-body">
                                            <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                            <p class="card-text mt-2" style="font-size: 13px; "> <i class='bx bx-map'
                                                id="icon_menu" style="color: #219935;"></i> CI,rue 250</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 text-end">
                                    <div class="row">
                                      <div class="col-4 text-end">
                                        <h6 style=" margin-top: 28px; font-size: 13px; color: #219935;">Validé</h6>
                                      </div>
                                      <div class="col-8">
                                        <button class="btn btn-primary"
                                          style="    background: #219935;
                                                            border-color: #219935; margin-top: 15px; font-size: 13px;">5000 FCFA</button>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <div class="card mb-3 mt-4"
                                  style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                  <div class="row g-0" style="margin: 10px;">

                                    <div class="col-md-6">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Location Hyundai Santa fe 2022 </strong></p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Moteur
                                          essence BG 5314</p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;"> Avec
                                          chauffeur </p>
                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">Capital du
                                          pays </p>
                                        <hr>

                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..."
                                        style="height: 85% !important;">
                                    </div>
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -32px; margin-bottom: -8px;">Départ le
                                          <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                        <hr>
                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">Retrait à
                                          <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                        <hr>

                                        <p class="card-text"
                                          style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                          <strong>Nombres de jours de location </strong> 5 jours</p>
                                        <hr>
                                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="comptes-tab-pane" role="tabpanel" aria-labelledby="comptes-tab" tabindex="0">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <h1 style="font-size: 20px;"> Historiques des transanctions</h1>
                    </div>
                    <div class="col-md-6">
                     <div class="row mb-4">
                      <div class="col-md-6">
                        <p> <strong> Solde  |</strong> 20 000</p>
                      </div>
                      <div class="col-md-6 text-end">
                        <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                        <button class="btn btn-primary" style="background-color: rgb(33 153 53);
                                      border-color:rgb(33 153 53);  margin-top: -8px;"><img src="/public/assets/img/icone/plus.png"
                            class="img-fluid " alt="..."> Demander un retrait </button>
                      </a>
                      </div>
                     </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                      
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                        <div class="col-md-12 mb-4" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div class="row">
                            <div class="col-md-8">
                              <p style="font-size: 17px;font-weight: 600;">Paiement pour la location de Toyota yaris </p>
                            </div>
                            <div class="col-md-4">
                              <p><img src="/public/assets/img/icone/calendar.png" alt=""> 20-10-2023 </p>
                            </div>
                          </div>
                          <p>Paiement pour la location de Toyota yaris </p>
                          <div class="row mb-2">
                            <div class="col-md-8">
                              <p>Montant | <strong> <img src="/public/assets/img/icone/circle.png" alt="">  12000 FCFA</strong></p>
                            </div>
                            <div class="col-md-4">
                              <button class="btn btn-primary" style=" background: #219935; border-color: #219935;"> Solde : 12000 F</button>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="collaborateur-tab-pane" role="tabpanel" aria-labelledby="collaborateur-tab" tabindex="0">
              <div class="row mt-5">
                 <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f6f8fb; padding: 16px; border-radius: 5px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 140px;" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">JOE Doe</h5>
                          <p class="card-text">+000 0000000000</p>
                          <p class="card-text"><small class="text-muted">loren ipsun dalor</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f6f8fb; padding: 16px; border-radius: 5px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 140px;" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">JOE Doe</h5>
                          <p class="card-text">+000 0000000000</p>
                          <p class="card-text"><small class="text-muted">loren ipsun dalor</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f6f8fb; padding: 16px; border-radius: 5px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 140px;" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">JOE Doe</h5>
                          <p class="card-text">+000 0000000000</p>
                          <p class="card-text"><small class="text-muted">loren ipsun dalor</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f6f8fb; padding: 16px; border-radius: 5px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 140px;" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">JOE Doe</h5>
                          <p class="card-text">+000 0000000000</p>
                          <p class="card-text"><small class="text-muted">loren ipsun dalor</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End Portfolio Details Section -->



</main>
<!-- End #main -->


<Footer></Footer></template>
<style></style>