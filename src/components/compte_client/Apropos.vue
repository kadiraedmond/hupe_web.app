<script setup>
import { useUserStore } from '@/store/user.js'
import { useAuthStore } from '@/store/auth.js'
import { onBeforeMount } from "vue";

const userStore = useUserStore()
const authStore = useAuthStore()

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
onBeforeMount(() => {
  userStore.setUser(userId) // authStore.user.uid

})

</script>

<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <div class="card h-100" id="card_compagnie">
        <div class="card-body">
          <!-- <div class="row">
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
          </div> -->

          <div class="row">
            <div class="col-md-12">
              <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Nom </label>
                <input type="text" class="form-control" id="validationCustom01" value="Mark" >
                
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Prénoms</label>
                <input type="text" class="form-control" id="validationCustom02" value="Otto" >
                 
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Photo de profil</label>
                <div class="input-group has-validation">
                  <input type="file" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                   
                </div>
              </div>

              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Date de naissance </label>
                <input type="date" class="form-control" id="validationCustom01" value="Mark" >
                
              </div>

              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Professeion</label>
                <input type="text" class="form-control" id="validationCustom01" value="Mark" >
                
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Email</label>
                <input type="email" class="form-control" id="validationCustom02" value="Otto" >
                 
              </div>
              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Téléphone</label>
                <div class="input-group has-validation">
                  <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                   
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Pays</label>
                <div class="input-group has-validation">
                  <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" >
                   
                </div>
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Adresse</label>
                <div class="input-group has-validation">
                  <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                   
                </div>
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Nom d'utilisateur</label>
                <div class="input-group has-validation">
                  <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
                   
                </div>
              </div>

              
              
              
             
              <div class="col-12 text-end">
                <button class="btn btn-primary" type="submit">Enregistrer</button>
              </div>
            </form>
            </div>
          </div>

          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
      </div>
     
    </div>
  </div>
</template>
<style></style>
