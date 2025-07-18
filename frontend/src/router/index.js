import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClubCards from '../views/ClubCards.vue'
import JCUFitnessNews from '../views/JCUFitnessNews.vue'
import Booking from '../views/Booking.vue'
import Workouts from '../views/Workouts.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', redirect: '/home' }, //redirect from '/' to '/home'
  { path: '/home', name: 'Home', component: Home },
  { path: '/clubcards', name: 'ClubCards', component: ClubCards },
  { path: '/news', name: 'News', component: JCUFitnessNews },
  { path: '/workouts', name: 'Workouts', component: Workouts },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/booking', name: 'Booking', component: Booking }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
