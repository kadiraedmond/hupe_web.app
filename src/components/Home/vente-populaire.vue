<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import { useCompanieStore } from "@/store/companie.js"

import {
    collection,
    query,
    doc,
    where,
    getDoc,
    getDocs,
} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"
import { encryptParam } from '@/utils/hash.js'

const companieStore = useCompanieStore()

// const vipLocationCompanies = ref([])

onBeforeMount(() => {
    companieStore.getAllCompanies

    companieStore.getLocationCompanies

    // getNotation()
})


</script>
<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
            <router-link
                to="/detail_vehicule_location/"
                style="color: #000">
                <div class="card h-100 border-0" id="card_compagnie" style="box-shadow: none;">
                    <div class="row" style="margin: 0px">
                        <div class="col-md-12">
                            <div class="card h-100 mb-3 border-0" style="background: #f9f9f9;">
                                <div class="row g-1 d-flex mt-2">

                                    <div class="col-7 d-flex">
                                        <img src="/assets/img/car3.jpg" alt="..."
                                            class="w-px-40 h-auto rounded-circle"
                                            style="width: 40px; height: 40px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;" />
                                        <div>
                                            <div class="card-body d-flex">
                                                <h5 class="card-title" style="font-size: 10px">
                                                    raison_social
                                                </h5>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-5 text-end">
                                        <button class="btn btn-primary" style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 5px;
                              font-size: 12px;
                            ">
                                          50000 FCFA
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="false"
                            data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active ">
                                    <img src="/assets/img/car3.jpg" class="d-block w-100" alt="..."
                                        style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                                </div>
                                <div class="carousel-item">
                                    <img src="/assets/img/car3.jpg" class="d-block w-100" alt="..."
                                        style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                                </div>
                                <div class="carousel-item">
                                    <img src="/assets/img/car3.jpg" class="d-block w-100" alt="..."
                                        style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                                </div>
                                <div class="carousel-item">
                                    <img src="/assets/img/car3.jpg" class="d-block w-100" alt="..."
                                        style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                                </div>
                                <div class="carousel-item">
                                    <img src="/assets/img/car3.jpg" class="d-block w-100" alt="..."
                                        style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev" id="btn1">
                                <i class='bx bx-chevron-left'
                                    style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next" id="btn1">
                                <i class='bx bx-chevron-right'
                                    style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                            </button>
                        </div>

                        <div class="row"
                            style=" background: white; border-radius: 5px; position: absolute; margin-top: 182px; width: 97%; margin-left: 5px;">
                            <div class="col-md-12 mt-2">
                                <h5 class="card-title " style=" font-size: 14px;"> <img src="/assets/img/service/car.png"
                                        class="img-fluid w-25" alt="..."
                                        style="margin-top: -5px; width: 24px !important;" />  Toyota yaris 2023 </h5>
                            </div>
                        </div>



                    </div>

                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.slider-item-show3 {
    --swiffy-slider-item-count: 3.7 !important;
}

@media (max-width: 768px) {
    .slider-item-show3 {
        --swiffy-slider-item-count: 0.9 !important;
    }
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

#badgesLogo1 {

    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    /* object-fit: cover; */
}

#router-link {
    color: black !important;
}

#router-link:hover {
    color: black !important;
}
</style>
