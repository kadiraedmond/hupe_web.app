<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>

  <main id="main">

 <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" style="margin-top: 80px;">
        <div class="container">
  
          <div class="row g-2">
            <div class="col-lg-6">
                <img src="/public/assets/img/res.jpg" alt="" class="img-fluid w-75" style="border-radius: 5px;">
            </div>
            <div class="col-lg-6">
               <h1 style="font-size: 54px;">Reserver un tickets de bus</h1>
               <p class="mt-4">Lorem ipsum dolor sit amet. Sed possimus architecto sit reprehenderit dicta qui eius laboriosam! Aut quia suscipit qui quod minima sit quidem voluptatum sit ullam odit ad nihil quasi.
                Aut quia suscipit qui quod minima sit quidem voluptatum sit ullam odit ad nihil quasi.
               </p>
            </div>
          </div>    
        </div>
    </section>
 <!-- End Portfolio Details Section -->

 <section id="features" class="features mt-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                 <img src="/public/assets/img/reserv.jpg" alt="" class="img-fluid w-100 h-75" style="border-radius: 5px; height: 500px !important; object-fit: cover; margin-top: -13px;" >
            </div>
            <div class="col-md-6">
                <form class="row g-3 needs-validation" novalidate style="background: #21993552; padding: 10px; border-radius: 5px;">
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Prénoms</label>
                        <input type="text" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-md-12">
                        <label for="validationCustom01" class="form-label">Ville de départ</label>
                        <input type="text" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-md-12">
                        <label for="validationCustom01" class="form-label">Ville d'arrivée</label>
                        <input type="text" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Date de départ</label>
                        <input type="date" class="form-control" id="validationCustom01"  required>
                        
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Heure de départ</label>
                        <input type="time" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-md-12">
                        <label for="validationCustom01" class="form-label">Nombres de personnes</label>
                        <input type="number" class="form-control" id="validationCustom01"  required>
                        
                    </div>

                    <div class="col-12 text-center">
                        <button class="btn btn-primary" type="submit" style="background: #219935;
                        border-color: #219935;">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
 </section>


  </main>
    <!-- End #main -->
   

  <Footer></Footer>
    
</template>
<style>
</style>