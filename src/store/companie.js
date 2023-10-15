import { defineStore } from 'pinia'
import { collection, query, doc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

// const reservationColRef = collection(firestoreDb, "reservation");
const companiesColRef = collection(firestoreDb, "compagnies");
const companieCarsColRef = collection(firestoreDb, "location_vehicules");

export const useCompanieStore = defineStore('companieStore', {
    state: () => ({
        companies: [],
        locationCompanies: [],
        transportCompanies: [],
        companieCars: [],
        companieOneCar: null,
        companieSubData: [],
        companie: {}
    }),
    getters: {
        async getAllCompanies() {
            try {
                const snapshot = await getDocs(companiesColRef);
                snapshot.docs.forEach((doc) => this.companies.push(doc.data()))
                
                return this.companies
                } catch (error) {
                console.log(error);
            }

        },

        async getLocationCompanies() {
            try {
                const q = query(companiesColRef, where('type_compagnie', '==', 'Location'))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.locationCompanies.push(doc.data()))

                return this.locationCompanies
            } catch (error) {
                console.log(error);
            }
        },

        async getTransportCompanies() {
            try {
                const q = query(companiesColRef, where('type_compagnie', '==', 'Tansport'))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.transportCompanies.push(doc.data()))

                return this.transportCompanies
            } catch (error) {
                console.log(error);
            }
        },

        async getCompanieRentedCars(companieId) {
            try {
                const q = query(companieCarsColRef, where('companie_id', '==', `${companieId}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieCars.push(doc.data()))

                this.companieOneCar = this.companieCars[0]
                return this.companieCars
                } catch (error) {
                console.log(error);
            }

        },

        async getCompanieCars(companieId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', companieId)
            const companieSubColRef = collection(companieDocRef, 'vehicules_programmer')
            
            try {
                const snapshot = await getDocs(companieSubColRef);
                snapshot.docs.forEach((doc) => this.companieSubData.push({ ...doc.data() }));

                return this.companieSubData
            } catch (error) {
                console.log(error)
            }
        },

        async getCompanie(companieId) {
            try {
                const q = query(companiesColRef, where('uid', '==', `${companieId}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companie.push(doc.data()))
                
                return this.companie[0] 
            } catch (error) {
                console.log(error)
            }
        }
    },
    actions: {
        // 
    }
})
