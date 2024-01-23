<script setup>

import { useRoute } from "vue-router"
import { useI18n } from 'vue-i18n'

const route = useRoute()

const { t } = useI18n()

route.params.activeTab || 'home-tab'
const lien = route.params.activeTab
// export default {
//   name: "Footer",  
//   data() {
//     return {
//       activeTab: route.params.activeTab || 'home-tab',
      
//     };
//   },
  
// };

</script>
<template>
     <!-- ======= Footer ======= -->
  <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">

      <div class="col footer-links">
        <h4>{{ t('news') }}</h4>
        <ul>
          <li><router-link to="/informations">{{ t('faq') }}</router-link></li>
          <li><router-link to="/informations">{{ t('who_we_are') }}</router-link></li>
          <li><router-link to="/informations">{{ t('ccm') }}</router-link></li>
          
          <!-- <li><router-link :to="`/informations/${`profile-tab`}`"> Blog</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'Informations', params: { activeTab: 'profile-tab' } }"> Blog</router-link></li> -->
          <li><router-link to="/informations">Blog</router-link></li>
          <li><router-link to="/informations">{{ t('accessibility') }}</router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>{{ t('client_services') }} </h4>
        <ul>
          <li><router-link to="/service_client">Support</router-link></li>
          <li><router-link to="/service_client">{{ t('help') }}</router-link></li>
          <li><router-link to="/service_client">Contact</router-link></li>
          <li><router-link to="/service_client">{{ t('partener_conditions') }} </router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>{{ t('utils_links') }} </h4>
        <ul>
          <li> <router-link to="/services">{{ t('vehicles_location') }} </router-link></li>
          <li> <router-link to="/services">{{ t('ticket_reservation') }}  </router-link></li>
          <li> <router-link to="/services">{{ t('big_engins_location') }} </router-link></li>
          <li> <router-link to="/services">{{ t('vehicles_sale') }} </router-link></li>
          <li> <router-link to="/partenaire_par_pays">{{ t('countries_parteners') }}  </router-link></li> 
          <li> <router-link to="/pour_partenaire">{{ t('for_parteners') }} </router-link></li>
          <li> <router-link to="/pour_client">{{ t('for_clients') }} </router-link></li>
         

        </ul>
      </div>


      <div class="col footer-links">
        <h4>{{ t('legal') }}</h4>
        <ul>

          <li><router-link to="/legales">{{ t('privacy_policy') }}</router-link></li>
          <li><router-link to="/legales">{{ t('security_policy') }} </router-link></li>
          <li><router-link to="/legales">{{ t('terms_conditions') }} </router-link></li>
          <li><router-link to="/legales">{{ t('copyright') }} </router-link></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>{{ t('find_us_on') }}</h4>
        <div class="social-links text-md-right pt-0 pt-md-0">
          <a href="https://twitter.com/Hupeafrica" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100088080067301" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/hupeafrica/" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCh07rr8p-XHo0zrmZfFQd1w" class="google-plus"><i class="bx bxl-youtube"></i></a>
          <a href="https://www.linkedin.com/showcase/91588607" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <div class="col footer-links">
        <h4>{{ t('payment_modes') }}</h4>
        <ul>
          <li><a href="#"> Mobile money </a></li>
          <li> <a href="#">{{ t('bank_card') }}</a></li>
          <li> <a href="#"> CinetPay</a></li>
          <li> <a href="#"></a></li>
        </ul>
      </div>

      <div class="col footer-links">
        <h4>{{ t('mobile_apps') }} </h4>
        <ul>
          <li> <router-link to="/application">Hupe</router-link></li>
          <li> <router-link to="/application">Hupe pro</router-link></li>
          <li> <router-link to="/application">Hupe Scan</router-link></li>

        </ul>
      </div>

    </div>
  </div>
</div>

<div class="container d-md-flex py-4" style="padding-top: 0.8rem!important; padding-bottom: 0.8rem!important;">

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