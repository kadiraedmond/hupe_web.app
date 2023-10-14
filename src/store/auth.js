import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {},
            confirmationResult: {}
        }
    },
    getters: {
        getConfirmationResult: state => {
            return state.confirmationResult
        }
    },
    actions: {
        async authenticate(authInstance, phone, verifier) {
            this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
        },
        setUser: user => {
            this.user = user
        }
    }
})