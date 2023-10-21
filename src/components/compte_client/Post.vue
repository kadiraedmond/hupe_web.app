<script setup>
import { useDemandeStore } from '@/store/demande.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from 'vue'

const demandeStore = useDemandeStore()
const authStore = useAuthStore()

onBeforeMount(() => {
    demandeStore.setPosts(authStore.user.uid || 'Q0ZeyDlFSnQrAy8a7YEA88vJrFH2')
})
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-6" v-for="(post, index) in demandeStore.posts" :key="index">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary w-100 text-start"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal10"
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
            <p class="text-black">Il y a environ 5 minute</p>
            <p class="text-black">O reponse</p>
          </div>
        </div>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal10"
        tabindex="-1"
        aria-labelledby="exampleModalLabel10"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel10">
                Reponses des compagnies
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
                                src="/public/assets/img/avatars/1.png"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="width: 50px"
                              />
                              <div class="card-body">
                                <h5 class="card-title" style="font-size: 12px">
                                  Koudi
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">loren ipsun dolor</li>
                  </ul>
                </div>
              </div>

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
                                src="/public/assets/img/avatars/1.png"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="width: 50px"
                              />
                              <div class="card-body">
                                <h5 class="card-title" style="font-size: 12px">
                                  Koudi
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">loren ipsun dolor</li>
                  </ul>
                </div>
              </div>

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
                                src="/public/assets/img/avatars/1.png"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="width: 50px"
                              />
                              <div class="card-body">
                                <h5 class="card-title" style="font-size: 12px">
                                  Koudi
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">loren ipsun dolor</li>
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
