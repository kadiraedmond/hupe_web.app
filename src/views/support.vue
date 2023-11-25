<script setup> 
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue" 

import { addDoc, updateDoc, query, where, doc, getDocs, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js' 
import Swal from 'sweetalert2'


const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'lk1kQSCZDqeYK1cpu2uo2LSnN7u2' || savedUser.uid || authStore.user.uid 

const message = ref('')
const messages = ref([])
const receive_messages = ref([]) 
const show_input = ref(true)

const conversationUID = ref('') 

const conversations = ref([]) 

const internalMessageColRef = collection(firestoreDb, 'support_messages_admin') 

onBeforeMount(async () => {

  const q = query(internalMessageColRef, where('userId', '==', `${userId}`))
  const snapshot = await getDocs(q) 

  snapshot.docs.forEach(async doc => {
    const convervation_data = doc.data()

    const messageColRef = collection(doc.ref, 'messages') 
    
    const snapshots = await getDocs(messageColRef) 

    const messages = [] 
    
    snapshots.docs.forEach(messageDoc => messages.push(messageDoc.data())) 

    conversations.value.push({ ...convervation_data, messages }) 
  })

})

const handleConversationClick = (uid) => { 

  conversationUID.value = uid

  messages.value = [] 
  receive_messages.value = []

  // Trouver la conversation correspondant à l'ID
  const conversation = conversations.value.find(conversation => conversation.uid === uid) 

  if (conversation) {
    conversation.messages.forEach(message => {
      if(message.isAdmin === false) {
        messages.value.push(message) 
      } else if(message.isAdmin === true) {
        receive_messages.value.push(message)
      }
    }) 


    if(conversation.etat === 'Termine') {
      show_input.value = false
    } else {
      show_input.value = true
    }
    
  } else {
    // Gérer le cas où aucune conversation correspondante n'est trouvée
    console.error('Conversation not found for ID:', uid)
  }
} 

const sendMessage = async () => {
  const docRef = doc(firestoreDb, 'support_messages_admin', `${conversationUID.value}`) 

  const messagesColRef = collection(docRef, 'messages') 

  if(message.value === '') {
    Swal.fire({
      title: "Erreur", 
      text: "Entrez un message",
      icon: "error"
    })
  } else {
    const data = {
      dateSend: Timestamp.now(), 
      isAdmin: false, 
      isRead: false, 
      message: message.value 
    } 
  
    try {
      await addDoc(messagesColRef, data) 
      messages.value.push(message.value) 

      message.value = '' 
    } catch (error) {
      console.log(error) 
    } 
  } 
} 

const createNewConversation = async () => { 
  const data = { 
    uid: '', 
    clientNom: (!savedUser.raison_social || !!savedUser.raison_social) ? `${savedUser.lastName} ${savedUser.firstName}` : `${savedUser.raison_social}`, 
    clientNumber: `${savedUser.telephone}`, 
    createdAt: Timestamp.now(), 
    etat: 'Encour', 
    typeUser: (!savedUser.raison_social || !!savedUser.raison_social) ? 'client' : 'partenaire', 
    userId: userId
  } 

  try {
    const docRef = await addDoc(internalMessageColRef, data) 

    if(docRef) {
      await updateDoc(docRef, { uid: `${docRef.id}` }) 

      conversations.value.push(data) 

      Swal.fire({
        title: "Succès", 
        text: "Votre conversation a été créée",
        icon: "success"
      })
    }
  } catch (error) {
    console.log(error)
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
   

    <section id="features" class="features" style="margin-top: 70px; ">
      <div class="container-fluid">
        <div class="row" style="    position: fixed;
              top: 0;">
           <div class="col-md-4">
              <div class="row">
                  <div class="col-md-12" style="background-color:#219935 ; color: white">
                      <h5 class="mt-4 mb-4"><router-link to="/service_client" class="text-white"><i class='bx bx-arrow-back' ></i></router-link>   Conversations</h5>
                  </div>
              </div>
              <div class="row" style="height: 500px; overflow-y: scroll;">
                  
                  <div class="col-md-12 mt-3" v-for="(conversation, i) in conversations" :key="conversation.uid">
                    <router-link @click="() => handleConversationClick(conversation.uid)" to="/support">
                      <div class="row">
                        
                        <div class="col-2">
                            <img
                                src="/public/assets/img/avatars/1.png"
                                alt
                                class="w-px-40 h-auto rounded-circle"
                                style="max-width: 50px; max-height: 50px; border: 1px solid rgb(214, 214, 214);"
                            />
                        </div>
                        <div class="col-8">
                          <h6 style="font-size: 13px;">{{ conversation.objet }}</h6>
                          <p style="font-size: 13px;">{{ conversation.etat }}</p>
                        </div>
                        <div class="col-2 text-end">
                          <h5 class="card-title" style="color:#219935"> <i class='bx bx-chevron-right'></i> </h5>
                        </div>
                        
                      </div>
                    </router-link>
                    <hr>
                  </div>
  
              </div>
           </div>
           <div class="col-md-8" style="background: #F4F4F4;">
            <div class="row">
                <div class="col-md-3">
                    <div class="card mb-3 border-0" style="padding: 11px; background: #f4f4f4;">
                    <div class="row g-0">
                        <div class="col-md-4">
                          <img src="/public/assets/img/avatars/5.png" class="img-fluid rounded-start" alt="..." style=" border-radius: 50% !important; width: 70px;">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title" style="font-size: 14px;">Edmon</h5> 
                              <p class="card-text"  style="font-size: 12px;">administrateur</p>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                
                
            </div>
            <hr style="margin-top: -19px;">
            <div class="container">
              <div class="row">
                
                <div class="col-md-12">
                  <!-- Affichage des messages -->
                  <div id="messages" style="height: 435px; overflow-y: scroll; padding: 12px;">
                       <!-- ----------------------------- reception-------------------------------
                     ------------------------------------------------------------ -->
                    <div class="row" v-for="(message, i) in receive_messages" :key="i">
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;"> <i class='bx bx-check' style=" font-size: 15px; color: #219935;"></i>{{ new Intl.DateTimeFormat(undefined, options).format(message.dateSend) }}</div>
                        <div class="outgoing" style="background: white; padding: 10px; border-radius: 20px 20px 20px 0;">
                          <div class="message-text" style=" font-size: 14px;">{{ message.message }}</div>
                          
                        </div>
                        <div class="col-md-6">
                          
                        </div>
                      </div>
                    </div>

                    <!-- ----------------------------- envoi-------------------------------
                     ------------------------------------------------------------ -->

                    <div class="row" v-for="(message, i) in messages" :key="i">

                      <div class="col-md-6">
                         
                      </div>
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;"> {{ new Intl.DateTimeFormat(undefined, options).format(message.dateSend) }}</div>
                        <div class="'incoming" style="background: #DEEEE4; padding: 10px; border-radius: 20px 20px 0;">
                          <div class="message-text" style=" font-size: 14px;">{{ message.message }}</div>
                     
                        </div>
                      </div>
                    </div>

                    
                      
                   
                    
  
                    <!-- Ajoutez d'autres messages ici -->
                  </div>
                  <!-- Formulaire de saisie de messages -->
                  <form @submit.prevent="sendMessage" class="input-group mb-3" style="height: 43px;" v-if="show_input">
                    <input type="text" v-model="message" class="form-control" id="message-input" placeholder="Tapez votre message">
                    <button type="submit" class="btn btn-primary" id="send-button" style=" background: #219935; border-color: #219935;"> <i class='bx bx-send' style=" font-size: 33px; color: white; width: 95px;"></i></button>
                  </form>
                </div> 

                <div class="text-end">
                  <button @click="createNewConversation" class="btn btn-primary" style="background: #219935; border: #219935">Démarrer une nouvelle conversation</button>
                </div>
              </div>
           </div>
            
        </div>
           
           
        </div>
      </div>
    </section>

  </main>
    <!-- End #main -->
</template>
<style scoped>
 
</style>