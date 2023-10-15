import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: {},
        confirmationResult: {}
    }),
    getters: {
        getConfirmationResult() {
            return this.confirmationResult
        }
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
        }
    }
})