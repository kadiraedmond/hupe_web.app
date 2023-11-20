<script setup> 
import { onBeforeMount, onMounted, computed, ref, reactive } from "vue" 

import { addDoc, updateDoc, query, where, doc, getDocs, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js' 


const savedUser = JSON.parse(localStorage.getItem('user'))

// const userId = savedUser.uid || authStore.user.uid
const userId = 'lk1kQSCZDqeYK1cpu2uo2LSnN7u2' || savedUser.uid || authStore.user.uid 

const message = ref('')
const messages = ref([])
const receive_messages = ref([]) 

const conversations = ref([]) 

const internalMessageColRef = collection(firestoreDb, 'support_messages_admin')

onBeforeMount(async () => {

  const q = query(internalMessageColRef, where('userId', '==', `${userId}`))
  const snapshot = await getDocs(q) 

  // for(let i = 0; i < snapshot.docs.length; i++) {
  //   conversations.value.push(snapshot.docs[i].data())
  // }

  snapshot.docs.forEach(async doc => {
    const convervation_data = doc.data()

    const messageColRef = collection(doc.ref, 'messages') 
    
    const snapshots = await getDocs(messageColRef) 

    const messages = [] 
    
    snapshots.docs.forEach(messageDoc => messages.push(messageDoc.data()))

    conversations.value.push({ ...convervation_data, messages }) 
  })

  console.log(conversations.value)



}) 

const sendMessage = async () => {

}
 
</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
   

    <section id="features" class="features" style="margin-top: 70px; ">
      <div class="container-fluid">
        <div class="row" style="position: fixed; top: 0;">
          <div class="col-md-4">
            <div class="row">
                <div class="col-md-12" style="background-color:#219935 ; color: white">
                    <h5 class="mt-4 mb-4"><router-link to="/service_client" class="text-white"><i class='bx bx-arrow-back' ></i></router-link>   Conversations</h5>
                </div>
            </div>
            <div class="row" style="height: 500px; overflow-y: scroll;">
                
              <div class="col-md-12 mt-3" v-for="(conversation, index) in conversations" :key="index">
                <router-link to="">
                  <div class="row">
                    <div class="col-2">
                      <img
                      src="/public/assets/img/avatars/1.png"
                      alt
                      class="w-px-40 h-auto rounded-circle"
                      style="max-width: 50px; max-height: 50px ; border: 1px solid rgb(214, 214, 214);"
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
         
                <hr />
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
                          <h5 class="card-title" style="font-size: 14px;">Joe doe</h5>
                          <p class="card-text"  style="font-size: 12px;">Administrateur</p>
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
                    <div class="row">
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;"> <i class='bx bx-check' style=" font-size: 15px; color: #219935;"></i> 10:32</div>
                        <div class="message incoming" style="    background: white; padding: 10px; border-radius: 20px 20px 20px 0;">
                          <div class="message-text" style=" font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</div>
                          
                        </div>
                      </div>
                      <div class="col-md-6">
                         
                      </div>

                      <div class="col-md-6">
                         
                      </div>
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;">   10:32</div>
                        <div class="message outgoing" style="    background: #DEEEE4; padding: 10px; border-radius: 20px 20px 0;">
                        <div class="message-text mt-2" style=" font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod </div>
                     
                      </div>
                    </div>

                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;"> <i class='bx bx-check' style=" font-size: 15px; color: #219935;"></i> 10:32</div>
                        <div class="message incoming" style="    background: white; padding: 10px; border-radius: 20px 20px 20px 0;">
                          <div class="message-text" style=" font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</div>
                          
                        </div>
                      </div>
                      <div class="col-md-6">
                         
                      </div>

                      <div class="col-md-6">
                         
                      </div>
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;">  10:32</div>
                        <div class="message outgoing" style="    background: #DEEEE4; padding: 10px; border-radius: 20px 20px 0;">
                        <div class="message-text" style=" font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor</div>
                       
                      </div>
                    </div>

                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;"> <i class='bx bx-check' style=" font-size: 15px; color: #219935;"></i> 10:32</div>
                        <div class="message incoming" style="    background: white; padding: 10px; border-radius: 20px 20px 20px 0;">
                          <div class="message-text" style=" font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</div>
                           
                        </div>
                      </div>
                      <div class="col-md-6">
                         
                      </div>

                      <div class="col-md-6">
                         
                      </div>
                      <div class="col-md-6">
                        <div class="message-time" style=" font-size: 11px;">   10:32</div>
                        <div class="message outgoing" style="    background: #DEEEE4; padding: 10px; border-radius: 20px 20px 0;">
                      <div class="message-text" style=" font-size: 14px;">Message sortant de l'utilisateur 2</div>
                      
                    </div>
                      </div>
                    </div>
                    
                  
                    <!-- Ajoutez d'autres messages ici -->
                  </div>
                  <!-- Formulaire de saisie de messages -->
                  <form class="input-group mb-3" style="height: 43px;">
                    <input type="text" class="form-control" id="message-input" placeholder="Tapez votre message">
                    <button class="btn btn-primary" id="send-button" style=" background: #219935; border-color: #219935;"> <i class='bx bx-send' style=" font-size: 33px; color: white; width: 95px;"></i></button>
                  </form>
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