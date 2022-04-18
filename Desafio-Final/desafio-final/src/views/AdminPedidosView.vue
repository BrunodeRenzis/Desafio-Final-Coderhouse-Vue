<template>
    <div>
        <h1>PANEL PEDIDOS</h1>
        <div class="row">
        <div class="card col-sm" v-for="pedido in $store.state.pedido" :key="pedido">
            {{pedido}}
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>