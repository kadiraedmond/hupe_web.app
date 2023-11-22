<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, doc, where, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from 'vue3-toastify'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const companieCars = ref([])

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  await companieStore.resetCompanieCars()
  companieStore.setCompanieCars(userId) // authStore.user.uid
  companieCars.value = companieStore.companieCars 
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const marque = ref('')
const modele = ref('')
const immatriculation = ref('')
const annee = ref('')
const moteur = ref('')
const prix_journalier = ref()
const prix_avec_chauffeur = ref()
const prix_interieur = ref()
const image = ref()

const isUploading = ref(false)

const handleSubmit = async () => {
  const docRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const collectionRef = collection(docRef, 'vehicules_programmer')

  const data = {
    uid: '', 
    annee_vehicule: annee.value, 
    avecchauffeurprix: prix_avec_chauffeur.value, 
    boite: '', 
    capitalprix: '', 
    compagnie_uid: userId, 
    enAvant: false, 
    enPromo: false, 
    interieurpaysprix: prix_interieur.value, 
    modele: modele.value, 
    montant: prix_journalier.value, 
    moteur: moteur.value, 
    serie_vehicule: immatriculation.value, 
    status: 'active', 
    vehicule: marque.value, 
    vehicule_image_url: image.value, 
    addedAt: new Date()
  }
  const newDoc = await addDoc(collectionRef, data)

  if(newDoc) {
    console.log('Document ajouté')
    try {
      await updateDoc(newDoc, { uid: `${newDoc.id}` }) 
      console.log('ID ajouté')

      const newData = { ...data, uid: `${newDoc.id}` }
      companieCars.value.push(newData)

      const vehiculeColRef = collection(firestoreDb, 'vehicules_programmer')

      await setDoc(vehiculeColRef.doc(`${newDoc.id}`), newData)
      
    } catch (error) {
      console.log(error)
    }

    await document.querySelector('.btn-close').click()
    Swal.fire({
      title: "Succès",
      text: "Votre véhicule a été ajouté",
      icon: "success"
    })
    toast.success("Votre véhicule a été ajouté", { 
      autoClose: 3500, 
      position: toast.POSITION.TOP_CENTER
    })
  }

}

const handleFile = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image.value = downloadURL
    isUploading.value = false
  }
}

const taux_reduction = ref()
const montant = ref()
const date_debut = ref()
const date_fin = ref()

const promote = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`)

  if(companieStore.companie.offre === 'vip') {
    const update = await updateDoc(docRef, { enPromo: true })
    
    const promotionDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'promotion')
    const carInPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
  
    const data = {
      ancien_montant: car.montant, 
      annee_vehicule: car.anne_vehicule, 
      boite: car.boite, 
      compagnie_uid: userId, 
      country: companieStore.companie.country, 
      createdAt: new Date(), 
      debut_promo: new Date(date_debut.value), 
      fin_promo: new Date(date_fin.value), 
      idTrack: uuidv4(), 
      modele: car.modele, 
      montant: montant.value, 
      moteur: car.moteur, 
      pourcentage: '', 
      vehicule: car.vehicule, 
      vehicule_image_url: car.vehicule_image_url
    }
  
    const addedDoc = await addDoc(carInPromoColRef, data)
  
    if(addedDoc) {
      console.log('Document ajouté')
      Swal.fire({
        title: "Succès",
        text: "Votre véhicule a été mis en promotion",
        icon: "success"
      })

      const update = await updateDoc(addedDoc, { uid: addedDoc.id })
      if(update) {
        console.log('ID ajouté')
      }
    }
  } else {
    Swal.fire({
      title: "Erreur",
      text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
      icon: "error"
    })
  }
  
}

const unlock = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`)

  if(car.status == 'desactive') {
    const update = await updateDoc(docRef, { status: 'active' })
  
    if(update) {
      console.log('Véhicule dévérouillé')
      Swal.fire({
        title: "Succès",
        text: "Véhicule dévérouillé",
        icon: "success"
      })
    }
  } else if(car.status == 'active') {
    const update = await updateDoc(docRef, { status: 'desactive' })
  
    if(update) {
      console.log('Véhicule Vérouillé')
      Swal.fire({
        title: "Succès",
        text: "Véhicule Vérouillé",
        icon: "success"
      })
    }
  }
  
}

const star = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`)

  if(companieStore.companie.offre === 'vip') {
    const update = await updateDoc(docRef, { enAvant: true })
    
    const miseEn_avantDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'mise_en_avant')
    const carEn_avantColRef = collection( miseEn_avantDocRef, 'vehicule_en_avant')

    const addedDoc = await addDoc(carEn_avantColRef, car)

    if(addedDoc) {
      console.log('Document ajouté')
      Swal.fire({
        title: "Succès",
        text: "Votre véhicule a été mis en avant",
        icon: "success"
      })

      const update = await updateDoc(addedDoc, { uid: addedDoc.id, enAvant: true })

      if(update) {
        console.log('ID ajouté')
      }
    }
  
  } else {
    Swal.fire({
      title: "Erreur",
      text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
      icon: "error"
    })
  }
}

const remove = async (car) => {
  const SwlResult = await Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ce Véhicule ?',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  })

  if(SwlResult.isConfirmed) {
    const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
    const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

    const docRef = doc(vehiculesColRef, `${car.uid}`)

    const result = deleteDoc(docRef)

    if(result) {
      Swal.fire({
        title: "Succès",
        text: "Véhicule supprimé",
        icon: "success"
      })
    }
  } else if (SwlResult.dismiss === Swal.DismissReason.cancel) {
    // 
  }
}

const edit_marque = ref()
const edit_modele = ref()
const edit_immatriculation = ref()
const edit_annee = ref()
const edit_prix_journalier = ref()
const edit_prix_chauffeur = ref()
const edit_prix_interieur = ref()
const edit_image = ref()

const handleEditPicture = async () => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${userId}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    edit_image.value = downloadURL
    isUploading.value = false
  }
}

const update = async (car) => {
  // if(!edit_marque.value || !edit_modele.modele || !edit_immatriculation.value || !edit_annee.value || !edit_prix_journalier.value || !edit_prix_chauffeur.value || !edit_prix_interieur.value) {
  //   Swal.fire({
  //     title: "Erreur",
  //     text: "Entrez des données",
  //     icon: "error"
  //   })
  // }
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`)

  const data = {
    anne_vehicule: edit_annee.value, 
    avecchauffeurprix: edit_prix_chauffeur.value, 
    interieurpaysprix: edit_prix_interieur.value, 
    vehicule: edit_marque.value, 
    montant: edit_prix_journalier.value, 
    modele: edit_modele.value, 
    serie_vehicule: edit_immatriculation.value, 
    vehicule_image_url: edit_image.value
  }

  const update = await updateDoc(docRef, data)

  if(update) {
    Swal.fire({
      title: "Succès",
      text: "Votre véhicule a été mis à jour",
      icon: "success"
    })
  } else {
    Swal.fire({
      title: "Erreur",
      text: "Une erreur s'est produite lors des modifications",
      icon: "error"
    })
  }
}

const handleMarque = (e) => {
  edit_marque.value = e.target.value
}

const handleModele = (e) => {
  edit_modele.value = e.target.value
}

const handleImmatriculation = (e) => {
  edit_immatriculation.value = e.target.value
}

const handleAnneeVehicule = (e) => {
  edit_annee.value = e.target.value
}

const handleMontant = (e) => {
  edit_prix_journalier.value = e.target.value
}

const handlePrixChauffeur = (e) => {
  edit_prix_chauffeur.value = e.target.value
}

const handleInterieurPaysPrix = (e) => {
  edit_prix_interieur.value = e.target.value
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
        data-bs-target="#exampleModal"
        style="background-color: #219935; border-color: #219935"
      >
        <img
          src="/public/assets/img/icone/plus.png"
          class="img-fluid"
          alt="..."
        />
        Ajouter
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background-color: #219935; color : white">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Ajouter un véhicule
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Marque</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="marque"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Modéle</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="modele"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Immatriculation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="immatriculation"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Année</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="annee"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Moteur</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="moteur"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <h2 style="font-size: 17px">Montant</h2>
                </div>

                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >Prix journalier</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prix_journalier"
                    required
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label"
                    >Avec chauffeur</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom01"
                    v-model="prix_avec_chauffeur"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >A l'intérieur</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prix_interieur"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Ajouter une image</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile"
                    required
                  />
                </div>

                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    type="submit"
                    :disabled="isUploading"
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
  <div class="row mt-4" v-if="companieCars.length > 0">
    <div class="col-md-6" v-for="(car, index) in companieCars" :key="index">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="car.vehicule_image_url"
              class="img-fluid rounded-start"
              alt="..."
              style="height: 100%; object-fit: cover"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <p class="card-text"><strong>{{ car.vehicule }} </strong></p>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                  >
                    {{ car.montant }} FCFA
                  </button>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text"><strong>Modèle | </strong> {{ car.modele }}</p>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text">
                    <strong>Moteur | </strong> {{ car.moteur }}
                  </p>
                </div>
                <div class="col-md-12 mt-3">
                  <p class="card-text">
                    <strong>Immatriculation | </strong> {{ car.serie_vehicule }}
                  </p>
                </div>

                <div class="col-md-12 mt-4 text-start">
                  <div class="row row-clols-md-5">
                    <div class="col">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModale"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "
                      >
                        <img
                          src="/public/assets/img/icone/edit.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="exampleModale"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabele"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabele"
                              >
                                Modifier un véhicule
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                class="row g-3 needs-validation text-start"
                                novalidate
                                @submit.prevent="update(car)"
                              >
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Marque</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.vehicule"
                                    @input="handleMarque"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modéle</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.modele"
                                    @input="handleModele"
                                    required
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Immatriculation</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.serie_vehicule"
                                    @input="handleImmatriculation"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Année</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.anne_vehicule"
                                    @input="handleAnneeVehicule"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <h2 style="font-size: 17px">Montant</h2>
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Prix journalier</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.montant"
                                    @input="handleMontant"
                                    required
                                  />
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Avec chauffeur</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.avecchauffeurprix"
                                    @input="handlePrixChauffeur"
                                    required
                                  />
                                </div>
                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >A l'intérieur</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.interieurpaysprix"
                                    @input="handleInterieurPaysPrix"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Ajouter une images</label
                                  >
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleEditPicture"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
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
                    <div class="col" v-if="companieStore.companie.offre == 'vip'">
                      <button
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "
                        @click="star(car)"
                      >
                        <img
                          src="/public/assets/img/icone/star.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>
                    </div>
                    <div class="col" v-if="companieStore.companie.offre == 'vip'">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style="background-color: #219935; border-color: #219935"
                      >
                        <img
                          src="/public/assets/img/icone/promotion.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="exampleModal1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Promouvoir un véhicule
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                class="row g-3 needs-validation text-start"
                                novalidate
                                @submit.prevent="promote(car)"
                              >
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Taux de réduction</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    v-model="taux_reduction"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Montant</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="montant"
                                    required
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Date de debut</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom01"
                                    v-model="date_debut"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Date de fin</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="date_fin"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    type="submit"
                                  >
                                    Promouvoir
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        id="a_compagnie"
                      >
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                          @click="unlock(car)"
                        >
                          <img
                            src="/public/assets/img/icone/unlock.png"
                            class="img-fluid"
                            alt="..."
                          />
                        </button>
                      </div>
                    </div>
                    <div class="col text-center">
                      <div id="a_compagnie">
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #ff000087;
                            border-color: #ff000087;
                          "
                          @click="remove(car)"
                        >
                          <img
                            src="/public/assets/img/icone/delete.png"
                            class="img-fluid"
                            alt="..."
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100" v-else>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card text-center">
            <div class="text-center">
              <img src="/public/assets/img/icone/trajet.png" alt="" class="img-fluid w-25">
            </div>
            
            <div class="card-body">
              <p class="card-text">Aucun véhicule disponible</p>
            </div>
          </div>
         
          
        </div>
        <div class="col-md-3"></div>
      </div>
  </div>
</template>
<style></style>
