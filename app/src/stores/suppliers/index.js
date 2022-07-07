import axios from 'axios'
import { header } from '@/config'

export default {
    namespaced: true,
    state: {
        suppliers: {},
        error: {}
    },
    getters: {
        getSuppliers: state => state.suppliers
    },
    mutations: {
        setSuppliers: (state, payload) => {
            state.suppliers = payload.data
        },

        setError: (state, payload) => {
            state.error = payload
        }
    },
    actions: {
        getApiSuppliers: (context, payload) => {
            axios.get(payload, { headers: header} )
                .then(resp => {
                    const data = resp.data
                    context.commit('setSuppliers', data)
                })
                .catch(err => {
                    context.commit('setError', err)
                })
        }
    }
}