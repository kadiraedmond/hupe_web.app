<script></script>

<template>
  <main id="main">
    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: 0px"
    >
      <img
        src="/public/assets/img/car2.jpg"
        alt=""
        class="img-fluid w-100"
        style="height: 380px; object-fit: cover"
      />
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px">
      <div class="container" data-aos="fade-up">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card mb-3 border-0" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/public/assets/img/avatars/1.png"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="width: 160px"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">BG compagnies</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-md-6 text-end">
            <a v-bind:href="'/dashboard'" id="a_compagnie">
              <button
                class="btn btn-primary"
                style="background: #219935; border-color: #219935"
              >
                Tableau de bord
              </button>
            </a>
          </div> -->
        </div>
      </div>
    </section>
    <!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section
      id="portfolio-details"
      class="portfolio-details"
      style="margin-top: -40px"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Programmes
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Réservations
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                >
                  Tarifs
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="politique-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#politique-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="politique-tab-pane"
                  aria-selected="false"
                >
                  Politique
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="apropos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#apropos-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="apropos-tab-pane"
                  aria-selected="false"
                >
                  A propos
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div class="row mt-4">
                  <div class="col-md-6">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Compagnies KOUDI</h6>
                          </div>
                          <div class="col-md-6 text-end">
                            <h6><strong>prix :</strong> 2000 FCFA</h6>
                          </div>

                          <div class="col-md-12 mt-3">
                            <p>Escales : lorenipsun</p>
                          </div>
                          <div class="col-md-12">
                            <p>Convocation : 8h55min</p>
                          </div>

                          <div class="col-md-6">
                            <button
                              class="btn btn-primary"
                              style="
                                background-color: #7a7a7a;
                                border-color: #7a7a7a;
                              "
                            >
                              Départ à 9h00 min
                            </button>
                          </div>
                          <div class="col-md-6 text-end">
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Reserver
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          <form class="row g-3 needs-validation" novalidate style="background: #21993552; padding: 10px; border-radius: 5px;">
                                            <div class="col-md-6">
                                                <label for="validationCustom01" class="form-label">Nom</label>
                                                <input type="text" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-md-6">
                                                <label for="validationCustom01" class="form-label">Prénoms</label>
                                                <input type="text" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-md-12">
                                                <label for="validationCustom01" class="form-label">Ville de départ</label>
                                                <input type="text" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-md-12">
                                                <label for="validationCustom01" class="form-label">Ville d'arrivée</label>
                                                <input type="text" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-md-6">
                                                <label for="validationCustom01" class="form-label">Date de départ</label>
                                                <input type="date" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>
                                            <div class="col-md-6">
                                                <label for="validationCustom01" class="form-label">Heure de départ</label>
                                                <input type="time" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-md-12">
                                                <label for="validationCustom01" class="form-label">Nombres de personnes</label>
                                                <input type="number" class="form-control" id="validationCustom01"  required>
                                                
                                            </div>

                                            <div class="col-12 text-center">
                                                <button class="btn btn-primary" type="submit" style="background: #219935;
                                                border-color: #219935;">Soumettre</button>
                                            </div>
                                        </form>
                                        </div>
                                         
                                      </div>
                                    </div>
                                  </div>
                          </div>

                          <div class="col-md-12 mt-4">
                            <p>Jours de voyage : lmfkdfdkf</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Compagnies KOUDI</h6>
                          </div>
                          <div class="col-md-6 text-end">
                            <h6><strong>prix :</strong> 2000 FCFA</h6>
                          </div>

                          <div class="col-md-12 mt-3">
                            <p>Escales : lorenipsun</p>
                          </div>
                          <div class="col-md-12">
                            <p>Convocation : 8h55min</p>
                          </div>

                          <div class="col-md-6">
                            <button
                              class="btn btn-primary"
                              style="
                                background-color: #7a7a7a;
                                border-color: #7a7a7a;
                              "
                            >
                              Départ à 9h00 min
                            </button>
                          </div>
                          <div class="col-md-6 text-end">
                            <button
                              class="btn btn-primary"
                              style="background: #219935; border-color: #219935"
                            >
                              Reserver
                            </button>
                          </div>

                          <div class="col-md-12 mt-4">
                            <p>Jours de voyage : lmfkdfdkf</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-6">
                    <div class="card h-100" id="card_compagnie">
                      <div class="row" style="margin: 10px">
                        <div class="col-md-6">
                          <div
                            class="card mb-3 border-0"
                            style="max-width: 540px; background: #fafafa"
                          >
                            <div class="row g-1">
                              <div class="col-md-4">
                                <img
                                  src="/public/assets/img/avatars/1.png"
                                  alt
                                  class="w-px-40 h-auto rounded-circle"
                                  style="width: 90px"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 15px"
                                  >
                                    Koudi
                                  </h5>
                                  <p
                                    class="card-text mt-2"
                                    style="font-size: 14px"
                                  >
                                    <i
                                      class="bx bx-map"
                                      id="icon_menu"
                                      style="color: #219935"
                                    ></i>
                                    CI,rue 250
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 text-end">
                          <div class="row">
                            <div class="col-4 text-end">
                              <h6 style="margin-top: 28px; color: #219935">
                                Validé
                              </h6>
                            </div>
                            <div class="col-8">
                              <button
                                class="btn btn-primary"
                                style="
                                  background: #219935;
                                  border-color: #219935;
                                  margin-top: 15px;
                                "
                              >
                                5000 FCFA
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card mb-3 mt-4"
                        style="
                          margin: 10px;
                          margin-top: -10px !important;
                          width: 98%;
                        "
                      >
                        <div class="row g-0" style="margin: 10px">
                          <div class="col-md-6">
                            <div class="card-body">
                              <p class="card-text">
                                <strong>Location Hyundai Santa fe 2022 </strong>
                              </p>
                              <hr />
                              <p class="card-text">Moteur essence BG 5314</p>
                              <hr />
                              <p class="card-text">Avec chauffeur</p>
                              <hr />
                              <p class="card-text">Capital du pays</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img
                              src="/public/assets/img/car2.jpg"
                              class="img-fluid rounded-start h-100"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-12">
                            <hr />
                            <p class="card-text">
                              Départ le <strong>Jours du voyages : </strong> à
                              <strong>12h 43 min</strong>
                            </p>

                            <hr />
                            <p class="card-text">
                              Retrait à <strong>Aéroport : </strong> retour le
                              <strong>2023-07-29</strong>
                            </p>
                            <hr />

                            <p class="card-text">
                              <strong>Nombres de jours de location </strong> 5
                              jours
                            </p>
                            <hr />
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card h-100" id="card_compagnie">
                      <div class="row" style="margin: 10px">
                        <div class="col-md-6">
                          <div
                            class="card mb-3 border-0"
                            style="max-width: 540px; background: #fafafa"
                          >
                            <div class="row g-1">
                              <div class="col-md-4">
                                <img
                                  src="/public/assets/img/avatars/1.png"
                                  alt
                                  class="w-px-40 h-auto rounded-circle"
                                  style="width: 90px"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5
                                    class="card-title"
                                    style="font-size: 15px"
                                  >
                                    Koudi
                                  </h5>
                                  <p
                                    class="card-text mt-2"
                                    style="font-size: 14px"
                                  >
                                    <i
                                      class="bx bx-map"
                                      id="icon_menu"
                                      style="color: #219935"
                                    ></i>
                                    CI,rue 250
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 text-end">
                          <div class="row">
                            <div class="col-4 text-end">
                              <h6 style="margin-top: 28px; color: #219935">
                                Validé
                              </h6>
                            </div>
                            <div class="col-8">
                              <button
                                class="btn btn-primary"
                                style="
                                  background: #219935;
                                  border-color: #219935;
                                  margin-top: 15px;
                                "
                              >
                                5000 FCFA
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card mb-3 mt-4"
                        style="
                          margin: 10px;
                          margin-top: -10px !important;
                          width: 98%;
                        "
                      >
                        <div class="row g-0" style="margin: 10px">
                          <div class="col-md-6">
                            <div class="card-body">
                              <p class="card-text">
                                <strong>Location Hyundai Santa fe 2022 </strong>
                              </p>
                              <hr />
                              <p class="card-text">Moteur essence BG 5314</p>
                              <hr />
                              <p class="card-text">Avec chauffeur</p>
                              <hr />
                              <p class="card-text">Capital du pays</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img
                              src="/public/assets/img/car2.jpg"
                              class="img-fluid rounded-start h-100"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-12">
                            <hr />
                            <p class="card-text">
                              Départ le <strong>Jours du voyages : </strong> à
                              <strong>12h 43 min</strong>
                            </p>

                            <hr />
                            <p class="card-text">
                              Retrait à <strong>Aéroport : </strong> retour le
                              <strong>2023-07-29</strong>
                            </p>
                            <hr />

                            <p class="card-text">
                              <strong>Nombres de jours de location </strong> 5
                              jours
                            </p>
                            <hr />
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <p class="card-text">
                              <strong>Location Hyundai Santa fe 2022 </strong>
                            </p>
                          </div>
                          <div class="col-md-6 text-end">
                            <button
                              class="btn btn-primary"
                              style="background: #219935; border-color: #219935"
                            >
                              5000 FCFA
                            </button>
                          </div>
                        </div>
                        <hr />

                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="politique-tab-pane"
                role="tabpanel"
                aria-labelledby="politique-tab"
                tabindex="0"
              >
                <div class="row mt-5">
                  <div class="col-md-12">
                    <div class="card h-100" id="card_compagnie">
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequatLorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat
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
  </main>
  <!-- End #main -->
</template>
<style></style>
