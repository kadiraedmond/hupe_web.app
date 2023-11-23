<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import router from '@/router/router.js'
import { useAuthStore } from '@/store/auth.js'
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const savedUser = JSON.parse(localStorage.getItem('user'))

let docRef
onMounted(() => {
  window.scrollTo(0, 0)
  docRef = doc(firestoreDb, 'compagnies', authStore.uniqueIdentifier)
})

let companieService
let offre
let offre2
let userToken
let new_uid
onBeforeMount(() => {
  companieService = authStore.companieService
  offre = authStore.offre
  offre2 = authStore.offre2
  new_uid = savedUser.uid || authStore.user.uid 
  userToken = savedUser.stsTokenManager.accessToken || authStore.user.stsTokenManager.accessToken
  // console.log(authStore.user.stsTokenManager.accessToken)
})

const raison_social = ref('')
const responsable = ref('')
const addresse = ref('')
const description = ref('')
const image_couverture = ref()
const image_logo = ref()
const email = ref('')

const isUploading = ref(false)

const uploadBanner = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `compagniesImages/${new_uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image_couverture.value = downloadURL
    isUploading.value = false
  }
}

const uploadProfilePicture = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `compagniesImages/${new_uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image_logo.value = downloadURL
    isUploading.value = false
  }
}

const handleSubmit = async () => {
  await updateDoc(docRef, {
    adresse: addresse.value, 
    email: email.value, 
    raison_social: raison_social.value,
    responsable: responsable.value,
    description: description.value,
    imageCouvertureUrl: image_couverture.value || '', 
    imageLogoUrl: image_logo.value || '', 
    offre: offre !== '' ? offre : offre2 || '', 
    token: userToken || '',
    type_compagnie: companieService || '',
  })
  .then(() => console.log('Document ajouté'))
  
  const snapshot = await getDoc(docRef)
  let user
  if(snapshot.exists()) user = snapshot.data()
  authStore.setUser(user)
  localStorage.setItem('user', JSON.stringify(user)) 

  router.push('/confirmation') 

  // switch(companieService) {
  //   case 'Location':
  //     router.push('/compte_vehicule')
  //     break
  //   case 'Transport': 
  //     router.push('/compte_reservation')
  //     break
  //   case 'Gros Engins': 
  //     router.push('/compte_gros_engin')
  //     break
  //   case 'Vente Véhicules': 
  //     router.push('/compte_achat_engin')
  //     break
  //   default: 
  //     router.push('/')
  //     break
  // }
  
  // if(authStore.companieService == 'Location') {
  //   router.push('/compte_vehicule')
  // } else if(authStore.companieService == 'Transport') {
  //   router.push('/compte_reservation')
  // } else if(authStore.companieService == 'Gros Engins') {
  //   router.push('/compte_gros_engin')
  // } else if(authStore.companieService == 'Vente Véhicules') {
  //   router.push('/compte_achat_engin')
  // }
}
</script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 50px">
      <div class="container mt-2 mb-5">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                
                <li class=" active w-25 text-center" aria-current="page"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">1</button> Téléphone</li>
                <li class=" w-25 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">2</button>Choix de services</li>
                <li class=" w-25 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: white;border-color: #219935 ;color: #219935;">3</button>Choix offres</li>
                <li class="breadcrumb-item  w-25 text-center"> <button class="btn btn-primary" style="border-radius: 50%; width: 40px; height: 40px; margin-right: 10px;background: #219935;border-color: #219935">4</button>Informations</li>
                
                <!-- Ajoutez plus d'étapes si nécessaire -->
              </ol>
            </nav>
          </div>
          <div class="col-md-1"></div>
        </div>
            
      </div>
            
      <div class="container">
        <div class="row">
          <div class="col-md-3">
           
             
            </div>
          <div
            class="col-md-6"
            style="
            /* background: #d5f8e5 */
             border-radius: 5px; padding: 20px ;
            border: 1px solid #219935;"
          >
            <div class="col-md-12 text-center">
              <p style="font-weight: 700">
                Complétez les informations de votre compagnie
              </p>
            </div>
            <form @submit.prevent="handleSubmit" id="form" class="row g-3">
              <div class="col-md-12">
                <label for="text" class="form-label">Raison sociale </label>
                <input type="text" v-model="raison_social" class="form-control" id="inputEmail4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Responsable </label>
                <input type="text" v-model="responsable" class="form-control" id="inputPassword4" required />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Email </label>
                <input type="email" v-model="email" class="form-control" id="inputPassword4" required />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Addresse</label>
                <input
                  type="text"
                  v-model="addresse"
                  class="form-control"
                  id="inputAddress"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label"
                  >Description</label
                >
                <textarea type="text" v-model="description" class="form-control" id="inputAddress2" required>
                </textarea>
              </div>
              <div class="col-md-12">
                <label for="inputCity" class="form-label"
                  >Images de couverture</label
                >
                <input type="file" accept="image/*" v-on:change="uploadBanner" class="form-control" id="inputCity" />
              </div>

              <div class="col-md-12">
                <label for="inputCity" class="form-label">Logo</label>
                <input type="file" accept="image/*" v-on:change="uploadProfilePicture" class="form-control" id="inputCity" />
              </div>
              

              <div class="row text-center mt-4">
                    <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="background-color: #219935; border-color: #219935;">Valider</button>
                      </div> -->
                      <div class="col-md-6 text-start">
                        <router-link to="/choix_offres">
                          <button
                        
                        class="btn btn-primary "
                        style="
                          background-color: white;
                          color: #219935;
                          border-color: #219935 ; width: 30%;
                        "
                      >
                      <i class='bx bx-left-arrow-alt' ></i>   Précédent 
                      </button>
                        </router-link>
                     
                    </div>
                    <div class="col-md-6 text-end">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                          width: 30%;
                        "
                        :disabled="isUploading"
                      >
                        Terminer  <i class='bx bx-check'></i> 
                      </button>
                    </div>
                  </div>

              <!-- <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div> -->
            </form>
          </div>
          <div class="col-md-3">
             
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style></style>
