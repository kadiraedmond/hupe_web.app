<script setup>
import { onMounted, onBeforeMount, computed, ref } from 'vue'
import { firestoreDb } from "@/firebase/firebase.js"
import { updateDoc, doc, getDocs, query, where, collection, getDoc } from "firebase/firestore"

import { useNotificationStore } from '@/store/notification.js' 

import Swal from 'sweetalert2'

const notificationStore = useNotificationStore() 

let connectedUser 

const notifications = ref([])

const notificationColRef = collection(firestoreDb, 'notifications')

const noneReadNotifications = ref([])

const isLoading = ref(false)

const notifications_desc = computed(() => notifications.value.sort((a,b) => {
	return b.createdAt - a.createdAt
})) 

const noneReadNotifications_desc = computed(() => noneReadNotifications.value.sort((a,b) => {
	return b.createdAt - a.createdAt
}))

onBeforeMount(async () => {
    isLoading.value = true
    connectedUser = JSON.parse(localStorage.getItem('user')) || authStore.user 

    if(connectedUser.raison_social) {
        const q = query(notificationColRef, where('userId', '==', `${connectedUser.uid}`))

        const snapshot = await getDocs(q)
        snapshot.docs.forEach(doc => notifications.value.push(doc.data()))
    } else {
        const q = query(notificationColRef, where('destinataire', '==', `${connectedUser.uid}`))

        const snapshot = await getDocs(q)
        snapshot.docs.forEach(doc => notifications.value.push(doc.data()))
    }

    // const q = query(notificationColRef, where('destinataire', 'array-contains', `${connectedUser.uid}`))

    // const snapshot = await getDocs(q)
    // snapshot.docs.forEach(doc => notifications.value.push(doc.data()))

    notifications.value.forEach(notification => {
        if(notification.lu === false) {
            noneReadNotifications.value.push(notification)
        }
    }) 


    isLoading.value = false
})

const readNotifications = async (notification) => { 
    Swal.fire({
        title: `${notification.title}`,
        text: `${notification.message}`,
        icon: "info"
    })

    if(notification.lu === false) {
        const docRef = doc(notificationColRef, `${notification.uid}`)
    
        await updateDoc(docRef, { lu: true }) 
        
        notifications.value.forEach(noti => {
            if(noti.uid === notification.uid) {
                noti.lu = true
            }
        })
            
        let noneReads = []
        notifications.value.forEach(notification => {
            if(notification.lu === false) {
                noneReads.push(notification)
            }
        })
        
        noneReadNotifications.value = noneReads
    
        notificationStore.setCount(noneReadNotifications.value.length)
    }

}

const refresh = ()=>{
  window.location.reload()
 } 
 
onMounted(() => {
  window.scrollTo(0, 0)
  this.refresh()
})

</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Accueil</router-link></li>
            <li>Notifications</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" >
  
            <div class="row no-gutters mt-4">
                <div class="col-md-1"></div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <!-- <h3 style=" font-size: 20px; font-weight: 600;">Notifications</h3> -->
                            
                        </div>
                        <div class="col-md-12 " style="background: rgb(249, 249, 249); padding: 24px; border-radius: 10px; margin-top: 22px;">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="padding: 72px; margin-top: -149px;">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Toutes</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Non lues</button>
                            </li>
                            
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0" style="padding: 72px; margin-top: -107px;">
                                <div class="row">
                                    <div v-if="notifications.length > 0">
                                        <div class="col-md-12 mb-3" v-for="(notification, index) in notifications" :key="index">
                                            <div @click="readNotifications(notification)" class="card border-0 survol">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 d-flex">
                                                            <img
                                                                src="/assets/img/avatars/1.png"
                                                                alt
                                                                class="w-px-40 h-auto rounded-circle"
                                                                style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                            />
                                                            <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">{{ notification.title }}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-2">
                                                        <div class="col-10">
                                                            <p class="card-text" style="font-size: 13px;">{{ notification.message }}</p> 
                                                        </div>
                                                        <div class="col-2 text-end">
                                                            <p style="color: #219935;"><i class='bx bx-check-double' :style="notification.lu === true && `color: #5bc0ea`" ></i></p>
                                                        </div>
                                                    </div>                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <Loader 
                                        style="position: absolute; left: -28.8%; top: 26.8%"
                                        v-if="isLoading" 
                                    /> 

                                    <div class="w-100" v-if="isLoading === false && notifications.length === 0">
                                        <div class="row">
                                            <div class="col-md-3"></div>
                                            <div class="col-md-6">
                                                <!-- <div class="card text-center border-0"> -->
                                                <div class="text-center">
                                                    <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                                </div>
                                                
                                                <div class="card-body text-center">
                                                    <p class="card-text">Aucune notification n'est disponible.</p>
                                                </div>
                                            </div>
                                    
                                            <div class="col-md-3"></div>
                                        </div>
                                    </div>
                                                                    
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0" style="padding: 72px; margin-top: -107px;">
                                <div class="row">
                                    <div v-if="noneReadNotifications.length > 0">
                                        <div class="col-md-12 mb-3" v-for="(noneReadNotification, index) in noneReadNotifications" :key="index">
                                            <div @click="readNotifications(noneReadNotification)" class="card border-0 survol">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 d-flex">
                                                            <img
                                                                src="/assets/img/avatars/1.png"
                                                                alt
                                                                class="w-px-40 h-auto rounded-circle"
                                                                style="max-width: 40px; max-height: 40px ; border: 1px solid rgb(214, 214, 214);"
                                                            />
                                                            <h5 class="card-title" style="font-size: 14px; margin-left: 10px; margin-top: 14px;">{{ noneReadNotification.title }}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-2">
                                                        <div class="col-10">
                                                            <p class="card-text" style="font-size: 13px;">{{ noneReadNotification.message }}</p> 
                                                        </div>
                                                        <div class="col-2 text-end">
                                                            <p style="color: #219935;"><i class='bx bx-check-double' :style="noneReadNotification.lu === true && `color: #5bc0ea`" ></i></p>
                                                        </div>
                                                    </div>                                       
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                    <Loader 
                                        style="position: absolute; left: -28.8%; top: 26.8%"
                                        v-if="isLoading" 
                                    />

                                    <div class="w-100" v-if="isLoading === false && noneReadNotifications.length === 0">
                                        <div class="row">
                                            <div class="col-md-3"></div>
                                            <div class="col-md-6">
                                                <!-- <div class="card text-center border-0"> -->
                                                <div class="text-center">
                                                    <img src="/assets/img/icone/col.png" alt="" class="img-fluid w-50">
                                                </div>
                                                
                                                <div class="card-body text-center">
                                                    <p class="card-text">Aucune notification non lue n'est actuellement disponible .</p>
                                                </div>
                                            </div>
                                    
                                            <div class="col-md-3"></div>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col-md-1"></div>
        </div>
    </div>
</section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>
.form-check-input[type=radio] {
    border-radius: 15% !important;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #219935;
}
.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius);
    color: black;
}

.survol:hover {
    cursor: pointer;
}
</style>