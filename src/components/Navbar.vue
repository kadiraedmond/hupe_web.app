<script setup>
   
</script>

<template>
 <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between" style="height: 40px;">

      <h1 class="logo"><a href="index.html"><img src="/assets/img/logo2.png" alt="" class="img-fluid "
            style="margin-top: -6px;"></a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li style=" margin-left: 30px; font-size: 14px;  font-weight: 600;">
            <select class="form-select1" id="validationCustom04" required>
              <option selected value="">Pays</option>
              <option>Anglais</option>
            </select>

          </li>
        </ul>

      </nav><!-- .navbar -->
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
        <i class='bx bx-search' type="submit" id="icon_search"></i>
        <!-- <button class="btn btn-outline-success" type="submit" style="margin-left: -90px;">Search</button> -->
      </form>

      <nav id="navbar" class="navbar">
        <ul>
          <li> <router-link to="/" class="nav-link scrollto active" ><font-awesome-icon icon="fa-solid fa-user-secret" />
              Accueil</router-link></li>
          <li><router-link to="/services" class="nav-link scrollto"><i class='fas fa-category' id="icon_menu"></i> Services</router-link></li>
          <li><a class="nav-link scrollto " href="#"><i class='fas fa-help-circle' id="icon_menu"></i> Aide </a></li>
          <li style=" margin-left: 30px; font-size: 14px;  font-weight: 600;">
            <select class="form-select1" id="validationCustom04" required>
              <option selected value="">Francais</option>
              <option>Anglais</option>
            </select>

          </li>

          <li><router-link to="/connexion" class="nav-link scrollto " href="#"><i class='fas fa-user' id="icon_menu"></i>Connexion </router-link></li>
          <li class="dropdown"><a href="#"><i class='bx bx-category' id="icon_menu"></i> <span>Admin </span> <i class="bi bi-chevron-down"></i></a>
            <ul style="background: #219935;">
              <li><a href="{{url('constuction')}}">Tableau de bord</a></li>
              <li><a href="{{url('location_immobilier')}}">Mon compte</a></li>
              <li><a v-bind:href="'/compte_vehicule'">Compte location de vehicule</a></li>
              <li><a v-bind:href="'/compte_reservation'">Compte reservation de ticket de bus</a></li>
              <li><a v-bind:href="'/compte_gros_engin'">Compte location de gros engin</a></li>
              <li><a href="{{url('vente_immobilier')}}">Déconnexion</a></li>
               
            </ul>
          </li>



          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
   
</template>

<style scoped>
 
</style>