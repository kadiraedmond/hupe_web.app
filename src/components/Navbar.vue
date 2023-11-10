<script setup>
import { auth } from '@/firebase/firebase.js'
import { signOut } from 'firebase/auth'
import { useAuthStore } from '@/store/auth.js'
import { useSearchStore } from '@/store/search.js'
import { useLocalisationStore } from '@/store/localisation.js'
import axios from 'axios'
import router from '@/router/router.js'

import { onMounted, ref } from 'vue'

const authStore = useAuthStore()
const localisationStore = useLocalisationStore()
const searchStore = useSearchStore()

const user = authStore.user
const savedUser = JSON.parse(localStorage.getItem('user'))

const country = ref()

const searchTerm = ref('')

const handleSearch = () => {
  searchStore.search(searchTerm)
}

onMounted(async () => {
  const response = await fetch('https://ipinfo.io/json')

  if(response.ok) {
    const data = response.json()

    country.value = data.country
    localisationStore.setCompaniesByLocalisation(data.country)
  } else {
    console.log(response)
  }
})

const handleSelect = () => {
  console.log(country.value)
  localisationStore.setCompaniesByLocalisation(country.value)
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
              <option value="BF">Burkina Faso</option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="GN">Guinée Conakry</option>
              <option value="ML">Mali</option>
              <option value="NE">Niger</option>
              <option value="SN">Sénégal</option>
              <option value="TG">Togo</option>
            </select>
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
            <router-link class="nav-link scrollto" to="/service_client"
              ><i class="bx bx-help-circle" id="icon_menu"></i> Aide
            </router-link>
          </li>
          <li>
            <router-link class="nav-link scrollto" to="/promotion"
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
            <router-link v-if="!authStore.user.uid && !savedUser" to="/connexion" class="nav-link scrollto"
              ><i class="bx bx-user" id="icon_menu"></i> Connexion
            </router-link>
          </li>
          <li class="dropdown">
            <router-link to=""
              v-if="authStore.user.uid || savedUser"
              ><i class="bx bx-user" id="icon_menu"></i>
              <span>
                {{ 
                  authStore.user.raison_social ? authStore.user.raison_social : authStore.user.username 
                  || savedUser.raison_social ? savedUser.raison_social : savedUser.username
                }} 
              </span> <i class="bi bi-chevron-down"></i
            ></router-link>
            <ul style="background: #219935">
              <li>
                <router-link 
                  to="/compte_vehicule" 
                  v-if="(authStore.isConnected && authStore.isLocationCompany) 
                        || (user.raison_social && user.type_compagnie == 'Location') 
                        || (savedUser && savedUser.type_compagnie == 'Location')"
                  >Compte location de vehicules</router-link
                >
              </li>
              <li>
                <router-link to="/compte_reservation" 
                v-if="(authStore.isConnected && authStore.isReservationCompany) 
                      || (user.raison_social && user.type_compagnie == 'Transport') 
                      || (savedUser && savedUser.type_compagnie == 'Transport')"
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
