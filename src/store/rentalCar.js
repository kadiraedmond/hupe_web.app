import { defineStore } from 'pinia'

const rentalCarsColRef = collection(firestoreDb, 'location_vehicules')

export const useRentalCar = defineStore('rentalCarStore', {
    state: () => ({
        rentalCars: []
    }),
    getters: {
        async getRentalCars() {
            try {
                const snapshot = await getDocs(rentalCarsColRef);
                snapshot.docs.forEach((doc) => this.rentalCars.push({ ...doc.data() }));
              } catch (err) {
                console.log(err);
            }

            return this.rentalCars
        }
    },
    actions: {
        // 
    }
})

