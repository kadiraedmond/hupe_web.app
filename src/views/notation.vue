<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Accueil</router-link></li>
            <li>Notations</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" style="box-shadow: 1px 1px 3px #00000040;">
  
            <div class="row no-gutters mt-4">
                <div class="col-md-1"></div>
                <div class="col-md-10 justify-content-center">
                <div class="row">
                    <div class="col-12 mt-2">
                        <div class="row">
                            <div class="col-4">
                                <div class="card mb-3 border-0" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 60px; height: 60px !important; border-radius: 50%;" />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <router-link to="/">
                                            <h5 class="card-title" style="font-size: 15px;">NomCompagnie</h5>
                                        </router-link>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4 text-end">
                                <button class="btn btn-primary" style="background-color: white !important; border-color: #219935; color:#219935 !important ; margin-top: 14px;"> <i class="bx bx-like" style="color: #219935"></i>  20 </button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-12 mt-2">
                        <div class="row">
                            <div class="col-4">
                                <div class="card mb-3 border-0" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 60px; height: 60px !important; border-radius: 50%;" />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <router-link to="/">
                                            <h5 class="card-title" style="font-size: 15px;">NomCompagnie</h5>
                                        </router-link>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4 text-end">
                                <button class="btn btn-primary" style="background-color: white !important; border-color: #219935; color:#219935 !important ; margin-top: 14px;"> <i class="bx bx-like" style="color: #219935"></i>  20 </button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-12 mt-2">
                        <div class="row">
                            <div class="col-4">
                                <div class="card mb-3 border-0" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" style="width: 60px; height: 60px !important; border-radius: 50%;" />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <router-link to="/">
                                            <h5 class="card-title" style="font-size: 15px;">NomCompagnie</h5>
                                        </router-link>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4 text-end">
                                <button class="btn btn-primary" style="background-color: white !important; border-color: #219935; color:#219935 !important ; margin-top: 14px;"> <i class="bx bx-like" style="color: #219935"></i>  20 </button>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                </div>
                <div class="col-md-1"></div>
            </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style>
</style>