// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/view/Home.vue';
import Detail from '../components/view/Detail.vue';
import Details from '../components/view/Details.vue';
import Reservation from '../components/view/reservation.vue';
import Location from '../components/view/location.vue';
import Form from '../components/view/form_reservation.vue';
import Forms from '../components/view/form_locations.vue';
import Service from '../components/view/service.vue';
import Connexion from '../components/view/connexion.vue';
import Dashboard from '../components/view/dashbord.vue';
import Activite from '../components/view/activite.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
