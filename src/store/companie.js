import { defineStore } from 'pinia'
import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

// const reservationColRef = collection(firestoreDb, "reservation");
const companiesColRef = collection(firestoreDb, "compagnies");
const companieRentedCarsColRef = collection(firestoreDb, "location_vehicules");

export const useCompanieStore = defineStore('companieStore', {
    state: () => ({
        companies: [],
        locationCompanies: [],
        popularLocationCompanies: [],
        transportCompanies: [],
        popularTransportCompanies: [],
        companieRentedCars: [],
        companieOneCar: null,
        companieCars: [],
        companieHistory: [],
        companie: {},
        totalAmount: 0
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

        async getPopularLocationCompanies() {
            try {
                const q = query(companiesColRef, where('type_compagnie', '==', 'Location'), where('offre', '==', 'vip'))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.popularLocationCompanies.push(doc.data()))

                return this.popularLocationCompanies
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
        
        async getPopularTransportCompanies() {
            try {
                const q = query(companiesColRef, where('type_compagnie', '==', 'Transport'), where('offre', '==', 'vip'))
                const snapshot = await getDocs(q);
                console.log(snapshot.docs)
                snapshot.docs.forEach((doc) => this.popularTransportCompanies.push(doc.data()))

                // console.log(this.popularTransportCompanies)
                return this.popularTransportCompanies
            } catch (error) {
                console.log(error);
            }
        },

        async getCompanieRentedCars(companieId) {
            try {
                const q = query(companieRentedCarsColRef, where('companie_id', '==', `${companieId}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieRentedCars.push(doc.data()))

                this.companieOneCar = this.companieRentedCars[0]
                return this.companieRentedCars
                } catch (error) {
                console.log(error);
            }

        },

        

        async getCompanieById(companieId) {
            try {
                const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
                const snapshot = await getDoc(companieDocRef);

                if(snapshot.exists()) this.companie = snapshot.data()

                return this.companie
            } catch (error) {
                console.log(error)
            }
        }
    },
    actions: {
        async setCompanieById(companyId) {
            try {
                const companieDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
                const snapshot = await getDoc(companieDocRef);

                if(snapshot.exists()) this.companie = snapshot.data()
            } catch (error) {
                console.log(error)
            }
        },
        async setCompanieCars(companieId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const companieSubColRef = collection(companieDocRef, 'vehicules_programmer')
            
            try {
                const snapshot = await getDocs(companieSubColRef);
                snapshot.docs.forEach((doc) => this.companieCars.push({ ...doc.data() }));
            } catch (error) {
                console.log(error)
            }
        },
        async setCompanieHistory(companyId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
            const companieSubColRef = collection(companieDocRef, 'hystory')

            try {
                const snapshot = await getDocs(companieSubColRef);
                snapshot.docs.forEach((doc) => this.companieHistory.push({ ...doc.data() }));
            } catch (error) {
                console.log(error)
            }
        },
        async setTotalAmount(companyId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
            const companieSubColRef = collection(companieDocRef, 'myAccount')
            const accountDocRef = doc(companieSubColRef, 'account')

            try {
                const snapshot = await getDoc(accountDocRef);

                if(snapshot.exists()) this.totalAmount = snapshot.data()
            } catch (error) {
                console.log(error)
            }
        },
    }
})
