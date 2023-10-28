<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { usePromotionStore } from '@/store/promotion.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from "vue";

const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))
onBeforeMount(() => {
  promotionStore.setCompaniePromotionCars(savedUser.uid || authStore.user.uid || 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1')
})

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
    <div class="col" v-for="(promotionCar, index) in promotionStore.companiePromotionCars" :key="index">
      <div class="card border-0" style="background: #f3f4f6; padding: 6px">
        <div class="row" style="padding: 6px">
          <div class="col-md-12 d-flex">
            <img
              src="/public/assets/img/icone/car.png"
              class="img-fluid"
              alt="..."
              style="width: 25px; height: 25px; margin-top: 6px"
            />
            <h6 style="font-size: 12px; margin-left: 5px; margin-top: 10px">
              {{ companieStore.companie.raison_social }}
            </h6>
            <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
              <img
                src="/public/assets/img/icone/map.png"
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
          <a
            v-bind:href="'/detail'"
            style="border: 1px solid; border-radius: 5px; border-color: #a6a6a6"
          >
            <img
              :src="promotionCar.vehicule_image_url"
              class="card-img-top"
              alt="..."
              style="
                border-radius: 5px 5px 5px 5px;
                height: 215px !important;
                object-fit: cover;
              "
            />
          </a>
          <button class="btn btn-primary" id="badges">
            <s> {{ promotionCar.ancien_montant }} FCFA </s>
          </button>
          <button class="btn btn-primary" id="badges0">{{ promotionCar.montant }} FCFA</button>
          <button class="btn btn-primary" id="badges012">{{ promotionCar.pourcentage }}%</button>
          <button class="btn btn-primary" id="badges0121">
            {{ promotionCar.vehicule }} {{ promotionCar.modele }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
