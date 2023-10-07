<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>

  <main id="main">


<!-- ======= Portfolio Details Section ======= -->
<section id="portfolio-details" class="portfolio-details" style="margin-top: 0px;">
    <img src="./public/assets/img/cari.jpg" alt="" class="img-fluid w-100" style="height: 380px; object-fit: cover;">
</section>
  <!-- End Portfolio Details Section -->

<section id="faq" class="faq" style="margin-top: -70px;">
  <div class="container" data-aos="fade-up">
    <div class="row g-4">
        <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 160px;"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">BG compagnies</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur </p>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur  </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-md-6 text-end">
          <a v-bind:href="'/dashboard'" id="a_compagnie">
            <button class="btn btn-primary" style="background: #219935;border-color: #219935;"> Tableau de bord</button>
          </a>
          
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
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Réservations</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li>
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
                          <img src="./public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..." style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                  <p class="card-text"> <strong>Hyundai 2022 </strong></p>
                              </div>
                              <div class="col-md-6 text-end">
                                  <button class="btn btn-primary" style="    background-color: #219935;
                                  border-color: #219935;"> 5000 FCFA</button>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Modèle : </strong> Santafé</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Essence : </strong> Automobile</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Immatriculation : </strong> BG 5282</p>
                              </div>

                            

                              <div class="col-md-12 mt-4 text-start">
                                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                                  <button class="btn btn-primary w-50" style="    background-color: #219935;
                                  border-color: #219935;"> Reserver</button>
                                </a>
                                  
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
                          <img src="./public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..." style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                  <p class="card-text"> <strong>Hyundai 2022 </strong></p>
                              </div>
                              <div class="col-md-6 text-end">
                                  <button class="btn btn-primary" style="    background-color: #219935;
                                  border-color: #219935;"> 5000 FCFA</button>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Modèle : </strong> Santafé</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Essence : </strong> Automobile</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text"> <strong>Immatriculation : </strong> BG 5282</p>
                              </div>

                            

                              <div class="col-md-12 mt-4 text-start">
                                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                                  <button class="btn btn-primary w-50" style="    background-color: #219935;
                                  border-color: #219935;"> Reserver</button>
                                </a>
                                  
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
              <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                <div class="col">

                  <div class="card h-100" id=compagnie_card>
                    <a href="detail_compagnie.html">
                      <img src="./public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 10px 10px;">
                    </a>
                    <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                    <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                    <button class="btn btn-primary" id="badges01"> <strong> 93% </strong> (500 +)</button>

                    <div class="card-body">
                      <a v-bind:href="'/detail'" id="a_compagnie">
                        <div class="row">
                          
                          <div class="col-md-8">
                            <h5 class="card-title" style="font-size: 15px;">Hyundai 2022</h5>
                          </div>
                          <div class="col-md-4 text-end">
                          <p>Santafé</p>
                          </div>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div class="col">

                  <div class="card h-100" id=compagnie_card>
                    <a href="detail_compagnie.html">
                      <img src="./public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 10px 10px;">
                    </a>
                    <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                    <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                    <button class="btn btn-primary" id="badges01"> <strong> 93% </strong> (500 +)</button>

                    <div class="card-body">
                      <a href="detail_compagnie.html" id="a_compagnie">
                        <div class="row">
                          
                          <div class="col-md-8">
                            <h5 class="card-title" style="font-size: 15px;">Hyundai 2022</h5>
                          </div>
                          <div class="col-md-4 text-end">
                          <p>Santafé</p>
                          </div>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div class="col">

                  <div class="card h-100" id=compagnie_card>
                    <a href="detail_compagnie.html">
                      <img src="./public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 10px 10px;">
                    </a>
                    <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                    <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                    <button class="btn btn-primary" id="badges01"> <strong> 93% </strong> (500 +)</button>

                    <div class="card-body">
                      <a href="detail_compagnie.html" id="a_compagnie">
                        <div class="row">
                          
                          <div class="col-md-8">
                            <h5 class="card-title" style="font-size: 15px;">Hyundai 2022</h5>
                          </div>
                          <div class="col-md-4 text-end">
                          <p>Santafé</p>
                          </div>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div class="col">

                  <div class="card h-100" id=compagnie_card>
                    <a href="detail_compagnie.html">
                      <img src="./public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 10px 10px;">
                    </a>
                    <button class="btn btn-primary" id="badges"> <s> 5000 FCFA </s></button>
                    <button class="btn btn-primary" id="badges0"> 2000 FCFA</button>
                    <button class="btn btn-primary" id="badges01"> <strong> 93% </strong> (500 +)</button>

                    <div class="card-body">
                      <a href="detail_compagnie.html" id="a_compagnie">
                        <div class="row">
                          
                          <div class="col-md-8">
                            <h5 class="card-title" style="font-size: 15px;">Hyundai 2022</h5>
                          </div>
                          <div class="col-md-4 text-end">
                          <p>Santafé</p>
                          </div>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <div class="row mt-5">
                    <div class="col-md-6">
                            <div class="card h-100" id="card_compagnie">
                              <div class="row" style="margin: 10px;">
                                <div class="col-md-6">
                                  <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                    <div class="row g-1">
                                      <div class="col-md-4">
                                        <img src="./public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                          <p class="card-text mt-2" style="font-size: 14px; "> <i class='bx bx-map' id="icon_menu"
                                            style="color: #219935;"></i> CI,rue 250</p>
                        
                                        </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                    <div class="row">
                                        <div class="col-4 text-end">
                                            <h6 style=" margin-top: 28px; color: #219935;">Validé</h6>
                                        </div>
                                        <div class="col-8">
                                            <button class="btn btn-primary" style="    background: #219935;
                                  border-color: #219935; margin-top: 15px;">5000 FCFA</button>
                                        </div>
                                    </div>
                                  
                                </div>
                              </div>
                              <div class="card mb-3 mt-4" style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                <div class="row g-0" style="margin: 10px;">
                                 
                                  <div class="col-md-6">
                                    <div class="card-body">
                                      <p class="card-text"> <strong>Location Hyundai Santa fe 2022 </strong></p>
                                      <hr>
                                      <p class="card-text"> Moteur essence   BG 5314</p>
                                      <hr>
                                      <p class="card-text"> Avec chauffeur </p>
                                      <hr>
                                      <p class="card-text">Capital du pays </p>
                                     
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <img src="./public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                  </div>
                                  <div class="col-md-12">
                                    <hr>
                                      <p class="card-text">Départ le  <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                      <hr>
                                      <p class="card-text">Retrait à  <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                      <hr>

                                      <p class="card-text">  <strong>Nombres de jours de location </strong> 5 jours</p>
                                      <hr>
                                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                  </div>
                                </div>
                              </div>
                    
                          </div>
                    </div>
                    <div class="col-md-6">
                            <div class="card h-100" id="card_compagnie">
                              <div class="row" style="margin: 10px;">
                                <div class="col-md-6">
                                  <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                    <div class="row g-1">
                                      <div class="col-md-4">
                                        <img src="./public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h5 class="card-title" style="font-size: 15px;">Koudi</h5>
                                          <p class="card-text mt-2" style="font-size: 14px; "> <i class='bx bx-map' id="icon_menu"
                                            style="color: #219935;"></i> CI,rue 250</p>
                        
                                        </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                    <div class="row">
                                        <div class="col-4 text-end">
                                            <h6 style=" margin-top: 28px; color: #219935;">Validé</h6>
                                        </div>
                                        <div class="col-8">
                                            <button class="btn btn-primary" style="    background: #219935;
                                  border-color: #219935; margin-top: 15px;">5000 FCFA</button>
                                        </div>
                                    </div>
                                  
                                </div>
                              </div>
                              <div class="card mb-3 mt-4" style=" margin: 10px; margin-top: -10px !important; width:98% ;">
                                <div class="row g-0" style="margin: 10px;">
                                 
                                  <div class="col-md-6">
                                    <div class="card-body">
                                      <p class="card-text"> <strong>Location Hyundai Santa fe 2022 </strong></p>
                                      <hr>
                                      <p class="card-text"> Moteur essence   BG 5314</p>
                                      <hr>
                                      <p class="card-text"> Avec chauffeur </p>
                                      <hr>
                                      <p class="card-text">Capital du pays </p>
                                     
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <img src="./public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                  </div>
                                  <div class="col-md-12">
                                    <hr>
                                      <p class="card-text">Départ le  <strong>Jours du voyages : </strong> à <strong>12h 43 min</strong></p>

                                      <hr>
                                      <p class="card-text">Retrait à  <strong>Aéroport : </strong> retour le <strong>2023-07-29</strong></p>
                                      <hr>

                                      <p class="card-text">  <strong>Nombres de jours de location </strong> 5 jours</p>
                                      <hr>
                                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
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
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                 </p>
                               
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


<section id="features" class="features"  style="margin-top: -90px;">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-5" style="margin-top: 80px !important;">
          <h1 id="titre_new">Inscrivez vous à notre Newsletter</h1>
           
          <div class="col-md-12 text-center mt-5">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="email" placeholder="Votre adresse e-mail" aria-label="Search">
                  <button class="btn btn-outline-success" style="background: #219935 !important;
                  border-color: #219935 !important;
                  color: white;" type="submit">S'inscrire</button>
                </form>
              </div>
              <div class="col-md-4"></div>
            </div>
            
          </div>
         
           
        </div>
         
      </div>
    </div>
  </section>
  
    </main>
    <!-- End #main -->
   

  <Footer></Footer>
    
</template>
<style>
</style>