import './assets/main.css'
import { createApp } from 'vue'
import pinia from '@/stores/index.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router,pinia)

app.mount('#app')
