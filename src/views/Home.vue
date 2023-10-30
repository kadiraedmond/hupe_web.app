<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue";

import { useCompanieStore } from "@/store/companie.js";
import { useSlide } from "@/store/slideImages.js";
import { useReservationStore } from "@/store/reservation.js";
import { usePromotionStore } from '@/store/promotion.js'

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const companieStore = useCompanieStore();
const slideStore = useSlide();
const reservationStore = useReservationStore();
const promotionStore = usePromotionStore()

onBeforeMount(() => {
  slideStore.getSlideImages

  companieStore.getAllCompanies

  companieStore.getLocationCompanies

  companieStore.getTransportCompanies

  reservationStore.getAllReservations
  promotionStore.getPromotionOffres
  promotionStore.getPopularDestinations
  promotionStore.getPopularCars
});

onMounted(() => {
  window.scrollTo(0, 0)

  const text = document.querySelector(".sec-text")
  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Notre application vous ouvre les portes d'un monde de ";
      }, 0)
      setTimeout(() => {
          text.textContent = "possibilités pour répondre à tous vos besoins de déplacement.";
      }, 4000)
      setTimeout(() => {
          text.textContent = "Que vous cherchiez à louer une voiture pour une escapade, ";
      }, 8000)
      setTimeout(() => {
          text.textContent = "Que vous cherchiez à acheter la voiture de vos rêves, ";
      }, 12000)
      setTimeout(() => {
          text.textContent = "Que vous cherchiez à trouver des gros engins pour vos projets, ";
      }, 16000)
      setTimeout(() => {
          text.textContent = "Que vous cherchiez à réserver des billets de bus pour vos voyages, ";
      }, 20000)
      setTimeout(() => {
          text.textContent = "Nous sommes là pour simplifier chaque étape de votre parcours.";
      }, 24000)
  }
  
  textLoad();
  setInterval(textLoad, 28000)
})
</script>

<template>
  <!-- ========== Hero one =========== -->
  <section id="hero" class="d-flex">
    <div class="container-fluid" style="background: #219935">
      <div class="row g-3" style="padding: 93px !important">
        <div
          class="col-lg-6 col-md-6 bg-white border-2"
          style="background: #219935 !important; display: flex; flex-direction: column"
        >
          <img 
            src="/public/assets/img/accueil-car.png" 
            style="width: 260px; height:260px; object-fit: cover; float: left"
          />
          <div class="wrapper text-start" style="margin-top: 2rem">
            <span class="text first-text">Quand la mobilité devient un jeu d'enfant ! </span> <br /> 
            <span class="text sec-text" style="font-size: 1rem;">
              Notre application vous ouvre les portes d'un monde de possibilités pour répondre à tous vos besoins de déplacement. 
            </span>
          </div>
          <!-- <p class="text-white text-start" style="margin-top: 3.8%; font-size: 0.86rem">
            Découvrez notre sélection de véhicules de qualité à des tarifs
            imbattables. Que ce soit pour un voyage d'affaires ou des vacances
            en famille, trouvez la voiture parfaite pour votre escapade.
            Réservez en ligne, choisissez votre destination, et préparez-vous à
            prendre la route.
          </p> -->
        </div>
        <div
          class="col-lg-6 col-md-6 bg-white border-2"
          id="heros_left_section"
          style="background: #219935 !important"
        >
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            style="height: 400px"
          >
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="border-radius: 50%; width: 10px; height: 10px"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="1" class="" aria-current="true" aria-label="Slide 2" style="border-radius: 50%; width: 10px; height: 10px"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="2" class="" aria-current="true" aria-label="Slide 3" style="border-radius: 50%; width: 10px; height: 10px"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="3" class="" aria-current="true" aria-label="Slide 4" style="border-radius: 50%; width: 10px; height: 10px"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="4" class="" aria-current="true" aria-label="Slide 5" style="border-radius: 50%; width: 10px; height: 10px"></button>
            </div>
            <div class="carousel-inner overflow-hidden">
              <div 
                v-for="(slideImage, index) in slideStore.slideImages" 
                :key="index" 
                :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
              >
               <router-link :to="`/detail/${slideImage.companieInfos.uid}`">
                <img
                  :src="slideImage.downloadURL"
                  class="d-block w-100"
                  alt="..."
                  style="max-height:350px; height:350px; object-fit: cover"
                />
               </router-link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <main id="main">

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Que voulez-vous faire ?</h2>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/location" class="mt-4">
                <img
                  src="/public/assets/img/car.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/location" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Louer un véhicule
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/reservation" class="mt-4 text-black">
                <img
                  src="/public/assets/img/bus.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Reserver un ticket de bus
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/location_gros_engin" class="mt-4" id="a">
                <img
                  src="/public/assets/img/engin.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/location_gros_engin" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Louer un gros engin
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/reservation" class="mt-4" id="a">
                <img
                  src="/public/assets/img/engine.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Acheter un engin
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Compagnies de locations populaires</h2>
              <p>
                Explorez les compagnies de location les plus appréciées par les
                voyageurs du monde entier. Faites confiance à l'expérience et à
                la qualité.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f3f4f6; box-shadow: none"
              v-if="companie.offre == 'vip' && index < 4"
            >
              <router-link :to="`/detail/${companie.uid}`">
                <img
                  :src="companie.imageLogoUrl"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                />
              </router-link>

              <div class="card-body">
                <router-link :to="`/detail/${companie.uid}`">
                  <div class="row">
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
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Véhicules populaires</h2>
              <p>
                Découvrez les véhicules les plus prisés pour votre prochain
                voyage. Confort, style et fiabilité, nous avons tout ce dont
                vous avez besoin.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(vehicule, index) in promotionStore.popularCars" :key="index">
            <router-link to="/detail_vehicule_location">
              <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px">
                <div class="col-md-12">
                  <div
                    class="card mb-3 border-0"
                    style="max-width: 540px; background: rgb(250 250 250)"
                  >
                    <div class="row g-1">
                      <div class="col-md-8 d-flex">
                        <img
                          :src="vehicule.companieInfos.imageLogoUrl"
                          alt
                          class="w-px-40 h-auto rounded-circle"
                          style="max-width: 50px; max-height: 50px"
                        />
                        <div>
                          <div class="card-body">
                            <h5 class="card-title" style="font-size: 12px">
                              {{ vehicule.companieInfos.raison_social }}
                            </h5>
                            <p class="card-text mt-2" style="font-size: 12px">
                              <i class="bx bx-map" style="color: #219935"></i>
                              {{ vehicule.companieInfos.adresse }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 text-end">
                        <button
                          class="btn btn-primary"
                          style="
                            background: #219935;
                            border-color: #219935;
                            margin-top: 15px;
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
                  margin: 10px;
                  margin-top: -10px !important;
                "
              >
                <div class="row g-0" style="margin: 10px">
                  <div class="col-md-6">
                    <img
                      :src="vehicule.vehicule_image_url"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                      style="width: 150px; max-width: 150px; max-height: 150px; object-fit: cover"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="card-text" style="font-size: 13px">
                        <strong>{{ vehicule.vehicule }} </strong>
                      </p>
                      <p class="card-text" style="font-size: 13px">
                        <strong>Modéle | </strong> {{ vehicule.modele }}
                      </p>
                      <p class="card-text" style="font-size: 13px">
                        <strong>Moteur | </strong> {{ vehicule.moteur }}
                      </p>
                      <p class="card-text" style="font-size: 13px">
                        <strong>Immatriculation | </strong> {{ vehicule.serie_vehicule }}
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

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Compagnies de transport populaires</h2>
              <p>
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(companie, index) in companieStore.transportCompanies" :key="index">
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f3f4f6; box-shadow: none"
              v-if="companie.offre == 'vip' && index < 4"
            >
              <router-link :to="`/details/${companie.uid}`">
                <img
                  :src="companie.imageLogoUrl"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail">
                  <div class="row">
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
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Destinations populaires</h2>
              <p>
                Explorez les destinations les plus en vogue du moment. Trouvez
                l'inspiration pour votre prochain voyage et vivez des
                expériences inoubliables.
              </p>
            </div>
          </div>
        </div>
        <div class="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-last-visible" style="width: 101%;">
            <ul class="slider-container py-4">
                <li class="" v-for="(popularDestination, index) in promotionStore.popularDestinations" :key="index">
                  <router-link to="/detail_reservation_ticket">
                    <div class="card h-100" id="card_compagnie" v-if="index < 6">
                    <div class="row" style="margin: 10px">
                      <div class="col-md-7">
                        <div
                          class="card mb-3 border-0"
                          style="max-width: 540px; background: rgb(250 250 250)"
                        >
                          <div class="row g-1">
                            <div class="col-md-4">
                              <img
                                :src="popularDestination.companieInfos.imageLogoUrl"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="width: 50px"
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title" style="font-size: 12px">
                                  <!-- {{ companieStore.setCompanieById(popularDestination.compagnie_uid) && companieStore.companie.raison_social }} -->
                                  {{ popularDestination.companieInfos.raison_social }}
                                </h5>
                                <p class="card-text mt-2" style="font-size: 12px">
                                  <i class="bx bx-map" style="color: #219935"></i>
                                  <!-- {{ companieStore.setCompanieById(popularDestination.compagnie_uid) && companieStore.companie.adresse }} -->
                                  {{ popularDestination.companieInfos.adresse }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5 text-end">
                        <button
                          class="btn btn-primary"
                          style="
                            background: #219935;
                            border-color: #219935;
                            margin-top: 15px;
                            font-size: 12px;
                          "
                        >
                          {{ popularDestination.montant }} FCFA
                        </button>
                      </div>
                    </div>
                    <div
                      class="card mb-3 mt-4"
                      style="
                        max-width: 540px;
                        margin: 10px;
                        margin-top: -10px !important;
                      "
                    >
                      <div class="row g-0" style="margin: 10px">
                        <div class="col-md-4">
                          <img
                            src="/public/assets/img/car2.jpg"
                            class="img-fluid rounded-start h-100"
                            alt="..."
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <p class="card-text" style="font-size: 13px">
                              <strong>Trajet | </strong>{{ popularDestination.lieu_depart }} - {{ popularDestination.destination }}
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Escales | </strong> {{ popularDestination.escale }} 
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Convocation | </strong>{{ popularDestination.heure_convocation }}
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Jours du voyages |</strong> {{ popularDestination.jours_voyage }}
                            </p>
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </router-link>
                </li>
                
                <li class="slide-visible" v-for="(popularDestination, index) in promotionStore.popularDestinations" :key="index">
                  <router-link to="/detail_reservation_ticket">
                    <div class="card h-100" id="card_compagnie" v-if="index < 6">
                    <div class="row" style="margin: 10px">
                      <div class="col-md-7">
                        <div
                          class="card mb-3 border-0"
                          style="max-width: 540px; background: rgb(250 250 250)"
                        >
                          <div class="row g-1">
                            <div class="col-md-4">
                              <img
                                :src="popularDestination.companieInfos.imageLogoUrl"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="width: 50px"
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title" style="font-size: 12px">
                                  <!-- {{ companieStore.setCompanieById(popularDestination.compagnie_uid) && companieStore.companie.raison_social }} -->
                                  {{ popularDestination.companieInfos.raison_social }}
                                </h5>
                                <p class="card-text mt-2" style="font-size: 12px">
                                  <i class="bx bx-map" style="color: #219935"></i>
                                  <!-- {{ companieStore.setCompanieById(popularDestination.compagnie_uid) && companieStore.companie.adresse }} -->
                                  {{ popularDestination.companieInfos.adresse }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5 text-end">
                        <button
                          class="btn btn-primary"
                          style="
                            background: #219935;
                            border-color: #219935;
                            margin-top: 15px;
                            font-size: 12px;
                          "
                        >
                          {{ popularDestination.montant }} FCFA
                        </button>
                      </div>
                    </div>
                    <div
                      class="card mb-3 mt-4"
                      style="
                        max-width: 540px;
                        margin: 10px;
                        margin-top: -10px !important;
                      "
                    >
                      <div class="row g-0" style="margin: 10px">
                        <div class="col-md-4">
                          <img
                            src="/public/assets/img/car2.jpg"
                            class="img-fluid rounded-start h-100"
                            alt="..."
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <p class="card-text" style="font-size: 13px">
                              <strong>Trajet | </strong>{{ popularDestination.lieu_depart }} - {{ popularDestination.destination }}
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Escales | </strong> {{ popularDestination.escale }} 
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Convocation | </strong>{{ popularDestination.heure_convocation }}
                            </p>
                            <p class="card-text" style="font-size: 13px">
                              <strong>Jours du voyages |</strong> {{ popularDestination.jours_voyage }}
                            </p>
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </router-link>
                </li>
                 
            </ul>

            <button type="button" class="slider-nav" aria-label="Aller à gauche" _mstaria-label="76453" _msthash="99"></button>
            <button type="button" class="slider-nav slider-nav-next" aria-label="Aller à gauche" _mstaria-label="76453" _msthash="100"></button>

            <div class="slider-indicators">
                <button class="" aria-label="Aller à la diapositive" _mstaria-label="134940" _msthash="101"></button>
                <button aria-label="Aller à la diapositive" _mstaria-label="134940" _msthash="102" class=""></button>
                <button aria-label="Aller à la diapositive" _mstaria-label="134940" _msthash="103" class=""></button>
                <button aria-label="Aller à la diapositive" _mstaria-label="134940" _msthash="104" class=""></button>
                <button aria-label="Aller à la diapositive" _mstaria-label="134940" _msthash="105" class="active"></button>
            </div>
        </div>

       
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Compagnies de location d'engins populaires</h2>
              <p>
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(companie, index) in companieStore.locationCompanies" :key="index">
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f3f4f6; box-shadow: none"
              v-if="companie.offre == 'vip' && index < 4"
            >
              <router-link to="/details_location_engin">
                <img
                  src="/public/assets/img/car2.jpg"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px ; max-height: 174px; object-fit: cover;"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail">
                  <div class="row">
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
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Engins populaires</h2>
              <p>Découvrez les véhicules les plus prisés pour votre prochain voyage. Confort, style et fiabilité, nous
                avons tout ce dont vous avez besoin.</p>

            </div>
          </div>

        </div>


        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <router-link to="/detail_engin_location">
              <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px;">
                <div class="col-md-7">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f3f4f6;">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                          <p class="card-text mt-2" style="font-size: 12px; "> <i class='bx bx-map'  
                            style="color: #219935;"></i> CI,rue 250</p>
        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 text-end">
                  <button class="btn btn-primary" style="    background: #219935;
                  border-color: #219935; margin-top: 15px;font-size: 12px;">5000 FCFA</button>
                </div>
              </div>
              <div class="card mb-3 mt-4" style="max-width: 540px; margin: 10px; margin-top: -10px !important;">
                <div class="row g-0" style="margin: 10px;">
                  <div class="col-md-4">
                    <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..." style="object-fit: cover;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text" style="font-size: 13px;"> <strong>Hyundai 2022 </strong> </p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Modéle | </strong> Santafé</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Essence | </strong> Automobile</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Immatriculation | </strong> BG 3252</p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </router-link>
           
          </div>
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px;">
                <div class="col-md-7">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f3f4f6;">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                          <p class="card-text mt-2" style="font-size: 12px; "> <i class='bx bx-map'  
                            style="color: #219935;"></i> CI,rue 250</p>
        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 text-end">
                  <button class="btn btn-primary" style="    background: #219935;
                  border-color: #219935; margin-top: 15px;font-size: 12px;">5000 FCFA</button>
                </div>
              </div>
              <div class="card mb-3 mt-4" style="max-width: 540px; margin: 10px; margin-top: -10px !important;">
                <div class="row g-0" style="margin: 10px;">
                  <div class="col-md-4">
                    <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..." style="object-fit: cover;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text" style="font-size: 13px;"> <strong>Hyundai 2022 </strong> </p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Modéle | </strong> Santafé</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Essence | </strong> Automobile</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Immatriculation | </strong> BG 3252</p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px;">
                <div class="col-md-7">
                  <div class="card mb-3 border-0" style="max-width: 540px; background: #f3f4f6;">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img src="/public/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle"  style="width: 50px;"/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 12px;">Koudi</h5>
                          <p class="card-text mt-2" style="font-size: 12px; "> <i class='bx bx-map'  
                            style="color: #219935;"></i> CI,rue 250</p>
        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 text-end">
                  <button class="btn btn-primary" style="    background: #219935;
                  border-color: #219935; margin-top: 15px;font-size: 12px;">5000 FCFA</button>
                </div>
              </div>
              <div class="card mb-3 mt-4" style="max-width: 540px; margin: 10px; margin-top: -10px !important;">
                <div class="row g-0" style="margin: 10px;">
                  <div class="col-md-4">
                    <img src="/public/assets/img/car2.jpg" class="img-fluid rounded-start h-100" alt="..." style="object-fit: cover;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text" style="font-size: 13px;"> <strong>Hyundai 2022 </strong> </p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Modéle | </strong> Santafé</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Essence | </strong> Automobile</p>
                      <p class="card-text" style="font-size: 13px;"> <strong>Immatriculation | </strong> BG 3252</p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ======= Features Section ======= -->
    <section id="features" class="features" style="margin-top: -30px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Actualités</h2>
              <p>
                Restez a jour avec les dernières nouvelles du monde du voyage .
                Les informations les plus récentes sur les destinations, les
                promotion et plus encore
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img
                src="/public/assets/img/blog.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img
                src="/public/assets/img/blog-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img
                src="/public/assets/img/blog-2.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img
                src="/public/assets/img/blog-2.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Section -->

    <section id="features" class="features" style="margin-top: -90px">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 text-center mt-5"
            style="margin-top: 80px !important"
          >
            <h1 id="titre_new">Inscrivez vous à notre Newsletter</h1>

            <p class="mt-4" style="font-weight: 600">
              Veuillez renseignez votre adresse mail, pour etre au courant de
              toutes nos nouveautés
            </p>

            <div class="col-md-12 text-center mt-5">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <form
                    class="d-flex"
                    action=""
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div class="input-group" style="margin-top: -14px">
                      <input
                        type="text"
                        class="form-control form-control-lg input py-3"
                        placeholder="Adresse email"
                        name="email"
                        id="input_newsletter"
                      />
                      <button
                        class="btn btn-primary"
                        style="
                          background: #219935;
                          border-color: #219935;
                          border-radius: 0px 50px 50px 0px;
                          width: 133px;
                        "
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>

<style scoped>
.wrapper {
  overflow: hidden;
  overflow-wrap: break-word;
}
.wrapper .text {
  position: relative;
  color: #cad1f8;
  font-size: 24px;
  font-weight: 600;
}
.wrapper .text.first-text {
  color: #FFF;
}
.text.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #219935;
  border-left: 2px solid #cad1f8;
  animation: animate 4s steps(12) infinite;
}
@keyframes animate {
  40%, 60%{
      left: calc(100% + 5px);
  }
  100%{
      left: 0%;
  }
}

</style>
