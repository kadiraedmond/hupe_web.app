<script setup>
import { auth } from '@/firebase/firebase.js'
import { signOut } from 'firebase/auth'
import { useAuthStore } from '@/store/auth.js'
import { useSearchStore } from '@/store/search.js'
import { useLocalisationStore } from '@/store/localisation.js'
import { useCompanieStore } from '@/store/companie.js' 
import { useSlide } from '@/store/slideImages.js' 
import { usePromotionStore } from '@/store/promotion.js' 
import axios from 'axios'
import router from '@/router/router.js'
import Swal from 'sweetalert2'

import { onMounted, onBeforeMount, ref } from 'vue'

import { firestoreDb } from "@/firebase/firebase.js"
import { updateDoc, doc, getDocs, query, where, collection, getDoc } from "firebase/firestore"

const authStore = useAuthStore()
const localisationStore = useLocalisationStore()
const companieStore = useCompanieStore()
const searchStore = useSearchStore() 
const slideStore = useSlide() 
const promotionStore = usePromotionStore() 

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

      const snapshot = await getDocs(q)
      snapshot.docs.forEach(doc => notifications.value.push(doc.data()))
  } else {
      const q = query(notificationColRef, where('destinataire', '==', `${connectedUser.uid}`))

      const snapshot = await getDocs(q)
      snapshot.docs.forEach(doc => notifications.value.push(doc.data()))
  }

  notifications.value.forEach(notification => {
    if(notification.lu === false) {
        noneReadNotifications.value.push(notification)
    }
  })
}) 

const collected_country = ['BJ', 'BF', 'CI', 'GN', 'ML', 'NE', 'SN', 'TG'] 

const country = ref()

const searchTerm = ref('')

const handleSearch = () => {
  searchStore.search(searchTerm) 
  router.push('/recherche')
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

const selectedValue = ref('');
const options = [
  { value: 'fr', label: 'France', imageUrl: 'public/assets/img/logo/benin.png' },
  { value: 'us', label: 'United States', imageUrl: 'public/assets/img/logo/benin.png' },
  // Ajoutez d'autres options selon vos besoins
];


</script>

<template>
  <header id="header" class="fixed-top">
    <div
      class="container d-flex align-items-center justify-content-between"
      style="height: 40px"
    >
      <h1 class="logo">
        <router-link to="/"
          ><img
            src="/assets/img/logo2.png"
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
      <form class="d-flex" role="search" @submit.prevent="handleSearch">
        <input
          class="form-control me-2 text-white"
          style="width: 200; max-width: 200px"
          type="search"
          placeholder="Rechercher"
          v-model="searchTerm"
          aria-label="Search"
          id="search"
        />
        <i class="bx bx-search" type="submit" id="icon_search"></i>
        <!-- <button class="btn btn-outline-success" type="submit" style="margin-left: -90px;">Search</button> -->
      </form>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/" class="nav-link scrollto " :class="{ active: $route.path === '/' }"
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
            <router-link v-if="!authStore.user.uid && !savedUser" to="/connexion" class="nav-link scrollto" :class="{ active: $route.path === '/connexion' }"
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
            <ul style="background: #219935">
              <li>
                <router-link 
                  to="/compte_vehicule" 
                  v-if="(savedUser && savedUser.type_compagnie == 'Location') 
                        || (user.raison_social && user.type_compagnie == 'Location') 
                        || (authStore.isConnected && authStore.isLocationCompany)"
                  >Compte location de vehicules</router-link
                >
              </li>
              <li>
                <router-link to="/compte_reservation" 
                v-if="(savedUser && savedUser.type_compagnie == 'Transport') 
                      || (user.raison_social && user.type_compagnie == 'Transport') 
                      || (authStore.isConnected && authStore.isReservationCompany)"
                  >Compte reservation de ticket de bus</router-link
                >
              </li>
              <li>
                <router-link v-if="authStore.isConnected && authStore.isBigEnginsCompany || user.raison_social" to="/compte_gros_engin"
                  >Compte location de gros engins</router-link
                >
              </li>
              <li>
                <router-link v-if="authStore.isConnected && authStore.isCarsSellingCompany || user.raison_social" to="/compte_achat_engin">Compte vente d'engins </router-link>
              </li>
              <li>
                <router-link 
                  v-if="(authStore.user.uid && !authStore.user.raison_social) 
                        || (savedUser && !savedUser.raison_social)" 
                  to="/compte_client">
                  Mon compte 
                </router-link>
              </li>
              <li><router-link v-if="authStore.user.uid || savedUser" to="/" @click="logout">Déconnexion</router-link></li>
               
            </ul>
          </li>
          <li>
            <router-link v-if="authStore.user.uid || savedUser" class="nav-link scrollto" :to="`/notification`" :class="{ active: $route.path === '/notification' }"
            ><i class="bx bxs-bell" id="icon_menu"></i> 
              <p style="position: absolute; right: -8px; top: -10px; color: white; background: #E00; border-radius: 100%; padding: 0 2px">
                {{ noneReadNotifications.length > 0 ? `+${noneReadNotifications.length}` : '' }} 
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
 #search{
  font-size: 15px;
 }

::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
</style>
