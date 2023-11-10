import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth'
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companiesColRef = collection(firestoreDb, "compagnies")

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: {},
        isConnected: false,
        isNew: false,
        uniqueIdentifier: '', 
        newCompanieData: {}, 
        companieService: '', 
        offre: '',
        offre2: '', 
        isCompanie: false, 
        isLocationCompany: false,
        isReservationCompany: false,
        isBigEnginsCompany: false,
        isCarsSellingCompany: false,
        confirmationResult: {}
    }),
    getters: {
        // 
    },
    actions: {
        async authenticate(authInstance, phone, verifier) {
            try {
                if(this.isCompanie === true) {
                    const q = query(companiesColRef, where('telephone', '==', `${phone}`))
                    const snapshot = await getDocs(q)
    
                    if(snapshot.docs.length > 0) {
                        this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                    } else {
                        this.isNew = true
                        const newCompanie = {
                            uid: '', 
                            adresse: '', 
                            adresse_mail: '', 
                            country: '', 
                            createdAt: new Date(), 
                            description: '', 
                            imageCouvertureUrl: '', 
                            imageLogoUrl: '', 
                            joinedAt: new Date(), 
                            latitude: '', 
                            longitude: '', 
                            mise_avant: true, 
                            offre: '', 
                            raison_social: '',
                            responsable: '', 
                            site_web: '', 
                            status: 'padding', 
                            telephone: `${phone}`,
                            token: '',
                            type_compagnie: ''
                        }
    
                        this.newCompanieData = newCompanie
    
                        const docRef = await addDoc(companiesColRef, newCompanie)
    
                        this.uniqueIdentifier = `${docRef.id}`
                        console.log(this.uniqueIdentifier)
    
                        const companieDocRef = doc(companiesColRef, docRef.id)
    
                        await updateDoc(companieDocRef, { uid: `${docRef.id}` })
    
                        this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                    }
                } else {
                    this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                }
                } catch (error) {
               console.log(error) 
            }
        },
        setUser(user) {
            this.user = user 
            this.isConnected = true
            if(user.type_compagnie == 'Transport') {
                this.isReservationCompany = true
            } else if(user.type_compagnie == 'Location') {
                this.isLocationCompany = true
            }
        },
        signOut() {
            this.user = {}
            this.isConnected = false
            this.isLocationCompany = false
            this.isReservationCompany = false
        },
        setCompanieService(service) {
            this.companieService = service
        }, 
        setOffre(offre) {
            this.offre = `${offre}`
        }, 
        setOffre2(offre2) {
            this.offre2 = `${offre2}`
        }, 
        setIsCompanie(val) {
            this.isCompanie = val
        }
    }
})
