<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>

  <main id="main">


<!-- ======= Portfolio Details Section ======= -->
<section id="portfolio-details" class="portfolio-details" style="margin-top: 0px;">
    <img src="/public/assets/img/car2.jpg" alt="" class="img-fluid w-100" style="height: 380px; object-fit: cover;">
</section>
  <!-- End Portfolio Details Section -->

<section id="faq" class="faq" style="margin-top: -70px;">
  <div class="container" data-aos="fade-up">
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 100px;"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title" style="font-size: 16px">BG compagnies</h5>
                      <p class="card-text" style="font-size: 15px">Lorem ipsum dolor sit amet, consectetur </p>
                      
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
        
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
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Véhicules</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Promotion</button>
            </li>
            
            <!-- <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li> -->
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="politique-tab" data-bs-toggle="tab" data-bs-target="#politique-tab-pane" type="button" role="tab" aria-controls="politique-tab-pane" aria-selected="false">Politique</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="apropos-tab" data-bs-toggle="tab" data-bs-target="#apropos-tab-pane" type="button" role="tab" aria-controls="apropos-tab-pane" aria-selected="false">A propos</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              
              <div class="row mt-4">
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
                              <div class="col-md-6">
                                <p class="card-text"> <strong>Caterpillar  2022 </strong></p>
                              </div>
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
                                              name="name"
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
                                              name="phone"
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
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Catégorie</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Modèle</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Etat</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              
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
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Kilométrage</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                               
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
                                             name="dateRetrait"
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
                                              name="heureRetrait"
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
                                              name="lieuRetrait"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              > Date de retour</label
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
                              <div class="col-md-6">
                                <p class="card-text"> <strong>Caterpillar  2022 </strong></p>
                              </div>
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
                                              name="name"
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
                                              name="phone"
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
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Catégorie</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Modèle</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-6">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Etat</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                              
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
                                               
                                              disabled
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              >Kilométrage</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="validationCustom01"
                                               
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
                                             name="dateRetrait"
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
                                              name="heureRetrait"
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
                                              name="lieuRetrait"
                                              required
                                            />
                                          </div>

                                          <div class="col-md-12">
                                            <label
                                              for="validationCustom01"
                                              class="form-label"
                                              > Date de retour</label
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
                        <div class="card border-0" style="background:#f3f4f6; padding: 6px;">
                          <div class="row" style="padding: 6px;">
                            <div class="col-md-12 d-flex">
                              <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                                style=" width: 25px; height: 25px; margin-top: 6px;">
                              <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                              <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                                  src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                            </div>
                          </div>
                          <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;box-shadow: none; background: transparent; ">
                            <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px; border-color: #a6a6a6;">
                              <img src="/public/assets/img/car3.jpg" class="card-img-top" alt="..."
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
                        <div class="card border-0" style="background:#f3f4f6; padding: 6px;">
                          <div class="row" style="padding: 6px;">
                            <div class="col-md-12 d-flex">
                              <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                                style=" width: 25px; height: 25px; margin-top: 6px;">
                              <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                              <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                                  src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                            </div>
                          </div>
                          <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;box-shadow: none; background: transparent; ">
                            <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px; border-color: #a6a6a6;">
                              <img src="/public/assets/img/car3.jpg" class="card-img-top" alt="..."
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
                        <div class="card border-0" style="background:#f3f4f6; padding: 6px;">
                          <div class="row" style="padding: 6px;">
                            <div class="col-md-12 d-flex">
                              <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                                style=" width: 25px; height: 25px; margin-top: 6px;">
                              <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                              <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                                  src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                            </div>
                          </div>
                          <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621;box-shadow: none; background: transparent; ">
                            <a v-bind:href="'/detail'" style="border: 1px solid; border-radius: 5px; border-color: #a6a6a6;">
                              <img src="/public/assets/img/car3.jpg" class="card-img-top" alt="..."
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
                    <div class="col-md-6">
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
                                                    Reservation   | <strong style="color:#219935">En attente </strong> </p>
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
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                    </div>
                    <div class="col-md-6">
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
                                                    Reservation   | <strong style="color:#219935">En attente </strong> </p>
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
                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                <div class="row mt-5">
                    <div class="col-md-12">
                        <div class="card h-100" id="card_compagnie">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="card-text"> <strong>Location Hyundai Santa fe 2022 </strong></p>
                                    </div>
                                    <div class="col-md-6 text-end">
                                        <button class="btn btn-primary" style="    background: #219935;
                                        border-color: #219935;">5000 FCFA</button>
                                    </div>
                                </div>
                                <hr>
                             
                               
                              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                            </div>            
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="politique-tab-pane" role="tabpanel" aria-labelledby="politique-tab" tabindex="0">
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

                         
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="tab-pane fade" id="apropos-tab-pane" role="tabpanel" aria-labelledby="apropos-tab" tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                          <div class="row">
                            <div class="col-md-12">
                              <p><strong>Raison sociale |</strong>   GB Compagnie</p>

                              <p>  <strong> Responsable |</strong>   Mr joe</p>
                            </div>

                            <div class="row row-cols-1 row-cols-md-4 mb-4 g-4" style="margin-top: -5px;">
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/mail.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">compagniegb@gmail.com</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/web.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">compagniegb.com</h5>
                                    <h5 class="card-title" style="font-size: 14px">+000 000 000 00</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/maps.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">Jean Dupont,10 Rue des Palmiers ,Quartier des Cocotiers</h5>
                                   </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="card h-100 text-center border-0">
                                  <div class="row mt-4" style="justify-content: center;">
                                    <img src="/public/assets/img/icone/location.png" class="img-fluid" alt="..." style="width: 64px">
                                  </div>
                                  
                                  <div class="card-body">
                                    <h5 class="card-title" style="font-size: 14px">1223.2522.55552</h5>
                                   </div>
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
          </div>
      </div>          
    </div>    
  </div>
</section>
<!-- End Portfolio Details Section -->

 
    </main>
    <!-- End #main -->
   

  <Footer></Footer>
    
</template>
<style>
</style>