import { defineStore } from 'pinia'
import { collection, query, doc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation")


export const useReservationStore = defineStore('reservationStore', {
    state: () => ({
        reservations: [],
        companieLocations: [],
        vehicules: [],
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
    },
    actions: {
        async setVehicules(companieId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const companieSubColRef = collection(companieDocRef, 'programme_des_voyages')
            
            try {
                const snapshot = await getDocs(companieSubColRef);
                snapshot.docs.forEach((doc) => this.vehicules.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        },
        async setCompanieReservations(companieId) {
            try {
                const q = query(reservationColRef, where('compagnie_id', "==", `${companieId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieReservations.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        }
    }
})
