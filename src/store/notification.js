import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        count: 0
    }),
    
    actions: {
        setCount(val) {
            this.count = val
        }
    }
})