<script setup>
import { onMounted, ref } from 'vue'

import { useAuthStore } from '@/store/auth.js'
import router from '@/router/router.js'
import Loader from '@/components/Loader.vue'

const authStore = useAuthStore()

const isLoading = ref(false)

onMounted(() => {
  window.scrollTo(0, 0)
})

const handleOnComplete = async (value) => {
  isLoading.value = true
  const verificationCode = `${value}`

  const confirmationResult = authStore.confirmationResult
  
  const userCredential = await confirmationResult.confirm(verificationCode)
  const user = userCredential.user

  if(user) {
    authStore.setUser(user)
    localStorage.setItem('user', JSON.stringify(user))

    console.log(authStore.user.stsTokenManager.accessToken)

    if(authStore.isNew === true) {
      router.push('/choix_services')
    } else if(authStore.isNew === false) {
      if(user.type_compagnie) {
        if(user.type_compagnie == 'Location') {
          router.push('/compte_vehicule')
        } else if(user.type_compagnie == 'Transport') {
          router.push('/compte_reservation')
        }
      } else {
        router.push('/compte_client')
      }
    }
  
  }
}

</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px;">
      <div class="container">
        <div class="row">
            <div class="col-md-6" style="background: #d5f8e5; border-radius: 5px; padding: 20px;">
              <div class="row mt-5">
                <div class="col-md-12 text-center">
                  <h3>Vérification</h3>
                </div>
                <div class="col-md-12 text-center">
                  <p>Veuillez saisir le code que nous venons de vous envoyer sur le numéro</p>
                </div>
                <div class="col-md-12 mt-3">
                  <div class="d-flex justify-content-center">
                    <v-otp-input
                      ref="otpInput"
                      input-classes="otp-input"
                      separator=""
                      :num-inputs="6"
                      :should-auto-focus="true"
                      input-type="numeric"
                      @on-complete="handleOnComplete"
                    />

                    <Loader 
                      style="position: absolute; left: 24%; top: 35%"
                      v-if="isLoading" 
                    />
                  </div>
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
</template>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>