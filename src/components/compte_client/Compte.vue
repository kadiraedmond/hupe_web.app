<script setup>
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue"
import { updateDoc, doc, collection, getDoc } from "firebase/firestore"

const userStore = useUserStore()
const authStore = useAuthStore()
import Swal from 'sweetalert2'

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  userStore.setUser(userId)
  userStore.setUserHistory(userId)
  userStore.setTotalAmount(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const montant = ref()

const apiKey = '8147832776464ac622a6806.22624295'
const site_id = '132831'

const recharge = async () => {
  function checkout() {
    CinetPay.setConfig({
        apikey: apiKey,   //   YOUR APIKEY
        site_id: site_id,  //YOUR_SITE_ID
        notify_url: 'http://hupe-africa.com/notify/',
        mode: 'PRODUCTION'
    })
    CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
        amount: Number(montant.value),
        currency: 'XOF',
        channels: 'ALL',
        description: `Rechargement de compte`,   
          //Fournir ces variables pour le paiements par carte bancaire
        customer_name: `${userStore.user.lastName}`,//Le nom du client
        customer_surname: `${userStore.user.firstName}`,//Le prenom du client
        // customer_email: `${userStore.user.email}`,//l'email du client
        customer_phone_number: `${userStore.user.telephone}`,//l'email du client
        // customer_address : `${userStore.user.addresse}`,//addresse du client
        // customer_city: '',// La ville du client
        // customer_country : `${userStore.user.country}`,// le code ISO du pays
        // customer_state : `${userStore.user.country}`,// le code ISO l'état
        // customer_zip_code : '', // code postal

    })
    CinetPay.waitResponse(async (data) => {
        if (data.status == "REFUSED") {
          Swal.fire({
            title: "Erreur",
            text: "Votre rechargement a échoué",
            icon: "error"
          })

        } else if (data.status == "ACCEPTED") {

          const userDocRef = doc(firestoreDb, 'users', `${userId}`)
          const userSubColRef = collection(userDocRef, 'myAccount')
          const accountDocRef = doc(userSubColRef, 'account')

          const snapshot = await getDoc(accountDocRef)

          let amount
          if(snapshot.exists()) amount = snapshot.data()

          let data = {}
          if(!amount.solde || amount.solde == 0 || amount.solde === '') {
            data = {
              solde: Number(montant.value), 
              new_recharge: new Date()
            }
          } else {
            data = {
              solde: Number(amount.solde) + Number(montant.value), 
              new_recharge: new Date()
            }
          }

          const update = await updateDoc(accountDocRef, data)

          if(update) {
            console.log('Rechargement effectué')
          }

          Swal.fire({
            title: "Succès",
            text: "Votre rechargement a été effectué avec succès",
            icon: "success"
          })

          const notificationColRef = collection(firestoreDb, 'notifications')

          const data = {
            title: 'Rechargement de compte', 
            message: `Votre compte a été crédité de FCFA ${montant.value}. Profitez de ce solde pour vos prochaines commandes.`, 
            destinataire: userId,
            lu: false, 
            createdAt: new Date()
          }

          try {
            await addDoc(notificationColRef, data)
          } catch (error) {
            console.log(error)
          }

        }
    })
    CinetPay.onError((data) => {
      console.log(data)
    })
  }

  checkout()
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
              <p><strong> Solde |</strong> {{ userStore.totalAmount.solde }}</p>
            </div>
            <div class="col-md-6 text-end">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" style="
                    background-color: rgb(33 153 53);
                    border-color: rgb(33 153 53);
                    margin-top: -8px;
                  " data-bs-toggle="modal" data-bs-target="#exampleModalr">
                  <img
                    src="/public/assets/img/icone/plus.png"
                    class="img-fluid"
                    alt="..."
                  />
                Recharger
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModalr" tabindex="-1" aria-labelledby="exampleModalLabelr" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Recharger</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-end">
                      <div class="row">
                        <div class="col-md-12"></div>
                        <div class="col-md-12">
                          <form @submit.prevent="recharge" class="row g-3 needs-validation" novalidate>
                            <div class="col-md-12 text-start">
                              <label for="validationCustom01" class="form-label">Montant</label>
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
        <div class="col-md-6" v-for="(history, index) in userStore.userHistory" :key="index">
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
                    {{ new Intl.DateTimeFormat(undefined, options).format(history.date) }}
                  </p>
                </div>
              </div>
              <p>{{ history.title }}</p>
              <div class="row mb-2">
                <div class="col-md-8">
                  <p>
                    Topic |
                    <strong>
                      <img src="/public/assets/img/icone/circle.png" alt="" />
                      {{ history.topic }}</strong
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
