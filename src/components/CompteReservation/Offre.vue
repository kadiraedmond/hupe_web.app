<script setup>
import { ref, onBeforeMount } from 'vue'
import { useCompanieStore } from '@/store/companie.js'
import { doc, updateDoc} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";
import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()
const companieStore = useCompanieStore()


onBeforeMount(() => {
  companieStore.setCompanieById(authStore.user.uid || 'xnQN1qUGlBZVnH5JuKy7hEQDL0F2') // authStore.user.uid

})

const companieColRef = doc(firestoreDb, "compagnies", `${companieStore.companie.uid}`)

const isVIP = ref(false)

const changeProfilHandler = async () => {
  if(companieStore.companie.offre == 'vip') {
    try {
      await updateDoc(companieColRef, { offre: 'basique' })
      companieStore.companie.offre = 'basique'
    } catch (error) {
      console.log(error)
    }
  } else if(companieStore.companie.offre == 'basique') {
    try {
      await updateDoc(companieColRef, { offre: 'vip' })
      companieStore.companie.offre = 'vip'
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
            <b style="color: #219935">{{ companieStore.companie.offre }}</b>
          </p>

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
                  Mise en avant d’un véhicule ou d’une destination
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
                <div class="col-md-12 text-center">
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
            style="border-color: #219935 !important"
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
                  Mise en avant d’un véhicule ou d’une destination
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
                <div class="col-md-12 text-center">
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
