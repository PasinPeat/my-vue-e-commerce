<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import CloseIcon from '@/components/icons/Close-icon.vue'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value)
  cartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
  <UserLayout>
    <h1>Shopping Cart</h1>
    <div class="flex my-3 gap-2">
      <section class="flex-auto w-64 bg-base-200 p-2">
        <div v-if="!cartStore.items.length">No product</div>
        <div v-else v-for="(item, index) in cartStore.items" :key="index" class="flex">
          <div class="flex-1">
            <img class="w-full p-4" :src="item.imageUrl" />
          </div>
          <div class="flex-1 p-4">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2 relative">
                  <div>
                    <div>
                      <b>{{ item.name }}</b>
                    </div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} B.</div>
                  </div>

                  <select
                    v-model="item.quantity"
                    class="select w-1/2"
                    @change="changeQuantity($event, index)"
                  >
                    <option v-for="(quantity, index) in [1, 2, 3, 4, 5]" :key="index">
                      {{ quantity }}
                    </option>
                  </select>
                  <div class="absolute right-0 top-0">
                    <button @click="cartStore.removeItemInCart(index)" class="btn">
                      <CloseIcon></CloseIcon>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-2"><b>In stock</b></div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex-auto w-32 bg-slate-200 p-2">
        <div class="flex flex-col justify-between gap-5 w-full p-2">
          <div><h2 class="text-3xl font-bold">Order Summary</h2></div>
          <div class="px-6">
            <div class="flex justify-between py-2">
              <b>จำนวนสินค้าทั้งหมด</b>
              <div class="flex w-32 justify-between">
                <span>{{ cartStore.summaryQuantity }}</span>
                <span>ชิ้น</span>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <b>ราคาสินค้าทั้งหมด</b>
              <div class="flex w-32 justify-between">
                <span>{{ cartStore.summaryPrice }}</span>
                <span>บาท</span>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <b>ค่าส่ง</b>
              <div class="flex w-32 justify-between"><span> 0</span> <span>บาท</span></div>
            </div>
            <div class="flex justify-between py-2">
              <b>ราคาทั้งสิ้น</b>
              <div class="flex w-32 justify-between"><span> 100</span> <span>บาท</span></div>
            </div>
          </div>
          <div>
            <RouterLink :to="{ name: 'checkout' }">
              <button class="btn btn-neutral w-full">ชำระเงิน</button>
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </UserLayout>
</template>
