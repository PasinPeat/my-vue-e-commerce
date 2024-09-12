<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCartStore } from './stores/user/cart'
import { useProductStore } from './stores/user/product'
import { useEventStore } from './stores/event'
// import CloseIcon from './components/icons/Close-icon.vue'

const eventStore = useEventStore()
const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
  productStore.loadProducts()
  // eventStore.popUpMessage('error', 'test message')
})
</script>

<template>
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <div v-if="eventStore.alert" class="toast">
    <div class="relative alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>

  <RouterView />
</template>

<style scoped></style>
