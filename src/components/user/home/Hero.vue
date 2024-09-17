<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="hero bg-base-200 min-h-[100px]">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="https://img.freepik.com/free-photo/portrait-anthropomorphic-cat-dressed-human-clothes_23-2151106834.jpg"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Dear Lovely Customer !!</h1>
        <p class="py-6">
          meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow
          meow meow
        </p>
        <button
          @click="router.push({ name: 'search', query: { q: 'cat' } })"
          class="btn btn-primary"
        >
          See more
        </button>
      </div>
    </div>
  </div>
</template>
