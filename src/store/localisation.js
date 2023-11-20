import { defineStore } from 'pinia'

import { collection, query, doc, where, getDoc, getDocs} from "firebase/firestore"
import { firestoreDb } from "@/firebase/firebase.js"

const companiesColRef = collection(firestoreDb, "compagnies")

export const useLocalisationStore = defineStore('localisationStore', {
    state: () => ({
       companies: [],
       country: '', 
       locationCompanies: [],
       transportCompanies: [],
       vipLocationCompanies: [],
       vipTransportCompanies: []
    }),
    getters: {
        // 
    },
    actions: {
        async setCompaniesByLocalisation(country) {
            try {
                const q = query(companiesColRef, where('country', "==", `${country}`))
                const snapshot = await getDocs(q);
                snapshot.docs.forEach((doc) => {
                    const comp_data = doc.data()
                    if(comp_data.status == 'active') {
                        this.companies.push(comp_data)

                        if(comp_data.type_compagnie == 'Location') {
                            this.locationCompanies.push(comp_data)
                        } else if(comp_data.type_compagnie == 'Transport') {
                            this.transportCompanies.push(comp_data)
                        }

                        if(comp_data.offre == 'vip' && comp_data.type_compagnie == 'Location') {
                            this.vipLocationCompanies.push(comp_data) 
                        } else if(comp_data.offre == 'vip' && comp_data.type_compagnie == 'Transport') {
                            this.vipTransportCompanies.push(comp_data)
                        }
                    }
                })

                // for(let i = 0; i < this.companies.length; i++) {
                //     if(this.companies[i].type_compagnie == 'Location') {
                //         this.locationCompanies.push(this.companies[i])

                //     } else if(this.companies[i].type_compagnie == 'Transport') {
                //         this.transportCompanies.push(this.companies[i])

                //     } else if(this.companies[i].offre == 'vip' && this.companies[i].type_compagnie == 'Location') {
                //         this.vipLocationCompanies.push(this.companies[i])

                //     } else if(this.companies[i].offre == 'vip' && this.companies[i].type_compagnie == 'Transport') {
                //         this.vipTransportCompanies.push(this.companies[i])
                //     }
                // }

                console.log(this.transportCompanies)
            } catch (error) {
                console.log(error)
            }
        }, 
        setCountry(val) {
            this.country = val
        }
    }
})
