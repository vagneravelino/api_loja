<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Detalhe de Usuário: {{ id }}</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              v-model="getUsers.name"
              type="text"
              class="form-control-plaintext"
              readonly
              id="name"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              v-model="getUsers.email"
              type="text"
              class="form-control-plaintext"
              readonly
              id="email"
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
            <button
              @click="destroy(id)"
              class="form-control btn btn-danger">
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
import { uri } from '@/config'

export default {
  name: "UserDetail",
  props: {
    id: [String, Number]
  },
  mixins: [
    userMixin
  ],
  created() {
    this.getApiUsers(`${uri}/user/${this.id}`)
  }
};
</script>
