<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
 
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default {
  mounted() {
    // Initialisez le composant intl-tel-input dans le hook mounted
    const input = this.$refs.phoneInput;
    const iti = intlTelInput(input, {
      separateDialCode: true,
      initialCountry: 'auto', // Définissez le pays initial sur "auto"
    });

    // Écoutez les changements pour obtenir le numéro de téléphone sélectionné
    iti.promise.then((countryData) => {
      console.log('Indice du pays :', countryData.iso2);
      console.log('Numéro de téléphone :', iti.getNumber());
    });
  },
};
 
</script>

<template>
  <Navbar></Navbar>

  <main id="main">

  

    <section id="features" class="features" style="margin-top: 100px;">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="/public/assets/img/auth.png" class="img-fluid rounded-start w-100" alt="..." style="margin-top: 25px;">
                </div>
                <div class="col-md-8">
                  <!-- <div>
                    <input type="tel" ref="phoneInput">
                  </div> -->
                <div class="card-body">
                    <h5 class="card-title">Authentification</h5>
                    <p class="card-text">Veuillez entrer votre numero de telephone, nous vous enverrons un code pour la vérification</p>
                    

                   <form>
                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label">Numéro de téléphone</label>
                       
                    </div>
                    <div class="mb-3">
                        
                        <input type="tel" class="form-control" id="phoneNumber" placeholder="Entrez votre numéro de téléphone" ref="phoneInput">
                    </div>
                    <router-link to="/otp">
                     <button type="submit" class="btn btn-primary mt-2" style="background-color: #219935; border-color: #219935;">Se connecter</button>
                    </router-link>
                    <!-- <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Se connecter</button> -->
                </form>
                    
                </div>
                </div>
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