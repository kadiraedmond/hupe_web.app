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
                this.companiesResults = [] 
                const companiesQuery = query(companiesColRef, where('status', '==', 'active')) 
                const companiesSnapshot = await getDocs(companiesQuery)
                companiesSnapshot.docs.forEach(doc => {
                    const companieData = doc.data() 

                    if(companieData.raison_social.toLowerCase().includes(searchTerm.toLowerCase()) || companieData.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                        this.companiesResults.push(companieData) 
                    }
                })


                // Recherche de vehicules 
                this.vehiculesResults = [] 
                const vehiculesSnapshots = await getDocs(vehiculeColRef) 
                vehiculesSnapshots.docs.forEach(async snap_doc => {
                    const programData = snap_doc.data() 

                    if(programData.vehicule.toLowerCase().includes(searchTerm.toLowerCase()) || programData.modele.toLowerCase().includes(searchTerm.toLowerCase())) {
                        const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                        const snapshot = await getDoc(companieDocRef)

                        let companie = {}
                        if(snapshot.exists()) companie = snapshot.data()
                        this.vehiculesResults.push({ ...programData, companieInfos: companie })
                    }
    
                })  
                
                
                // Recherche de trajets 
                this.trajetsResults = [] 
                const trajetsSnapshots = await getDocs(trajetsColRef) 
                trajetsSnapshots.docs.forEach(async snap_doc => {
                    const programData = snap_doc.data() 

                    if(programData.lieu_depart.toLowerCase().includes(searchTerm.toLowerCase()) || programData.destination.toLowerCase().includes(searchTerm.toLowerCase())) {
                        const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                        const snapshot = await getDoc(companieDocRef)
        
                        let companie = {}
                        if(snapshot.exists()) companie = snapshot.data()
                        this.trajetsResults.push({ ...programData, companieInfos: companie }) 
                    }
                })  

                this.results.push(this.companiesResults) 
                this.results.push(this.vehiculesResults) 
                this.results.push(this.trajetsResults) 
                
                } catch (error) {
                console.log(error)
            }
        }
    }
})