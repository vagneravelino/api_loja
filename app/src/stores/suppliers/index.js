export default {
    namespaced: true,
    state: {
        suppliers: {}
    },
    getters: {
        getSuppliers: state => state.suppliers
    },
    mutations: {
        setSuppliers: (state, payload) => {
            state.suppliers = payload.data
        }
    },
    actions: {
        getApiSuppliers: (context, payload) => {
            fetch(payload)
                .then(async response => {
                    const data = await response.json()

                    if (!response.ok) {
                        const error = data.errors

                        return Promise.reject(error)
                    }

                    context.commit('setSuppliers', data)

                }).catch(error => {
                    console.log(error)
                })
        }
    }
}