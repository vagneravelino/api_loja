import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    form: {
      name: null,
    },
    validate: "",
  }),
  methods: {
    ...mapActions("brandStore", {
      getApiBrands: (dispatch, payload) => {
        dispatch("getApiBrands", payload);
      },
      store: (dispatch, payload) => {
        /** Refatorar todas as funções referente ao CRUD. */
        fetch("http://localhost:8000/api/brand", {
          method: "POST",
          headers: headerInit,
          body: JSON.stringify(payload),
        })
          .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
              const error = data.errors;
              context.commit("setError", error);

              return Promise.reject(error);
            }

            context.commit("setBrands", data);
          })
          .catch((error) => {
            context.commit("setError", error.name[0]);
          });

        dispatch("storeBrand", payload);
      },
      updateBrand: (dispatch, payload) => {
        // dispatch('updateBrand', payload)
        console.log(payload);
      },
      deleteBrand: (dispatch, payload) => {
        // dispatch('deleteBrand', payload)
        console.log(payload);
      },
    }),
  },
  computed: {
    ...mapState("brandStore", {
      error: "error",
      retorno: "retorno",
    }),
    ...mapGetters("brandStore", {
      getBrands: "getBrands",
      getErrors: "getErrors",
    }),
  },
  watch: {
    error() {
      if (this.error) {
        this.validate = "is-invalid";
      } else {
        this.validate = "is-valid";
      }
    },
  },
};
