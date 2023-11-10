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
    <section id="features" class="features" style="margin-top: 50px">
      <div class="container mt-2 mb-5">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                
                <li class=" active w-25 text-center" aria-current="page"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">1</button> Téléphone</li>
                <li class=" w-25 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: #219935;border-color: #219935">2</button>Choix de services</li>
                <li class=" w-25 text-center"> <button class="btn btn-primary"  style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;" >3</button>Choix offres</li>
                <li class="breadcrumb-item  w-25 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;" >4</button>Informations</li>
                
                <!-- Ajoutez plus d'étapes si nécessaire -->
              </ol>
            </nav>
          </div>
          <div class="col-md-1"></div>
        </div>
            
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div
            class="col-md-10"
            style=" border-radius: 5px; padding: 20px; "
          >
            <div class="row">
              <div class="col-md-12 text-center">
                <h3>Quel service offrez-vous ?</h3>
              </div>
              <div class="col-md-12"></div>
              <div class="col-md-12 mt-4">
                <form @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row text-center" id="row1">
                        <div class="col-md-12">
                          <img
                            src="/public/assets/img/car.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check mb-3">
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
                    <div class="col-md-6">
                      <div class="row text-center" id="row2">
                        <div class="col-md-12">
                          <img
                            src="/public/assets/img/bus.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check  mb-3">
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
                    <div class="col-md-6 mt-4">
                      <div class="row text-center" id="row1">
                        <div class="col-md-12">
                          <img
                            src="/public/assets/img/engin.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check  mb-3">
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
                    <div class="col-md-6 mt-4">
                      <div class="row text-center" id="row2">
                        <div class="col-md-12">
                          <img
                            src="/public/assets/img/engine.png"
                            class="img-fluid w-25"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-12">
                          <div class="form-check  mb-3">
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
                        class="btn btn-primary w-25"
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
<style scoped>
#row1{
  border: 1px solid #219935;
    padding: 20px;
    border-radius: 5px
}

#row2{
  border: 1px solid #219935;
    padding: 22px;
    border-radius: 5px;
    margin-left:0px;
}
</style>
