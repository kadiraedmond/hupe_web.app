import { defineStore } from 'pinia'
import { collection, query, where, doc, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const demandeColRef = collection(firestoreDb, "client_publication");


export const useDemandeStore = defineStore('demandeStore', {
    state: () => ({
        locationDemandes: [],
        reservationDemandes: [],
        posts: []
    }),
    getters: {
        // 
    },
    actions: {
        async setLocationDemandes() {
            try {
                const q = query(demandeColRef, where('service', '==', 'Location de véhicules'));
                const snapshots = await getDocs(q)

                for(let i = 0; i < snapshots.docs.length; i++) {
                    const locationData = snapshots.docs[i].data()
                    const userDocRef = doc(firestoreDb, 'users', `${locationData.client_id}`)
                    const snapshot = await getDoc(userDocRef)
    
                    let user = {}
                    if(snapshot.exists()) user = snapshot.data()
                    this.locationDemandes.push({ ...locationData, userInfos: user })
                }
                console.log(this.locationDemandes)
            } catch (error) {
                console.log(error)
            }
        },
        async setReservationDemandes() {
            try {
                const q = query(demandeColRef, where('service', '==', 'Réservation de tickets de bus'));
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const reservationData = snapshots.docs[i].data()
                    const userDocRef = doc(firestoreDb, 'users', `${reservationData.client_id}`)
                    const snapshot = await getDoc(userDocRef)
    
                    let user = {}
                    if(snapshot.exists()) user = snapshot.data()
                    this.reservationDemandes.push({ ...reservationData, userInfos: user })
                }
                console.log(this.reservationDemandes)
            } catch (error) {
                console.log(error)
            }
        },
        async setPosts(userId) {
            try {
                const q = query(demandeColRef, where('client_id', '==', `${userId}`))
                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const postDoc = snapshots.docs[i]
                    const postData = postDoc.data()

                    const reponseColRef = collection(postDoc.ref, 'reponse')
                    const reponseSnapshots = await getDocs(reponseColRef)
                    
                    let responses = []
                    for(let i = 0; i < reponseSnapshots.docs.length; i++) {
                        const responseDoc = reponseSnapshots.docs[i]
                        const responseData = responseDoc.data()

                        const companyId = responseData.compagnie

                        let company = {}
                        const companyDocRef = doc(firestoreDb, 'compagnies', `${companyId}`)
                        const snapshot = await getDoc(companyDocRef)
                        if(snapshot.exists()) company = snapshot.data()


                        responses.push({ ...responseData, companyInfos: company })
                    }
                    
                    this.posts.push({ ...postData, responses })
                    // console.log(this.posts)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})