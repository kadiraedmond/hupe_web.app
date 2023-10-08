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
               <h1 style="font-size: 54px;">Services hupe</h1>
               <p class="mt-4">Lorem ipsum dolor sit amet. Sed possimus architecto sit reprehenderit dicta qui eius laboriosam! Aut quia suscipit qui quod minima sit quidem voluptatum sit ullam odit ad nihil quasi.
                Aut quia suscipit qui quod minima sit quidem voluptatum sit ullam odit ad nihil quasi.
               </p>
            </div>
          </div>    
        </div>
      </section>
      <!-- End Portfolio Details Section -->

    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            
          </div>

        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
              <a href="" class="mt-4">
                  <img src="/public/assets/img/car.png" class="img-fluid w-25" alt="...">
              </a>
              
              <div class="card-body">
                <h5 class="card-title" style="font-size: 17px;">Louer un véhicule </h5>
                <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
              </div>
            </div>
          </div>
          <div class="col"></div>
          <div class="col">
              <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                <a href="" class="mt-4">
                    <img src="/public/assets/img/bus.png" class="img-fluid w-25" alt="...">
                </a>
                
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 17px;">Reserver un ticket de bus</h5>
                  <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                </div>
              </div>
          </div>
          <div class="col"></div>
          <div class="col">
              <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                <a href="" class="mt-4">
                    <img src="/public/assets/img/engin.png" class="img-fluid w-25" alt="...">
                </a>
                
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 17px;">Gros engin</h5>
                  <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                </div>
              </div>
          </div>
          <div class="col"></div>
          <div class="col">
              <div class="card h-100 border-0 text-center" style="background:#f6f8fb;">
                <a href="" class="mt-4">
                    <img src="/public/assets/img/engine.png" class="img-fluid w-25" alt="...">
                </a>
                
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 17px;">Acheter un engin</h5>
                  <p class="card-text" style="font-size: 14px;">Évitez les files d'attente et réservez vos billets de bus en quelques instants.</p>
                </div>
              </div>
           </div>
           <div class="col"></div>
        </div>
      </div>
    </section>




 </main>
    <!-- End #main -->
   

  <Footer></Footer>
    
</template>
<style>
</style>