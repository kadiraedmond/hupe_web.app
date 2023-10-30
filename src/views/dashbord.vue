<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <main id="main">
    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="row " style=" position: fixed; top: 100px">
              <div class="col-md-12">
                <div class="card" style="width: 18rem;">
                  
                  <div class="card-body">
                    <h5 class="card-title">Gg partenaire</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet. Vel debitis ipsam et voluptatum quidem sed voluptates quaerat.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style="background: #219935;color: white;"> <a v-bind:href="'/dashboard'" id="a_compagnie"> Tableau de bord </a></li>
                    <li class="list-group-item"><a v-bind:href="'/activite'" id="a_compagnie"> Activités </a></li>
                    <li class="list-group-item"><a v-bind:href="'/dashboard'" id="a_compagnie"> Comptes </a></li>
                    <li class="list-group-item"><a v-bind:href="'/dashboard'" id="a_compagnie"> Collaborateurs </a></li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 mt-4">
            <div class="row">
              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0" style="background: #F77F00 !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets en attente
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0" style="background: #9747FF !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets validés
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0" style="background: #3987FB !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets confirmés
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0"  style="background: #931D96 !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets annulés
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0" style="background: #3987FB !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets reportés
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card text-bg-warning mb-3 border-0"  style="background: #FB3232 !important;">
                  
                  <div class="card-body">
                     <div class="row">
                      <div class="col-md-6">
                        <p class="text-white">0 CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button class="btn btn-primary border-0 text-white" style="background: #0000008f; border-radius: 50%;">0</button> Tickets utilisés
                        </p>
                        
                      </div>
                     </div>
                  </div>
                </div>
              </div>


            </div>

            <div class="row gy-4 mt-2">
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
                        <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style="width: 107% !important;">Réservation reportée</button>
                      </li>
                      
                      </div>
                    </div>
                      
                  
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                       <div class="row gy-4 mt-2">
                        <div class="col-lg-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist" style="border: 1px solid; border-color: #efefef; border-radius: 5px;">
                              <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="attente-tab" data-bs-toggle="tab" data-bs-target="#attente-tab-pane" type="button" role="tab" aria-controls="attente-tab-pane" aria-selected="true">En attente</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" id="valide-tab" data-bs-toggle="tab" data-bs-target="#valide-tab-pane" type="button" role="tab" aria-controls="valide-tab-pane" aria-selected="false">Validé</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" id="annule-tab" data-bs-toggle="tab" data-bs-target="#annule-tab-pane" type="button" role="tab" aria-controls="annule-tab-pane" aria-selected="false">annulé</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" id="confirme-tab" data-bs-toggle="tab" data-bs-target="#confirme-tab-pane" type="button" role="tab" aria-controls="confirme-tab-pane" aria-selected="false">Confirmé</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="utlise-tab" data-bs-toggle="tab" data-bs-target="#utlise-tab-pane" type="button" role="tab" aria-controls="utlise-tab-pane" aria-selected="false">Utilisé</button>
                              </li>
                              
                            </ul>
                            <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="attente-tab-pane" role="tabpanel" aria-labelledby="attente-tab" tabindex="0">
                                <div class="row mt-5">
                                      <div class="col-md-12">
                                              <div class="card h-100" id="card_compagnie">
                                                <div class="row" style="margin: 10px;">
                                                  <div class="col-md-6">
                                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                                      <div class="row g-1">
                                                        <div class="col-md-4">
                                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
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
                                                        <hr>
                                                        
                                                      </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                                    </div>
                                                    <div class="col-md-12">
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
                              <div class="tab-pane fade" id="valide-tab-pane" role="tabpanel" aria-labelledby="valide-tab" tabindex="0">
                                <div class="row mt-5">
                                      <div class="col-md-12">
                                              <div class="card h-100" id="card_compagnie">
                                                <div class="row" style="margin: 10px;">
                                                  <div class="col-md-6">
                                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                                      <div class="row g-1">
                                                        <div class="col-md-4">
                                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
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
                                                        <hr>
                                                        
                                                      </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                                    </div>
                                                    <div class="col-md-12">
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
                              <div class="tab-pane fade" id="annule-tab-pane" role="tabpanel" aria-labelledby="annule-tab" tabindex="0">
                                  <div class="row mt-5">
                                      <div class="col-md-12">
                                              <div class="card h-100" id="card_compagnie">
                                                <div class="row" style="margin: 10px;">
                                                  <div class="col-md-6">
                                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                                      <div class="row g-1">
                                                        <div class="col-md-4">
                                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
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
                                                        <hr>
                                                        
                                                      </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                                    </div>
                                                    <div class="col-md-12">
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
                              <div class="tab-pane fade" id="confirme-tab-pane" role="tabpanel" aria-labelledby="confirme-tab" tabindex="0">
                                <div class="row mt-5">
                                      <div class="col-md-12">
                                              <div class="card h-100" id="card_compagnie">
                                                <div class="row" style="margin: 10px;">
                                                  <div class="col-md-6">
                                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                                      <div class="row g-1">
                                                        <div class="col-md-4">
                                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
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
                                                        <hr>
                                                        
                                                      </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                                    </div>
                                                    <div class="col-md-12">
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

                              <div class="tab-pane fade" id="utilise-tab-pane" role="tabpanel" aria-labelledby="utilise-tab" tabindex="0">
                                <div class="row mt-5">
                                      <div class="col-md-12">
                                              <div class="card h-100" id="card_compagnie">
                                                <div class="row" style="margin: 10px;">
                                                  <div class="col-md-6">
                                                    <div class="card mb-3 border-0" style="max-width: 540px; background: #fafafa;">
                                                      <div class="row g-1">
                                                        <div class="col-md-4">
                                                          <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 90px;"/>
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
                                                        <hr>
                                                        
                                                      </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="...">
                                                    </div>
                                                    <div class="col-md-12">
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
                            </div>
                        </div>          
                       </div>       
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">    
                    </div>
                    
                  </div>
              </div>          
          </div> 
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style>
</style>