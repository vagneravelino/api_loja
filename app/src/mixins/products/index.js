import { mapState, mapGetters, mapActions } from "vuex";
import axios from 'axios'
import AWN from 'awesome-notifications'
import { uri, header } from '@/config'
import { configAlert } from '@/config/alert'

export default {
  data: () => ({
    form: {
      name: null,
      description: null,
      brand_id: '',
      supplier_id: '',
      features: null,
      price: null
    },
  }),
  computed: {
    ...mapState('productStore', {
      error: 'error',
    }),
    ...mapGetters('productStore', {
      getProducts: 'getProducts'
    }),
    ...mapGetters('brandtStore', {
      getBrands: 'getBrands'
    }),
    ...mapGetters('supplierStore', {
      getSuppliers: 'getSuppliers'
    }),
  },
  methods: {
    ...mapActions('productStore', {
      getApiProducts: (dispatch, payload) => {
        dispatch('getApiProducts', payload)
      },
      setErrors: 'setErrors'
    }),

    storeProduct() {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.form)

      notifier.asyncBlock(
        axios.post(`${uri}/product`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Product' })
          }, configAlert.durations.global)
        },
        err => {
          this.setErrors(err.response.data.errors)
          notifier.alert(`${err.response.data.message}`)
        }
      )
    },

    updateProduct(id) {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.getProducts)

      notifier.asyncBlock(
        axios.put(`${uri}/product/${id}`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Product' })
          }, configAlert.durations.global)
        },
        err => {
          this.setErrors(err.response.data.errors)
          notifier.alert(`${err.response.data.message}`)
        }
      )
    },

    destroyProduct(id) {
      const notifier = new AWN(configAlert)

      const onOk = () => {
        notifier.asyncBlock(
          axios.delete(`${uri}/product/${id}`, { headers: header }),
          resp => {
            notifier.success(`${resp.data.message}`)

            setTimeout(() =>{
              this.$router.push({ name: 'Product' })
            }, configAlert.durations.global)
          },
          err => {
            notifier.alert(`${err.response.data.errors.name}`)
          }
        )
      }

      const onCancel = () => false

      notifier.confirm(
        'Deseja remover este registro?',
        onOk,
        onCancel,
        {
          labels: {
            confirm: 'Exclusão'
          }
        }
      )
    }
  },
};
