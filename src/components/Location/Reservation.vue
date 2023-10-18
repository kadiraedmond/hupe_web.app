<script setup>
import { useReservationStore } from '@/store/reservation.js'
import { useAuthStore } from '@/store/auth.js'
import { reactive, onBeforeMount, onMounted } from "vue";

const reservationStore = useReservationStore()
const authStore = useAuthStore()

let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0
})
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0
})

const updateReservationsDashboard = () => {
  reservationStore.companieLocations.forEach(location => {
    if(location.status == 'En attente') {
      enAttente.totalNumber++
      enAttente.totalPrice += Number(location.montant)
    }
    
    else if(location.status == 'Validé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(location.montant)
    }
    
    else if(location.status == 'Confirmé') {
      confirmees.totalNumber++
      confirmees.totalPrice += Number(location.montant)
    }
    
    else if(location.status == 'Annuler') {
      annulees.totalNumber++
      annulees.totalPrice += Number(location.montant)
    }
    
    else if(location.status == 'Reporté') {
      reportees.totalNumber++
      reportees.totalPrice += Number(location.montant)
    }
    
    else if(location.status == 'Utilisé') {
      utilisees.totalNumber++
      utilisees.totalPrice += Number(location.montant)
    }
  })
}
onBeforeMount(async () => {
  await reservationStore.setCompanieLocations(authStore.user.uid || 'YYiQmKBenyUzKzyxIEO1vHxfEPb2')
  updateReservationsDashboard()
})

</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12 mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <div class="row">
          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active w-100"
                id="attente-tab"
                data-bs-toggle="tab"
                data-bs-target="#attente-tab-pane"
                type="button"
                role="tab"
                aria-controls="attente-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #f77f00 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ enAttente.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ enAttente.totalNumber }}
                          </button>
                          Location en attente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#valid-tab-pane"
                type="button"
                role="tab"
                aria-controls="valid-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #219935 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ valides.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ valides.totalNumber }}
                          </button>
                          Location validés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#confirm-tab-pane"
                type="button"
                role="tab"
                aria-controls="confirm-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ confirmees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ confirmees.totalNumber }}
                          </button>
                          Location confirmés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#annul-tab-pane"
                type="button"
                role="tab"
                aria-controls="annule-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #931d96 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ annulees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ annulees.totalNumber }}
                          </button>
                          Location annulés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#report-tab-pane"
                type="button"
                role="tab"
                aria-controls="report-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ reportees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ reportees.totalNumber }}
                          </button>
                          Location reportés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </div>

          <div class="col-md-4">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link w-100"
                id="valid-tab"
                data-bs-toggle="tab"
                data-bs-target="#use-tab-pane"
                type="button"
                role="tab"
                aria-controls="use-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 border-0"
                  style="background: #fb3232 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ utilisees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p>ICONE</p>
                      </div>

                      <div class="col-md-12 text-start">
                        <p class="text-white">
                          <button
                            class="btn btn-primary border-0 text-white"
                            style="background: #0000008f; border-radius: 50%"
                          >
                            {{ utilisees.totalNumber }}
                          </button>
                          Location utilisés
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
        <div
          class="tab-pane fade show active"
          id="attente-tab-pane"
          role="tabpanel"
          aria-labelledby="attente-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6" v-for="(location, index) in reservationStore.companieLocations" :key="index">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          id="reser"
                        >
                          <div class="row" style="margin: 10px; width: 100%">
                            <div class="col-md-6">
                              <div
                                class="card mb-3 border-0"
                                style="max-width: 540px; background: white"
                              >
                                <div class="row g-1">
                                  <div class="col-md-4">
                                    <img
                                      :src="location.client_profil_url"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 50px"
                                    />
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5
                                        class="card-title"
                                        style="font-size: 12px"
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text mt-2"
                                        style="font-size: 10px"
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
                                  <h6
                                    style="
                                      margin-top: 28px;
                                      font-size: 13px;
                                      color: rgb(247 127 0);
                                    "
                                  >
                                    {{ location.status }}
                                  </h6>
                                </div>
                                <div class="col-8">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 15px;
                                      font-size: 13px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body" style="margin-top: -40px">
                          <div
                            class="card h-100 border-0"
                            id="card_compagnie"
                            style="box-shadow: none; background: none"
                          >
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
                                    <!-- <boutton class="btn btn-primary">
                                                  Il y'a environ un jour  
                                                  T2135558_12522
                                                </boutton> -->
                                    <p
                                      class="card-text"
                                      style="
                                        background: #efefef;
                                        padding: 4px;
                                        border-radius: 5px;
                                        font-size: 12px;
                                        margin-top: -15px;
                                      "
                                    >
                                      Il y a environ un jour
                                      <br />
                                      <strong> T22356_1253523 </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      <strong>{{ location.vehicule }} </strong> |
                                      <strong> {{ location.modele }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      {{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }}
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      chauffeur |
                                      <strong>{{ location.chauffeur }} </strong>
                                    </p>
                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Intérieur |
                                      <strong>{{ location.interieurPays }} </strong>
                                    </p>
                                    <hr />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div>
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -32px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Retrait |
                                      <strong>{{ location.date_retrait }} </strong>
                                      |
                                      <strong>{{ location.heure_retrait }}</strong>
                                    </p>

                                    <hr />
                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Retour |
                                      <strong>{{ location.date_retour }} </strong>
                                    </p>
                                    <hr />

                                    <p
                                      class="card-text"
                                      style="
                                        font-size: 13px;
                                        margin-top: -8px;
                                        margin-bottom: -8px;
                                      "
                                    >
                                      Nombres de jours de location |
                                      <strong>5 jours</strong>
                                    </p>
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
      </div>
    </div>
  </div>
</template>
<style></style>
