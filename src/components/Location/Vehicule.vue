<script setup>
import { useCompanieStore } from '@/store/companie.js'
import { useAuthStore } from '@/store/auth.js'
import { usePromotionStore } from '@/store/promotion.js'
import { onBeforeMount, onMounted, ref } from "vue"
import { ref as fireRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, doc, Timestamp, where, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { firestoreDb, storage } from "@/firebase/firebase.js"
import { toast } from 'vue3-toastify'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

const companieStore = useCompanieStore()
const authStore = useAuthStore()
const promotionStore = usePromotionStore()

const companieCars = ref([])

const isLoading = ref(false)

const savedUser = JSON.parse(localStorage.getItem('user'))

const userId = savedUser.uid || authStore.user.uid
// const userId = 'qdo1Ig1tnMlmvFCxa6OE'

onBeforeMount(async () => {
  isLoading.value = true
  await companieStore.setCompanieCars2(userId) // authStore.user.uid
  companieCars.value = companieStore.companieCars2 
})

onMounted(() => {
  window.scrollTo(0, 0)
})

const marque = ref('')
const modele = ref('')
const immatriculation = ref('')
const transmission = ref('')
const annee = ref('')
const moteur = ref('')
const prix_journalier = ref()
const prix_avec_chauffeur = ref()
const prix_interieur = ref()
const image1 = ref()
const image2 = ref()
const image3 = ref()
const image4 = ref()
const image5 = ref()

const isUploading = ref(false)

const handleSubmit = async () => {
  if(!image1.value || !image2.value || !image3.value || !image4.value || !image5.value) {
    Swal.fire({
      title: "Erreur",
      text: "Prenez soin de renseigner tous les champs avant de soumettre",
      icon: "error"
    })
    return
  }

  else {
    const docRef = doc(firestoreDb, 'compagnies', `${userId}`)
    const collectionRef = collection(docRef, 'vehicules_programmer')
  
    const data = {
      uid: '', 
      anne_vehicule: annee.value, 
      avecchauffeurprix: prix_avec_chauffeur.value, 
      boite: transmission.value, 
      capitalprix: 0, 
      compagnie_uid: userId, 
      enAvant: false, 
      enPromo: false, 
      country: savedUser.country,
      interieurpaysprix: prix_interieur.value, 
      modele: modele.value, 
      montant: prix_journalier.value, 
      montant_promotion: 0, 
      moteur: moteur.value, 
      serie_vehicule: immatriculation.value, 
      status: 'active', 
      vehicule: marque.value, 
      vehicule_image_url: image1.value, 
      vehicule_image_url2: image2.value, 
      vehicule_image_url3: image3.value, 
      vehicule_image_url4: image4.value, 
      vehicule_image_url5: image5.value, 
      addedAt: Timestamp.now() 
    }
    const newDoc = await addDoc(collectionRef, data)
  
    if(newDoc) {
      console.log('Document ajouté')
      try {
        await updateDoc(newDoc, { uid: `${newDoc.id}` }) 
        console.log('ID ajouté')
  
        const newData = { ...data, uid: `${newDoc.id}` }
        companieCars.value.push(newData)
  
        const vehiculeColRef = collection(firestoreDb, 'vehicules_programmer')
  
        await setDoc(doc(vehiculeColRef, `${newDoc.id}`), newData)
        
        await document.querySelector('.btn-close-a').click()
        Swal.fire({
          title: "Succès",
          text: "Votre véhicule a été ajouté",
          icon: "success"
        })
      } catch (error) {
        console.log(error)
      }
  
    }
  }
}

const handleFile1 = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image1.value = downloadURL
    isUploading.value = false
  }
}
const handleFile2 = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image2.value = downloadURL
    isUploading.value = false
  }
}
const handleFile3 = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image3.value = downloadURL
    isUploading.value = false
  }
}
const handleFile4 = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image4.value = downloadURL
    isUploading.value = false
  }
}
const handleFile5 = async (e) => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${companieStore.companie.uid}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    image5.value = downloadURL
    isUploading.value = false
  }
}

const taux_reduction = ref()
const montant = ref()
const date_debut = ref()
const date_fin = ref()

const in_promotion = ref(false)

const checkPromotion = async (car) => {
  if(car.enPromo === true) {
    in_promotion.value = false
    
    const result = await Swal.fire({
      text: 'Ce véhicule est déjà en promotion. Voulez-vous annuler la promotion ?',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    })

    if(result.isConfirmed) {
      const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
      const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

      const promotionDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'promotion')
      const carInPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')

      const docRef = doc(vehiculesColRef, `${car.uid}`) 

      try {
        await updateDoc(docRef, { enPromo: false }) 

        const carDocRef = doc(carInPromoColRef, `${car.uid}`) 

        await deleteDoc(carDocRef) 
        car.enPromo = false
        promotionStore.setCompaniePromotionCars(userId)

        Swal.fire({
          title: "Succès",
          text: "Votre véhicule n'est plus en promotion",
          icon: "success"
        }) 
      } catch (error) {
        console.log(error)
      }
    }
  }

  else if(car.enPromo === false) {
    in_promotion.value = true
  }
}

const promote = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer') 

  const promotionDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'promotion')
  const carInPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')

  const docRef = doc(vehiculesColRef, `${car.uid}`) 
  try {
    if(companieStore.companie.offre === 'vip') { 

      if(car.enPromo === false) { 

        if(car.montant <= Number(montant.value)) {
          Swal.fire({
            title: "Erreur",
            text: "Entrez un prix conforme à la réduction",
            icon: "error"
          }) 
        } 
        
        else {
          await updateDoc(docRef, { enPromo: true, montant_promotion: montant.value })
          
          const data = { 
            uid: car.uid, 
            ancien_montant: car.montant, 
            annee_vehicule: car.anne_vehicule, 
            boite: car.boite, 
            compagnie_uid: userId, 
            country: companieStore.companie.country, 
            createdAt: Timestamp.now(), 
            debut_promo: new Date(date_debut.value), 
            fin_promo: new Date(date_fin.value), 
            idTrack: uuidv4(), 
            modele: car.modele, 
            montant: montant.value, 
            moteur: car.moteur, 
            country: savedUser.country,
            pourcentage: taux_reduction.value, 
            vehicule: car.vehicule, 
            vehicule_image_url: car.vehicule_image_url
          }
        
          await setDoc(doc(carInPromoColRef, `${car.uid}`), data)
        
          console.log('Document ajouté') 
          car.enPromo = true
          promotionStore.setCompaniePromotionCars(userId)
          
          await location.reload()
          
          Swal.fire({
            title: "Succès",
            text: "Votre véhicule a été mis en promotion",
            icon: "success"
          })  
          
          // Mise a jour de la copie
          const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
          await updateDoc(vehiculeDocRef, { enPromo: true, montant_promotion: montant.value }) 

          const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
          
          // Si le vehicule est en avant
          if(car.enAvant === true) {
            const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
            const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
            const carDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
            
            await updateDoc(carDocRef, { enPromo: true, montant_promotion: montant.value })
          }
        }
      } 

      else if(car.enPromo === true) {
        await updateDoc(docRef, { enPromo: false, montant_promotion: 0 }) 

        const carDocRef = doc(carInPromoColRef, `${car.uid}`) 

        await deleteDoc(carDocRef) 
        car.enPromo = false
        promotionStore.setCompaniePromotionCars(userId)

        await location.reload()

        Swal.fire({
          title: "Succès",
          text: "Votre véhicule n'est plus en promotion",
          icon: "success"
        }) 

        // Mise a jour de la copie
        const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
        await updateDoc(vehiculeDocRef, { enPromo: false, montant_promotion: 0 }) 

        const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
        
        // Si le vehicule est en avant
        if(car.enAvant === true) {
          const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
          const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
          const carDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
          
          await updateDoc(carDocRef, { enPromo: false, montant_promotion: 0 })
        }
      } 

      document.querySelector('btn-close').click() 
    } 
    
    else {
      Swal.fire({
        title: "Erreur",
        text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
        icon: "error"
      })
    }
    
  } catch (error) {
    console.log(error)
  }

  
}

const unlock = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`) 

  try {
    if(car.status === 'desactive') {
      await updateDoc(docRef, { status: 'active' }) 
      car.status = 'active' 
    
      console.log('Véhicule dévérrouillé')
      Swal.fire({
        title: "Succès",
        text: "Véhicule dévérrouillé",
        icon: "success"
      }) 

      // Mise a jour de la copie
      const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
      await updateDoc(vehiculeDocRef, { status: 'active' }) 

      const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
      // si le vehicule est en promotion
      if(car.enPromo === true) {
        const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
        const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
        const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

        await updateDoc(carDocRef, { status: 'active' })
      }
      // Si le vehicule est en avant
      if(car.enAvant === true) {
        const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
        const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
        const carDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
        
        await updateDoc(carDocRef, { status: 'active' })
      }
  
    } else if(car.status === 'active') {
      await updateDoc(docRef, { status: 'desactive' }) 
      car.status = 'desactive' 
    
      console.log('Véhicule Vérrouillé') 

      Swal.fire({
        title: "Succès",
        text: "Véhicule Vérrouillé",
        icon: "success"
      }) 

      // Mise a jour de la copie
      const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
      await updateDoc(vehiculeDocRef, { status: 'desactive' })

      const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
      // si le vehicule est en promotion
      if(car.enPromo === true) {
        const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
        const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
        const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

        await updateDoc(carDocRef, { status: 'desactive' })
      }
      // Si le vehicule est en avant
      if(car.enAvant === true) {
        const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
        const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
        const careDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
        
        await updateDoc(careDocRef, { status: 'desactive' })
      }
    }
    
  } catch (error) {
    console.log(error)
  } 
}

const star = async (car) => {
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`) 
  
  try {
    if(companieStore.companie.offre === 'vip') {
      
      const miseEn_avantDocRef = doc(firestoreDb, 'compagnies_offre_vip', 'mise_en_avant')
      const carEn_avantColRef = collection( miseEn_avantDocRef, 'vehicule_en_avant') 

      const q = query(carEn_avantColRef, where('compagnie_uid', '==', `${userId}`)) 
      const snapshots = await getDocs(q) 

      let car_data 

      if(snapshots.docs.length > 0) {
        car_data = snapshots.docs[0].data()
      }

      if(snapshots.docs.length > 0 && car_data.uid !== car.uid) {
        Swal.fire({
          title: "Erreur",
          text: "Vous avez déjà un véhicule en avant",
          icon: "error"
        })
      } 
      
      else if((snapshots.docs.length > 0 && car_data.uid === car.uid) || snapshots.docs.length === 0) { 

        if(car.enAvant === false) {
          car.enAvant = true
          await updateDoc(docRef, { enAvant: true }) 
  
          await setDoc(doc(carEn_avantColRef, `${car.uid}`), { ...car, enAvant: true })
      
          console.log('Document ajouté') 

          await location.reload()
  
          Swal.fire({
            title: "Succès",
            text: "Votre véhicule a été mis en avant",
            icon: "success"
          })

          // Mise a jour de la copie
          const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
          await updateDoc(vehiculeDocRef, { enAvant: true })

          const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
          // si le vehicule est en promotion
          if(car.enPromo === true) {
            const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
            const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
            const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

            await updateDoc(carDocRef, { enAvant: true })
          }
  
        } 
        
        else if(car.enAvant === true) {
          car.enAvant = false
          await updateDoc(docRef, { enAvant: false }) 

          const carDocRef = doc(carEn_avantColRef, `${car.uid}`) 

          await deleteDoc(carDocRef) 

          await location.reload()

          Swal.fire({
            title: "Succès",
            text: "Votre véhicule n'est plus en avant",
            icon: "success"
          })

          // Mise a jour de la copie
          const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
          await updateDoc(vehiculeDocRef, { enAvant: false })

          const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
          // si le vehicule est en promotion
          if(car.enPromo === true) {
            const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
            const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
            const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

            await updateDoc(carDocRef, { enAvant: false })
          }
        }

      }
  

      console.log('ID ajouté') 
    
    } else {
      Swal.fire({
        title: "Erreur",
        text: "Vous ne pouvez pas effectuer cette action en raison de votre offre actuelle",
        icon: "error"
      })
    }
    
  } catch (error) {
    console.log(error)
  }

}

const remove = async (car) => {
  const SwlResult = await Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ce Véhicule ?',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  })

  if(SwlResult.isConfirmed) {
    const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
    const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

    const docRef = doc(vehiculesColRef, `${car.uid}`)

    await deleteDoc(docRef) 

    companieStore.setCompanieCars(userId)

    Swal.fire({
      title: "Succès",
      text: "Véhicule supprimé",
      icon: "success"
    }) 

    // Suppression de la copie
    const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`) 

    await deleteDoc(vehiculeDocRef)

    const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
    // si le vehicule est en promotion
    if(car.enPromo === true) {
      const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
      const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
      const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

      await deleteDoc(carDocRef)
    }
    // Si le vehicule est en avant
    if(car.enAvant === true) {
      const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
      const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
      const carDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
      
      await deleteDoc(carDocRef)
    }

    
  } else if (SwlResult.dismiss === Swal.DismissReason.cancel) {
    // 
  }
}

const edit_marque = ref()
const edit_modele = ref()
const edit_immatriculation = ref()
const edit_annee = ref()
const edit_prix_journalier = ref()
const edit_prix_chauffeur = ref()
const edit_prix_interieur = ref()
const edit_image = ref()

const handleEditPicture = async () => {
  const file = e.target.files[0]
  const storageRef = fireRef(storage, `location_vehicule/${userId}/${file.name}`)

  await uploadBytes(storageRef, file)
  
  const downloadURL = await getDownloadURL(storageRef)
  // console.log(downloadURL)

  if(!downloadURL) {
    isUploading.value = true
  } else {
    edit_image.value = downloadURL
    isUploading.value = false
  }
}

const update = async (car) => {
  
  const companieDocRef = doc(firestoreDb, 'compagnies', `${userId}`)
  const vehiculesColRef = collection(companieDocRef, 'vehicules_programmer')

  const docRef = doc(vehiculesColRef, `${car.uid}`)

  const data = {
    anne_vehicule: edit_annee.value ? edit_annee.value : car.anne_vehicule, 
    avecchauffeurprix: edit_prix_chauffeur.value ? edit_prix_chauffeur.value : car.avecchauffeurprix, 
    interieurpaysprix: edit_prix_interieur.value ? edit_prix_interieur.value : car.interieurpaysprix, 
    vehicule: edit_marque.value ? edit_marque.value : car.vehicule, 
    montant: edit_prix_journalier.value ? edit_prix_journalier.value : car.montant, 
    modele: edit_modele.value ? edit_modele.value : car.modele, 
    serie_vehicule: edit_immatriculation.value ? edit_immatriculation.value : car.serie_vehicule, 
    vehicule_image_url: image1.value ? image1.value : car.vehicule_image_url, 
    vehicule_image_url2: image2.value ? image2.value : car.vehicule_image_url2, 
    vehicule_image_url3: image3.value ? image3.value : car.vehicule_image_url3, 
    vehicule_image_url4: image4.value ? image4.value : car.vehicule_image_url4, 
    vehicule_image_url5: image5.value ? image5.value : car.vehicule_image_url5
  }

  await updateDoc(docRef, data)
  
  document.querySelector('.btn-close-m').click()

  // Mise a jour de la copie
  const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${car.uid}`)
  await updateDoc(vehiculeDocRef, data) 

  const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
  // si le vehicule est en promotion
  if(car.enPromo === true) {
    const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
    const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
    const carDocRef = doc(vehiculeEnPromoColRef, `${car.uid}`)

    await updateDoc(carDocRef, data)
  }
  // Si le vehicule est en avant
  if(car.enAvant === true) {
    const enAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
    const vehiculeEnAvantColRef = collection(enAvantDocRef, 'vehicule_en_avant')
    const carDocRef = doc(vehiculeEnAvantColRef, `${car.uid}`)
    
    await updateDoc(carDocRef, data)
  }
  
  await location.reload()

  Swal.fire({
    title: "Succès",
    text: "Votre véhicule a été mis à jour",
    icon: "success"
  }) 

}

const handleMarque = (e) => {
  edit_marque.value = e.target.value
}

const handleModele = (e) => {
  edit_modele.value = e.target.value
}

const handleImmatriculation = (e) => {
  edit_immatriculation.value = e.target.value
}

const handleAnneeVehicule = (e) => {
  edit_annee.value = e.target.value
}

const handleMontant = (e) => {
  edit_prix_journalier.value = e.target.value
}

const handlePrixChauffeur = (e) => {
  edit_prix_chauffeur.value = e.target.value
}

const handleInterieurPaysPrix = (e) => {
  edit_prix_interieur.value = e.target.value
}

</script>

<template>
  <div class="row mt-4">
    <div class="col-md-6"></div>
    <div class="col-md-6 text-end">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style="background-color: #219935; border-color: #219935"
      >
        <img
          src="/assets/img/icone/plus.png"
          class="img-fluid"
          alt="..."
        />
        Ajouter
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background-color: #219935; color : white">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Ajouter un véhicule
              </h1>
              <button
                type="button"
                class="btn-close-a"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Marque</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="marque"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Modéle</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="modele"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Immatriculation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    v-model="immatriculation"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label"
                    >Année</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    v-model="annee"
                    required
                  />
                </div>
                 
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Moteur</label>
                  <select id="inputState" v-model="moteur" class="form-select">
                   
                    <option value="Electrique">Electrique </option>
                    <option value="Essence">Essence </option>
                    <option value="Diesel">Diesel  </option>
                    <option value="Hybride">Hybride </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Transmission</label>
                  <select id="inputState" v-model="transmission" class="form-select">
                   
                    <option value="Manuelle">Manuelle </option>
                    <option value="Automatique">Automatique </option>
                  </select>
                </div>
                <div class="col-md-12">
                  <h2 style="font-size: 17px">Montant</h2>
                </div>

                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >Prix journalier</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prix_journalier"
                    required
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label"
                    >Option chauffeur</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom01"
                    v-model="prix_avec_chauffeur"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"
                    >Option intérieur</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom02"
                    v-model="prix_interieur"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Ajouter une image</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile1" 
                    accept="image/*"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    > Image 2</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile2" 
                    accept="image/*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Image 3</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile3" 
                    accept="image/*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Image 4</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile4" 
                    accept="image/*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom02" class="form-label"
                    >Image 5</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom02"
                    @change="handleFile5" 
                    accept="image/*"
                    required
                  />
                </div>
                

                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935"
                    type="submit"
                    :disabled="isUploading"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-4" v-if="companieCars.length > 0">
    <div class="col-md-6" v-for="(car, i) in companieCars" :key="i">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="car.vehicule_image_url"
              class="img-fluid rounded-start"
              alt="..."
              style="height: 100%; object-fit: cover"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <p class="card-text" style=""><strong>{{ car.vehicule }} | {{ car.modele }} |  {{ car.anne_vehicule }}   </strong></p>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="background-color: #219935; border-color: #219935;"
                  >
                    {{ car.montant }} FCFA
                  </button>
                </div>
                 
                <div class="col-md-6 mt-3">
                  <p class="card-text" style="">
                    <strong>Moteur </strong> <br> {{ car.moteur }}
                  </p>
                </div>

                <div class="col-md-6 mt-3">
                  <p class="card-text" style="  margin-left: 40px;">
                    <strong>Transmission</strong> <br> {{ car.vehicule.boite}}
                  </p>
                </div>

                
                <div class="col-6 mt-2">
                    <p class="card-text" style="">
                        <strong>  Vers l'intérieur </strong> <br>
                        {{ car.interieurpaysprix }} CFA 
                    </p>
                </div>  
                

                <div class="col-6 mt-2">
                   <p class="card-text" style="margin-left: 29px;">
                       <strong>  Avec chauffeur </strong> <br>
                      {{ car.avecchauffeurprix }} CFA 
                   </p>
                </div>
  
                <div class="col-md-6 mt-2">
                  <p class="card-text" style="">
                    <strong>Immatriculation </strong> {{ car.serie_vehicule }}
                  </p>
                </div>           

                <div class="col-md-12 mt-4 text-start">
                  <div class="row row-clols-md-5">
                    <div class="col">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        :data-bs-target="'#exampleModale' + i"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "
                      >
                        <img
                          src="/assets/img/icone/edit.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        :id="'exampleModale' + i"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabele"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header" style="background: #219935; color: white">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabele"
                              >
                                Modifier un véhicule
                              </h1>
                              <button
                                type="button"
                                class="btn-close-m"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                class="row g-3 needs-validation text-start"
                                novalidate
                                @submit.prevent="update(car)"
                              >
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Marque</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.vehicule"
                                    @input="handleMarque"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modéle</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.modele"
                                    @input="handleModele"
                                    required
                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Immatriculation</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.serie_vehicule"
                                    @input="handleImmatriculation"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Année</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.anne_vehicule"
                                    @input="handleAnneeVehicule"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <h2 style="font-size: 17px">Montant</h2>
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Prix journalier</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.montant"
                                    @input="handleMontant"
                                    required
                                  />
                                </div>

                                <div class="col-md-4">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Avec chauffeur</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom01"
                                    :value="car.avecchauffeurprix"
                                    @input="handlePrixChauffeur"
                                    required
                                  />
                                </div>
                                <div class="col-md-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >A l'intérieur</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    :value="car.interieurpaysprix"
                                    @input="handleInterieurPaysPrix"
                                    required
                                  />
                                </div>
                                <div class="col-md-12 mb-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modifier l'image</label
                                  >
                                  <div class="mb-2" style="max-width: 100%; max-height: 170px; display: flex; justify-content: center; border: 2px solid #E8E8E8">
                                    <img :src="car.vehicule_image_url" style="width: 100%" />
                                  </div>
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleFile1"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                                <div class="col-md-12 mb-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modifier l'image</label
                                  >
                                  <div class="mb-2" style="max-width: 100%; max-height: 170px; display: flex; justify-content: center; border: 2px solid #E8E8E8">
                                    <img :src="car.vehicule_image_url2" style="width: 100%" />
                                  </div>
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleFile2"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                                <div class="col-md-12 mb-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modifier l'image</label
                                  >
                                  <div class="mb-2" style="max-width: 100%; max-height: 170px; display: flex; justify-content: center; border: 2px solid #E8E8E8">
                                    <img :src="car.vehicule_image_url3" style="width: 100%" />
                                  </div>
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleFile3"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                                <div class="col-md-12 mb-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modifier l'image</label
                                  >
                                  <div class="mb-2" style="max-width: 100%; max-height: 170px; display: flex; justify-content: center; border: 2px solid #E8E8E8">
                                    <img :src="car.vehicule_image_url4" style="width: 100%" />
                                  </div>
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleFile4"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                                <div class="col-md-12 mb-4">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Modifier l'image</label
                                  >
                                  <div class="mb-2" style="max-width: 100%; max-height: 170px; display: flex; justify-content: center; border: 2px solid #E8E8E8">
                                    <img :src="car.vehicule_image_url5" style="width: 100%" />
                                  </div>
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="validationCustom02"
                                    @change="handleFile5"
                                    accept="image/*"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    type="submit"
                                  >
                                    Enregistrer
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col" v-if="companieStore.companie.offre == 'vip'">
                      <button
                        class="btn btn-primary"
                        style="
                          background-color: #219935;
                          border-color: #219935;
                        "
                        @click="star(car)"
                      >
                        <img 
                          v-if="car.enAvant === false"
                          src="/assets/img/icone/star.png"
                          class="img-fluid"
                          alt="..."
                        /> 
                        <i v-if="car.enAvant === true" style="color: #f2c33c" class="fa fa-star" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div class="col" v-if="companieStore.companie.offre == 'vip'">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style="background-color: #219935; border-color: #219935"
                        @click="checkPromotion(car)"
                      >
                        <img
                          src="/assets/img/icone/promotion.png"
                          class="img-fluid"
                          alt="..."
                        />
                      </button>

                      <!-- Modal -->
                      <div
                      v-if="in_promotion"
                        class="modal fade"
                        id="exampleModal1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Promouvoir un véhicule
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
                                class="row g-3 needs-validation text-start"
                                novalidate
                                @submit.prevent="promote(car)"
                              >
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Taux de réduction</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom01"
                                    v-model="taux_reduction"
                                    required
                                  />
                                </div>
                                <div class="col-md-12">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Montant</label
                                  >
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="montant"
                                    required

                                  />
                                </div>

                                <div class="col-md-6">
                                  <label
                                    for="validationCustom01"
                                    class="form-label"
                                    >Date de debut</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom01"
                                    v-model="date_debut"
                                    required
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="validationCustom02"
                                    class="form-label"
                                    >Date de fin</label
                                  >
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="date_fin"
                                    required
                                  />
                                </div>

                                <div class="col-12 text-center">
                                  <button
                                    class="btn btn-primary"
                                    style="
                                      background-color: #219935;
                                      border-color: #219935;
                                    "
                                    type="submit"
                                  >
                                    Promouvoir
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        id="a_compagnie"
                      >
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #219935;
                            border-color: #219935;
                          "
                          @click="unlock(car)"
                        >
                          <img 
                            v-if="car.status === 'active'"
                            src="/assets/img/icone/unlock.png"
                            class="img-fluid"
                            alt="..."
                          /> 
                          <i v-if="car.status === 'desactive'" class="fa fa-unlock" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col text-center">
                      <div id="a_compagnie">
                        <button
                          class="btn btn-primary"
                          style="
                            background-color: #ff000087;
                            border-color: #ff000087;
                          "
                          @click="remove(car)"
                        >
                          <img
                            src="/assets/img/icone/delete.png"
                            class="img-fluid"
                            alt="..."
                          />
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
    </div>
  </div>
  <div class="w-100" v-else>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card text-center border-0">
            <div class="text-center">
              <img src="/assets/img/icone/trajet.png" alt="" class="img-fluid w-50">
            </div>
            
            <div class="card-body">
              <p class="card-text">Aucun véhicule disponible</p>
            </div>
          </div>
         
          
        </div>
        <div class="col-md-3"></div>
      </div>
  </div>
</template>
<style></style>