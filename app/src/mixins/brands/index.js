import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      name: null
    },
  }),
  methods: {
    ...mapActions('brandStore', {
      getApiBrands: (dispatch, payload) => {
        dispatch('getApiBrands', payload)
      },
      storeBrand: (dispatch, payload) => {
        dispatch('storeBrand', payload)
      }
    }),

    validate() {

    }
  },
  computed: {
    ...mapGetters('brandStore', {
      getBrands: 'getBrands',
    }),
  },

};
