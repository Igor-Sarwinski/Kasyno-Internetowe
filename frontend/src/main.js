import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
import { Roulette } from 'vue3-roulette'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component("roulette", Roulette)
app.use(router)
app.mount('#app')
