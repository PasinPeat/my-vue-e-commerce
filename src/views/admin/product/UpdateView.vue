<script setup>
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '@/stores/admin/product'
import { useEventStore } from '@/stores/event'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'

const productStore = useProductStore()
const eventStore = useEventStore()

const route = useRoute()
const router = useRouter()

const productIndex = ref(-1)

const mode = computed(() => {
  return productIndex.value !== -1 ? 'Edit' : 'Add'
})

onMounted(() => {
  if (route.params.id) {
    productIndex.value = parseInt(route.params.id)
    const product = productStore.list[route.params.id]
    productStore.getProduct(product._id)
    // console.log(product)
  }
  // productStore.getProduct(productIndex.value)
  // console.log(productStore.selectedProduct)

  // selectedProduct = productStore.getProduct(productIndex.value)

  // console.log(productStore.selectedProduct)
  console.log(mode.value)
  // console.log(productStore.getProduct(productIndex.value))
})

const updateProduct = () => {
  if (mode.value === 'Edit') {
    // Edit mode
    productStore.updateProduct(productStore.selectedProduct['_id'])
    eventStore.popUpMessage('success', 'Update Product successful!')
    router.push({ name: 'admin-products-list' })
  } else {
    // Create mode
    productStore.addProduct()
    eventStore.popUpMessage('success', 'Create Product successful!')
    router.push({ name: 'admin-products-list' })
  }
}
</script>

<template>
  <AdminLayout>
    <div class="flex pt-8 px-6">
      <div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
        <div v-if="mode === 'Add'" class="text-xl font-semibold">{{ mode }} New Product</div>
        <div v-else class="text-xl font-semibold">
          {{ mode }} Product Id : {{ productStore.selectedProduct['_id'] }}
        </div>
        <div class="divider mt-2"></div>
        <div class="h-full w-full pb-6 bg-base-100">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-control w-full">
              <label class="label"> <span class="label-text text-base-content">Name</span></label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-full"
                v-model="productStore.selectedProduct.name"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-base-content"> Image </span> </label
              ><input
                type="text"
                placeholder=""
                class="input input-bordered w-full"
                v-model="productStore.selectedProduct.imageUrl"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-base-content"> Price </span>
              </label>
              <input
                type="number"
                placeholder=""
                class="input input-bordered w-full"
                v-model="productStore.selectedProduct.price"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-base-content"> Quantity </span>
              </label>
              <input
                type="number"
                placeholder=""
                class="input input-bordered w-full"
                v-model="productStore.selectedProduct.quantity"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-base-content"> About </span>
              </label>
              <textarea
                class="textarea textarea-bordered w-full"
                v-model="productStore.selectedProduct.about"
                placeholder="detail product"
              >
              </textarea>
            </div>
          </div>
          <div class="divider"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-base-content"> Status </span>
              </label>
              <select
                class="select select-bordered w-full"
                v-model="productStore.selectedProduct.status"
              >
                <option disabled selected>Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <RouterLink :to="{ name: 'admin-products-list' }" class="btn btn-ghost">
              Back
            </RouterLink>
            <button @click="updateProduct()" class="btn btn-primary ml-4">
              {{ mode }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
