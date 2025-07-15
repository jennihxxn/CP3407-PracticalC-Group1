import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClubCards from '../views/ClubCards.vue'
import JCUFitnessNews from '../views/JCUFitnessNews.vue'
import Booking from '../views/Booking.vue'
import Workouts from '../views/Workouts.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/',name: 'Home', component: Home, },
  { path: '/', component: ClubCards },
  { path: '/clubcards', component: ClubCards },
  { path: '/news', component: JCUFitnessNews },
  { path: '/workouts', component: Workouts },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/booking', component: Booking }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
