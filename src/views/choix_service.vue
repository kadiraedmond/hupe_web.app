<script setup>
import { onMounted, ref } from "vue"
import { useAuthStore } from '@/store/auth.js'
import router from '@/router/router.js'

const authStore = useAuthStore()

const option = ref('')

const handleSubmit = () => {
  if(option.value !== '') {
    authStore.setCompanieService(option.value)
    if(option.value == 'Location' || option.value == 'Transport') {
      router.push('/choix_offres')
    } else if(option.value == 'Gros Engins' || option.value == 'Vente Véhicule') {
      router.push('/choix_offres2')
    }
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})
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
                <h3>Quel service offrez-vous ?</h3>
              </div>
              <div class="col-md-12 text-center"></div>
              <div class="col-md-12 mt-4">
                <form @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <img
                            src="/public/assets/img/car.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="Location"
                              v-model="option"
                              
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Location de véhicule
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <img
                            src="/public/assets/img/bus.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="Transport"
                              v-model="option"
                              
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Vente des tickets de bus
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <img
                            src="/public/assets/img/engin.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="Gros Engins"
                              v-model="option"
                              
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Location de gros engins
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <img
                            src="/public/assets/img/engine.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="Vente Véhicules"
                              v-model="option"
                              
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Vente de véhicule
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
