<script setup>
import { onMounted, ref } from "vue"
import router from '@/router/router.js'
import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()

onMounted(() => {
  window.scrollTo(0, 0)
})

const option = ref('')

const handleSubmit = () => {
  if(option.value !== '') {
    authStore.setOffre2(option.value)
    router.push('/information')
  }
}
</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div
            class="col-md-10"
            style="background: #d5f8e5; border-radius: 5px; padding: 20px"
          >
            <div class="row">
              <div class="col-md-12 text-center">
                <h3>Choisir une offre</h3>
              </div>
              <div class="col-md-12 text-center"></div>
              <div class="col-md-12 mt-4">
                <form @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <div
                            class="card mb-4 rounded-1 shadow-sm border-primary"
                            style="border-color: #219935 !important"
                          >
                            <div
                              class="card-header py-3 text-bg-primary border-primary"
                              style="
                                background: rgb(62 66 63) !important ;
                                border-color: #219935 !important;
                              "
                            >
                              <h4 class="my-0 fw-normal text-center">
                                Basique
                              </h4>
                            </div>
                            <div class="card-body">
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Creation de compte
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Présence sur la liste des prestataires
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/no.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  En vedette sur la pages d'accueil
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/no.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Une espace publicitaire
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/no.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Mise en avant d’un véhicule ou d’une
                                  destination
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/no.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Promotion d’une destination ou d’un véhicule
                                </li>
                              </ul>
                              <h4
                                style="
                                  font-size: 18px;
                                  color: #219935;
                                  text-align: center;
                                "
                              >
                                Abonnement de 20 000 par mois
                              </h4>
                              <div class="row">
                                <!-- <div class="col-md-12 text-center">
                                      <button type="button" class=" btn btn-primary text-center" style="background: #219935; border-color: #219935;">Sélectionner</button>
                                    </div> -->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="basique"
                              v-model="option"
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Sélectionner
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <div
                            class="card mb-4 rounded-1 shadow-sm border-primary"
                            style="border-color: #219935 !important"
                          >
                            <div
                              class="card-header py-3 text-bg-primary border-primary"
                              style="
                                background: #219935 !important ;
                                border-color: #219935 !important;
                              "
                            >
                              <h4 class="my-0 fw-normal text-center">Vip</h4>
                            </div>
                            <div class="card-body">
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Creation de compte
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Présence sur la liste des prestataires
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  En vedette sur la pages d'accueil
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Une espace publicitaire
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Mise en avant d’un véhicule ou d’une
                                  destination
                                </li>
                                <li class="mt-3">
                                  <img
                                    src="/public/assets/img/icone/yes.png"
                                    alt=""
                                    class="img-fluid"
                                    style="margin-top: -4px"
                                  />
                                  Promotion d’une destination ou d’un véhicule
                                </li>
                              </ul>
                              <h4
                                style="
                                  font-size: 18px;
                                  color: #219935;
                                  text-align: center;
                                "
                              >
                                Abonnement mensuel de 30 000 par mois
                              </h4>
                              <div class="row">
                                <!-- <div class="col-md-12 text-center mb-3">
                                      <button type="button" class=" btn btn-primary text-center" style="background: white; border-color: #219935;"> <h5 class="card-title pricing-card-title " style="color:#219935">20%</h5></button>
                                    </div> -->
                                <!-- <div class="col-md-12 text-center">
                                      <button type="button" class=" btn btn-primary text-center" style="background: #219935; border-color: #219935;">Sélectionner</button>
                                    </div> -->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="vip"
                              v-model="option"
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Sélectionner
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <input type="submit" value="Vérifier"> -->
                  <div class="row text-center mt-4">
                    <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Valider</button>
                      </div> -->
                    <div class="col-md-12">
                        <button
                          type="submit"
                          class="btn btn-primary"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                        >
                          Valider
                        </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- <div class="col-md-12 text-center mt-3">
                  <p>Je n'ai pas reçu de message</P>
                    <p><a href=""> Renvoyer le code</a></p>
                </div> -->
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style></style>
