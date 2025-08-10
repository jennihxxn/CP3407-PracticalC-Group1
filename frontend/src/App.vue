<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>




