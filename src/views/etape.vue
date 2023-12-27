<script setup>
import router from '@/router/router.js'

import Swal from 'sweetalert2'

import { useAuthStore } from '@/store/auth.js'

import { onMounted, ref } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  window.scrollTo(0, 0)
})

const handleCompanie = async () => {
  await authStore.setIsCompanie(true)
  
  router.push('/connexion')
}

const handleClient = async () => {
  await authStore.setIsCompanie(false)
  
  router.push('/connexion')
}

</script>

<template>
  <main id="main">

    <section id="features" class="features" style="margin-top: 80px">
      <div class="container">
        <div class="row">
          
          <div class="col-md-6">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-md-12">
                  <div class="card-body">
                  <!-- <h5 class="card-title mt-5">Authentification</h5> -->
                  <p style="font-size: 40px;">Bienvenue dans votre communauté professionnelle</p>

                  <p class="mt-2">Lorem ipsum dolor sit amet. Est quaerat minima nam numquam animi ut voluptate consequatur aut autem odio id sint voluptatem ut</p>
                  <div class="row">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <router-link @click="handleClient" to="/" >
                            <div class="card h-100 border-0" style="background: #219935;">
                            <!-- <img src="..." class="card-img-top" alt="..."> -->
                            <div class="card-body text-center">
                                <h5 class="card-title text-white">Un client</h5>
                                
                            </div>
                            </div>
                        </router-link>
                        </div>
                        <div class="col">
                            <router-link @click="handleCompanie" to="" >
                            <div class="card h-100 border-0" style="background: #219935;">
                            <!-- <img src="..." class="card-img-top" alt="..."> -->
                            <div class="card-body text-center">
                                <h5 class="card-title text-white">Une compagnie</h5>
                                 
                            </div>
                            </div>
                           </router-link>
                        </div>
                        
                         
                        </div>
                    <!-- <div class="col-9">
                      <div class="d-flex justify-content-between my-2">

                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2" for="gridRadios1">
                            Je suis un client
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleClient"
                            :checked="isClient"
                            required
                          />
                        </div>
                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2 " for="gridRadios1">
                            Nous sommes une compagnie
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleInput"
                            :checked="isCompanie"
                            required
                          />
                        </div>
                        </div>
                    </div> -->
                  </div>
                   
                  
                  </div>
                </div>
                <!-- <div class="col-md-12">
                   
                  <div class="card-body">
                    

                    <form @submit.prevent="logInWithPhoneNumber">
                      <div class="mb-2">
                        <label for="phoneNumber" class="form-label"
                          >Numéro de téléphone</label
                        >
                      </div>
                      <div class="mb-3 ">
                        <vue-tel-input 
                          v-model="phoneNumber"
                          :enabledCountryCode="true"
                          @country-changed="handleCountryChange"
                          style="width: 75%; height: 43px;"
                         />
                      </div>

                      
                      
                      <div class="">
                        <button
                          type="submit"
                          class="btn btn-primary mt-4 w-75"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                            width: 75%; height: 43px;
                          "                      >
                          Se connecter
                        </button>
                      </div>
                      <div id="recaptcha-container"></div>
                    </form>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/assets/img/inter/car.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="/assets/img/inter/bus.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="/assets/img/inter/engin.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="/assets/img/inter/sale.svg" class="d-block w-100" alt="...">
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <section id="features" class="features" style="background: #c5e2d0;">
        <div class="container">
        <div class="row">
          <div class="col-md-6">
            <H1>Réserver facilement vos tickets de bus</H1>
            <p style="font-size: 25px; font-weight: 100 !important;">
                
                Lorem ipsum dolor sit amet. Quo itaque dolores vel quia aliquam non optio doloribus ut eius quos! Ab possimus voluptates et nemo expedita vel quibusdam consequuntur. Eos ratione voluptas sed eveniet fugit qui quibusdam delectus non architecto dolorem est
            </p>
          </div>
          <div class="col-md-6 text-end">
            <img
                    src="/assets/img/inter/bus.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                    style="margin-top: -10px; object-fit: cover;"
                  />
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Réserver facilement des véhicules en location</h1>
            <p style="font-size: 25px; font-weight: 100 !important;">           
                Lorem ipsum dolor sit amet. Quo itaque dolores vel quia aliquam non optio doloribus ut eius quos! Ab possimus voluptates et nemo expedita vel quibusdam consequuntur. Eos ratione voluptas sed eveniet fugit qui quibusdam delectus non architecto dolorem est
            </p>
          </div>
          <div class="col-md-6 text-end">
            <img
                    src="/assets/img/inter/car.svg"
                    class="img-fluid"
                    alt="..."
                    style="margin-top: -10px; object-fit: cover;"
                  />
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features" style="background: #c5e2d0;">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Louer un gros engin</h1>
            <p style="font-size: 25px; font-weight: 100 !important;">
                Lorem ipsum dolor sit amet. Quo itaque dolores vel quia aliquam non optio doloribus ut eius quos! Ab possimus voluptates et nemo expedita vel quibusdam consequuntur. Eos ratione voluptas sed eveniet fugit qui quibusdam delectus non architecto dolorem est
            </p>
          </div>
          <div class="col-md-6 text-end">
            <img
                    src="/assets/img/inter/engin.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                    style="margin-top: -10px; object-fit: cover;"
                  />
          </div>
        </div>
      </div>

    </section>

    <section id="features" class="features">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Acheter un véhicule</h1>
            <p style="font-size: 25px; font-weight: 100 !important;">
                Lorem ipsum dolor sit amet. Quo itaque dolores vel quia aliquam non optio doloribus ut eius quos! Ab possimus voluptates et nemo expedita vel quibusdam consequuntur. Eos ratione voluptas sed eveniet fugit qui quibusdam delectus non architecto dolorem est
            </p>
          </div>
          <div class="col-md-6 text-end">
            <img
                    src="/assets/img/inter/sale.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                    style="margin-top: -10px; object-fit: cover;"
                  />
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="features" class="features" style="margin-top: 100px">
      <div class="container w-50">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 text-center">
                  <h5 class="card-title mt-5">Authentification</h5>
                  <img
                    src="/assets/img/auth.png"
                    class="img-fluid rounded-start w-25"
                    alt="..."
                    style="margin-top: 8px; object-fit: cover;"
                  />
                </div>
                <div class="col-md-12">
                   
                  <div class="card-body">
                    <p class="card-text text-center">
                      Veuillez entrer votre numero de telephone, nous vous
                      enverrons un code pour la vérification
                    </p>

                    <form @submit.prevent="logInWithPhoneNumber">
                      <div class="mb-2 text-center">
                        <label for="phoneNumber" class="form-label"
                          >Numéro de téléphone</label
                        >
                      </div>
                      <div class="mb-3 mx-5">
                        <vue-tel-input 
                          v-model="phoneNumber"
                          :enabledCountryCode="true"
                          @country-changed="handleCountryChange"
                         />
                      </div>

                      <div class="d-flex justify-content-between my-2">
                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2" for="gridRadios1">
                            Je suis un client
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleClient"
                            :checked="isClient"
                            required
                          />
                        </div>
                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2 " for="gridRadios1">
                            Nous sommes une compagnie
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleInput"
                            :checked="isCompanie"
                            required
                          />
                        </div>
                      </div>
                      
                      <div class="text-center">
                        <button
                          type="submit"
                          class="btn btn-primary mt-2"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "                      >
                          Se connecter
                        </button>
                      </div>
                      <div id="recaptcha-container"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </section> -->
  </main>
  <!-- End #main -->
</template>
<style>
::placeholder {
  float: left; 
  color: #EEE;
}
</style>
