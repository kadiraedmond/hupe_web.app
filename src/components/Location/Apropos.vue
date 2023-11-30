<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue" 

import { addDoc, doc, updateDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb, storage } from '@/firebase/firebase.js' 
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2' 

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid 

const raison_social = ref('') 
const responsable = ref('') 
const description = ref('') 
const mail = ref('') 
const phone = ref('') 
const pays = ref('') 
const lieu = ref('') 
const photo_profil = ref('') 
const photo_couverture = ref('') 

onBeforeMount(async () => {
  await companieStore.setCompanieById(userId) 

  raison_social.value = companieStore.companie.raison_social 
  responsable.value = companieStore.companie.responsable 
  mail.value = companieStore.companie.email 
  phone.value = companieStore.companie.telephone 
  lieu.value = companieStore.companie.adresse 
  description.value = companieStore.companie.description 
  pays.value = companieStore.companie.country 

})

onMounted(() => {
  window.scrollTo(0, 0)
}) 

const isUploading = ref(false) 

const uploadPicture = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `compagniesImages/${userId}/${file.name}`)
  
  await uploadBytes(storageRef, file)

  const downloadURL = await getDownloadURL(storageRef)
  if(!downloadURL) {
    isUploading.value = true
  } else {
    photo_couverture.value = downloadURL
    isUploading.value = false
  }
}

const uploadProfilePicture = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `compagniesImages/${userId}/${file.name}`)
  
  await uploadBytes(storageRef, file)

  const downloadURL = await getDownloadURL(storageRef)
  if(!downloadURL) {
    isUploading.value = true
  } else {
    photo_profil.value = downloadURL
    isUploading.value = false
  }
} 

const handleSubmit = async () => {
  const docRef = doc(firestoreDb, 'compagnies', `${userId}`) 
  
  const data = {
    raison_social: raison_social.value, 
    responsable: responsable.value, 
    email: mail.value, 
    telephone: phone.value, 
    country: pays.value, 
    adresse: lieu.value, 
    imageLogoUrl: photo_profil.value !== '' ? photo_profil.value : companieStore.companie.imageLogoUrl, 
    imageCouvertureUrl: photo_couverture.value !== '' ? photo_couverture.value : companieStore.companie.imageCouvertureUrl 
  } 

  try {
    await updateDoc(docRef, data) 
    
    Swal.fire({
      title: "Succès",
      text: "Informations misent à jour",
      icon: "success"
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="card h-100" id="card_compagnie">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <p><strong>Raison sociale |</strong> {{ companieStore.companie.raison_social }}</p>

              <p><strong> Responsable |</strong>  {{ companieStore.companie.responsable }}</p>
            </div>

            <!-- <div
              class="row row-cols-1 row-cols-md-4 mb-4 g-4"
              style="margin-top: -5px"
            >
              <div class="col">
                <div class="card h-100 text-center border-0">
                  <div class="row mt-4" style="justify-content: center">
                    <img
                      src="/assets/img/icone/mail.png"
                      class="img-fluid"
                      alt="..."
                      style="width: 64px"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.adresse_mail }}
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 text-center border-0">
                  <div class="row mt-4" style="justify-content: center">
                    <img
                      src="/assets/img/icone/web.png"
                      class="img-fluid"
                      alt="..."
                      style="width: 64px"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.site_web }}
                    </h5>
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.telephone }}
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 text-center border-0">
                  <div class="row mt-4" style="justify-content: center">
                    <img
                      src="/assets/img/icone/maps.png"
                      class="img-fluid"
                      alt="..."
                      style="width: 64px"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.adresse }}
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 text-center border-0">
                  <div class="row mt-4" style="justify-content: center">
                    <img
                      src="/assets/img/icone/location.png"
                      class="img-fluid"
                      alt="..."
                      style="width: 64px"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.latitude }} {{ companieStore.companie.longitude }}
                    </h5>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="row">
            <div class="col-md-12">
              <form @submit.prevent="handleSubmit" class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">Raison sociale </label>
                  <input type="text" class="form-control" id="validationCustom01" v-model="raison_social" >
                  
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">Responsable</label>
                  <input type="text" class="form-control" id="validationCustom02" v-model="responsable" >
                  
                </div>

                

                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">Description </label>
                  <input type="text" class="form-control" id="validationCustom01" v-model="description" >
                  
                </div>

                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">Email</label>
                  <input type="email" class="form-control" id="validationCustom02" v-model="mail" >
                  
                </div>
                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Téléphone</label>
                  <div class="input-group has-validation">
                    <input v-model="phone" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Pays</label>
                  <div class="input-group has-validation">
                    <input v-model="pays" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"> 
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Adresse</label>
                  <div class="input-group has-validation">
                    <input v-model="lieu" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                    
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Image de couverture</label>
                  <div class="input-group has-validation">
                    <input v-on:change="uploadPicture" type="file" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                    
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Logo</label>
                  <div class="input-group has-validation">
                    <input v-on:change="uploadProfilePicture" type="file" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                    
                  </div>
                </div>

                <div class="col-12 text-end">
                  <button class="btn btn-primary" type="submit" :disabled="isUploading" style="background-color: #219935; border-color: #219935;">Enregistrer</button>
                </div>
              </form>
            </div>
          </div>

          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
