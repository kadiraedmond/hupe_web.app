<script setup>
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from "vue";

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))
onBeforeMount(() => {
  userStore.setUser(savedUser.uid || authStore.user.uid) // authStore.user.uid

})
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="card h-100" id="card_compagnie">
        <div class="card-body">
          <div class="row">
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
                      src="/public/assets/img/icone/mail.png"
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
                      src="/public/assets/img/icone/web.png"
                      class="img-fluid"
                      alt="..."
                      style="width: 64px"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 14px">
                        <!-- site web -->
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
                      src="/public/assets/img/icone/maps.png"
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
                      src="/public/assets/img/icone/location.png"
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
          </div>

          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
