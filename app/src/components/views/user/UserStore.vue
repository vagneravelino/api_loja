<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Cadastro de Usuário</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="form.name"
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
          <label for="email" class="col-sm-2 col-form-label">
            Email
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="form.email"
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
            >
            Senha
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <input 
              v-model="form.password"
              type="password" 
              class="form-control"
              :class="error.password ? 'is-invalid' : ''"
              id="password" 
              placeholder="Senha Forte" />
          <div v-if="error.password" v-text="error.password[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password_confirmation" class="col-sm-2 col-form-label"
            >
            Confirmar Senha
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <input
              v-model="form.password_confirmation" 
              type="password" 
              class="form-control" 
              :class="error.password_confirmation ? 'is-invalid' : ''"
              id="password_confirmation" 
              placeholder="Confirmar a Senha Forte" />
          <div v-if="error.password_confirmation" v-text="error.password_confirmation[0]" class="invalid-feedback"></div>
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
            <button class="form-control btn btn-primary"
              @click="store()"
            >
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

export default {
  name: "UserStore",
  mixins: [
    userMixin
  ],
  beforeUnmount() {
    const error = {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    this.setErrors(error)
  }
};
</script>
