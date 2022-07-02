<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Detalhe de Usuário: {{ users.id }}</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext"
              readonly
              id="staticName"
              :value="users.name"
              placeholder="João da Silva"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext"
              readonly
              id="staticEmail"
              :value="users.email"
              placeholder="email@exemplo.com.br"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'User' })">
              <i class="bi bi-arrow-left-circle"></i>
              Voltar
            </button>
          </div>
          <div class="col-sm-2">
            <button class="form-control btn btn-danger">
              <i class="bi bi-trash"></i>
              Deletar
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import userMixin from '@/mixins/users'

export default {
  name: "UserDetail",
  mixins: [
    userMixin
  ],
  created() {
    this.getUser(`http://localhost:8000/api/user/${this.$route.params.id}`)
  }
};
</script>

<style></style>
