<script setup>
import { useDemandeStore } from "@/store/demande.js";
import { useAuthStore } from "@/store/auth.js";
import { onBeforeMount, onMounted, ref } from "vue";

import { collection, doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";
import { useCompanieStore } from "@/store/companie.js";

const demandeStore = useDemandeStore();
const authStore = useAuthStore();
const companieStore = useCompanieStore();

const savedUser = JSON.parse(localStorage.getItem("user"));

// const userId = savedUser.uid || authStore.user.uid
const userId = "qdo1Ig1tnMlmvFCxa6OE" || savedUser.uid || authStore.user.uid;

const usersColRef = collection(firestoreDb, "users");

const userInformations = ref({});

const getClientInformations = async (clientId) => {
  try {
    const userDocRef = doc(usersColRef, `${clientId}`);
    const snapshot = await getDoc(userDocRef);

    if (snapshot.exists()) userInformations.value = snapshot.data();
  } catch (error) {
    console.log(error);
  }
};
const response = ref("");
const handleSubmit = async (demande) => {
  const docRef = doc(firestoreDb, "client_publication", `${demande.uid}`);

  const responseCol = collection(docRef, "reponse");

  await addDoc(responseCol, {
    compagnie: `${userId}`,
    reponse: response.value,
  }).then(() => "Document ajouté");

  const snapshot = await getDoc(docRef);
  let pub;
  if (snapshot.exists()) pub = snapshot.data();

  await updateDoc(docRef, { lecteurs: [...pub.lecteurs, `${userId}`] });

  document.querySelector("#form").reset();
  document.querySelector(".btn-close").click();
};

onBeforeMount(() => {
  demandeStore.setLocationDemandes();
  companieStore.setCompanieById(userId);
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div v-if="demandeStore.locationDemandes.length > 0">
    <div class="row mt-5" v-if="companieStore.companie.status == 'active'">
      <div
        class="col-md-6 my-1"
        v-for="(demande, index) in demandeStore.locationDemandes"
        :key="index"
      >
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary w-100 text-start"
          data-bs-toggle="modal"
          :data-bs-target="'#exampleModal10' + index"
          style="
            background: white !important;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            border: none; height: 165px;
          "
        >
          <div class="row">
            <div class="col-4 text-center" style="background-color: #219935; height: 159px;">
              <img
                :src="
                    demande.userInfos.imageUrl
                    ? demande.userInfos.imageUrl
                    : '/assets/img/avatars/1.png'
                    "
                  class="img-fluid w-75"
                  alt="..."
                  style="margin-top: 16px; background: white; padding: 10px; border-radius: 10px; height: 125px;"
                />
            </div>
            <div class="col-8">
              <div class="row g-1 d-flex mt-1">
                <div class="col-6 ">
                  <!-- <img
                    :src="
                      demande.userInfos.imageUrl
                        ? demande.userInfos.imageUrl
                        : '/assets/img/avatars/1.png'
                    "
                    alt
                    class="w-px-40 h-auto rounded-circle"
                    style="
                      max-width: 50px;
                      height: 50px !important ;
                      border: 1px solid rgb(214, 214, 214);
                    "
                  /> -->
                  <div>
                    <div
                      class="card-body"
                      style="margin-top: 15px;"
                    >
                      <p class="card-title text-black" style="font-weight:700">
                        {{ demande.userInfos.lastName }}
                        {{ demande.userInfos.firstName }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-1 mt-1">
                <div class="col-md-12">
                  <p style="color: #219935">  <i class='bx bx-news'></i>  {{ demande.objet }}</p>
                  <p class="text-black" style="margin-top: -9px">
                     <i class='bx bx-mail-send'></i> {{ demande.demande }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'exampleModal10' + index"
          tabindex="-1"
          aria-labelledby="exampleModalLabel10"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style="background: #219935; color: white"
              >
                <h1 class="modal-title fs-5" id="exampleModalLabel10">
                  Informations du client
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
                  id="form"
                  class="row g-3"
                  @submit.prevent="handleSubmit(demande)"
                >
                  <div class="col-md-12">
                    <p>
                      client | {{ demande.userInfos.lastName }}
                      {{ demande.userInfos.firstName }}
                    </p>
                    <p>Adresse | {{ demande.userInfos.addresse }}</p>
                    <!-- <p>Contact | {{ demande.userInfos.telephone }}</p> -->
                    <p>Objet | {{ demande.objet }}</p>
                    <p>Demande | {{ demande.demande }}</p>
                  </div>
                  <div class="col-md-12">
                    <label for="inputEmail4" class="form-label"
                      >Entrez votre reponse
                    </label>
                    <textarea
                      class="form-control"
                      id="validationTextarea"
                      placeholder=""
                      v-model="response"
                      required
                    ></textarea>
                  </div>

                  <div class="col-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style="background: #219935; border-color: #219935"
                    >
                      Répondre
                    </button>
                  </div>
                </form>
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
        <div class="card text-center border-0">
          <div class="text-center">
            <img
              src="/assets/img/icone/col.png"
              alt=""
              class="img-fluid w-50"
            />
          </div>

          <div class="card-body">
            <p class="card-text">Aucune demande disponible</p>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<style></style>
