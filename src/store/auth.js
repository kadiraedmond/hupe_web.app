import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: {},
        isConnected: false,
        isLocationCompany: false,
        isReservationCompany: false,
        isBigEnginsCompany: false,
        isCarsSellingCompany: false,
        confirmationResult: {}
    }),
    getters: {
        // 
    },
    actions: {
        async authenticate(authInstance, phone, verifier) {
            try {
                this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                } catch (error) {
               console.log(error) 
            }
        },
        setUser(user) {
            this.user = user
            this.isConnected = true
            if(user.type_compagnie == 'Transport') {
                this.isReservationCompany = true
            } else if(user.type_compagnie == 'Location') {
                this.isLocationCompany = true
            }
        },
        signOut() {
            this.user = {}
            this.isConnected = false
            this.isLocationCompany = false
            this.isReservationCompany = false
        }
    }
})