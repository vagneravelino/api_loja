export default {
  namespaced: true,
  state: {
    brands: {},
  },
  getters: {
    getBrands: (state) => state.brands,
  },
  mutations: {
    setBrands(state, { data }) {
      state.brands = data;
    },
  },
  actions: {
    storeBrand(context, payload) {
      fetch("http://localhost:8000/api/brand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
          console.error(error.name);
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
