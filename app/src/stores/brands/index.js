export default {
  namespaced: true,
  state: {
    brands: {},
    retorno: {},
  },
  getters: {
    getBrands: (state) => state.brands,
    getErrors: (state) => state.error
  },
  mutations: {
    setBrands(state, payload) {
      state.brands = payload.data;
      state.retorno = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setRedirect(state, payload) {
      state.redirect = payload
    }
  },
  actions: {
    updateBrand(context, payload) {
      fetch(`http://localhost:8000/api/brand/${payload.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            const error = data.errors;

            return Promise.reject(error);
          }

          context.commit("setBrands", data);
        })
        .catch((error) => {
          context.commit('setError', error.name[0])
        });
    },

    deleteBrand(context, payload) {
      fetch(`http://localhost:8000/api/brand/${payload}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      })
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            const error = data.errors;

            return Promise.reject(error);
          }

          context.commit("setBrands", data);
        })
        .catch((error) => {
          context.commit('setError', error.name[0])
        });
    },

    getApiBrands(context, payload) {
      fetch(payload)
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            const error = data.errors;

            return Promise.reject(error);
          }

          context.commit("setBrands", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
