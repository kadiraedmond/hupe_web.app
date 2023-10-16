<script setup>
   
</script>

<template>
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
                                          style="background: #0000008f; border-radius: 50%;">0</button> Tickets en attente
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
                                          style="background: #0000008f; border-radius: 50%;">0</button> Tickets validés
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
                                          style="background: #0000008f; border-radius: 50%;">0</button> Tickets confirmés
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
                                        style="background: #0000008f; border-radius: 50%;">0</button> Tickets annulés
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

                                  <div class="col-md-12">
                                    <p class="text-white">
                                      <button class="btn btn-primary border-0 text-white"
                                        style="background: #0000008f; border-radius: 50%;">0</button> Tickets reportés
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
                                        style="background: #0000008f; border-radius: 50%;">0</button> Tickets utilisés
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: rgb(247 127 0);">Attente
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
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree" id="reser">
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: rgb(247 127 0);">Attente
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: rgb(247 127 0);">Attente
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
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingT">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseT" aria-expanded="false"
                                        aria-controls="flush-collapseT" id="reser">
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: rgb(247 127 0);">Attente
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
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTh">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTh" aria-expanded="false"
                                        aria-controls="flush-collapseTh" id="reser">
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: rgb(247 127 0);">Attente
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#219935">Validé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #219935">Validé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #219935">Validé
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
                      <div class="tab-pane fade" id="confirm-tab-pane" role="tabpanel" aria-labelledby="annule-tab"
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#3987FB;">Confirmé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#3987FB">Confirmé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#3987FB;">Confirmé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #3987FB">Confirmé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #3987FB">Confirmé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#3987FB;">Confirmé
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
                      <div class="tab-pane fade" id="annul-tab-pane" role="tabpanel" aria-labelledby="annule-tab"
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Annulé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96">Annullé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Annulé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #931d96">Annulé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #931d96">Annulé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#931d96;">Annulé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#FB3232;">Utilisé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#FB3232">Utilisé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#FB3232">Utilise
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #931d96">
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color: #FB3232">Utilisé
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
                                                  <h6 style=" margin-top: 28px; font-size: 13px; color:#FB3232;">Utilisé
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
</template>
<style>
</style>