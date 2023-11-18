import { defineStore } from 'pinia'
import { collection, query, doc, getDoc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const reservationColRef = collection(firestoreDb, "reservation")


export const useReservationStore = defineStore('reservationStore', {
    state: () => ({
        reservations: [],
        companieLocations: [],
        trajets: [],
        companieReservations: [],
        userReservations: [], 
        reservation: {} 
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
        async setTrajets(companieId) {
            const companieDocRef = doc(firestoreDb, 'compagnies', `${companieId}`)
            const companieSubColRef = collection(companieDocRef, 'programme_des_voyages')
            
            try {
                const snapshot = await getDocs(companieSubColRef);
                snapshot.docs.forEach((doc) => this.trajets.push({ ...doc.data() }))
                console.log(this.trajets)
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
        },
        async setUserReservations(userId) {
            try {
                const q = query(reservationColRef, where('client_id', "==", `${userId}`));
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_id}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.userReservations.push({ ...programData, companieInfos: company })

                }
                console.log(this.userReservations)
                // snapshot.docs.forEach((doc) => this.userReservations.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        }, 
        async setReservationById(reservationId) {
            const docRef = doc(firestoreDb, 'reservation', `${reservationId}`)
            const snapshot = await getDoc(docRef)
            if(snapshot.exists()) this.reservation = snapshot.data()
        }
    }
})
