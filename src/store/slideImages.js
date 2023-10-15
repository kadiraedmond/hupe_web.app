import { defineStore } from 'pinia'
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const imageSlideColRef = collection(firestoreDb, "slideAcceuilImages");

export const useSlide = defineStore('slideStore', {
    state: () => ({
        slideImages: []
    }),
    getters: {
        async getSlideImages() {
            try {
                const snapshot = await getDocs(imageSlideColRef);
                snapshot.docs.forEach((doc) => this.slideImages.push({ ...doc.data() }));
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
