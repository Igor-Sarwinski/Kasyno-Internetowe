import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import RoulettePage from "./components/pages/RoulettePage.vue";
import ProfilePage from "./components/pages/ProfilePage.vue";
import BlackjackPage from "./components/pages/BlackjackPage.vue";
import SlotsPage from "./components/pages/SlotsPage.vue";
import RankingPage from "./components/pages/RankingPage.vue";
import InfoPage from "./components/pages/InfoPage.vue";
library.add(fas);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LoginPage },
        { path: '/register', component: RegisterPage },
        { path: '/dashboard', component: DashboardPage },
        { path: '/profile', component: ProfilePage },
        { path: '/roulette', component: RoulettePage },
        { path: '/blackjack', component: BlackjackPage },
        { path: '/slots', component: SlotsPage },
        { path: '/ranking', component: RankingPage },
        { path: '/info', component: InfoPage },
    ],
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
