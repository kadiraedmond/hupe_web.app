<script setup>
import { onMounted } from 'vue'

const refresh = ()=>{
  window.location.reload()
 } 
 
onMounted(() => {
  window.scrollTo(0, 0)
  this.refresh()
})

</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Accueil</router-link></li>
            <li>Notifications</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" >
  
              <div class="row no-gutters mt-4">
                  <div class="col-md-1"></div>
                  <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <!-- <h3 style=" font-size: 20px; font-weight: 600;">Notifications</h3> -->
                            
                        </div>
                        <div class="col-md-12 " style="background: rgb(249, 249, 249); padding: 24px; border-radius: 10px; margin-top: 22px;">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="padding: 72px; margin-top: -149px;">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Toutes</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Non lues</button>
                            </li>
                            
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0" style="padding: 72px; margin-top: -107px;">
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0" style="padding: 72px; margin-top: -107px;">
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
                                                    </div>
                                                </div>
                                                                                 
                                                                                         
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <img
                                                            src="/public/assets/img/avatars/1.png"
                                                            alt
                                                            class="w-px-40 h-auto rounded-circle"
                                                            style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                        />
                                                        <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">Administrateur</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-10">
                                                        <p class="card-text" style="    font-size: 13px;">Some quick example text to build on the card title and make .</p> 
                                                    </div>
                                                    <div class="col-2 text-end">
                                                        <p style="color: #219935;"><i class='bx bx-check-double' ></i></p>
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
                  </div>
                 
                  <div class="col-md-1"></div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>
.form-check-input[type=radio] {
    border-radius: 15% !important;
}

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