<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from 'vue3-toastify'

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid
onBeforeMount(async () => {
  await companieStore.resetCompanieCars()
  companieStore.setCompanieCars(userId) // authStore.user.uid
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
    compagnie_id: userId, 
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
    const updateNewDoc = await updateDoc(newDoc, { uid: `${newDoc.id}` })

    if(updateDoc) {
      console.log('ID ajouté')
    }

    console.log('Document ajouté')
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
  <div class="row mt-4" v-if="companieStore.companieCars.length > 0">
    <div class="col-md-6" v-for="(car, index) in companieStore.companieCars" :key="index">
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
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
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
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
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
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
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
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
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
                    <div class="col">
                      <button
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "
                      >
                        <img
                          src="/public/assets/img/icone/star.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>
                    </div>
                    <div class="col">
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
                                Promouvoir un vehicule
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
</template>
<style></style>
