<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
});


document.addEventListener("scroll", function() {
    var fixe = document.getElementById("fixe");
    var footer = document.querySelector("footer");
    
    if (fixe && footer) {
        var columnTop = fixe.getBoundingClientRect().top;
        var footerTop = footer.getBoundingClientRect().top;
        
        if (columnTop + f.offsetHeight > footerTop) {
            fixe.style.top = footerTop - columnTop - fixe.offsetHeight + "px";
        } else {
            fixe.style.top = "0";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
 var elementToActivate = document.querySelector(window.location.hash);
    if (elementToActivate) {
  elementToActivate.classList.add("active"); // Appliquer une classe ou un style pour activer l'élément
            }
});

</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section id="features" class="features">
      <div class="container">
        <div class="row" style="margin-top: -20px;">
            <div class="col-md-3" style="border-right: 1px solid; border-color:#EAEAEA;">
                <ul class="nav nav-tabs fixe" id="myTab" role="tablist" style="border: none; ">
                    <div class="row ">
                        
                        <!-- <div class="col-md-12 mb-3">
                            <router-link to="/">
                                <h1 class="text-black">
                                  <i class="bx bx-x"></i>
                               </h1>
                            
                            </router-link>
                        </div> -->
                        <div class="col-md-12 mb-4">
                            <h2 style="font-size: 24px;">Services </h2>
                        </div>
                        <div class="col-md-12 mb-2 text-start">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active  text-start" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> <i class='bx bx-car'></i> Location de Véhicules </button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link  text-start" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"> <i class='bx bx-bus' ></i> Réservation de Billets de Bus</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"> <i class='bx bx-bus' ></i> Location de Gros Engins </button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false"> <i class='bx bx-car'></i>  Vente de Véhicules </button>
                            </li>
                        </div>
                    </div>
 
                </ul>
            </div>
            <div class="col-md-9 mt-5" style=" padding: 10px;">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Location de Véhicules </h2>
                                <hr>
                                <p>Bienvenue sur la page de location de véhicules HUPE. Notre service de location de véhicules est conçu pour offrir à nos utilisateurs une solution de mobilité pratique et flexible. Découvrez ci-dessous les avantages de la location de véhicules via HUPE et comment cela fonctionne.</p>
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Pourquoi Choisir HUPE pour la Location de Véhicules ?</h1>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/1.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #62bfc4 !important;">
                                    <h5 class="card-title text-black" style="font-size: 17px;">Large Gamme de Véhicules  </h5>
                                    <p class="card-text" style="font-size: 14px;">Chez HUPE, vous avez accès à une large gamme de véhicules, des voitures compactes aux SUV spacieux, adaptés à tous vos besoins de déplacement.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/2.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #f9f9f9 !important;" >
                                        <h5 class="card-title text-black" style="font-size: 17px;">Options de Durée de Location </h5>
                                        <p class="card-text" style="font-size: 14px;"> Vous pouvez louer un véhicule pour quelques heures, une journée entière ou même pour une semaine entière, offrant une grande flexibilité.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/3.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Tarification Transparente  </h5>
                                        <p class="card-text" style="font-size: 14px;">Notre tarification est transparente et compétitive. Vous saurez exactement ce que vous paierez dès le départ, sans frais cachés.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/4.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #f8e4dd !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Réservation Facile </h5>
                                        <p class="card-text" style="font-size: 14px;">La réservation d'un véhicule est simple et rapide. Vous pouvez le faire en quelques étapes via notre application mobile ou notre site web.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/5.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #fdb7b9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Assurance et Assistance </h5>
                                        <p class="card-text" style="font-size: 14px;">Tous les véhicules sont assurés, et nous offrons une assistance en cas de panne pour une expérience de location en toute tranquillité.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Comment Louer un Véhicule via HUPE </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                1.	Téléchargez l'Application 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body">
                                                 Si vous n'avez pas encore installé notre application mobile, téléchargez-la depuis l'App Store (iOS) ou Google Play Store (Android).
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                2.	Créez un Compte 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                 Inscrivez-vous ou connectez-vous à votre compte HUPE.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                3.	Sélectionnez le Véhicule 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                Parcourez notre gamme de véhicules disponibles, consultez les détails et les photos, puis choisissez celui qui vous convient.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingO">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseO" aria-expanded="false" aria-controls="panelsStayOpen-collapseO">
                                                4.	Choisissez la Durée 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseO" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingO">
                                            <div class="accordion-body">
                                                Indiquez la durée de location souhaitée, en précisant le début et la fin de la location.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingT">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseT" aria-expanded="false" aria-controls="panelsStayOpen-collapseT">
                                                5.	Finalisez la Réservation 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseT" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingT">
                                            <div class="accordion-body">
                                                Confirmez votre réservation en effectuant le paiement en ligne de manière sécurisée.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTh">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseTh">
                                                6.	Récupérez le Véhicule 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTh" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTh">
                                            <div class="accordion-body">
                                                Rendez-vous au point de prise en charge spécifié pour récupérer le véhicule à l'heure convenue.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThe">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThe" aria-expanded="false" aria-controls="panelsStayOpen-collapseThe">
                                                7.	Profitez de votre Voyage 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThe" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThe">
                                            <div class="accordion-body">
                                                Le véhicule est à vous pour la durée de votre location. Profitez de votre voyage en toute liberté.
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Assistance et Support </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Si vous avez des questions ou rencontrez des problèmes lors du processus de location, n'hésitez pas à nous contacter via notre page de <router-link to="/">support</router-link> . Nous sommes là pour vous aider.</p> 
                                    <p>La location de véhicules avec HUPE est un moyen pratique et abordable de vous déplacer. Essayez notre service de location de véhicules dès aujourd'hui pour vivre une expérience de conduite exceptionnelle.</p>
                                   
                                </div>
                                
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12 text-center">
                                    <p>Pour voir les compagnies offrant ces services, cliquez ici</p>
                                </div>

                                <div class="col-md-12 text-center">
                                    <p style="font-size: 20px;"><i class='bx bx-down-arrow-alt'></i></p>
                                </div>
                                 
                                <div class="col-md-12 text-center">
                                    <router-link to="/location">
                                        <boutton class="btn btn-primary" style="background:#219935; border-color:#219935">Location de Véhicules</boutton>
                                    </router-link>
                                   
                                </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Réservation de Billets de Bus  </h2>
                                <hr>
                                <p>Bienvenue sur la page de réservation de billets de bus HUPE. Notre service de réservation de billets de bus est conçu pour vous offrir une expérience de voyage en bus facile, pratique et sans tracas. Découvrez ci-dessous les avantages de la réservation de billets de bus via HUPE et comment cela fonctionne.</p>
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Pourquoi Choisir HUPE pour la Réservation de Billets de Bus ?</h1>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/reservation/1.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #62bfc4 !important;">
                                    <h5 class="card-title text-black" style="font-size: 17px;"> Large Réseau de Transport   </h5>
                                    <p class="card-text" style="font-size: 14px;">HUPE collabore avec un réseau étendu de compagnies de bus, offrant une variété de destinations pour répondre à vos besoins de voyage.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/reservation/2.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #f9f9f9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Réservation en Ligne Facile </h5>
                                        <p class="card-text" style="font-size: 14px;"> Notre plateforme conviviale vous permet de parcourir les horaires, les tarifs et de réserver vos billets en quelques étapes simples.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/reservation/3.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Tarification Transparente  </h5>
                                        <p class="card-text" style="font-size: 14px;">Les tarifs des billets sont clairement affichés, vous permettant de comparer et de choisir l'option qui vous convient le mieux.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/reservation/4.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Billets Électroniques  </h5>
                                        <p class="card-text" style="font-size: 14px;">Fini les soucis liés à la perte de billets papier. Avec HUPE, vos billets sont électroniques, stockés en toute sécurité dans l'application.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/reservation/5.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #fdb7b9!important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">	Assistance Clientèle  </h5>
                                        <p class="card-text" style="font-size: 14px;">Notre équipe de support est disponible pour répondre à vos questions et vous fournir une assistance en cas de besoin.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Comment Réserver un Billet de Bus via HUPE  </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                1.	Téléchargez l'Application 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body">
                                                 Si vous n'avez pas encore installé notre application mobile, téléchargez-la depuis l'App Store (iOS) ou Google Play Store (Android).
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                2.	Créez un Compte 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                 Inscrivez-vous ou connectez-vous à votre compte HUPE.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                3.	Sélectionnez votre Trajet 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                Indiquez les villes de départ et d'arrivée ainsi que la date de voyage. Consultez les horaires disponibles.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingO">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseO" aria-expanded="false" aria-controls="panelsStayOpen-collapseO">
                                                4.	Choisissez votre Siège  
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseO" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingO">
                                            <div class="accordion-body">
                                                Sélectionnez le siège de votre choix, en fonction de la disponibilité.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingT">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseT" aria-expanded="false" aria-controls="panelsStayOpen-collapseT">
                                                5.	Finalisez la Réservation 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseT" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingT">
                                            <div class="accordion-body">
                                                Confirmez votre réservation en effectuant le paiement en ligne de manière sécurisée.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTh">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseTh">
                                                6.	Billet Électronique 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTh" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTh">
                                            <div class="accordion-body">
                                                Votre billet électronique sera généré et stocké dans l'application. Présentez-le au moment de l'embarquement.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThe">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThe" aria-expanded="false" aria-controls="panelsStayOpen-collapseThe">
                                                7.	Embarquez et Voyagez 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThe" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThe">
                                            <div class="accordion-body">
                                                Rendez-vous au terminal de bus à l'heure convenue, présentez votre billet électronique et profitez de votre voyage.
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Assistance et Support </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Si vous avez des questions ou rencontrez des problèmes lors du processus de réservation, n'hésitez pas à nous contacter via notre page de  <router-link to="/">support</router-link> . Nous sommes là pour vous aider.</p> 
                                    <p>La réservation de billets de bus avec HUPE est un moyen pratique de planifier votre voyage en bus. Essayez notre service de réservation de billets de bus dès aujourd'hui pour vivre une expérience de voyage en toute simplicité.</p>
                                   
                                </div>
                                
                            </div>

                            
                            <div class="row mt-4">
                                <div class="col-md-12 text-center">
                                    <p>Pour voir les compagnies offrant ces services, cliquez ici</p>
                                </div>

                                <div class="col-md-12 text-center">
                                    <p style="font-size: 20px;"><i class='bx bx-down-arrow-alt'></i></p>
                                </div>
                                 
                                <div class="col-md-12 text-center">
                                    <router-link to="/reservation">
                                        <boutton class="btn btn-primary" style="background:#219935; border-color:#219935">Réservation de Billets de Bus</boutton>
                                    </router-link>
                                   
                                </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Location de Gros Engins HUPE</h2>
                                <hr>
                                <p>Bienvenue sur la page de location de gros engins HUPE. Notre service de location de gros engins est conçu pour répondre aux besoins de tous ceux qui ont des projets de construction, de terrassement, ou d'autres travaux nécessitant des engins lourds. Découvrez ci-dessous les avantages de la location de gros engins via HUPE et comment cela fonctionne.</p>
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Pourquoi Choisir HUPE pour la Location de Gros Engins ?</h1>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/1.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #62bfc4 !important;">
                                    <h5 class="card-title text-black" style="font-size: 17px;"> Large Flotte d'Engins </h5>
                                    <p class="card-text" style="font-size: 14px;">HUPE propose une large gamme d'engins, du bulldozer à la grue, pour répondre à tous les besoins de votre projet.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/2.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #f9f9f9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Options de Durée de Location  </h5>
                                        <p class="card-text" style="font-size: 14px;">Vous pouvez louer un engin pour quelques heures, une journée, une semaine ou plus, offrant une grande flexibilité.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/3.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Tarification Transparente  </h5>
                                        <p class="card-text" style="font-size: 14px;">: Notre tarification est transparente et compétitive. Vous saurez exactement ce que vous paierez dès le départ, sans frais cachés.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/4.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Réservation Facile   </h5>
                                        <p class="card-text" style="font-size: 14px;">La réservation d'un engin est simple et rapide. Vous pouvez le faire en quelques étapes via notre application mobile ou notre site web.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/location/5.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #fdb7b9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Assurance et Entretien  </h5>
                                        <p class="card-text" style="font-size: 14px;">Tous nos engins sont assurés, entretenus et inspectés régulièrement pour garantir leur bon fonctionnement.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Comment Réserver un Billet de Bus via HUPE  </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                1.	Téléchargez l'Application 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body">
                                                 Si vous n'avez pas encore installé notre application mobile, téléchargez-la depuis l'App Store (iOS) ou Google Play Store (Android).
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                2.	Créez un Compte 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                 Inscrivez-vous ou connectez-vous à votre compte HUPE.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                3. Sélectionnez l'Engin 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                Parcourez notre gamme d'engins disponibles, consultez les détails et les spécifications, puis choisissez celui qui convient à votre projet.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingO">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseO" aria-expanded="false" aria-controls="panelsStayOpen-collapseO">
                                                4.	Choisissez la Durée   
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseO" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingO">
                                            <div class="accordion-body">
                                                Indiquez la durée de location souhaitée, en précisant le début et la fin de la location.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingT">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseT" aria-expanded="false" aria-controls="panelsStayOpen-collapseT">
                                                5.	Finalisez la Réservation 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseT" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingT">
                                            <div class="accordion-body">
                                                Confirmez votre réservation en effectuant le paiement en ligne de manière sécurisée.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTh">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseTh">
                                                6.	Livraison et Mise à Disposition 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTh" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTh">
                                                <div class="accordion-body">
                                                    L'engin sera livré sur le site de votre projet à l'heure convenue, prêt à être utilisé.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThe">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThe" aria-expanded="false" aria-controls="panelsStayOpen-collapseThe">
                                                7. Utilisation de l'Engin 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThe" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThe">
                                            <div class="accordion-body">
                                                L'engin est à vous pour la durée de votre location. Utilisez-le en toute sécurité pour mener à bien votre projet.
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Assistance et Support </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Si vous avez des questions ou rencontrez des problèmes lors du processus de location, n'hésitez pas à nous contacter via notre page de   <router-link to="/">support</router-link> . Nous sommes là pour vous aider.</p> 
                                    <p>La location de gros engins avec HUPE est un moyen pratique de garantir que vos projets de construction ou de terrassement se déroulent en toute fluidité. Essayez notre service de location de gros engins dès aujourd'hui pour vivre une expérience de location sans tracas.</p>
                                   
                                </div>
                                
                            </div>

                            
                            <div class="row mt-4">
                                <div class="col-md-12 text-center">
                                    <p>Pour voir les compagnies offrant ces services, cliquez ici</p>
                                </div>

                                <div class="col-md-12 text-center">
                                    <p style="font-size: 20px;"><i class='bx bx-down-arrow-alt'></i></p>
                                </div>
                                 
                                <div class="col-md-12 text-center">
                                    <router-link to="/location_gros_engin">
                                        <boutton class="btn btn-primary" style="background:#219935; border-color:#219935">Location de Gros Engins</boutton>
                                    </router-link>
                                   
                                </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0"> 
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Vente de Véhicules HUPE  </h2>
                                <hr>
                                <p>Bienvenue sur la page de vente de véhicules HUPE. Notre service de vente de véhicules est conçu pour offrir aux acheteurs une expérience transparente et pratique lors de l'acquisition d'un nouveau véhicule. Découvrez ci-dessous les avantages de la vente de véhicules via HUPE et comment cela fonctionne.</p>
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Pourquoi Choisir HUPE pour la Vente de Véhicules ?</h1>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/service/1.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #62bfc4 !important;">
                                    <h5 class="card-title  text-black" style="font-size: 17px;"> Sélection de Véhicules de Qualité  </h5>
                                    <p class="card-text" style="font-size: 14px;">HUPE propose une sélection de véhicules de qualité, y compris des voitures neuves, des véhicules d'occasion certifiés et des modèles populaires.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/service/2.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #f9f9f9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Tarification Transparente  </h5>
                                        <p class="card-text" style="font-size: 14px;"> Nos véhicules sont proposés à des prix transparents et compétitifs, et nous fournissons des informations détaillées sur chaque véhicule.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/service/3.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8  !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Processus d'Achat Facile </h5>
                                        <p class="card-text" style="font-size: 14px;">: L'ensemble du processus d'achat, de la recherche du véhicule à la signature du contrat, peut être effectué en ligne via notre application ou notre site web.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/service/4.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #bbded8 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Inspection et Historique </h5>
                                        <p class="card-text" style="font-size: 14px;">Chaque véhicule est inspecté et dispose d'un historique complet, vous permettant de prendre une décision éclairée.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                    <a href="" class="mt-4">
                                        <img src="/assets/img/service/5.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style="background: #fdb7b9 !important;">
                                        <h5 class="card-title text-black" style="font-size: 17px;">Financement Facilité  </h5>
                                        <p class="card-text" style="font-size: 14px;">Si vous avez besoin de financement pour votre achat, HUPE propose des options de financement flexibles et abordables.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Comment Acheter un Véhicule via HUPE   </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                1.	Téléchargez l'Application 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body">
                                                 Si vous n'avez pas encore installé notre application mobile, téléchargez-la depuis l'App Store (iOS) ou Google Play Store (Android).
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                2.	Créez un Compte 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                 Inscrivez-vous ou connectez-vous à votre compte HUPE.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                3. Parcourez les Véhicules 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                Parcourez notre gamme de véhicules disponibles, consultez les détails, les spécifications et les photos.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingO">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseO" aria-expanded="false" aria-controls="panelsStayOpen-collapseO">
                                                4.	Réservez un Essai Routier (si nécessaire) 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseO" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingO">
                                            <div class="accordion-body">
                                                Si vous souhaitez essayer le véhicule, vous pouvez réserver un essai routier à un moment qui vous convient.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingT">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseT" aria-expanded="false" aria-controls="panelsStayOpen-collapseT">
                                                5. Finalisez l'Achat 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseT" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingT">
                                            <div class="accordion-body">
                                                Une fois que vous avez trouvé le véhicule qui vous convient, vous pouvez finaliser l'achat en effectuant le paiement en ligne de manière sécurisée.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTh">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseTh">
                                                6.	Livraison du Véhicule 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTh" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTh">
                                            <div class="accordion-body">
                                                Le véhicule sera livré à l'endroit que vous spécifiez, prêt à être utilisé.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThe">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThe" aria-expanded="false" aria-controls="panelsStayOpen-collapseThe">
                                                7.	Documents et Contrat 
                                            </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThe" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThe">
                                            <div class="accordion-body">
                                                Les documents et le contrat de vente seront fournis pour que vous puissiez officialiser votre achat.
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -80px;">
                        <div class="container">
                            <div class="row mb-5">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Assistance et Support </h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Si vous avez des questions ou rencontrez des problèmes lors du processus d'achat, n'hésitez pas à nous contacter via notre page de  <router-link to="/">support</router-link> . Nous sommes là pour vous aider.</p> 
                                    <p>L'achat de véhicules avec HUPE est un moyen pratique de trouver le véhicule idéal pour répondre à vos besoins de mobilité. Essayez notre service de vente de véhicules dès aujourd'hui pour vivre une expérience d'achat de véhicules en toute simplicité.</p>
                                   
                                </div>
                                
                            </div>

                            <div class="row">
                                <div class="col-md-6"></div>
                                <div class="col-md-6 text-end">
                                    <router-link to="/location_gros_engin">
                                        <boutton class="btn btn-primary" style="background:#219935; border-color:#219935">Voir les véhicule disponibles en vente</boutton>
                                    </router-link>
                                   
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-12 text-center">
                                    <p>Pour voir les compagnies offrant ces services, cliquez ici</p>
                                </div>

                                <div class="col-md-12 text-center">
                                    <p style="font-size: 20px;"><i class='bx bx-down-arrow-alt'></i></p>
                                </div>
                                 
                                <div class="col-md-12 text-center">
                                    <router-link to="/location_gros_engin">
                                        <boutton class="btn btn-primary" style="background:#219935; border-color:#219935">Véhicule disponibles en vente</boutton>
                                    </router-link>
                                   
                                </div>
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

  </main>
    <!-- End #main -->
    
</template>
<style scoped>
#services_client_btn{
    background: white;
    border-color: #d6d6d6;
    color: #219935;
    height: 45px
}

.accordion {
    --bs-accordion-color: var(--bs-body-color);
    --bs-accordion-bg: var(--bs-body-bg);
    --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
    --bs-accordion-border-color: var(--bs-border-color);
    --bs-accordion-border-width: var(--bs-border-width);
    --bs-accordion-border-radius: var(--bs-border-radius);
    --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
    --bs-accordion-btn-padding-x: 1.25rem;
    --bs-accordion-btn-padding-y: 1rem;
    --bs-accordion-btn-color: var(--bs-body-color);
    --bs-accordion-btn-bg: var(--bs-accordion-bg);
    --bs-accordion-btn-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
    --bs-accordion-btn-icon-width: 1.25rem;
    --bs-accordion-btn-icon-transform: rotate(-180deg);
    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
    --bs-accordion-btn-focus-border-color: #86b7fe;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    --bs-accordion-body-padding-x: 1.25rem;
    --bs-accordion-body-padding-y: 1rem;
    --bs-accordion-active-color: #ffffff;
    --bs-accordion-active-bg: #219935;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: white;
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
    width: 255px !important;
}

.accordion-button:not(.collapsed) {
    background-color: var(--bs-accordion-active-bg);
    box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
    color: white !important;
}

.nav-tabs .nav-link {
    border: none !important;
}

/* #myTab {
    z-index: 1030;
    margin-top: 62px;
} */

</style>