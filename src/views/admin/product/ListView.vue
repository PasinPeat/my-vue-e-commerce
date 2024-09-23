<script setup>
import { useProductStore } from '@/stores/admin/product'
import { useEventStore } from '@/stores/event'

import { RouterLink } from 'vue-router'

import AdminTable from '@/components/admin/Admin-table.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import TrashIcon from '@/components/icons/Close-icon.vue'
import EditIcon from '@/components/icons/Edit-icon.vue'
import { onMounted } from 'vue'

const productStore = useProductStore()
const eventStore = useEventStore()

onMounted(() => {
  productStore.getProducts()
  productStore.clearSelectedProduct()
  productStore.clearErrorMessage()
})

const headerColumn = ['Name', 'Image', 'Price', 'Quantity', 'Status', 'Updated At', '']

const removeProduct = (id) => {
  productStore.removeProduct(id)
  eventStore.popUpMessage('success', 'DELETE Successful!')
  window.location.reload()
}
</script>
<template>
  <AdminLayout>
    <div class="flex-1 pt-8 px-6 bg-base-100">
      <div class="card w-full p-6 mt-2">
        <div class="text-xl font-semibold inline-block">
          Product
          <div class="inline-block float-right">
            <div class="inline-block float-right">
              <RouterLink
                to="/admin/products/create"
                class="btn px-6 btn-sm normal-case btn-primary"
              >
                Add New
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="divider mt-2"></div>
        <div class="h-full w-full pb-6 bg-base-100">
          <div class="overflow-x-auto w-full">
            <AdminTable :headers="headerColumn">
              <tr v-for="(product, index) in productStore.list" :key="index">
                <td>
                  <div class="font-bold">{{ product.name }}</div>
                </td>
                <td>
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="product.imageUrl" />
                  </div>
                </td>
                <td>{{ product.price }}</td>
                <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
                <td>
                  <div
                    class="badge"
                    :class="
                      product.status === 'open'
                        ? 'badge-success text-white'
                        : 'badge-error text-white'
                    "
                  >
                    {{ product.status }}
                  </div>
                </td>
                <td>{{ product.updatedAt }}</td>
                <td class="flex gap-4">
                  <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }">
                    <button class="btn btn-square">
                      <EditIcon></EditIcon>
                    </button>
                  </RouterLink>
                  <button @click="removeProduct(product['_id'])" class="btn btn-square btn-ghost">
                    <TrashIcon></TrashIcon>
                  </button>
                </td>
              </tr>
            </AdminTable>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
