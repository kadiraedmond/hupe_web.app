<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Pour les partenaires</li>
          </ol>
  
        </div>
      </section> -->
      <!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" >
  
              <div class="row no-gutters mt-4">
                  <div class="col-md-3"></div>
                  <div class="col-md-6 justify-content-center" style="text-align: justify; margin-top: 160px; margin-bottom: 160px;">

                    <div class="text-center">
                        <div class="spinner-border" role="status" style="color: #219935;width: 3rem; height: 3rem;">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="text-center mt-4" style="font-size: 20px; line-height: 2; color: #219935;">
                       <p>Votre inscription s'est bien passé, votre compte est maintenant en attente de validation</p>
                    </div>
                  </div>
                  <div class="col-md-3"></div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style>
</style>