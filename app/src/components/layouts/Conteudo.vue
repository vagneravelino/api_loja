<template>
  <div>
    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link class="list-group-item list-group-item-action" to="/">
          <i class="bi bi-house"></i> Home
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/fornecedor"
        >
          <i class="bi bi-cart"></i> Fornecedores
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/produto"
        >
          <i class="bi bi-box-seam"></i> Produtos
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/marca"
        >
          <i class="bi bi-award"></i> Marcas
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/usuario"
        >
          <i class="bi bi-person"></i> Usuários
        </router-link>
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conteudo",
};
</script>

<style>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}

.router-link-exact-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
