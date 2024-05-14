import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
