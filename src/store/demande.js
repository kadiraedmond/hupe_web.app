import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const demandeColRef = collection(firestoreDb, "client_publication");


export const useDemandeStore = defineStore('demandeStore', {
    state: () => ({
        demandes: [],
        posts: []
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
        },
        async setPosts(userId) {
            try {
                const q = query(demandeColRef, where('client_id', '==', `${userId}`))
                const snapshots = await getDocs(q)
                snapshots.docs.forEach(doc => this.posts.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        }
    }
})