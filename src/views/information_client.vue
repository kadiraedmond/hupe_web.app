<script setup>

import { onMounted } from 'vue'


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
                
                <li class=" active w-50 text-center" aria-current="page"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">1</button> Téléphone</li>
                
                <li class="breadcrumb-item  w-50 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: #219935;border-color: #219935">2</button>Informations</li>
                
                <!-- Ajoutez plus d'étapes si nécessaire -->
              </ol>
            </nav>
          </div>
          <div class="col-md-1"></div>
        </div>
            
      </div>
            
      <div class="container">
        <div class="row">
          <div class="col-md-3">
           
             
            </div>
          <div
            class="col-md-6"
            style="
            /* background: #d5f8e5 */
             border-radius: 5px; padding: 20px ;
            border: 1px solid #219935;"
          >
            <div class="col-md-12 text-center">
              <p style="font-weight: 700">
                Compétez vos informations personnelles
              </p>
            </div>
            <form @submit.prevent="handleSubmit" id="form" class="row g-3">
              <div class="col-md-12">
                <label for="text" class="form-label">Nom </label>
                <input type="text" v-model="raison_social" class="form-control" id="inputEmail4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Prénoms </label>
                <input type="text" v-model="responsable" class="form-control" id="inputPassword4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Sexe </label>
                <input type="email" v-model="email" class="form-control" id="inputPassword4" required />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Adresse email</label>
                <input
                  type="email"
                  v-model="addresse"
                  class="form-control"
                  id="inputAddress"
                  required
                />
              </div>
               
 

              <div class="row text-center mt-4">
                    <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Valider</button>
                      </div> -->
                      <div class="col-md-6 text-start">
                        <router-link to="/choix_offres">
                          <button
                        
                        class="btn btn-primary "
                        style="
                          background-color: white;
                          color: #219935;
                          border-color: #219935  ;
                        "
                      >
                      <i class='bx bx-left-arrow-alt' ></i>   Précédent 
                      </button>
                        </router-link>
                     
                    </div>
                    <div class="col-md-6 text-end">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                          
                        "
                        :disabled="isUploading"
                      >
                        Terminer  <i class='bx bx-check'></i> 
                      </button>
                    </div>
                  </div>

              <!-- <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div> -->
            </form>
          </div>
          <div class="col-md-3">
             
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style></style>
