// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Detail = () => import('@/views/Detail_client.vue')
const Details = () => import('@/views/Details.vue')
const Reservation = () => import('@/views/reservation.vue')
const Location = () => import('@/views/location.vue')
const Form = () => import('@/views/form_reservation.vue')
const Forms = () => import('@/views/form_locations.vue')
const Choix = () => import('@/views/choix_service.vue')
const Choi = () => import('@/views/choix_offres.vue')
const Cho = () => import('@/views/choix_offres2.vue')
const Information = () => import('@/views/informations.vue')
const Service = () => import('@/views/service.vue')
const Connexion = () => import('@/views/connexion.vue')
const ClientConnexion = () => import('@/views/connexion_client.vue')
const Compte = () => import('@/views/compte_location_vehicule.vue')
const Comp = () => import('@/views/compte_achat_engin.vue')
const Compt = () => import('@/views/compte_gros_engin.vue')
const Comptes = () => import('@/views/compte_reservation.vue')
const Client = () => import('@/views/compte_client.vue')
const Dashboard = () => import('@/views/dashbord.vue')
const Activite = () => import('@/views/activite.vue')
const Otp = () => import('@/views/otp.vue')
const Partenaire = () => import('@/views/partenaire.vue')
const Pclient = () => import('@/views/client.vue')
const Message = () => import('@/views/message.vue')
const MessageCompagnie = () => import('@/views/message_compagnie.vue')
const Sclient = () => import('@/views/services_client.vue')
const Info = () => import('@/views/infos.vue')
const Legales = () => import('@/views/legales.vue')
const Application = () => import('@/views/application.vue')
const Vehicule = () => import('@/views/detail_vehicule_de_location.vue')
const Reserve = () => import('@/views/detail_reservation_ticket.vue')
const Dengin = () => import('@/views/detail_location_engin.vue')
const Engin = () => import('@/views/gros_engin.vue')
const Promotion = () => import('@/views/promotion.vue')
const Notation = () => import('@/views/notation.vue')
const Statuts = () => import('@/views/statuts.vue')
const Statut = () => import('@/views/statut.vue')
const Pays = () => import('@/views/pays.vue')
const Confirmation = () => import('@/views/attente.vue')
const RaisonLocation = () => import('@/views/raison_location.vue')
const RaisonReservation = () => import('@/views/raison_reservation.vue')
const Notification = () => import('@/views/notification.vue')
const Tickets = () => import('@/views/ticket_location.vue')
const Ticketss = () => import('@/views/ticket_reservation.vue')
const Recherche = () => import('@/views/recherche.vue')
const Support = () => import('@/views/support.vue')
const Blog = () => import('@/views/blog/blog.vue')
const Blog1 = () => import('@/views/blog/blog1.vue')
const Blog2 = () => import('@/views/blog/blog2.vue')
const Blog3 = () => import('@/views/blog/blog3.vue')
const VehiculeP = () => import('@/views/vehicule.vue')
const ReservationP = () => import('@/views/reservation_populaire.vue')
const EnginP = () => import('@/views/engin_populaire.vue')
const VenteP = () => import('@/views/vente_populaire.vue')
const InfosClient = () => import('@/views/information_client.vue')
const ConditionConnexion = () => import('@/views/condition-connexion.vue')
const VueListe = () =>  import('@/views/liste_location.vue')

const VueListeValide = () =>  import('@/components/Location/Activite/liste_valide.vue')
const VueListeUtilise = () =>  import('@/components/Location/Activite/liste_utilise.vue')
const VueListeAnnule = () =>  import('@/components/Location/Activite/liste_annule.vue')
const VueListeReporte = () =>  import('@/components/Location/Activite/liste_reporte.vue')
const VueListeConfirme = () =>  import('@/components/Location/Activite/liste_confirme.vue')

const VueListesValide = () =>  import('@/components/CompteReservation/Activite/liste_valide.vue')
const VueListesUtilise = () =>  import('@/components/CompteReservation/Activite/liste_utilise.vue')
const VueListesAnnule = () =>  import('@/components/CompteReservation/Activite/liste_annule.vue')
const VueListesReporte = () =>  import('@/components/CompteReservation/Activite/liste_reporte.vue')
const VueListesConfirme = () =>  import('@/components/CompteReservation/Activite/liste_confirme.vue')
const Collaborateur = () =>  import('@/components/CompteReservation/detail-collaborateur.vue')
 

const VueListes = () =>  import('@/views/liste_reservation.vue')
const Etape = () => import('@/views/etape.vue')

const Politique = () => import('@/views/poltique.vue')


import { auth } from '@/firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    meta: {
      keepAlive: true, // Assurez-vous que cette propriété est définie sur true
    },
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

  // { path: '/page/:pageNumber',
  //  component: Location },

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
    // meta: { requiresAuth: true, allowedUserType: 'companie' }
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
    // meta: { requiresAuth: true, allowedUserType: 'companie' }
  },

  {
    path: '/compte_client',
    name: 'Client',
    component: Client,
    // meta: { requiresAuth: true, allowedUserType: 'client' } 
  },

  {
    path: '/compte_achat_engin',
    name: 'Comp',
    component: Comp,
    // meta: { requiresAuth: true, allowedUserType: 'companie' }
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
    path: '/detail_vehicule_location/:companieId/:vehiculeId',
    name: 'Vehicule',
    component: Vehicule,
    
  },

  {
    path: '/detail_reservation_ticket/:companieId/:trajetId',
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
    path: '/notation/:id',
    name: 'Notation',
    component: Notation,
    
  },

  {
    path: '/location_de_vehicule/:param',
    name: 'Statuts',
    component: Statuts, 
    
  },


  {
    path: '/reservation_de_ticket/:param',
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
  {
    path: '/raison/location/:id',
    name: 'RaisonLocation',
    component: RaisonLocation,
    
  },
  {
    path: '/raison/reservation/:id',
    name: 'RaisonReservation',
    component: RaisonReservation,
    
  },

  {
    path: '/notification',
    name: 'Notification',
    component: Notification,
    
  },
  {
    path: '/ticket_location/:id',
    name: 'Tickets',
    component: Tickets,
    
  },

  {
    path: '/ticket_reservation/:id',
    name: 'Ticketss',
    component: Ticketss,
    
  },

  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche,
    
  },

  {
    path: '/support',
    name: 'Support',
    component: Support,
    
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    
  },

  {
    path: '/blog/article2',
    name: 'Blog1',
    component: Blog1,
    
  },

  {
    path: '/blog/article3',
    name: 'Blog2',
    component: Blog2,
    
  },

  {
    path: '/blog/article4',
    name: 'Blog3',
    component: Blog3,
    
  },

  {
    path: '/vehicule-populaire',
    name: 'VehiculeP',
    component: VehiculeP,
    
  },

  {
    path: '/destination-populaire',
    name: 'ReservationP',
    component: ReservationP,
    
  },

  {
    path: '/gros-engin-populaire',
    name: 'EnginP',
    component: EnginP,
    
  },

  {
    path: '/vente-populaire',
    name: 'VenteP',
    component: VenteP,
    
  },

  {
    path: '/information-client',
    name: 'InfosClient',
    component: InfosClient,
    
  },

  {
    path: '/terme-connection',
    name: 'ConditionConnexion',
    component: ConditionConnexion,
    
  },

  {
    path: '/politique',
    name: 'Politique',
    component: Politique,
    
  },

  {
    path: '/liste-location',
    name: 'VueListe',
    component: VueListe,
    
  },

  {
    path: '/location-annule',
    name: 'VueListeAnnule',
    component: VueListeAnnule,
    
  },

  {
    path: '/location-valide',
    name: 'VueListeValide',
    component: VueListeValide,
    
  },

  {
    path: '/location-utilise',
    name: 'VueListeUtilise',
    component: VueListeUtilise,
    
  },

  {
    path: '/location-reporte',
    name: 'VueListeReporte',
    component: VueListeReporte,
    
  },

  {
    path: '/location-confirme',
    name: 'VueListeConfirme',
    component: VueListeConfirme,
    
  },


  {
    path: '/liste-reservation',
    name: 'VueListes',
    component: VueListes,
    
  },

  {
    path: '/reservation-annule',
    name: 'VueListesAnnule',
    component: VueListesAnnule,
    
  },

  {
    path: '/reservation-valide',
    name: 'VueListesValide',
    component: VueListesValide,
    
  },

  {
    path: '/reservation-utilise',
    name: 'VueListesUtilise',
    component: VueListesUtilise,
    
  },

  {
    path: '/reservation-reporte',
    name: 'VueListesReporte',
    component: VueListesReporte,
    
  },

  {
    path: '/reservation-confirme',
    name: 'VueListesConfirme',
    component: VueListesConfirme,
    
  },

  {
    path: '/collaborateur/:scannerId/activites',
    name: 'Collaborateur',
    component: Collaborateur,
    
  },


  {
    path: '/type-utilisateur',
    name: 'Etape',
    component: Etape,
    
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   // Recuperer l'utilisateur connecte de facon reactive
//   let authUser = {}
//   onAuthStateChanged(auth, user => {
//     authUser = user
//   })

//   if (to.matched.some((record) => record.meta.requiresAuth)) { 
//     if (authUser) {
//       const allowedUserType = to.meta.allowedUserType

//       // verifier si c'est une compagnie 
//       if (authUser.raison_social && allowedUserType === 'companie') {
//         next();
//       } 
//       // ou un client
//       else if (!authUser.raison_social && allowedUserType === 'client') {
//         next()
//       } else {
//         // Rediriger vers la page d'accueil si le type d'utilisateur n'est pas autorisé
//         next({ name: 'Home' }); 
//       }
//     } else {
//       // Rediriger vers la page d'accueil si l'utilisateur n'est pas authentifié
//       next({ name: 'Home' }); 
//     }
//   } else {
//     next();
//   }
// });

export default router