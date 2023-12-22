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
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Résultats</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Location de véhicule</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reservation de ticket </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Location de gros engin</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Achat de véhicule </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Véhicules en location </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Trajet</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false"></button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Véhicule en vente </button>
                </li>
            </ul>
            <div class="tab-content mt-4 mb-4" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                         
                        <ul class="">
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Résultats</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Location de véhicule</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Reservation de ticket</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Location de gros engin</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Achat de véhicule</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Véhicule en location</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Trajet</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Gros engin en location</li>
                            <li class="list-group-item" style="font-size: 14px; margin-top: 10px;">Véhicule en vente</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
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
                                

                                <div class="card-body">
                                    <router-link to="/detail" style="color: #000">
                                    <div class="row mt-2">
                                        <div class="col-md-12">
                                        <h5
                                            class="card-title"
                                            style="font-size: 15px; color: black"
                                        >
                                        Toyota yaris 2000
                                        </h5>
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
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
            </div>
        </div>
    </section><!-- End Breadcrumbs -->
  
       
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