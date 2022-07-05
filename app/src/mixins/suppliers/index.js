import { mapState,  mapActions} from 'vuex'

export default {
  data: () => ({
    form: {
      name: null
    }
  }),
  computed: {
    ...mapState('supplierStore', ['suppliers'])
  },
  methods: {
    ...mapActions('supplierStore', {
      getApiSuppliers: (dispatch, payload) => {
        dispatch('getApiSuppliers', payload)
      }
    })
  },
};
