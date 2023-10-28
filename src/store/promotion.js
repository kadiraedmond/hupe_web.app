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
                const q = query(vehiculeEnPromoColRef, where('compagnie_uid', '==', `${companieId}`))
                const snapshots = await getDocs(q)

                snapshots.docs.forEach(doc => this.companiePromotionCars.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        }
    }
})