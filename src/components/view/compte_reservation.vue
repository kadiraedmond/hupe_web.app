<script setup>
import Vehicule from "@/components/CompteReservation/Vehicule.vue";
import Promotion from "@/components/CompteReservation/Promotion.vue";
import Reservation from "@/components/CompteReservation/Reservation.vue";
import Demande from "@/components/CompteReservation/Demande.vue";
import Offre from "@/components/CompteReservation/Offre.vue";
import Collaborateur from "@/components/CompteReservation/Collaborateur.vue";
import Apropos from "@/components/CompteReservation/Apropos.vue";
import Compte from "@/components/CompteReservation/Compte.vue";
import Politique from "@/components/CompteReservation/Politique.vue";

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
                  <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 160px;" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">BG compagnies</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur </p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur </p>
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
                <button class="nav-link" id="collaborateur-tab" data-bs-toggle="tab"
                  data-bs-target="#collaborateur-tab-pane" type="button" role="tab" aria-controls="collaborateur-tab-pane"
                  aria-selected="false">Collaborateurs</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="apropos-tab" data-bs-toggle="tab" data-bs-target="#apropos-tab-pane"
                  type="button" role="tab" aria-controls="apropos-tab-pane" aria-selected="false">A propos</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="voiture-tab-pane" role="tabpanel" aria-labelledby="voiture-tab"
                tabindex="0">
               <Vehicule/>
              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                  <div class="col">
                    <div class="card" style="background:#a6a6a621; padding: 6px;">
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
                    <div class="card" style="background:#a6a6a621;padding: 6px;">
                      <div class="row" style="padding: 6px;">
                        <div class="col-md-12 d-flex">
                          <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                            style=" width: 25px; height: 25px; margin-top: 6px;">
                          <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                          <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                              src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                        </div>
                      </div>
                      <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621; box-shadow: none; background: transparent;">
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
                    <div class="card" style="background:#a6a6a621;padding: 6px;">
                      <div class="row" style="padding: 6px;">
                        <div class="col-md-12 d-flex">
                          <img src="/public/assets/img/icone/car.png" class="img-fluid" alt="..."
                            style=" width: 25px; height: 25px; margin-top: 6px;">
                          <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px;"> Compagagnie test</h6>
                          <p style="font-size: 12px;  margin-left: 5px;  margin-top: 6px;"><img
                              src="/public/assets/img/icone/map.png" class="img-fluid" alt="..."> logone</p>

                        </div>
                      </div>
                      <div class="card h-100" id="compagnie_card" style="padding: 6px; background:#a6a6a621; box-shadow: none; background: transparent;">
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
                <Reservation/>
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
                                    <li class="mt-3"> <img src="/public/assets/img/icone/yes.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Mise en avanr d'une destination ou d'un véhicule en location sur la page d'accueil</li>
                                  </ul>
                                  <h4 style="font-size: 18px; color: #219935; text-align: center;">Commission sur le chiffre d'affaires</h4>
                                  <div class="row">
                                    <div class="col-md-12 text-center mb-3">
                                      <button type="button" class=" btn btn-primary text-center" style="background: white; border-color: #219935;"> <h5 class="card-title pricing-card-title " style="color:#219935">20%</h5></button>
                                    </div>
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
                                    <li class="mt-3"> <img src="/public/assets/img/icone/no.png" alt="" class="img-fluid" style=" margin-top: -4px;">  Mise en avanr d'une destination ou d'un véhicule en location sur la page d'accueil</li>
                                  </ul>
                                  <h4 style="font-size: 18px; color: #219935; text-align: center;">Commission sur le chiffre d'affaires</h4>
                                  <div class="row">
                                    <div class="col-md-12 text-center mb-3">
                                      <button type="button" class=" btn btn-primary text-center" style="background: white; border-color: #219935;"> <h5 class="card-title pricing-card-title " style="color:#219935">15%</h5></button>
                                    </div>
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
                 <Politique/>
              </div>

              <div class="tab-pane fade" id="apropos-tab-pane" role="tabpanel" aria-labelledby="apropos-tab" tabindex="0">
                 <Apropos/>
              </div>

              

            <div class="tab-pane fade" id="comptes-tab-pane" role="tabpanel" aria-labelledby="comptes-tab" tabindex="0">
               <Compte/>
            </div>

            <div class="tab-pane fade" id="collaborateur-tab-pane" role="tabpanel" aria-labelledby="collaborateur-tab" tabindex="0">
               <Collaborateur/>
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