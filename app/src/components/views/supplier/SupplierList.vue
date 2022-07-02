<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Fornecedores</h5>
        <div class="row justify-content-end">
          <div class="col-md-1">
            <button
              class="btn btn-sm btn-primary"
              @click="this.$router.push('/supplier/store')"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Cadastrar Novo Fornecedor"
            >
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th width="150px">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in suppliers" :key="s.id">
              <td>{{ s.name }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-warning me-2"
                  @click="this.$router.push(`/supplier/${s.id}`)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Informação do Fornecedor"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-file-text"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-success me-2"
                  @click="this.$router.push(`/supplier/update/${s.id}`)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Editar Fornecedor"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Remover Fornecedor"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import supplierMixin from '@/mixins/suppliers'

export default {
  name: "SupplierList",
  mixins: [
    supplierMixin
  ],
  created() {
    this.getSupplier("http://localhost:8000/api/supplier")
  },
};
</script>

<style></style>
