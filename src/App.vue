<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { ref, onMounted } from 'vue'


const shwo = ref(true)
onMounted(() => {
  if(location.pathname == '/service_client' || location.pathname == '/legales' || location.pathname == '/services'  || location.pathname == '/informations') {
    shwo.value = false
  } else {
    shwo.value = true
  }
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
