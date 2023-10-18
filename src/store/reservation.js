import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation");
const locationVehiculesColRef = collection(firestoreDb, 'location_vehicules')


export const useReservationStore = defineStore('reservationStore', {
    state: () => ({
        reservations: [],
        companieLocations: [],
        confirmatedLocations: []
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
        async setCompanieLocations(companieId) {
            try {
                const q = query(locationVehiculesColRef, where('compagnie_id', "==", `${companieId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.companieLocations.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        }
    }
})
