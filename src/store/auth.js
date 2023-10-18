import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: {},
        isConnected: false,
        isCompany: false,
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
            if(user.raison_social) this.isCompany = true
        },
        signOut() {
            this.user = {}
            this.isConnected = false
            this.isCompany = false
        }
    }
})