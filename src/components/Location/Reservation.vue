<script setup>
import { useCompanieStore } from "@/store/companie.js";
import { useAuthStore } from "@/store/auth.js";
import { reactive, onBeforeMount, onMounted } from "vue";

const companieStore = useCompanieStore();
const authStore = useAuthStore();

let enAttente = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let valides = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let confirmees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let annulees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let reportees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});
let utilisees = reactive({
  totalNumber: 0,
  totalPrice: 0,
});

const updateReservationsDashboard = () => {
  companieStore.companieLocations.forEach((location) => {
    if (location.status == "En attente") {
      enAttente.totalNumber++;
      enAttente.totalPrice += Number(location.montant);
    } else if (location.status == "Validé") {
      utilisees.totalNumber++;
      utilisees.totalPrice += Number(location.montant);
    } else if (location.status == "Confirmé") {
      confirmees.totalNumber++;
      confirmees.totalPrice += Number(location.montant);
    } else if (location.status == "Annuler") {
      annulees.totalNumber++;
      annulees.totalPrice += Number(location.montant);
    } else if (location.status == "Reporté") {
      reportees.totalNumber++;
      reportees.totalPrice += Number(location.montant);
    } else if (location.status == "Utilisé") {
      utilisees.totalNumber++;
      utilisees.totalPrice += Number(location.montant);
    }
  });
};
const savedUser = JSON.parse(localStorage.getItem("user"));

// const userId = savedUser.uid || authStore.user.uid
const userId =
  "YYiQmKBenyUzKzyxIEO1vHxfEPb2" || savedUser.uid || authStore.user.uid;
onBeforeMount(async () => {
  await companieStore.setCompanieLocations(userId);
  updateReservationsDashboard();
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12 mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <div class="row">
          <div class="col-md-4">
            <li class="nav-item mb-4" role="presentation">
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
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #f77f00 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ enAttente.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-time"></i>
                        </p>
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
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #219935 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ valides.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-circle"></i>
                        </p>
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
                id="confirm-tab"
                data-bs-toggle="tab"
                data-bs-target="#confirm-tab-pane"
                type="button"
                role="tab"
                aria-controls="confirm-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">
                          {{ confirmees.totalPrice }} CFA
                        </p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-square"></i>
                        </p>
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
                id="annul-tab"
                data-bs-toggle="tab"
                data-bs-target="#annul-tab-pane"
                type="button"
                role="tab"
                aria-controls="annule-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #931d96 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ annulees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-x-circle"></i>
                        </p>
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
                id="report-tab"
                data-bs-toggle="tab"
                data-bs-target="#report-tab-pane"
                type="button"
                role="tab"
                aria-controls="report-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #3987fb !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ reportees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-reset"></i>
                        </p>
                      </div>

                      <div class="col-md-12 text-start">
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
                id="use-tab"
                data-bs-toggle="tab"
                data-bs-target="#use-tab-pane"
                type="button"
                role="tab"
                aria-controls="use-tab-pane"
                aria-selected="true"
              >
                <div
                  class="card text-bg-warning mb-3 mt-3 border-0"
                  style="background: #fb3232 !important"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 text-start">
                        <p class="text-white">{{ utilisees.totalPrice }} CFA</p>
                      </div>

                      <div class="col-md-6 text-end">
                        <p
                          style="
                            font-size: 23px;
                            margin-top: -6px;
                            color: white;
                          "
                        >
                          <i class="bx bx-check-circle"></i>
                        </p>
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
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                          v-if="location.status == 'En attente'"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
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

        <div
          class="tab-pane fade show"
          id="valid-tab-pane"
          role="tabpanel"
          aria-labelledby="valid-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
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

        <div
          class="tab-pane fade show"
          id="confirm-tab-pane"
          role="tabpanel"
          aria-labelledby="confirm-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                          v-if="location.status == 'Confirmé'"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Nombres de jours de location |
                                          <strong>5 jours</strong>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-12">
                                      <div class="row" style="    padding: 10px;top: -19px;">
                                        <div class="col-md-6 text-start">
                                          <button class="btn " style="background:white ; color:#219935 ; border-color:#219935 ; font-size: 12px;">Appel</button>
                                        </div>
                                        <div class="col-md-6 text-end">
                                          <button class="btn " style="background:#219935 ; color:white; font-size: 12px; ">Message</button>
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

        <div
          class="tab-pane fade show"
          id="annul-tab-pane"
          role="tabpanel"
          aria-labelledby="annul-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
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

        <div
          class="tab-pane fade show"
          id="report-tab-pane"
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
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

        <div
          class="tab-pane fade show"
          id="use-tab-pane"
          role="tabpanel"
          aria-labelledby="use-tab"
          tabindex="0"
        >
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="row g-1">
                <div class="col-md-12">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(
                          location, index
                        ) in companieStore.companieLocations"
                        :key="index"
                      >
                        <div
                          class="accordion-item mb-3"
                          style="border: 1px solid #d2d2d2; border-radius: 5px"
                        >
                          <h2
                            class="accordion-header"
                            :id="'flush-headingOne' + index"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseOne' + index"
                              aria-expanded="false"
                              :aria-controls="'flush-collapseOne' + index"
                              id="reser"
                            >
                              <div
                                class="row g-1 d-flex mt-1"
                                style="width: 100%"
                              >
                                <div class="col-md-6 d-flex">
                                  <img
                                    :src="location.client_profil_url"
                                    alt
                                    class="w-px-40 h-auto rounded-circle"
                                    style="
                                      max-width: 50px;
                                      max-height: 50px;
                                      border: 1px solid rgb(214, 214, 214);
                                    "
                                  />
                                  <div>
                                    <div
                                      class="card-body"
                                      style="
                                        margin-left: 10px;
                                        margin-top: 10px;
                                      "
                                    >
                                      <h5
                                        class="card-title"
                                        style="
                                          font-size: 12px;
                                          margin-bottom: 6px;
                                        "
                                      >
                                        {{ location.nom_client }}
                                      </h5>
                                      <p
                                        class="card-text"
                                        style="font-size: 12px"
                                      >
                                        <i
                                          class="bx bx-map"
                                          style="color: rgb(139 139 139)"
                                        ></i>
                                        CI,rue 250
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 text-end">
                                  <strong
                                    style="
                                      color: rgb(247 127 0);
                                      font-size: 12px;
                                      margin-right: 10px;
                                      font-weight: 500;
                                    "
                                    >{{ location.status }}
                                  </strong>
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background: #219935;
                                      border-color: #219935;
                                      margin-top: 5px;
                                      font-size: 12px;
                                    "
                                  >
                                    {{ location.montant }} FCFA
                                  </button>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'flush-headingOne' + index"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div
                              class="accordion-body"
                              style="margin-top: 8px; padding: 7px"
                            >
                              <div
                                class="card h-100 border-0"
                                id="card_compagnie"
                                style="box-shadow: none; background: none"
                              >
                                <div
                                  class="card mt-4"
                                  style="
                                    margin-top: -10px !important;
                                    width: 100%;
                                  "
                                >
                                  <div class="row g-0" style="margin: -2px">
                                    <div class="col-md-12">
                                      <div class="card-body">
                                        <div class="row mt-2">
                                          <div class="col-6">
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
                                              {{
                                                new Intl.DateTimeFormat(
                                                  undefined,
                                                  options
                                                ).format(location.createdAt)
                                              }}
                                              <br />
                                            </p>
                                          </div>
                                        </div>
                                        <br />

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          <strong
                                            >{{ location.vehicule }}
                                          </strong>
                                          |
                                          <strong>
                                            {{ location.modele }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          {{ location.moteur }} |
                                          {{ location.boite }} |
                                          {{ location.plaque_vehicule }}
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          chauffeur |
                                          <strong
                                            >{{ location.chauffeur }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 0px;
                                            margin-bottom: 11px;
                                          "
                                        >
                                          Intérieur |
                                          <strong
                                            >{{ location.interieurPays }}
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                  <img
                                    :src="location.vehicule_image_url"
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                    style="height: 85% !important"
                                  />
                                </div> -->
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
                                          <strong
                                            >{{ location.date_retrait }}
                                          </strong>
                                          |
                                          <strong>{{
                                            location.heure_retrait
                                          }}</strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: 20px;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          Retour |
                                          <strong
                                            >{{ location.date_retour }}
                                          </strong>
                                        </p>

                                        <p
                                          class="card-text"
                                          style="
                                            font-size: 13px;
                                            margin-top: -11px;
                                            margin-bottom: 11px;
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
    </div>
  </div>
</template>
<style scoped>
.nav-tabs .nav-link {
  /* margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); */
  /* background: 0 0; */
  /* border: var(--bs-nav-tabs-border-width) solid transparent; */
  /* border-top-left-radius: var(--bs-nav-tabs-border-radius); */
  /* border-top-right-radius: var(--bs-nav-tabs-border-radius); */
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-color: #219935;
  color: black;
  border-radius: 5px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fff;
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: #219935;
  background: #21993554;
}
</style>
