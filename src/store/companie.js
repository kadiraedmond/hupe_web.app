import { defineStore } from 'pinia'
import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js" 
import axios from 'axios'

// const reservationColRef = collection(firestoreDb, "reservation")
const companiesColRef = collection(firestoreDb, "compagnies")
const companieRentedCarsColRef = collection(firestoreDb, "location_vehicules")

const API_URL = 'https://ipinfo.io/json?token=4e774d02603f38' 

export const useCompanieStore = defineStore('companieStore', {
    state: () => ({
        companies: [], 
        country: '', 
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
                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(companiesColRef, where('country', '==', `${this.country}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companies.push(doc.data()))
                
                return this.companies
                } catch (error) {
                console.log(error)
            }

        },

        async getLocationCompanies() {
            try { 
                const { data } = await axios.get(API_URL)

                this.country = data.country
                
                const q = query(companiesColRef, where('type_compagnie', '==', 'Location'), where('country', '==', `${this.country}`))
                const snapshot = await getDocs(q)
                snapshot.docs.forEach(async (doc) => {
                    const data = doc.data()
                    if(data.status == 'active') { 
                        // const notationColRef = collection(doc.ref, 'client_avis') 
                        
                        // const snapshots = await getDocs(notationColRef) 

                        // let totalEtoiles = 0 
                        // snapshots.docs.forEach(not_doc => { 
                        //     const notationData = not_doc.data() 
                        //     totalEtoiles += Number(notationData.nombre_etoile)
                        // }) 
                        
                        // const notation = Math.round((totalEtoiles / snapshots.docs.length) * 20) 
                        // console.log({ ...data, notation }) 

                        this.locationCompanies.push(data) 
                    }
                }) 

                console.log(this.locationCompanies)

                for(let i = 0; i < this.locationCompanies.length; i++) {
                    if(this.locationCompanies[i].offre == 'vip') {
                        this.vipLocationCompanies.push(this.locationCompanies[i])
                    }
                }
            } catch (error) {
                console.log(error)
            }

        },

        async getPopularLocationCompanies() {
            try { 
                const { data } = await axios.get(API_URL)

                this.country = data.country 

                const q = query(companiesColRef, where('type_compagnie', '==', 'Location'), where('offre', '==', 'vip'), where('country', '==', `${this.country}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.popularLocationCompanies.push(doc.data()))

                return this.popularLocationCompanies
            } catch (error) {
                console.log(error);
            }
        },

        
        async getTransportCompanies() {
            try { 
                const { data } = await axios.get(API_URL)

                this.country = data.country 

                const q = query(companiesColRef, where('type_compagnie', '==', 'Tansport'), where('country', '==', `${this.country}`))
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
                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(companiesColRef, where('type_compagnie', '==', 'Transport'), where('offre', '==', 'vip'), where('country', '==', `${this.country}`))
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
                const q = query(companieRentedCarsColRef, where('companie_uid', '==', `${companieId}`))
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
            
            this.companieCars = [] 
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
                const q = query(companieRentedCarsColRef, where('compagnie_uid', "==", `${companieId}`));
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
        }, 
        async setCountry(val) {
            this.country = val 
            console.log(this.country) 

            // mettre a jour les compagnies de location
            try { 

                this.locationCompanies = [] 
                this.vipLocationCompanies = []
                const q = query(companiesColRef, where('type_compagnie', '==', 'Location'), where('country', '==', `${this.country}`))
                const snapshot = await getDocs(q)
                snapshot.docs.forEach((doc) => {
                    const data = doc.data()
                    if(data.status == 'active') {
                        this.locationCompanies.push(data)
                    }
                }) 

                console.log(this.locationCompanies)

                for(let i = 0; i < this.locationCompanies.length; i++) {
                    if(this.locationCompanies[i].offre == 'vip') {
                        this.vipLocationCompanies.push(this.locationCompanies[i])
                    }
                }
            } catch (error) {
                console.log(error)
            } 

            // mettre a jour les compagnies de reservation
            try { 

                const q = query(companiesColRef, where('type_compagnie', '==', 'Tansport'), where('country', '==', `${this.country}`))
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
        }
    }
})
