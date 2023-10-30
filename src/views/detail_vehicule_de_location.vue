<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Location de véhicule</li>
            <li>Toyota yaris 2022</li>

          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">
  
              <div class="row no-gutters mt-4">
               
                <div class="col-md-5">
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                    <div class="col">
                        <div class="card border-0" style="background :#219935 ;"> 
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Marque </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Toyota</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#F77F00 ;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Modéle </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Yaris</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#3987FB ;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Année </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#FFD700 ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Moteur </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Essence</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#FF5733 ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 13px; font-weight: 700;"> Immatriculation </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">BG 25152</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#665D1E ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Transmission </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Automatique</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-6">
                            <p>Montant</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935;">    50 000 FCFA</button>
                        </div>
                         
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <p>Option chauffeur</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935;"><i class="bx bx-plus"></i>   50 000 FCFA</button>
                        </div>
                         
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <p>Intérieur du pays</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935;"><i class="bx bx-plus"></i>   50 000 FCFA</button>
                        </div>
                         
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-12 mt-4 text-start">
                                <!-- Button trigger modal -->
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  style="
                                    background-color: #219935;
                                    border-color: #219935;
                                  "
                                  data-bs-toggle="modal"
                                  :data-bs-target="'#exampleModal' + i"
                                >
                                  Reserver
                                </button>

                                <!-- Modal -->
                                <div
                                  class="modal fade"
                                  :id="'exampleModal' + i"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div
                                        class="modal-header"
                                        style="background: #deeee4"
                                      >
                                        <h1
                                          class="modal-title fs-5"
                                          id="exampleModalLabel"
                                          style="font-size: 17px !important"
                                        >
                                          Réservation de véhicule
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form
                                          class="row g-3 needs-validation"
                                          novalidate
                                          @submit.prevent="reserver(car)"
                                          id="reservationForm"
                                        >
                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Nom & prénoms</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="name"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Téléphone</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="phone"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Marque</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.vehicule"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Immatriculation</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.serie_vehicule"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Modèle</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.modele"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Moteur</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.moteur"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Transmission</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              :value="car.boite"
                                              required
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Avec chauffeur</label
                                            >
                                            <div class="form-check">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="gridRadios"
                                                id="gridRadios2"
                                                value="Oui"
                                                @click="toggleChauffeur(1)"
                                                v-model="avecChauffeur"
                                                :checked="avecChauffeur"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Sans chauffeur</label
                                            >
                                            <div class="form-check">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="gridRadios"
                                                id="gridRadios1"
                                                value="Non"
                                                @click="toggleChauffeur(2)"
                                                v-model="sansChauffeur"
                                                :checked="sansChauffeur"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Capital du pays</label
                                            >
                                            <div class="form-check">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="gridRadios"
                                                id="gridRadios4"
                                                value="Non"
                                                @click="togglePays(3)"
                                                v-model="capitalPays"
                                                :checked="capitalPays"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Intérieur du pays</label
                                            >
                                            <div class="form-check">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="gridRadios"
                                                id="gridRadios5"
                                                value="Oui"
                                                @click="togglePays(4)"
                                                v-model="interieurPays"
                                                :checked="interieurPays"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Date de Retrait</label
                                            >
                                            <input
                                              type="date"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="dateRetrait"
                                              required
                                            />
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Heure de Retrait</label
                                            >
                                            <input
                                              type="time"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="heureRetrait"
                                              required
                                            />
                                          </div>
                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Lieu du Retrait</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="lieuRetrait"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Date de retour</label
                                            >
                                            <input
                                              type="date"
                                              class="form-control"
                                              id="validationCustom01"
                                              v-model="dateRetour"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Permis de conduire</label
                                            >
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="fileInput"
                                              @change="handleFileChange"
                                              required
                                            />
                                          </div>

                                          <div class="col-12 text-center">
                                            <button
                                              class="btn btn-primary"
                                              type="submit"
                                              style="
                                                background: #219935;
                                                border-color: #219935;
                                              "
                                            >
                                              Réserver
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935; margin-top: 20px;">Reserver</button>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style="background: #8b8b8b; border-color: #efefef;  width: 70px !important;  height: 70px; border-radius: 50%;"> <img src="" alt="logo" style=" width: 70px !important;  height: 70px; border-radius: 50%;"> </button>
                        </div>
                        
                         
                    </div>
                </div>
                <div class="col-md-7">
                    <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                    <div class="row mt-4">
                        <div class="col-md-2"></div>
                    <div class="col-md-8" style="margin-top: 14px;">
                        <div class="row mt-4">
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    </div>
                </div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->

       <!-- ======= Expertise et conseils en immobiliers Section ======= -->
     <section id="features" class="features" style="margin-top: -60px;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2 style="    font-size: 22px;
    color: black;">Véhicule de la même compagnie </h2>
              

            </div>
          </div>

        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
              <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
              </a>
              <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
               2000 FCFA
             </button>


              <div class="card-body">
                <router-link to="/details_vente_engin">
                  <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                     
                  </div>
                </router-link>
               
               
              </div>
            </div>
          </div>
          <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
            <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
            </a>
            <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
            2000 FCFA
            </button>


            <div class="card-body">
                <router-link to="/details_vente_engin">
                <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                    
                </div>
                </router-link>
            
            
            </div>
            </div>
            </div>
            <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
            <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
            </a>
            <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
            2000 FCFA
            </button>


            <div class="card-body">
                <router-link to="/details_vente_engin">
                <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                    
                </div>
                </router-link>
            
            
            </div>
            </div>
            </div>
            <div class="col">

                <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
                <a v-bind:href="'/details_vente_engin'">
                    <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
                </a>
                <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
                2000 FCFA
                </button>


                <div class="card-body">
                    <router-link to="/details_vente_engin">
                    <div class="row">
                        <div class="col-md-12">    
                            <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                        </div>
                        
                    </div>
                    </router-link>
                
                
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>



</template>

<style>
</style>