import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Parallaxy from '@lucien144/vue3-parallaxy';
import App from './App.vue'
import router from './router'

Vue.use(VueParallaxJs)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
