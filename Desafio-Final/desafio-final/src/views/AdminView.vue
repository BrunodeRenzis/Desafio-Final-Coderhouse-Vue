<template>
  <div class="container">
    <header-custom />
    <h1>Menú Admin</h1>
    <div class="sectionsAdmin">
      <router-link to="/admin/panelpedidos">
        <button class="btn col-sm">Panel Pedidos</button>
      </router-link>
      <router-link to="/admin/panelproductos">
        <button class="btn col-sm">Panel Productos</button>
      </router-link>

      <router-link to="/productos">
        <button class="btn col-sm">Vista Usuario</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderCustom from "../components/HeaderCustom.vue";

export default {
  components: { HeaderCustom },
};
</script>

<style scoped>
.sectionsAdmin {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
button {
  width: max-content;
}
h1 {
  margin-top: 2%;
}
</style>
