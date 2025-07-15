// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Booking from '../views/Booking.vue'
import ClubCards from '../views/ClubCards.vue'
import JCUFitnessNews from '../views/JCUFitnessNews.vue'

const routes = [
  { path: '/', component: ClubCards },                // 홈
  { path: '/clubcards', component: ClubCards },       // Club Cards
  { path: '/news', component: JCUFitnessNews },       // News
  { path: '/login', component: Login },               // Login
  { path: '/register', component: Register },         // Register
  { path: '/booking', component: Booking }            // Booking
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
