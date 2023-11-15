<script setup>
import { useRoute } from 'vue-router'
import { useCompanieStore } from "@/store/companie.js"
import { onBeforeMount, ref } from 'vue'
import { useAuthStore } from '@/store/auth.js'

import { addDoc, updateDoc, doc, getDocs, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'

const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'MIKsd9oIvxP860LDUMm9XNpvwzV2' || savedUser.uid || authStore.user.uid
const authStore = useAuthStore()

const route = useRoute()

const message = ref('')
const messages = ref([])
const receive_messages = ref([])

const companieId = route.params.id
const companieStore = useCompanieStore()

const doc_id = `${userId}_${companieId}`
const other_doc_id = `${companieId}_${userId}`

const conversationDocRef = doc(firestoreDb, 'conversations', `${doc_id}`)
const otherConversationDocRef = doc(firestoreDb, 'conversations', `${other_doc_id}`)

onBeforeMount(async () => {
  await companieStore.setCompanieById(companieId)

  if(conversationDocRef) {
    const messageColRef = collection(conversationDocRef, 'messages')
    const snapshot = await getDocs(messageColRef)

    snapshot.docs.forEach(doc => messages.value.push(doc.data()))
  }

  if(otherConversationDocRef) {
    const otherMessageColRef = collection(otherConversationDocRef, 'messages')
    const snapshots = await getDocs(otherMessageColRef)

    snapshots.docs.forEach(doc => receive_messages.value.push(doc.data()))
  }
})

const handleSubmit = async () => {
  let messageColRef

  if(!conversationDocRef) {
    const docRef = await setDoc(conversationDocRef, {})
    messageColRef = collection(docRef, 'messages')
  } else {
    messageColRef = collection(conversationDocRef, 'messages')
  }
  
  const data = {
    clientNumber: savedUser.telephone || savedUser.phoneNumber || authStore.user.telephone,
    message: message.value,
    otherUserId: companieId,
    sendAt: Timestamp.now(),
    userId: userId
  }

  const newData = await addDoc(messageColRef, data)

  if(newData) {
    console.log('Document ajouté')
    messages.value.push(data)
    message.value = ''
  }
}

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
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section id="features" class="features" style="margin-top: 70px">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12"
            style="background: #f4f4f4; border-radius: 15px 15px 15px 15px"
          >
            <div class="row">
              <div class="col-md-3">
                <div
                  class="card mb-3 border-0"
                  style="padding: 11px; background: #f4f4f4"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <router-link 
                      :to="`/detail/${companieStore.companie.uid}`" 
                      v-if="companieStore.companie.type_compagnie == 'Location'">
                        <img
                          :src="companieStore.companie.imageLogoUrl"
                          class="img-fluid rounded-start"
                          alt="..."
                          style="border-radius: 50% !important; width: 70px"
                        />
                      </router-link>
                      <router-link 
                      :to="`/details/${companieStore.companie.uid}`" 
                      v-if="companieStore.companie.type_compagnie == 'Transport'">
                        <img
                          :src="companieStore.companie.imageLogoUrl"
                          class="img-fluid rounded-start"
                          alt="..."
                          style="border-radius: 50% !important; width: 70px"
                        />
                      </router-link>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <router-link 
                        :to="`/detail/${companieStore.companie.uid}`" 
                        v-if="companieStore.companie.type_compagnie == 'Location'" style="color: #000">
                          <h5 class="card-title" style="font-size: 14px">
                            {{ companieStore.companie.raison_social }}
                          </h5>
                          <p class="card-text" style="font-size: 12px">
                            {{ companieStore.companie.description }}
                          </p>
                        </router-link>
                        <router-link 
                        :to="`/details/${companieStore.companie.uid}`" 
                        v-if="companieStore.companie.type_compagnie == 'Transport'" style="color: #000">
                          <h5 class="card-title" style="font-size: 14px">
                            {{ companieStore.companie.raison_social }}
                          </h5>
                          <p class="card-text" style="font-size: 12px">
                            {{ companieStore.companie.description }}
                          </p>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
            </div>
            <hr style="margin-top: -19px" />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <!-- Affichage des messages -->
                  <div
                    id="messages"
                    style="height: 500px; overflow-y: scroll; padding: 12px"
                  >
                    <div class="row" v-for="(other_message, index) in receive_messages" :key="index">
                        <!-- Receiver -->
                      <div class="col-md-6 mb-2">
                        <div
                          class="message incoming"
                          style="
                            background: white;
                            padding: 10px;
                            border-radius: 20px 20px 20px 0;
                          "
                        >
                          <div class="message-text" style="font-size: 14px">
                            {{ other_message.message }}
                          </div>
                          <div class="message-time text-end" style="font-size: 11px">
                              <i
                                class="bx bx-check"
                                style="font-size: 15px; color: #219935"
                              ></i>
                              {{ new Intl.DateTimeFormat(undefined, options).format(other_message.sendAt) }}
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6"></div>
                    </div>
                    <div class="row" v-for="(message, index) in messages" :key="index">
                      <div class="col-md-6"></div>

                        <!-- Sender -->
                      <div class="col-md-6 mb-2">
                        <div
                          class="message outgoing"
                          style="
                            background: #deeee4;
                            padding: 10px;
                            border-radius: 20px 20px 0;
                          "
                        >
                          <div
                            class="message-text mt-2"
                            style="font-size: 14px"
                          >
                            {{ message.message }}
                          </div>
                          <div class="message-time text-end" style="font-size: 11px">
                            {{ new Intl.DateTimeFormat(undefined, options).format(message.sendAt) }}
                          </div>
                        </div>
                      </div>                      
                    </div>

                    <!-- Ajoutez d'autres messages ici -->
                  </div>
                  <!-- Formulaire de saisie de messages -->
                    <form @submit.prevent="handleSubmit">
                        <div class="input-group mb-3" style="height: 43px">
                            <input
                            type="text"
                            class="form-control"
                            id="message-input"
                            v-model="message"
                            placeholder="Tapez votre message"
                            />
                            <button
                            type="submit"
                            class="btn btn-primary"
                            id="send-button"
                            style="background: #219935; border-color: #219935"
                            >
                                <i
                                    class="bx bx-send"
                                    style="font-size: 33px; color: white; width: 95px"
                                ></i>
                            </button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style scoped></style>
