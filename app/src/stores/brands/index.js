export default {
  namespaced: true,
  state: {
    brands: {},
  },
  getters: {
    getBrands: (state) => state.brands,
  },
  mutations: {
    setBrands(state, payload) {
      state.brands = payload.data;
    },
  },
  actions: {
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
