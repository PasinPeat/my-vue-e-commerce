<script setup>
import { useOrderStore } from '@/stores/admin/order'
// import { useEventStore } from '@/stores/event'

import { RouterLink } from 'vue-router'

import AdminTable from '@/components/admin/Admin-table.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import DetailIcon from '@/components/icons/Detail-icon.vue'
// import { onMounted } from 'vue'

const orderStore = useOrderStore()
// const eventStore = useEventStore()

// onMounted(() => {
//   productStore.loadProduct()
// })

const headerColumn = ['Customer Name', 'Price', 'Status', 'Updated At', '']


</script>
<template>
  <AdminLayout>
    <div class="flex-1 pt-8 px-6 bg-base-100">
      <div class="card w-full p-6 mt-2">
        <div class="text-xl font-semibold inline-block">
          Product
          <div class="inline-block float-right">
            <div class="inline-block float-right">
              
            </div>
          </div>
        </div>
        <div class="divider mt-2"></div>
        <div class="h-full w-full pb-6 bg-base-100">
          <div class="overflow-x-auto w-full">
            <AdminTable :headers="headerColumn">
              <tr v-for="(order, index) in orderStore.list" :key="index">
                <td>
                  <div class="font-bold">{{ order.customerName }}</div>
                </td>
                
                <td>{{ order.totalPrice }} B.</td>
                
                <td>
                  <div
                   
                  >
                    {{ order.status }}
                  </div>
                </td>
                <td>{{ order.updatedAt }}</td>
                <td class="flex gap-4">
                  <RouterLink :to="{ name: 'admin-order-detail', params: { id: index } }">
                    <button class="btn btn-info btn-sm btn-square">
                      <DetailIcon></DetailIcon>
                    </button>
                  </RouterLink>
                  
                </td>
              </tr>
            </AdminTable>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
