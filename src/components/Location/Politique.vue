<script setup>
import { onMounted, onBeforeMount, ref } from "vue"

import Swal from 'sweetalert2'
import { collection, query, doc, addDoc, updateDoc, deleteDoc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const savedUser = JSON.parse(localStorage.getItem('user'))
// const userId = savedUser.uid || authStore.user.uid
const userId = 'MtFQ9kulTaxS2MsKN3O6'
// const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid 

const politiqueColRef = collection(firestoreDb, 'politiques') 
const firebaseText = ref([])

const Db_text = ref('')

onBeforeMount(async () => {
  const q = query(politiqueColRef, where('compagnie_uid', '==', `${userId}`))

  const snapshot = await getDocs(q)
  console.log(snapshot.docs)
  snapshot.docs.forEach(doc => firebaseText.value.push(doc.data()))

  Db_text.value = firebaseText.value[0].text

})

onMounted(() => {
  window.scrollTo(0, 0)
})

const text = ref('')
const savePolitique = async () => {
  const data = {
    uid: '', 
    text: text.value, 
    compagnie_uid: userId
  }

  try {
    const docRef = await addDoc(politiqueColRef, data) 

    await updateDoc(docRef, { uid: `${docRef.id}` }) 
    Db_text.value = data.text

    Swal.fire({
      title: `Succès`, 
      text: 'Politique ajoutée', 
      icon: "success"
    })

    document.querySelector('.btn-close').click()
  } catch (error) {
    console.log(error)
  }
}

const updatePolitique = async () => { 
  const q = query(politiqueColRef, where('compagnie_uid', '==', `${userId}`))

  const snapshot = await getDocs(q)

  const snap_doc = snapshot.docs[0] 

  const data = {
    text: Db_text.value, 
    compagnie_uid: userId
  }

  try {
    await updateDoc(snap_doc.ref, data)

    Swal.fire({
      title: `Succès`, 
      text: 'Politique mis à jour', 
      icon: "success"
    })
    document.querySelector('.btn-close').click()

  } catch (error) {
    console.log(error)
  }
} 

const deletePolitique = async () => {
  const q = query(politiqueColRef, where('compagnie_uid', '==', `${userId}`))

  const snapshot = await getDocs(q)

  const snap_doc = snapshot.docs[0]
  
  try {
    await deleteDoc(snap_doc.ref) 

     Swal.fire({
      title: `Succès`, 
      text: 'Politique supprimée', 
      icon: "success"
    }) 
    Db_text.value = ''

    document.querySelector('.btn-close').click()
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <div class="row mt-5">
    <div class="col-md-6"></div>
    <div class="col-md-6 text-end">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalA"
        style="background-color: #219935; border-color: #219935" 
        v-if="firebaseText.length == 0"
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
        id="exampleModalA"
        tabindex="-1"
        aria-labelledby="exampleModalLabelA"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background: #219935; color: white;">
              <h1 class="modal-title fs-5" id="exampleModalLabelA">
                Ajouter une politique
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="savePolitique" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-12">
                  <div class="mb-3">
                          <label class="form-label" for="basic-default-message">Contenue</label>
                          <textarea
                            
                            class="form-control"
                            name="message" 
                            v-model="text"
                          ></textarea>
                     
                      </div>
                  
                   
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

    <div class="col-md-12">
      <div class="card h-100 border-0">
        <div class="card-body"> 
          <div v-if="firebaseText.length > 0">
            <p>
              {{ Db_text }}
            </p>
          </div>
          <div class="w-100" v-else>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <div class="card text-center border-0">
                  <div class="text-center">
                    <img src="/assets/img/icone/poli.png" alt="" class="img-fluid w-50">
                  </div>
                  
                  <div class="card-body">
                    <p class="card-text">Aucune politique disponible.</p>
                  </div>
                </div>
              
                
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12" v-if="firebaseText.length > 0">
                  <button
                    class="btn btn-primary" 
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                    style="background: #219935; border-color: #219935" 
                  >
                    Modifier
                  </button>

                  <!-- Modal  -->
                  <div
                    class="modal fade"
                    id="updateModal"
                    tabindex="-1"
                    aria-labelledby="updateModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header" style="background: #219935; color: white;">
                          <h1 class="modal-title fs-5" id="exampleModalLabelA">
                           Modifier la politique
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="updatePolitique" class="row g-3 needs-validation text-start" novalidate>
                            <div class="col-md-12">
                              <div class="mb-3">
                                      <label class="form-label" for="basic-default-message">Contenue</label>
                                      <textarea
                                        class="form-control"
                                        name="message" 
                                        v-model="Db_text"
                                      ></textarea>
                                
                                  </div>
                              
                              
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
                  
                  <button
                    class="btn btn-primary"
                    style="
                      background-color: red;
                      border-color: red;
                      margin-left: 10px;
                    " 
                    @click="deletePolitique"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
      </div>
    </div>
  
</template>
<style></style>
