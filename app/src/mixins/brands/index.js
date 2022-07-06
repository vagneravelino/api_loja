import { mapGetters, mapActions } from "vuex";
import axios from 'axios'
import { uri, header } from '@/config/index'
import AWN from "awesome-notifications"
import { configAlert } from '@/config/alert'

export default {
  data: () => ({
    form: {
      name: null,
    },
  }),
  methods: {
    ...mapActions("brandStore", {
      getApiBrands: (dispatch, payload) => {
        dispatch("getApiBrands", payload);
      },
    }),

    store() {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.form)

      notifier.asyncBlock(
        axios.post(`${uri}/brand`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Brand' })
          }, configAlert.durations.global)
        },
        err => {
          notifier.alert(`${err.response.data.errors.name}`)
        }
      )
    },

    update(id) {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.getBrands)

      notifier.asyncBlock(
        axios.put(`${uri}/brand/${id}`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'Brand' })
          }, configAlert.durations.global)
        },
        err => {
          notifier.alert(`${err.response.data.errors.name}`)
        })
    },
    
    destroy(id) {
      const notifier = new AWN(configAlert);

      const onOk = () => {
        notifier.asyncBlock(
          axios.delete(`${uri}/brand/${id}`, { headers: header }),
          resp => {
            notifier.success(`${resp.data.message}`)

            setTimeout(() => {
              this.$router.push({ name: 'Brand' })
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
    },
  },
  computed: {
    ...mapGetters("brandStore", {
      getBrands: "getBrands",
    }),
  },
};
