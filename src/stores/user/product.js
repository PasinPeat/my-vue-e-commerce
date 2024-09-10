import { defineStore } from 'pinia'

export const useProductStore = defineStore('user-product', {
  state: () => ({
    list: [
      
    ]
  }),
  actions: {
    loadProducts() {
      const productList = localStorage.getItem('product-data')
      if (productList) {
        this.list = JSON.parse(productList)
      }
    },
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText))
    }
  }
})
