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
              <img src="/public/assets/img/blog/3.jpg" alt="" class="img-fluid w-100 mb-3" style="height: 20%; border-radius: 5px;">
              <h3 class="pb-4 mb-4  border-bottom">
                Top 10 Destinations Incontournables à Explorer avec Hupe dans l'UEMOA
              </h3>
        
              <article class="blog-post">
                <h2 class="blog-post-title mb-4" style="font-size: 19px; font-weight: 600;">Extrait</h2>
                 
        
                <p>
                    À travers les huit joyaux de l'UEMOA, Hupe vous invite à découvrir des destinations inoubliables. Que vous soyez amateur de plages, de sites historiques ou de paysages époustouflants, voici notre sélection des meilleures destinations locales à explorer avec l'aide de votre compagnon de voyage Hupe.
                    
                </p>
                <hr>
                  <div class="row">
                    <div class="col-md-12">
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Abidjan, Côte d'Ivoire</h2>
                        <p>Vibrez au rythme de la vie urbaine animée, explorez le Plateau et détendez-vous sur les plages d'Assinie.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Dakar, Sénégal</h2>
                        <p>Immergez-vous dans la culture sénégalaise à Gorée, découvrez la Ville de Dakar, et profitez des vues panoramiques du Monument de la Renaissance Africaine.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Ouagadougou, Burkina Faso</h2>
                        <p>Plongez-vous dans l'histoire au Musée National, explorez le Grand Marché, et assistez à un spectacle de danse traditionnelle au Village Artisanal.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Cotonou, Bénin</h2>
                        <p>Découvrez le marché coloré de Dantokpa, flânez le long de la plage de Fidjrossè, et explorez le Temple des Pythons à Ouidah.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Bamako, Mali</h2>
                        <p>Explorez le Musée National, promenez-vous le long du fleuve Niger, et découvrez l'artisanat local au Marché de Medina.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Lomé, Togo</h2>
                        <p>Visitez le Marché des Féticheurs, détendez-vous sur la plage de Lomé, et explorez les marchés animés du centre-ville.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Niamey, Niger</h2>
                        <p>Découvrez le Musée National du Niger, promenez-vous le long du fleuve Niger, et visitez le Grand Marché.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Conakry, Guinée</h2>
                        <p>Explorez les îles de Los, découvrez le Jardin du 2 Octobre, et visitez le Musée National de Sandervalia.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Porto-Novo, Bénin</h2>
                        <p>Plongez-vous dans la culture béninoise au Palais Royal d'Abomey, explorez le Musée Honmé, et découvrez l'histoire au Musée da Silva.</p>
                        <h2 class="mb-2" style="font-size: 19px; font-weight: 600;">Bamako, Mali</h2>
                        <p>Explorez la vieille ville de Djenné, découvrez la Mosquée de Djenné, et promenez-vous sur le marché traditionnel.</p>
                        <p>Avec Hupe comme votre guide de voyage, explorez ces destinations uniques au cœur de l'UEMOA. Téléchargez l'application dès maintenant et commencez votre aventure vers des expériences locales authentiques. Parce que chaque destination mérite d'être découverte, et Hupe vous y mènera avec style. Bon voyage !</p>


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
                              <img src="/public/assets/img/blog/4.jpg" class="img-fluid rounded-start w-75" alt="...">
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