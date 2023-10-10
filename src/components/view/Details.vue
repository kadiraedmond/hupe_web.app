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
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Programmes</button>
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
                        <div class="card h-100" id="card_compagnie">
                            <div class="card-body">
                                 <div class="row">
                                  <div class="col-md-6  mt-2">
                                      <button class="btn btn-primary mb-2" style="    background-color: #219935;
                                       border-color: #219935;"> 5000 FCFA</button>
                                    </div>
                                    <div class="col-md-6">
                                      
                                    </div>
                                   

                                    <div class="col-md-6 mt-2">
                                        <p> <strong>Lieu de départ  |</strong> lorenipsun</p>
                                    </div>

                                    <div class="col-md-6 mt-2">
                                        <p><strong>Destinations  |</strong>  lorenipsun</p>
                                    </div>

                                    <div class="col-md-6  mt-2">
                                      <p><strong> Heure de départ  |</strong> 9h15min</p>
                                     </div>

                                    <div class="col-md-6  mt-2">
                                        <p><strong>Convocation  |</strong> 8h55min</p>
                                    </div>

                                    

                                    <div class="col-md-6 mt-3">
                                        <p><strong>Escale | </strong> lorenipsun</p>
                                    </div>
                                   
                                     
                                    <div class="col-md-6 mt-3">
                                        <p><strong>Jours de voyage  |</strong> lmfkdfdkf</p>
                                    </div>
                                    <div class="col-md-12 text-center">
                                      <a v-bind:href="'/formulaire_location'" id="a_compagnie">
                                       <button class="btn btn-primary w-50" style="    background: #219935;
                                       border-color: #219935;">Reserver</button>
                                       </a>
                                    </div>
 
                                 </div>
                            </div>            
                        </div>

                        
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100" id="card_compagnie">
                            <div class="card-body">
                                 <div class="row">
                                  <div class="col-md-6  mt-2">
                                      <button class="btn btn-primary mb-2" style="    background-color: #219935;
                                       border-color: #219935;"> 5000 FCFA</button>
                                    </div>
                                    <div class="col-md-6">
                                      
                                    </div>
                                   

                                    <div class="col-md-6 mt-2">
                                        <p> <strong>Lieu de départ  |</strong> lorenipsun</p>
                                    </div>

                                    <div class="col-md-6 mt-2">
                                        <p><strong>Destinations  |</strong>  lorenipsun</p>
                                    </div>

                                    <div class="col-md-6  mt-2">
                                      <p><strong> Heure de départ  |</strong> 9h15min</p>
                                     </div>

                                    <div class="col-md-6  mt-2">
                                        <p><strong>Convocation  |</strong> 8h55min</p>
                                    </div>

                                    

                                    <div class="col-md-6 mt-3">
                                        <p><strong>Escale | </strong> lorenipsun</p>
                                    </div>
                                   
                                     
                                    <div class="col-md-6 mt-3">
                                        <p><strong>Jours de voyage  |</strong> lmfkdfdkf</p>
                                    </div>
                                    <div class="col-md-12 text-center">
                                      <a v-bind:href="'/formulaire_location'" id="a_compagnie">
                                       <button class="btn btn-primary w-50" style="    background: #219935;
                                       border-color: #219935;">Reserver</button>
                                       </a>
                                    </div>
 
                                 </div>
                            </div>            
                        </div>

                        
                    </div>
                     
                </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
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
                                                   Lieu de départ | <strong> Lomé </strong></p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Déstinations | <strong>kara </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Heure de départ | <strong>18h45min </strong> </p>
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
                                                     Convocation |  <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Escale |   <strong>Blitta </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Jours de voyages |   <strong>Mardi</strong></p>
                                                  
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
                                                   Lieu de départ | <strong> Lomé </strong></p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Déstinations | <strong>kara </strong>  </p>
                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px;  margin-top: -8px; margin-bottom: -8px;">
                                                    Heure de départ | <strong>18h45min </strong> </p>
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
                                                     Convocation |  <strong>12h 43 min</strong> </p>

                                                  <hr>
                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                     Escale |   <strong>Blitta </strong> 
                                                    </p>
                                                  <hr>

                                                  <p class="card-text"
                                                    style="font-size: 13px; margin-top: -8px; margin-bottom: -8px;">
                                                    Jours de voyages |   <strong>Mardi</strong></p>
                                                  
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