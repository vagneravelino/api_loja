import { createStore } from 'vuex'

import brandStore from '@/stores/brands'
import supplierStore from '@/stores/suppliers'

const store = {
  namespaced: true,
  state: {
    title: "Loja de Eletrodomésticos",
    name: "Sistema de Gestão de Loja de Eletrodomésticos.",
  }
}

export default createStore({
  modules: {
    brandStore: brandStore,
    supplierStore: supplierStore,
    store: store
  },
  
})
