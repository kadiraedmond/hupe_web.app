import { defineStore } from 'pinia'
import { collection, query, doc, where, getDoc, getDocs, and, or} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companiesColRef = collection(firestoreDb, "compagnies")
const locationVehiculeColRef = collection(firestoreDb, "location_vehicules")
const reservationColRef = collection(firestoreDb, "reservation") 
const trajetsColRef = collection(firestoreDb, 'programme_des_voyages') 
const vehiculeColRef = collection(firestoreDb, 'vehicules_programmer') 

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
       results: [], 
       companiesResults: [], 
       vehiculesResults: [], 
       trajetsResults: [], 
    }),
    getters: {
        // 
    },
    actions: {
        async search(searchTerm) { 
            try { 
                
                // Recherche de compagnies 
                const companiesQuery = query(companiesColRef, and(where('status', '==', 'active'), or(where('raison_social', '==', `${searchTerm}`), where('description', '==', `${searchTerm}`))))
                const companiesSnapshot = await getDocs(companiesQuery)
                companiesSnapshot.docs.forEach((doc) => this.companiesResults.push(doc.data()))


                // Recherche de vehicules 
                const vehiculesQuery = query(vehiculeColRef, or(where('vehicule', '==', `${searchTerm}`), where('modele', '==', `${searchTerm}`)))
                const vehiculesSnapshots = await getDocs(vehiculesQuery) 
                vehiculesSnapshots.docs.forEach(doc => this.vehiculesResults.push(doc.data()))  

                
                // Recherche de trajets 
                const trajetsQuery = query(trajetsColRef, or(where('lieu_depart', '==', `${searchTerm}`), where('destination', '==', `${searchTerm}`))) 
                const trajetsSnapshots = await getDocs(trajetsQuery) 
                trajetsSnapshots.docs.forEach(doc => this.trajetsResults.push(doc.data()))  

                this.results.push(this.companiesResults) 
                this.results.push(this.vehiculesResults) 
                this.results.push(this.trajetsResults) 
                
                } catch (error) {
                console.log(error)
            }
        }
    }
})