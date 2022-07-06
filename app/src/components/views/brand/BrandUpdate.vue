<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Editar Marca: {{ id }}</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="getBrands.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Nome da Marca"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button 
              @click="this.$router.push({ name: 'Brand' })"
              class="form-control btn btn-light">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button 
              @click="update(id)"
              class="form-control btn btn-primary">
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
    name: 'BrandUpdate',
    props: { id: [String, Number]},
    mixins: [
      brandMixin
    ],
    created() {
      this.getApiBrands(`http://localhost:8000/api/brand/${this.id}`)
    }
}
</script>