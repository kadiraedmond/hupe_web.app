import { defineStore } from 'pinia'
import { collection, doc, getDoc, query, where, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js" 
import axios from 'axios'

const imageSlideColRef = collection(firestoreDb, "slideAcceuilImages") 

const API_URL = 'https://ipinfo.io/json?token=4e774d02603f38' 

export const useSlide = defineStore('slideStore', {
    state: () => ({
        country: '',
        slideImages: []
    }),
    getters: {
        async getSlideImages() {
            try { 

                const { data } = await axios.get(API_URL)

                this.country = data.country 
                
                const q = query(imageSlideColRef, where('country', 'array-contains', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnieUID}`)
                    const snapshot = await getDoc(companieDocRef)
    
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
    actions: {
        async setCountry(val) {
            this.country = val 
            console.log(this.country) 

            try { 

                this.slideImages = []
                const q = query(imageSlideColRef, where('country', 'array-contains', `${this.country}`)) 

                const snapshots = await getDocs(q)
                for(let i = 0; i < snapshots.docs.length; i++) {
                    const programData = snapshots.docs[i].data()
                    const companieDocRef = doc(firestoreDb, 'compagnies', `${programData.compagnieUID}`)
                    const snapshot = await getDoc(companieDocRef)
    
                    let company = {}
                    if(snapshot.exists()) company = snapshot.data()
                    this.slideImages.push({ ...programData, companieInfos: company })

                }
              } catch (err) {
                console.log(err);
            }
        }
    }
})
