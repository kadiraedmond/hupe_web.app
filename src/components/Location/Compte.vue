<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from "vue"

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
              <router-link to="" id="a_compagnie">
                <button
                  class="btn btn-primary"
                  style="
                    background-color: rgb(33 153 53);
                    border-color: rgb(33 153 53);
                    margin-top: -8px;
                  "
                >
                  <img
                    src="/public/assets/img/icone/plus.png"
                    class="img-fluid"
                    alt="..."
                  />
                  Demander un retrait
                </button>
              </router-link>
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
                    {{ history.date_retrait }}
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
