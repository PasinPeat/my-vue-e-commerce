<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const pageData = [
  {
    name: 'Dashboard',
    route: 'admin-dashboard'
  },
  {
    name: 'Product',
    route: 'admin-products-list'
  },
  {
    name: 'Order',
    route: 'admin-orders-list'
  },
  {
    name: 'User',
    route: 'admin-users-list'
  },
  {
    name: 'Logout',
    route: 'admin-login'
  }
]

const currentPath = ref('')

currentPath.value = route.name
</script>

<template>
  <div class="drawer drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content p-4">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-0 w-[180px] h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li class="mb-2 font-semibold text-xl">
          <div>Web Admin</div>
        </li>
        <li class="w-full" v-for="(page, index) in pageData" :key="index">
          <RouterLink
            :to="{ name: page.route }"
            :class="currentPath === page.route ? 'btn btn-active side-btn' : 'btn side-btn'"
          >
            {{ page.name }}
          </RouterLink>
        </li>
        <li>
          <button
            class="btn btn-link"
            @click="
              router.push({
                path: '/'
              })
            "
          >
            navigate to User
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
