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
              v-model="name"
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
              @click="setData()"
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

export default {
    name: 'BrandStore',
    data: () => ({
      name: '',
    }),
    mixins: [brandMixin],
    methods: {
      setData() {
        const form = {
          name: this.name
        }

        this.storeBrand(form)
      }
    },
    watch: {
      retorno(r) {
        if (r.status === 'Sucesso'){
          r = ''
          this.$router.push({ name: 'Brand' })
        }
      }
    }
}
</script>