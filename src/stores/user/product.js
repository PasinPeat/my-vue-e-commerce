import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
        name: 'cat toy 1',
        imageUrl:
          'https://headsupfortails.com/cdn/shop/articles/Cat_playing_with_toy.jpg?v=1644820121',
        quantity: 10,
        about: 'cat toy 1 detail',
        status: 'test status',
        price: 100
      },
      {
        name: 'cat toy 2',
        imageUrl:
          'https://i.etsystatic.com/18867442/r/il/f07089/2160080692/il_fullxfull.2160080692_pxp9.jpg',
        quantity: 10,
        about: 'cat toy 2 detail',
        status: 'test status',
        price: 120
      },
      {
        name: 'cat toy 3',
        imageUrl:
          'https://5.imimg.com/data5/SELLER/Default/2021/3/CJ/QH/BK/124991817/wooden-cat-house-small-.jpg',
        quantity: 10,
        about: 'cat toy 3 detail',
        status: 'test status',
        price: 130
      },
      {
        name: 'cat toy 4',
        imageUrl:
          'https://pyxis.nymag.com/v1/imgs/a7c/553/39e39d2b1805ae3df77ab95420a3bc382a-feandrea-cat-tree-.jpg',
        quantity: 10,
        about: 'cat toy 4 detail',
        status: 'test status',
        price: 130
      },
      {
        name: 'cat toy 5',
        imageUrl:
          'https://www.elitestore.pk/cdn/shop/files/Web-Cat-Hiuse.jpg?v=1715280670&width=720',
        quantity: 10,
        about: 'cat toy 5 detail',
        status: 'test status',
        price: 130
      },
      {
        name: 'cat toy 6',
        imageUrl:
          'https://rukminim2.flixcart.com/image/850/1000/xif0q/baby-rattle/3/1/m/cat-beds-for-cats-large-cat-house-cat-cave-for-pet-cat-house-original-imagq78b4qfdujbj.jpeg?q=20&crop=false',
        quantity: 10,
        about: 'cat toy 6 detail',
        status: 'test status',
        price: 130
      },
      {
        name: 'cat toy 7',
        imageUrl: 'https://m.media-amazon.com/images/I/81A6H0dZqEL.jpg',
        quantity: 10,
        about: 'cat toy 7 detail',
        status: 'test status',
        price: 130
      }
    ]
  }),
  actions: {
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText))
    }
  }
})
