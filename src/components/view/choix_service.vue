<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>

  <main id="main">

  

    <section id="features" class="features" style="margin-top: 100px;">
      <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="background: #d5f8e5; border-radius: 5px; padding: 20px;">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3>Verification</h3>
                </div>
                <div class="col-md-12 text-center">
                  <p>Veuillez saisir le code que nous venons de vous envoyer sur le numéro</p>
                </div>
                <div class="col-md-12 mt-4">
                  <form class="" action="verification.php" method="POST"> 
                    <div class="row">
                      <div class="col-md-3"> 
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                            <label class="form-check-label" for="gridRadios1">
                            First radio
                            </label>
                        </div> 
                      </div>
                      <div class="col-md-3">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                            <label class="form-check-label" for="gridRadios1">
                            First radio
                        </label>  
                      </div>
                      <div class="col-md-3">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                            <label class="form-check-label" for="gridRadios1">
                            First radio
                            </label>
                      </div>
                    </div>     
                    <!-- <input type="submit" value="Vérifier"> -->
                    <div class="row text-center mt-3">
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Vérifier</button>
                      </div>
                    </div>
                </form>
                </div>
                <div class="col-md-12 text-center mt-3">
                  <p>Je n'ai pas reçu de message</P>
                    <p><a href=""> Renvoyer le code</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
            
             
            
        </div>
     
       </div>
    </section>




 </main>
    <!-- End #main -->
   

  <Footer></Footer>

  
    
</template>
<style>
</style>