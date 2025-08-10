<template>
  <header class="bg-black text-white py-6 px-8 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img src="/images/JCU_Logo.png" alt="Logo" class="h-14 object-contain" />

    </div>
    <nav class="space-x-6 text-lg">
      <a href="index" class="hover:underline">Home</a>
      <a href="cards" class="hover:underline">Cards</a>
      <a href="profile" class="hover:underline">Profile</a>
      <a href="contact" class="hover:underline">Contact</a>
      <a href="booking" class="hover:underline">Booking</a>
      <a href="workout" class="hover:underline">Workouts</a>
      <a href="news" class="hover:underline">News</a>
      <a href="login" class="hover:underline">Login</a>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

