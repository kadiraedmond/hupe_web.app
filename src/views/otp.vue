<script setup>
import { onMounted, ref, defineProps  } from 'vue'

import { useAuthStore } from '@/store/auth.js'
import router from '@/router/router.js'

const otp1 = ref()
const otp2 = ref()
const otp3 = ref()
const otp4 = ref()
const otp5 = ref()
const otp6 = ref()

const joinedOTP = ref('')

const authStore = useAuthStore()

const handleOtp = async () => {
  joinedOTP.value = `${otp1.value}${otp2.value}${otp3.value}${otp4.value}${otp5.value}${otp6.value}`

  const verificationCode = joinedOTP.value

  const confirmationResult = authStore.confirmationResult
  
  const userCredential = await confirmationResult.confirm(verificationCode);
  const user = userCredential.user;

  authStore.setUser(user)

  document.querySelector('#otpInputForm').reset()
  router.push('/dashboard')
}

</script>

<template>
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
                  <form id="otpInputForm" @submit.prevent="handleOtp"> 
                    <div class="row d-flex">
                      <div class="col-md-12">
                        <input type="number" v-model="otp1" id="otp1" name="otp1" class="otp-input" pattern="\d" maxlength="1" required autoFocus>
                        <input type="number" v-model="otp2" id="otp2" name="otp2" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="number" v-model="otp3" id="otp3" name="otp3" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="number" v-model="otp4" id="otp4" name="otp4" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="number" v-model="otp5" id="otp5" name="otp4" class="otp-input" pattern="\d" maxlength="1" required>
                        <input type="number" v-model="otp6" id="otp6" name="otp4" class="otp-input" pattern="\d" maxlength="1" required>
                        <br><br>
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
</style>