<script>
export default{
        name:"Footer"
    };
    
 
</script>
<template>
     <!-- ======= Footer ======= -->
  <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">

      <div class="col footer-links">
        <h4>Informations</h4>
        <ul>
          <li><router-link to="/informations">Foire aux questions</router-link></li>
          <li><router-link to="/informations">Qui sommes nous</router-link></li>
          <li><router-link to="/informations">Comment ça marche</router-link></li>
          <li><router-link to="/informations">Blog</router-link></li>
          <li><router-link to="/informations">Accessibilité</router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>Services clients </h4>
        <ul>
          <li><router-link to="/service_client">Support</router-link></li>
          <li><router-link to="/service_client">Aide</router-link></li>
          <li><router-link to="/service_client">Contact</router-link></li>
          <li><router-link to="/service_client">Condition de partenariat </router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>Liens utiles </h4>
        <ul>
          <li> <router-link to="{ name: 'Service', hash: '#contact-tab-pane' }">Location de véhicules </router-link></li>
          <li> <router-link to="/services">Réservations de tickets de bus  </router-link></li>
          <li> <router-link to="/services">Location de gros en engin </router-link></li>
          <li> <router-link to="/services">Vente de véhicule </router-link></li>
          <li> <router-link to="/services">Partenaires par pays  </router-link></li> 
          <li> <router-link to="/pour_partenaire">Pour les partenaires </router-link></li>
          <li> <router-link to="/pour_client">Pour les clients </router-link></li>
         

        </ul>
      </div>


      <div class="col footer-links">
        <h4>Légales</h4>
        <ul>

          <li><router-link to="/legales">Politiques de confidentialité</router-link></li>
          <li><router-link to="/legales">Politique de sécurité </router-link></li>
          <li><router-link to="/legales">Terme et conditions </router-link></li>
          <li><router-link to="/legales">Droit d’auteur </router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>Retrouvez-nous sur</h4>
        <div class="social-links text-md-right pt-0 pt-md-0">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-youtube"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <div class="col footer-links">
        <h4>Modes de paiement</h4>
        <ul>
          <li><a href="#">Mobile money </a></li>
          <li> <a href="#">Carte bancaire</a></li>
          <li> <a href="#">Cinetpay</a></li>
          <li> <a href="#"></a></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>Applications mobiles </h4>
        <ul>
          <li> <router-link to="/application">Hupe</router-link></li>
          <li> <router-link to="/application">Hupe pro</router-link></li>
          <li> <router-link to="/application">Hupe Scan</router-link></li>

        </ul>
      </div>

    </div>
  </div>
</div>

<div class="container d-md-flex py-4">

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      Copyright &copy; 2023 <strong><span>Hupe </span></strong> | All right reserved
    </div>

  </div>

</div>
</footer>
<!-- End Footer -->
</template>
<style scoped>
 
</style>