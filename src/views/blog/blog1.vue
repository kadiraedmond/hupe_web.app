<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

        <ol>
            <li><a href="index.html">Home</a></li>
            <li>Détails du blog</li>
        </ol>

    </div>
</section><!-- End Breadcrumbs -->

<section id="portfolio-details" class="portfolio-details">
    <div class="container">
        
          <div class="row g-5">
            <div class="col-md-8">
              <img src="/assets/img/blog/2.jpg" alt="" class="img-fluid w-100 mb-3" style="height: 20%; border-radius: 5px;">
              <h3 class="pb-4 mb-4  border-bottom">
                Les Avantages de Louer un Véhicule avec Hupe
              </h3>
        
              <article class="blog-post" style="text-align: justify;">
                <h2 class="blog-post-title mb-4" style="font-size: 19px; font-weight: 600;">Extrait</h2>
                 
        
                <p>
                    Louer un véhicule avec Hupe va bien au-delà d'une simple transaction ; c'est une expérience qui offre des avantages économiques et pratiques significatifs. Découvrez comment Hupe transforme votre façon de voyager tout en optimisant votre budget.
                    
                </p>
                <hr>
                  <div class="row">
                    <div class="col-md-12" style="text-align: justify;">
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Économies Substantielles </h2>
                        <p>Hupe s'engage à offrir des tarifs de location compétitifs, vous permettant d'économiser considérablement par rapport aux autres services de location. Profitez de tarifs transparents, sans coûts cachés, et adaptez votre location à votre budget, qu'il s'agisse d'une journée, d'une semaine ou plus.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Large Gamme de Véhicules </h2>
                        <p>Que vous ayez besoin d'une voiture compacte pour un voyage en ville ou d'un SUV spacieux pour une escapade en famille, Hupe propose une gamme diversifiée de véhicules pour répondre à tous les besoins. Choisissez le véhicule qui correspond à votre style et à l'occasion, avec la flexibilité que vous méritez.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Location à la Demande </h2>
                        <p>La location de véhicules avec Hupe est à portée de main. Besoin d'une voiture pour quelques heures seulement ou pour la journée entière ? Avec Hupe, la location à la demande signifie que vous payez uniquement pour la durée dont vous avez besoin, ce qui vous permet d'économiser de l'argent tout en maximisant l'utilisation.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Processus de Réservation Simplifié </h2>
                        <p>Oubliez les longues files d'attente et les formalités compliquées. Hupe simplifie le processus de réservation pour que vous puissiez réserver votre véhicule en quelques clics. Gagnez du temps précieux et commencez votre voyage sans tracas.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Assurance Transparente </h2>
                        <p>La tranquillité d'esprit est essentielle lors de la location d'un véhicule. Hupe offre une assurance transparente, avec des options claires pour vous assurer que vous êtes couvert en toutes circonstances. Voyagez en toute confiance, sachant que votre sécurité est notre priorité.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Assistance Routière 24/7 </h2>
                        <p>Que vous soyez à quelques kilomètres de chez vous ou en plein milieu d'une aventure lointaine, Hupe offre une assistance routière 24/7. En cas de besoin, notre équipe dévouée est là pour vous assister, garantissant une expérience de location sans soucis.</p>
                        <p>Louer un véhicule avec Hupe va au-delà de la simple commodité. C'est l'opportunité de vivre une expérience de mobilité sans stress, avec des avantages économiques significatifs. Téléchargez Hupe dès aujourd'hui et découvrez comment la location de véhicules peut être une expérience agréable et abordable. Parce que chaque trajet mérite d'être exceptionnel, et Hupe le rend possible.</p>


                    </div>
                  </div>
              </article>
              <hr>
              
            </div>
            
        
            <div class="col-md-4">
              <div class="position-sticky" style="top: 0rem;">
                 
                <div class="p-4" style="background:#f8f9fa">
                  <h4 class="fst-italic mb-4">Articles récents</h4>
                  <ol class="list-unstyled mb-0">
                    
                     
                      <li>
                        <div class="card mb-3 border-0"  style="background:#f8f9fa;border-radius: 5px;">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img src="/assets/img/blog/1.jpg" class="img-fluid rounded-start w-75" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <routeur-link to="">
                                  <h5 class="card-title" style="font-size: 14px; margin-top: -19px;">Comment Hupe Simplifie Vos Voyages Quotidiens</h5>
                                </routeur-link>
                                  <p style="font-size: 13px;"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card mb-3 border-0"  style="background:#f8f9fa;border-radius: 5px;">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img src="/assets/img/blog/3.jpg" class="img-fluid rounded-start w-75" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <routeur-link to="">
                                  <h5 class="card-title" style="font-size: 14px; margin-top: -19px;">Top 10 Destinations Incontournables à Explorer avec Hupe dans l'UEMOA</h5>
                                </routeur-link>
                                  <p style="font-size: 13px;"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card mb-3 border-0"  style="background:#f8f9fa;border-radius: 5px;">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img src="/assets/img/blog/4.jpg" class="img-fluid rounded-start w-75" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <routeur-link to="">
                                  <h5 class="card-title" style="font-size: 14px; margin-top: -19px;">L'Impact de Hupe sur l'Industrie de la Location de Véhicules</h5>
                                </routeur-link>
                                  <p style="font-size: 13px;"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <hr>
                  
                     <li class="text-center">
                      <routeur-link to="">
                        <h5>Voir tous nos articles</h5>
                      </routeur-link>
                     
                     </li>
           
                  </ol>
                  
                </div>

              </div>
            </div>
          </div>
    </div>
   
</section>


<section id="portfolio-details" class="portfolio-details">
    <div class="container">
        
          <div class="row g-5">
            <div class="col-md-8">
              
              <div class="row" style="margin-top: -85px;">
               
                <div class="col-md-12">
                  <h2 class="mb-4" style="font-size: 19px;
                  font-weight: 600;
                  margin-top: 44px;">Laisser un commentaire</h2>
                  <form method="POST" action="{{ url('comment') }}">
                    <div class="row" style="background: #f8f9fa; border-radius: 5px;">
                      <div class="col-md-12 mt-3 mb-3">
                        <label for="validationCustom02" class="form-label">Votre nom *</label>
                        <input type="text" class="form-control" name="nom" id="validationCustom03" placeholder="nom" required style="height: 47px;">
                        
                      </div>
                      <div class="col-md-12">
                        <label for="validationCustom02" class="form-label">Votre commentaire *</label>
                        <input type="hidden" name="blog_id" value="{{ $blog->id }}">
                        <textarea name="content" rows="4" cols="50" class="form-control" placeholder="Ajouter un commentaire" style="height: 161px;"></textarea>
                      </div>

                      <div class="col-md-12 mb-4">
                        <button class="btn btn-primary mt-4" type="submit" style=" background: #219935; border-color: #219935;">Laisser un commentaire</button>
                      </div>
                     
                    </div>
                   
                   
                </form>
                
                </div>

                <div class="col-md-12">
                  <h2 class="mb-4" style="font-size: 19px;
                  font-weight: 600;
                  margin-top: 44px;">Commentaires précédents</h2>
                  <hr>
                 
                    
                        <div class="comment">
                          <div class="row">
                            <div class="col-md-6">
                              <p><strong>edmond</strong></p>
                              <p style="color: #aaa; font-size: 13px; margin-top: -14px;"> Posté le 24/11/2023 </p>
                            </div>
                            <div class="col-md-6">
                              <p style="font-size: 15px;">loren ipsun dalor</p>
                            </div>
                          </div>
                          
                            
                        </div>
                        <hr>


                </div>
              </div>
        
             
            </div>
        
            <div class="col-md-4">
              
            </div>
          </div>
    </div>
   
</section>
    
</template>

<style>
</style>