<script setup>
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue"

import Vehicule from "@/components/Home/location.vue"
import Reservation from "@/components/Home/reservation.vue"
import { useCompanieStore } from "@/store/companie.js"
import { useSlide } from "@/store/slideImages.js"
import { useReservationStore } from "@/store/reservation.js"
import { usePromotionStore } from "@/store/promotion.js"
import { useLocalisationStore } from "@/store/localisation.js"

import {
  collection,
  query,
  doc,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companieStore = useCompanieStore()
const slideStore = useSlide()
const reservationStore = useReservationStore()
const promotionStore = usePromotionStore()
const localisationStore = useLocalisationStore()

onBeforeMount(() => {
  slideStore.getSlideImages

  companieStore.getAllCompanies

  companieStore.getLocationCompanies

  companieStore.getTransportCompanies

  reservationStore.getAllReservations
  promotionStore.getPromotionOffres
  promotionStore.getPopularDestinations
  promotionStore.getPopularCars
})

onMounted(() => {
  window.scrollTo(0, 0)

  const text = document.querySelector(".sec-text");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Vous cherchiez à louer une voiture pour une escapade, "
    }, 4000)
    setTimeout(() => {
      text.textContent = "Vous cherchiez à acheter la voiture de vos rêves, "
    }, 8000)
    setTimeout(() => {
      text.textContent = "Vous cherchiez à trouver des gros engins pour vos projets,   "
    }, 12000)
    setTimeout(() => {
      text.textContent = "Vous cherchiez à réserver des billets de bus pour vos voyages,  "
    }, 16000)
    setTimeout(() => {
      text.textContent = "Hupe pour simplifier chaque étape de votre parcours. "
    }, 20000)
  }

  textLoad()
  setInterval(textLoad, 24000)
})
</script>

<template>
  <!-- ========== Hero one =========== -->
  <section id="hero" class="d-flex">
    
    <div class="container-fluid"  id="background">
      <div class="row g-3" style="padding: 93px !important">
        <div
          class="col-lg-6 col-md-6 border-2"
          style="
            display: flex;
            flex-direction: column;
          "
        >
          <img
            src="/assets/img/accueil-car.png"
            style="width: 260px; height: 188px; object-fit: cover; float: left"
          />
          <div class="wrapper text-start" style="margin-top: 5rem" >
            <span class="text first-text text-black"
              >Quand la mobilité devient un jeu d'enfant !
            </span>
            <br />
            <!-- <span class="text" style="font-size: 1rem ;color: black;">
              Notre application vous ouvre les portes d'un monde de possibilités
              pour répondre à tous vos besoins de déplacement.
            </span>  -->
            <br />
            <span class="text sec-text" style="font-size: 1.1rem ;background: #219935;color: white;">
              Que vous cherchiez à louer une voiture pour une escapade, 
            </span> 
            <br />
            <!-- <span class="text" style="font-size: 1rem; background: #219935;color: white;">
              Nous sommes là pour simplifier chaque étape de votre parcours.
            </span> -->
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
          class="col-lg-6 col-md-6 border-2"
          id="heros_left_section"
          style="background: transparent !important"
        >
         <keep-alive>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            style="height: 400px"
          >
          <div class="carousel-indicators">
              <button
                  v-for="(slide, index) in slideStore.slideImages"
                  :key="index"
                  type="button"
                  :data-bs-target="carouselExampleIndicators"
                  :data-bs-slide-to="index"
                  :class="{ 'active': index === 0 }"
                  aria-current="true"
                  :aria-label="`Slide ${index + 1}`"
                  id="carousel-indicators"
              ></button>
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
                    style="max-height: 350px; height: 350px; border-radius: 5px;"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </keep-alive>
        </div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -60px">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="section-title">
              <h2>Que voulez-vous faire ?</h2>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4" style="margin-top: -68px">
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f9f9f9"
            >
              <router-link to="/location" class="mt-4 mb-1">
                <img
                  src="/assets/img/service/car.png"
                  class="img-fluid w-25"
                  alt="..."
                  style="margin-top: 8px;"
                />
              </router-link>

              <div class="card-body" style="background: #62bfc4 ; border-radius: 0px 0px 5px 5px;">
                <router-link to="/location" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px; font-weight: bold">
                    Louer un véhicule
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                  Découvrez le confort, la flexibilité et l'aventure avec Hupe.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f9f9f9"
            >
              <router-link to="/reservation" class="mt-4 mb-1 text-black">
                <img
                  src="/assets/img/service/bus.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #bbded8 ; border-radius: 0px 0px 5px 5px;">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px; font-weight: bold">
                    Réserver un ticket de bus
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                  Embarquez pour l'aventure avec nos réservations de bus.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f9f9f9"
            >
              <router-link to="/location_gros_engin" class="mt-4 mb-1" id="a">
                <img
                  src="/assets/img/service/engin.png"
                  class="img-fluid w-25"
                  alt="..."
                  style="margin-top: 5px;"
                />
              </router-link>

              <div class="card-body" style="background: #f8e4dd ; border-radius: 0px 0px 5px 5px;">
                <router-link to="/location_gros_engin" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px; font-weight: bold">
                    Louer un gros engin
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                 Des engins puissants pour des résultats exceptionnels.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f9f9f9"
            >
              <router-link to="/reservation" class="mt-4 mb-1" id="a">
                <img
                  src="/assets/img/service/cars.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #fdb7b9 ; border-radius: 0px 0px 5px 5px;">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px; font-weight: bold">
                    Acheter un véhicule
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                 Le plaisir de conduire débute avec la sélection Hupe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -48px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Compagnies de locations populaires</h2>
              <p id="section-p">
                Explorez les compagnies de location les plus appréciées par les
                voyageurs du monde entier. Faites confiance à l'expérience et à
                la qualité.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/location">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <Vehicule />
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -80px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Véhicules populaires</h2>
              <p id="section-p">
                Découvrez les véhicules les plus prisés pour votre prochain
                voyage. Confort, style et fiabilité, nous avons tout ce dont
                vous avez besoin.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/vehicule-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
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

    
    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -50px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Compagnies de transport populaires</h2>
              <p id="section-p">
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/reservation">
              <boutton
                class="btn btn-primary" id="btn-end"
                 
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <Reservation />
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -80px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Destinations populaires</h2>
              <p id="section-p">
                Explorez les destinations les plus en vogue du moment. Trouvez
                l'inspiration pour votre prochain voyage et vivez des
                expériences inoubliables.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/destination-populaire">
              <boutton
                class="btn btn-primary"
               id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>
        <div
          class="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand"
        >
          <ul class="slider-container py-4" id="slider2">
             
            <li
            class=""
            v-for="(
                popularDestination, index
              ) in promotionStore.popularDestinations"
              :key="index"
          >
            <router-link :to="`/detail_reservation_ticket/${popularDestination.uid}`" style="color: #000">
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
                          :src="popularDestination.companieInfos.imageLogoUrl"
                          alt=""
                          class="w-px-40 h-auto rounded-circle"
                          style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 12px">
                                {{
                                    popularDestination.companieInfos
                                      .raison_social
                                  }}
                              </h5>
                              <p class="card-text" style="font-size: 12px">
                                <i
                                  class="bx bx-map"
                                  style="color: rgb(139 139 139); margin-left: 5px"
                                ></i>
                                {{ popularDestination.companieInfos.adresse }}
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
                          {{ popularDestination.montant }} FCFA
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-3 mt-4 h-100"
                  style="
                    max-width: 540px;
                    margin: 8px;
                    margin-top: -10px !important;
                    background: #f9f9f9;
                  "
                >
                  <div class="row g-0" style="margin: 5px">
                    <div class="col-8">
                      <div class="card-body">

                        <p class="card-text" style="font-size: 13px">
                            <strong style="color:rgb(139 139 139) ;font-weight: 500;">Trajet | </strong
                            >{{ popularDestination.lieu_depart }} -
                            {{ popularDestination.destination }}
                          </p>
                          <p class="card-text" style="font-size: 13px">
                            <strong style="color:rgb(139 139 139) ;font-weight: 500;">Escales | </strong>
                            {{ popularDestination.escale }}
                          </p>
                          <p class="card-text" style="font-size: 13px">
                            <strong style="color:rgb(139 139 139) ;font-weight: 500;">Convocation | </strong
                            >{{ popularDestination.heure_convocation }}
                          </p>
                          <p class="card-text" style="font-size: 13px" v-if="popularDestination.jours_voyage.length > 8">
                            <strong style="color:rgb(139 139 139) ;font-weight: 500;">Jours du voyages |</strong>
                            {{ popularDestination.jours_voyage.substr(0, 8) }}...
                          </p>
                          <p class="card-text" style="font-size: 13px" v-if="popularDestination.jours_voyage.length <= 8">
                            <strong style="color:rgb(139 139 139) ;font-weight: 500;">Jours du voyages |</strong>
                            {{ popularDestination.jours_voyage }}
                          </p>
                         
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                      </div>
                    </div>
                    <div class="col-4">
                      <img
                          src="/assets/img/rb.jpg"
                          class="img-fluid h-100"
                          alt="..."
                          style="object-fit: cover"
                        />
                    </div>
                    
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          </ul>

          <button
            type="button"
            class="slider-nav"
            aria-label="Aller à gauche"
            _mstaria-label="76453"
            _msthash="99"
          ></button>
          <button
            type="button"
            class="slider-nav slider-nav-next"
            aria-label="Aller à gauche"
            _mstaria-label="76453"
            _msthash="100"
          ></button>

          <div class="slider-indicators" style="display:none">
            <button
              class=""
              aria-label="Aller à la diapositive"
              _mstaria-label="134940"
              _msthash="101"
            ></button>
            <button
              aria-label="Aller à la diapositive"
              _mstaria-label="134940"
              _msthash="102"
              class=""
            ></button>
            <button
              aria-label="Aller à la diapositive"
              _mstaria-label="134940"
              _msthash="103"
              class=""
            ></button>
            <button
              aria-label="Aller à la diapositive"
              _mstaria-label="134940"
              _msthash="104"
              class=""
            ></button>
            <button
              aria-label="Aller à la diapositive"
              _mstaria-label="134940"
              _msthash="105"
              class="active"
            ></button>
          </div>
        </div>

        
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -73px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Compagnies de location de gros engins populaires</h2>
              <p id="section-p">
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/location_gros_engin">
              <boutton
                class="btn btn-primary"
               id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for="(companie, index) in companieStore.vipLocationCompanies"
            :key="index"
          >
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f9f9f9; box-shadow: none"
              v-if="index < 4"
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
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -84px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Gros engins populaires</h2>
              <p id="section-p">
                Découvrez les véhicules les plus prisés pour votre prochain
                voyage. Confort, style et fiabilité, nous avons tout ce dont
                vous avez besoin.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/gros-engin-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
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
    </section>

     <!-- ======= Expertise et conseils en immobiliers Section ======= -->
     <section id="features" class="features" style="margin-top: -73px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Compagnies de vente de véhicule populaires</h2>
              <p id="section-p">
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/ vente-vehicule">
              <boutton
                class="btn btn-primary" id="btn-end"
                
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for="(companie, index) in companieStore.vipLocationCompanies"
            :key="index"
          > 
            <div
              class="card h-100"
              id="compagnie_card"
              style="background: #f9f9f9; box-shadow: none"
              v-if="index < 4"
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
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features" style="margin-top: -84px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Ventes populaires</h2>
              <p id="section-p">
                Découvrez les véhicules les plus prisés pour votre prochain
                voyage. Confort, style et fiabilité, nous avons tout ce dont
                vous avez besoin.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/vente-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
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
    </section>

    <!-- ======= Features Section ======= -->
    <section id="features" class="features" style="margin-top: -60px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2>Actualités</h2>
              <p id="section-p">
                Restez a jour avec les dernières nouvelles du monde du voyage .
                Les informations les plus récentes sur les destinations, les
                promotion et plus encore
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/informations">
              <boutton
                class="btn btn-primary" id="btn-end"
                
              >
                Voir plus</boutton
              >
            </router-link>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img
                src="/assets/img/blog/1.jpg"
                class="card-img-top"
                alt="..."
                style="height: 193.13px !important;"
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Comment Hupe Simplifie Vos Voyages Quotidiens</h5>
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
                  Dans le tourbillon quotidien de la vie urbaine, chaque instant compte... 
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <router-link to="/blog">
                      <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                    </router-link>
                    
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
                src="/assets/img/blog/2.jpg"
                class="card-img-top h-50"
                alt="..."
                style="height: 193.13px !important;"
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Les Avantages de Louer un Véhicule avec Hupe</h5>
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
                  Louer un véhicule avec Hupe va bien au-delà d'une simple transaction ...
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <router-link to="/blog/article2">
                      <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                    </router-link>
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
                src="/assets/img/blog/3.jpg"
                class="card-img-top h-50"
                alt="..."
                style="height: 193.13px !important;"
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Top 10 Destinations Incontournables à Explorer ...</h5>
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
                  À travers les huit joyaux de l'UEMOA, Hupe vous invite à découvrir des destinations inoubliables.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <router-link to="/blog/article3">
                      <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                    </router-link>
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
                src="/assets/img/blog/4.jpg"
                class="card-img-top"
                alt="..."
                style="height: 193.13px !important;"
              />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">L'Impact de Hupe sur l'Industrie de la Location ...</h5>
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
                  L'évolution rapide de l'industrie de la location de véhicules a trouvé un nouveau protagoniste en Hupe...
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <router-link to="/blog/article4">
                      <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Section -->

    <section id="features" class="features" style="margin-top: -60px">
      <div class="container" style="border: 1px solid #efefef; border-radius: 5px;">
        <div class="row mt-5">
          <div class="col-8">
            <div class="section-title text-start">
                  <h2>Inscrivez vous à notre Newsletter</h2>
                  <p id="section-p">
                    Veuillez renseignez votre adresse mail, pour etre au courant de
                    toutes nos nouveautés
                  </p>
                </div>
          </div>
           
        </div>
        <div class="row mb-5">
          <div class="col-md-12 text-center mt-5">
            <div class="row">

              <div class="col-md-3"></div>
               
              <div class="col-md-6" style=" margin-top: -64px;">
                
                <form
                  class="d-flex"
                  action=""
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div
                    class="input-group d-flex justify-content-center"
                    style="margin-top: 15px"
                  >
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

              <div class="col-md-3"></div>
              
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
  color: #fff;
}
.text.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #62bfc4;
  border-left: 2.6px solid #cad1f8;
  animation: animate 8s steps(17) infinite alternate;
} 
@keyframes animate {
  0% {
    background-color: #62bfc4; 
  }
  25% {
    background-color: #bbded8;
  }
  40%,
  50% {
    background-color: #f9f9f9;
  }
  60% {
    left: calc(100% + 5px);
  }
  75% {
    background-color: #f8e4dd;
  }
  100% { 
    left: 0%;
    background-color: #62bfc4;
  }
}
#section-p {
  font-size: 15px;
  margin-top: -27px;
}
#input_newsletter {
  max-width: 440px !important;
  max-height: 20px !important;
  font-size: 17px;
}

.slider-item-show3 {
    --swiffy-slider-item-count: 2.7;
}

@media (max-width: 768px) {
  .slider-item-show3 {
    --swiffy-slider-item-count: 0.9;
}


  }

  #btn-end{
    background: white;
     color: #219935;
      border-color: #219935;
  }

  #btn-end:hover{
    background-color: #219935 !important;
    color: white;
     border-color: white;
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


body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#background {
  /* width: 100%;
  height: 100vh; */
  animation: changeColors 8s infinite alternate; /* Réglez la durée et le type d'animation selon vos besoins */
}

@keyframes changeColors {
  0% {
    background-color: #62bfc4;
  }
  25% {
    background-color: #bbded8;
  }
  50% {
    background-color: #f9f9f9;
  }
  75% {
    background-color: #f8e4dd;
  }
  100% {
    background-color: #62bfc4;
  }
}

.carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #001618;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
}

#carousel-indicators  {
    box-sizing: content-box;
    flex: 0 1 auto;
    /* width: 30px;
    height: 3px;
    padding: 0; */
    margin-right: 2px;
    margin-left: 2px;
    
    cursor: pointer;
    background: black;
    border: 0;
    /* border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5; */
    transition: opacity .6s ease;
    border-radius: 50%;
     /* width: px; */
     height: 10px
}

.carousel-indicators .active {
    opacity: 1;
    /* color: red; */
    background: #219935 !important;
}


</style>