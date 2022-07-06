import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import { uri, headerInit } from '@/config/index'
import { useToast } from "vue-toastification"

const toast = useToast()

export default {
  data: () => ({
    form: {
      name: null,
    },
    error: '',
    validate: ''
  }),
  methods: {
    ...mapMutations("brandStore", {
      setRedirect: (commit, payload) => {
        commit('setRedirect', payload)
      }
    }),
    ...mapActions("brandStore", {
      getApiBrands: (dispatch, payload) => {
        dispatch("getApiBrands", payload);
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

    store() {
      fetch(`${uri}/brand`, {
        method: "POST",
        headers: headerInit,
        body: JSON.stringify(this.form),
      })
        .then(async (response) => {
          const data = await response.json();
          
          if (!response.ok) {
            this.error = data.errors.name[0]
            return false
          }

          toast.success('Marca cadastrada com sucesso!', { timeout: 5000 })
          setTimeout(() => {
            this.$router.push({name: 'Brand'})
          }, 5000)
        })
    },


  },
  computed: {
    ...mapState("brandStore", {
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
