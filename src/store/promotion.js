import { defineStore } from 'pinia'
import { collection, doc, query, where, getDocs } from 'firebase/firestore'
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
                snapshots.docs.forEach(doc => this.offresVehicules.push(doc.data()))

                console.log(this.offresVehicules)
            } catch (error) {
                console.log(error)
            }
        },
        async getPopularDestinations() {
            try {
                const snapshots = await getDocs(programmeEnAvantColRef)
                snapshots.docs.forEach(doc => this.popularDestinations.push(doc.data()))

                return this.popularDestinations
            } catch (error) {
                console.log(error)
            }
        },
        async getPopularCars() {
            try {
                const snapshots = await getDocs(vehiculesEnAvantColRef)
                snapshots.docs.forEach(doc => this.popularCars.push(doc.data()))

                console.log(this.popularCars)
            } catch (error) {
                console.log(error)
            }
        }
    },

    actions: {
        async setCompaniePromotionCars(companyieId) {
            try {
                const q = query(vehiculeEnPromoColRef, where('compagnie_uid', '==', `${companyieId}`))
                const snapshots = await getDocs(q)

                snapshots.docs.forEach(doc => this.companiePromotionCars.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        }
    }
})