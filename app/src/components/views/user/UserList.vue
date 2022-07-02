<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Lista de Usuários</h5>
        <div class="row justify-content-end">
          <div class="col-md-2">
            <button
              class="btn btn-sm btn-primary"
              @click="this.$router.push({ name: 'UserStore' })"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Cadastrar Novo Usuário"
            >
              <i class="bi bi-plus"></i>
              Novo Usuário
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
            <tr v-for="u in users" :key="u.id">
              <td>{{ u.name }}</td>
              <td>{{ u.email }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-warning me-2"
                  @click="this.$router.push({ name: 'UserDetail', params: { id: u.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Informação do Usuário"
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
                  @click="this.$router.push({ name: 'UserUpdate', params: { id: u.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Editar Usuário"
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
import userMixin from "@/mixins/users";

export default {
  name: "UserList",
  mixins: [userMixin],
  created() {
    this.getUser("http://localhost:8000/api/user");
  },
};
</script>

<style></style>
