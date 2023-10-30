<script>
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
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Location de gros engin</li>
            <li>Catterpillar 2022</li>

          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">
  
              <div class="row no-gutters mt-4">
               
                <div class="col-md-5">
                    <div class="row row-cols-1 row-cols-md-4 g-2">
                    <div class="col">
                        <div class="card border-0" style="background :#219935 ;"> 
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Marque </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Caterpillar</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#F77F00 ;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Modéle </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Yaris</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#3987FB ;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Année </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#FF5733;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;">Catégorie</h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Tracteur</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#FFD700 ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Moteur </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Essence</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#FF5733 ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 13px; font-weight: 700;"> Immatriculation </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">BG 25152</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#665D1E ;">
                        
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Transmission </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">Automatique</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0" style="background :#3987FB ;">
                         
                            <div class="card-body text-center">
                                <h5 class="card-title" style="font-size: 15px; font-weight: 700;"> Année </h5>
                                <hr style="color: white">
                                <p class="card-text text-white">2022</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-6">
                            <p>Montant</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935;">    50 000 FCFA</button>
                        </div>
                         
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <p>Option chauffeur</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935;"><i class="bx bx-plus"></i>   50 000 FCFA</button>
                        </div>
                         
                    </div>
                    

                    <div class="row mt-4">
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style=" background: #219935; border-color: #219935; margin-top: 20px;">Reserver</button>
                        </div>
                        <div class="col-md-6 text-end">
                            <button class="btn btn-primary w-100" style="background: #8b8b8b; border-color: #efefef;  width: 70px !important;  height: 70px; border-radius: 50%;"> <img src="" alt="logo" style=" width: 70px !important;  height: 70px; border-radius: 50%;"> </button>
                        </div>
                        
                         
                    </div>
                </div>
                <div class="col-md-7">
                    <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                    <div class="row mt-4">
                        <div class="col-md-2"></div>
                    <div class="col-md-8" style="margin-top: 14px;">
                        <div class="row mt-4">
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                            <div class="col-md-3">
                                <img src="/public/assets/img/cc.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    </div>
                </div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->

       <!-- ======= Expertise et conseils en immobiliers Section ======= -->
     <section id="features" class="features" style="margin-top: -60px;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2 style="    font-size: 22px;
    color: black;">Véhicule de la même compagnie </h2>
              

            </div>
          </div>

        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
              <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
              </a>
              <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
               2000 FCFA
             </button>


              <div class="card-body">
                <router-link to="/details_vente_engin">
                  <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                     
                  </div>
                </router-link>
               
               
              </div>
            </div>
          </div>
          <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
            <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
            </a>
            <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
            2000 FCFA
            </button>


            <div class="card-body">
                <router-link to="/details_vente_engin">
                <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                    
                </div>
                </router-link>
            
            
            </div>
            </div>
            </div>
            <div class="col">

            <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
            <a v-bind:href="'/details_vente_engin'">
                <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
            </a>
            <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
            2000 FCFA
            </button>


            <div class="card-body">
                <router-link to="/details_vente_engin">
                <div class="row">
                    <div class="col-md-12">    
                        <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                    </div>
                    
                </div>
                </router-link>
            
            
            </div>
            </div>
            </div>
            <div class="col">

                <div class="card h-100" id="compagnie_card" style="background: #f3f4f6; box-shadow: none;">
                <a v-bind:href="'/details_vente_engin'">
                    <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
                </a>
                <button class="btn btn-primary" id="badges0" style="left: 10px !important;">
                2000 FCFA
                </button>


                <div class="card-body">
                    <router-link to="/details_vente_engin">
                    <div class="row">
                        <div class="col-md-12">    
                            <h5 class="card-title" style="font-size: 15px; color:black">Toyota yaris 2022</h5>     
                        </div>
                        
                    </div>
                    </router-link>
                
                
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>



</template>

<style>
</style>