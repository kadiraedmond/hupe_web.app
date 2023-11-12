<script setup>
import router from '@/router/router.js'

import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '@/firebase/firebase.js'
import Swal from 'sweetalert2'

import { useAuthStore } from '@/store/auth.js'

import { onMounted, ref } from 'vue'

const phoneNumber = ref()

const authStore = useAuthStore()

const logInWithPhoneNumber = async () => {
  const phoneNum =  `+${countryCode.value}${phoneNumber.value}`

  const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container')

  
  authStore.authenticate(auth, phoneNum, appVerifier)
  await appVerifier.verify().then(response => {
    authStore.setAppVerifier(appVerifier)
    authStore.setPhoneNum(phoneNum)
    if(response && authStore.errorMessage === '') {
      router.push('/otp')
    } else if(authStore.errorMessage !== '') {
      Swal.fire({
        title: "Erreur",
        text: `${authStore.errorMessage}`,
        icon: "error"
      })

      authStore.resetErrorMessage()
    }
  })
}

const countryCode = ref('')

const handleCountryChange = countryData => {
  countryCode.value = countryData.dialCode
}

onMounted(() => {
  window.scrollTo(0, 0)
})

const isCompanie = ref(false)
const isClient = ref(false)

const handleInput = () => {
  if(!isCompanie.value) {
    isCompanie.value = true
    authStore.setIsCompanie(true)
  } else if(isCompanie.value) {
    isCompanie.value = false
    authStore.setIsCompanie(false)
  }
}

const handleClient = () => {
  if(!isClient.value) {
    isClient.value = true
  } else {
    isClient.value = false
  }
}

</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px">
      <div class="container w-50">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 text-center">
                  <h5 class="card-title mt-5">Authentification</h5>
                  <img
                    src="/public/assets/img/auth.png"
                    class="img-fluid rounded-start w-25"
                    alt="..."
                    style="margin-top: 8px; object-fit: cover;"
                  />
                </div>
                <div class="col-md-12">
                  <!-- <div>
                    <input type="tel" ref="phoneInput">
                  </div> -->
                  <div class="card-body">
                    <p class="card-text text-center">
                      Veuillez entrer votre numero de telephone, nous vous
                      enverrons un code pour la vérification
                    </p>

                    <form @submit.prevent="logInWithPhoneNumber">
                      <div class="mb-2 text-center">
                        <label for="phoneNumber" class="form-label"
                          >Numéro de téléphone</label
                        >
                      </div>
                      <div class="mb-3 mx-5">
                        <vue-tel-input 
                          v-model="phoneNumber"
                          :enabledCountryCode="true"
                          @country-changed="handleCountryChange"
                         />
                      </div>

                      <div class="d-flex justify-content-between my-2">
                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2" for="gridRadios1">
                            Je suis un client
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleClient"
                            :checked="isClient"
                            required
                          />
                        </div>
                        <div class="" style="display: flex; flex-direction: column; align-items: center">
                          <label class="form-check-label mb-2 " for="gridRadios1">
                            Nous sommes une compagnie
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            @click="handleInput"
                            :checked="isCompanie"
                            required
                          />
                        </div>
                      </div>
                      
                      <div class="text-center">
                        <button
                          type="submit"
                          class="btn btn-primary mt-2"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "                      >
                          Se connecter
                        </button>
                      </div>
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
<style>
::placeholder {
  float: left;
}
</style>
