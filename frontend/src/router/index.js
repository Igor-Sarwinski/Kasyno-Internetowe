import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: () => import('@/views/RegisterPage.vue') },
    { path: '/dashboard', component: () => import('@/views/DashboardPage.vue') },
    { path: '/profile', component: () => import('@/views/ProfilePage.vue') },
    { path: '/roulette', component: () => import('@/views/RoulettePage.vue') },
    { path: '/blackjack', component: () => import('@/views/BlackjackPage.vue') },
    { path: '/slots', component: () => import('@/views/SlotsPage.vue') },
    { path: '/ranking', component: () => import('@/views/RankingPage.vue') },
    { path: '/info', component: () => import('@/views/InfoPage.vue') }
  ]
})

export default router
