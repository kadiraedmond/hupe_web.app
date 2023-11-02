<script setup>
import { auth } from '@/firebase/firebase.js'
import { signOut } from 'firebase/auth'
import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()

const logout = async () => {
  await signOut(auth)
  authStore.signOut
}

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
            <select class="form-select1" style="padding: 8.6px ; width: 96px;" id="validationCustom04" required>
              <option selected value="">Bénin</option>
              <option>Burkina Faso</option>
              <option>Côte d'Ivoire</option>
              <option>Guinée Conakry</option>
              <option>Mali</option>
              <option>Niger</option>
              <option>Sénégal</option>
              <option>Togo</option>
            </select>
          </li>
        </ul>
      </nav>
      <!-- .navbar -->
      <form class="d-flex" role="search">
        <input
          class="form-control me-2 text-white"
          style="width: 200; max-width: 200px;"
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
          id="search"
        />
        <i class="bx bx-search" type="submit" id="icon_search"></i>
        <!-- <button class="btn btn-outline-success" type="submit" style="margin-left: -90px;">Search</button> -->
      </form>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/" class="nav-link scrollto active"
              ><i class="bx bx-home" id="icon_menu"></i> Accueil</router-link
            >
          </li>
          <li>
            <router-link to="/services" class="nav-link scrollto"
              ><i class="bx bx-category" id="icon_menu"></i>
              Services</router-link
            >
          </li>
          <li>
            <router-link class="nav-link scrollto" to="/"
              ><i class="bx bx-help-circle" id="icon_menu"></i> Aide
            </router-link>
          </li>
          <li>
            <router-link class="nav-link scrollto" to="/promotion"
              ><i class="bx bx-help-circle" id="icon_menu"></i> Promotion
            </router-link>
          </li>
          <li style="margin-left: 30px; font-size: 14px; font-weight: 600">
            <select class="form-select1 px-3" style="padding: 8px" id="validationCustom04" required>
              <option selected value="">Francais</option>
              <option>Anglais</option>
            </select>
          </li>

          <li>
            <router-link v-if="!authStore.isConnected" to="/connexion" class="nav-link scrollto"
              ><i class="bx bx-user" id="icon_menu"></i> Connexion
            </router-link>
          </li>
          <li class="dropdown">
            <router-link to=""
              v-if="authStore.isConnected"
              ><i class="bx bx-user" id="icon_menu"></i>
              <span>
                {{ authStore.user.raison_social ? authStore.user.raison_social : authStore.user.username }} 
              </span> <i class="bi bi-chevron-down"></i
            ></router-link>
            <ul style="background: #219935">
              <li>
                <router-link to="/compte_vehicule" v-if="authStore.isConnected && authStore.isLocationCompany"
                  >Compte location de vehicules</router-link
                >
              </li>
              <li>
                <router-link to="/compte_reservation" v-if="authStore.isConnected && authStore.isReservationCompany"
                  >Compte reservation de ticket de bus</router-link
                >
              </li>
              <li>
                <router-link v-if="authStore.isConnected && authStore.isBigEnginsCompany" to="/compte_gros_engin"
                  >Compte location de gros engins</router-link
                >
              </li>
              <li>
                <router-link v-if="authStore.isConnected && authStore.isCarsSellingCompany" to="/compte_achat_engin">Compte vente d'engins </router-link>
              </li>
              <li><router-link v-if="authStore.isConnected" to="/compte_client">Mon compte </router-link></li>
              <li><router-link v-if="authStore.isConnected" to="/" @click="logout">Déconnexion</router-link></li>
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
</style>
