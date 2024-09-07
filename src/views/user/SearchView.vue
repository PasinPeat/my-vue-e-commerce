<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import ProductCards from '@/components/user/home/ProductCards.vue'
import UserLayout from '@/layouts/UserLayout.vue'

import { useProductStore } from '@/stores/user/product'

const productStore = useProductStore()
const route = useRoute()

// const SearchText = ref(route.query.q)
const SearchProduct = ref([])

// <------- use watch with immediate instead of using onMounted ---------->
// onMounted(() => {
//   //   console.log(route.query.q)

//   SearchProduct.value = productStore.filterProducts(route.query.q)
// })

watch(
  () => route.query.q,
  (newText) => {
    SearchProduct.value = productStore.filterProducts(newText)
    console.log(newText)
  },
  { immediate: true }
)
</script>

<template>
  <UserLayout>
    <h1>Search Page</h1>
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto justify-items-center"
    >
      <ProductCards :products="SearchProduct"></ProductCards>
    </div>
  </UserLayout>
</template>
