<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  

  <main id="main" style="background: white;">
    <section id="features" class="features">
     
      <div class="container">
        <div class="row" style="margin-top: -20px;">
            <div class="col-md-3" style="border-right: 1px solid; border-color:#EAEAEA">
                <ul class="nav nav-tabs fixe" id="myTab" role="tablist" style="border: none; width: 25%; ">
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <h2 style="font-size: 24px;">Services clients</h2>
                        </div>
                        <div class="col-md-12 mb-2 text-start">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active  text-start w-25" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" style="width: 245px !important;"  aria-selected="true"> <i class="bx bx-support"></i> Support</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link  text-start w-25" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" style="width: 245px !important;"  aria-selected="false"> <i class="bx bx-help-circle"></i> Aide</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start w-25" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" style="width: 245px !important;"  aria-selected="false"><i class="bx bx-envelope"></i> Contact</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start w-25" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" style="width: 245px !important;" aria-selected="false"><i class="bx bx-globe"></i> Comdition de partenariat</button>
                            </li>
                        </div>
                    </div>
 
                </ul>
            </div>
            <div class="col-md-9 mt-5" style=" padding: 20px;">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Support HUPE</h2>
                                <hr>
                                <p>Bienvenue sur la page de support de HUPE. Nous sommes là pour vous aider à tirer le meilleur parti de notre application. Trouvez ci-dessous les différentes options pour obtenir de l'assistance et des réponses à vos questions. </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <div class="col">
                                        <div class="card h-75" style=" border-radius: 15px !important; background: #EAEAEA !important;">
                                        <img src="/public/assets/img/aide_.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                        <div class="card-body">
                                            <h5 class="card-title">Centre d'Aide</h5>
                                            <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. Vous y trouverez des réponses à de nombreuses questions fréquentes, des guides détaillés, des tutoriels vidéo et bien plus encore. </p>
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
                                        <div class="card h-75" style="   border-radius: 15px !important;    background: #EAEAEA !important;">
                                        <img src="/public/assets/img/messagerie-interne.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                        <div class="card-body">
                                            <h5 class="card-title">Messagerie interne </h5>
                                            <p class="card-text">La messagerie interne pour le support HUPE est une fonctionnalité qui facilite la communication directe entre les utilisateurs de l'application et notre équipe de support client. </p>
                                            <div class="row">
                                                <div class="col-md-12 text-center">
                                                    
                                                    <!-- Button trigger modal -->
                                                    <button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#exampleModal" style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">
                                                        Démarrer
                                                    </button>

                                                    <!-- Modal -->
                                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content" style="background: linear-gradient(rgb(33, 153, 53) 23.49%, rgb(255 255 255) 48.54%); width: 88% !important;">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel"> <img
                                                                src="/public/assets/img/avatars/1.png"
                                                                alt
                                                                class="w-px-40 h-auto rounded-circle"
                                                                style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                                                /></h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <h1 style="font-size: 22px;color: white;">Bonjour <br> comment pouvons-nous vous aider ?</h1>
                                                            </div>

                                                            <div class="col-md-12 mt-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <router-link to="/support">
                                                                            <div class="row">
                                                                                <div class="col-md-10">
                                                                                    <h5 class="card-title" style="font-size: 18px;">Conversations</h5>
                                                                                </div>
                                                                                <div class="col-md-2 text-end">
                                                                                    <h5 class="card-title" style="color:#219935"> <i class='bx bxs-message-dots'></i></h5>
                                                                                </div>
                                                                            </div>
                                                                        </router-link>
                                                                        
                                                                        <hr>
                                                                        <router-link to="/">
                                                                            <div class="row">
                                                                                <div class="col-md-10">
                                                                                    <h5 class="card-title" style="font-size: 18px;">Aide</h5>
                                                                                </div>
                                                                                <div class="col-md-2 text-end">
                                                                                    <h5 class="card-title" style="color:#219935"><i class='bx bxs-help-circle'></i></h5>
                                                                                </div>
                                                                            </div>
                                                                        </router-link>
                                                                        
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-12 mt-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-md-10">
                                                                                <h5 class="card-title" style="font-size: 18px;">Envoyer nous un message</h5>
                                                                                <p style="font-size: 16px; color: black; font-weight: 300;">Nous serons de retour en ligne demain</p>
                                                                            </div>
                                                                            <div class="col-md-2 text-end">
                                                                                <div class="btn-group dropend">
                                                                                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="background: transparent; border: none;">
                                                                                        <h5 class="card-title" style="color:#219935 ; margin-top: 17px;"> <i class='bx bxs-send' ></i></h5>
                                                                                    </button>
                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item" href="#">Pour location de véhicule</a></li>
                                                                                            <li><a class="dropdown-item" href="#">Pour reservation de ticket</a></li>
                                                                                            <li><a class="dropdown-item" href="#">Pour location de gros engin</a></li>
                                                                                            <li><a class="dropdown-item" href="#">Pour vente de véhicule</a></li>
                                                                                        </ul>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </div>
    
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-12 mt-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <div class="row mb-3">
                                                                            <div class="col-md-12">
                                                                                <h5 class="card-title" style="font-size: 18px;" >Conversations récentes</h5>
                                                                            </div>
                                                                        </div>
                                                                        <router-link to="/support" class="text-black">
                                                                            <div class="row">
                                                                                <div class="col-2">
                                                                                        <img
                                                                                        src="/public/assets/img/avatars/1.png"
                                                                                        alt
                                                                                        class="w-px-40 h-auto rounded-circle"
                                                                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                                                                        />
                                                                                    </div>
                                                                                    <div class="col-8">
                                                                                        <h6 style="font-size: 13px;">loren ipsun dalor</h6>
                                                                                <p style="font-size: 13px;">loren ippsun dalor sit amet    </p>
                                                                                    </div>
                                                                                <div class="col-2 text-end">
                                                                                <h5 class="card-title" style="color:#219935"> <i class='bx bx-chevron-right'></i> </h5>
                                                                                </div>
                                                                        </div>
                                                                        </router-link>
                                                                        <hr>
                                                                        <router-link to="/support" class="text-black">
                                                                            <div class="row">
                                                                                <div class="col-2">
                                                                                        <img
                                                                                        src="/public/assets/img/avatars/1.png"
                                                                                        alt
                                                                                        class="w-px-40 h-auto rounded-circle"
                                                                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                                                                        />
                                                                                    </div>
                                                                                    <div class="col-8">
                                                                                        <h6 style="font-size: 13px;">loren ipsun dalor</h6>
                                                                                <p style="font-size: 13px;">loren ippsun dalor sit amet    </p>
                                                                                    </div>
                                                                                <div class="col-2 text-end">
                                                                                <h5 class="card-title" style="color:#219935"> <i class='bx bx-chevron-right'></i> </h5>
                                                                                </div>
                                                                        </div>
                                                                        </router-link>
                                                                        <hr>

                                                                        <router-link to="/support" class="text-black">
                                                                            <div class="row">
                                                                                <div class="col-2">
                                                                                        <img
                                                                                        src="/public/assets/img/avatars/1.png"
                                                                                        alt
                                                                                        class="w-px-40 h-auto rounded-circle"
                                                                                        style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
                                                                                        />
                                                                                    </div>
                                                                                    <div class="col-8">
                                                                                        <h6 style="font-size: 13px;">loren ipsun dalor</h6>
                                                                                <p style="font-size: 13px;">loren ippsun dalor sit amet    </p>
                                                                                    </div>
                                                                                <div class="col-2 text-end">
                                                                                <h5 class="card-title" style="color:#219935"> <i class='bx bx-chevron-right'></i> </h5>
                                                                                </div>
                                                                        </div>
                                                                        </router-link>
                                                                                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-2 g-4 " style="margin-top: -129px;">
                                
                                    <div class="col">
                                        <div class="card h-100" style="border-radius: 15px !important; background: #EAEAEA !important;">
                                        <img src="/public/assets/img/chat-direct.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
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
                                    <div class="col">
                                        <div class="card h-100" style="  border-radius: 15px !important;  background: #EAEAEA !important;">
                                        <img src="/public/assets/img/email-assistance.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                        <div class="card-body">
                                            <h5 class="card-title">Assistance par E-mail</h5>
                                            <p class="card-text">Consultez notre centre d'aide pour accéder à une multitude de ressources utiles. </p>
                                            <div class="row">
                                                <div class="col-md-12 text-center">
                                                    
                                                    <button type="button" class="btn btn-primary w-50" style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;" data-bs-toggle="modal" data-bs-target="#exampleModal25" data-bs-whatever="@mdo">Démarrer</button>
                                                    

                                                    <div class="modal fade" id="exampleModal25" tabindex="-1" aria-labelledby="exampleModalLabel25" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header text-white" style="background-color:#219935">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel25" style="font-size: 16px !important;">New message to support@hupe-africa.com</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                            <form>
                                                            <div class="mb-3">
                                                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                                <input type="text" class="form-control" id="recipient-name" placeholder="support@hupe-africa.com">
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="message-text" class="col-form-label">Email</label>
                                                                <input type="email" class="form-control" id="recipient-name">
                                                            </div>
                                                            </form>
                                                        </div>
                                                        <div class="modal-footer text-center">
                                                            <button type="button" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Envoyer</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4" style="margin-top: 40px !important;">
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
                                    <div class="col-md-12" style="padding:18px">
                                        <p style="font-size: 15px;">Si vous avez besoin d'une assistance téléphonique, vous pouvez nous appeler au +225 07 05 87 51 94 Nos agents sont disponibles pendant nos heures d'ouverture de 8h00 à 20h00. Nous sommes là pour répondre à vos questions et résoudre vos problèmes.</p>
                                    </div>
                                </div>
                            
                                <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                                    <div class="col">
                                        <div class="card h-75" style=" border-radius: 15px !important; background: #EAEAEA !important;">
                                        <img src="/public/assets/img/signal-problem.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                        <div class="card-body">
                                            <h5 class="card-title">Signalement de Problèmes</h5>
                                            <p class="card-text">Si vous rencontrez un problème technique ou si vous avez des suggestions pour améliorer notre application, veuillez utiliser notre formulaire de signalement de problèmes. Cela nous permettra de recueillir des informations détaillées pour résoudre le problème plus efficacement. </p>
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
                                    <div class="card h-75" style="   border-radius: 15px !important;  background: #EAEAEA !important;">
                                    <img src="/public/assets/img/messagerie.png" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance pour l'Accessibilité </h5>
                                        <p class="card-text">Nous sommes déterminés à rendre notre application accessible à tous. Si vous avez des besoins spéciaux en matière d'accessibilité, veuillez nous contacter à support@hupe-africa.com Notre équipe est là pour répondre à toutes vos questions.</p>
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
                                <div class="row mt-4" style="background: white; border-radius: 10px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn" style="border:none !important">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Twitter
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class="bx bxl-twitter"></i>   <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <hr>
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn" style="border: none">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Facebook 
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class="bx bxl-facebook"></i>    <i class='bx bx-chevron-right'></i>
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
                                <hr>
                                <p>Le Centre d'Aide HUPE est votre guichet unique pour toutes les informations et les ressources dont vous avez besoin pour utiliser pleinement notre application. Notre objectif est de vous offrir une expérience utilisateur fluide et satisfaisante, et le Centre d'Aide est conçu pour y contribuer.</p>
                                <p>Ce que vous trouverez dans le Centre d'Aide </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card h-75" style="  border-radius: 15px !important;  background: #EAEAEA !important;">
                                    <img src="/public/assets/img/faq.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Foire Aux Questions (FAQ)</h5>
                                        <p class="card-text">Consultez notre FAQ pour trouver des réponses aux questions les plus courantes sur l'utilisation de l'application, les fonctionnalités, les paiements, la sécurité et bien d'autres sujets.</p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/informations">
                                                    <button class="btn btn-primary w-50 " style=" border: 1px solid; border-radius: 30px; border-color: #d6d6d6; background: white; color: #219935;">Démarrer</button>
                                                </router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-75" style="  border-radius: 15px !important; background: #EAEAEA !important;">
                                    <img src="/public/assets/img/guide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
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
                                    <div class="card h-75" style="  border-radius: 15px !important; background: #EAEAEA !important;">
                                    <img src="/public/assets/img/video.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
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
                                    <div class="card h-75" style=" background: #EAEAEA !important; border-radius: 15px !important;">
                                    <img src="/public/assets/img/blog1.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Articles Informatifs</h5>
                                        <p class="card-text">Trouvez des articles informatifs sur divers sujets liés à la mobilité, à l'industrie automobile, aux voyages en bus, aux conseils de sécurité et plus encore. Nous vous tenons informés sur les dernières tendances et les informations utiles. </p>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <router-link to="/informations">
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
                                    <div class="card h-75" style="background: #EAEAEA !important; border-radius: 15px !important;">
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
                                    <div class="card h-75" style=" background: #EAEAEA !important; border-radius: 15px !important;">
                                    <img src="/public/assets/img/mise.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
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
                                    <div class="card h-75" style="  background: #EAEAEA !important; border-radius: 15px !important;">
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
                                    <div class="card h-75" style="  background: #EAEAEA !important; border-radius: 15px !important;">
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
                                <hr>
                                <p>La page de contact HUPE est votre point de contact direct avec notre équipe de support client. Nous sommes là pour répondre à toutes vos questions, résoudre vos problèmes et vous offrir une assistance personnalisée.</p>
                                <p>Comment Nous Contacter ?  </p>
                            </div>
                            <div class="col-md-12 mt-4" style="font-size: 13px;">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card h-75" style="background: #EAEAEA !important; border-radius: 15px !important;">
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
                                    <div class="card h-75" style=" background: #EAEAEA !important; border-radius: 15px !important;">
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
                                 
                                <div class="row row-cols-1 row-cols-md-2 g-4 mt-4" style="margin-top: -128px !important;">
                                <div class="col">
                                    <div class="card h-75" style="background: #EAEAEA !important; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Assistance pour l'Accessibilité</h5>
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
                                <div class="col">
                                    <div class="card h-75" style="    background: #EAEAEA !important; border-radius: 15px !important;">
                                    <img src="/public/assets/img/aide.jpg" class="img-fluid" alt="..." style="    height: 50%; object-fit: cover;border-radius: 15px 15px 0px 0px !important;">
                                    <div class="card-body">
                                        <h5 class="card-title">Numéro de Téléphone</h5>
                                        <p class="card-text">Si vous préférez parler à un membre de notre équipe, vous pouvez nous appeler au [numéro de téléphone de contact]. Nos agents sont disponibles pendant nos heures d'ouverture [heures d'ouverture du support] pour répondre à vos questions et vous aider.</p>
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

                                        <form class="row g-3 needs-validation mt-4" novalidate style=" border: 1px solid #EAEAEA ; border-radius: 10px; padding: 15px;">
                                        <div class="col-md-12">
                                            <label for="validationCustom01" class="form-label">Nom</label>
                                            <input type="text" class="form-control" id="validationCustom01"  required>
                                            <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Adresse email</label>
                                            <input type="email" class="form-control" id="validationCustom02"  required>
                                            <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for="validationCustom02" class="form-label">Objet</label>
                                            <input type="text" class="form-control" id="validationCustom02" required>
                                            <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                           <label for="validationCustom02" class="form-label">Message</label>
                                           <textarea type="text" class="form-control" id="validationCustom02"></textarea> 
                                            <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-12">
                                            <button class="btn btn-primary" style=" background: #219935; border-color: #219935;" type="submit">Envoyer</button>
                                        </div>
                                        </form>


                                    </div>
                                </div>
                                <div class="row mt-4" style="background: white; border-radius: 10px;">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn" style="border:none !important">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Twitter
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class="bx bxl-twitter"></i>   <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <hr>
                                    <div class="col-md-12">
                                        <button class="btn btn-primary w-100" id="services_client_btn" style="border: none">
                                            <div class="row">
                                                <div class="col-md-6 text-start">
                                                    Facebook 
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <i class="bx bxl-facebook"></i>    <i class='bx bx-chevron-right'></i>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0" style="    padding: 30px;
    margin-top: -30px;"> 
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Condition de partenariat </h2>
                                <hr>

                            </div>
                            <div class="col-md-12" style="font-size: 15px;">
                                

                                <P>L'avenir de la mobilité commence ici ! Découvrez comment une collaboration HUPE peut vous ouvrir de nouvelles opportunités dans le secteur de la location de véhicules, de gros engins, de la réservation de tickets de bus et de la vente de véhicules.
                                </P>
                                
                                <h2 style="font-size: 16px; font-weight:700;">Qualité des Services</h2>
                                <p>Les partenaires s'engagent à fournir des services de haute qualité en conformité avec les normes de l'industrie. Les véhicules et engins proposés à la location doivent être bien entretenus, propres et sûrs. Les chauffeurs et les opérateurs de gros engins doivent être formés, licenciés et respecter les règles de sécurité.</p>
                                
                                 <!-- <p> Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web.</p> -->

                                 <h2 style="font-size: 16px; font-weight:700;">Communication</h2>
                                <p>Les partenaires doivent maintenir une communication claire et réactive avec l'application « Hupe » et les utilisateurs. Les demandes de réservation, de location et les questions des utilisateurs doivent être traitées de manière professionnelle et dans les délais.</p>
                                
                                 <h2 style="font-size: 16px; font-weight:700;">Intégration Technique</h2>
                                <p>Les partenaires doivent respecter les normes techniques et les exigences d'intégration fournies par « Hupe ». Cela garantit une expérience utilisateur homogène.</p>
                                 
                                <p>Vous ne pouvez pas utiliser le contenu de l'Application d'une manière qui enfreint les droits d'auteur d'autres utilisateurs ou de tiers.</p>

                                
                                <h2 style="font-size: 16px; font-weight:700;">Respect de la Vie Privée</h2>
                                <p>Les partenaires s'engagent à respecter les règlements en matière de protection des données et à traiter les informations des utilisateurs conformément à la politique de confidentialité de « Hupe ».</p>


                                <h2 style="font-size: 16px; font-weight:700;">Éthique</h2>
                                <p>Les partenaires doivent respecter les normes éthiques et légales les plus élevées. Aucune forme de discrimination, de harcèlement ou de comportement illégal ne sera tolérée.</p>

                                 
                                <h2 style="font-size: 16px; font-weight:700;">Résolution de Conflits</h2>
                                <p>En cas de litige entre « Hupe » et le partenaire, les deux parties s'engagent à encourager la médiation et la résolution amiable des conflits.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Promotion et Marketing</h2>
                                <p>Les partenaires s'engagent à collaborer pour promouvoir les services de manière mutuellement bénéfique, conformément aux accords de partenariat.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Durée et Résiliation</h2>
                                <p>La durée de partenariat sera spécifiée dans l'accord. Les deux parties ont le droit de mettre fin au partenariat conformément aux modalités convenues en cas de non-respect répété des conditions de partenariat.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Autres Dispositions</h2>
                                <p>Toutes autres dispositions spécifiques à votre partenariat, telles que les engagements de marketing, les exclusivités territoriales, les exigences de rapports, etc., seront définies dans l'accord de partenariat.</p>

                                <p>Ces conditions de partenariat servent de base pour nos relations commerciales et sont sujettes à des négociations et à un accord mutuel. Elles sont conçues pour garantir une collaboration fructueuse et transparente entre « Hupe » et ses partenaires.</p>
                                

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
.nav-tabs .nav-link {
    border: none !important;
}
 
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #fff;
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
}

#myTab {
    z-index: 1030;
    margin-top: 62px;
}

#search {
    width: 300px;
    height: 41px;
    /* border-radius: 30px; */
    font-size: 14px;
    /* background-color: #219935; */
    /* border-color: white; */
    color: white !important;
}

.dropend .dropdown-toggle::after {
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: 0;
    border-bottom: .3em solid transparent;
    border-left: .3em solid;
    display: none;
}

</style>
