import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('user-product', {
  state: () => ({
    list: []
  }),
  actions: {
    async loadProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products')
        this.list = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText))
    }
  }
})
