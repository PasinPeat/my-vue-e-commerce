<script setup>
import { useRouter } from 'vue-router'
import Hero from '@/components/user/home/Hero.vue'
import ProductCards from '@/components/user/home/ProductCards.vue'
import UserLayout from '@/layouts/UserLayout.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const router = useRouter()

const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product)
  console.log(product, 'Add this to cart')
  router.push({ name: 'cart' })
}
</script>

<template>
  <UserLayout>
    <div>
      <Hero />
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto justify-items-center"
      >
        <ProductCards :addToCart="addToCart" :products="productStore.list"></ProductCards>
      </div>
    </div>
  </UserLayout>
</template>
