<script setup>
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, ref } from "vue"

import { addDoc, updateDoc, doc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb, storage } from '@/firebase/firebase.js' 
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { toast } from "vue3-toastify" 
import Swal from 'sweetalert2' 

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid 

const nom = ref('')
const prenom = ref('')
const photo_profil = ref('')
const date_nais = ref()
const profess = ref('')
const mail = ref('')
const phone = ref('')
const pays = ref('')
const lieu = ref('')
const nom_utilisteur = ref('')


onBeforeMount(async () => {
  await userStore.setUser(userId) 
  
  const { lastName, firstName, imageUrl, dateNaisse, profession, email, telephone, country, addresse, username } = userStore.user

  nom.value = lastName
  prenom.value = firstName
  photo_profil.value = imageUrl
  date_nais.value = dateNaisse
  profess.value = profession
  mail.value = email
  phone.value = telephone
  pays.value = country
  lieu.value = addresse
  nom_utilisteur.value = username

})
const isUploading = ref(false)

const uploadProfilePicture = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `usersImages/${file.name}`)
  
  // Mettre le fichier dans le stockage de Firebase
  await uploadBytes(storageRef, file)

  // Récupérer l'URL du fichier téléchargé
  const downloadURL = await getDownloadURL(storageRef)
  if(!downloadURL) {
    isUploading.value = true
  } else {
    photo_profil.value = downloadURL
    isUploading.value = false
  }
}

const handleSubmit = async () => {
  const userDocRef = doc(firestoreDb, 'users', `${userId}`)

  const data = {
    addresse: lieu.value,
    country: pays.value,
    dateNaisse: date_nais.value !== '' ? new Date(date_nais.value) : '', 
    email: mail.value,
    firstName: prenom.value,
    imageUrl: photo_profil.value !== '' ? photo_profil.value : '',
    lastName: nom.value,
    profession: profess.value,
    telephone: phone.value,
    username: nom_utilisteur.value
  } 

  try {
    await updateDoc(userDocRef, data) 
    console.log('Document mis a jour') 

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
          <!-- <div class="row">
            <div class="col-md-12">
              <p><strong>Nom |</strong> {{ userStore.user.lastName }}</p>

              <p><strong> Prénoms |</strong>  {{ userStore.user.firstName }}</p>
            </div>

            <div
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
                      {{ userStore.user.email }}
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
                      
                    </h5>
                    <h5 class="card-title" style="font-size: 14px">
                      {{ userStore.user.telephone }}
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
                      {{ userStore.user.addresse }}
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
                      {{ userStore.user.country }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <div class="row">
            <div class="col-md-12">
            <form @submit.prevent="handleSubmit" class="row g-3 needs-validation" novalidate>
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Nom </label>
                <input type="text" class="form-control" id="validationCustom01" v-model="nom" >
                
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Prénoms</label>
                <input type="text" class="form-control" id="validationCustom02" v-model="prenom" >
                 
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Photo de profil</label>
                <div class="input-group has-validation">
                  <input v-on:change="uploadProfilePicture" type="file" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                   
                </div>
              </div>

              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Date de naissance </label>
                <input type="date" class="form-control" id="validationCustom01" v-model="date_nais" >
                
              </div>

              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Profession</label>
                <input type="text" class="form-control" id="validationCustom01" v-model="profess" >
                
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
                <label for="validationCustomUsername" class="form-label">Nom d'utilisateur</label>
                <div class="input-group has-validation">
                  <input v-model="nom_utilisteur" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                   
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