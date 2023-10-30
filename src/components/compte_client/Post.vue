<script setup>
import { useDemandeStore } from '@/store/demande.js'
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from 'vue'

const demandeStore = useDemandeStore()
const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  demandeStore.setPosts(userId)
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
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-6" v-for="(post, postIndex) in demandeStore.posts" :key="postIndex">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary w-100 text-start"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal10' + postIndex"
        style="
          background: white !important;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border: none;
        "
      >
        <div class="row">
          <div class="col-6">
            <p style="color: #219935">{{ post.objet }}</p>
            <p class="text-black">{{ post.demande }}</p>
          </div>
          <div class="col-6 text-end">
            <p class="text-black">Posté le : {{ new Intl.DateTimeFormat(undefined, options).format(post.createdAt) }}</p>
            <p class="text-black">
              {{ post.responses.length }} {{ post.responses.length === 0 ? 'réponses' : post.responses.length === 1 ? 'réponse' : 'réponses' }}
            </p>
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
            <div class="modal-header">
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
                  <div class="card-header">
                    <div class="row w-100" style="background: transparent">
                      <div class="col-md-12">
                        <div
                          class="card mb-3 border-0"
                          style="background: transparent"
                        >
                          <div class="row g-1">
                            <div class="col-md-12 d-flex">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  Votre Demande : <p class="text-black">{{ post.demande }}</p>
                  Réponse : 
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ response.reponse }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
