<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Editar Fornecedor: {{ suppliers.id }}</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticName"
              :value="suppliers.name"
              placeholder="FastShop"
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
            <button class="form-control btn btn-primary">
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
  name: "SupplierUpdate",
  mixins: [
    supplierMixin
  ],
  created() {
    this.getSupplier(`http://localhost:8000/api/supplier/${this.$route.params.id}`)
  }
};
</script>

<style></style>
