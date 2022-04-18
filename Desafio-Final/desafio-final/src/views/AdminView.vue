<template>
  <div class="container">
    <h1>Menú Admin</h1>
      <div class="row">
        <div class="card col-sm-6" v-for="pedido in $store.state.pedido" :key="pedido">
            {{pedido}}
        </div>
      </div>
      <router-view></router-view>
      <div class="sectionsAdmin">
        <router-link to="/admin/panelpedidos">
          <button class="btn col-sm-4">Pedidos</button>
        </router-link>
        <router-link to="/admin/panelproductos">
          <button class="btn col-sm-4">Productos</button>
        </router-link>
        <router-link to="/admin">
          <button class="btn col-sm-4" id="menuPrincipal">Menú Principal</button>
        </router-link>
      </div>
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
