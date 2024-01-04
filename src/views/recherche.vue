<script setup>
import { onMounted, onBeforeMount, ref } from "vue"
import { useSearchStore } from "@/store/search.js"
import { encryptParam } from '@/utils/hash.js'

const searchStore = useSearchStore()

const results = ref([]) 
const locationCompanies = ref([]) 
const transportCompanies = ref([]) 

onBeforeMount(() => {
  results.value = searchStore.results 

  searchStore.companiesResults.forEach(comp => {
    if(comp.type_compagnie === 'Location') {
        locationCompanies.value.push(comp) 
    } else if(comp.type_compagnie === 'Transport') {
        transportCompanies.value.push(comp)
    }
  }) 
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul
            class="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
            style="flex-wrap: nowrap; overflow-x: auto"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active mb-3"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Résultats
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-location-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-location"
                type="button"
                role="tab"
                aria-controls="pills-location"
                aria-selected="false"
              >
                Locations de véhicules
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-reservation-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-reservation"
                type="button"
                role="tab"
                aria-controls="pills-reservation"
                aria-selected="false"
              >
                Réservations de tickets
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-location2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-location2"
                type="button"
                role="tab"
                aria-controls="pills-location2"
                aria-selected="false"
              >
                Locations de gros engins
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-achat-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-achat"
                type="button"
                role="tab"
                aria-controls="pills-achat"
                aria-selected="false"
              >
                Achats de véhicules
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-vl-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-vl"
                type="button"
                role="tab"
                aria-controls="pills-vl"
                aria-selected="false"
              >
                Véhicules en location
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-trajet-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trajet"
                type="button"
                role="tab"
                aria-controls="pills-trajet"
                aria-selected="false"
              >
                Trajets
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-engin-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-engin"
                type="button"
                role="tab"
                aria-controls="pills-engin"
                aria-selected="false"
              >
                Gros engins en location
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                Véhicules en vente
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content mt-4 mb-4" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >

            <div class="row">
                
                <div class="col-md-12"> 
                    <div class="row row-cols-1 row-cols-md-4 mt-4 mb-4 g-4"> 
                        <div
                            class="col"
                            v-for="(companie, i) in searchStore.companiesResults" :key="i"
                        >
                            <div
                            class="card h-100"
                            id="compagnie_card"
                            style="background: #f9f9f9; box-shadow: none"
                            
                            >
                                <router-link :to="companie.type_compagnie ==='Location' ? `/detail/${encryptParam(companie.uid)}` : companie.type_compagnie ==='Transport' ? `/details/${encryptParam(companie.uid)}` : ``" style="color: #000">
                                    <img
                                    :src="companie.imageCouvertureUrl"
                                    class="card-img-top"
                                    alt="..."
                                    style="
                                        border-radius: 10px 10px 0px 0px;
                                        max-height: 174px;
                                        object-fit: cover;
                                    "
                                    />
                                </router-link>

                                <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                                <div class="card-body">
                                    <router-link to="/detail" style="color: #000">
                                        <div class="row mt-2">
                                            <div class="col-md-7">
                                            <h5
                                                class="card-title"
                                                style="font-size: 15px; color: black"
                                            >
                                                {{ companie.raison_social }}
                                            </h5>
                                            </div>
                                            <div class="col-md-5 text-end">
                                                <boutton
                                                    class="btn btn-primary"
                                                    style="
                                                    background: white;
                                                    border-color: white;
                                                    border-radius: 30px;
                                                    color: #219935;
                                                    margin-top: -9px;
                                                    "
                                                >
                                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                                </boutton>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <p class="card-text mt-2" style="font-size: 14px">
                                            <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                            </p>
                                        </div>
                                        <div class="col-md-4 text-center mt-2">
                                            <i
                                            class="bx bx-car"
                                            style="color: #8b8b8b; font-size: 21px"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4 g-4">
                        <div
                            class="col"
                            v-for="(vehicule, i) in searchStore.vehiculesResults" :key="i"
                        >
                            <router-link
                            :to="`/detail_vehicule_location/${encryptParam(vehicule.uid)}`"
                            style="color: #000"
                            >
                                <div class="card h-100 border-0" id="card_compagnie">
                                    <div class="row" style="margin: 0px">
                                    <div class="col-md-12">
                                        <div
                                        class="card mb-3 border-0"
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
                                                {{ vehicule.companieInfos.description }}  
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
                                            object-fit: cover;
                                            "
                                        />
                                        </div>
                                        
                                        <div class="col-8">
                                        <div class="card-body">
                                            <p class="card-text" style="font-size: 13px ; ">
                                            {{ vehicule.vehicule }} | {{ vehicule.anne_vehicule }}
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
                    <div class="row row-cols-1 row-cols-md-2 mb-4 g-4">
                        <div
                            class="col"
                            v-for="(trajet, i) in searchStore.trajetsResults" :key="i"
                        >
                            <router-link
                            :to="`/detail_reservation_ticket/${encryptParam(trajet.uid)}`"
                            style="color: #000"
                            >
                                <div class="card h-100 border-0" id="card_compagnie">
                                    <div class="row" style="margin: 0px">
                                        <div class="col-md-12">
                                            <div
                                            class="card mb-3 border-0"
                                            style="background: #f9f9f9;"
                                            >
                                            <div class="row g-1 d-flex mt-2">
                                                
                                                <div class="col-8 d-flex">
                                                <img
                                                    :src="trajet.companieInfos.imageLogoUrl"
                                                    alt
                                                    class="w-px-40 h-auto rounded-circle"
                                                    style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                                />
                                                <div>
                                                    <div class="card-body d-flex">
                                                    <h5 class="card-title" style="font-size: 12px">
                                                        {{ trajet.companieInfos.raison_social }}
                                                    </h5>
                                                    <p class="card-text" style="font-size: 12px">
                                                        <i
                                                        class="bx bx-map"
                                                        style="color: rgb(139 139 139); margin-left: 5px"
                                                        ></i>
                                                        {{ trajet.companieInfos.description }}  
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
                                                {{ trajet.montant }} FCFA
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
                                            src="/assets/img/rb.jpg"
                                            class="img-fluid h-100"
                                            alt="..."
                                            style="
                                            width: 150px;
                                            object-fit: cover;
                                            "
                                        />
                                        </div>
                                        
                                        <div class="col-8">
                                        <div class="card-body">
                                            <p class="card-text" style="font-size: 13px ; ">
                                                Trajets | {{ trajet.lieu_depart }} - {{ trajet.destination }}
                                            </p>
                                            <p class="card-text" style="font-size: 13px">
                                            <strong style=" font-weight: 500;">Escales | </strong> {{ trajet.escale }}
                                            </p>
                                            <p class="card-text" style="font-size: 13px">
                                            <strong style=" font-weight: 500;">Convocation | </strong> {{ trajet.heure_convocation }}
                                            </p>
                                            <p class="card-text" style="font-size: 13px">
                                            <strong style=" font-weight: 500;">Jours du voyage | </strong>
                                            {{ trajet.jours_voyage }}
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
            </div>
           
        </div>
         
        <!-- locations de véhicule -->
        <div
          class="tab-pane fade show "
          id="pills-location"
          role="tabpanel"
          aria-labelledby="pills-location-tab"
          tabindex="0"
        >

            <div class="row">
                <div class="col-md-3">
                    <form class="row g-3 needs-validation" method="post" action="">
                        
                        <div class="col-md-12">
                        
                        <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                            <option v-for="(companie, i) in locationCompanies" :key="i">{{ companie.raison_social }}</option> 
                        </select>
                        
                        </div>
                        <div class="col-md-12">
                        
                        <input type="text" name="Ville" class="form-control" id="validationCustom02" placeholder="Ville">
                        
                        </div>
                        <div class="col-md-12">
                        
                            <input type="text" name="promotion" class="form-control" id="validationCustomUsername" placeholder="En promotion" aria-describedby="inputGroupPrepend">
                            
                        </div>
                    
                        <div class="col-12">
                        <div class="row g-1">
                            <div class="col-md-6">
                            <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                            </div>
                            
                        </div>
                        
                        </div>
                    </form>

                </div>

                <div class="col-md-9">
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div
                            class="col"
                            v-for="(companie, i) in locationCompanies" :key="i" 
                        >
                            <div
                            class="card h-100"
                            id="compagnie_card"
                            style="background: #f9f9f9; box-shadow: none"
                            
                            >
                            <router-link :to="`/detail/${encryptParam(companie.uid)}`" style="color: #000">
                                <img
                                :src="companie.imageCouvertureUrl"
                                class="card-img-top"
                                alt="..."
                                style="
                                    border-radius: 10px 10px 0px 0px;
                                    max-height: 174px;
                                    object-fit: cover;
                                "
                                />
                            </router-link>

                            <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                            <div class="card-body">
                                <router-link to="/detail" style="color: #000">
                                <div class="row mt-2">
                                    <div class="col-md-7">
                                    <h5
                                        class="card-title"
                                        style="font-size: 15px; color: black"
                                    >
                                        {{ companie.raison_social }}
                                    </h5>
                                    </div>
                                    <div class="col-md-5 text-end">
                                    <boutton
                                        class="btn btn-primary"
                                        style="
                                        background: white;
                                        border-color: white;
                                        border-radius: 30px;
                                        color: #219935;
                                        margin-top: -9px;
                                        "
                                    >
                                        <i class="bx bx-like" style="color: #219935"></i> 30%
                                    </boutton>
                                    </div>
                                </div>
                                </router-link>
                                <div class="row">
                                <div class="col-md-8">
                                    <p class="card-text mt-2" style="font-size: 14px">
                                    <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                    </p>
                                </div>
                                <div class="col-md-4 text-center mt-2">
                                    <i
                                    class="bx bx-car"
                                    style="color: #8b8b8b; font-size: 21px"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           
        </div>


        <!-- Reservation de tickets -->
        <div
          class="tab-pane fade show "
          id="pills-reservation"
          role="tabpanel"
          aria-labelledby="pills-reservation-tab"
          tabindex="0"
        >

        <div class="row">
            <div class="col-md-3">
                <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option v-for="(companie, i) in transportCompanies" :key="i">{{ companie.raison_social }} </option>
                      </select>
                      
                    </div>
                    <div class="col-md-12">
                       
                      <input type="text" name="Ville" class="form-control" id="validationCustom02" placeholder="Ville">
                    
                    </div>
                    <div class="col-md-12">
                      
                        <input type="text" name="promotion" class="form-control" id="validationCustomUsername" placeholder="En promotion" aria-describedby="inputGroupPrepend">
                         
                    </div>
                   
                    <div class="col-12">
                      <div class="row g-1">
                        <div class="col-md-6">
                          <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                        </div>
                        
                      </div>
                      
                    </div>
                  </form>

            </div>

            <div class="col-md-9">
                
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <div
                    class="col"
                     v-for="(companie, i) in transportCompanies" :key="i"
                >
                    <div
                    class="card h-100"
                    id="compagnie_card"
                    style="background: #f9f9f9; box-shadow: none"
                    
                    >
                        <router-link :to="`/details/${encryptParam(companie.uid)}`" style="color: #000">
                            <img
                            :src="companie.imageCouvertureUrl"
                            class="card-img-top"
                            alt="..."
                            style="
                                border-radius: 10px 10px 0px 0px;
                                max-height: 174px;
                                object-fit: cover;
                            "
                            />
                        </router-link>

                        <img :src="companie.imageLogoUrl" alt="" id="badgesLogo">

                        <div class="card-body">
                            <router-link to="/detail" style="color: #000">
                            <div class="row mt-2">
                                <div class="col-md-7">
                                <h5
                                    class="card-title"
                                    style="font-size: 15px; color: black"
                                >
                                    {{ companie.raison_social }}
                                </h5>
                                </div>
                                <div class="col-md-5 text-end">
                                <boutton
                                    class="btn btn-primary"
                                    style="
                                    background: white;
                                    border-color: white;
                                    border-radius: 30px;
                                    color: #219935;
                                    margin-top: -9px;
                                    "
                                >
                                    <i class="bx bx-like" style="color: #219935"></i> 30%
                                </boutton>
                                </div>
                            </div>
                            </router-link>
                            <div class="row">
                            <div class="col-md-8">
                                <p class="card-text mt-2" style="font-size: 14px">
                                <i class="bx bx-map" style="color: #8b8b8b"></i> {{ companie.adresse }}
                                </p>
                            </div>
                            <div class="col-md-4 text-center mt-2">
                                <i
                                class="bx bx-car"
                                style="color: #8b8b8b; font-size: 21px"
                                ></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

           
        </div>

        <div
          class="tab-pane fade show "
          id="pills-location2"
          role="tabpanel"
          aria-labelledby="pills-location2-tab"
          tabindex="0"
        >

        <div class="row">
            <div class="col-md-3">
                <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option>Raison sociale </option>
                        <option value="loren">NomCompagies</option>
                        <option value="loren">NomCompagies</option>
                      </select>
                      
                    </div>
                    <div class="col-md-12">
                       
                      <input type="text" name="Ville" class="form-control" id="validationCustom02" placeholder="Ville">
                    
                    </div>
                    <div class="col-md-12">
                      
                        <input type="text" name="promotion" class="form-control" id="validationCustomUsername" placeholder="En promotion" aria-describedby="inputGroupPrepend">
                         
                    </div>
                   
                    <div class="col-12">
                      <div class="row g-1">
                        <div class="col-md-6">
                          <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                        </div>
                        
                      </div>
                      
                    </div>
                  </form>

            </div>

            <div class="col-md-9">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`//detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
                                    </p>
                                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </router-link>
                    </div>

                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`//detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
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
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                <div
                    class="col"
                     
                >
                    <div
                    class="card h-100"
                    id="compagnie_card"
                    style="background: #f9f9f9; box-shadow: none"
                    
                    >
                    <router-link to="/details_location_engin" style="color: #000">
                        <img
                        src="/assets/img/car2.jpg"
                        class="card-img-top"
                        alt="..."
                        style="
                            border-radius: 10px 10px 0px 0px;
                            max-height: 174px;
                            object-fit: cover;
                        "
                        />
                    </router-link>

                    <img src="/assets/img/avatars/5.png" alt="" id="badgesLogo">

                    <div class="card-body">
                        <router-link to="/detail" style="color: #000">
                        <div class="row mt-2">
                            <div class="col-md-7">
                            <h5
                                class="card-title"
                                style="font-size: 15px; color: black"
                            >
                                ENGIN corp
                            </h5>
                            </div>
                            <div class="col-md-5 text-end">
                            <boutton
                                class="btn btn-primary"
                                style="
                                background: white;
                                border-color: white;
                                border-radius: 30px;
                                color: #219935;
                                margin-top: -9px;
                                "
                            >
                                <i class="bx bx-like" style="color: #219935"></i> 30%
                            </boutton>
                            </div>
                        </div>
                        </router-link>
                        <div class="row">
                        <div class="col-md-8">
                            <p class="card-text mt-2" style="font-size: 14px">
                            <i class="bx bx-map" style="color: #8b8b8b"></i> Lome
                            </p>
                        </div>
                        <div class="col-md-4 text-center mt-2">
                            <i
                            class="bx bx-car"
                            style="color: #8b8b8b; font-size: 21px"
                            ></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

           
        </div>

        <div
          class="tab-pane fade show "
          id="pills-achat"
          role="tabpanel"
          aria-labelledby="pills-achat-tab"
          tabindex="0"
        >

        <div class="row">
            <div class="col-md-3">
                <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option>Raison sociale </option>
                        <option value="loren">NomCompagies</option>
                        <option value="loren">NomCompagies</option>
                      </select>
                      
                    </div>
                    <div class="col-md-12">
                       
                      <input type="text" name="Ville" class="form-control" id="validationCustom02" placeholder="Ville">
                    
                    </div>
                    <div class="col-md-12">
                      
                        <input type="text" name="promotion" class="form-control" id="validationCustomUsername" placeholder="En promotion" aria-describedby="inputGroupPrepend">
                         
                    </div>
                   
                    <div class="col-12">
                      <div class="row g-1">
                        <div class="col-md-6">
                          <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                        </div>
                        
                      </div>
                      
                    </div>
                  </form>

            </div>

            <div class="col-md-9">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`//detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
                                    </p>
                                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </router-link>
                    </div>

                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`//detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
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
                <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
                <div
                    class="col"
                     
                >
                    <div
                    class="card h-100"
                    id="compagnie_card"
                    style="background: #f9f9f9; box-shadow: none"
                    
                    >
                    <router-link to="/details_location_engin" style="color: #000">
                        <img
                        src="/assets/img/car2.jpg"
                        class="card-img-top"
                        alt="..."
                        style="
                            border-radius: 10px 10px 0px 0px;
                            max-height: 174px;
                            object-fit: cover;
                        "
                        />
                    </router-link>

                    <img src="/assets/img/avatars/5.png" alt="" id="badgesLogo">

                    <div class="card-body">
                        <router-link to="/detail" style="color: #000">
                        <div class="row mt-2">
                            <div class="col-md-7">
                            <h5
                                class="card-title"
                                style="font-size: 15px; color: black"
                            >
                                ENGIN corp
                            </h5>
                            </div>
                            <div class="col-md-5 text-end">
                            <boutton
                                class="btn btn-primary"
                                style="
                                background: white;
                                border-color: white;
                                border-radius: 30px;
                                color: #219935;
                                margin-top: -9px;
                                "
                            >
                                <i class="bx bx-like" style="color: #219935"></i> 30%
                            </boutton>
                            </div>
                        </div>
                        </router-link>
                        <div class="row">
                        <div class="col-md-8">
                            <p class="card-text mt-2" style="font-size: 14px">
                            <i class="bx bx-map" style="color: #8b8b8b"></i> Lome
                            </p>
                        </div>
                        <div class="col-md-4 text-center mt-2">
                            <i
                            class="bx bx-car"
                            style="color: #8b8b8b; font-size: 21px"
                            ></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

           
        </div>
        

        <!-- vehicules en location -->
        <div
          class="tab-pane fade show "
          id="pills-vl"
          role="tabpanel"
          aria-labelledby="pills-vl-tab"
          tabindex="0"
        >

            <div class="row">
                <div class="col-md-3">
                    <form class="row g-3 needs-validation" method="post" action="">
                        
                        <div class="col-md-12">
                        
                            <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                                <option v-for="(vehicule, i) in searchStore.vehiculesResults" :key="i">{{ vehicule.vehicule }} </option> 
                            </select>
                            
                            </div>

                            <div class="col-md-12">
                            
                            <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                                <option v-for="(vehicule, i) in searchStore.vehiculesResults" :key="i">{{ vehicule.modele }}</option> 
                            </select>
                            
                            </div>
                            <div class="col-md-12">
                            
                            <input type="text" name="Transmission" class="form-control" id="validationCustom02" placeholder="Transmission">
                            
                            </div>
                            <div class="col-md-12">
                            
                            <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                                <option v-for="(vehicule, i) in searchStore.vehiculesResults" :key="i">{{ vehicule.montant }} </option>
                            </select>
                        
                        </div>

                        <div class="col-md-12">
                        
                            <input type="text" name="Moteur" class="form-control" id="validationCustomUsername" placeholder=" moteur" aria-describedby="inputGroupPrepend">
                            
                        </div>
                    
                        <div class="col-12">
                            <div class="row g-1">
                                <div class="col-md-6">
                                <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                                </div>
                                
                            </div>
                        
                        </div>
                    </form>

                </div>

                <div class="col-md-9">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div
                            class="col"
                            v-for="(vehicule, i) in searchStore.vehiculesResults" :key="i"
                        >
                            <router-link
                            :to="`/detail_vehicule_location/${encryptParam(vehicule.uid)}`"
                            style="color: #000"
                            >
                                <div class="card h-100 border-0" id="card_compagnie">
                                    <div class="row" style="margin: 0px">
                                    <div class="col-md-12">
                                        <div
                                        class="card mb-3 border-0"
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
                                                {{ vehicule.companieInfos.description }}  
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
                                            object-fit: cover;
                                            "
                                        />
                                        </div>
                                        
                                        <div class="col-8">
                                        <div class="card-body">
                                            <p class="card-text" style="font-size: 13px ; ">
                                            {{ vehicule.vehicule }} | {{ vehicule.anne_vehicule }}
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
            </div>

           
        </div>

        <!-- ---- trajet ---- -->

        <div
          class="tab-pane fade show "
          id="pills-trajet"
          role="tabpanel"
          aria-labelledby="pills-trajet-tab"
          tabindex="0"
        >

        <div class="row">
            <div class="col-md-3">
                <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option v-for="(trajet, i) in searchStore.trajetsResults" :key="i">{{ trajet.lieu_depart }} </option> 
                      </select>
                      
                    </div>

                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option v-for="(trajet, i) in searchStore.trajetsResults" :key="i">{{ trajet.destination }}</option> 
                      </select>
                      
                    </div>
                    <div class="col-md-12">
                       
                      <input type="date" name="Transmission" class="form-control" id="validationCustom02" placeholder="Transmission">
                    
                    </div>
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option v-for="(trajet, i) in searchStore.trajetsResults" :key="i">{{ trajet.montant }} </option> 
                      </select>
                      
                    </div>

                     
                   
                    <div class="col-12">
                      <div class="row g-1">
                        <div class="col-md-6">
                          <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </form>

            </div>

            <div class="col-md-9">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div
                        class="col"
                        v-for="(trajet, i) in searchStore.trajetsResults" :key="i"
                    >
                        <router-link
                        :to="`/detail_reservation_ticket/${encryptParam(trajet.uid)}`"
                        style="color: #000"
                        >
                            <div class="card h-100 border-0" id="card_compagnie">
                                <div class="row" style="margin: 0px">
                                    <div class="col-md-12">
                                        <div
                                        class="card mb-3 border-0"
                                        style="background: #f9f9f9;"
                                        >
                                        <div class="row g-1 d-flex mt-2">
                                            
                                            <div class="col-8 d-flex">
                                            <img
                                                :src="trajet.companieInfos.imageLogoUrl"
                                                alt
                                                class="w-px-40 h-auto rounded-circle"
                                                style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                            />
                                            <div>
                                                <div class="card-body d-flex">
                                                <h5 class="card-title" style="font-size: 12px">
                                                    {{ trajet.companieInfos.raison_social }}
                                                </h5>
                                                <p class="card-text" style="font-size: 12px">
                                                    <i
                                                    class="bx bx-map"
                                                    style="color: rgb(139 139 139); margin-left: 5px"
                                                    ></i>
                                                    {{ trajet.companieInfos.description }}  
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
                                            {{ trajet.montant }} FCFA
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
                                        src="/assets/img/rb.jpg"
                                        class="img-fluid h-100"
                                        alt="..."
                                        style="
                                        width: 150px;
                                        object-fit: cover;
                                        "
                                    />
                                    </div>
                                    
                                    <div class="col-8">
                                    <div class="card-body">
                                        <p class="card-text" style="font-size: 13px ; ">
                                            Trajets | {{ trajet.lieu_depart }} - {{ trajet.destination }}
                                        </p>
                                        <p class="card-text" style="font-size: 13px">
                                        <strong style=" font-weight: 500;">Escales | </strong> {{ trajet.escale }}
                                        </p>
                                        <p class="card-text" style="font-size: 13px">
                                        <strong style=" font-weight: 500;">Convocation | </strong> {{ trajet.heure_convocation }}
                                        </p>
                                        <p class="card-text" style="font-size: 13px">
                                        <strong style=" font-weight: 500;">Jours du voyage | </strong>
                                        {{ trajet.jours_voyage }}
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
        </div>

           
        </div>

        <!-------- Gros engin en location -->

        <div
          class="tab-pane fade show "
          id="pills-engin"
          role="tabpanel"
          aria-labelledby="pills-engin-tab"
          tabindex="0"
        >

        <div class="row">
            <div class="col-md-3">
                <form class="row g-3 needs-validation" method="post" action="">
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option>Marque </option>
                        <option value="loren">Toyota</option>
                        <option value="loren">Toyota</option>
                      </select>
                      
                    </div>

                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option>Catégorie</option>
                        <option value="loren">Yaris</option>
                        <option value="loren">Yaris</option>
                      </select>
                      
                    </div>
                    
                    <div class="col-md-12">
                      
                      <select id="defaultSelect" name="type" class="form-select" placeholder="type">
                        <option>Prix </option>
                        <option value="loren">2000 - 5000</option>
                        <option value="loren">2000 - 5000</option>
                      </select>
                      
                    </div>

                    <div class="col-md-12">
                      
                      <input type="text" name="Moteur" class="form-control" id="validationCustomUsername" placeholder=" moteur" aria-describedby="inputGroupPrepend">
                       
                  </div>
                   
                    <div class="col-12">
                      <div class="row g-1">
                        <div class="col-md-6">
                          <button class="btn btn-primary" type="submit" style="background: rgb(33 153 53); border-color: rgb(33 153 53);">Valider</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </form>

            </div>

            <div class="col-md-9">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`/detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
                                    </p>
                                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </router-link>
                    </div>

                    <div
                        class="col"
                        
                    >
                        <router-link
                        :to="`//detail_engin_location/`"
                        style="color: #000"
                        >
                        <div class="card h-100 border-0" id="card_compagnie">
                            <div class="row" style="margin: 0px">
                            <div class="col-md-12">
                                <div
                                class="card mb-3 border-0"
                                style="background: #f9f9f9;"
                                >
                                <div class="row g-1 d-flex mt-2">
                                    
                                    <div class="col-8 d-flex">
                                    <img
                                        src="/assets/img/avatars/1.png"
                                        alt
                                        class="w-px-40 h-auto rounded-circle"
                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                    />
                                    <div>
                                        <div class="card-body d-flex">
                                        <h5 class="card-title" style="font-size: 12px">
                                            Compagnie
                                        </h5>
                                        <p class="card-text" style="font-size: 12px">
                                            <i
                                            class="bx bx-map"
                                            style="color: rgb(139 139 139); margin-left: 5px"
                                            ></i>
                                        loren  
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
                                    5000 FCFA
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
                                    src="/assets/img/car2.jpg"
                                    class="img-fluid h-100"
                                    alt="..."
                                    style="
                                    width: 150px;
                                    object-fit: cover;
                                    "
                                />
                                </div>
                                
                                <div class="col-8">
                                <div class="card-body">
                                    <p class="card-text" style="font-size: 13px ; ">
                                    Caterpillar |2022
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Modéle | </strong> loren ipsun
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Moteur | </strong> hp500h255
                                    </p>
                                    <p class="card-text" style="font-size: 13px">
                                    <strong style=" font-weight: 500;">Immatriculation | </strong>
                                    BG 20250
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
        </div>

           
        </div>
      </div>
    </div>
  </section>
  <!-- End Breadcrumbs -->
</template>

<style scoped>
.nav-pills .nav-link {
  background: 0 0;
  border: 0;
  border-radius: var(--bs-nav-pills-border-radius);
  border: 1px solid #efefef;
  color: #8b8b8b;
  margin-left: 10px;
  border-radius: 20px;
  font-size: 14px;
  width: max-content;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
  background: #219935 !important;
  color: white !important;
}

#badgesLogo {
  display: inline-block;
  left: 9px;
  width: 45px;
  height: 45px;
  /* padding: 1px 14px; */
  position: absolute;
  margin-top: 150px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  object-fit: cover;
}
</style>