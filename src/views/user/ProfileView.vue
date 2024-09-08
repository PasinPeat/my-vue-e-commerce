<script setup>
import { onMounted } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue'
import { useUserStore } from '@/stores/user/user'

const userStore = useUserStore()

const userForm = [
  { name: 'Email', field: 'email' },
  { name: 'Name', field: 'name' }
]

onMounted(() => {
  userStore.loadUserData()
  console.log(userStore.userData)
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      userStore.userData.imageUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const updateProfile = () => {
  console.log(userStore.userData)
  userStore.updateUserData(userStore.userData)
}
</script>

<template>
  <UserLayout>
    <div class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl font-bold">Your profile</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-36 rounded-full">
            <img :src="userStore.userData.imageUrl" />
          </div>
        </div>

        <input type="file" @change="handleFileUpload" />

        <div v-for="(item, index) in userForm" :key="index" class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ item.name }}</span>
            <span class="label-text-alt"></span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
            v-model="userStore.userData[item.field]"
          />
        </div>

        <button class="btn btn-primary w-full mt-4" @click="updateProfile">Update profile</button>
      </div>
    </div>
  </UserLayout>
</template>
