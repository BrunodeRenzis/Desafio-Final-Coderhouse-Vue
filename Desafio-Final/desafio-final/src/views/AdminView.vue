<template>
  <div class="container">
    <div class="sectionsAdmin">
        <router-link to="/admin/panelpedidos">
          <button class="btn col-sm">Pedidos</button>
        </router-link>
        <router-link to="/admin/panelproductos">
          <button class="btn col-sm">Productos</button>
        </router-link>
        <router-link to="/admin">
          <button class="btn col-sm" id="menuPrincipal">Menú Principal</button>
        </router-link>
      </div>
    <h1>Menú Admin</h1>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .sectionsAdmin{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  button{
    width: max-content;
  }
</style>
