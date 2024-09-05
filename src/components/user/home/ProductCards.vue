<!-- eslint-disable no-undef -->
<script setup>
import { defineProps } from 'vue'

defineProps({
  products: Array
})
</script>

<template>
  <div v-for="(product, index) in products" :key="index">
    <div class="card card-compact bg-base-100 w-[200px] shadow-xl">
      <figure>
        <img class="w-[200px] h-[200px] object-cover" :src="product.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ product.name }}
        </h2>
        <p>{{ product.about }}</p>
        <div class="card-actions justify-end">
          <div class="flex justify-between items-center w-full">
            <h2 class="card-title">{{ product.price }} B.</h2>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
