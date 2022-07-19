import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store/index'


const app =  createApp(App)
app.use(router)
app.mount('#app')
app.use(vuex)