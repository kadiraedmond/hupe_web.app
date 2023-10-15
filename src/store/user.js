import { defineStore } from 'pinia'

const usersColRef = collection(firestoreDb, 'users')


export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: []
    }),
    getters: {
        async getAllUsers() {
            try {
                const snapshot = await getDocs(usersColRef);
                snapshot.docs.forEach((doc) => this.users.push(doc.data()))
                } catch (error) {
                console.log(error);
            }

            return this.users
        }
    },
    actions: {
        // 
    }
})
