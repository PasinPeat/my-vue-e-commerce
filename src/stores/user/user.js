import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: {}
  }),
  actions: {
    loadUserData() {
      const StoredUserData = localStorage.getItem('user-profile')
      if (StoredUserData) {
        const userData = JSON.parse(StoredUserData)
        this.userData = userData
      }
    },
    updateUserData(userData) {
      localStorage.setItem('user-profile', JSON.stringify(userData))
    }
  }
})
