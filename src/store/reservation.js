import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation");


export const useReservationStore = defineStore('reservation', {
    state: () => {
        return {
            reservations: []
        }
    },
    getters: {
        async getReservations(companieId) {
            const q = query(reservationColRef, where('compagnie_id', "==", `${companieId}`));
            const snapshot = await getDocs(q);
            snapshot.docs.forEach((doc) => this.reservations.push({ ...doc.data() }));

            return this.reservations
        }
    },
    action: {
        // 
    }
})
