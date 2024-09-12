import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    checkout:{}
  }),
  getters: {
    summaryPrice(state) {
      return state.items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    },
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0)
    },
    cartItemsCount(state) {
      return state.items.length
    },
    summaryProducts(state) {
      return state.items.map((item) => ({
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl
      }))
    }
  },

  actions: {
    loadCart() {
      const prevCart = localStorage.getItem('cart-data')
      if (prevCart) {
        this.items = JSON.parse(prevCart)
      }
    },
    addToCart(productData) {
      const itemIndex = this.items.findIndex((item) => item.name === productData.name)
      if (itemIndex !== -1) {
        this.items[itemIndex].quantity += 1
        console.log('found product at index', itemIndex)
      } else {
        console.log('Not found product')
        productData.quantity = 1
        this.items.push(productData)
      }

      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    removeItemInCart(index) {
      this, this.items.splice(index, 1)
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    placeOrder(userData) {
      const orderData = {
        ...userData,
        products: this.items,
        totalprice: this.summaryPrice,
        paymentMethod: 'Credit-card',
        createdDate: new Date().toLocaleString(),
        orderNumber: `AA ${Math.floor(Math.random() * 90000 + 10000)}`
      }

      localStorage.setItem('order-data', JSON.stringify(orderData))
    },
    loadCheckout(){
      const orderData = localStorage.getItem('order-data')
      if (orderData) {
        this.checkout = JSON.parse(orderData)
      }
    }
  }
})
