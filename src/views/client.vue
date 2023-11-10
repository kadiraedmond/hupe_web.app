<script setup>
import { onMounted } from "vue"

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Pour les utilisateurs</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" style="box-shadow: 1px 1px 3px #00000040;">
  
              <div class="row no-gutters mt-4">
                  <div class="col-md-2"></div>
                  <div class="col-md-8 justify-content-center" style="text-align: justify;">
  
                      <h3 class="mt-5 mb-4" style="font-size: 22px;">Chers Utilisateurs,</h3>
                      <p data-aos=" -up">
                        Nous vous remercions de choisir Hupe pour répondre à vos besoins de location de véhicules, d'engins, réservation de tickets de bus, et d'achat de véhicules. Pour garantir une expérience positive pour vous et tous nos utilisateurs, veuillez prendre quelques instants pour lire notre politique et nos directives. Ces informations sont conçues pour créer un environnement sûr et agréable pour tous les utilisateurs de notre plateforme.
                      </p>
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Utilisation Responsable</h2>
                      <p>
                        Nous attendons de nos utilisateurs qu'ils utilisent notre application de manière responsable et respectueuse envers les autres utilisateurs et nos partenaires.
                      </p>
                      
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Réservation et Utilisation de Services</h2>
                      <p>Toutes les réservations et utilisations de services doivent être effectuées conformément à nos conditions générales et aux accords spécifiques de nos partenaires.</p>
                      <p>Annulations et modifications de réservations doivent être effectuées conformément à nos politiques de modification et d'annulation.</p>
  
                      
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Paiement</h2>
                      <p>Les paiements pour les services réservés doivent être effectués conformément aux tarifs indiqués et aux conditions de paiement convenues.</p>
  
                      
  
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Respect de la Vie Privée</h2>
                      <p>Vos données personnelles sont précieuses, et nous nous engageons à les protéger conformément à notre politique de confidentialité. Respectez également la vie privée de nos partenaires et d'autres utilisateurs.</p>
  
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Comportement Respectueux</h2>
                      <p>Tous les utilisateurs doivent traiter les chauffeurs, les opérateurs d'engins, et les autres utilisateurs avec respect, courtoisie et tolérance. Aucune forme de harcèlement, de discrimination ou de comportement offensant ne sera tolérée.</p>
  
                     
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Signalement de Problèmes</h2>
                      <p>Si vous rencontrez des problèmes ou des préoccupations concernant un service, un partenaire, ou un autre utilisateur, veuillez nous en informer via notre service client. Nous sommes là pour vous aider.</p>
  
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Sécurité</h2>
                      <p>Assurez-vous de respecter toutes les réglementations de sécurité lors de l'utilisation de véhicules ou d'engins. Votre sécurité et celle des autres sont essentielles.</p>
  
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Réservation de Tickets de Bus</h2>
                      <p>Lors de la réservation de tickets de bus, assurez-vous d'arriver à l'heure spécifiée. Les retards peuvent entraîner des perturbations pour d'autres passagers.</p>
  
                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Commentaires et Évaluations</h2>
                      <p>Nous encourageons les commentaires et les évaluations de services pour aider à maintenir des normes de qualité élevées. Veuillez fournir des commentaires constructifs.</p>

                      <h2 style="font-size: 19px; font-weight: 700;" class="mt-4">Non-respect des Politiques</h2>
                      <p>Nous nous réservons le droit de suspendre ou de mettre fin à l'accès à notre application en cas de non-respect répété de nos politiques.</p>
                      <p>Nous vous remercions de votre compréhension et de votre coopération pour faire de Hupe une plateforme sûre et fiable pour tous. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
                       
                      <p>Cordialement,</p>
                      
                      <p class="mb-4">L’équipe Hupe Africa </p>
  
                    
  
 
  
                  </div>
                  <div class="col-md-2"></div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style>
</style>