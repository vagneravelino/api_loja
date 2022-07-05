import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    form: {
      name: null
    },
    validate: ''
  }),
  methods: {
    ...mapActions('brandStore', {
      getApiBrands: (dispatch, payload) => {
        dispatch('getApiBrands', payload)
      },
      storeBrand: (dispatch, payload) => {
        dispatch('storeBrand', payload)
      },
      updateBrand: (dispatch, payload) => {
        dispatch('updateBrand', payload)
      },
      deleteBrand: (dispatch, payload) => {
        dispatch('deleteBrand', payload)
      }
    }),
  },
  computed: {
    ...mapState('brandStore',{
      error: 'error',
      retorno: 'retorno'
    }),
    ...mapGetters('brandStore', {
      getBrands: 'getBrands',
    }),
  },
  watch: {
    error() {
      if (this.error) {
        this.validate = 'is-invalid'
      } else {
        this.validate = 'is-valid'
      }
    }
  }
};
