<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { ref, onMounted } from 'vue'


const shwo = ref(true)
onMounted(() => {
  if(location.pathname == '/support') {
    shwo.value = false
  } else {
    shwo.value = true
  }
})

onMounted(() => {
  window.scrollTo(0, 0)
})


</script>

<template>
  <Navbar v-if="shwo" />

  <div>
    <router-view />
  </div>

    <Footer v-show="shwo" />
</template>

<style scoped>
 
</style>
