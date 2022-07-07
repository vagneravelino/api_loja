import axios from 'axios'
import { header } from '@/config'

export default {
  namespaced: true,
  state: {
    brands: {},
    error: {}
  },
  getters: {
    getBrands: (state) => state.brands,
  },
  
  mutations: {
    setBrands(state, payload) {
      state.brands = payload.data;
    },

    setError: (state, payload) => {
      state.error = payload
    }
  },

  actions: {
    getApiBrands(context, payload) {
      axios.get(payload, { headers: header })
        .then(resp => {
          const data = resp.data
          context.commit('setBrands', data)
        })
        .catch(err => {
          context.commit('setError', err)
        })
    },
  },
};
