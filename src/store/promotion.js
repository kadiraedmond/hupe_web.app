import { defineStore } from 'pinia'
import { collection, doc, query, where, getDoc, getDocs } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js' 
import axios from 'axios'

const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')

const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')
const programmeEnPromoColRef = collection(promotionDocRef, 'programme_en_promo')

const miseEnAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
const programmeEnAvantColRef = collection(miseEnAvantDocRef, 'programme_en_avant')
const vehiculesEnAvantColRef = collection(miseEnAvantDocRef, 'vehicule_en_avant') 

const API_URL = 'https://ipinfo.io/json?token=4e774d02603f38' 

export const usePromotionStore = defineStore('promotionStore', {
    state: () => ({ 
        country: '', 
        offresVehicules: [],
        popularDestinations: [],
        popularCars: [],
        vehicule: {},
        programme: {},
        companiePromotionCars: [],
        companiePromotionProgrammes: []
    }),

    getters: {
        async getPromotionOffres() {
            try {
                
                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(vehiculeEnPromoColRef, where('country', '==', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.offresVehicules.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            }
        },
        async getPopularDestinations() {
            try { 

                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(programmeEnAvantColRef, where('country', '==', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.popularDestinations.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            }
        },
        async getPopularCars() {
            try { 

                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(vehiculesEnAvantColRef, where('country', '==', `${this.country}`)) 
                
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.popularCars.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            }
        }
    },

    actions: {
        async setCompaniePromotionCars(companieId) { 
            this.companiePromotionCars = [] 
            try {
                const q = query(vehiculeEnPromoColRef, where('compagnie_uid', '==', `${companieId}`))
                const snapshots = await getDocs(q)

                snapshots.docs.forEach(doc => this.companiePromotionCars.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        },
        async setCompaniePromotionProgrammes(companieId) { 
            this.companiePromotionProgrammes = [] 
            try {
                const q = query(programmeEnPromoColRef, where('compagnie_uid', '==', `${companieId}`))
                const snapshots = await getDocs(q)

                snapshots.docs.forEach(doc => this.companiePromotionProgrammes.push(doc.data()))

                console.log(this.companiePromotionProgrammes)
            } catch (error) {
                console.log(error)
            }
        },
        async setProgramme(companieId, programmeId) { 
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const programmesColRef = collection(companieDocRef, `programme_des_voyages`)
            const programmeDocRef = doc(programmesColRef, `${programmeId}`)
            
            const snapshot = await getDoc(programmeDocRef)
            
            if(snapshot.exists()) this.programme = snapshot.data()
        },
        async setVehicule(companieId, vehiculeId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const vehiculesColRef = collection(companieDocRef, `vehicules_programmer`)
            const vehiculeDocRef = doc(vehiculesColRef, `${vehiculeId}`)

            const snapshot = await getDoc(vehiculeDocRef)

            if(snapshot.exists()) this.vehicule = snapshot.data()
        }, 
        async setCountry(val) {
            this.country = val 
            console.log(this.country) 

            // mettre a jour les offres de vehicules
            try {
                this.offresVehicules = []
                const q = query(vehiculeEnPromoColRef, where('country', '==', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.offresVehicules.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            } 


            // mettre a jour les Destinations Populaires
            try { 

                this.popularDestinations = []
                const q = query(programmeEnAvantColRef, where('country', '==', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.popularDestinations.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            } 


            // mettre a jour les Vehicules Populaires
            try { 

                this.popularCars = []
                const q = query(vehiculesEnAvantColRef, where('country', '==', `${this.country}`)) 
                
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_uid}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.popularCars.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})