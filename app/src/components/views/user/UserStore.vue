<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Cadastro de Usuário</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticName"
              placeholder="João da Silva"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="email@exemplo.com.br"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >
            Senha
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Senha Forte" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >
            Confirmar Senha
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Senha Forte" />
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
            <button class="form-control btn btn-primary">
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
export default {
  name: "UserStore",
};
</script>

<style></style>
