<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Produto</h5>
        <div class="row justify-content-end">
          <div class="col-md-1">
            <button class="btn btn-sm btn-primary"
              @click="this.$router.push('/produto/cadastro')" 
              data-bs-toggle="tooltip" data-bs-placement="top" title="Cadastrar Novo Produto">
              <i class="bi bi-plus"></i>
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
            <template v-if="data">
              <tr v-for="p in data.data" :key="p.id">
                <td>{{ p.name }}</td>
                <td>{{ p.brand_id }}</td>
                <td>{{ p.supplier_id }}</td>
                <td>{{ p.price }}</td>
                <td>
                  <button class="btn btn-sm btn-outline-success me-2" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Editar Produto" 
                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    <i class="bi bi-file-text"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Remover Produto" 
                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoLista",
  data: () => ({
    data: null
  }),
  methods: {
    listarProdutos() {
      fetch('http://localhost:8000/api/product')
        .then(responseServer => responseServer.json())
        .then(response => {
          this.data = response
        })
    }
  },
  created() {
    this.listarProdutos()
  }
};
</script>

<style></style>
