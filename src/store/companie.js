import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation");
const companieColRef = collection(firestoreDb, "compagnies");


export const useCompanieStore = defineStore('companie', {
    state: () => {
        return {
            companies: [],
            companie: {}
        }
    },
    getters: {
        async getCompanie(companieId) {
            const doc = await companieColRef.doc(companieId).get();
            if (doc.exists) {
                this.companie = doc.data()
            } else {
                console.log("Aucun utilisateur trouvé avec cet ID.");
            }

            return this.companie
        }
    },
    action: {
        // 
    }
})
