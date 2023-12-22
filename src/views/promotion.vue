<script setup>
import { onMounted, onBeforeMount } from 'vue'
import Location from "@/components/Promotions/location.vue";
import Reservation from "@/components/Promotions/reservation.vue";
import Gros from "@/components/Promotions/gros.vue";
import Vente from "@/components/Promotions/vente.vue";

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Promotions</li>
            

          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->

        <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ">
            <h4>En promotions</h4>
            <p> Ne manquez pas nos offres spéciales du moment ! Découvrez des
                promotions exclusives pour rendre votre voyage encore plus
                mémorable.</p>
          </div>
           
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <div class="d-flex align-items-start">
              <div class="row w-100">
                <div class="col-md-3">
                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Location de véhicules</button>
                    <button class="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Reservation de tickets</button>
                    <button class="nav-link text-start" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >Locations de gros engins</button>
                    <button class="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Vente de véhicules</button>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <Location />
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                  <Reservation />
                </div>
                <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                  <Gros />
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                  <Vente />
                </div>
                 
              </div>
                </div>
              </div>
              
              
          </div>
          </div>
        </div>
        
      </div>
    </section>
  
 
</template>

<style scoped>
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #219935;
}



.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius);
    color: black;
}
</style>