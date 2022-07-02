<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Usuários</h5>
        <div class="row justify-content-end">
          <div class="col-md-1">
            <button class="btn btn-sm btn-primary" 
              @click="this.$router.push('/usuario/cadastro')"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Cadastrar Novo Usuário">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th width="150px">Ação</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="data">
              <tr v-for="u in data.data" :key="u.id">
                <td>{{u.name}}</td>
                <td>{{u.email}}</td>
                <td>
                  <button class="btn btn-sm btn-outline-success me-2" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Editar Usuário" 
                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    <i class="bi bi-file-text"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Remover Usuário" 
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
  name: "UserList",
  data: () => ({
    data: null
  }),
  methods: {
    listarUsuarios() {
      fetch('http://localhost:8000/api/user')
        .then(serverResponse => serverResponse.json())
        .then(response => {
          this.data = response
        })
    }
  },
  created() {
    this.listarUsuarios()
  }
};
</script>

<style></style>
