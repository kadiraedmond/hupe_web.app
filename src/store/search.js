import { defineStore } from 'pinia'
import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companiesColRef = collection(firestoreDb, "compagnies")
const locationVehiculeColRef = collection(firestoreDb, "location_vehicules")
const reservationColRef = collection(firestoreDb, "reservation")
const vehiculeColRef = collection(firestoreDb, 'vehicules_programmer')

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
       results: []
    }),
    getters: {
        // 
    },
    actions: {
        async search(searchTerm) {
            try {
                let companies = []
                const snapshot = await getDocs(companiesColRef);
                snapshot.docs.forEach((doc) => companies.push(doc.data()))

                let valideCompanies = []
                companies.forEach(comp => {
                    if(comp.status == 'active') {
                        valideCompanies.push(comp)
                    }
                })

                valideCompanies.forEach(companie => {
                    if(companie.raison_social == searchTerm || companie.description == searchTerm) {
                        this.results.push(companie)
                    }
                })
                
                } catch (error) {
                console.log(error)
            }
        }
    }
})