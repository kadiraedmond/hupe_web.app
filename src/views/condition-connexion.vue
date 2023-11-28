<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Home</router-link></li>
            <li>Pour les partenaires</li>
          </ol>
  
        </div>
      </section> -->
      <!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">
  
              <div class="row no-gutters mt-4">
                  <div class="col-md-3" style="width: 30% !important;"></div>
                  <div class="col-md-6" style="text-align: justify; border: 1px solid #efefef; border-radius: 5px; width: 40% !important;">
                    <div class="row" style="    padding: 32px;">
                        <div class="col-md-12 text-center">
                            <img src="/assets/img/favicon.png" alt=""   class="img-fluid"  style="margin-top: -6px ; width: 50px;"
                        />
                        </div>
                        <div class="col-md-12 text-center">
                            <h3 class="mt-5 mb-4" style="font-size: 18px;">Politiques de confidentialité et Termes & Conditions d'utilisation </h3>

                        </div>
                        <div class="col-md-12" style="font-size: 14px;">
                            <p data-aos=" -up">
                                Pour créer un compte Google, vous devez accepter les <router-link to='/legales' >  Termes & Conditions d'utilisation </router-link> ci-dessous. 
                                
                            </p>

                            <p data-aos=" -up">
                                De plus, lorsque vous créez un compte, nous traitons vos informations comme décrit dans nos <router-link to='/legales' >Politiques de confidentialité</router-link> ,
                            </p>
                        </div>
                        <div class="col-md-12 mb-4" style="font-size: 14px;">
                            <p data-aos=" -up"> Les informations que nous collectons Nous pouvons collecter les types de données suivants : </p>
                            <ul>
                                <li>Informations personnelles telles que votre nom, adresse, numéro de téléphone, adresse e-mail, et informations de paiement.</li>
                                <li>Informations sur les véhicules loués ou achetés, les réservations de tickets de bus et les transactions effectuées sur la plateforme. </li>
                                <li>Données de localisation lorsque cela est nécessaire pour fournir nos services. </li>
                            </ul>
                              
                            <p data-aos=" -up">Comment nous collectons les données Nous pouvons collecter des données de différentes manières, notamment lorsque vous créez un compte, effectuez une réservation, utilisez notre application, communiquez avec notre service client, ou interagissez avec notre site web. <br>
                            Nous utilisons vos données personnelles pour :  </p>
                            <ul>
                                <li>Fournir les services que vous demandez, tels que la location de véhicules, la réservation de tickets de bus, etc. </li>
                                <li>Améliorer et personnaliser votre expérience sur notre plateforme. </li>
                                <li>Communiquer avec vous, notamment pour vous envoyer des confirmations de réservation, des mises à jour de compte, et des informations sur nos services.</li>
                                <li> Respecter nos obligations légales et réglementaires.</li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <router-link to=''>
                                        <button class="btn btn-primary" id="btn-left" > Annuler</button>
                                    </router-link>
                                    
                                </div>
                                <div class="col-md-6 text-end">
                                    <router-link to=''>
                                        <button class="btn btn-primary" style="background-color: #219935 ; border-color: #219935;"> J'accepte</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
  
                     
                       
                  </div>
                  <div class="col-md-3" style="width: 30% !important;"></div>
              </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>
#btn-left{
background-color: white !important ;
 border-color: white !important;
  color: #219935 !important;
}

#btn-left:hover{
background-color: #219935 !important ;
 border-color: #219935 !important;
  color: white !important;
}
</style>