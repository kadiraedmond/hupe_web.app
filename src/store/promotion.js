import { defineStore } from 'pinia'
import { collection, doc, query, where, getDoc, getDocs } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'

const vipCompaniesColRef = collection(firestoreDb, 'compagnies_offre_vip')
const promotionDocRef = doc(vipCompaniesColRef, 'promotion')
const vehiculeEnPromoColRef = collection(promotionDocRef, 'vehicule_en_promo')

const miseEnAvantDocRef = doc(vipCompaniesColRef, 'mise_en_avant')
const programmeEnAvantColRef = collection(miseEnAvantDocRef, 'programme_en_avant')
const vehiculesEnAvantColRef = collection(miseEnAvantDocRef, 'vehicule_en_avant')

export const usePromotionStore = defineStore('promotionStore', {
    state: () => ({
        offresVehicules: [],
        popularDestinations: [],
        popularCars: [],
        vehicule: {},
        programme: {},
        companiePromotionCars: []
    }),

    getters: {
        async getPromotionOffres() {
            try {
                const snapshots = await getDocs(vehiculeEnPromoColRef)
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
                const snapshots = await getDocs(programmeEnAvantColRef)
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
                const snapshots = await getDocs(vehiculesEnAvantColRef)
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
            try {
                const q = query(vehiculeEnPromoColRef, where('compagnie_id', '==', `${companieId}`))
                const snapshots = await getDocs(q)

                snapshots.docs.forEach(doc => this.companiePromotionCars.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        },
        async setProgramme(programmeId) {           
            const programmeDocRef = doc(firestoreDb, 'programme_des_voyages', `${programmeId}`)
            
            const snapshot = await getDoc(programmeDocRef)
            
            if(snapshot.exists()) this.programme = snapshot.data()
        },
        async setVehicule(vehiculeId) {
            const vehiculeDocRef = doc(firestoreDb, 'vehicules_programmer', `${vehiculeId}`)

            const snapshot = await getDoc(vehiculeDocRef)

            if(snapshot.exists()) this.vehicule = snapshot.data()
        }
    }
})