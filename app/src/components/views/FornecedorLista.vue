<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Fornecedores</h5>
        <div class="row justify-content-end">
          <div class="col-md-1">
            <button class="btn btn-sm btn-primary" 
              @click="this.$router.push('/fornecedor/cadastro')"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Cadastrar Novo Fornecedor">
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
            <template v-if="data">
              <tr v-for="f in data.data" :key="f.id">
                <td>{{ f.name }}</td>
                <td>
                  <button class="btn btn-sm btn-outline-success me-2" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Editar Fornecedor" 
                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    <i class="bi bi-file-text"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Remover Fornecedor" 
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
  name: "FornecedorLista",
  data: () => ({
    data: null
  }),
  methods: {
    listarFornecedor() {
      fetch('http://localhost:8000/api/supplier')
        .then(responseServer => responseServer.json())
        .then(response => {
          this.data = response
        })
    }
  },
  created() {
    this.listarFornecedor()
  }
};
</script>

<style></style>
