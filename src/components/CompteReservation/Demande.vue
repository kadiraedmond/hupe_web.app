<script setup>
import { useDemandeStore } from '@/store/demande.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, ref , onMounted } from "vue"
import { useCompanieStore } from '@/store/companie.js'

import { collection, doc, getDoc} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const demandeStore = useDemandeStore()
const authStore = useAuthStore()
const companieStore = useCompanieStore()

const usersColRef = collection(firestoreDb, 'users')


const userInformations = ref({})

const getClientInformations = async (clientId) => {
  try {
      const userDocRef = doc(usersColRef, `${clientId}`)
      const snapshot = await getDoc(userDocRef);

      if(snapshot.exists()) userInformations.value = snapshot.data()
  } catch (error) {
      console.log(error)
  }
}

onBeforeMount(() => {
  demandeStore.setReservationDemandes()
  companieStore.setCompanieById(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="row mt-5" v-if="companieStore.companie.status == 'active'">
    <div class="col-md-6 my-1" v-for="(demande, index) in demandeStore.reservationDemandes" :key="index" style="margin-bottom: 19px !important;">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary w-100 text-start"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal10' + index"
        style="
          background: white !important;
          box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px 1px;
          border: none;
        "
      >
        <p style="color: #219935">{{ demande.objet }}</p>
        <p class="text-black">{{ demande.demande }}</p>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal10' + index"
        tabindex="-1"
        aria-labelledby="exampleModalLabel10"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel10">
                Informations du client
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3">
                <div class="col-md-12">
                  <p>client | {{ demande.userInfos.lastName }} {{ demande.userInfos.firstName }} </p>
                  <p>Adresse | {{ demande.userInfos.addresse }}</p>
                  <p>Contact | {{ demande.userInfos.telephone }}</p>
                  <p>Objet | {{ demande.objet }}</p>
                  <p>Demande | {{ demande.demande }}</p>
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label"
                    >Entrez votre reponse
                  </label>
                  <textarea
                    class="form-control"
                    id="validationTextarea"
                    placeholder="Reponse"
                    required
                  ></textarea>
                </div>

                <div class="col-12 text-center">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style="background: #219935; border-color: #219935"
                  >
                    Repondre
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
