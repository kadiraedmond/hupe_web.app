<script setup>
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from "vue"

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  userStore.setUserHistory(userId)
  userStore.setTotalAmount(userId)
})

const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
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
                          <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-12 text-start">
                              <label for="validationCustom01" class="form-label">Montant</label>
                              <input type="text" class="form-control" id="validationCustom01" required>
                              
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
