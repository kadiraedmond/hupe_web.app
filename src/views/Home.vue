<script setup>
import { onBeforeMount, onMounted, watch, computed, ref, reactive } from "vue"

import Vehicule from "@/components/Home/location.vue"
import Reservation from "@/components/Home/reservation.vue"
import { useCompanieStore } from "@/store/companie.js"
import { useSlide } from "@/store/slideImages.js"
import { useReservationStore } from "@/store/reservation.js"
import { usePromotionStore } from "@/store/promotion.js"
import { useLocalisationStore } from "@/store/localisation.js"

import router from '@/router/router.js'

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
import Typewriter from 'typewriter-effect/dist/core'
import { useI18n } from 'vue-i18n'

const companieStore = useCompanieStore()
const slideStore = useSlide()
const reservationStore = useReservationStore()
const promotionStore = usePromotionStore()
const localisationStore = useLocalisationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const { t } = useI18n()

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
}) 

const goTo_chat = async () => {
  if(savedUser) {
    await router.push('/support') 
    location.reload() 
  } else {
    router.push('/connexion')
  }
}


// New carousel
const goToCompanyPage = (slide) => {
  router.push(`/detail/${encryptParam(slide.companieInfos.uid)}`)
}

onMounted(() => {
	let counter = 0

  const slideNext = () => {
    let slideImages = document.querySelectorAll('.slides img')
    slideImages[counter].classList.remove('prev2')
    slideImages[counter].classList.remove('prev1')

    slideImages[counter].classList.remove('next2')
    slideImages[counter].classList.add('next1')
    
    if(counter >= slideImages.length - 1) {
      counter = 0
    }
    else {
      counter++
    }

    slideImages[counter].classList.remove('prev2')
    slideImages[counter].classList.remove('prev1')

    slideImages[counter].classList.remove('next1')
    slideImages[counter].classList.add('next2')

    indicators()
  }
  const slidePrev = () => {
    let slideImages = document.querySelectorAll('.slides img')
    slideImages[counter].classList.remove('next2')
    slideImages[counter].classList.remove('next1')

    slideImages[counter].classList.remove('prev2')
    slideImages[counter].classList.add('prev1')
    
    if(counter === 0){
      counter = slideImages.length - 1
    }
    else {
      counter--
    }

    slideImages[counter].classList.remove('next2')
    slideImages[counter].classList.remove('next1')

    slideImages[counter].classList.remove('prev1')
    slideImages[counter].classList.add('prev2')

    indicators()
  }

  // Auto slideing
  let deletInterval
	const autoSliding = () => {
		deletInterval = setInterval(timer, 3500)
		function timer() {
			slideNext()
			indicators()
		}
	}
	autoSliding()

  const container = document.querySelector('.slide-container')
	container.addEventListener('mouseover', () => {
		clearInterval(deletInterval)
	})

	// Resume sliding when mouse is out
	container.addEventListener('mouseout', autoSliding)

  let next = document.querySelector('.next')
  next.addEventListener('click', slideNext)

  let prev = document.querySelector('.prev')
  prev.addEventListener('click', slidePrev)

  // Add and remove active class from the indicators
  const indicators = () => {
    let dots = document.querySelectorAll('.dot')
    for(let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }

    if(dots[counter]) {
      dots[counter].className += ' active'
    }
  }
})

onMounted(() => {
  new Typewriter('#typewriter', {
    strings: [
      `${t('typed_text1')}, `,
      `${t('typed_text2')}, `,
      `${t('typed_text3')}, `,
      `${t('typed_text4')}, `,
      `${t('typed_text5')}.`
    ],
    autoStart: true,
    loop: true
  })
})

</script>

<template>
  <!-- ========== Hero one =========== -->
  <section id="hero" class="d-flex"> 
    <div @click="goTo_chat" style="position: fixed; bottom: 2%; right: 2%; background: #219935; border-radius: 50%; cursor: pointer">
      <i class="fa-solid fa-message" style="color: white; font-size: 2rem; padding: 17px"></i>
    </div>

    
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
          <h2 
            style="font-size: 1.8rem; font-weight: bold"
            class="text-start text-black"
            >{{ t('section1_text1') }}
          </h2>
          <div 
            style="font-size: 1.4rem; font-weight: bold; margin-top: 0.5rem; color: #354058" 
            class="text-start" 
            id="typewriter"
          ></div>
        </div>
        <div
          class="col-lg-6 col-md-6 border-2"
          id="heros_left_section"
          style="background: transparent !important"
        >
        <!-- <keep-alive>
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
                <router-link :to="`/detail/${encryptParam(slideImage.companieInfos.uid)}`">
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
        </keep-alive> -->

        <!-- New carousel -->
        <div class="slide-container">
	
          <div class="slides">
            <img 
              v-for="(slideImage, i) in slideStore.slideImages"
              :key="i"
              :src="slideImage.downloadURL" 
              :class="i === 0 ? 'active' : ''"
              @click="goToCompanyPage(slideImage)" 
            />
          </div>

          <div class="buttons">
            <span class="next">&#10095;</span>
            <span class="prev">&#10094;</span>
          </div>

          <div class="dotsContainer">
            <div 
              v-for="(slideImage, i) in slideStore.slideImages"
              :class="i === 0 ? 'dot active' : 'dot'" 
              :attr='i'
            ></div>
          </div>

        </div>
        </div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= Que voulez-vous faire  ======= -->
    <section id="features" class="features" style="margin-top: -60px">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="section-title">
              <h2 class="text-uppercase">{{ t('section2_title') }}</h2>
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
                    {{ t('title1') }}
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                  {{ t('text1') }}.
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
                    {{ t('title2') }}
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                  {{ t('text2') }}.
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
                    {{ t('title3') }}
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                 {{ t('text3') }}.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f9f9f9 ; z-index: -1;"
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
                    {{ t('title4') }}
                  </h5>
                </router-link>

                <p class="card-text text-black" style="font-size: 14px">
                 {{ t('text4') }}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Compagnies de locations populaires ======= -->
    <section id="features" class="features" style="margin-top: -48px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2 class="text-uppercase">{{ t('section3_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text1') }}.
              </p>
              <!-- <span class="typeWriter" data-checkVisible="true"  data-speed="2" data-text='["foo", "example"]'></span> -->
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/location">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                {{ t('see_much') }}</boutton
              >
            </router-link>
          </div>
        </div>

        <Vehicule />
      </div>
    </section>

    <!-- ======= Véhicules populaires ======= -->
    <section id="features" class="features" style="margin-top: -80px">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="section-title">
              <h2 class="text-uppercase">{{ t('section4_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text2') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/vehicule-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                {{ t('see_much') }}</boutton
              >
            </router-link>
          </div>
        </div>

        <!-- <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col"
            v-for="(vehicule, index) in promotionStore.popularCars"
            :key="index"
          >
            <router-link
              :to="`/detail_vehicule_location/${vehicule.companieInfos.uid}/${vehicule.uid}`"
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
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div> -->

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for="(vehicule, index) in promotionStore.popularCars"
            :key="index"
          >
            <router-link
              :to="`/detail_vehicule_location/${encryptParam(vehicule.companieInfos.uid)}/${encryptParam(vehicule.uid)}`"
              style="color: #000"
            >
              <div class="card h-100 border-0" id="card_compagnie" style="box-shadow: none;">
                <div class="row" style="margin: 0px">
                  <div class="col-md-12">
                    <div
                      class="card h-100 mb-3 border-0"
                      style="background: #f9f9f9;"
                    >
                      <div class="row g-1 d-flex mt-2">
                        
                        <div class="col-7 d-flex">
                          <img
                            :src="vehicule.companieInfos.imageLogoUrl"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="width: 40px; height: 40px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 10px">
                                {{ vehicule.companieInfos.raison_social }}
                              </h5>
                               
                            </div>
                          </div>
                        </div>

                        <div class="col-5 text-end">
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
                <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                  <div :id="'carouselExampleControls' + index" class="carousel slide"  data-ride="false"  data-interval="false">
                    <div class="carousel-inner">
                      <div class="carousel-item active ">
                        <img :src="vehicule.vehicule_image_url" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url2" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url3" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url4" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                      <div class="carousel-item">
                        <img :src="vehicule.vehicule_image_url5" class="d-block w-100" alt="..." style="height: 264px !important; border-radius: 10px; height: 225.02px;">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="prev" id="btn1">
                      <i class='bx bx-chevron-left' style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                    </button>
                    <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls' + index" data-bs-slide="next" id="btn1">
                      <i class='bx bx-chevron-right' style="font-size: 23px; background: radial-gradient(black, transparent); border-radius: 50%;"></i>
                    </button>
                  </div>

                  <div class="row" style=" background: white; border-radius: 5px; position: absolute; margin-top: 182px; width: 97%; margin-left: 5px;">
                      <div class="col-md-12 mt-2">
                        <h5 class="card-title " style=" font-size: 14px;"> <img src="/assets/img/service/car.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                /> {{ vehicule.vehicule }} {{ vehicule.modele }} {{  vehicule.annee }}  </h5>
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
              <h2 class="text-uppercase">{{ t('section5_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text3') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/reservation">
              <boutton
                class="btn btn-primary" id="btn-end"
                 
              >
                {{ t('see_much') }}</boutton
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
              <h2 class="text-uppercase">{{ t('section6_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text4') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/destination-populaire">
              <boutton
                class="btn btn-primary"
               id="btn-end"
              >
                {{ t('see_much') }}</boutton
              >
            </router-link>
          </div>
        </div>
        
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div
            class="col"
            v-for=" (popularDestination, index  ) in promotionStore.popularDestinations" :key="index"
          >
            <router-link
            :to="`/detail_reservation_ticket/${encryptParam(popularDestination.companieInfos.uid)}/${encryptParam(popularDestination.uid)}`"
              style="color: #000"
            >
              <div class="card h-100 border-0" id="card_compagnie" style="box-shadow: none;">
                <div class="row" style="margin: 0px">
                  <div class="col-md-12">
                    <div
                      class="card h-100 mb-3 border-0"
                      style="background: #f9f9f9;"
                    >
                      <div class="row g-1 d-flex mt-2">
                        
                        <div class="col-7 d-flex">
                          <img
                          :src="popularDestination.companieInfos.imageLogoUrl"
                            alt
                            class="w-px-40 h-auto rounded-circle"
                            style="width: 40px; height: 40px !important ; border: 1px solid rgb(214, 214, 214); border-radius: 50% !important;"
                          />
                          <div>
                            <div class="card-body d-flex">
                              <h5 class="card-title" style="font-size: 10px">
                                {{
                                    popularDestination.companieInfos
                                      .raison_social
                                  }}
                              </h5>
                               
                            </div>
                          </div>
                        </div>

                        <div class="col-5 text-end">
                          <button
                            class="btn btn-primary"
                            style="
                              background: #219935;
                              border-color: #219935;
                              margin-top: 5px;
                              font-size: 12px;
                            "
                          >
                          {{ popularDestination.montant }}  FCFA
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0" style="margin: 8px; margin-top: -13px;">
                  <img
                          src="/assets/img/rb.jpg"
                          class="img-fluid h-100"
                          alt="..."
                          style="object-fit: cover ; border-radius: 11px;height: 197px !important;"
                   />

                   <div class="row" style=" background: white; border-radius: 5px; position: absolute; margin-top: 155px; width: 97%; margin-left: 4px;">
                      <div class="col-md-12 mt-2 ">
                        <h5 class="card-title " style=" font-size: 14px;"> <img src="/assets/img/service/bus.png" class="img-fluid w-25" alt="..." style="margin-top: -5px; width: 24px !important;"
                /> {{ popularDestination.lieu_depart }} -
                            {{ popularDestination.destination }}  </h5>
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
              <h2 class="text-uppercase">{{ t('section7_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text5') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/location_gros_engin">
              <boutton
                class="btn btn-primary"
               id="btn-end"
              >
                {{ t('see_much') }}</boutton
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
              <h2 class="text-uppercase">{{ t('section8_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text6') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/gros-engin-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                {{ t('see_much') }}</boutton
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
              <h2 class="text-uppercase">{{ t('section9_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text7') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/">
              <boutton
                class="btn btn-primary" id="btn-end"
                
              >
                {{ t('see_much') }}</boutton
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
              <h2 class="text-uppercase">{{ t('section10_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text8') }}.
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/vente-populaire">
              <boutton
                class="btn btn-primary" id="btn-end"
              >
                {{ t('see_much') }}</boutton
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
              <h2 class="text-uppercase">{{ t('section11_title') }}</h2>
              <p id="section-p">
                {{ t('popular_text9') }}
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <router-link to="/informations">
              <boutton
                class="btn btn-primary" id="btn-end"
                
              >
                {{ t('see_much') }}</boutton
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
                    <h5 class="card-title" id="blog_title">{{ t('card_title1') }}</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      {{ t('card_date') }}
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px; text-align: justify;">
                  {{ t('card_text1') }}... 
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <router-link to="/blog">
                      <button
                      class="btn"
                      id="btn-blog"
                     
                    >
                      {{ t('see_much') }}
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
                    <h5 class="card-title" id="blog_title">{{ t('card_title2') }}</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      {{ t('card_date') }}
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px; text-align: justify;">
                  {{ t('card_text2') }}...
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <router-link to="/blog/article2">
                      <button
                      class="btn"
                       id="btn-blog"
                    >
                      {{ t('see_much') }}
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
                    <h5 class="card-title" id="blog_title">{{ t('card_title3') }}...</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      {{ t('card_date') }}
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px; text-align: justify;">
                  {{ t('card_text3') }}...
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <router-link to="/blog/article3">
                      <button
                      class="btn"
                      id="btn-blog"
                    >
                      {{ t('see_much') }}
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
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); z-index: -1;"
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
                    <h5 class="card-title" id="blog_title">{{ t('card_title4') }}...</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-12">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      {{ t('card_date') }}
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px; text-align: justify;">
                  {{ t('card_text4') }}...
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <router-link to="/blog/article4">
                      <button
                      class="btn"
                       id="btn-blog"
                    >
                      {{ t('see_much') }}
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
          <div class="col-12">
            <div class="section-title text-center">
                  <h2>{{ t('newsletter_title') }}</h2>
                  <p id="section-p">
                    {{ t('newsletter_text') }}
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
                  @submit.prevent=""
                  enctype="multipart/form-data"
                >
                  <div
                    class="input-group d-flex justify-content-center"
                    style="margin-top: 15px"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg input py-3"
                      :placeholder="t('newsletter_placeholder')"
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
                      type="submit"
                    >
                      {{ t('newsletter_submit') }}
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

#btn-blog:hover{
  background-color: white !important;
  color: #219935;
  border-color: #219935 !important;
}

#btn-blog{
  background-color: #219935 ;
   border-color: #219935;
    color: white;

}

#btn1{
  
}

#btn1:hover{
  display: block;
}


/* New carousel */
.slide-container{
  position: relative;
  width: 105%;
  height: 350px;
  /* border: 3px solid #ede6d6; */
  /* box-shadow: 0 0 8px 2px rgba(0,0,0,0.2); */
}
.slides {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-container .slides{
  width: 100%;
  height: calc(100% - 0px);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.slide-container .slides img{
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  cursor: pointer;
  top: 0;
}
.slide-container .slides img:not(.active){
  left: 100%;
}
.slide-container .slides img.active {
  left: 0;
}

.slide-container .slides img.next1 {
  animation: next1 0.5s ease-in forwards;
}
.slide-container .slides img.next2 {
  animation: next2 0.5s ease-in forwards;
}
.slide-container .slides img.prev1 {
  animation: prev1 0.5s ease-in forwards;
}
.slide-container .slides img.prev2 {
  animation: prev2 0.5s ease-in forwards;
}
span.next, span.prev{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 20px;
  color: #eee;
  font-size: 24px;
  font-weight: bold;
  transition: 0.5s;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  z-index: 1;
}
span.next{
  right: 20px;
}
span.prev{
  left: 20px;
}
span.next:hover, span.prev:hover{
  background-color: #eee;
  opacity: 0.8;
  color: #219935;
} 
.dotsContainer{
  position: absolute;
  bottom: 5px;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
.dotsContainer .dot{
  width: 15px;
  height: 15px;
  margin: 0px 2px;
  border: 2.6px solid #EEE;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.6s ease;
}
.dotsContainer .active {
  background-color: #219935;
}

@keyframes next1{
  from{
    left: 0%
  }
  to{
    left: -100%;
  }
}
@keyframes next2{
  from{
    left: 100%
  }
  to{
    left: 0%;
  }
}
@keyframes prev1{
  from{
    left: 0%
  }
  to{
    left: 100%;
  }
}
@keyframes prev2{
  from{
    left: -100%
  }
  to{
    left: 0%;
  }
}

</style>