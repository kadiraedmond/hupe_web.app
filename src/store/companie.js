import { defineStore } from 'pinia'
import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

// const reservationColRef = collection(firestoreDb, "reservation");
const companiesColRef = collection(firestoreDb, "compagnies");
const companieRentedCarsColRef = collection(firestoreDb, "location_vehicules")

export const useCompanieStore = defineStore('companieStore', {
    state: () => ({
        companies: [],
        locationCompanies: [],
        popularLocationCompanies: [],
        transportCompanies: [],
        vipTransportCompanies: [],
        vipLocationCompanies: [],
        popularTransportCompanies: [],
        companieRentedCars: [],
        companieOneCar: null,
        companieCars: [],
        car: {},
        companieHistory: [],
        companieLocations: [],
        programmeVoyages: [],
        programme: {},
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
                snapshot.docs.forEach((doc) => {
                    const data = doc.data()
                    if(data.status == 'active') {
                        this.locationCompanies.push(data)
                    }
                })

                for(let i = 0; i < this.locationCompanies.length; i++) {
                    if(this.locationCompanies[i].offre == 'vip') {
                        this.vipLocationCompanies.push(this.locationCompanies[i])
                    }
                }
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
                snapshot.docs.forEach((doc) => {
                    const data = doc.data()
                    if(data.status == 'active') {
                        this.transportCompanies.push(data)
                    }
                })
                
                for(let i = 0; i < this.transportCompanies.length; i++) {
                    if(this.transportCompanies[i].offre == 'vip') {
                        this.vipTransportCompanies.push(this.transportCompanies[i])
                    }
                }
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
        resetCompanieCars() {
          this.companieCars = []  
        },
        async setCarById(carId, companieId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const companieSubColRef = collection(companieDocRef, 'vehicules_programmer')
            
            const docRef = doc(companieSubColRef, `${carId}`)

            const snapshot = await getDoc(docRef)
            try {
                if(snapshot.exists()) this.car = snapshot.data()
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
        async setCompanieLocations(companieId) {
            try {
                const q = query(companieRentedCarsColRef, where('compagnie_id', "==", `${companieId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieLocations.push({ ...doc.data() }))
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
        async setProgrammesVoyages(companyId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
            const programmeVoyagesColRef = collection(companieDocRef, 'programme_des_voyages')

            try {
                const snapshot = await getDocs(programmeVoyagesColRef);

                snapshot.docs.forEach((doc) => this.programmeVoyages.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        },
        async setProgrammeById(programmeId, companyId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
            const programmeVoyagesColRef = collection(companieDocRef, 'programme_des_voyages')

            const docRef = doc(programmeVoyagesColRef, `${programmeId}`)

            const snapshot = await getDoc(docRef)
            try {
                if(snapshot.exists()) this.programme = snapshot.data()
            } catch (error) {
                console.log(error)
            }
        }
    }
})
