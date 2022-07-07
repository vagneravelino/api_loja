import axios from 'axios'
import { header } from '@/config'

export default {
    namespaced: true,
    state: {
        products: {},
        error: {
            name: null,
            description: null,
            brand_id: '',
            supplier_id: '',
            features: null,
            price: null
        },
    },
    getters: {
        getProducts: state => state.products
    },
    mutations: {
        setProducts: (state, payload) => {
            state.products = payload.data
        },
        setError: (state, payload) => {
            state.error = payload
        }
    },
    actions: {
        getApiProducts: (context, payload) => {
            axios.get(payload, { headers: header })
                .then(resp => { 
                    const data = resp.data
                    context.commit("setProducts", data)
                })
                .catch(err => { 
                    context.commit('setError', err)
                })
        },
        setErrors: (context, payload) => {
            context.commit('setError', payload)
        }
    }
}