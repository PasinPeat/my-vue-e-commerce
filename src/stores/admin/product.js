import { defineStore } from 'pinia'

export const useProductStore = defineStore('admin-product', {
  state: () => ({
    list: [
      {
        name: 'cat toy 1',
        imageUrl:
          'https://headsupfortails.com/cdn/shop/articles/Cat_playing_with_toy.jpg?v=1644820121',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 1 detail',
        price: 100,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 2',
        imageUrl:
          'https://i.etsystatic.com/18867442/r/il/f07089/2160080692/il_fullxfull.2160080692_pxp9.jpg',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 2 detail',
        price: 120,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 3',
        imageUrl:
          'https://5.imimg.com/data5/SELLER/Default/2021/3/CJ/QH/BK/124991817/wooden-cat-house-small-.jpg',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 3 detail',
        price: 130,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 4',
        imageUrl:
          'https://pyxis.nymag.com/v1/imgs/a7c/553/39e39d2b1805ae3df77ab95420a3bc382a-feandrea-cat-tree-.jpg',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 4 detail',
        price: 130,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 5',
        imageUrl:
          'https://www.elitestore.pk/cdn/shop/files/Web-Cat-Hiuse.jpg?v=1715280670&width=720',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 5 detail',
        price: 130,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 6',
        imageUrl:
          'https://rukminim2.flixcart.com/image/850/1000/xif0q/baby-rattle/3/1/m/cat-beds-for-cats-large-cat-house-cat-cave-for-pet-cat-house-original-imagq78b4qfdujbj.jpeg?q=20&crop=false',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 6 detail',
        price: 130,
        updatedAt: '9/9/2024, 11:32:34 AM'
      },
      {
        name: 'cat toy 7',
        imageUrl: 'https://m.media-amazon.com/images/I/81A6H0dZqEL.jpg',
        quantity: 10,
        remainQuantity: 10,
        status: 'open',
        about: 'cat toy 7 detail',
        price: 130,
        updatedAt: '9/9/2024, 11:32:34 AM'
      }
    ]
  }),
  actions: {
    getProduct(index) {
      return this.list[index]
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quantity
      productData.updatedAt = new Date().toLocaleString()
      this.list.push(productData)
      // save to localstorage
      localStorage.setItem('product-data', JSON.stringify(this.list))
    },
    updateProduct(index, productData) {
      const fields = ['name', 'imageUrl', 'quantity', 'status']
      for (let field in fields) {
        this.list[index][field] = productData[field]
      }

      this.list[index].remainQuantity = productData.quantity
      this.list[index].updatedAt = new Date().toLocaleString()

      localStorage.setItem('product-data', JSON.stringify(this.list))
    },
    removeProduct(index) {
      this.list.splice(index, 1)

      localStorage.setItem('product-data', JSON.stringify(this.list))
    }
  }
})
