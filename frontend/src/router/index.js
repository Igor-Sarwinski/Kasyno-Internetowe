import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import DashboardPage from '@/views/DashboardPage.vue';
import RoulettePage from "@/views/RoulettePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import BlackjackPage from "@/views/BlackjackPage.vue";
import SlotsPage from "@/views/SlotsPage.vue";
import RankingPage from "@/views/RankingPage.vue";
import InfoPage from "@/views/InfoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: () => RegisterPage },
    { path: '/dashboard', component: () =>DashboardPage},
    { path: '/profile', component: () =>ProfilePage },
    { path: '/roulette', component: () =>RoulettePage },
    { path: '/blackjack', component: () =>BlackjackPage },
    { path: '/slots', component: () =>SlotsPage },
    { path: '/ranking', component:() => RankingPage },
    { path: '/info', component: () =>InfoPage },
  ]
})

export default router
