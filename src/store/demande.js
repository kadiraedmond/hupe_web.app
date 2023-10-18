import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const demandeColRef = collection(firestoreDb, "client_publication");


export const useDemandeStore = defineStore('demandeStore', {
    state: () => ({
        demandes: []
    }),
    getters: {
        // 
    },
    actions: {
        async setDemandes(companyId) {
            try {
                const q = query(demandeColRef, where('lecteurs', "array-contains", `${companyId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.demandes.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        }
    }
})