import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore('admin-product', {
  state: () => ({
    list: [],
    selectedProduct: {},
    
  }),
  actions: {
    clearSelectedProduct() {
      this.selectedProduct = {
        name: '',
        imageUrl: '',
        about: '',
        price: 1,
        quantity: 0,
        remainQuantity: 0,
        status: 'open'
      }
    },
    async getProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products')
        this.list = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    async getProduct(id) {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`)
        this.selectedProduct = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching item:', error)
      }
    },
    async addProduct() {
      this.selectedProduct.remainQuantity = this.selectedProduct.quantity
      this.selectedProduct.updatedAt = new Date().toLocaleString()
      try {
        const response = await axios.post(`http://localhost:3000/products`, this.selectedProduct)
        console.log(response.data)
      } catch (error) {
        console.error('Error create items:', error)
      }
      // this.list.push(productData)
    },
    async updateProduct(id) {
      this.selectedProduct.remainQuantity = this.selectedProduct.quantity
      this.selectedProduct.updatedAt = new Date().toLocaleString()
      try {
        const response = await axios.patch(
          `http://localhost:3000/products/${id}`,
          this.selectedProduct
        )
        console.log(response.data)
      } catch (error) {
        console.error('Error update items:', error)
      }
      // const fields = ['name', 'imageUrl', 'quantity', 'status']
      // for (let field in fields) {
      //   this.list[index][field] = productData[field]
      // }

      // this.list[index].remainQuantity = productData.quantity
      // this.list[index].updatedAt = new Date().toLocaleString()

      // localStorage.setItem('product-data', JSON.stringify(this.list))
    },
    async removeProduct(id) {
      // this.list.splice(index, 1)
      try {
        const response = await axios.delete(`http://localhost:3000/products/${id}`)
        console.log(response.data)
      } catch (error) {
        console.error('Error delete items:', error)
      }

      // localStorage.setItem('product-data', JSON.stringify(this.list))
    }
  }
})
