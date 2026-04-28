import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import pinia from './core/pinia'
import './shared/assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
