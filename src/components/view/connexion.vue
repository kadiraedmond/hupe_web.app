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
          <div class="col-md-8">
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="assets/img/auth.png" class="img-fluid rounded-start w-100" alt="..." style="margin-top: 25px;">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Authentification</h5>
                    <p class="card-text">Veuillez entrer votre numero de telephone, nous vous enverrons un code pour la vérification</p>

                   <form>
                    <div class="mb-3">
                        <label for="countryCode" class="form-label">Code du pays</label>
                        <div class="input-group">
                            <span class="input-group-text">
                                <img v-bind:src="selectedFlag" alt="Selected Flag" class="flag-icon">
                            </span>
                            <select class="form-select country-code" id="countryCode" v-model="selectedCode">
                                <option value="1">+1 (USA)</option>
                                <option value="33">+33 (France)</option>
                                <!-- Ajoutez d'autres options pour d'autres pays -->
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="phoneNumber" class="form-label">Numéro de téléphone</label>
                        <input type="tel" class="form-control" id="phoneNumber" placeholder="Entrez votre numéro de téléphone">
                    </div>
                    <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Se connecter</button>
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