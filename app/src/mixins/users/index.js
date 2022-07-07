import { mapState, mapGetters, mapActions } from "vuex";
import axios from 'axios'
import AWN from 'awesome-notifications'
import { uri, header } from '@/config'
import { configAlert } from '@/config/alert'

export default {
  data: () => ({
    form: {
      name: null,
      email: null,
      password: null,
      confirm_password: null
    },
  }),
  computed: {
    ...mapState('userStore', {
      error: 'error',
    }),
    ...mapGetters('userStore', {
      getUsers: 'getUsers'
    })
  },
  methods: {
    ...mapActions('userStore', {
      getApiUsers: (dispatch, payload) => {
        dispatch('getApiUsers', payload)
      },
      setErrors: 'setErrors'
    }),

    store() {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.form)

      notifier.asyncBlock(
        axios.post(`${uri}/user`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'User' })
          }, configAlert.durations.global)
        },
        err => {
          this.setErrors(err.response.data.errors)
          notifier.alert(`${err.response.data.message}`)
        }
      )
    },

    update(id) {
      const notifier = new AWN(configAlert)
      const data = JSON.stringify(this.getUsers)

      notifier.asyncBlock(
        axios.put(`${uri}/user/${id}`, data, { headers: header }),
        resp => {
          notifier.success(`${resp.data.message}`)

          setTimeout(() => {
            this.$router.push({ name: 'User' })
          }, configAlert.durations.global)
        },
        err => {
          this.setErrors(err.response.data.errors)
          notifier.alert(`${err.response.data.message}`)
        }
      )
    },

    destroy(id) {
      const notifier = new AWN(configAlert)

      const onOk = () => {
        notifier.asyncBlock(
          axios.delete(`${uri}/user/${id}`, { headers: header }),
          resp => {
            notifier.success(`${resp.data.message}`)

            setTimeout(() =>{
              this.$router.push({ name: 'User' })
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
