// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Detail from '@/views/Detail_client.vue';
import Details from '@/views/Details.vue';
import Reservation from '@/views/reservation.vue';
import Location from '@/views/location.vue';
import Form from '@/views/form_reservation.vue';
import Forms from '@/views/form_locations.vue';
import Service from '@/views/service.vue';
import Connexion from '@/views/connexion.vue';
import Compte from '@/views/compte_location_vehicule.vue';
import Compt from '@/views/compte_gros_engin.vue';
import Comptes from '@/views/compte_reservation.vue';
import Dashboard from '@/views/dashbord.vue';
import Activite from '@/views/activite.vue';
import Otp from '@/views/otp.vue';


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
    path: '/otp',
    name: 'Otp',
    component: Otp,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
