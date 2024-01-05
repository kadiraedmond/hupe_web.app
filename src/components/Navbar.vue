<script setup>
import { auth } from '@/firebase/firebase.js'
import { signOut } from 'firebase/auth'
import { useAuthStore } from '@/store/auth.js'
import { useSearchStore } from '@/store/search.js'
import { useLocalisationStore } from '@/store/localisation.js'
import { useCompanieStore } from '@/store/companie.js' 
import { useSlide } from '@/store/slideImages.js' 
import { usePromotionStore } from '@/store/promotion.js' 
import { useNotificationStore } from '@/store/notification.js' 
import axios from 'axios'
import router from '@/router/router.js'
import Swal from 'sweetalert2'

import { onMounted, onBeforeMount, ref, watch } from 'vue'

import { firestoreDb } from "@/firebase/firebase.js"
import { updateDoc, doc, getDocs, query, where, collection, onSnapshot, getDoc } from "firebase/firestore"

const authStore = useAuthStore()
const localisationStore = useLocalisationStore()
const companieStore = useCompanieStore()
const searchStore = useSearchStore() 
const slideStore = useSlide() 
const promotionStore = usePromotionStore() 
const notificationStore = useNotificationStore() 

const user = authStore.user
const savedUser = JSON.parse(localStorage.getItem('user'))
let connectedUser 

const notifications = ref([])

const notificationColRef = collection(firestoreDb, 'notifications')

const noneReadNotifications = ref([])

onBeforeMount(async () => {
  connectedUser = JSON.parse(localStorage.getItem('user')) || authStore.user 

  if(connectedUser.raison_social) {
    const q = query(notificationColRef, where('userId', '==', `${connectedUser.uid}`))

    // const snapshot = await getDocs(q)
    // snapshot.docs.forEach(doc => notifications.value.push(doc.data()))

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const userData = change.doc.data()
        if(change.type === 'added' && userData.userId === connectedUser.uid) {
          notifications.value.push({ ...change.doc.data(), uid: change.doc.id })

          if(userData.lu === false) {
            notificationStore.setCount(notificationStore.count + 1)
          }
        }

      })
    })
  } else {
    const q = query(notificationColRef, where('destinataire', '==', `${connectedUser.uid}`))

    // const snapshot = await getDocs(q)
    // snapshot.docs.forEach(doc => notifications.value.push(doc.data()))

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const userData = change.doc.data()
        if(change.type === 'added' && userData.destinataire === connectedUser.uid) {
          notifications.value.push({ ...change.doc.data(), uid: change.doc.id })

          if(userData.lu === false) {
            notificationStore.setCount(notificationStore.count + 1)
          }
        }

      })
    })
  }
}) 

const collected_country = ['BJ', 'BF', 'CI', 'GN', 'ML', 'NE', 'SN', 'TG'] 

const country = ref()

const searchTerm = ref('')

const handleSearch = async () => { 
  await searchStore.search(searchTerm.value) 
  location.pathname !== '/recherche' && router.push('/recherche') 
  searchTerm.value = '' 
}
const API_URL = 'https://ipinfo.io/json?token=4e774d02603f38'

onBeforeMount(async () => {

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    country.value = data.country 

    if(!collected_country.includes(data.country)) {
      Swal.fire({
        text: `Votre pays ne propose pas de compagnies. Sélectionnez un autre pays dans la zone en haut à gauche de l'écran pour voir des compagnies`, 
        icon: "info"
      }) 

      companieStore.setCountry('CI') 
      slideStore.setCountry('CI') 
      promotionStore.setCountry('CI') 
    } 

    // Swal.fire({
    //   title: `Votre localisation est : \n ${data.city} - ${data.country}`, 
    //   icon: "info"
    // })
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de localisation :', error);
  }

})

const handleSelect = () => {
  console.log(country.value)
  localisationStore.setCompaniesByLocalisation(country.value)
  companieStore.setCountry(country.value) 
  slideStore.setCountry(country.value) 
  promotionStore.setCountry(country.value) 
}

const logout = async () => {
  try {
    await signOut(auth)
    authStore.signOut
    localStorage.removeItem('user')

    router.push('/')
    location.reload()
  } catch (error) {
    console.log(error)
  }
}; 

const goTo_client = async () => {
  await router.push('/compte_client')
  window.location.reload() 
}
const goTo_location = async () => {
  await router.push('/compte_vehicule')
  window.location.reload() 
}
const goTo_reservation = async () => {
  await router.push('/compte_reservation')
  window.location.reload() 
}

const home = async () => {
  await router.push('/') 
  await new Promise(resolve => setTimeout(resolve, 1));
  window.location.reload() 
}


const selectedValue = ref('');
// const options = [
//   { value: 'fr', label: 'France', imageUrl: '/assets/img/logo/benin.png' },
//   { value: 'us', label: 'United States', imageUrl: '/assets/img/logo/benin.png' },
//   // Ajoutez d'autres options selon vos besoins
// ] 


</script>

<template>
  <header id="header" class="fixed-top">
    <div
      class="container d-flex align-items-center justify-content-between"
      style="height: 40px"
    >
      <h1 class="logo" id="h1_logo">
        <router-link to="/"
          ><img
            src="/assets/img/logo3.png"
            alt=""
            class="img-fluid"
            style="margin-top: -6px"
        /></router-link>
      </h1>
      <nav id="navbar" class="navbar">
        <ul >
          <li style="margin-left: 30px; font-size: 14px; font-weight: 600">
            <select v-model="country" @change="handleSelect" class="form-select1" style="padding: 8.6px ; width: 114px;" id="validationCustom04" required>
              <option value="BJ" selected>Bénin</option>
              <option value="BF"><a> <i class="bx bx-category" id="icon_menu"></i> Burkina Faso</a></option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="GN">Guinée Conakry</option>
              <option value="ML">Mali</option>
              <option value="NE">Niger</option>
              <option value="SN">Sénégal</option>
              <option value="TG">Togo</option>
            </select>
            <!-- <select v-model="selectedValue">
            <option v-for="option in options" :key="option.value" :value="option.value">
              <img :src="option.imageUrl" alt="Country Flag" width="20" height="20">
              {{ option.label }}
            </option>
          </select> -->
          </li>
        </ul>
      </nav>
      <!-- .navbar -->

      <form class="d-flex" role="search" @submit.prevent="handleSearch" id="search">
      <div class="input-group">
        <span class="input-group-text" style="background: white; border-color: #219935; color: #219935;">
          
          <i class="bi bi-search"></i>
        </span>
        <input type="search" class="form-control" placeholder="Recherche..." v-model="searchTerm" aria-label="Recherche" style="border-color: #219935;">
      </div>
      <!-- <button class="btn btn-primary" type="submit">Rechercher</button> -->
    </form>
      <!-- <form class="d-flex" role="search" @submit.prevent="handleSearch">
        <input
          class="form-control me-2"
          style="width: 200; max-width: 200px; font-size: 13px;"
          type="search"
          placeholder="Recherche"
          v-model="searchTerm"
          aria-label="Search"
          id="search"
        />
        <i class="bx bx-search" type="submit" id="icon_search"></i>
        
      </form> -->

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link @click="home" to="" class="nav-link scrollto " :class="{ active: $route.path === '/' }"
              ><i class="bx bx-home" id="icon_menu"></i> Accueil</router-link
            >
          </li>
          
          <li>
            <router-link to="/services" class="nav-link scrollto" :class="{ active: $route.path === '/services' }"
              ><i class="bx bx-category" id="icon_menu"></i>
              Services</router-link
            >
          </li>
          <li>
            <router-link class="nav-link scrollto" to="/service_client" :class="{ active: $route.path === '/service_client' }"
              ><i class="bx bx-help-circle" id="icon_menu"></i> Aide
            </router-link>
          </li>
          <li>
            <router-link class="nav-link scrollto" to="/promotion" :class="{ active: $route.path === '/promotion' }"
              ><i class="bx bxs-megaphone" id="icon_menu"></i> Promotions
            </router-link>
          </li>
          <li style="margin-left: 30px; font-size: 14px; font-weight: 600">
            <select class="form-select1 px-3" style="padding: 8px" id="validationCustom04" required>
              <option selected value="">Francais</option>
              <option>Anglais</option>
            </select>
          </li>

          <li>
            <router-link v-if="!authStore.user.uid && !savedUser" to="/type-utilisateur" class="nav-link scrollto" :class="{ active: $route.path === '/connexion' }"
              ><i class="bx bx-user" id="icon_menu"></i> Connexion
            </router-link>
          </li>
          <li class="dropdown">
            <router-link to=""
              v-if="authStore.user.uid || savedUser"
              ><i class="bx bx-user" id="icon_menu"></i>
              <span>
                {{ 
                  savedUser.raison_social !== '' ? savedUser.raison_social : savedUser.username !== '' && savedUser.username
                  || authStore.user.raison_social !== '' ? authStore.user.raison_social : authStore.user.username !== '' && authStore.user.username
                }} 
              </span> <i class="bi bi-chevron-down"></i
            ></router-link>
            <ul style="background: #219935; color: white">
              <li @click="goTo_location" style="color: white">
                <router-link 
                  to="" 
                  style="color: white"
                  v-if="(savedUser && savedUser.type_compagnie == 'Location') 
                        || (user.raison_social && user.type_compagnie == 'Location') 
                        || (authStore.isConnected && authStore.isLocationCompany)"
                  >Compte location de vehicules</router-link
                >
              </li>
              <li @click="goTo_reservation" style="color: white">
                <router-link to="" 
                style="color: white"
                v-if="(savedUser && savedUser.type_compagnie == 'Transport') 
                      || (user.raison_social && user.type_compagnie == 'Transport') 
                      || (authStore.isConnected && authStore.isReservationCompany)"
                  >Compte reservation de ticket de bus</router-link
                >
              </li>
              <li style="color: white">
                <router-link style="color: white" v-if="authStore.isConnected && authStore.isBigEnginsCompany || user.raison_social" to="/compte_gros_engin"
                  >Compte location de gros engins</router-link
                >
              </li>
              <li style="color: white">
                <router-link style="color: white" v-if="authStore.isConnected && authStore.isCarsSellingCompany || user.raison_social" to="/compte_achat_engin">Compte vente d'engins </router-link>
              </li>
              <li @click="goTo_client" style="color: white">
                <router-link 
                  style="color: white"
                  v-if="(authStore.user.uid && !authStore.user.raison_social) 
                        || (savedUser && !savedUser.raison_social)" 
                  to="">
                  Mon compte 
                </router-link>
              </li>
              <li style="color: white"><router-link style="color: white" v-if="authStore.user.uid || savedUser" to="/" @click="logout">Déconnexion</router-link></li>
               
            </ul>
          </li>
          <li>
            <router-link v-if="authStore.user.uid || savedUser" class="nav-link scrollto" :to="`/notification`" :class="{ active: $route.path === '/notification' }"
            ><i class="bx bxs-bell" id="icon_menu"></i> 
              <p style="position: absolute; right: -8px; top: -10px; color: white; background: #E00; border-radius: 100%; padding: 0 2px">
                {{ notificationStore.count > 0 ? `+${notificationStore.count}` : '' }} 
              </p>
            </router-link>
          </li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>

<style scoped>
.dropdown {
  background: white;
  color: white !important
}

 #search{
  /* font-size: 15px; */
  width: 200px;
  height: 41px;
  background-color: white;
  border-color: #219935;
  color: #219935!important;
  margin-left: 14px;
 }

::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

#h1_logo{
  /* background: white; */
  background: #219935;
  padding: 4px;
  border-radius: 5px;
  height: 43px;
  margin-top: 2px;
}

#icon_search {
  margin-left: -51px;
  font-size: 19px;
  margin-top: 11px;
  color: #219935;
}

.form-select1 {
  display: block;
  width: 100%;
  padding: .375rem 2.25rem .375rem .75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: #219935;
  background-color: white;
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
  border: 1px solid #219935;
  border-radius: .375rem;
  /* transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-color: #219935;
}

input::placeholder {
  color: #219935;
  /* opacity: 0.5; */
}
</style>
