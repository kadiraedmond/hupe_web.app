<script setup>
import { useUserStore } from "@/store/user.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, ref } from "vue";

import { addDoc, collection } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'

import { useLocationStore } from '@/store/location.js'


const userStore = useUserStore()
const authStore = useAuthStore()
const locationStore = useLocationStore()

const savedUser = JSON.parse(localStorage.getItem('user'))
onBeforeMount(async () => {
  userStore.setUser('MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid)
  locationStore.setUserLocations('MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid)
})

</script>

<template>
    <div class="row mt-5">
    <h1 class="mb-4">Mes Locations</h1>
    <div class="col-md-6 mb-4" v-for="(location, index) in locationStore.userLocations" :key="index">
      <div
        class="card h-100 border-0"
        id="card_compagnie"
        style="box-shadow: none; background: none"
      >
        <div
          class="card mb-3 mt-4"
          style="margin: 10px; margin-top: -10px !important; width: 98%"
        >
          <div class="row g-0" style="margin: 10px">
            <div class="col-md-6">
              <div class="card-body">
                <p
                  class="card-text"
                  style="
                    background: #efefef;
                    padding: 4px;
                    border-radius: 5px;
                    font-size: 12px;
                    margin-top: -15px;
                  "
                >
                  Il y a environ un jour <br />
                  <strong> {{ location.number }} </strong>
                </p>
                <hr />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Location |
                  <strong style="color: #219935">{{ location.status }} </strong>
                </p>
                <hr />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  <strong>{{ location.modele }} </strong> |
                  <!-- <strong> Santafe 2022 </strong> -->
                </p>
                <hr />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  {{ location.moteur }} | {{ location.boite }} | {{ location.plaque_vehicule }}
                </p>
                <hr />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  chauffeur | <strong>{{ location.chauffeur }} </strong>
                </p>
                <hr />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Intérieur | <strong>{{ location.interieurPays }} </strong>
                </p>
                <hr />
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="/public/assets/img/car2.jpg"
                class="img-fluid rounded-start h-100"
                alt="..."
                style="height: 85% !important"
              />
            </div>
            <div class="col-md-12">
              <div class="card-body">
                <p
                  class="card-text"
                  style="
                    font-size: 13px;
                    margin-top: -32px;
                    margin-bottom: -8px;
                  "
                >
                  Retrait | <strong>{{ location.date_retrait }} </strong> |
                  <strong>{{ location.heure_retrait }}</strong>
                </p>

                <hr />
                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Retour | <strong>{{ location.date_retour }} </strong>
                </p>
                <hr />

                <p
                  class="card-text"
                  style="font-size: 13px; margin-top: -8px; margin-bottom: -8px"
                >
                  Nombres de jours de location |
                  <strong>5 jours</strong>
                </p>
                <hr />

                <div class="row" v-if="location.status == 'Validé'">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="
                        background: white;
                        border-color: #219935;
                        color: #219935;
                      "
                    >
                      Reporter
                    </button>
                  </div>

                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background: #219935; border-color: #219935"
                    >
                      Procéder au paiement
                    </button>
                  </div>
                </div>

                <div class="row" v-if="location.status == 'Confirmé'">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary w-75"
                      style="
                        background: white;
                        border-color: #219935;
                        color: #219935;
                      "
                    >
                      Appel
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary w-75"
                      style="background: #219935; border-color: #219935"
                    >
                      Message
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
</template>