<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Cadastro de Fornecedor</h5>
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
              id="name"
              placeholder="Nome do Fornecedor"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'Supplier' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button class="form-control btn btn-primary"
              @click="store()"
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
import supplierMixin from '@/mixins/suppliers'

export default {
  name: "SupplierStore",
  mixins: [supplierMixin]
};
</script>
