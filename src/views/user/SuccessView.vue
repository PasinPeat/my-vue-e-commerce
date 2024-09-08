<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart'
import { onMounted, ref } from 'vue'

const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
  cartStore.loadCheckout()
  console.log(cartStore.checkout)
  if (cartStore.checkout.orderNumber) {
    orderData.value = cartStore.checkout
  }
})
</script>

<template>
  <UserLayout>
    <div class="border border-base-200 shadow-xl w-3/4 mx-auto p-4 my-3">
      <div class="flex flex-col gap-4 py-3">
        <div class="text-2xl font-bold text-center">Your order is successful !</div>
        <div class="text-2xl">Hi {{ orderData.name }}</div>
        <div class="text-2xl">Get ready to pick up your items</div>
      </div>
      <div class="grid grid-cols-4">
        <section>
          <h2 class="text-md font-bold">Order Date</h2>
          <p>{{ orderData.createdDate }}</p>
        </section>
        <section>
          <h2 class="text-md font-bold">Order Number</h2>
          <p>{{ orderData.orderNumber }}</p>
        </section>
        <section>
          <h2 class="text-md font-bold">Patment Method</h2>
          <p>{{ orderData.paymentMethod }}</p>
        </section>
        <section>
          <h2 class="text-md font-bold">Address</h2>
          <p>{{ orderData.address }}</p>
        </section>
      </div>
      <div class="divider"></div>
      <div
        class="card card-side bg-base-100 shadow-xl m-3"
        v-for="(product, index) in orderData.products"
        :key="index"
      >
        <figure>
          <img class="w-[200px] h-[200px] m-2" :src="product.imageUrl" alt="Movie" />
        </figure>
        <div class="card-body flex-row justify-between items-center">
          <div class="flex-1">
            <h2 class="text-xl font-bold">{{ product.name }}</h2>
            <h2>ราคา : {{ product.price }} บาท</h2>
          </div>
          <p class="flex-1">จำนวน {{ product.quantity }} ชิ้น</p>
          <p class="flex-1">รวมราคา : {{ product.price * product.quantity }}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div class="flex justify-between p-4">
          <p class="text-xl font-bold">ราคาสินค้าทั้งหมด</p>
          <p class="text-xl">{{ orderData.totalprice }} บาท</p>
        </div>
        <div class="flex justify-between px-4">
          <p class="text-xl font-bold">ค่าส่ง</p>
          <p class="text-xl">0 บาท</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between px-4">
        <p class="text-xl font-bold">ราคาทั้งสิ้ง</p>
        <p class="text-xl">{{ orderData.totalprice }} บาท</p>
      </div>

      <div class="divider"></div>
      <div class="text-2xl font-bold text-center">
        Thank you for your purchasing , Have a nice Day
      </div>
    </div>
  </UserLayout>
</template>
