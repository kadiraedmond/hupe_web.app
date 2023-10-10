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
        <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 160px;"/>
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
                          <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..." style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                  <p class="card-text" style="font-size: 13px;"> <strong>Hyundai | Santafé | 2022 </strong></p>
                              </div>
                              <div class="col-md-6 text-end">
                                  <button class="btn btn-primary" style=" background-color: #219935;
                                  border-color: #219935; font-size: 13px;"> 5000 FCFA</button>
                              </div>
                               
                              <div class="col-md-12 mt-3">
                                  <p class="card-text" style="font-size: 13px;"> Essence | Automobile | CB2123</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text" style="font-size: 13px;">Location simple |   <strong> 5000 CFA </strong></p>
                                  <p class="card-text" style="font-size: 13px;">Location avec chauffeur |   <strong> 15000 CFA </strong></p>
                                  <p class="card-text" style="font-size: 13px;">Location vers l'intérieur |   <strong> 16000 CFA </strong></p>
                              </div>

                            

                              <div class="col-md-12 mt-4 text-start">
                                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                                  <button class="btn btn-primary w-50" style="    background-color: #219935;
                                  border-color: #219935; font-size: 13px;"> Reserver</button>
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
                          <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start" alt="..." style="height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                  <p class="card-text" style="font-size: 13px;"> <strong>Hyundai | Santafé | 2022 </strong></p>
                              </div>
                              <div class="col-md-6 text-end">
                                  <button class="btn btn-primary" style=" background-color: #219935;
                                  border-color: #219935; font-size: 13px;"> 5000 FCFA</button>
                              </div>
                               
                              <div class="col-md-12 mt-3">
                                  <p class="card-text" style="font-size: 13px;"> Essence | Automobile | CB2123</p>
                              </div>
                              <div class="col-md-12 mt-3">
                                  <p class="card-text" style="font-size: 13px;">Location simple |   <strong> 5000 CFA </strong></p>
                                  <p class="card-text" style="font-size: 13px;">Location avec chauffeur |   <strong> 15000 CFA </strong></p>
                                  <p class="card-text" style="font-size: 13px;">Location vers l'intérieur |   <strong> 16000 CFA </strong></p>
                              </div>

                            

                              <div class="col-md-12 mt-4 text-start">
                                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                                  <button class="btn btn-primary w-50" style="    background-color: #219935;
                                  border-color: #219935; font-size: 13px;"> Reserver</button>
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
              <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col">
                    <div class="card" style="background:#f7f7f78a;">
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