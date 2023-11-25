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
              <img src="/public/assets/img/blog/4.jpg" alt="" class="img-fluid w-100 mb-3" style="height: 20%; border-radius: 5px;">
              <h3 class="pb-4 mb-4  border-bottom">
                L'Impact de Hupe sur l'Industrie de la Location de Véhicules
              </h3>
        
              <article class="blog-post">
                <h2 class="blog-post-title mb-4" style="font-size: 19px; font-weight: 600;">Extrait</h2>
                 
        
                <p>
                    L'évolution rapide de l'industrie de la location de véhicules a trouvé un nouveau protagoniste en Hupe, une application qui transcende les normes conventionnelles pour redéfinir l'expérience de location. En examinant comment Hupe transforme cette industrie, nous découvrons un changement radical dans la façon dont les gens abordent et vivent la location de véhicules.
                    
                </p>
                <hr>
                  <div class="row">
                    <div class="col-md-12">
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Démocratisation de la Location</h2>
                        <p>Hupe élargit l'accès à la location de véhicules, la rendant plus accessible à un public plus large. Avec une interface conviviale et des tarifs compétitifs, Hupe ouvre la voie à une démocratisation de la mobilité, permettant à chacun de profiter de la liberté de conduire sans les tracas traditionnels. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Flexibilité Personnalisée</h2>
                        <p>L'industrie de la location de véhicules est traditionnellement associée à des contrats rigides. Hupe rompt avec cette norme en offrant une flexibilité personnalisée. Les utilisateurs peuvent choisir la durée de location qui leur convient, que ce soit pour quelques heures, une journée ou plus, donnant une liberté inégalée dans la planification de leurs déplacements. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Transparence des Coûts</h2>
                        <p>L'opacité des coûts a longtemps été un point d'achoppement dans l'industrie. Hupe introduit une transparence totale des coûts, éliminant les frais cachés et permettant aux utilisateurs de planifier leur budget de déplacement avec précision. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Expérience Utilisateur Réinventée</h2>
                        <p>Hupe place l'expérience utilisateur au cœur de son modèle commercial. Des processus de réservation simples, des options de véhicules clairement présentées, et une assistance 24/7 contribuent à créer une expérience de location sans stress, mettant ainsi l'utilisateur au centre de chaque interaction. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Numérisation des Processus</h2>
                        <p>En adoptant des technologies avancées, Hupe numérise l'ensemble du processus de location, de la réservation à la restitution du véhicule. Cela simplifie non seulement les opérations pour les utilisateurs mais optimise également l'efficacité pour les partenaires de location. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Impact sur les Modes de Déplacement</h2>
                        <p>Hupe va au-delà de la simple location de voitures en intégrant des modes de déplacement variés, y compris la location de gros engins et la réservation de tickets de bus. Cette diversification contribue à façonner une nouvelle ère de mobilité intégrée. </p>

                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Collaboration avec les Partenaires Locaux</h2>
                        <p>Hupe s'associe avec des partenaires locaux pour offrir une variété de services de qualité. Cette collaboration renforce les liens communautaires et stimule l'économie locale en créant des opportunités pour les petites entreprises de location. </p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Innovation Continue</h2>
                        <p>Hupe est à l'avant-garde de l'innovation dans l'industrie de la location de véhicules. Les mises à jour régulières de l'application introduisent de nouvelles fonctionnalités, des options de véhicules plus diversifiées, et des solutions toujours plus adaptées aux besoins changeants des utilisateurs. </p>
                        <p>Hupe n'est pas simplement une application de location de véhicules ; c'est un catalyseur de changement dans l'industrie. En reconfigurant les normes, en favorisant la transparence et en plaçant la commodité au premier plan, Hupe redéfinit ce que signifie louer un véhicule. L'impact sur l'industrie est palpable, ouvrant la voie à une ère nouvelle et plus accessible de la mobilité. </p>


                    </div>
                  </div>
              </article>
              <hr>
              
            </div>
            
        
            <div class="col-md-4">
              <div class="position-sticky" style="top: 0rem;">
                <div class="p-4 mb-3 bg-light rounded">
                  <h4 class="fst-italic">Apropos</h4>
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad eius mod tempor incididunt ut labore et dolore magna</p>
                </div>
        
                <div class="p-4">
                  <h4 class="fst-italic mb-4">Categories d'articles</h4>
                  <ol class="list-unstyled mb-0">
                   

                    <li><routeur-link to="">Location de véhicule</routeur-link></li>
                    <li><routeur-link to="">Reservation de ticket</routeur-link></li>
                    <li><routeur-link to="">Location de gros engin</routeur-link></li>
                    <li><routeur-link to="">Vente de vehicule</routeur-link></li>
  
                    
                  </ol>

                </div>

                <div class="p-4" style="background:#f8f9fa">
                  <h4 class="fst-italic mb-4">Articles récents</h4>
                  <ol class="list-unstyled mb-0">
                    
                     
                      <li>
                        <div class="card mb-3 border-0"  style="background:#f8f9fa;border-radius: 5px;">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img src="/public/assets/img/blog/1.jpg" class="img-fluid rounded-start w-75" alt="...">
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
                              <img src="/public/assets/img/blog/2.jpg" class="img-fluid rounded-start w-75" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <routeur-link to="">
                                  <h5 class="card-title" style="font-size: 14px; margin-top: -19px;">Les Avantages de Louer un Véhicule avec Hupe</h5>
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
                              <img src="/public/assets/img/blog/3.jpg" class="img-fluid rounded-start w-75" alt="...">
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
              
              <div class="row">
               
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