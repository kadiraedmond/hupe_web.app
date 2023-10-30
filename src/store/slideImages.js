import { defineStore } from 'pinia'
import { collection, doc, getDoc, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const imageSlideColRef = collection(firestoreDb, "slideAcceuilImages");

export const useSlide = defineStore('slideStore', {
    state: () => ({
        slideImages: []
    }),
    getters: {
        async getSlideImages() {
            try {
                const snapshots = await getDocs(imageSlideColRef)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnieUID}`)
                    const snapshot = await getDoc(companieDocRef)
                    console.log(snapshot.data());
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.slideImages.push({ ...programData, companieInfos: company })

                }
              } catch (err) {
                console.log(err);
            }

            return this.slideImages
        }
    },
    action: {
        // 
    }
})
