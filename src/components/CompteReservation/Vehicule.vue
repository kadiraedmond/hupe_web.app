<script setup>
import { useReservationStore } from '@/store/reservation.js'
import { usePromotionStore } from '@/store/promotion.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted, ref } from "vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, setDoc, doc, Timestamp, where, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from 'vue3-toastify'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

import { useCompanieStore } from '@/store/companie.js'

const companieStore = useCompanieStore()
const promotionStore = usePromotionStore()
const reservationStore = useReservationStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'f3Xb6K3Dv9SHof3CkkRbF8hE6Gl1' || savedUser.uid || authStore.user.uid
const trajets = ref([])
onBeforeMount(async () => {
  await reservationStore.setTrajets(userId)
  companieStore.setCompanieById(userId)

  trajets.value = reservationStore.trajets
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const lieu_depart = ref('')
const destination = ref('')
const montant = ref()
const heure_depart = ref()
const heure_convocation = ref()
const escales_a_faire = ref('')
const nombre_de_place = ref()
const jours_de_voyage = ref('')

const addNewTrajet = async () => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const companieSubColRef = collection(companieDocRef, 'programme_des_voyages')

  const data = {
    uid: '', 
    compagnie_uid: userId, 
    enAvant: false, 
    enPromo: false, 
    destination: destination.value,
    escale: escales_a_faire.value, 
    heure_convocation: heure_convocation.value, 
    heure_depart: heure_depart.value, 
    jours_voyage: jours_de_voyage.value, 
    lieu_depart: lieu_depart.value, 
    montant: montant.value, 
    nb_place: nombre_de_place.value, 
    status: 'active'
  }

  const addedDoc = await addDoc(companieSubColRef, data)

  if(addedDoc) {
    console.log('Document ajouté')
    try {
      await updateDoc(addedDoc, { uid: `${addedDoc.id}` })
      console.log('ID ajouté')

      const newData = { ...data, uid: `${addedDoc.id}` }
      trajets.value.push(newData)

      // const programmeColRef = collection(firestoreDb, 'programme_des_voyages')

      // await setDoc(doc(programmeColRef, `${addedDoc.id}`), newData)
    
    } catch (error) {
      console.log(error)
    }
    document.querySelector('.btn-close-a').click() 
    Swal.fire({
      title: "Succès",
      text: "Votre trajet a été ajouté",
      icon: "success"
    })
  } 
}

const handleLieuDepart = (e) => {
 lieu_depart.value = e.target.value
}

const handleDestination = (e) => {
  destination.value = e.target.value
}

const handleMontant = (e) => {
  montant.value = e.target.value
}

const handleHeureDepart = (e) => {
  heure_depart.value = e.target.value
}

const handleHeureConvocation = (e) => {
  heure_convocation.value = e.target.value
}

const handleEscale = (e) => {
  escales_a_faire.value = e.target.value
}

const handleNombrePlace = (e) => {
  nombre_de_place.value = e.target.value
}

const handleJoursVoyage = (e) => {
  jours_de_voyage.value = e.target.value
} 

const update = async (trajet) => { 
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const trajetsColRef = collection(companieDocRef, 'programme_des_voyages') 

  const docRef = doc(trajetsColRef, `${trajet.uid}`) 

  const data = {
    lieu_depart: lieu_depart.value, 
    destination: destination.value, 
    heure_depart: heure_depart.value, 
    montant: montant.value, 
    heure_convocation: heure_convocation.value, 
    jours_voyage: jours_de_voyage.value, 
    nb_place: nombre_de_place.value, 
    escale: escales_a_faire.value
  } 

  await updateDoc(docRef, data) 

  const trajetDocRef = doc(firestoreDb, 'programme_des_voyages', `${trajet.uid}`)

  await updateDoc(trajetDocRef, data)


  Swal.fire({
    title: "Succès",
    text: "Votre trajet a été mis à jour",
    icon: "success"
  }) 
}

const star = async (trajet) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const programmesColRef = collection(companieDocRef, 'programme_des_voyages')

  const docRef = doc(programmesColRef, `${trajet.uid}`) 

  try {
    if(companieStore.companie.offre === 'vip') {
      
      const miseEn_avantDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'mise_en_avant')
      const trajetEn_avantColRef = collection( miseEn_avantDocRef, 'programme_en_avant') 

      const q = query(trajetEn_avantColRef, where('compagnie_uid', '==', `${userId}`)) 
      const snapshots = await getDocs(q) 

      let trajet_data 

      if(snapshots.docs.length > 0) {
        trajet_data = snapshots.docs[0].data() 
      }

      if(snapshots.docs.length > 0 && trajet_data.uid !== trajet.uid) {
        Swal.fire({
          title: "Erreur",
          text: "Vous avez déjà un trajet en avant",
          icon: "error"
        })
      } 

      else if((snapshots.docs.length > 0 && trajet_data.uid === trajet.uid) || snapshots.docs.length === 0) {
        
        if(trajet.enAvant === false) {
          trajet.enAvant = true
          await updateDoc(docRef, { enAvant: true }) 

          await setDoc(doc(trajetEn_avantColRef, `${trajet.uid}`), { ...trajet, enAvant: true })
      
          console.log('Document ajouté') 
      
          Swal.fire({
            title: "Succès",
            text: "Votre Programme de voyage a été mis en avant",
            icon: "success"
          })
      
          console.log('ID ajouté')

        } 

        else if(trajet.enAvant === true) {
          trajet.enAvant = false
          await updateDoc(docRef, { enAvant: false }) 

          const trajetDocRef = doc(trajetEn_avantColRef, `${trajet.uid}`) 

          await deleteDoc(trajetDocRef) 

          Swal.fire({
            title: "Succès",
            text: "Votre trajet n'est plus en avant",
            icon: "success"
          })
        }
      }
  
      
    } else {
      Swal.fire({
        title: "Erreur",
        text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
        icon: "error"
      })
    }
    
  } catch (error) {
    console.log(error)
  }

}

const debut_promo = ref()
const fin_promo = ref()
const montant_promo = ref()
const taux_reduction = ref()

const promote = async (trajet) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const programmesColRef = collection(companieDocRef, 'programme_des_voyages') 

  const promotionDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'promotion')
  const trajetInPromoColRef = collection(promotionDocRef, 'programme_en_promo')

  const docRef = doc(programmesColRef, `${trajet.uid}`) 

  try {
    if(companieStore.companie.offre === 'vip') { 

      if(trajet.enPromo === false) {

        if(trajet.montant <= Number(montant_promo.value)) {
          Swal.fire({
            title: "Erreur",
            text: "Entrez un prix conforme à la réduction",
            icon: "error"
          }) 
        } 

        else {
          
          await updateDoc(docRef, { enPromo: true })
          trajet.enPromo = true
          
          const data = {
            uid: trajet.uid, 
            ancien_montant: trajet.montant, 
            compagnie_uid: userId, 
            country: companieStore.companie.country, 
            createdAt: Timestamp.now(), 
            debut_promo: debut_promo.value, 
            destination: trajet.destination, 
            escale: trajet.escale, 
            fin_promo: fin_promo.value, 
            heure_depart: trajet.heure_depart, 
            idTrack: uuidv4(), 
            lieu_depart: trajet.lieu_depart, 
            montant: montant_promo.value, 
            pourcentage: taux_reduction.value
          }
        
          await setDoc(doc(trajetInPromoColRef, `${trajet.uid}`), data)
          promotionStore.setCompaniePromotionProgrammes(userId)
        
          console.log('Document ajouté')
          Swal.fire({
            title: "Succès",
            text: "Votre Programme de voyage a été mis en promotion",
            icon: "success"
          }) 
    
        }
      } 

      else if(trajet.enPromo === true) { 

        await updateDoc(docRef, { enPromo: false }) 
        trajet.enPromo = false

        const trajetDocRef = doc(trajetInPromoColRef, `${trajet.uid}`) 

        await deleteDoc(trajetDocRef) 
        promotionStore.setCompaniePromotionProgrammes(userId)

        Swal.fire({
          title: "Succès",
          text: "Votre trajet n'est plus en promotion",
          icon: "success"
        }) 
      } 

      
      document.querySelector('.btn-close').click()
    } 
    
    else {
      Swal.fire({
        title: "Erreur",
        text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
        icon: "error"
      })
    }
    
  } catch (error) {
    console.log(error)
  }

}

const unlock = async (trajet) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const programmesColRef = collection(companieDocRef, 'programme_des_voyages')

  const docRef = doc(programmesColRef, `${trajet.uid}`) 

  try {
    if(trajet.status === 'desactive') {
      trajet.status = 'active'
      await updateDoc(docRef, { status: 'active' })
    
      console.log('Programme dévérouillé')
      Swal.fire({
        title: "Succès",
        text: "Programme dévérouillé",
        icon: "success"
      })
      
    } else if(trajet.status === 'active') {
      trajet.status = 'desactive'
      await updateDoc(docRef, { status: 'desactive' })
    
      console.log('Programme Vérouillé')
      Swal.fire({
        title: "Succès",
        text: "Programme Vérouillé",
        icon: "success"
      }) 
    }
    
  } catch (error) {
    console.log(error)
  }

}

const remove = async (trajet) => {
  const SwlResult = Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ce Programme ?',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  }) 
    
  if(SwlResult.isConfirmed) {
    const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
    const programmesColRef = collection(companieDocRef, 'programme_des_voyages')

    const docRef = doc(programmesColRef, `${trajet.uid}`)

    await deleteDoc(docRef)

    Swal.fire({
      title: "Succès",
      text: "Programmes supprimé",
      icon: "success"
    }) 

    const trajetDocRef = doc(firestoreDb, 'programme_des_voyages', `${trajet.uid}`)

    await deleteDoc(trajetDocRef)
    
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    // 
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
          src="/assets/img/icone/plus.png"
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
                Ajouter un trajet
              </h1>
              <button
                type="button"
                class="btn-close-a"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addNewTrajet" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Lieu de départ
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="lieu_depart"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Destination</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="destination"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Montant</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom01"
                    v-model="montant"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Heure de départ</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="validationCustom02"
                    v-model="heure_depart"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Heure de convocation</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="validationCustom02"
                    v-model="heure_convocation"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Escales à faire</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="escales_a_faire"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Jours de voyages</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="jours_de_voyage"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label"
                    >Nombre de places</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom01"
                    v-model="nombre_de_place"
                    required
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
  <div class="row mt-4">
    <div v-if="trajets.length > 0">
      <div class="col-md-4">
        <div class="card h-100" style="max-width: 540px" v-for="(trajet, index) in trajets" :key="index">
          <div class="card-body">
            <div class="row">
              <div class="col-6 mt-2">
                <button
                  class="btn btn-primary mb-2"
                  style="background-color: #219935; border-color: #219935"
                >
                  {{ trajet.montant }} FCFA
                </button>
              </div>
              <div class="col-6 mt-2"></div>

              <div class="col-6 mt-2">
                <p><strong>Lieu de départ</strong> <br> {{ trajet.lieu_depart }}</p>
              </div>

              <div class="col-6 mt-2">
                <p><strong>Destinations </strong> <br> {{ trajet.destination }}</p>
              </div>

              <div class="col-6" style="margin-top:-5px">
                <p><strong> Heure de départ </strong> <br> {{ trajet.heure_depart }}</p>
              </div>

              <div class="col-6" style="margin-top:-5px">
                <p><strong>Convocation </strong> <br> {{ trajet.heure_convocation }}</p>
              </div>

              <div class="col-6" style="margin-top:-5px">
                <p><strong>Escale </strong> <br> {{ trajet.escale }}</p>
              </div>

              <div class="col-6 " style="margin-top:-5px">
                <p><strong>Jours de voyage </strong> <br> {{ trajet.jours_voyage }}</p>
              </div>
              <div class="col-6 " style="margin-top:-5px">
                <p><strong>Nombre de places </strong> <br> {{ trajet.nb_place }}</p>
              </div>
            </div>
            <div class="col-md-12 mt-4 text-start">
              <div class="row row-clols-md-5">
                <div class="col">
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                    style="
                      background-color: #219935;
                      border-color: #219935;
                    "
                  >
                    <img
                      src="/assets/img/icone/edit.png"
                      class="img-fluid"
                      alt="..."
                    />
                  </button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal4"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header" style="background-color: #219935; color: white;">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Modifier un trajet
                          </h1>
                          <button
                            type="button"
                            class="btn-close-m"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form
                            class="row g-3 needs-validation text-start"
                            novalidate 
                            @submit.prevent="update(trajet)"
                          >
                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label"
                                >Lieu de départ
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                :value="trajet.lieu_depart"
                                @input="handleLieuDepart"
                                required
                              />
                            </div>
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Destination</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustom02"
                                :value="trajet.destination"
                                @input="handleDestination"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label"
                                >Montant</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                :value="trajet.montant"
                                @input="handleMontant"
                                required
                              />
                            </div>
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Heure de départ</label
                              >
                              <input
                                type="time"
                                class="form-control"
                                id="validationCustom02"
                                :value="trajet.heure_depart"
                                @input="handleHeureDepart"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Heure de convocation</label
                              >
                              <input
                                type="time"
                                class="form-control"
                                id="validationCustom02"
                                :value="trajet.heure_convocation"
                                @input="handleHeureConvocation"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Nombre de places</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                id="validationCustom02"
                                :value="trajet.nb_place"
                                @input="handleNombrePlace"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Escale à faire</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustom02"
                                :value="trajet.escale"
                                @input="handleEscale"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label"
                                >Jours de voyages</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                :value="trajet.jours_voyage"
                                @input="handleJoursVoyage"
                                required
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label"
                                >Nombre de places</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                id="validationCustom01"
                                :value="trajet.nb_place"
                                @input="handleNombrePlace"
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
                                Modifier
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
                    style="background-color: #219935; border-color: #219935"
                    @click="star(trajet)"
                  >
                    <img 
                      v-if="trajet.enAvant == false"
                      src="/assets/img/icone/star.png"
                      class="img-fluid"
                      alt="..."
                    /> 
                    <i v-if="trajet.enAvant == true" style="color: #f2c33c" class="fa fa-star" aria-hidden="true"></i>
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
                      src="/assets/img/icone/promotion.png"
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
                        <div class="modal-header" style="background-color: #219935; color: white;">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
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
                            @submit.prevent="promote(trajet)"
                          >
                            <div class="col-md-12">
                              <label for="validationCustom01" class="form-label"
                                >Taux de réduction</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                id="validationCustom01"
                                v-model="taux_reduction"
                                required
                              />
                            </div>
                            <div class="col-md-12">
                              <label for="validationCustom02" class="form-label"
                                >Montant</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                id="validationCustom02"
                                v-model="montant_promo"
                                required
                              />
                            </div>

                            <div class="col-md-6">
                              <label for="validationCustom01" class="form-label"
                                >Date de debut</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                id="validationCustom01"
                                v-model="debut_promo"
                                required
                              />
                            </div>
                            <div class="col-md-6">
                              <label for="validationCustom02" class="form-label"
                                >Date de fin</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                id="validationCustom02"
                                v-model="fin_promo"
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
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    @click="unlock(trajet)"
                  >
                    <img 
                      v-if="trajet.status == 'active'"
                      src="/assets/img/icone/unlock.png"
                      class="img-fluid"
                      alt="..."
                    /> 
                    <i v-if="trajet.status == 'desactive'" class="fa fa-unlock" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="col text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #ff000087; border-color: #ff000087" 
                    @click="remove(trajet)"
                  >
                    <img
                      src="/assets/img/icone/delete.png"
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
    <div class="w-100" v-else>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card text-center">
            <div class="text-center">
              <img src="/assets/img/icone/trajet.png" alt="" class="img-fluid w-25">
            </div>
            
            <div class="card-body">
              <p class="card-text">Aucun trajet disponible</p>
            </div>
          </div>
         
          
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    
  </div>
</template>
<style></style>
