// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/view/Home.vue';
import Detail from '../components/view/Detail_client.vue';
import Details from '../components/view/Details.vue';
import Details_engin from '../components/view/detail_gros_engin.vue';
import Details_vente from '../components/view/detail_achat_engin.vue';
import Reservation from '../components/view/reservation.vue';
import Location from '../components/view/location.vue';
import Choix from '../components/view/choix_service.vue';
import Choi from '../components/view/choix_offres.vue';
import Cho from '../components/view/choix_offres2.vue';
import Information from '../components/view/informations.vue';
import Legales from '../components/view/legales.vue';
import Form from '../components/view/form_reservation.vue';
import Forms from '../components/view/form_locations.vue';
import Service from '../components/view/service.vue';
import Connexion from '../components/view/connexion.vue';
import Compte from '../components/view/compte_location_vehicule.vue';
import Compt from '../components/view/compte_gros_engin.vue';
import Comp from '../components/view/compte_achat_engin.vue';
import Comptes from '../components/view/compte_reservation.vue';
import Client from '../components/view/compte_client.vue';
import Dashboard from '../components/view/dashbord.vue';
import Activite from '../components/view/activite.vue';
import Otp from '../components/view/otp.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },

  {
    path: '/details',
    name: 'Details',
    component: Details,
  },

  {
    path: '/details_location_engin',
    name: 'Details_engin',
    component: Details_engin,
  },

  {
    path: '/details_vente_engin',
    name: 'Details_vente',
    component: Details_vente,
  },

  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
  },

  {
    path: '/location',
    name: 'Location',
    component: Location,
  },

   {
    path: '/formulaire_reservation',
    name: 'Form',
    component: Form,
  },
   
   {
    path: '/formulaire_location',
    name: 'Forms',
    component: Forms,
    
  },

  {
    path: '/legales',
    name: 'Legales',
    component: Legales,
    
  },
   
  {
    path: '/services',
    name: 'Service',
    component: Service,
    
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion,
    
  },
  {
    path: '/choix_services',
    name: 'Choix',
    component: Choix,
    
  },

  {
    path: '/choix_offres',
    name: 'Choi',
    component: Choi,
    
  },

  {
    path: '/choix_offres2',
    name: 'Cho',
    component: Cho,
    
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    
  },

  {
    path: '/activite',
    name: 'Activite',
    component: Activite,
    
  },

  {
    path: '/compte_vehicule',
    name: 'Compte',
    component: Compte,
    
  },
  {
    path: '/compte_reservation',
    name: 'Comptes',
    component: Comptes,
    
  },

  {
    path: '/compte_gros_engin',
    name: 'Compt',
    component: Compt,
    
  },

  {
    path: '/compte_client',
    name: 'Client',
    component: Client,
    
  },

  {
    path: '/compte_achat_engin',
    name: 'Comp',
    component: Comp,
    
  },
  {
    path: '/otp',
    name: 'Otp',
    component: Otp,
    
  },

  {
    path: '/information',
    name: 'Imformaton',
    component: Information,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
