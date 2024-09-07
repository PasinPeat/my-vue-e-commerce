import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {
        name: 'cat toy 1',
        imageUrl:
          'https://headsupfortails.com/cdn/shop/articles/Cat_playing_with_toy.jpg?v=1644820121',
        quantity: 2,
        about: 'cat toy 1 detail',
        status: 'test status',
        price: 100
      },
      {
        name: 'cat toy 2',
        imageUrl:
          'https://headsupfortails.com/cdn/shop/articles/Cat_playing_with_toy.jpg?v=1644820121',
        quantity: 1,
        about: 'cat toy 1 detail',
        status: 'test status',
        price: 100
      }
    ]
  }),
  getters: {
    summaryPrice(state) {
      return state.items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    },
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0)
    }
  },

  actions: {
    addToCart(productData) {
      this.items.push(productData)
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity
    },
    removeItemInCart(index) {
      this, this.items.splice(index, 1)
    }
  }
})
