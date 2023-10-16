<script>
</script>

<template>
  

  <main id="main" style="background: rgb(213, 248, 229);">
    <section id="features" class="features">
      <div class="container">
        <div class="row">
            <div class="col-md-4" style="border-right: 1px solid;">
                <ul class="nav nav-tabs fixe" id="myTab" role="tablist" style="border: none; ">
                    <div class="row ">
                        
                        <div class="col-md-12 mb-3">
                            <img src="/assets/img/favicon.png" alt="" class="img-fluid"
                            style="margin-top: -6px; width: 30px;"> 
                        </div>
                        <div class="col-md-12 mb-4">
                            <h2 style="font-size: 24px;">Services à la clientèle</h2>
                        </div>
                        <div class="col-md-12 mb-2 text-start">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active  text-start" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Support</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link  text-start" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Aide</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Comdition de partenariat</button>
                            </li>
                        </div>
                    </div>
 
                </ul>
            </div>
            <div class="col-md-8" style=" padding: 30px;">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Support HUPE</h2>
                                <p>Bienvenue sur la page de support de HUPE. Nous sommes là pour vous aider à tirer le meilleur parti de notre application. Trouvez ci-dessous les différentes options pour obtenir de l'assistance et des réponses à vos questions. </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Centre d'Aide</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Messagerie interne </h5>
                                        <p class="card-text">La messagerie interne pour le support HUPE est une fonctionnalité qui facilite la communication directe entre les utilisateurs de l'application et notre équipe de support client. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Chat en Direct</h5>
                                        <p class="card-text">Pour une assistance immédiate, utilisez notre service de chat en direct. Notre équipe de support est là pour répondre à vos questions en temps réel. Cliquez sur l'icône du chat en bas de l'écran pour démarrer une conversation </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance par E-mail</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Numéro de Téléphone
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Centre d'Aide</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Messagerie interne </h5>
                                        <p class="card-text">La messagerie interne pour le support HUPE est une fonctionnalité qui facilite la communication directe entre les utilisateurs de l'application et notre équipe de support client. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Chat en Direct</h5>
                                        <p class="card-text">Pour une assistance immédiate, utilisez notre service de chat en direct. Notre équipe de support est là pour répondre à vos questions en temps réel. Cliquez sur l'icône du chat en bas de l'écran pour démarrer une conversation </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance par E-mail</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Mentions légales
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Centre d'Aide HUPE</h2>
                                <p>Le Centre d'Aide HUPE est votre guichet unique pour toutes les informations et les ressources dont vous avez besoin pour utiliser pleinement notre application. Notre objectif est de vous offrir une expérience utilisateur fluide et satisfaisante, et le Centre d'Aide est conçu pour y contribuer.</p>
                                <p>Ce que vous trouverez dans le Centre d'Aide </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Foire Aux Questions (FAQ)</h5>
                                        <p class="card-text">Consultez notre FAQ pour trouver des réponses aux questions les plus courantes sur l'utilisation de l'application, les fonctionnalités, les paiements, la sécurité et bien d'autres sujets.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Guides d'Utilisation </h5>
                                        <p class="card-text">Nous avons créé des guides d'utilisation détaillés qui vous expliquent étape par étape comment utiliser chaque aspect de l'application. Que vous souhaitiez réserver un véhicule, acheter un billet de bus ou utiliser notre service de location de gros engins, vous trouverez un guide correspondant.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title"> Tutoriels Vidéo</h5>
                                        <p class="card-text"> Certaines personnes préfèrent apprendre en visualisant. Notre collection de tutoriels vidéo vous guide à travers les processus les plus importants de l'application, en vous montrant exactement comment effectuer différentes tâches.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Articles Informatifs</h5>
                                        <p class="card-text">Trouvez des articles informatifs sur divers sujets liés à la mobilité, à l'industrie automobile, aux voyages en bus, aux conseils de sécurité et plus encore. Nous vous tenons informés sur les dernières tendances et les informations utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Numéro de Téléphone
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Personnalisation</h5>
                                        <p class="card-text">Certains utilisateurs ont des besoins spécifiques, c'est pourquoi nous offrons des options de personnalisation, notamment la possibilité d'ajuster la taille du texte, les couleurs de l'interface et le contraste.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Mises à Jour et Nouveautés</h5>
                                        <p class="card-text">Restez à jour avec les dernières améliorations et les nouvelles fonctionnalités de l'application. Nous publions régulièrement des informations sur les mises à jour pour que vous soyez toujours informé.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Ressources d'Accessibilité</h5>
                                        <p class="card-text">Si vous avez des besoins spéciaux en matière d'accessibilité, consultez notre section dédiée aux ressources d'accessibilité pour obtenir des informations sur la manière d'utiliser l'application de manière plus conviviale.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance par E-mail</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Mentions légales
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    <div class="col-md-12 mt-4">
                                        <p>Le Centre d'Aide est conçu pour être convivial et facile à naviguer, vous permettant de trouver rapidement les informations dont vous avez besoin. Que vous soyez un nouvel utilisateur cherchant à apprendre les bases ou un utilisateur expérimenté à la recherche de réponses spécifiques, le Centre d'Aide est là pour vous.</p>

                                        N'hésitez pas à explorer les ressources disponibles et à nous contacter si vous avez besoin d'une assistance supplémentaire. Nous sommes là pour vous aider à profiter pleinement de l'application HUPE.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3"> Page de Contact HUPE</h2>
                                <p>La page de contact HUPE est votre point de contact direct avec notre équipe de support client. Nous sommes là pour répondre à toutes vos questions, résoudre vos problèmes et vous offrir une assistance personnalisée.</p>
                                <p>Comment Nous Contacter ?  </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance par E-mail</h5>
                                        <p class="card-text">Vous pouvez nous contacter par e-mail à support@hupe-africa.com. Envoyez-nous un e-mail à tout moment, et notre équipe de support client vous répondra dans les plus brefs délais.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Messagerie Interne </h5>
                                        <p class="card-text">Si vous êtes un utilisateur de notre application, vous pouvez utiliser la messagerie interne pour communiquer directement avec notre équipe de support. C'est un moyen rapide d'obtenir de l'assistance en temps réel.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <!-- <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title"> Assistance pour l'Accessibilité</h5>
                                        <p class="card-text">Si vous avez des besoins spéciaux en matière d'accessibilité, veuillez nous contacter à support@hupe-africa.com Notre équipe est là pour répondre à toutes vos questions liées à l'accessibilité.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Articles Informatifs</h5>
                                        <p class="card-text">Trouvez des articles informatifs sur divers sujets liés à la mobilité, à l'industrie automobile, aux voyages en bus, aux conseils de sécurité et plus encore. Nous vous tenons informés sur les dernières tendances et les informations utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div> -->
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Numéro de Téléphone
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Personnalisation</h5>
                                        <p class="card-text">Certains utilisateurs ont des besoins spécifiques, c'est pourquoi nous offrons des options de personnalisation, notamment la possibilité d'ajuster la taille du texte, les couleurs de l'interface et le contraste.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Mises à Jour et Nouveautés</h5>
                                        <p class="card-text">Restez à jour avec les dernières améliorations et les nouvelles fonctionnalités de l'application. Nous publions régulièrement des informations sur les mises à jour pour que vous soyez toujours informé.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Ressources d'Accessibilité</h5>
                                        <p class="card-text">Si vous avez des besoins spéciaux en matière d'accessibilité, consultez notre section dédiée aux ressources d'accessibilité pour obtenir des informations sur la manière d'utiliser l'application de manière plus conviviale.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col" style=" margin-top: -90px;">
                                    <div class="card h-75" style=" border: none; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance par E-mail</h5>
                                        <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row" style="margin-top: -90px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Formulaire de Contact HUPE
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    <div class="col-md-12 mt-4">
                                        <p>Remplissez le formulaire ci-dessous pour nous contacter. Nous vous répondrons dans les plus brefs délais.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0"> 
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Politique de Droit d'Auteur de HUPE</h2>

                            </div>
                            <div class="col-md-12" style="font-size: 15px;">
                                <p>Dernière mise à jour : 12 octobre 2023 </p>

                                <P>Bienvenue sur l'Application HUPE. Chez HUPE, nous respectons les droits d'auteur et nous attendons de nos utilisateurs qu'ils en fassent de même. Cette Politique de Droit d'Auteur explique les règles et les obligations liées aux droits d'auteur pour les utilisateurs de notre Application.
                                </P>
                                <p> Cette politique de droit d'auteur aide à sensibiliser les utilisateurs à leurs obligations en matière de droits d'auteur et à définir les sanctions en cas de violation. Elle contribue à protéger les droits de propriété intellectuelle de HUPE et de ses utilisateurs. </p>
                                
                                <h2 style="font-size: 16px; font-weight:700;">Contenu Protégé par les Droits d'Auteur</h2>
                                <p>Tous les contenus présents sur l'Application, y compris les textes, les images, les vidéos, les logiciels, les graphiques et les autres éléments, sont protégés par les lois sur les droits d'auteur. Ils appartiennent à HUPE ou à des tiers ayant accordé à HUPE les droits nécessaires pour les utiliser.</p>
                                
                                 <!-- <p> Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web.</p> -->

                                 <h2 style="font-size: 16px; font-weight:700;">Utilisation Autorisée du Contenu</h2>
                                <p>Vous pouvez utiliser le contenu de l'Application uniquement dans le cadre de l'utilisation normale de nos services. Cela inclut la visualisation, le téléchargement, la publication, le partage et la création de liens vers le contenu, conformément à nos Conditions Générales d'Utilisation.</p>
                                
                                 <h2 style="font-size: 16px; font-weight:700;">Interdictions en Matière de Droits d'Auteur</h2>
                                <p>Il est interdit de copier, de reproduire, de distribuer, de publier, de modifier, de créer des œuvres dérivées, de vendre, de transférer ou d'utiliser de quelque manière que ce soit le contenu de l'Application sans l'autorisation écrite préalable de HUPE.</p>
                                 
                                <p>Vous ne pouvez pas utiliser le contenu de l'Application d'une manière qui enfreint les droits d'auteur d'autres utilisateurs ou de tiers.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Signalement de Violation de Droit d'Auteur</h2>
                                <p>Si vous croyez qu'un contenu publié sur l'Application viole vos droits d'auteur, veuillez-nous le signaler immédiatement en nous fournissant les informations nécessaires pour vérifier la violation. Nous traiterons ces signalements conformément à la loi applicable.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Sanctions en Cas de Violation</h2>
                                <p>Les utilisateurs qui violent les droits d'auteur d'autrui ou de HUPE peuvent se voir imposer des sanctions, y compris la suppression de leur contenu, la résiliation de leur compte et des poursuites légales si nécessaire.</p>


                                <h2 style="font-size: 16px; font-weight:700;">Respect de la Propriété Intellectuelle</h2>
                                <p>HUPE respecte la propriété intellectuelle des autres et s'efforce de se conformer aux lois sur les droits d'auteur en vigueur.</p>

                                 
                                <h2 style="font-size: 16px; font-weight:700;">Contact</h2>
                                <p>Pour toute question ou réclamation concernant notre Politique de Droit d'Auteur, veuillez nous contacter à [adresse e-mail de contact].</p>

                                <h2 style="font-size: 16px; font-weight:700;">Licence d'Utilisateur</h2>
                                <p>En publiant du contenu sur l'Application, vous accordez à HUPE une licence mondiale, non exclusive, libre de redevance, transférable et sous-licenciable pour utiliser, reproduire, distribuer, adapter, afficher et créer des œuvres dérivées de ce contenu dans le but de fournir nos services.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Utilisation de Contenu Sous Licence</h2>
                                <p>Si vous publiez du contenu sur l'Application pour lequel vous détenez une licence d'utilisation, veuillez-vous assurer de respecter les termes de cette licence et de fournir toute attribution requise conformément à la licence.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Contenu Généré par les Utilisateurs</h2>
                                <p>Lorsque nous collaborons avec des partenaires ou des fournisseurs de services tiers, nous nous assurons qu'ils respectent des normes de sécurité élevées pour protéger vos données et garantir la confidentialité.</p>

                                

                                <h2 style="font-size: 16px; font-weight:700;">Loi Applicable et Juridiction</h2>
                                <p>Cette Politique de Droit d'Auteur est régie par les lois en vigueur dans [juridiction applicable]. Tout litige découlant de cette Politique de Droit d'Auteur sera soumis à la compétence exclusive des tribunaux de [juridiction compétente].</p>

                                <h2 style="font-size: 16px; font-weight:700;">Modifications de la Politique de Droit d'Auteur</h2>
                                <p>Nous nous réservons le droit de modifier cette Politique de Droit d'Auteur à tout moment. Les modifications prendront effet dès leur publication sur l'Application. Il est de votre responsabilité de consulter régulièrement cette Politique de Droit d'Auteur pour prendre connaissance des éventuelles modifications.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Date d'Entrée en Vigueur</h2>
                                <p>Cette Politique de Droit d'Auteur entre en vigueur à partir de la date de sa publication.</p>
                                <p>Ces dispositions complémentaires vous aident à définir les droits d'auteur et les obligations liées au contenu publié sur l'application. Elles couvrent également la licence accordée à HUPE pour le contenu des utilisateurs. Personnalisez cette politique en fonction de vos besoins spécifiques et de la législation en vigueur dans votre région. Il est recommandé de consulter un conseiller juridique pour vous aider à élaborer une politique de droit d'auteur appropriée pour votre application.</p>

                                 
                            </div>
                        </div>
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

</style>