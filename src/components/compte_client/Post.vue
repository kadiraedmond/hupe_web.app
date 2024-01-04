<script setup>
import { useDemandeStore } from '@/store/demande.js'
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, ref, onMounted } from 'vue'
import { encryptParam } from '@/utils/hash.js'

import { doc, deleteDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'
import Swal from 'sweetalert2'

const demandeStore = useDemandeStore()
const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
const posts = ref([])
onBeforeMount(async () => {
  await demandeStore.setPosts(userId)

  posts.value = demandeStore.posts.slice().reverse()
})

onMounted(() => {
  window.scrollTo(0, 0)
})
const options = {
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

const deletePost = async (postUID) => {
  const docRef = doc(firestoreDb, 'client_publication', postUID)
  const result = await Swal.fire({
    title: 'Supprimer ce post ?',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  })
      
  if(result.isConfirmed) {
    await deleteDoc(docRef)
    
    demandeStore.setPosts(userId)

    posts.value = posts.value.filter(post => post.uid !== postUID)

    Swal.fire({
      title: "Succès",
      text: "Votre post a bien été supprimé",
      icon: "success"
    }) 
  }

}
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-6 mb-3" v-for="(post, postIndex) in posts" :key="postIndex">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary w-100 text-start"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal10' + postIndex"
        style="
          background: white !important;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border: none; height: 165px;
        "
      >
        <div class="row">
          <div class="col-3 text-center" style="background-color: #219935; height: 159px;">
            <img
                  src="/assets/img/service/car.png"
                  class="img-fluid w-100"
                  alt="..."
                  style="margin-top: 32px; background: white; padding: 10px; border-radius: 10px;"
                />
          </div>
          <div class="col-4 mt-3">
            <p style="color: #219935">{{ post.objet }}</p>
            <p class="text-black">{{ post.demande }}</p>
          </div>
          <div class="col-5 mt-3 text-end">
            <p class="text-black">Posté le : {{ new Intl.DateTimeFormat('fr-FR', options).format(post.createdAt.toDate()) }}</p>
            <p class="text-black">
              {{ post.responses.length }} {{ post.responses.length === 0 ? 'réponses' : post.responses.length === 1 ? 'réponse' : 'réponses' }}
            </p>
            <button
              @click="deletePost(post.uid)"
              class="btn btn-primary"
              style="
                  background: white;
                  border-color: crimson;
                  color: crimson;
                  font-size: 12px; 
              "
              >
                Supprimer
            </button>
          </div>
        </div>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal10' + postIndex"
        tabindex="-1"
        aria-labelledby="exampleModalLabel10"
        aria-hidden="true"
        v-for="(response, responseIndex) in post.responses" :key="responseIndex"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-white" style="background-color: #219935;">
              <h1 class="modal-title fs-5" id="exampleModalLabel10">
                Réponses des compagnies
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="col-md-12 mb-3">
                <div class="card w-100">
                  <div class="card-header" style="padding: 0px;">
                    <div class="row w-100" style="background: transparent">
                      <div class="col-md-12">
                        <div
                          class="card  border-0"
                          style="background: transparent"
                        >
                          <div class="row g-1">
                            <div class="col-md-12 d-flex">
                              <router-link 
                                :to="`/detail/${encryptParam(response.companyInfos.uid)}`" 
                                v-if="response.companyInfos.type_compagnie === 'Location'"
                              >
                                
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-12 d-flex">
                                      <img
                                      :src="response.companyInfos.imageLogoUrl"
                                      alt
                                      class="w-px-40 h-auto rounded-circle"
                                      style="width: 40px"
                                    />
                                    <h5 class="card-title" style="font-size: 12px ; margin-top: 10px;  margin-left: 10px;">
                                    {{ response.companyInfos.raison_social }}
                                    </h5>
                                    </div>
                                  </div>
                                  
                                </div>
                              </router-link>
                              
                              <router-link 
                                :to="`/details/${encryptParam(response.companyInfos.uid)}`" 
                                v-if="response.companyInfos.type_compagnie === 'Transport'"
                              >
                                <img
                                  :src="response.companyInfos.imageLogoUrl"
                                  alt
                                  class="w-px-40 h-auto rounded-circle"
                                  style="width: 50px"
                                />
                                <div class="card-body">
                                  <h5 class="card-title" style="font-size: 12px">
                                    {{ response.companyInfos.raison_social }}
                                  </h5>
                                </div>
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="padding: 10px; font-size: 14px;">
                    <div class="col-12">
                      <p class="text-black"> <strong> {{ " " }} Votre Demande  </strong> <br> {{ post.demande }}</p>
                    </div>
                  </div>
                  <div class="row" style="padding: 10px; font-size: 14px; margin-top: -24px;">
                    <div class="col-12" style="margin-bottom: -10px;">
                      <p class="text-black"> <strong>  {{ " " }} Réponse  </strong> </p>
     
                    </div>
                    <hr>
                    <div class="col-12">
                      <p>{{ response.reponse }}</p>   
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
