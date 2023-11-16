<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue"
import Swal from 'sweetalert2'
import { collection, query, doc, addDoc, updateDoc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  companieStore.setCompanieHistory(userId)
  companieStore.setTotalAmount(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const showWithdrawModal = ref(false)

const checkAccount = () => {
  if(Number(companieStore.totalAmount.solde) < 50000) {
    Swal.fire({
    title: "Erreur",
    text: "Votre solde est insuffisant pour un retrait",
    icon: "error"
  })
  } else if(Number(companieStore.totalAmount.solde) >= 50000) {
    showWithdrawModal.value = true
  }
}

const montant = ref()
const retrait = async () => {
  try {
    const retraitColRef = collection(firestoreDb, 'retrait') 

    const data = {
      body: Number(montant.value), 
      compagnieUID: userId, 
      date: new Date(), 
      solde: Number(companieStore.totalAmount.solde), 
      status: 'En attente', 
      title: 'Retrait'
    }

    await addDoc(retraitColRef, data)

    Swal.fire({
      title: "Succès",
      text: "Votre demande a été effectuée",
      icon: "success"
    })

    const notificationColRef = collection(firestoreDb, 'notifications')
  
    const comp_notif = {
      title: 'Demande de retrait', 
      message: `Vous avez demandé un retrait de FCFA ${montant.value}, qui sera crédité sur votre compte après validation par l'administrateur.`, 
      userId: userId, 
      lu: false, 
      createdAt: new Date() 
    }
  
    await addDoc(notificationColRef, comp_notif)

  } catch (error) {
    Swal.fire({
      title: "Erreur",
      text: "Erreur lors du traitement de la demande",
      icon: "error"
    })
    console.log(error)
  }
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <h1 style="font-size: 20px">Historiques des transanctions</h1>
        </div>
        <div class="col-md-6">
          <div class="row mb-4">
            <div class="col-md-6">
              <p><strong> Solde |</strong> {{ companieStore.totalAmount.solde }}</p>
            </div>
            <div class="col-md-6 text-end">
              <button
                class="btn btn-primary"
                style="
                  background-color: rgb(33 153 53);
                  border-color: rgb(33 153 53);
                  margin-top: -8px;
                " 
                :data-bs-toggle="showWithdrawModal && 'modal'" :data-bs-target="showWithdrawModal && '#exampleModalr'" 
                @click="checkAccount"
              >
                <img
                  src="/public/assets/img/icone/plus.png"
                  class="img-fluid"
                  alt="..."
                />
                Demander un retrait
              </button>

              <!-- Modal -->
              <div class="modal fade" :id="showWithdrawModal && 'exampleModalr'" tabindex="-1" aria-labelledby="exampleModalLabelr" aria-hidden="true" v-show="showWithdrawModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header" style="background: #219935">
                      <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Demande de retrait</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-end">
                      <div class="row">
                        <div class="col-md-12"></div>
                        <div class="col-md-12">
                          <form @submit.prevent="retrait" class="row g-3 needs-validation" novalidate>
                            <div class="col-md-12 text-start">
                              <label for="validationCustom01" class="form-label">Entrez le montant</label>
                              <input type="number" class="form-control" v-model="montant" required>
                              
                            </div>
                            
                            <div class="col-12">
                              <button class="btn btn-primary" type="submit" style="background: #219935; border-color: #219935;">Valider</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6" v-for="(history, index) in companieStore.companieHistory" :key="index">
          <div class="row">
            <div
              class="col-md-12 mb-4"
              style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            >
              <div class="row">
                <div class="col-md-8">
                  <p style="font-size: 17px; font-weight: 600">
                    {{ history.title }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <img src="/public/assets/img/icone/calendar.png" alt="" />
                    {{ new Intl.DateTimeFormat(undefined, options).format(history.datePayement) }}
                  </p>
                </div>
              </div>
              <p>{{ history.title }}</p>
              <div class="row mb-2">
                <div class="col-md-8">
                  <p>
                    Montant |
                    <strong>
                      <img src="/public/assets/img/icone/circle.png" alt="" />
                      {{ history.montantVerser }} FCFA</strong
                    >
                  </p>
                </div>
                <div class="col-md-4">
                  <button
                    class="btn btn-primary"
                    style="background: #219935; border-color: #219935"
                  >
                    Solde : {{ history.solde }} F
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
