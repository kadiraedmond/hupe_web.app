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
          <div class="container">
  
            <div class="row no-gutters mt-4">
                <div class="col-md-3"></div>
                <div class="col-md-6 justify-content-center">
                    <div class="row" style="border: 1px solid #efefef; border-radius: 10px; padding: 10px;">
                            <div class="col-md-12 mt-4">
                              <h6>Donnez-nous votre avis</h6>
                              <div class="row mt-3">
                                <div class="col-6 d-flex">
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service nul</p>

                                </div>
                                <div class="col-6">
                                   
                                </div>
                              </div>
                               

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service médiocre</p>

                                </div>
                                
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service passable</p>

                                </div>
                                 
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service assez bien</p>

                                </div>
                                
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service bien</p>

                                </div>
                                 
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service excelent</p>

                                </div>
                                 
                              </div>
                              
                              
                            </div>
                            <div class="col-md-12 mb-4">
                              <h6>Êtes-vous satisfait(e) du service de location de la compagnie Nom compagnie</h6>
                              <form class="row g-3 needs-validation mt-4" novalidate>
                              <div class="col-md-12 mb-4">
                                <div class="row">
                                  <div class="col-md-3"></div>
                                  <div class="col-md-6 d-flex" style="margin-left: -24px;">
                                    <div class="form-check" style="margin-left: 6px;">
                                     <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    </div>

                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    </div>
                                  </div>
                                  <div class="col-md-3"></div>
                                </div>
                                
                                 
                              </div>
                              <div class="col-md-12">
                                <div class="form-floating">
                                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                  <label for="floatingTextarea2">Comments</label>
                                </div>
                                 
                              </div>

                              
                              <div class="col-12 text-center">
                                <button class="btn btn-primary" type="submit" style="background-color:#219935 !important ; border-color:#219935 ;">Envoyer</button>
                              </div>
                            </form>
                            </div>
                           </div>
                </div>
                <div class="col-md-3"></div>
            </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>

.form-check-input {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid #d9d9d9; /* Couleur de l'étoile, vous pouvez la changer selon vos préférences */
    
}

.form-check-input::before {
  content: '';
  position: absolute;
  top: 12px;
  left: -25px;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 40px solid #d9d9d9; /* Couleur de l'étoile */
   
}

.form-check-input:checked {
    background-color: #fbe739 !important;
    border-color: #fbe739 !important;
}
</style>