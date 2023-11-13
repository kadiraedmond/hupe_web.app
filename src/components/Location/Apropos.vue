<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount, onMounted } from "vue";

const companieStore = useCompanieStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'YYiQmKBenyUzKzyxIEO1vHxfEPb2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  companieStore.setCompanieById(userId) // authStore.user.uid

})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="card h-100" id="card_compagnie">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <p><strong>Raison sociale |</strong> {{ companieStore.companie.raison_social }}</p>

              <p><strong> Responsable |</strong>  {{ companieStore.companie.responsable }}</p>
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
                      {{ companieStore.companie.adresse_mail }}
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
                      {{ companieStore.companie.site_web }}
                    </h5>
                    <h5 class="card-title" style="font-size: 14px">
                      {{ companieStore.companie.telephone }}
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
                      {{ companieStore.companie.adresse }}
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
                      {{ companieStore.companie.latitude }} {{ companieStore.companie.longitude }}
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
