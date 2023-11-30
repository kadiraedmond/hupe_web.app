<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'

import { useAuthStore } from '@/store/auth.js'
import { auth } from '@/firebase/firebase.js'
import router from '@/router/router.js'
import Loader from '@/components/Loader.vue'
import Swal from 'sweetalert2'
import { firestoreDb } from "@/firebase/firebase.js"
import { updateDoc } from "firebase/firestore"

const authStore = useAuthStore()

const isLoading = ref(false)
const isNew = ref(false)
const isCompanie = ref(false)
const phoneNum = ref('')
const appVerifier = ref({})

onBeforeMount(() => {
  isNew.value = authStore.isNew
  isCompanie.value = authStore.isCompanie
  phoneNum.value = authStore.phoneNum
  appVerifier.value = authStore.appVerifier
})
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

    if(authStore.isNew && authStore.user !== {}) {
      localStorage.setItem('user', JSON.stringify(authStore.user)) 
    } 

    if(!authStore.isNew && authStore.user !== {}) {
      localStorage.setItem('user', JSON.stringify(authStore.user)) 
    }

    // console.log(authStore.user.stsTokenManager.accessToken) 
    const savedUser = JSON.parse(localStorage.getItem('user'))

    if(authStore.isNew && authStore.isCompanie) {
      router.push('/choix_services') 
      return 

    } 
    
    if(!authStore.isNew && authStore.isCompanie) { 
      if((savedUser.raison_social || savedUser.type_compagnie) && savedUser.status == 'active') { 

        if(savedUser.type_compagnie == 'Location') {
          await router.push('/compte_vehicule') 
          window.location.reload() 
          return 
        } 
        
        if(savedUser.type_compagnie == 'Transport') {
          await router.push('/compte_reservation') 
          window.location.reload() 
          return 
        }
        
      } 
      
      if((savedUser.raison_social || savedUser.type_compagnie) && savedUser.status == 'padding') {
        await router.push('/confirmation') 
        window.location.reload() 
        return 
      }

    } 
    
    if(!authStore.isCompanie && authStore.isNew) { 
      const docRef = doc(firestoreDb, 'users', user.uid)
      await updateDoc(docRef, { token: user.stsTokenManager.accessToken })
      await router.push('/information-client') 
      window.location.reload() 
      return 

    } 
    
    if(!authStore.isCompanie && !authStore.isNew) {
      await router.push('/compte_client') 
      window.location.reload() 
      return 
    }
  
  }
}

const resendCode = async () => {
  Swal.fire({
    title: "Envoie du code de vérification",
    text: "Le code a été envoyé avec succès",
    icon: "success"
  })
  authStore.authenticate(auth, phoneNum.value, appVerifier.value)
}

</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px;">
      <div class="container">
        <div class="row">
            <div class="col-md-3 text-center">
              
            </div>
            <div class="col-md-6" style="background: white; border-radius: 5px; padding: 20px; border: 1px solid #219935;" >
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
                      style="position: absolute; left: 44.8%; top: 28%"
                      v-if="isLoading" 
                    />
                  </div>
                </div>
                <div class="col-md-12 text-center mt-3">
                  <p>Je n'ai pas reçu de message</p>
                    <button id="resend-btn" class="btn btn-primary" @click="resendCode">Renvoyer le code</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 text-center">
                
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

#resend-btn {
  border: 1.5px solid #219935;
  background: transparent;
  color: #000;
}

#resend-btn:hover {
  background: #219935;
  color: #FFF;
  
}
</style>