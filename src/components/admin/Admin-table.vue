<script setup>
import { defineProps } from 'vue'

defineProps({
  headers: Array
})

</script>

<template>
    <div class=" overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th v-for="(header, index) in headers" :key="index">{{header}}</th>
              
            </tr>
          </thead>
          <tbody>
            <slot></slot>
          </tbody>
        </table>
        </div>
</template>
