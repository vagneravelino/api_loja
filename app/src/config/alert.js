import Vue from 'vue'
import useToast from "vue-toastification";
import "vue-toastification/dist/index.css"

const options = {
    position: 'top-right',
    maxNotifications: 6,
    durations: {
        global: 3000,
        alert: 5000
    },
    labels: {
        tip: 'Dica!',
        info: 'Informação!',
        success: 'Sucesso!',
        warning: 'Atenção!',
        alert: 'Erro!',
        async: 'Processando...',
        confirm: 'Responda!',
        confirmOk: 'Enviar!',
        confirmCancel: 'Voltar'
    }
}

export const alerta = () => {
    return useToast()
}
// Vue.use()
// Vue.use(VueAWN, options)
// Vue.use(AWN, {
//     install(Vue) {
//         // Vue.prototype.$alert.use(options)

//         Vue.prototype.$alert = function (options) {
//             return options
//         }

        // Vue.prototype.$test = function (value) {
            // return value
        // }
//     }
// })
