<script setup>
$('#summernote').summernote({
        placeholder: 'Hello stand alone ui',
        tabsize: 2,
        height: 120,
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'video']],
          ['view', ['fullscreen', 'codeview', 'help']]
        ]
      });
 
</script>
<template>
     <section id="features" class="features mt-4">
      <div class="container">
        <div class="row mb-4" style="margin-top: -51px;
    margin-bottom: 33px !important;">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="row" style="padding: 10px; border-radius: 5px;">
                <div class="col-md-12">
                  <form class="d-flex" role="search" @submit.prevent="handleSearch">
                    <input
                      class="form-control me-2 text-white"
                      type="search"
                      placeholder="Rechercher"
                      v-model="searchTerm"
                      aria-label="Search"
                      id="search"
                    />
                    <i class="bx bx-search" type="submit" id="icon_search"></i>
                    <!-- <button class="btn btn-outline-success" type="submit" style="margin-left: -90px;">Search</button> -->
                  </form>

                 
                </div>
              </div>
          </div>
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col"
            v-for="(vehicule, index) in promotionStore.popularCars"
            :key="index"
          >
            <router-link
              :to="`/detail_vehicule_location/${vehicule.uid}`"
              style="color: #000"
            >
              <div class="card h-100 border-0" id="card_compagnie">
                <div class="row" style="margin: 0px">
                  <div class="col-md-12">
                    <div
                      class="card h-100 mb-3 border-0"
                      style="background: #f9f9f9;"
                    >
                      <div class="row g-1 d-flex mt-2">
                        
                        <div class="col-8 d-flex">
                          <img
                            :src="vehicule.companieInfos.imageLogoUrl"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 12px">
                                {{ vehicule.companieInfos.raison_social }}
                              </h5>
                              <p class="card-text" style="font-size: 12px">
                                <i
                                  class="bx bx-map"
                                  style="color: rgb(139 139 139); margin-left: 5px"
                                ></i>
                                {{ vehicule.companieInfos.adresse }}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-4 text-end">
                          <button
                            class="btn btn-primary"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 5px;
                              font-size: 12px;
                            "
                          >
                            {{ vehicule.montant }} FCFA
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-3 mt-4"
                  style="
                    max-width: 540px;
                    margin: 8px;
                    margin-top: -10px !important;
                    background: #f9f9f9;
                  "
                >
                  <div class="row g-0" style="margin: 10px">
                    <div class="col-4">
                      <img
                        :src="vehicule.vehicule_image_url"
                        class="img-fluid h-100"
                        alt="..."
                        style="
                          width: 150px;
                          height: 160px !important;
                          object-fit: cover;
                        "
                      />
                    </div>
                    
                    <div class="col-8">
                      <div class="card-body">
                        <p class="card-text" style="font-size: 13px ; ">
                          {{ vehicule.vehicule }} |{{  vehicule.annee }}
                        </p>
                        <p class="card-text" style="font-size: 13px">
                          <strong style=" font-weight: 500;">Modéle | </strong> {{ vehicule.modele }}
                        </p>
                        <p class="card-text" style="font-size: 13px">
                          <strong style=" font-weight: 500;">Moteur | </strong> {{ vehicule.moteur }}
                        </p>
                        <p class="card-text" style="font-size: 13px">
                          <strong style=" font-weight: 500;">Immatriculation | </strong>
                          {{ vehicule.serie_vehicule }}
                        </p>
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
</template> 
<style>
</style>