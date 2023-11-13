<script setup>
import { useReservationStore } from '@/store/reservation.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from "vue";

const reservationStore = useReservationStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  reservationStore.setVehicules(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
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
            <div class="modal-header" style="background-color: #219935; color : white">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Ajouter un trajet
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
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Lieu de départ
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Destination</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Montant</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Heure de départ</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Escale à faire</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Jours de voyages</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
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
    <div class="col-md-6" v-for="(vehicule, index) in reservationStore.vehicules" :key="index">
      <div class="card h-100" style="max-width: 540px">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mt-2">
              <button
                class="btn btn-primary mb-2"
                style="background-color: #219935; border-color: #219935"
              >
                {{ vehicule.montant }} FCFA
              </button>
            </div>
            <div class="col-md-6 mt-2"></div>

            <div class="col-md-6 mt-2">
              <p><strong>Lieu de départ |</strong> {{ vehicule.lieu_depart }}</p>
            </div>

            <div class="col-md-6 mt-2">
              <p><strong>Destinations |</strong> {{ vehicule.destination }}</p>
            </div>

            <div class="col-md-6 mt-2">
              <p><strong> Heure de départ |</strong> {{ vehicule.heure_depart }}</p>
            </div>

            <div class="col-md-6 mt-2">
              <p><strong>Convocation |</strong> {{ vehicule.convocation }}</p>
            </div>

            <div class="col-md-6 mt-3">
              <p><strong>Escale | </strong> {{ vehicule.escale }}</p>
            </div>

            <div class="col-md-6 mt-3">
              <p><strong>Jours de voyage |</strong> {{ vehicule.jours_voyage }}</p>
            </div>
          </div>
          <div class="col-md-12 mt-4 text-start">
            <div class="row row-clols-md-5">
              <div class="col">
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
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
                  id="exampleModal4"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Modifier un trajet
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
                            <label for="validationCustom01" class="form-label"
                              >Lieu de départ
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom01"
                              required
                            />
                          </div>
                          <div class="col-md-12">
                            <label for="validationCustom02" class="form-label"
                              >Destination</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom02"
                              required
                            />
                          </div>

                          <div class="col-md-12">
                            <label for="validationCustom01" class="form-label"
                              >Montant</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom01"
                              required
                            />
                          </div>
                          <div class="col-md-12">
                            <label for="validationCustom02" class="form-label"
                              >Heure de départ</label
                            >
                            <input
                              type="time"
                              class="form-control"
                              id="validationCustom02"
                              required
                            />
                          </div>

                          <div class="col-md-12">
                            <label for="validationCustom02" class="form-label"
                              >Escale à faire</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom02"
                              required
                            />
                          </div>

                          <div class="col-md-12">
                            <label for="validationCustom01" class="form-label"
                              >Jours de voyages</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom01"
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
                              Modifier
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
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
                            <label for="validationCustom01" class="form-label"
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
                            <label for="validationCustom02" class="form-label"
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
                            <label for="validationCustom01" class="form-label"
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
                            <label for="validationCustom02" class="form-label"
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
                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
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
                <a v-bind:href="'/formulaire_reservation'" id="a_compagnie">
                  <button
                    class="btn btn-primary"
                    style="background-color: #ff000087; border-color: #ff000087"
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
</template>
<style></style>
