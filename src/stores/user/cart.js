import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    checkout: {}
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
    loadCheckout() {
      const orderData = localStorage.getItem('order-data')
      if (orderData) {
        this.checkout = JSON.parse(orderData)
      }
    }
  }
})

const user2 = {
  userId: '1212121221',
  products: [
    {
      productId: '232323232332',
      name: 'cat toy 2',
      imageUrl:
        'https://i.etsystatic.com/18867442/r/il/f07089/2160080692/il_fullxfull.2160080692_pxp9.jpg',
      stock: 10,
      about: 'cat toy 2 detail',
      status: 'test status',
      price: 120,
      quantity: 4
    },
    {
      productId: '232323232332',
      name: 'cat toy 3',
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2021/3/CJ/QH/BK/124991817/wooden-cat-house-small-.jpg',
      quantity: 2,
      remainQuantity: 10,
      about: 'cat toy 3 detail',
      status: 'closed',
      price: 130,
      updatedAt: '9/9/2024, 11:32:34 AM'
    },
    {
      productId: '232323232332',
      name: 'cat toy 1',
      imageUrl:
        'https://headsupfortails.com/cdn/shop/articles/Cat_playing_with_toy.jpg?v=1644820121',
      quantity: 1,
      remainQuantity: 10,
      status: 'open',
      about: 'cat toy 1 detail',
      price: 100,
      updatedAt: '9/9/2024, 7:27:03 PM'
    },
    {
      productId: '232323232332',
      name: 'cat toy 4',
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/a7c/553/39e39d2b1805ae3df77ab95420a3bc382a-feandrea-cat-tree-.jpg',
      quantity: 1,
      remainQuantity: 10,
      status: 'open',
      about: 'cat toy 4 detail',
      price: 130,
      updatedAt: '9/9/2024, 11:32:34 AM'
    }
  ],
  totalPrice: 25000,
  updatedAt: '9/15/2023, 11:50:24 PM'
}
