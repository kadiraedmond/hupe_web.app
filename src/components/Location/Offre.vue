<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useCompanieStore } from '@/store/companie.js'
import { doc, updateDoc} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";
import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()
const companieStore = useCompanieStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid 

const offre_actuelle = ref('')
onBeforeMount(() => {
  companieStore.setCompanieById(userId) 

  offre_actuelle.value = companieStore.companie.offre 

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const companieColRef = doc(firestoreDb, "compagnies", `${companieStore.companie.uid}`)

const isVIP = ref(false)

const changeProfilHandler = async () => {
  if(companieStore.companie.offre == 'vip') {
    try {
      await updateDoc(companieColRef, { offre: 'basique' })
      companieStore.companie.offre = 'basique' 

      offre_actuelle.value = 'basique'
    } catch (error) {
      console.log(error)
    }
  } else if(companieStore.companie.offre == 'basique') {
    try {
      await updateDoc(companieColRef, { offre: 'vip' })
      companieStore.companie.offre = 'vip' 

      offre_actuelle.value = 'vip'
    } catch (error) {
      console.log(error)
    }
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
            <b style="color: #219935">{{ offre_actuelle }}</b>
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
                <div class="col-md-12 text-center" v-if="companieStore.companie.offre !=='vip'">
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
                <div class="col-md-12 text-center" v-if="companieStore.companie.offre !== 'basique'">
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
