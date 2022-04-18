<template>
    <div>
       <router-link to="/carritoVacio" v-if="$store.state.carritoProductos.length === 0"><img src="../assets/carrito-de-compras.png" alt="Carrito compras"></router-link>
       <router-link to="/carrito" v-else><img src="../assets/carrito-de-compras.png" alt="Carrito compras"></router-link>
    </div>
</template>

<script>
export default {
    name: 'Carrito-Compra'
}
</script>

<style lang="scss" scoped>
    img{
        width:2vw;
        height: 4vh;
    }
</style>