import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const scannerColRef = collection(firestoreDb, 'scanneur')

export const useScannerStore = defineStore('scannerStore', {
    state: () => ({
        scanners: [],
        companyScanners: []
    }),
    getters: {
        // 
    },
    actions: {
        async setCompanyScanners(companyId) {
            const q = query(scannerColRef, where('compagnieUID', '==', `${companyId}`))
            const snapshots = await getDocs(q)
            snapshots.docs.forEach(doc => this.companyScanners.push(doc.data()))
        }
    }
})