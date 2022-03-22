<template>
  <div>
    <h1>PRODUCTOS</h1>
    <ul v-for="producto in listaProductos" :key="producto.id">
      <li>{{producto.name}}</li>
    </ul>
  </div>
</template>

<script>
import {producto} from '../data/productos.js';
export default {
    name: "Lista-Productos",
    components: {  },
    data(){
      return{
         listaProductos:producto
      }
    }
}
</script>

<style scoped>

</style>