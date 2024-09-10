<script setup>
import { useUserStore } from '@/stores/admin/user'
// import { useEventStore } from '@/stores/event'

import { RouterLink } from 'vue-router'

import AdminTable from '@/components/admin/Admin-table.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import TrashIcon from '@/components/icons/Close-icon.vue'
import EditIcon from '@/components/icons/Edit-icon.vue'
import { onMounted } from 'vue'

const userStore = useUserStore()
// const eventStore = useEventStore()

onMounted(() => {})

const headerColumn = ['Name', 'Role', 'Status', 'UpdatedAt']

const removeUser = (index) => {
  userStore.removeUser(index)
  //   productStore.removeProduct(index)
  //   eventStore.popupMessage('success', 'DELETE Successful!')
}
</script>
<template>
  <AdminLayout>
    <div class="flex-1 pt-8 px-6 bg-base-100">
      <div class="card w-full p-6 mt-2">
        <div class="text-xl font-semibold inline-block">
          User
          <div class="inline-block float-right">
            
          </div>
        </div>
        <div class="divider mt-2"></div>
        <div class="h-full w-full pb-6 bg-base-100">
          <div class="overflow-x-auto w-full">
            <AdminTable :headers="headerColumn">
              <tr v-for="(user, index) in userStore.list" :key="index">
                <td>
                  <div class="font-bold">{{ user.name }}</div>
                </td>
                <td>
                  {{ user.role }}
                </td>
                <td>
                  <div
                    class="badge"
                    :class="
                      user.status === 'active'
                        ? 'badge-success text-white'
                        : 'badge-error text-white'
                    "
                  >
                    {{ user.status }}
                  </div>
                </td>
                <td>{{ user.updatedAt }}</td>

                <td class="flex gap-4">
                  <RouterLink :to="{ name: 'admin-user-update', params: { id: index } }">
                    <button class="btn btn-square">
                      <EditIcon></EditIcon>
                    </button>
                  </RouterLink>
                  <button @click="removeUser(index)" class="btn btn-square btn-ghost">
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
