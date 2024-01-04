<script setup>
import { onBeforeMount, onMounted, ref } from 'vue' 
import { useRoute } from 'vue-router' 

import { addDoc, updateDoc, collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js' 

import { decryptParam } from '@/utils/hash.js'

import Swal from 'sweetalert2' 

import router from '@/router/router.js'

const route = useRoute()

const locationId = decryptParam(route.params.id)

const refresh = ()=>{
  window.location.reload()
} 

const option = ref('J\'ai changer d\'avis')
const autre_raison = ref('')

const annul = async () => {
  const docRef = doc(firestoreDb, 'location_vehicules', `${locationId}`)

  let raison
  if(option.value !== '' || option.value) {
    raison = option.value
  } else if(option.value == 'Autres' && autre_raison.value !== '') {
    raison = autre_raison.value
  } 

  try {
    await setDoc(docRef, { status: 'Annuler', raison_annulation: raison }, { merge: true })
    
    Swal.fire({
        title: "Succès",
        text: "Location annulée",
        icon: "success"
    }) 

    await router.push('/compte_client') 

    location.reload()
    
  } catch (error) {
    console.log(error)
  }

  
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
            <li> <router-link to="/" style="color: #219935;" >Location de véhicules</router-link></li>
            <li>Annuler</li>
          </ol>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container" >
  
              <div class="row no-gutters mt-4">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <h5>Raison de l’annulation</h5>
                            
                        </div>
                        <div class="col-md-12 " style="border: 1px solid #efefef; padding: 24px; border-radius: 10px;">
                    
                            <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <div class="row">
                                        <div class="col-6 text-start">
                                            <label class="form-check-label" for="exampleRadios1">
                                            J'ai changer d'avis
                                        </label>
                                        </div>
                                        <div class="col-6 text-end">
                                            <div class="row">
                                                <div class="col-4"></div>
                                                <div class="col-4"></div>
                                                <div class="col-4">
                                                    <input v-model="option" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="J'ai changer d'avis" checked>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <hr>
                            
                            <div class="col-md-12">
                                <div class="form-check">
                                    <div class="row">
                                        <div class="col-6 text-start">
                                            <label class="form-check-label" for="exampleRadios4">
                                Ne me convient pas
                                </label>
                                        </div>
                                        <div class="col-6 text-end">
                                            <div class="row">
                                                <div class="col-4"></div>
                                                <div class="col-4"></div>
                                                <div class="col-4">
                                                    <input v-model="option" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="Ne me convient pas">
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                
                                </div>
                            </div>
                            <hr>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <div class="row">
                                        <div class="col-6 text-start">
                                            <label class="form-check-label" for="exampleRadios5">
                                        Autres
                                    </label>
                                        </div>
                                        <div class="col-6 text-end">
                                            <div class="row">
                                                <div class="col-4"></div>
                                                <div class="col-4"></div>
                                                <div class="col-4">
                                                    <input v-model="option" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="Autres" >
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                
                                
                                </div>
                            </div>
                            <hr>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea v-model="autre_raison" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Commentaires</label>
                                </div>
                            </div>
                                    
                            

                            <div class="col-12 text-center">
                                <button @click="annul" class="btn btn-primary w-50" type="submit" style="background-color: red !important; border-color: red">Terminer </button>
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
.form-check-input[type=radio] {
    border-radius: 15% !important;
}
</style>