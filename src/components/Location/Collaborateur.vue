<script setup>
import { useScannerStore } from '@/store/scanner.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from 'vue'

const scannerStore = useScannerStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'qdo1Ig1tnMlmvFCxa6OE' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  scannerStore.setCompanyScanners(userId)
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
        data-bs-target="#exampleModal4"
        style="background-color: #219935; border-color: #219935"
      >
        <img
          src="/assets/img/icone/plus.png"
          class="img-fluid"
          alt="..."
        />
        Ajouter
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background-color: #219935; color : white">
              <h1 class="modal-title fs-5" id="exampleModalLabel4">
                Ajouter un Collaborateur
              </h1>
              <button
                type="button"
                class="btn-close-a"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Nom</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="nom"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Prenoms</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prenoms"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Numero de téléphone</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="telephone"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Adresse</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="adresse"
                    required
                  />
                </div>
              
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    > Image</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile2" 
                    accept="image/*"
                    required
                  />
                </div>
                
                

                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    type="submit"
                    :disabled="isUploading"
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

  <div class="row mt-5">
      <div class="col-md-12"></div>
    <!-- <div v-if="scannerStore.companyScanners.length > 0"> -->
      <!-- <div class="col-md-6" v-for="(scanner, index) in scannerStore.companyScanners" :key="index"> -->
      <div class="col-md-4"> 
      <div
        class="card mb-3"
        style="
          padding: 5px;
          border-radius: 5px;
        "
      >
        <div class="row g-0">
          <div class="col-4">
            <img
              src="/assets/img/avatars/1.png"
              alt=""
              class="w-px-40 h-auto rounded-circle"
              style="width: 100px"
            />
          </div>
          <div class="col-8">
            <div class="card-body">
              <!-- <h5 class="card-title">{{ scanner.nom }} {{ scanner.prenom }}</h5> -->
              <h5 class="card-title" style="font-weight: 600; margin-top: -4px;">Joe doe</h5>
              <p class="card-text">+000 0000000000</p>
              <p class="card-text" style="margin-top: -17px;">
                <small class="text-muted">loren ipsun dalor</small>
              </p>
              <div class="row">
                <div class="col-md-12 text-end">
                  <button class="btn btn-primary" id="btn_sup">Supprimer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    <!-- </div> -->
    <!-- <div class="w-100" v-else>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
             
              <div class="text-center">
                <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
              </div>
              
              <div class="card-body text-center">
                <p class="card-text">Aucun collaborateur disponible</p>
              </div>
          </div>
   
        <div class="col-md-3"></div>
      </div>
    </div> -->
    
  </div>
</template>
<style scoped>
  #btn_sup{
    background: white;
    border-color: red;
    color: red;
    height: 34px;
  }
</style>
