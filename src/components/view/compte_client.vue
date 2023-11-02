<script setup>
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
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Activité</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Post</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Comptes</button>
            </li>
            <!-- <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tarifs</button>
            </li> -->
            <!-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="politique-tab" data-bs-toggle="tab" data-bs-target="#politique-tab-pane" type="button" role="tab" aria-controls="politique-tab-pane" aria-selected="false">Politique</button>
            </li> -->
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="apropos-tab" data-bs-toggle="tab" data-bs-target="#apropos-tab-pane" type="button" role="tab" aria-controls="apropos-tab-pane" aria-selected="false">A propos</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <div class="row mt-4">
                <div class="col-md-12 mt-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                        <a href="" class="mt-4">
                                            <img src="/public/assets/img/car.png" class="img-fluid w-25" alt="...">
                                        </a>
                                        
                                        <div class="card-body">
                                            <h5 class="card-title" style="font-size: 17px;">Location de voiture</h5>
                                            <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12  ">
                                        <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-time"></i>
                                                </div>
                                                <div class="col-4">
                                                    En attente
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>
                                        </boutton>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Validé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: red; border-color: red;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-x-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Annulé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>  
                                         </boutton>
                                    </div>
                                    <div class="col-md-12   mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #3987FB; border-color: #3987FB;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class='bx bx-check-square'></i>
                                                </div>
                                                <div class="col-4">
                                                    Confirmer
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #931D96; border-color: #931D96;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Utilisé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                       </boutton>
                                    </div>

                                </div> 

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-error-alt'></i>
                                            </div>
                                            <div class="col-4">
                                                En attente de report
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                </boutton>
                                </div>
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-reset' ></i>
                                            </div>
                                            <div class="col-4">
                                                    Reporté
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                    </boutton>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 mt-4">
                            <div class="row" style="margin-top: 50px;">
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                        <a href="" class="mt-4">
                                            <img src="/public/assets/img/bus.png" class="img-fluid w-25" alt="...">
                                        </a>
                                        
                                        <div class="card-body">
                                            <h5 class="card-title" style="font-size: 17px;">Réservation de ticket </h5>
                                            <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12  ">
                                        <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-time"></i>
                                                </div>
                                                <div class="col-4">
                                                    En attente
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>
                                        </boutton>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Validé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: red; border-color: red;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-x-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Annulé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>  
                                         </boutton>
                                    </div>
                                    <div class="col-md-12   mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #3987FB; border-color: #3987FB;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class='bx bx-check-square'></i>
                                                </div>
                                                <div class="col-4">
                                                    Confirmer
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #931D96; border-color: #931D96;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Utilisé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                       </boutton>
                                    </div>

                                </div> 

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-error-alt'></i>
                                            </div>
                                            <div class="col-4">
                                                En attente de report
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                </boutton>
                                </div>
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-reset' ></i>
                                            </div>
                                            <div class="col-4">
                                                    Reporté
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                    </boutton>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 mt-4">
                            <div class="row" style="margin-top: 50px;">
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                        <a href="" class="mt-4">
                                            <img src="/public/assets/img/engin.png" class="img-fluid w-25" alt="...">
                                        </a>
                                        
                                        <div class="card-body">
                                            <h5 class="card-title" style="font-size: 17px;">Location de gros engin</h5>
                                            <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12  ">
                                        <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-time"></i>
                                                </div>
                                                <div class="col-4">
                                                    En attente
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>
                                        </boutton>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Validé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: red; border-color: red;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-x-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Annulé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>  
                                         </boutton>
                                    </div>
                                    <div class="col-md-12   mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #3987FB; border-color: #3987FB;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class='bx bx-check-square'></i>
                                                </div>
                                                <div class="col-4">
                                                    Confirmer
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #931D96; border-color: #931D96;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Utilisé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                       </boutton>
                                    </div>

                                </div> 

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-error-alt'></i>
                                            </div>
                                            <div class="col-4">
                                                En attente de report
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                </boutton>
                                </div>
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-reset' ></i>
                                            </div>
                                            <div class="col-4">
                                                    Reporté
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                    </boutton>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 mt-4">
                            <div class="row" style="margin-top: 50px;">
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                        <a href="" class="mt-4">
                                            <img src="/public/assets/img/engine.png" class="img-fluid w-25" alt="...">
                                        </a>
                                        
                                        <div class="card-body">
                                            <h5 class="card-title" style="font-size: 17px;">Achat d'engin</h5>
                                            <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12  ">
                                        <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-time"></i>
                                                </div>
                                                <div class="col-4">
                                                    En attente
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>
                                        </boutton>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Validé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: red; border-color: red;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-x-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Annulé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div>  
                                         </boutton>
                                    </div>
                                    <div class="col-md-12   mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #3987FB; border-color: #3987FB;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class='bx bx-check-square'></i>
                                                </div>
                                                <div class="col-4">
                                                    Confirmer
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                         </boutton>
                                    </div>
                                    <div class="col-md-12  mt-4">
                                        <boutton class="btn btn-primary  w-100" style="background: #931D96; border-color: #931D96;">
                                            <div class="row">
                                                <div class="col-4">
                                                    <i class="bx bx-check-circle"></i>
                                                </div>
                                                <div class="col-4">
                                                    Utilisé
                                                </div>
                                                <div class="col-4">
                                                   2
                                                </div>
                                            </div> 
                                       </boutton>
                                    </div>

                                </div> 

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #F77F00; border-color: #F77F00;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-error-alt'></i>
                                            </div>
                                            <div class="col-4">
                                                En attente de report
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                </boutton>
                                </div>
                                <div class="col-md-6">
                                    <boutton class="btn btn-primary  w-100" style="background: #219935; border-color: #219935;">
                                        <div class="row">
                                            <div class="col-4">
                                                <i class='bx bx-reset' ></i>
                                            </div>
                                            <div class="col-4">
                                                    Reporté
                                             </div>
                                             <div class="col-4">
                                                   2
                                            </div>
                                        </div> 
                                    </boutton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Faire une publication</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form class="row g-3 needs-validation text-start" novalidate>
                                <div class="col-md-12">
                                    <label for="validationDefault04" class="form-label">Sélectionner un service</label>
                                    <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">Location de véhicules</option>
                                    <option value="">Réservation de ticket de bus</option>
                                    <option value="">Location de gros engin</option>
                                    <option value="">Vente d'engin</option>
                                    </select>
                                </div>
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label">Objet</label>
                              <textarea type="text" class="form-control" id="validationCustom02"  required></textarea>
                               
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label">Entrer votre demande</label>
                              <textarea type="text" class="form-control" id="validationCustom02"  required style="height: 130px;"></textarea>
                               
                            </div>


                          
                          
                            <div class="col-12 text-center">
                              <button class="btn btn-primary" style=" background-color: #219935; border-color: #219935;" type="submit">Envoyer</button>
                            </div>
                          </form>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-6">
                    <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal10" style="background:white !important;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  border: none; ">
                    <div class="row">
                        <div class="col-6">
                           <p style="color:#219935 ;"> frgthyjukilm </p>
                           <p class="text-black"> dvfbghjk </p>
                        </div>
                        <div class="col-6 text-end">
                           <p class="text-black"> Il y a environ 5 minute </p>
                           <p class="text-black"> O reponse </p>
                        </div>
                    </div>
                    
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel10" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel10">Reponses des compagnies </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          
                          <div class="col-md-12 mb-3">
                            <div class="card w-100">
                            <div class="card-header">
                                <div class="row w-100" style="background:transparent">
                                        <div class="col-md-12">
                                        <div class="card mb-3 border-0" style="background:transparent">
                                            <div class="row g-1">
                                            <div class="col-md-12 d-flex">
                                                <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                                                <div class="card-body">
                                                <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                 
                                
                                                </div>
                                            </div>
                                           
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">loren ipsun dolor</li>
                                 
                            </ul>
                            </div>
                          </div>

                          <div class="col-md-12 mb-3">
                            <div class="card w-100">
                            <div class="card-header">
                                <div class="row w-100" style="background:transparent">
                                        <div class="col-md-12">
                                        <div class="card mb-3 border-0" style="background:transparent">
                                            <div class="row g-1">
                                            <div class="col-md-12 d-flex">
                                                <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                                                <div class="card-body">
                                                <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                 
                                
                                                </div>
                                            </div>
                                           
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">loren ipsun dolor</li>
                                 
                            </ul>
                            </div>
                          </div>

                          <div class="col-md-12 mb-3">
                            <div class="card w-100">
                            <div class="card-header">
                                <div class="row w-100" style="background:transparent">
                                        <div class="col-md-12">
                                        <div class="card mb-3 border-0" style="background:transparent">
                                            <div class="row g-1">
                                            <div class="col-md-12 d-flex">
                                                <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                                                <div class="card-body">
                                                <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                                                 
                                
                                                </div>
                                            </div>
                                           
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">loren ipsun dolor</li>
                                 
                            </ul>
                            </div>
                          </div>
                           
                        </div>
                         
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-6">
                    <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal10" style="background:white !important;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  border: none; ">
                    <div class="row">
                        <div class="col-6">
                           <p style="color:#219935 ;"> frgthyjukilm </p>
                           <p class="text-black"> dvfbghjk </p>
                        </div>
                        <div class="col-6 text-end">
                           <p class="text-black"> Il y a environ 5 minute </p>
                           <p class="text-black"> O reponse </p>
                        </div>
                    </div>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel10" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel10">Reponses des compagnies  </h1>
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
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
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
                            class="img-fluid " alt="..."> Recharger </button>
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