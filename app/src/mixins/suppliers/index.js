import { mapGetters,  mapActions} from 'vuex'
import axios from 'axios'
import AWN from 'awesome-notifications'
import { uri, header } from '@/config'
import { configAlert } from '@/config/alert'

export default {
  data: () => ({
    form: {
      name: null
    }
  }),
  computed: {
    ...mapGetters('supplierStore', {
      getSuppliers: 'getSuppliers'
    })
  },
  methods: {
    ...mapActions('supplierStore', {
      getApiSuppliers: (dispatch, payload) => {
        dispatch('getApiSuppliers', payload)
      }
    }),

    store() {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.form)

      notifier.asyncBlock(
        axios.post(`${uri}/supplier`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Supplier' })
          }, configAlert.durations.global)
        },
        err => {
          notifier.alert(`${err.response.data.errors.name}`)
        }
      )
    },

    update(id) {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.getSuppliers)

      notifier.asyncBlock(
        axios.put(`${uri}/supplier/${id}`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Supplier' })
          }, configAlert.durations.global)
        },
        err => {
          notifier.alert(`${err.response.data.errors.name}`)
        }
      )
    },

    destroy(id) {
      const notifier = new AWN(configAlert)

      const onOk = () => {
        notifier.asyncBlock(
          axios.delete(`${uri}/supplier/${id}`, { headers: header }),
          resp => {
            notifier.success(`${resp.data.message}`)

            setTimeout(() => {
              this.$router.push({ name: 'Supplier' })
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
