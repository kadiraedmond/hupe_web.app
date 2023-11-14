// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Detail from '@/views/Detail_client.vue';
import Details from '@/views/Details.vue';
import Reservation from '@/views/reservation.vue';
import Location from '@/views/location.vue';
import Form from '@/views/form_reservation.vue';
import Forms from '@/views/form_locations.vue';
import Choix from '@/views/choix_service.vue';
import Choi from '@/views/choix_offres.vue';
import Cho from '@/views/choix_offres2.vue';
import Information from '@/views/informations.vue';
import Service from '@/views/service.vue';
import Connexion from '@/views/connexion.vue';
import ClientConnexion from '@/views/connexion_client.vue';
import Compte from '@/views/compte_location_vehicule.vue';
import Comp from '@/views/compte_achat_engin.vue';
import Compt from '@/views/compte_gros_engin.vue';
import Comptes from '@/views/compte_reservation.vue';
import Client from '@/views/compte_client.vue';
import Dashboard from '@/views/dashbord.vue';
import Activite from '@/views/activite.vue';
import Otp from '@/views/otp.vue';
import Partenaire from '@/views/partenaire.vue';
import Pclient from '@/views/client.vue';
import Message from '@/views/message.vue';
import MessageCompagnie from '@/views/message_compagnie.vue';
import Sclient from '@/views/services_client.vue';
import Info from '@/views/infos.vue';
import Legales from '@/views/legales.vue';
import Application from '@/views/application.vue';
import Vehicule from '@/views/detail_vehicule_de_location.vue';
import Reserve from '@/views/detail_reservation_ticket.vue';
import Dengin from '@/views/detail_location_engin.vue';
import Engin from '@/views/gros_engin.vue';
import Promotion from '@/views/promotion.vue';
import Notation from '@/views/notation.vue';
import Statuts from '@/views/statuts.vue';
import Statut from '@/views/statut.vue';
import Pays from '@/views/pays.vue';
import Confirmation from '@/views/attente.vue';

import { auth } from '@/firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },

  {
    path: '/details/:id',
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
    path: '/connexion-client',
    name: 'ClientConnexion',
    component: ClientConnexion,
    
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, allowedUserType: 'companie' }
  },

  {
    path: '/messagerie/:id',
    name: 'Message',
    component: Message,
    
  },

  {
    path: '/messagerie-compagnie/:id',
    name: 'MessageCompagnie',
    component: MessageCompagnie,
    
  },

  {
    path: '/activite',
    name: 'Activite',
    component: Activite,
    
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
    path: '/compte_vehicule',
    name: 'Compte',
    component: Compte,
    // meta: { requiresAuth: true, allowedUserType: 'companie' }
  },
  {
    path: '/compte_reservation',
    name: 'Comptes',
    component: Comptes,
    // meta: { requiresAuth: true, allowedUserType: 'companie' }
  },

  {
    path: '/compte_gros_engin',
    name: 'Compt',
    component: Compt,
    meta: { requiresAuth: true, allowedUserType: 'companie' }
  },

  {
    path: '/compte_client',
    name: 'Client',
    component: Client,
    meta: { requiresAuth: true, allowedUserType: 'client' }
  },

  {
    path: '/compte_achat_engin',
    name: 'Comp',
    component: Comp,
    meta: { requiresAuth: true, allowedUserType: 'companie' }
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
    path: '/legales',
    name: 'Legales',
    component: Legales,
    
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
    path: '/detail_vehicule_location/:id',
    name: 'Vehicule',
    component: Vehicule,
    
  },

  {
    path: '/detail_reservation_ticket/:id',
    name: 'Reserve',
    component: Reserve,
    
  },

  {
    path: '/detail_engin_location',
    name: 'Dengin',
    component: Dengin,
    
  },

  {
    path: '/location_gros_engin',
    name: 'Engin',
    component: Engin,
    
  },

  {
    path: '/promotion',
    name: 'Promotion',
    component: Promotion,
    
  },

  {
    path: '/notation',
    name: 'Notation',
    component: Notation,
    
  },

  {
    path: '/location_de_vehicule',
    name: 'Statuts',
    component: Statuts,
    
  },


  {
    path: '/reservation_de_ticket',
    name: 'Statut',
    component: Statut,
    
  },

  {
    path: '/partenaire_par_pays',
    name: 'Pays',
    component: Pays,
    
  },

  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Recuperer l'utilisateur connecte de facon reactive
  let authUser = {}
  onAuthStateChanged(auth, user => {
    authUser = user
  })

  if (to.matched.some((record) => record.meta.requiresAuth)) { 
    if (authUser) {
      const allowedUserType = to.meta.allowedUserType

      // verifier si c'est une compagnie 
      if (authUser.raison_social && allowedUserType === 'companie') {
        next();
      } 
      // ou un client
      else if (!authUser.raison_social && allowedUserType === 'client') {
        next()
      } else {
        // Rediriger vers la page d'accueil si le type d'utilisateur n'est pas autorisé
        next({ name: 'Home' }); 
      }
    } else {
      // Rediriger vers la page d'accueil si l'utilisateur n'est pas authentifié
      next({ name: 'Home' }); 
    }
  } else {
    next();
  }
});

export default router