import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Forms/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: () => import('@/views/Forms/RegisterPage.vue') },
    { path: '/dashboard', component: () => import('@/views/DashboardPage.vue') },
    { path: '/profile', component: () => import('@/views/ProfilePage.vue') },
    { path: '/roulette', component: () => import('@/views/Roulette/RoulettePage.vue') },
    { path: '/blackjack', component: () => import('@/views/Blackjack/BlackjackPage.vue') },
    { path: '/slots', component: () => import('@/views/Slots/SlotsPage.vue') },
    { path: '/ranking', component: () => import('@/views/RankingPage.vue') },
    { path: '/info', component: () => import('@/views/InfoPage.vue') }
  ]
})

export default router
