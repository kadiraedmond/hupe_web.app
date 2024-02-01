<script setup>
import { useScannerStore } from '@/store/scanner.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, ref, onMounted } from 'vue'

import { collection, query, doc, addDoc, updateDoc, deleteDoc, where, getDoc, getDocs, Timestamp } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'

import Swal from 'sweetalert2'

const scannerStore = useScannerStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'qdo1Ig1tnMlmvFCxa6OE' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  await scannerStore.setCompanyScanners(userId)

  scanners.value = scannerStore.companyScanners
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const nom = ref('')
const prenoms = ref('')
const adresse = ref('')
const countryCode = ref('')
const phoneNumber = ref()
const profilePicture = ref('')

const handleCountryChange = countryData => {
  countryCode.value = countryData.dialCode
}

const handleFile = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `scanners/${userId}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(downloadURL) {
    profilePicture.value = downloadURL
  }
}

const scannerColRef = collection(firestoreDb, 'scanneur')
const scanners = ref([])

const handleSubmit = async () => {
  const phoneNum = `+${countryCode.value}${phoneNumber.value}`

  const trimPhoneNum = phoneNum.replace(/\s/g, '')

  const data = {
    uid: '',
    lastName: nom.value,
    firstName: prenoms.value,
    telephone: trimPhoneNum,
    image_url: profilePicture.value,
    address: adresse.value,
    compagnieUID: userId,
    createdAt: Timestamp.now()
  }

  try {
    const docRef = await addDoc(scannerColRef, data)

    await updateDoc(docRef, { uid: docRef.id })

    scanners.value.push({ ...data, uid: docRef.id })

    document.querySelector('.btn-close-col').click()

    Swal.fire({
      title: "Succès",
      text: "Collaborateur ajouté avec succès",
      icon: "success"
    }) 
    
  } catch (error) {
    console.log(error)
  }
}

const deleteScanner = async (UID) => {
  const docRef = doc(firestoreDb, 'scanneur', UID)

  const result = await Swal.fire({
    text: 'Êtes-vous sûr de vouloir supprimer ce collaborateur ?',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  })
  
  if(result.isConfirmed) {
    try {
        await deleteDoc(docRef)

        Swal.fire({
          title: "Succès",
          text: "Collaborateur supprimé avec succès",
          icon: "success"
        })

        scanners.value = scanners.value.filter(scanner => scanner.uid !== UID)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<template>

<div class="row mt-4">
    <div class="col-md-6"></div>
    <div class="col-md-6 text-end">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
        style="background-color: #219935; border-color: #219935"
      >
        <img
          src="/assets/img/icone/plus.png"
          class="img-fluid"
          alt="..."
        />
        Ajouter
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background-color: #219935; color : white">
              <h1 class="modal-title fs-5" id="exampleModalLabel4">
                Ajouter un Collaborateur
              </h1>
              <button
                type="button"
                class="btn-close-col text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Nom</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="nom"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Prenoms</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prenoms"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Numéro de téléphone</label
                  >

                  <vue-tel-input 
                    v-model="phoneNumber"
                    :enabledCountryCode="true"
                    @country-changed="handleCountryChange"
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Adresse</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="adresse"
                  />
                </div>
              
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    > Photo</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile" 
                    accept="image/*"
                  />
                </div>
                
                

                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    type="submit"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div v-if="scanners.length > 0" class="row mt-5">
  <div class="col-md-12"></div>
  <div class="col-md-4" v-for="(scanner, i) in scanners" :key="i"> 
    <div
      class="card mb-3"
      style="
        padding: 5px;
        border-radius: 5px;
      "
    >
      <div class="row g-0">
        <div class="col-4">
          <img
            :src="scanner.image_url !== '' ? scanner.image_url : '/assets/img/avatars/1.png'"
            alt=""
            class="w-px-40 h-auto rounded-circle"
            style="width: 100px"
          />
        </div>
        <div class="col-8">
          <div class="card-body">
            <!-- <h5 class="card-title">{{ scanner.nom }} {{ scanner.prenom }}</h5> -->
            <h5 class="card-title" style="font-weight: 600; margin-top: -4px;">{{ scanner.lastName }} {{ scanner.firstName }}</h5>
            <p class="card-text">{{ scanner.telephone }}</p>
            <p class="card-text" style="margin-top: -17px;">
              <small class="text-muted">{{ scanner.address }}</small>
            </p>
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <button 
            class="btn btn-danger" 
            id="btn_sups" 
            style="background: red; border: red"
          >
            Désactiver
          </button>
        </div>
        <div class="col-md-4">
          <button 
            class="btn btn-primary" 
            id="btn_sups"
          >
            Activer
          </button>
        </div>
        <div class="col-md-4 text-end">
          <button @click="deleteScanner(scanner.uid)" class="btn btn-primary" id="btn_sup">Supprimer</button>
        </div>

        <div class="col-md-4">
          <router-link to="/collaborateurs/" class="col-md-4 text-end">
            <button class="btn btn-primary" id="btn_sups">Consulter</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</div>
<div class="w-100" v-else>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6"> 
      <div class="text-center">
        <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
      </div>
      
      <div class="card-body text-center">
        <p class="card-text">Aucun collaborateur disponible</p>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</div>
</template>
<style scoped>
   #btn_sup{
    background: white;
    border-color: red;
    color: red;
    height: 34px;
  }

  #btn_sups{
    background: #219935;
    border-color: #219935;
    height: 34px;
  }
</style>
