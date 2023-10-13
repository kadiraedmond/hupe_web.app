<script setup>
import { onMounted, ref, defineProps  } from 'vue'

import { useConfirmation } from '@/utils/index.js'
const otp1 = ref()
const otp2 = ref()
const otp3 = ref()
const otp4 = ref()
const otp5 = ref()
const otp6 = ref()

const joinedOTP = ref()

const handleOtp = async () => {
  joinedOTP.value = Number(`${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`)

  const verificationCode = joinedOTP.value

  const confirmationResult = useConfirmation()

  // const confirmationResult = JSON.parse(localStorage.getItem('confirmationResult'))

  const userCredential = await confirmationResult.confirm(verificationCode);
  const user = userCredential.user;

  console.log(user)
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
                  <form @submit.prevent="handleOtp"> 
                    <div class="row d-flex">
                      <div class="col-md-12">
                        <input type="number" v-model="otp1" id="otp1" name="otp1" class="otp-input" pattern="\d" maxlength="1" required>
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