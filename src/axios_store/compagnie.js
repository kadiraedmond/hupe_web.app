// import { defineStore } from 'pinia'

// import axios from 'axios'

// const API_BASE = 'https://hupe-api-beta-test.cyclic.app/api'

// export const useCompagnieStore = defineStore('compagnieStore', {
//     state: () => ({
//         compagnie: {},
//         vehiculesCompagnie: []
//     }),
//     getters: {
//         // 
//     },
//     actions: {
//         async setCompagnie(compagnieId) {
//             const { data } = await axios.get(`${API_BASE}/compagnie/${compagnieId}`)
//             this.compagnie = data
//         },

//         // async setVehiculesCompagnie(compagnieId) {
//         //     const { data } = await axios.get(`${API_BASE}/vehicule/${compagnieId}`)
//         //     this.vehiculesCompagnie = data
//         // }

//         async setVehiculesCompagnie(compagnieId) {
//             try {
//                 const { data } = await axios.get(`${API_BASE}/vehicule`, {
//                     params: {
//                         compagnie_id: compagnieId
//                     }
//                 })

//                 this.vehiculesCompagnie = data
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
// })