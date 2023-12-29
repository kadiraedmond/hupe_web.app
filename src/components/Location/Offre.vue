<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useCompanieStore } from '@/store/companie.js'
import { doc, updateDoc} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";
import { useAuthStore } from '@/store/auth.js' 

import Swal from 'sweetalert2'

const authStore = useAuthStore()
const companieStore = useCompanieStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'qdo1Ig1tnMlmvFCxa6OE' || savedUser.uid || authStore.user.uid 

const companie = ref({})
onBeforeMount(async () => {
  await companieStore.setCompanieById(userId) 

  companie.value = companieStore.companie 

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const companieColRef = doc(firestoreDb, "compagnies", `${userId}`)

const isVIP = ref(false)

const changeProfilHandler = async () => { 

  try {
    if(companie.value.offre == 'vip') { 
  
      await updateDoc(companieColRef, { offre: 'basique' }) 
      companie.value.offre = 'basique' 

      Swal.fire({
        title: "Succès",
        text: "Vous venez de passer en offre basique",
        icon: "success"
      })
  
    } else if(companie.value.offre == 'basique') { 
  
      await updateDoc(companieColRef, { offre: 'vip' })
      companie.value.offre = 'vip' 
      
      Swal.fire({
        title: "Succès",
        text: "Vous venez de passer en offre VIP",
        icon: "success"
      })
    }
    
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <p>
            <strong> Profile actuel | </strong>
            <b style="color: #219935">{{ companie.offre }}</b>
          </p>

          <div
            class="card mb-4 rounded-1 shadow-sm border-primary"
            style="border-color: #219935 !important ;  height: 88%;"
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
                <li style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Creation de compte
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Présence sur la liste des prestataires
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  En vedette sur la pages d'accueil
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Une espace publicitaire
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Mise en avant d’un véhicule  
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Promotion  d’un véhicule
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Réponse aux demandes des clients
                </li>
              </ul>
              <h4 style="font-size: 18px; color: #219935; text-align: center">
                Commission sur le chiffre d'affaires
              </h4>
              <div class="row">
                <div class="col-md-12 text-center mb-3">
                  <button
                    type="button"
                    class="btn btn-primary text-center"
                    style="background: white; border-color: #219935"
                  >
                    <h5
                      class="card-title pricing-card-title"
                      style="color: #219935"
                    >
                      20%
                    </h5>
                  </button>
                </div>
                <div class="col-md-12 text-center" v-if="companie.offre !=='vip'">
                  <button type="button" class="btn btn-primary text-center" style="background: #219935; border-color: #219935;" @click="changeProfilHandler">Sélectionner</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <p><strong>Changer de Profile </strong></p>
          <div
            class="card mb-4 rounded-1 shadow-sm border-primary"
            style="border-color: #219935 !important ; height: 88%;"
          >
            <div
              class="card-header py-3 text-bg-primary border-primary"
              style="
                background: rgb(62 66 63) !important ;
                border-color: #219935 !important;
              "
            >
              <h4 class="my-0 fw-normal text-center">Basique</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li class="" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Creation de compte
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Présence sur la liste des prestataires
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-check-circle' style="color:#219935;"></i> 
                  Réponse aux demandes des clients
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-x-circle'  style="color:red;"></i>
                  En vedette sur la pages d'accueil
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-x-circle'  style="color:red;"></i>
                  Une espace publicitaire
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-x-circle'  style="color:red;"></i>
                  Mise en avant d’un véhicule  
                </li>
                <li class="mt-3" style="font-size: 19px;">
                  <i class='bx bxs-x-circle'  style="color:red;"></i>
                  Promotion d’un véhicule
                </li>
              </ul>
              <h4 style="font-size: 18px; color: #219935; text-align: center">
                Commission sur le chiffre d'affaires
              </h4>
              <div class="row">
                <div class="col-md-12 text-center mb-3">
                  <button
                    type="button"
                    class="btn btn-primary text-center"
                    style="background: white; border-color: #219935"
                  >
                    <h5
                      class="card-title pricing-card-title"
                      style="color: #219935"
                    >
                      15%
                    </h5>
                  </button>
                </div>
                <div class="col-md-12 text-center" v-if="companie.offre !== 'basique'">
                  <button
                    type="button"
                    class="btn btn-primary text-center"
                    style="background: #219935; border-color: #219935"
                    @click="changeProfilHandler"
                  >
                    Sélectionner
                  </button>
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