<template>
  <div class="container">
    <header-custom/>    
    <h1>Menú Admin</h1>
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
      <router-view></router-view>
      
  </div>
</template>

<script>
import HeaderCustom from '../components/HeaderCustom.vue'

export default {
  components:{HeaderCustom}
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
  h1{
    margin-top: 2%;
  }
</style>
