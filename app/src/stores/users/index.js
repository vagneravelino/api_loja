import axios from 'axios'
import { header } from '@/config'

export default {
    namespaced: true,
    state: {
        users: {},
        error: {
            name: null,
            email: null,
            password: null,
            confirm_password: null
        },
    },
    getters: {
        getUsers: state => state.users
    },
    mutations: {
        setUsers: (state, payload) => {
            state.users = payload.data
        },
        setError: (state, payload) => {
            state.error = payload
        }
    },
    actions: {
        getApiUsers: (context, payload) => {
            axios.get(payload, { headers: header })
                .then(resp => { 
                    const data = resp.data
                    context.commit("setUsers", data)
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