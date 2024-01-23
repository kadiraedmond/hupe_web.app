<script setup>
import { onMounted, onBeforeMount, ref } from 'vue' 
import { useRoute } from 'vue-router' 
import { collection, query, doc, where, getDoc, getDocs, addDoc, Timestamp } from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js" 
import Swal from 'sweetalert2'
import { decryptParam } from '@/utils/hash.js'

const route = useRoute() 

const companieId = decryptParam(route.params.id) 

const savedUser = JSON.parse(localStorage.getItem('user'))

let companieDocRef 
let totalStars = 0 

const commentaires = ref('') 
const companieInfos = ref() 

onBeforeMount(async () => {
  window.scrollTo(0, 0) 
  companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`) 

  const snapshot = await getDoc(companieDocRef) 

  if(snapshot.exists()) companieInfos.value = snapshot.data() 
  
  const stars = document.querySelectorAll('#flexCheckChecked') 

  stars.forEach(star => { 
    star.addEventListener('click', () => { 
      for(let i = 0; i < Number(star.value); i++) {
        stars[i].checked = true 
      } 
      for(let i = stars.length - 1; i > Number(star.value) - 1; i--) {
        stars[i].checked = false 
      } 

      star.addEventListener('click', () => { 
        if(Number(star.value) === 1) { 
          if(star.checked = true) { 
            star.checked = false 
          } else {
            star.checked = true
          }
        }
      })
    }) 
  }) 
}) 

const sendNotations = async () => {
  const stars = document.querySelectorAll('#flexCheckChecked') 

  stars.forEach(star => {
    if(star.checked) {
      totalStars++ 
    }
  }) 

  const docRef = doc(firestoreDb, 'compagnies', `${companieId}`) 

  const notationsColRef = collection(docRef, 'client_avis') 

  const data = {
    client_telephone: savedUser.telephone, 
    commentaire: commentaires.value, 
    createdAt: Timestamp.now(), 
    nombre_etoile: totalStars 
  } 

  try {
    await addDoc(notationsColRef, data) 

    Swal.fire({
      title: "Succès",
      text: "Votre notation a été envoyée",
      icon: "success"
    }) 

    commentaires.value = ''
  } catch (error) {
    console.log(error) 
  } 
  totalStars = 0
} 

</script>
<template>
    <!-- ======= Breadcrumbs ======= -->
      <!-- <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li> <router-link to="/" style="color: #219935;" >Accueil</router-link></li>
            <li>Notations</li>
          </ol>
  
        </div>
      </section> -->
      <!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section style="margin-top: 90px;" id="portfolio-details" class="portfolio-details">
          <div class="container">
  
            <div class="row no-gutters mt-4">
                <div class="col-md-3"></div>
                <div class="col-md-6 justify-content-center">
                    <div class="row" style="border: 1px solid #efefef; border-radius: 10px; padding: 10px;">
                            <div class="col-md-12 mt-4">
                              <h6>Donnez-nous votre avis</h6>
                              <div class="row mt-3">
                                <div class="col-6 d-flex">
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service nul</p>

                                </div>
                                <div class="col-6">
                                   
                                </div>
                              </div>
                               

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service médiocre</p>

                                </div>
                                
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service passable</p>

                                </div>
                                 
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service assez bien</p>

                                </div>
                                
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#D9D9D9;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service bien</p>

                                </div>
                                 
                              </div>

                              <div class="row" style=" margin-top: -11px;">
                                <div class="col-12 d-flex">
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>
                                  <i class='bx bxs-star' style="color:#FBE739;"></i>

                                  <p style="margin-left: 18px; margin-top: -3px;">Service excelent</p>

                                </div>
                                 
                              </div>
                              
                              
                            </div>
                            <div class="col-md-12 mb-4">
                              <h6>Êtes-vous satisfait(e) du service de {{ companieInfos.type_compagnie.toLowerCase() }} de la compagnie {{ companieInfos.raison_social }}</h6>
                            <form @submit.prevent="sendNotations" class="row g-3 needs-validation mt-4" novalidate>
                              <div class="col-md-12 mb-4">
                                <div class="row">
                                  <div class="col-md-3"></div>
                                  <div class="col-md-6 d-flex" style="margin-left: -24px;">
                                    <div class="form-check" style="margin-left: 6px;">
                                     <input class="form-check-input" type="checkbox" value="1" id="flexCheckChecked" >
                                    </div>

                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="2" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="3" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="4" id="flexCheckChecked" >
                                    </div>
                                    <div class="form-check" style="margin-left: 6px;">
                                        <input class="form-check-input" type="checkbox" value="5" id="flexCheckChecked" >
                                    </div>
                                  </div>
                                  <div class="col-md-3"></div>
                                </div>
                                
                                 
                              </div>
                              <div class="col-md-12">
                                <div class="form-floating">
                                  <textarea v-model="commentaires" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                  <label for="floatingTextarea2">Commentaires</label>
                                </div>
                                 
                              </div>

                              
                              <div class="col-12 text-center">
                                <button class="btn btn-primary" type="submit" style="background-color:#219935 !important ; border-color:#219935 ;">Envoyer</button>
                              </div>
                            </form>
                            </div>
                           </div>
                </div>
                <div class="col-md-3"></div>
            </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style scoped>

.form-check-input {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid #d9d9d9; /* Couleur de l'étoile, vous pouvez la changer selon vos préférences */
    
}

.form-check-input::before {
  content: '';
  position: absolute;
  top: 12px;
  left: -25px;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 40px solid #d9d9d9; /* Couleur de l'étoile */
   
}

.form-check-input:checked {
    background-color: #fbe739 !important;
    border-color: #fbe739 !important;
}
</style>