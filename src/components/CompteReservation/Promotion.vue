<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from "vue";

const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid

onBeforeMount(() => {
  promotionStore.setCompaniePromotionProgrammes(userId)
  companieStore.setCompanieById(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
    <div v-if="promotionStore.companiePromotionProgrammes.length > 0">
      <div class="col" v-for="(promotionProgramme, index) in promotionStore.companiePromotionProgrammes" :key="index">
        <div class="card border-0" style="background: #f3f4f6; padding: 6px">
          <div class="row" style="padding: 6px">
            <div class="col-md-12 d-flex">
              <img
                src="/assets/img/icone/car.png"
                class="img-fluid"
                alt="..."
                style="width: 25px; height: 25px; margin-top: 6px"
              />
              <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px">
                {{ companieStore.companie.raison_social }}
              </h6>
              <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
                <img
                  src="/assets/img/icone/map.png"
                  class="img-fluid"
                  alt="..."
                />
                {{ companieStore.companie.adresse }}
              </p>
            </div>
          </div>
          <div
            class="card h-100"
            id="compagnie_card"
            style="
              padding: 6px;
              background: #a6a6a621;
              box-shadow: none;
              background: transparent;
            "
          >
            <router-link
              to="/detail"
              style="border: 1px solid; border-radius: 5px; border-color: #a6a6a6"
            >
              <img
                src="/assets/img/rb.jpg"
                class="card-img-top"
                alt="..."
                style="
                  border-radius: 5px 5px 5px 5px;
                  height: 215px !important;
                  object-fit: cover;
                "
              />
            </router-link>
            <button class="btn btn-primary" id="badges">
              <s> {{ promotionProgramme.ancien_montant }} FCFA </s>
            </button>
            <button class="btn btn-primary" id="badges0">{{ promotionProgramme.montant }} FCFA</button>
            <button class="btn btn-primary" id="badges012">{{ promotionProgramme.pourcentage }}%</button>
            <button class="btn btn-primary" id="badges0121">
              {{ promotionProgramme.lieu_depart }} - {{ promotionProgramme.destination }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100" v-else>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card text-center">
            <div class="text-center">
              <img src="/assets/img/icone/promo.png" alt="" class="img-fluid w-25">
            </div>
            
            <div class="card-body">
              <p class="card-text">Aucune promotion disponible.</p>
            </div>
          </div>
         
          
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
        
  </div>
</template>
<style></style>
