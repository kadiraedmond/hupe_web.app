<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from "vue";

const companieStore = useCompanieStore()
const authStore = useAuthStore()

onBeforeMount(() => {
  companieStore.setCompanieCars(authStore.user.uid || 'YYiQmKBenyUzKzyxIEO1vHxfEPb2') // authStore.user.uid
})

</script>

<template>
  <div class="row mt-4">
    <div class="col-md-6"></div>
    <div class="col-md-6 text-end">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style="background-color: #219935; border-color: #219935"
      >
        <img
          src="/public/assets/img/icone/plus.png"
          class="img-fluid"
          alt="..."
        />
        Ajouter
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Ajouter un véhicule
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Marque</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Modéle</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Immatriculation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Année</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <h2 style="font-size: 17px">Montant</h2>
                </div>

                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >Prix journalier</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label"
                    >Avec chauffeur</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >A l'intérieur</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Ajouter une images</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    type="submit"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-md-6" v-for="(car, index) in companieStore.companieCars" :key="index">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="car.vehicule_image_url"
              class="img-fluid rounded-start"
              alt="..."
              style="height: 100%; object-fit: cover"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <p class="card-text"><strong>{{ car.vehicule }} </strong></p>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                  >
                    {{ car.montant }} FCFA
                  </button>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text"><strong>Modèle | </strong> {{ car.modele }}</p>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text">
                    <strong>Moteur | </strong> {{ car.moteur }}
                  </p>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text">
                    <strong>Immatriculation | </strong> {{ car.serie_vehicule }}
                  </p>
                </div>

                <div class="col-md-12 mt-4 text-start">
                  <div class="row row-clols-md-5">
                    <div class="col">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModale"
                        style="
                          background-color: rgb(33 153 53 / 58%);
                          border-color: rgb(33 153 53 / 58%);
                        "
                      >
                        <img
                          src="/public/assets/img/icone/edit.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="exampleModale"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabele"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabele"
                              >
                                Modifier un véhicule
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                class="row g-3 needs-validation text-start"
                                novalidate
                              >
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Marque</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modéle</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Immatriculation</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Année</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <h2 style="font-size: 17px">Montant</h2>
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Prix journalier</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Avec chauffeur</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                  />
                                </div>
                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >A l'intérieur</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Ajouter une images</label
                                  >
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    type="submit"
                                  >
                                    Enregistrer
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <a
                        v-bind:href="'/formulaire_reservation'"
                        id="a_compagnie"
                      >
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                        >
                          <img
                            src="/public/assets/img/icone/star.png"
                            class="img-fluid"
                            alt="..."
                          />
                        </button>
                      </a>
                    </div>
                    <div class="col">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style="background-color: #219935; border-color: #219935"
                      >
                        <img
                          src="/public/assets/img/icone/promotion.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="exampleModal1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Promouvoir un vehicule
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                class="row g-3 needs-validation text-start"
                                novalidate
                              >
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Taux de réduction</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Montant</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Date de debut</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Date de fin</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    type="submit"
                                  >
                                    Promouvoir
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <a
                        v-bind:href="'/formulaire_reservation'"
                        id="a_compagnie"
                      >
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                        >
                          <img
                            src="/public/assets/img/icone/unlock.png"
                            class="img-fluid"
                            alt="..."
                          />
                        </button>
                      </a>
                    </div>
                    <div class="col text-center">
                      <a
                        v-bind:href="'/formulaire_reservation'"
                        id="a_compagnie"
                      >
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #ff000087;
                            border-color: #ff000087;
                          "
                        >
                          <img
                            src="/public/assets/img/icone/delete.png"
                            class="img-fluid"
                            alt="..."
                          />
                        </button>
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
  </div>
</template>
<style></style>
