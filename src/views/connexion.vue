<script setup>
// import intlTelInput from "intl-tel-input";
// import "intl-tel-input/build/css/intlTelInput.css";

import router from '@/router/router.js'

import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '@/firebase/firebase.js'

import { onMounted, ref } from 'vue'
import { getConfirmation } from '@/utils/index.js'


const phoneNumber = ref()

// onMounted(() => {
//   // Initialisez le composant intl-tel-input dans le hook mounted
//   const input = this.$refs.phoneInput;
//   const iti = intlTelInput(input, {
//     separateDialCode: true,
//     initialCountry: "auto", // Définissez le pays initial sur "auto"
//   });

//   // Écoutez les changements pour obtenir le numéro de téléphone sélectionné
//   iti.promise.then((countryData) => {
//     console.log("Indice du pays :", countryData.iso2);
//     console.log("Numéro de téléphone :", iti.getNumber());
//   });
// })

const logInWithPhoneNumber = async () => {
  const phoneNum =  `+${countryCode.value}${phoneNumber.value}`

  const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container')

  const confirmationResult = await signInWithPhoneNumber(auth, phoneNum, appVerifier)

  getConfirmation(auth, phoneNum)
  localStorage.setItem('confirmationResult', JSON.stringify(confirmationResult))
  router.push('/otp')
}

const countryCode = ref('')

const handleCountryChange = countryData => {
  countryCode.value = countryData.dialCode
}

</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/public/assets/img/auth.png"
                    class="img-fluid rounded-start w-100"
                    alt="..."
                    style="margin-top: 25px"
                  />
                </div>
                <div class="col-md-8">
                  <!-- <div>
                    <input type="tel" ref="phoneInput">
                  </div> -->
                  <div class="card-body">
                    <h5 class="card-title">Authentification</h5>
                    <p class="card-text">
                      Veuillez entrer votre numero de telephone, nous vous
                      enverrons un code pour la vérification
                    </p>

                    <form @submit.prevent="logInWithPhoneNumber">
                      <div class="mb-3">
                        <label for="phoneNumber" class="form-label"
                          >Numéro de téléphone</label
                        >
                      </div>
                      <div class="mb-3">
                        <!-- <input
                          type="number"
                          class="form-control"
                          v-model="phoneNumber"
                          id="phoneNumber"
                          placeholder="Entrez votre numéro de téléphone avec l'indicatif (+33 ...)"
                          ref="phoneInput"
                        /> -->
                        <vue-tel-input 
                          v-model="phoneNumber"
                          :enabledCountryCode="true"
                          @country-changed="handleCountryChange"
                         />
                      </div>
                      
                      <button
                        type="submit"
                        class="btn btn-primary mt-2"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "                      >
                        Se connecter
                      </button>
                      <div id="recaptcha-container"></div>
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
</template>
<style></style>
