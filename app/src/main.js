import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from '@/stores'

import Toast from "vue-toastification";

// import VueAWN from "vue-awesome-notifications"
import "vue-toastification/dist/index.css"

// import alerta from '@/config/alert'
const options = {}
// const app = createApp(App)
createApp(App)
    .use(router)
    .use(store)
    .use(Toast)
    // .use(alerta)
    // .use(VueAWN, options)
    .mount('#app')

// app.use(Toast)
// app.mount('#app')
// app.config.globalProperties.$alert = () => alerta
// app.config.globalProperties.$alert = alerta
// app.mount('#app')
