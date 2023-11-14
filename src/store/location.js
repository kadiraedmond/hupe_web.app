import { defineStore } from 'pinia'
import { collection, query, doc, getDoc, where, getDocs} from "firebase/firestore";
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
            this.userLocations = []
            try {
                const q = query(locationColRef, where('client_id', "==", `${userId}`));
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnie_id}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.userLocations.push({ ...programData, companieInfos: company })

                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})
