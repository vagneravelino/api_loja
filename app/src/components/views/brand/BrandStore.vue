<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Cadastro de Marca</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              :class="validate"
              id="name"
              placeholder="Brastemp"
              required
            />
            <div v-if="error" v-text="error" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'Brand' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button
              @click="store(form)"
              class="form-control btn btn-primary"
            >
              <i class="bi bi-cloud-download"></i>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import brandMixin from '@/mixins/brands'
import { useToast } from "vue-toastification"

export default {
    name: 'BrandStore',
    mixins: [brandMixin],
    methods: {
      teste() {
        const toast = useToast()

        toast('Teste')

        // alerta('Alerta personalizada!')
        // this.$alerta('Alerta personalizada 2!')

        // const alerta = new AWN()

        // alerta.success('Teste')
        // this.$awn.alert('Teste')
        // new AWN().success(teste)
      }
    },
    watch: {
      retorno(r) {
        if (r.status === 'Sucesso'){
          r = ''
          // this.$router.push({ name: 'Brand' })
        }
      }
    }
}
</script>

<style>
/* @import '~vue-awesome-notifications/dist/styles/style.css' */
</style>