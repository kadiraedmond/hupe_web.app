import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
       results: []
    }),
    getters: {
        // 
    },
    actions: {
        async search(searchTerm) {
            // 
        }
    }
})