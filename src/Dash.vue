<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Sidebar from '@/components/Sidebar.vue';


</script>

<template>
  <Navbar></Navbar>
   <Sidebar></Sidebar>

 
  <div>
    <router-view></router-view>
  </div>
 


  <Footer></Footer>
</template>

<style scoped>
 
</style>
