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
import Application from '../components/view/application.vue';
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
import Partenaire from '../components/view/partenaire.vue';
import Pclient from '../components/view/client.vue';
import Otp from '../components/view/otp.vue';
import Sclient from '../components/view/services_client.vue';
import Info from '../components/view/infos.vue';
import Vehicule from '../components/view/detail_vehicule_de_location.vue';
import Reserve from '../components/view/detail_reservation_ticket.vue';
import Achat from '../components/view/detail_vente_engin.vue';
import Ticket1 from '../components/view/ticket_location.vue';
import Ticket2 from '../components/view/ticket_reservation.vue';
import Message from '../components/view/message.vue';
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
    path: '/pour_client',
    name: 'Pclient',
    component: Pclient,
    
  },

  {
    path: '/pour_partenaire',
    name: 'Partenaire',
    component: Partenaire,
    
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

  {
    path: '/informations',
    name: 'Info',
    component: Info,
    
  },


  {
    path: '/service_client',
    name: 'Sclient',
    component: Sclient,
    
  },

  {
    path: '/application',
    name: 'Application',
    component: Application,
    
  },

  {
    path: '/detail_vehicule_location',
    name: 'Vehicule',
    component: Vehicule,
    
  },

  {
    path: '/detail_reservation_ticket',
    name: 'Reserve',
    component: Reserve,
    
  },

  {
    path: '/detail_vente_engin',
    name: 'Achat',
    component: Achat,
    
  },


  {
    path: '/ticket_location',
    name: 'Ticket1',
    component: Ticket1,
    
  },

  {
    path: '/ticket_reservation',
    name: 'Ticket2',
    component: Ticket2,
    
  },

  {
    path: '/messagerie',
    name: 'Message',
    component: Message,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
