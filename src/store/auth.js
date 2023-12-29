import { defineStore } from 'pinia'
import { signInWithPhoneNumber } from 'firebase/auth'
import { collection, query, doc, where, getDoc, getDocs, addDoc, updateDoc, Timestamp, setDoc } from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companiesColRef = collection(firestoreDb, "compagnies")
const usersColRef = collection(firestoreDb, "users")

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
        confirmationResult: {},
        appVerifier: {},
        phoneNum: '',
        errorMessage: ''
    }),
    getters: {
        // 
    },
    actions: {
        async authenticate(authInstance, phone, verifier) {
            try {
                if(this.isCompanie === true) {

                    // Recherche dans la table des compagnies
                    const q = query(companiesColRef, where('telephone', '==', `${phone}`))
                    const snapshot = await getDocs(q)
    
                    if(snapshot.docs.length > 0) {
                        this.isNew = false 
                        
                        this.user = snapshot.docs[0].data()
                        this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier) 
                    } else {

                        // au cas ou le numéro n'est pas trouvé dans la table des compagnies vérifier s'il n'est pas utilisé pour un compte client
                        const q = query(usersColRef, where('telephone', '==', `${phone}`))
                        const snapshot = await getDocs(q)
        
                        if(snapshot.docs.length > 0) {
                            this.errorMessage = 'Ce numéro a déjà été utilisé pour un compte client'
                        } 
                        // Si rien de tout ce qui précede alors créer le compte
                        else {

                            this.isNew = true
                            const newCompanie = {
                                uid: '', 
                                adresse: '', 
                                email: '', 
                                country: '', 
                                createdAt: new Date(), 
                                description: '', 
                                presentation: '', 
                                imageCouvertureUrl: '', 
                                imageLogoUrl: '', 
                                joinedAt: Timestamp.now(), 
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

                            this.user = { ...newCompanie, uid: `${docRef.id}` } 

                            const userSubColRef = collection(companieDocRef, 'myAccount')
                            const accountDocRef = doc(userSubColRef, 'account') 

                            await setDoc(accountDocRef, { solde: 0, new_recharge: '' })
        
                            this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                        }
                    }
                } 
                
                // Recherche dans la table des clients
                else if(this.isCompanie === false) {
                    const q = query(usersColRef, where('telephone', '==', `${phone}`))
                    const snapshot = await getDocs(q)
    
                    if(snapshot.docs.length > 0) {
                        this.isNew = false 

                        this.user = snapshot.docs[0].data()
                        this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier) 
                    } else {

                        // au cas ou le numéro n'est pas trouvé dans la table des clients vérifier s'il n'est pas utilisé pour un compte compagnies
                        const q = query(companiesColRef, where('telephone', '==', `${phone}`))
                        const snapshot = await getDocs(q)
        
                        if(snapshot.docs.length > 0) {
                            this.errorMessage = 'Ce numéro a déjà été utilisé pour un compte compagnie'
                        } 

                        // Si rien de tout ce qui précede alors créer le compte
                        else {
                            this.isNew = true
                            const newUser = {
                                uid: '', 
                                addresse: '', 
                                country: '', 
                                createdAt: new Date(), 
                                dateNaisse: '', 
                                email: '', 
                                firstName: '', 
                                imageUrl: '', 
                                joinedAt: Timestamp.now(), 
                                lastName: '', 
                                lieuNaissance: '', 
                                profession: '', 
                                telephone: `${phone}`, 
                                token: '', 
                                username: ''
                            }
        
                            const docRef = await addDoc(usersColRef, newUser) 

                            this.uniqueIdentifier = `${docRef.id}`
        
                            const userDocRef = doc(usersColRef, docRef.id)
        
                            await updateDoc(userDocRef, { uid: `${docRef.id}` }) 

                            this.user = { ...newUser, uid: `${docRef.id}` } 

                            const userSubColRef = collection(userDocRef, 'myAccount')
                            const accountDocRef = doc(userSubColRef, 'account') 

                            await setDoc(accountDocRef, { solde: 0, new_recharge: '' })
    
                            this.confirmationResult = await signInWithPhoneNumber(authInstance, phone, verifier)
                        }
                    }

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
        resetErrorMessage() {
          this.errorMessage = ''  
        },
        setOffre(offre) {
            this.offre = `${offre}`
        }, 
        setOffre2(offre2) {
            this.offre2 = `${offre2}`
        }, 
        setIsCompanie(val) {
            this.isCompanie = val
        },
        setAppVerifier(val) {
            this.appVerifier = val
        },
        setPhoneNum(val) {
            this.phoneNum = val
        }
    }
})
