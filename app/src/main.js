import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from '@/stores'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
