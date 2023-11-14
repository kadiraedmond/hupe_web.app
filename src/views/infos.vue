<script setup>
import { onMounted } from 'vue'


onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section id="features" class="features">
      <div class="container">
        <div class="row" style="margin-top: 42px;">
            <div class="col-md-3" style="border-right: 1px solid; border-color:#EAEAEA;">
                <div class="row fixe">
                    <ul class="nav nav-tabs " id="myTab" role="tablist" style="border: none; ">
                    <div class="row " style="width:30%">
                        
                        <!-- <div class="col-md-12 mb-3">
                            <router-link to="/">
                                <h1 class="text-black">
                                  <i class="bx bx-x"></i>
                               </h1>
                            
                            </router-link>
                           
                        </div> -->
                        <div class="col-md-12 mb-4">
                            <h2 style="font-size: 24px;"> Informations </h2>
                        </div>
                        <div class="col-md-12 mb-2 text-start">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active  text-start" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style="width: 245px !important;"> <i class="bx bx-question-mark"></i> Foire aux questions </button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link  text-start" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style="width: 245px !important;"> <i class="bx bx-info-circle"></i> Qui sommes nous</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" style="width: 245px !important;"> <i class="bx bx-help-circle"></i> Comment ça marche </button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" style="width: 245px !important;"> <i class="bx bx-accessibility"></i> Accessibilité </button>
                            </li>
                        </div>

                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="blog-tab" data-bs-toggle="tab" data-bs-target="#blog-tab-pane" type="button" role="tab" aria-controls="blog-tab-pane" aria-selected="false"  style="width: 245px !important;"> <i class="bx bx-news"></i> Blog </button>
                            </li>
                        </div>
                    </div>
 
                </ul>
                </div>
                
            </div>
            <div class="col-md-9" style=" padding: 10px;">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                               
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">A propos de l’application   </h2>
                            <hr>
                                <p>Hupe est un système composé de trois applications distinctes, chacune ayant un rôle spécifique</p>
                            </div>
                            
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-6 mb-3">
                                <h1 style="font-size: 20px;">L'application pour les clients</h1>
                                <p>Cette application est destinée aux clients et leur permet de bénéficier des services offerts par Hupe. Les clients peuvent utiliser l'application pour réserver des tickets de bus, louer des voitures et des gros engins, ainsi que pour accéder à d'autres fonctionnalités pratiques. Elle offre une interface conviviale et intuitive, permettant aux utilisateurs de trouver facilement les services dont ils ont besoin.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <img src="/public/assets/img/client.jpg" alt="" class="img-fluid" style="border-radius:5px">
                            </div>
                            <div class="col-md-6 mb-3">
                                <img src="/public/assets/img/client.jpg" alt="" class="img-fluid" style="border-radius:5px">
                            </div>
                            <div class="col-md-6 mb-3">
                                <h1 style="font-size: 20px;">L'application pour les partenaires</h1>
                                <p>Cette application est spécialement conçue pour les partenaires de Hupe. Elle leur offre une plateforme dédiée pour gérer leurs offres de services, gérer les réservations, gérer leur profil et communiquer avec les clients. Les partenaires peuvent mettre à jour leurs disponibilités, gérer les tarifs, consulter les demandes de réservation et fournir un suivi de qualité pour assurer une expérience client optimale.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <h1 style="font-size: 20px;">L'application de scan</h1>
                                <p>L'application de scan est un outil essentiel pour les partenaires qui proposent des services. Elle permet aux partenaires de scanner les codes QR des réservations effectuées par les clients, facilitant ainsi le processus de vérification et de prise en charge des véhicules ou engins loués. Cette application garantit une gestion efficace et précise des réservations, offrant ainsi une expérience fluide pour les partenaires et les clients.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <img src="/public/assets/img/client.jpg" alt="" class="img-fluid" style="border-radius:5px">
                            </div>
                        </div>
                        <section id="portfolio-details" class="portfolio-details">
                            <div class="container">
                                <div class="row" style="background: #219935; color: white; border-radius: 5px;">
                                    <div class="col-md-12">
                                        <h2 style="font-size: 15px; font-weight: 600;" class="mb-3 mt-3"> Partenaires  </h2>
                                    </div>
                                </div>
                                <div class="row gy-4 mt-3">
                                    
                                    <div class="col-lg-12">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="faq_btn" style="color: #219935;">
                                                Comment puis-je devenir un partenaire de « Hupe »?
                                            </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Pour devenir partenaire de « Hupe », vous pouvez soumettre une demande en remplissant le formulaire de création de compte de partenariat sur notre site web ou via notre application « Hupe pro ». Notre équipe examinera votre demande et vous contactera pour discuter des détails.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="faq_btn" style="color: #219935;">
                                                Quels sont les avantages de devenir partenaire de « Hupe » ?
                                            </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>En tant que partenaire, vous bénéficiez d'une exposition accrue à notre base d'utilisateurs, d'opportunités de croissance de votre entreprise, d'une gestion simplifiée des réservations et de la possibilité d'offrir vos services à une audience plus large.</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="faq_btn" style="color: #219935;">
                                                Comment fonctionne le processus de réservation pour les utilisateurs de l'application ?
                                            </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Les utilisateurs peuvent réserver vos services via notre application en sélectionnant les dates, les heures et en effectuant le paiement. Vous recevrez les détails de la réservation et pourrez confirmer la disponibilité.</p>
                                            </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading4">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" id="faq_btn">
                                                    Comment sont déterminés les tarifs et les commissions pour les partenaires ?
                                                </button>
                                            </h2>
                                            <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>Les tarifs et les commissions sont établis dans un accord de partenariat personnalisé, prenant en compte divers facteurs, tels que la localisation, la saisonnalité et d'autres critères pertinents.</p>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading5">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" id="faq_btn">
                                                    Comment suis-je payé en tant que partenaire ?
                                                </button>
                                            </h2>
                                            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>En fonction du service, Nous encaissons les paiements des clients, nous prélevons des commissions et nous effectuons mensuellement ou selon une périodicité définit des reversements par virement bancaire (ou par la méthode de paiement convenue) une fois que les services ont été rendus.</p>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading6">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" id="faq_btn">
                                                    Comment puis-je signaler des problèmes ou des préoccupations en tant que partenaire ?
                                                </button>
                                            </h2>
                                            <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>En cas de problème ou de préoccupation, veuillez contacter notre équipe de support dédiée aux partenaires en utilisant les coordonnées fournies dans notre espace support. Nous sommes là pour vous aider..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading7">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse6" id="faq_btn">
                                                    Quelles sont les exigences en matière d'assurance pour les partenaires ?
                                                </button>
                                            </h2>
                                            <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>Les partenaires sont tenus de détenir une assurance responsabilité civile adaptée couvrant leurs activités liées à notre plateforme.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading8">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse6" id="faq_btn">
                                                Comment puis-je mettre fin à notre partenariat si nécessaire ?
                                            </button>
                                            </h2>
                                            <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>La procédure de résiliation est définie dans notre accord de partenariat. Vous pouvez mettre fin à notre partenariat en respectant ces modalités.</p>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading9">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse6" id="faq_btn">
                                                Comment puis-je promouvoir mes services auprès des utilisateurs de Hupe ?
                                            </button>
                                            </h2>
                                            <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Vous pouvez promouvoir vos services en utilisant notre programme de marketing conjoint, en offrant des réductions spéciales aux utilisateurs de notre application, ou en participant à des campagnes promotionnelles.</p>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading10">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10" id="faq_btn">
                                                Quelles sont les exigences de sécurité pour les partenaires proposant des services de location de véhicules ou d'engins ?
                                            </button>
                                            </h2>
                                            <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Les partenaires doivent respecter les normes de sécurité locales et internationales, s'assurer que leurs véhicules/engins sont régulièrement entretenus, et garantir la sécurité des utilisateurs pendant l'utilisation de leurs services.</p>
                                            </div>
                                            </div>
                                        </div>

                                        
                                        </div>
                                    </div>
                                </div>  
                                
                                <div class="row" style="background: #219935; color: white; border-radius: 5px;">
                                    <div class="col-md-12">
                                        <h2 style="font-size: 15px; font-weight: 600;" class="mb-3 mt-3"> Utilisateurs  </h2>
                                    </div>
                                </div>
                                <div class="row gy-4 mt-3">
                                    
                                    <div class="col-lg-12">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading1">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1" id="faq_btn" style="color: #219935;">
                                                Comment puis-je télécharger et installer l'application « hupe »?
                                            </button>
                                            </h2>
                                            <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Vous pouvez télécharger notre application gratuitement depuis l'App Store (pour les utilisateurs iOS) ou Google Play Store (pour les utilisateurs Android). Ensuite, suivez les instructions d'installation.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2" id="faq_btn" style="color: #219935;">
                                                Comment puis-je m'inscrire et créer un compte sur HUPE ?
                                            </button>
                                            </h2>
                                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Ouvrez l'application, cliquez sur "S'inscrire" et suivez les étapes pour créer un compte en fournissant les informations requises. Vous pouvez également vous connecter avec votre compte Google ou Facebook..</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" id="faq_btn" style="color: #219935;">
                                                Comment puis-je réserver un véhicule, un engin ou un ticket de bus sur « Hupe » ?
                                            </button>
                                            </h2>
                                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Pour réserver un service, sélectionnez l'option de réservation dans le menu principal. Suivez ensuite les étapes pour choisir les dates, les heures, et effectuer la réservation.</p>
                                            </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading14">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse4" id="faq_btn">
                                                    Comment puis-je annuler ou modifier ma réservation ?
                                                </button>
                                            </h2>
                                            <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>Vous pouvez annuler ou modifier votre réservation en accédant à la section "Mes Acticités" de l'application. Les détails spécifiques dépendent de la politique d'annulation de chaque partenaire.</p>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading15">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse4" id="faq_btn">
                                                    Comment puis-je effectuer un paiement sur « Hupe »?
                                                </button>
                                            </h2>
                                            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>Vous pouvez effectuer un paiement en utilisant les options de paiement disponibles, telles que les cartes de crédit, les portefeuilles électroniques, etc. Suivez les instructions de paiement lors de la réservation.</p>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading16">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16" id="faq_btn">
                                                    Quels sont les critères de sécurité pour les utilisateurs ?
                                                </button>
                                            </h2>
                                            <div id="collapse16" class="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>« Hupe » prend la sécurité au sérieux. Tous nos partenaires sont tenus de respecter des normes de sécurité strictes. Assurez-vous de suivre les règles de sécurité pendant l'utilisation des services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading17">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse17" id="faq_btn">
                                                    Comment puis-je contacter le support client en cas de problème ou de question ?
                                                </button>
                                            </h2>
                                            <div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>Vous pouvez contacter notre équipe de support client en accédant à la section "Aide ou support" de l'application. Vous y trouverez des informations pour nous contacter par chat en direct, par courriel ou par téléphone ou encore par messagerie interne.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading18">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18" id="faq_btn">
                                                Comment puis-je obtenir de l'aide en cas de litige avec un partenaire ?
                                            </button>
                                            </h2>
                                            <div id="collapse18" class="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>En cas de litige avec un partenaire, contactez notre équipe de support client. Nous vous assisterons dans la résolution du problème en fonction des termes de notre politique de résolution des litiges.</p>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading19">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19" id="faq_btn">
                                                Comment puis-je laisser un avis ou une évaluation après avoir utilisé un service sur l’application ?
                                            </button>
                                            </h2>
                                            <div id="collapse19" class="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Vous pouvez laisser un avis ou une évaluation après avoir utilisé un service en accédant à la section "Historique des réservations" de l'application. Cela aide les autres utilisateurs à prendre des décisions éclairées.</p>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="heading20">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20" id="faq_btn">
                                                Comment puis-je réinitialiser mon mot de passe en cas d'oubli ?
                                            </button>
                                            </h2>
                                            <div id="collapse20" class="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>En raison de sécurisé l’application, nous utilisons des comptes associés aux numéros de téléphone ou aux adresses email qui reçoivent à chaque connexion des code de validation.</p>
                                            </div>
                                            </div>
                                        </div>

                                        
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">À propos de HUPE </h2>
                                
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Notre Histoire</h1>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>Chez HUPE, nous croyons en la puissance de la mobilité pour transformer la vie des gens. Notre aventure a commencé avec une simple idée : faciliter l'accès aux services de transport et de mobilité pour tous. Fondée en 2021, notre entreprise a rapidement évolué pour devenir une plateforme de premier plan dans le domaine de la mobilité.</p>  
                                </div>
                                <div class="col">
                                    <img src="/public/assets/img/apropos.jpg" alt="" class="img-fluid">
                                </div>
                                 
                                
                            </div>
                         </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Notre Mission</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>Notre mission est de simplifier vos déplacements et de répondre à tous vos besoins en matière de mobilité. Chez HUPE, nous nous efforçons de vous offrir des solutions de transport pratiques et abordables, que ce soit pour la location de véhicules, la location de gros engins, la réservation de billets de bus ou l'achat de véhicules neufs et d'occasion. Nous sommes déterminés à rendre la mobilité plus accessible à tous.</p>  
                                </div>
                                <div class="col">
                                    <img src="/public/assets/img/apropos1.png" alt="" class="img-fluid w-100">
                                </div>
                                
                            </div>
                         </div>
                        </section>
                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Notre Équipe</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>Derrière chaque grande entreprise se trouve une équipe exceptionnelle. L'équipe HUPE est composée de professionnels dévoués et passionnés, dirigés par nos fondateurs. Chacun d'entre nous apporte son expertise unique pour faire de HUPE une réalité.</p>  
                                </div>
                                 
                                
                            </div>
                         </div>
                        </section>

                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Nos Services</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>Chez HUPE, nous offrons une gamme complète de services de mobilité pour répondre à vos besoins quotidiens. Que vous cherchiez à louer un véhicule pour vos déplacements personnels, à réserver un gros engin pour un projet professionnel, à acheter un véhicule neuf ou d'occasion, ou à réserver un billet de bus pour votre prochain voyage, HUPE est là pour vous simplifier la vie.</p>  
                                </div>
                                 
                                
                            </div>
                            <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                <a v-bind:href="'/location'" class="mt-4">
                                    <img src="/public/assets/img/car.png" class="img-fluid w-25" alt="...">
                                </a>
                                
                                <div class="card-body" style=" background: #219935;">
                                    <a v-bind:href="'/location'" class="mt-4" id="a">
                                    <h5 class="card-title text-white" style="font-size: 17px;">Louer un véhicule </h5>
                                    </a>
                                
                                    <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                    <a v-bind:href="'/reservation'" class="mt-4 text-black">
                                        <img src="/public/assets/img/bus.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style=" background: #219935;">
                                    <a v-bind:href="'/reservation'" class="mt-4" id="a">
                                        <h5 class="card-title text-white" style="font-size: 17px;">Reserver un ticket de bus</h5>
                                    </a>
                                    
                                    <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                    <a v-bind:href="'/reservation'" class="mt-4" id="a">
                                        <img src="/public/assets/img/engin.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style=" background: #219935;">
                                    <a v-bind:href="'/reservation'" class="mt-4" id="a">
                                        <h5 class="card-title text-white" style="font-size: 17px;">Louer un gros engin </h5>
                                    </a>
                                    
                                    <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                                    <a v-bind:href="'/reservation'" class="mt-4" id="a">
                                        <img src="/public/assets/img/engine.png" class="img-fluid w-25" alt="...">
                                    </a>
                                    
                                    <div class="card-body" style=" background: #219935;">
                                    <a v-bind:href="'/reservation'" class="mt-4" id="a">
                                        <h5 class="card-title text-white" style="font-size: 17px;">Acheter un engin</h5>
                                    </a>
                                    
                                    <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                         </div>
                        </section>

                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Nos Valeurs</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>L'intégrité, la transparence et la satisfaction de nos clients sont les valeurs fondamentales de HUPE. Nous croyons en la responsabilité sociale et environnementale, en travaillant constamment pour minimiser notre empreinte carbone tout en vous offrant les meilleurs services de mobilité possibles.</p>  
                                </div>

                                <div class="col">
                                    <img src="/public/assets/img/apropos.jpg" alt="" class="img-fluid  ">
                                </div>
                                 
                                
                            </div>
                         </div>
                        </section>

                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Notre Engagement envers la Qualité et la Sécurité</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                    <p>Votre sécurité et votre confort sont notre priorité absolue. Nous investissons dans la qualité de notre flotte et dans la formation de nos chauffeurs. Nous travaillons en permanence pour garantir que votre expérience avec HUPE soit à la fois agréable et sécurisée.</p>  
                                </div>

                                
                            </div>
                         </div>
                        </section>

                        <section id="faq" class="faq" style="margin-top: -90px;">
                         <div class="container">
                            <div class="row mb-2">
                                <div class="col-md-10">
                                    <h1 style="font-size: 20px; font-weight: 700;">Réseaux Sociaux et Liens Utiles</h1>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-1 g-4">
                                <div class="col">
                                   <p>  Rejoignez la communauté HUPE en nous suivant sur nos réseaux sociaux et découvrez nos dernières actualités et offres spéciales. Vous pouvez également consulter notre  <router-link to="/imformations" >FAQ</router-link>  pour des réponses rapides à vos questions les plus courantes..</p>  
                                </div>
                                
                                <div class="col footer-links">
                                   
                                    <div class="social-links text-md-right pt-0 pt-md-0">
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bx bxl-youtube"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>

                                
                            </div>
                         </div>
                        </section>
                         
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Comment ça marche </h2>
                                <p>Pour chaque type de service sur "Hupe", voici comment le processus fonctionne, mettant en scène le client et le partenaire </p>
                            </div>
                            
                        </div>
                        <section id="faq" class="faq" style="margin-top: -40px;">
                        <div class="container">
                            <div class="row mb-5">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Location de véhicule</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Location de gros engins</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Réservation de ticket </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Vente de véhicule</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                        <div class="row mt-4">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">1</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Réservation </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client choisit le trajet qui lui convient, remplit le formulaire de réservation, puis lance la réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire reçoit une notification de réservation, valide ou annule la réservation. En cas d'annulation, le partenaire doit fournir une justification.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>

                                            </div>

                                            <div class="col-md-12 mt-4">
                                                 
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn" style="margin-top: 72px;">2</button>
                                                        <h1 style="font-size: 20px; margin-top: 86px; margin-left: 10px;"> Paiement </h1>
                                                    </div>
                                                    
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>

                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Une fois la réservation validée, le client peut passer au paiement ou annuler la réservation s'il change d'avis. Le client doit justifier l'annulation de la réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">3</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Messagerie </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client choisit le trajet qui lui convient, remplit le formulaire de réservation, puis lance la réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire reçoit une notification de réservation, valide ou annule la réservation. En cas d'annulation, le partenaire doit fournir une justification.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">4</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Jour du départ</h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le jour du départ, le client se rend au lieu de départ pour embarquement en présentant son téléphone comme preuve de réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">À l'aide de l'application "Hupe Scan", le partenaire scanne le code QR présent sur le ticket de réservation du client, accessible sous forme de fichier PDF ou directement depuis l'application</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <p> <strong>N.B. </strong> Le client peut demander un report de la date de voyage, mais cette nouvelle date doit être validée par le partenaire avant d'être acceptée. </p>
                                                <p> Nous aurons donc les statuts suivants chez le client et chez le partenaire </p> 

                                                <table class="table table-bordered" style="border-color: #219935 !important;">
                                                   <thead>
                                                    <tr>
                                                     
                                                    <th scope="col">Statut </th>
                                                    <th scope="col">Description</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px; background-color: #F77F00; border-color: #F77F00;"> En attente </boutton></td>
                                                        <td>Réservation en attente de validation </td> 
                                                    </tr>
                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #219935; border-color: #219935;"> Validée  </boutton></td>
                                                        <td>Réservation validée et en attente de paiement </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #3987FB; border-color: #3987FB;"> Confirmée    </boutton></td>
                                                        <td>Ticket payé par le client  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ;  background: linear-gradient(90deg, #F77F00 5.78%, #9747FF 97.11%); border-color: #931D96;">En attente de report </boutton></td>
                                                        <td>Ticket reporté et en attente de validation par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #9747FF;; border-color: #9747FF;">Reportée </boutton></td>
                                                        <td>Report de date accepté par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #931D96; border-color: #931D96;">Utilisé  </boutton></td>
                                                        <td>Ticket utilisé   </td>    
                                                    </tr>
                                                    
                                                 </tbody>
                                             </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                        <div class="row mt-4">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">1</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Réservation </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client choisit le gros engin qui lui convient, remplit le formulaire de réservation, puis lance la réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire reçoit une notification de réservation, valide ou annule la réservation. En cas d'annulation, le partenaire doit fournir une justification.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>

                                            </div>

                                            <div class="col-md-12 mt-4">
                                                 
                                                 <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                     <div class="col mb-3 d-flex">
                                                         <button class="btn btn-primary" id="circle_btn" style="margin-top: 72px;">2</button>
                                                         <h1 style="font-size: 20px; margin-top: 86px; margin-left: 10px;"> Confirmation </h1>
                                                     </div>
                                                     
                                                     <div class="col text-center">
                                                         <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                     </div>
 
                                                     <div class="col">
                                                     <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                         <a href="" class="mt-4">
                                                             <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                         </a>
                                                         
                                                         <div class="card-body">
                                                         <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                         <p class="card-text" style="font-size: 14px;">Une fois la réservation validée, le client doit confirmer en effectuant un dépôt ou se rendre sur place pour confirmer ou annuler la réservation s'il change d'avis. Le client doit justifier l'annulation de la réservation.</p>
                                                         </div>
                                                     </div>
                                                     </div>
                                                     
                                                      
                                                 </div>
                                                 
                                             </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">3</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Messagerie </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Après la confirmation de la réservation, le client peut ouvrir une messagerie pour communiquer avec la compagnie et obtenir plus d'informations.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire peut répondre aux messages du client et poser ses propres questions.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">4</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Transmission du gros engins</h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client se rend au lieu de rendez-vous pour récupérer le gros engin et présente son téléphone comme preuve de réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">À l'aide de l'application "Hupe Scan", le partenaire scanne le code QR présent sur le ticket de réservation du client, accessible sous forme de fichier PDF ou directement depuis l'application.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <p> <strong>N.B. </strong> Le client peut demander un report de la date de voyage, mais cette nouvelle date doit être validée par le partenaire avant d'être acceptée. </p>
                                                <p> Nous aurons donc les statuts suivants chez le client et chez le partenaire </p> 

                                                <table class="table table-bordered" style="border-color: #219935 !important;">
                                                   <thead>
                                                    <tr>
                                                     
                                                    <th scope="col">Statut </th>
                                                    <th scope="col">Description</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px; background-color: #F77F00; border-color: #F77F00;"> En attente </boutton></td>
                                                        <td>Réservation en attente de validation </td> 
                                                    </tr>
                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #219935; border-color: #219935;"> Validée  </boutton></td>
                                                        <td>Réservation validée et en attente de paiement </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #3987FB; border-color: #3987FB;"> Confirmée    </boutton></td>
                                                        <td>Ticket payé par le client  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ;  background: linear-gradient(90deg, #F77F00 5.78%, #9747FF 97.11%); border-color: #931D96;">En attente de report </boutton></td>
                                                        <td>Ticket reporté et en attente de validation par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #9747FF;; border-color: #9747FF;">Reportée </boutton></td>
                                                        <td>Report de date accepté par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #931D96; border-color: #931D96;">Utilisé  </boutton></td>
                                                        <td>Ticket utilisé   </td>    
                                                    </tr>
                                                    
                                                 </tbody>
                                             </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                        <div class="row mt-4">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">1</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Réservation </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client choisit le trajet qui lui convient, remplit le formulaire de réservation, puis lance la réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire reçoit une notification de réservation, valide ou annule la réservation. En cas d'annulation, le partenaire doit fournir une justification.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>

                                            </div>

                                            <div class="col-md-12 mt-4">
                                                 
                                                 <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                     <div class="col mb-3 d-flex">
                                                         <button class="btn btn-primary" id="circle_btn" style="margin-top: 72px;">2</button>
                                                         <h1 style="font-size: 20px; margin-top: 86px; margin-left: 10px;"> Paiement </h1>
                                                     </div>
                                                     
                                                     <div class="col text-center">
                                                         <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                     </div>
 
                                                     <div class="col">
                                                     <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                         <a href="" class="mt-4">
                                                             <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                         </a>
                                                         
                                                         <div class="card-body">
                                                         <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                         <p class="card-text" style="font-size: 14px;">Une fois la réservation validée, le client peut passer au paiement ou annuler la réservation s'il change d'avis. Le client doit justifier l'annulation de la réservation.</p>
                                                         </div>
                                                     </div>
                                                     </div>
                                                     
                                                      
                                                 </div>
                                                 
                                             </div>

                                             <div class="col-md-12 mt-4">
                                                 
                                                 <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                     <div class="col mb-3 d-flex">
                                                         <button class="btn btn-primary" id="circle_btn" style="margin-top: 72px;">3</button>
                                                         <h1 style="font-size: 20px; margin-top: 86px; margin-left: 10px;"> Messagerie </h1>
                                                     </div>
                                                     
                                                     <div class="col text-center">
                                                         <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                     </div>
 
                                                     <div class="col">
                                                     <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                         <a href="" class="mt-4">
                                                             <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                         </a>
                                                         
                                                         <div class="card-body">
                                                         <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                         <p class="card-text" style="font-size: 14px;">Après la confirmation de la réservation via le paiement, le client peut ouvrir une messagerie pour communiquer avec la compagnie et obtenir plus d'informations.</p>
                                                         </div>
                                                     </div>
                                                     </div>
                                                     
                                                      
                                                 </div>
                                                 
                                             </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">4</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Jour du départ</h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le jour du départ, le client se rend au lieu de départ pour embarquement en présentant son téléphone comme preuve de réservation.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">À l'aide de l'application "Hupe Scan", le partenaire scanne le code QR présent sur le ticket de réservation du client, accessible sous forme de fichier PDF ou directement depuis l'application.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <p> <strong>N.B. </strong> Le client peut demander un report de la date de voyage, mais cette nouvelle date doit être validée par le partenaire avant d'être acceptée. </p>
                                                <p> Nous aurons donc les statuts suivants chez le client et chez le partenaire </p> 

                                                <table class="table table-bordered" style="border-color: #219935 !important;">
                                                   <thead>
                                                    <tr>
                                                     
                                                    <th scope="col">Statut </th>
                                                    <th scope="col">Description</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px; background-color: #F77F00; border-color: #F77F00;"> En attente </boutton></td>
                                                        <td>Réservation en attente de validation </td> 
                                                    </tr>
                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #219935; border-color: #219935;"> Validée  </boutton></td>
                                                        <td>Réservation validée et en attente de paiement </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #3987FB; border-color: #3987FB;"> Confirmée    </boutton></td>
                                                        <td>Ticket payé par le client  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ;  background: linear-gradient(90deg, #F77F00 5.78%, #9747FF 97.11%); border-color: #931D96;">En attente de report </boutton></td>
                                                        <td>Ticket reporté et en attente de validation par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #9747FF;; border-color: #9747FF;">Reportée </boutton></td>
                                                        <td>Report de date accepté par le partenaire  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #931D96; border-color: #931D96;">Utilisé  </boutton></td>
                                                        <td>Ticket utilisé   </td>    
                                                    </tr>
                                                    
                                                 </tbody>
                                             </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                                        <div class="row mt-4">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">1</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Choix d'un véhicule </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le client choisit un véhicule qui l'intéresse, remplit le formulaire d'intérêt, puis lance le contact.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire reçoit une notification de contact, valide et entre en contact avec le client potentiel..</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>

                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">2</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;"> Messagerie </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Après la prise de contact, le client peut ouvrir une messagerie pour communiquer avec la compagnie et obtenir plus d'informations.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire peut répondre aux messages du client et poser ses propres questions.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">3</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Prise de rendez-vous </h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Une fois les discussions terminées, le client peut prendre rendez-vous pour essayer le véhicule.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">Le partenaire peut répondre aux messages du client et poser ses propres questions.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 d-flex">
                                                        <button class="btn btn-primary" id="circle_btn">4</button>
                                                        <h1 style="font-size: 20px; margin-top: 12px; margin-left: 10px;">Rendez-vous pour les essais</h1>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-3 row-cols-md-3 g-4 ">
                                                    <div class="col">
                                                    <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/user.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                        <h5 class="card-title" style="font-size: 17px;">Client</h5>
                                                        <p class="card-text" style="font-size: 14px;">Le jour du rendez-vous, le client se rend au lieu convenu pour essayer le véhicule en présentant son téléphone comme preuve de rendez-vous.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="col text-center">
                                                        <h1 style="font-size: 100px; margin-top: 50px;  color: #219935;"><i class='bx bx-right-arrow-alt'></i></h1>                
                                                    </div>
                                                    <div class="col">
                                                        <div class="card h-100 border-0 text-center" style="background: #EAEAEA !important;">
                                                        <a href="" class="mt-4">
                                                            <img src="/public/assets/img/part.png" class="img-fluid w-25" alt="...">
                                                        </a>
                                                        
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="font-size: 17px;">Partenaire </h5>
                                                            <p class="card-text" style="font-size: 14px;">À l'aide de l'application "Hupe Scan", le partenaire scanne le code QR présent sur le ticket de rendez-vous du client, accessible sous forme de fichier PDF ou directement depuis l'application.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                     
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-12 mt-4">
                                                <p> Ces étapes détaillées expliquent comment chaque service sur "Hupe" fonctionne, du début de la réservation ou du contact jusqu'à la concrétisation de la transaction ou de l'essai. Les statuts indiqués facilitent la gestion des réservations ou des contacts pour les clients et les partenaires. </p>
                                                <p> Nous aurons donc les statuts suivants chez le client et chez le partenaire </p> 

                                                <table class="table table-bordered" style="border-color: #219935 !important;">
                                                   <thead>
                                                    <tr>
                                                     
                                                    <th scope="col">Statut </th>
                                                    <th scope="col">Description</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px; background-color: #F77F00; border-color: #F77F00;">Contact </boutton></td>
                                                        <td>Demande de contact des clients potentiels </td> 
                                                    </tr>
                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #219935; border-color: #219935;">Discussion   </boutton></td>
                                                        <td>En discussion ou en négociation  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #3987FB; border-color: #3987FB;">Rendez vous    </boutton></td>
                                                        <td>Ticket payé par le client  </td>    
                                                    </tr>

                                                    

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #9747FF;; border-color: #9747FF;">Essai  </boutton></td>
                                                        <td>Réservation annulée par le client  </td>    
                                                    </tr>

                                                    <tr>       
                                                        <td> <boutton class="btn btn-primary" style="border-radius:30px ; background-color: #931D96; border-color: #931D96;">Utilisé  </boutton></td>
                                                        <td>Ticket utilisé   </td>    
                                                    </tr>
                                                    
                                                 </tbody>
                                             </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        </section>
                        
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0"> 
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Accessibilité sur HUPE </h2>
                                <hr>
                                <p>Chez HUPE, nous nous engageons à rendre nos services accessibles à tous. Nous croyons en l'importance de l'accessibilité et nous nous efforçons de fournir une expérience inclusive à l'ensemble de nos utilisateurs, y compris ceux ayant des besoins spéciaux. Sur cette page, nous vous expliquerons comment nous mettons en œuvre l'accessibilité sur notre site web  www.hupe-africa.com.</p>
                            </div>
                            <div class="col-md-12">
                                <h2 style="font-size: 20px; font-weight: 600;" class="mb-3">Navigation Accessible </h2>
                                <p>Vous pouvez naviguer sur notre site web à l'aide du clavier. Utilisez les touches fléchées pour parcourir le contenu et appuyez sur la touche Entrée pour activer les liens.</p>
                                <p>Si vous utilisez un lecteur d'écran, notre site est compatible avec des lecteurs d'écran populaires, tels que VoiceOver pour iOS et TalkBack pour Android. Pour activer la lecture vocale, suivez les instructions de votre lecteur d'écran.</p>
                                <img src="/public/assets/img/as.jpg" alt="" class="img-fluid" style="border-radius: 5px;">
                            </div>

                            <div class="col-md-12 mt-4">
                                <div class="row">
                                    <div class="col-md-6" style=" margin-top: 40px;">
                                        <h2 style="font-size: 20px; font-weight: 600;" class="mb-3">Contraste et Taille du Texte</h2>
                                        <p>Nous comprenons que le contraste et la taille du texte sont essentiels pour la lisibilité. C'est pourquoi notre application propose des options de personnalisation qui vous permettent d'ajuster le contraste, la taille du texte et le style pour répondre à vos besoins individuels.</p>
                                        
                                    </div>

                                    <div class="col-md-6 text-center">
                                         
                                        <img src="/public/assets/img/text.jpg" alt="" class="img-fluid w-75" style="border-radius: 5px;">

                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-md-12 mt-4">
                                <div class="row">
                                   
                                    <div class="col-md-6" style=" margin-top: 40px;">
                                        <h2 style="font-size: 20px; font-weight: 600;" class="mb-3">Commandes Vocales</h2>
                                        <p>Pour les utilisateurs ayant des problèmes de mobilité, notre application prend en charge des commandes vocales. Vous pouvez activer la reconnaissance vocale pour effectuer des actions telles que la recherche de véhicules, la réservation de billets, etc</p>
                                        
                                    </div>

                                    <div class="col-md-6 text-center">
                                         
                                         <img src="/public/assets/img/vocal.jpg" alt="" class="img-fluid w-75" style="border-radius: 5px;">
 
                                     </div>

                                   
                                </div>
                                
                            </div>
                            <div class="col-md-12 mt-4">
                                <div class="row">
                                   
                                    <div class="col-md-6" style="margin-top: 40px;">
                                        <h2 style="font-size: 20px; font-weight: 600;" class="mb-3">Simplicité d'Utilisation </h2>
                                        <p>Nous avons conçu notre interface pour être simple et intuitive. Les éléments de l'interface sont suffisamment larges pour être faciles à toucher, et les interactions sont claires et directes.</p>
                                        
                                    </div>

                                    <div class="col-md-6 text-center">
                                         
                                         <img src="/public/assets/img/uti.jpg" alt="" class="img-fluid w-75" style="border-radius: 5px;">
 
                                     </div>

                                   
                                </div>
                                
                            </div>
                            <div class="col-md-12 mt-4">
                                <div class="row">
                                   
                                    <div class="col-md-6" style="margin-top: 40px;">
                                        <h2 style="font-size: 20px; font-weight: 600;" class="mb-3"> Options de Personnalisation </h2>
                                        <p>Dans les paramètres de l'application, vous trouverez des options pour personnaliser l'apparence et le comportement de l'application, y compris la taille du texte, les couleurs et le contraste.</p>
                                        
                                    </div>

                                    <div class="col-md-6 text-center">
                                         
                                         <img src="/public/assets/img/perso.jpg" alt="" class="img-fluid w-75" style="border-radius: 5px;">
 
                                     </div>

                                   
                                </div>
                                
                            </div>

                            <div class="col-md-12 mt-4">
                                <div class="row">
                                   
                                    <div class="col-md-12">
                                        <h2 style="font-size: 20px; font-weight: 600;" class="mb-3"> Réponse aux Commentaires </h2>
                                        <p>Nous apprécions vos commentaires sur l'accessibilité de notre application. Vos retours nous aident à identifier les domaines d'amélioration et à apporter des corrections. N'hésitez pas à nous faire part de vos commentaires.</p>
                                        <p>Chez HUPE, nous nous engageons à offrir une expérience accessible et inclusive pour tous nos utilisateurs. Si vous avez des suggestions ou des préoccupations concernant l'accessibilité de notre application, veuillez nous contacter à support@hupe-africa.com ou en utilisant le formulaire de contact intégré à l'application.</p>
                                        <p>Chez HUPE, nous nous engageons à offrir une expérience accessible à tous. Si vous avez des questions ou des suggestions concernant l'accessibilité de notre site, veuillez nous contacter à spport@hupe-africa.com ou en utilisant notre formulaire de contact.</p>
                                        <p>Nous sommes là pour vous, et votre expérience est importante pour nous. Merci de faire partie de la communauté HUPE.</p>
                                        
                                    </div>

                                    
                                   
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="tab-pane fade" id="blog-tab-pane" role="tabpanel" aria-labelledby="blog-tab" tabindex="0"> 
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Actualités </h2>
                                <hr>
                                <p>Bienvenue sur le blog de Hupe, votre destination de confiance pour la location et la réservation de voitures. Notre mission est de vous fournir des informations utiles, des astuces de voyage, et des mises à jour sur les dernières tendances automobiles. Que vous soyez un voyageur avide, un passionné de voitures, ou simplement à la recherche de conseils pour un voyage sans tracas, notre blog est là pour vous.</p>
                            </div>
                             
                        </div>

                        <section id="features" class="features"  style="margin-top: -30px;">
                    <div class="container">

                         
                
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content.  </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog-1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content.  </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content.  </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content.  </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0" style="box-shadow: 5px 5px 10px rgba(0,0,0,.2);">
                            <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row" id="blog_row">
                                <div class="col-md-12">
                                    <h5 class="card-title" id="blog_title">Card title</h5>
                                </div>
                                </div>

                                <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5 class="" style="font-size: 15px;"> <i class='bx bxs-circle mr-2' style="margin-right: 2px;"></i> 8 mars 2023</h5>
                                </div>
                                
                                </div>
                                
                                <p class="card-text" style="font-size: 13px;">This is a wider card with supporting text below as a natural lead-in to additional content.  </p>
                                <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-primary" style=" background-color: #219935 !important;border: none;"> Voir plus</button>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    

                        
                    </div>
                    </section>
                        
                    </div>
                </div>
            </div>
            <!-- z-index: 1030; -->
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
    --bs-accordion-btn-icon: url(data:image/svg+xml,%3csvg xmlns='http:/www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
    --bs-accordion-btn-icon-width: 1.25rem;
    --bs-accordion-btn-icon-transform: rotate(-180deg);
    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon: url(data:image/svg+xml,%3csvg xmlns='http:/www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
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

  .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #e7eafe;
    color: #219935;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 5px;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}
#circle_btn{
    width: 50px;
    border-radius: 50%;
    height: 50px;
    background: #219935;
    border-color: #219935;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #219935;
}

.nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    /* color: #219935; */
    color: black ;
    text-decoration: none;
    background: none;
    border: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

</style>