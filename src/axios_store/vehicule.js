import { defineStore } from 'pinia'

import axios from 'axios'

const API_BASE = 'https://hupe-api-beta-test.cyclic.app/api'

export const useVehiculeStore = defineStore('vehiculeStore', {
    state: () => ({
        vehicule: [],
    }),
    getters: {
        // 
    },
    actions: {
        async setVehicule(vehiculeId) {
            const { data } = await axios.get(`${API_BASE}/vehicule/${vehiculeId}`)
            this.vehicule = data
        },

        async setVehicule() {
            // 
        }
    }
})