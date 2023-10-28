import { defineStore } from 'pinia'
import { collection, query, doc, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const locationColRef = collection(firestoreDb, "location_vehicules")


export const useLocationStore = defineStore('locationStore', {
    state: () => ({
        userLocations: []
    }),
    getters: {
    //    
    },
    actions: {
        async setUserLocations(userId) {
            try {
                const q = query(locationColRef, where('client_id', "==", `${userId}`));
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => this.userLocations.push({ ...doc.data() }))
            } catch (error) {
                console.log(error)
            }
        }
    }
})
