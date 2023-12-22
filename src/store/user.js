import { defineStore } from 'pinia'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '@/firebase/firebase.js'

const usersColRef = collection(firestoreDb, 'users')
const locationVehiculesColRef = collection(firestoreDb, 'location_vehicules')
const reservationTicketsColRef = collection(firestoreDb, 'reservation')


export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [],
        user: {},
        locationVehicules: [],
        reservationTickets: [],
        grosEngins: [],
        achatEngins: [],
        userHistory: [],
        totalAmount: 0
    }),
    getters: {
        async getAllUsers() {
            try {
                const snapshot = await getDocs(usersColRef);
                snapshot.docs.forEach((doc) => this.users.push(doc.data()))
                } catch (error) {
                console.log(error);
            }

            return this.users
        }
    },
    actions: {
        async setUser(userId) {
           try {
            const userDocRef = doc(usersColRef, `${userId}`)
            const snapshot = await getDoc(userDocRef);

            if(snapshot.exists()) this.user = snapshot.data()
           } catch (error) {
                console.log(error)
           }
        },
        async setLocationVehicule(userId) {
            try {
                const q = query(locationVehiculesColRef, where('client_id', '==', `${userId}`))
                const snapshots = getDocs(q)
                snapshots.docs.forEach(doc => this.locationVehicules.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        },
        async setReservationTickets(userId) {
            try {
                const q = query(reservationTicketsColRef, where('client_id', '==', `${userId}`))
                const snapshots = getDocs(q)
                snapshots.docs.forEach(doc => this.reservationTickets.push(doc.data()))
            } catch (error) {
                console.log(error)
            }
        },
        async setUserHistory(userId) {
            const userDocRef = doc(firestoreDb, 'users', `${userId}`)
            const userSubColRef = collection(userDocRef, 'hystory')

            try {
                const snapshot = await getDocs(userSubColRef);
                snapshot.docs.forEach((doc) => this.userHistory.push({ ...doc.data() }));
            } catch (error) {
                console.log(error)
            }
        },
        async setTotalAmount(userId) {
            const userDocRef = doc(firestoreDb, 'users', `${userId}`)
            const userSubColRef = collection(userDocRef, 'myAccount')
            const accountDocRef = doc(userSubColRef, 'account')

            try {
                const snapshot = await getDoc(accountDocRef);

                if(snapshot.exists()) this.totalAmount = snapshot.data()
            } catch (error) {
                console.log(error)
            }
        },
        async setGrosEngins(userId) {
        //    
        },
        async setAchatVehicules(userId) {
        //    
        }
    }
})
