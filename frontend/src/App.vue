<template>
  <nav style="margin-bottom: 30px;">
    <RouterLink to="/clubcards">Club Cards</RouterLink> |
    <RouterLink to="/news">News</RouterLink> |
    <RouterLink to="/workouts">Workouts</RouterLink> | 
    <RouterLink to="/profile">Profile</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/register">Register</RouterLink> |
    <RouterLink to="/booking">Booking</RouterLink>
  </nav>
  
  <router-view />
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
