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
            <li><a href="index.html">Home</a></li>
            <li>Détails du blog</li>
        </ol>

    </div>
</section> -->
<!-- End Breadcrumbs -->

<section id="portfolio-details" class="portfolio-details" style="margin-bottom: -165px; margin-top: 90px;">
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
                  <h4 class=" mb-4">Articles récents</h4>
                  <div class="row row-cols-1 row-cols-md-1 g-4">
                    <div class="col">
                      <div
                        class="card h-100 border-0"
                        style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
                      >
                        <img
                          src="/assets/img/blog/1.jpg"
                          class="card-img-top"
                          alt="..."
                          style="height: 193.13px !important;"
                        />
                        <div class="card-body">
                          <div class="row" id="blog_row">
                            <div class="col-md-12">
                              <h5 class="card-title" id="blog_title">Comment Hupe Simplifie Vos Voyages Quotidiens</h5>
                            </div>
                          </div>

                          <div class="row mt-4">
                            <div class="col-md-12">
                              <h5 class="" style="font-size: 15px">
                                <i
                                  class="bx bxs-circle mr-2"
                                  style="margin-right: 2px"
                                ></i>
                                8 mars 2023
                              </h5>
                            </div>
                          </div>

                          <p class="card-text" style="font-size: 13px; text-align: justify;">
                            Dans le tourbillon quotidien de la vie urbaine, chaque instant compte... 
                          </p>
                          <div class="row">
                            <div class="col-md-12 text-center">
                              <router-link to="/blog">
                                <button
                                class="btn"
                                id="btn-blog"
                              
                              >
                                Voir plus
                              </button>
                              </router-link>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="card h-100 border-0"
                        style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
                      >
                        <img
                          src="/assets/img/blog/3.jpg"
                          class="card-img-top h-50"
                          alt="..."
                          style="height: 193.13px !important;"
                        />
                        <div class="card-body">
                          <div class="row" id="blog_row">
                            <div class="col-md-12">
                              <h5 class="card-title" id="blog_title">Top 10 Destinations Incontournables à Explorer ...</h5>
                            </div>
                          </div>

                          <div class="row mt-4">
                            <div class="col-md-12">
                              <h5 class="" style="font-size: 15px">
                                <i
                                  class="bx bxs-circle mr-2"
                                  style="margin-right: 2px"
                                ></i>
                                8 mars 2023
                              </h5>
                            </div>
                          </div>

                          <p class="card-text" style="font-size: 13px; text-align: justify;">
                            À travers les huit joyaux de l'UEMOA, Hupe vous invite à découvrir ...
                          </p>
                          <div class="row">
                            <div class="col-md-12 text-center">
                              <router-link to="/blog/article3">
                                <button
                                class="btn"
                                id="btn-blog"
                              >
                                Voir plus
                              </button>
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="card h-100 border-0"
                        style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); z-index: -1;"
                      >
                        <img
                          src="/assets/img/blog/4.jpg"
                          class="card-img-top"
                          alt="..."
                          style="height: 193.13px !important;"
                        />
                        <div class="card-body">
                          <div class="row" id="blog_row">
                            <div class="col-md-12">
                              <h5 class="card-title" id="blog_title">L'Impact de Hupe sur l'Industrie de la Location ...</h5>
                            </div>
                          </div>

                          <div class="row mt-4">
                            <div class="col-md-12">
                              <h5 class="" style="font-size: 15px">
                                <i
                                  class="bx bxs-circle mr-2"
                                  style="margin-right: 2px"
                                ></i>
                                8 mars 2023
                              </h5>
                            </div>
                          </div>

                          <p class="card-text" style="font-size: 13px; text-align: justify;">
                            L'évolution rapide de l'industrie de la location de véhicules a trouvé un nouveau ...
                          </p>
                          <div class="row">
                            <div class="col-md-12 text-center">
                              <router-link to="/blog/article4">
                                <button
                                class="btn"
                                id="btn-blog"
                              >
                                Voir plus
                              </button>
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