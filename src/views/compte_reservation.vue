<script setup>
import Vehicule from "@/components/CompteReservation/Vehicule.vue"
import Promotion from "@/components/CompteReservation/Promotion.vue"
import Reservation from "@/components/CompteReservation/Reservation.vue"
import Demande from "@/components/CompteReservation/Demande.vue"
import Offres from "@/components/CompteReservation/Offre.vue"
import Collaborateur from "@/components/CompteReservation/Collaborateur.vue"
import Apropos from "@/components/CompteReservation/Apropos.vue"
import Compte from "@/components/CompteReservation/Compte.vue"
import Politique from "@/components/CompteReservation/Politique.vue"

import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from "vue"

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  companieStore.setCompanieById(userId)
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
 

  <main id="main">

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" style="margin-top: 0px;">
      <img :src="companieStore.companie.imageCouvertureUrl" alt="" class="img-fluid w-100" style="height: 380px; object-fit: cover;">
    </section>
    <!-- End Portfolio Details Section -->

    <section id="faq" class="faq" style="margin-top: -70px;">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4" style="  display: flex;">
                  <img :src="companieStore.companie.imageLogoUrl" 
                  alt="" 
                  class="w-px-40 h-auto rounded-circle" 
                  style="width: 100px;
                    height: 100px !important;
                    object-fit: cover;
                    border: 2.8px solid rgb(232, 232, 232);" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ companieStore.companie.raison_social }}</h5>
                    <p class="card-text">{{ companieStore.companie.description }} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 text-end">
          <a v-bind:href="'/dashboard'" id="a_compagnie">
            <button class="btn btn-primary" style="background: #219935;border-color: #219935;"> Tableau de bord</button>
          </a>
          
        </div> -->

        </div>
      </div>
    </section><!-- End Frequently Asked Questions Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" style="margin-top: -40px;">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="voiture-tab" data-bs-toggle="tab" data-bs-target="#voiture-tab-pane"
                  type="button" role="tab" aria-controls="voiture-tab-pane" aria-selected="true"  style="border-radius: 5px 0px 0px 0px !important;">Trajets</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Promotions</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                  type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Activités</button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="demande-tab" data-bs-toggle="tab" data-bs-target="#demande-tab-pane"
                  type="button" role="tab" aria-controls="demande-tab-pane" aria-selected="false">Demandes</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="politique-tab" data-bs-toggle="tab" data-bs-target="#politique-tab-pane"
                  type="button" role="tab" aria-controls="politique-tab-pane" aria-selected="false">Politique</button>
              </li>

             
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
                  type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Offres</button>
              </li>
             
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="comptes-tab" data-bs-toggle="tab" data-bs-target="#comptes-tab-pane"
                  type="button" role="tab" aria-controls="comptes-tab-pane" aria-selected="false">Comptes</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="collaborateur-tab" data-bs-toggle="tab"
                  data-bs-target="#collaborateur-tab-pane" type="button" role="tab" aria-controls="collaborateur-tab-pane"
                  aria-selected="false">Collaborateurs</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="apropos-tab" data-bs-toggle="tab" data-bs-target="#apropos-tab-pane"
                  type="button" role="tab" aria-controls="apropos-tab-pane" aria-selected="false"  style="border-radius: 0px 5px 0px 0px !important;">A propos</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="voiture-tab-pane" role="tabpanel" aria-labelledby="voiture-tab"
                tabindex="0">
               <Vehicule/>
              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <Promotion />
              </div>
              <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <Reservation/>
              </div>
              <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                tabindex="0">

                <Offres />
              </div>

              <div class="tab-pane fade" id="demande-tab-pane" role="tabpanel" aria-labelledby="demande-tab"
                tabindex="0">
                <Demande />
              </div>

              <div class="tab-pane fade" id="politique-tab-pane" role="tabpanel" aria-labelledby="politique-tab"
                tabindex="0">
                 <Politique/>
              </div>

              <div class="tab-pane fade" id="apropos-tab-pane" role="tabpanel" aria-labelledby="apropos-tab" tabindex="0">
                 <Apropos/>
              </div>

              

            <div class="tab-pane fade" id="comptes-tab-pane" role="tabpanel" aria-labelledby="comptes-tab" tabindex="0">
               <Compte/>
            </div>

            <div class="tab-pane fade" id="collaborateur-tab-pane" role="tabpanel" aria-labelledby="collaborateur-tab" tabindex="0">
               <Collaborateur/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End Portfolio Details Section -->



</main>
<!-- End #main -->
</template>
<style scoped>

.nav-tabs .nav-link {
    /* margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); */
    /* background: 0 0; */
    /* border: var(--bs-nav-tabs-border-width) solid transparent; */
    /* border-top-left-radius: var(--bs-nav-tabs-border-radius); */
    /* border-top-right-radius: var(--bs-nav-tabs-border-radius); */
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    border: var(--bs-nav-tabs-border-width) solid transparent;
    /* border-color: #219935; */
    border-radius: 0px !important;
}
</style>