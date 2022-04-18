<template>
  <div class="container">
      <div class="card" v-for="pedido in $store.state.pedido" :key="pedido">
          {{pedido}}
      </div>
      <div class="row">
        <button class="btn btn-primary col-sm-6">Pedidos</button>
        <button class="btn btn-danger col-sm-6">Productos</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>