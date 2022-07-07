<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Editar Usuário: {{ id }}</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              v-model="getUsers.name"
              type="text"
              class="form-control"
              :class="error.name ? 'is-invalid' : ''"
              id="name"
              placeholder="Nome do Usuário"
            />
            <div v-if="error.name" v-text="error.name[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              v-model="getUsers.email"
              type="text"
              class="form-control"
              :class="error.email ? 'is-invalid' : ''"
              id="email"
              placeholder="email@exemplo.com.br"
            />
            <div v-if="error.email" v-text="error.email[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-2 col-form-label"
            >Senha</label
          >
          <div class="col-sm-10">
            <input 
              type="password" 
              class="form-control" 
              :class="error.password ? 'is-invalid' : ''"
              id="password" 
              placeholder="Senha Forte" />
            <div v-if="error.password" v-text="error.password[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'User' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button 
              @click="update(id)"
              class="form-control btn btn-primary">
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
import userMixin from '@/mixins/users'
import { uri } from '@/config'

export default {
  name: "UserUpdate",
  props: {
    id: [String, Number]
  },
  mixins: [
    userMixin
  ],
  created() {
    this.getApiUsers(`${uri}/user/${this.id}`)
  },
  beforeUnmount() {
    const error = {
            name: null,
            email: null,
            password: null,
            confirm_password: null
        }
    this.setErrors(error)
  }
};
</script>
