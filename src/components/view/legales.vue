<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  

  <main id="main" style="background: rgb(213, 248, 229);">
    <section id="features" class="features mt-4">
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
                            <h2 style="font-size: 24px;">Centre de confidentialité</h2>
                        </div>
                        <div class="col-md-12 mb-2 text-start">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active  text-start" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Politiques de confidentialité</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link  text-start" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Politique de sécurité</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Termes et conditions</button>
                            </li>
                        </div>
                        <div class="col-md-12 mb-2">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-start" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Droit d'auteur</button>
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
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Politique de confidentialité</h2>

                                <h2 style="font-size: 24px; font-weight: 600;">Clause de la Politique de confidentialité </h2>
                            </div>
                            <div class="col-md-12" style="font-size: 15px;">
                                <p>Dernière mise à jour : 12 octobre 2023 </p>

                                <h2 style="font-size: 16px; font-weight: 700;">Introduction</h2>
                                <P>Bienvenue sur Hupe Africa, une plateforme de location de véhicules, de location de gros engins, de réservation de tickets de bus et de vente de véhicules. Chez « Hupe Africa », nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, partageons et protégeons vos données.</P>
                                
                                <h2 style="font-size: 16px; font-weight:700;">Collecte de données</h2>
                                <p>Les informations que nous collectons Nous pouvons collecter les types de données suivants </p>
                                 <ul>
                                    <li>Informations personnelles telles que votre nom, adresse, numéro de téléphone, adresse e-mail, et informations de paiement.</li>
                                    <li>Informations sur les véhicules loués ou achetés, les réservations de tickets de bus et les transactions effectuées sur la plateforme.</li>
                                    <li>Données de localisation lorsque cela est nécessaire pour fournir nos services.</li>

                                 </ul>
                                 <p> Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web.</p>

                                 <h2 style="font-size: 16px; font-weight:700;">Utilisation des données</h2>
                                <p>Nous utilisons vos données personnelles pour </p>
                                 <ul>
                                    <li>Fournir les services que vous demandez, tels que la location de véhicules, la réservation de tickets de bus, etc.</li>
                                    <li>Améliorer et personnaliser votre expérience sur notre plateforme.</li>
                                    <li>Communiquer avec vous, notamment pour vous envoyer des confirmations de réservation, des mises à jour de compte, et des informations sur nos services.</li>
                                    <li>Respecter nos obligations légales et réglementaires.</li>

                                 </ul>

                                 <h2 style="font-size: 16px; font-weight:700;">Partage de données</h2>
                                <p>Nous pouvons partager vos données personnelles avec des tiers dans les cas suivants  </p>
                                 <ul>
                                    <li>Avec les fournisseurs de services tiers qui nous aident à fournir nos services.</li>
                                    <li>Lorsque cela est nécessaire pour se conformer à la loi ou aux demandes gouvernementales.</li>
                                    <li>Dans le cadre d'une fusion, d'une acquisition ou de toute autre transaction similaire impliquant Hupe africa. </li>
                                    
                                 </ul>

                                 <h2 style="font-size: 16px; font-weight:700;">Sécurité des données</h2>
                                <p>Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre la perte, le vol, l'accès non autorisé et la divulgation.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Vos droits</h2>
                                <p>Vous avez certains droits en ce qui concerne vos données personnelles, notamment le droit d'accéder à vos données, de les rectifier, de les supprimer et de vous opposer à leur traitement. Pour exercer ces droits, veuillez nous contacter à contact@hupe-africa.com.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Modifications de la politique de confidentialité</h2>
                                <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les changements apportés à nos pratiques. Nous vous informerons de toute modification importante par le biais de notre site web ou de notre application.</p>


                                <h2 style="font-size: 16px; font-weight:700;">Contact</h2>
                                <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à contact@hupe-africa.com.</p>

                                <p>Merci d'utiliser Hupe africa!</p>

                                <p>Assurez-vous de personnaliser cette politique de confidentialité en fonction des détails spécifiques de votre entreprise et de vos pratiques de collecte et de traitement des données. De plus, consultez un avocat ou un spécialiste en protection des données pour vous assurer que votre politique de confidentialité est conforme aux lois applicables dans votre région.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Conservation des données</h2>
                                <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services ou pour respecter nos obligations légales. Si vous souhaitez que vos données personnelles soient supprimées de nos systèmes, veuillez nous contacter à contact@hupe-africa.com.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Cookies et technologies similaires</h2>
                                <p>Nous utilisons des cookies et d'autres technologies similaires pour collecter des informations sur votre utilisation de notre site web et de notre application. Vous pouvez gérer vos préférences en matière de cookies en consultant notre Politique en matière de cookies.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Liens vers des sites tiers</h2>
                                <p>Notre plateforme peut contenir des liens vers des sites web ou des applications tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers, nous vous encourageons donc à consulter leurs politiques de confidentialité.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Consentement</h2>
                                <p>En utilisant notre plateforme, vous consentez à la collecte, à l'utilisation et à la divulgation de vos données personnelles conformément à cette politique de confidentialité.</p>

                                

                                <h2 style="font-size: 16px; font-weight:700;">Âge minimum</h2>
                                <p>Notre plateforme n'est pas destinée aux personnes de moins de [âge minimum]. Si vous avez moins de [âge minimum], veuillez ne pas utiliser nos services et ne nous fournissez pas vos données personnelles.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Plaintes</h2>
                                <p>Si vous avez des préoccupations concernant notre traitement de vos données personnelles, veuillez nous contacter à [adresse e-mail de contact]. Vous avez également le droit de déposer une plainte auprès de l'autorité de protection des données de votre pays.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Langue prédominante</h2>
                                <p>En cas de divergence entre la version originale de cette politique de confidentialité et sa traduction, la version originale prévaudra.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Consentement aux modifications</h2>
                                <p>En continuant à utiliser nos services après toute modification de cette politique de confidentialité, vous consentez aux termes révisés.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Politique de Sécurité HUPE</h2>

                            </div>
                            <div class="col-md-12" style="font-size: 15px;">
                                <p>Dernière mise à jour : 12 octobre 2023 </p>

                                <P>Chez HUPE, la sécurité de vos informations personnelles et de vos transactions est notre priorité. Nous nous engageons à mettre en place des mesures de sécurité strictes pour protéger vos données et garantir une expérience utilisateur sûre. 
                                Cette Politique de Sécurité explique nos pratiques de sécurité et les mesures que nous prenons pour protéger vos informations.
                                </P>
                                
                                <h2 style="font-size: 16px; font-weight:700;">Protection des Données Personnelles</h2>
                                <p>HUPE recueille, traite et stocke les données personnelles conformément aux lois sur la protection des données en vigueur. Nous utilisons des technologies de sécurité avancées pour protéger vos informations contre tout accès non autorisé. </p>
                                <p>Nous ne partageons pas vos données personnelles avec des tiers non autorisés et nous n'utilisons ces données que dans le but de vous fournir nos services.</p>
                                  
                                 <!-- <p> Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web.</p> -->

                                 <h2 style="font-size: 16px; font-weight:700;">Sécurité des Transactions</h2>
                                <p>Pour les transactions effectuées via l'Application, HUPE utilise des protocoles de sécurité robustes pour garantir la confidentialité et l'intégrité des données. Les transactions en ligne sont sécurisées et chiffrées pour protéger les informations financières des utilisateurs.</p>
                                <p>Nous ne stockons pas les données de paiement sensibles, telles que les numéros de cartes de crédit, sur nos serveurs. Les informations de paiement sont gérées par des partenaires de paiement tiers réputés et sécurisés.</p>
                                  
                                 <h2 style="font-size: 16px; font-weight:700;">Authentification et Contrôle d'Accès</h2>
                                <p>L'Application utilise des mécanismes d'authentification robustes pour garantir que seules les personnes autorisées ont accès à leurs comptes. </p>
                                 
                                <p>Vous êtes responsable de la sécurité de votre compte et de la protection de vos informations d'identification. Nous vous encourageons à utiliser des mots de passe forts et à ne pas partager vos informations d'identification avec d'autres personnes.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Mises à Jour de Sécurité</h2>
                                <p>HUPE s'engage à maintenir l'Application à jour avec les derniers correctifs de sécurité. Nous surveillons en permanence les menaces potentielles et réagissons rapidement pour corriger toute vulnérabilité identifiée.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Sensibilisation à la Sécurité</h2>
                                <p>HUPE sensibilise son personnel à l'importance de la sécurité des données et à la confidentialité des informations des utilisateurs. Nous mettons en place des formations régulières pour renforcer la conscience de la sécurité au sein de notre organisation.</p>


                                <h2 style="font-size: 16px; font-weight:700;">Respect de la Vie Privée</h2>
                                <p>Nous respectons votre vie privée et nous nous engageons à ne pas utiliser vos données personnelles à des fins non autorisées. Pour en savoir plus sur notre politique de confidentialité, veuillez consulter notre Politique de Confidentialité [lien vers la Politique de Confidentialité].</p>

                                 
                                <h2 style="font-size: 16px; font-weight:700;">Contact</h2>
                                <p>Pour toute question ou préoccupation concernant notre Politique de Sécurité, veuillez nous contacter à support@hupe-africa.com.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Rétention des Données</h2>
                                <p>HUPE ne conserve vos données personnelles que le temps nécessaire pour fournir les services que vous avez demandés. Nous nous conformons aux lois et réglementations locales sur la conservation des données.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Surveillance des Activités Suspectes</h2>
                                <p>HUPE surveille en permanence les activités sur l'Application pour détecter et prévenir les comportements suspects. Nous utilisons des systèmes de détection d'intrusions et d'analyse des journaux pour protéger la sécurité de l'Application.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Collaborations Sécurisées</h2>
                                <p>Lorsque nous collaborons avec des partenaires ou des fournisseurs de services tiers, nous nous assurons qu'ils respectent des normes de sécurité élevées pour protéger vos données et garantir la confidentialité.</p>

                                

                                <h2 style="font-size: 16px; font-weight:700;">Rapports de Sécurité</h2>
                                <p>Nous publions régulièrement des rapports de sécurité qui décrivent nos efforts en matière de sécurité, les vulnérabilités résolues et les actions entreprises pour protéger vos informations. Ces rapports sont disponibles sur demande.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Mesures d'Urgence</h2>
                                <p>En cas de violation de données ou de situation de crise, nous avons des procédures d'urgence en place pour minimiser l'impact et informer les utilisateurs concernés conformément à la loi.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Éducation des Utilisateurs</h2>
                                <p>HUPE s'engage à éduquer les utilisateurs sur les meilleures pratiques en matière de sécurité, telles que la protection de leurs identifiants, la mise à jour de leurs appareils et la détection des signes de phishing ou d'activité malveillante.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Conformité aux Normes de Sécurité</h2>
                                <p>HUPE se conforme aux normes de sécurité reconnues de l'industrie et s'efforce de suivre les meilleures pratiques en matière de sécurité de l'information.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Loi Applicable et Juridiction</h2>
                                <p>Cette Politique de Sécurité est régie par les lois en vigueur dans [juridiction applicable]. Tout litige découlant de cette Politique de Sécurité sera soumis à la compétence exclusive des tribunaux de [juridiction compétente].</p>

                                <h2 style="font-size: 16px; font-weight:700;">Modifications de la Politique de Sécurité</h2>
                                <p>Nous nous réservons le droit de modifier cette Politique de Sécurité à tout moment. Les modifications prendront effet dès leur publication sur l'Application. Il est de votre responsabilité de consulter régulièrement cette Politique de Sécurité pour prendre connaissance des éventuelles modifications.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Date d'Entrée en Vigueur</h2>
                                <p>Cette Politique de Sécurité entre en vigueur à partir de la date de sa publication.</p>
                                <p>Cette suite de dispositions renforce la sécurité de l'application et des données de l'utilisateur, tout en informant les utilisateurs des mesures prises pour les protéger. </p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="font-size: 24px; font-weight: 600;" class="mb-3">Conditions Générales d'Utilisation de l'Application HUPE</h2>

                            </div>
                            <div class="col-md-12" style="font-size: 15px;">
                                <p>Dernière mise à jour : 12 octobre 2023 </p>
                                <p>Veuillez lire attentivement ces conditions générales d'utilisation avant d'utiliser l'application mobile et le site web hupe. En utilisant l'application ou le site web, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, n'utilisez pas l'application ou le site web hupe.</p>

                                <h2 style="font-size: 16px; font-weight: 700;">Acceptation des Conditions</h2>
                                <P>En utilisant l'application mobile HUPE, le site web et les services connexes (ci-après collectivement dénommés "l'Application"), vous acceptez d'être lié par ces Conditions Générales d'Utilisation ("CGU"). Si vous n'acceptez pas ces CGU, veuillez ne pas utiliser l'Application.</P>
                                
                                <h2 style="font-size: 16px; font-weight:700;">Utilisation de l'Application</h2>
                                <p>Vous reconnaissez et acceptez que l'utilisation de l'Application est à vos risques et périls. Vous acceptez de ne pas utiliser l'Application à des fins illégales ou non autorisées. </p>
                                <p>Vous acceptez de respecter toutes les lois et réglementations locales, nationales et internationales applicables à votre utilisation de l'Application.</p>
                                 
                                 <h2 style="font-size: 16px; font-weight:700;">Compte Utilisateur</h2>
                                <p>Pour utiliser certaines fonctionnalités de l'Application, vous devrez créer un compte utilisateur. Vous acceptez de fournir des informations exactes et complètes lors de la création de votre compte. </p>
                                <p>Vous êtes responsable de la sécurité de votre compte, de votre mot de passe et des activités qui s'y rapportent. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.</p>
                                 

                                 <h2 style="font-size: 16px; font-weight:700;">Politique de Confidentialité</h2>
                                <p>En utilisant l'Application, vous acceptez notre Politique de Confidentialité qui régit la collecte et l'utilisation de vos informations personnelles. Vous pouvez consulter notre Politique de Confidentialité [lien vers la Politique de Confidentialité] pour en savoir plus. </p>
                                  

                                 <h2 style="font-size: 16px; font-weight:700;">Droits de Propriété Intellectuelle</h2>
                                <p>Tous les contenus présents sur l'Application, y compris les textes, les images, les marques, les logos et les logiciels, sont protégés par des droits de propriété intellectuelle et appartiennent à HUPE ou à des tiers autorisés.</p>
                                <p>Vous ne pouvez pas copier, reproduire, distribuer, publier, afficher, modifier, traduire, créer des œuvres dérivées, vendre, transférer, ou utiliser de quelque manière que ce soit le contenu de l'Application sans notre autorisation écrite préalable.</p>



                                <h2 style="font-size: 16px; font-weight:700;">Responsabilité</h2>
                                <p>HUPE ne peut garantir que l'Application sera exempte d'erreurs ou de pannes. Vous utilisez l'Application à vos propres risques, et nous ne serons pas responsables de tout dommage, perte ou préjudice résultant de l'utilisation de l'Application.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Modification des CGU</h2>
                                <p>Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prendront effet dès leur publication sur l'Application. Il est de votre responsabilité de consulter régulièrement ces CGU pour prendre connaissance des éventuelles modifications.</p>


                                <h2 style="font-size: 16px; font-weight:700;">Contact</h2>
                                <p>Si vous avez des questions concernant ces CGU, veuillez nous contacter à contact@hupe-africa.com</p>

                                <h2 style="font-size: 16px; font-weight:700;">Résiliation du Compte</h2>
                                <p>Vous pouvez résilier votre compte utilisateur à tout moment en suivant les instructions fournies dans l'Application. HUPE se réserve le droit de résilier votre compte en cas de violation de ces CGU.</p>

                                
                                <h2 style="font-size: 16px; font-weight:700;">Limitation de Responsabilité</h2>
                                <p>Dans toute la mesure permise par la loi, HUPE ne sera en aucun cas responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de votre utilisation de l'Application.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Loi Applicable et Juridiction</h2>
                                <p>Ces CGU sont régies par les lois en vigueur dans [juridiction applicable]. Tout litige découlant de ces CGU sera soumis à la compétence exclusive des tribunaux de [juridiction compétente].</p>

                                <h2 style="font-size: 16px; font-weight:700;">Intégralité de l'Accord</h2>
                                <p>Ces CGU constituent l'intégralité de l'accord entre vous et HUPE en ce qui concerne l'utilisation de l'Application, remplaçant tout accord ou arrangement antérieur.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Notifications</h2>
                                <p>Toutes les notifications ou communications de HUPE à votre intention seront envoyées par voie électronique à l'adresse e-mail ou numero de telephone associée à votre compte.</p>

                                

                                <h2 style="font-size: 16px; font-weight:700;">Indépendance des Dispositions</h2>
                                <p>Si l'une des dispositions de ces CGU est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur.</p>

                                <h2 style="font-size: 16px; font-weight:700;">Contact</h2>
                                <p>Pour toute question ou réclamation concernant ces CGU, veuillez nous contacter à contact@hupe-africa.com.</p>

                                
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
<style>
</style>