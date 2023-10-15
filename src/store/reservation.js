import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation");


export const useReservationStore = defineStore('reservationStore', {
    state: () => ({
        reservations: [],
        companieReservations: []
    }),
    getters: {
        async getAllReservations() {
            try {
                const snapshot = await getDocs(reservationColRef);
                snapshot.docs.forEach((doc) => this.reservations.push(doc.data()))
                } catch (error) {
                console.log(error);
            }

            return this.reservations
        },
        async getCompanieReservation(companieId) {
            try {
                
                const q = query(reservationColRef, where('compagnie_id', "==", `${companieId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieReservations.push({ ...doc.data() }));
    
                return this.reservations
            } catch (error) {
                console.log(error)
            }
        }
    },
    action: {
        // 
    }
})
