<script setup>
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import router from '@/router/router.js'

import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '@/firebase/firebase.js'

import { onMounted, ref } from 'vue'

const phoneNumber = ref()

onMounted(() => {
  // Initialisez le composant intl-tel-input dans le hook mounted
  const input = this.$refs.phoneInput;
  const iti = intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "auto", // Définissez le pays initial sur "auto"
  });

  // Écoutez les changements pour obtenir le numéro de téléphone sélectionné
  iti.promise.then((countryData) => {
    console.log("Indice du pays :", countryData.iso2);
    console.log("Numéro de téléphone :", iti.getNumber());
  });
})

const logInWithPhoneNumber = async () => {

  const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container')

  const confirmationResult = await signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier);

  router.push('/otp')
  const verificationCode = prompt('Entrez le code de vérification reçu par SMS : ');

  const userCredential = await confirmationResult.confirm(verificationCode);
  const user = userCredential.user;
  // try {    

  //   console.log('Utilisateur connecté :', user);
  // } catch (error) {
  //   console.error('Erreur lors de la connexion :', error.message);
  // }
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

                    <form>
                      <div class="mb-3">
                        <label for="phoneNumber" class="form-label"
                          >Numéro de téléphone</label
                        >
                      </div>
                      <div class="mb-3">
                        <input
                          type="number"
                          class="form-control"
                          v-model="phoneNumber"
                          id="phoneNumber"
                          placeholder="Entrez votre numéro de téléphone avec l'indicatif (+33 ...)"
                          ref="phoneInput"
                        />
                      </div>
                      <router-link to="/otp">
                        <button
                          type="submit"
                          class="btn btn-primary mt-2"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                          @click="logInWithPhoneNumber"
                        >
                          Se connecter
                        </button>
                        <div id="recaptcha-container"></div>
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
</template>
<style></style>
