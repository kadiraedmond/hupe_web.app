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
            <div class="col-md-6" style="background: #d5f8e5; border-radius: 5px; padding: 20px;">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3>Verification</h3>
                </div>
                <div class="col-md-12 text-center">
                  <p>Veuillez saisir le code que nous venons de vous envoyer sur le numéro</p>
                </div>
                <div class="col-md-12 mt-4">
                  <form class="" action="verification.php" method="POST"> 
                    <div class="row d-flex">
                      <div class="col-md-12">
                        <input type="text" id="otp1" name="otp1" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="text" id="otp2" name="otp2" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="text" id="otp3" name="otp3" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="text" id="otp4" name="otp4" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="text" id="otp5" name="otp5" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="text" id="otp6" name="otp6" class="otp-input" pattern="\d" maxlength="1" required>
                        <br><br>
                      </div>
                    </div>     
                    <!-- <input type="submit" value="Vérifier"> -->
                    <div class="row text-center mt-3">
                      <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Vérifier</button>
                      </div> -->
                      <div class="col-md-12">
                        <router-link to="/choix_services">
                        <button type="" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Vérifier</button>
                      </router-link>
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
            <div class="col-md-6 text-center">
                <img src="/public/assets/img/otp.jpg" class="img-fluid rounded-start w-75" alt="...">
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