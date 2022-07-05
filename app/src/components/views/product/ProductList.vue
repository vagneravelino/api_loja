<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Produto</h5>
        <div class="row justify-content-end">
          <div class="col-md-2">
            <button
              class="btn btn-sm btn-primary"
              @click="this.$router.push({ name: 'ProductStore' })"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Cadastrar Novo Produto"
            >
              <i class="bi bi-plus"></i>
              Novo Produto
            </button>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Fornecedor</th>
              <th>Preço (R$)</th>
              <th width="150px">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in products" :key="p.id">
              <td>{{ p.name }}</td>
              <td>{{ p.brand.name }}</td>
              <td>{{ p.supplier.name }}</td>
              <td>{{ p.price }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-warning me-2"
                  @click="this.$router.push({ name: 'ProductDetail', params: { id: p.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Informação do Produto"
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
                  @click="this.$router.push({ name: 'ProductUpdate', params: { id: p.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Editar Produto"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-pencil"></i>
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
import productMixin from "@/mixins/products";

export default {
  name: "ProductList",
  mixins: [productMixin],
  created() {
    this.getProduct("http://localhost:8000/api/product");
  },
};
</script>

<style></style>
