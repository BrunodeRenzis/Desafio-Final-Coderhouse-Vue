<template>
  <div class="row">
    <h1>PRODUCTOS</h1>
    <div v-for="producto in listaProductos" :key="producto.id" class="card col-sm-6 presentacionProducto">
      <img class="card-img-top widthImg" :src=producto.imageUrl alt="Card image cap" height="100">
      <div class="card-body">
        <h5 class="card-title">{{producto.nombre}}</h5>
        <p class="card-text">{{producto.descripcion}}</p>
        <a class="btn btn-primary">Detalle</a>
      </div>
    </div>
  </div>
</template>

<script>
//import {producto} from '../data/productos.js';
import axios from 'axios';
export default {
    name: "Lista-Productos",
    components: {  },
    data(){
      return{
        listaProductos:[],
      }
    },

    async created(){
      let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";

      await axios.get(url).then((response)=>(this.listaProductos = response.data));
    },
}
</script>

<style scoped>
  .widthImg{
    width: 30%;
    height: 100%;
    margin: auto;
    padding: 3%;
  }

  .presentacionProducto{
        width: 40%;
        margin: 2vh auto;
        background: conic-gradient(from 180deg at 50% 50%, #b1b1a6 0deg, #ffe9ee 360deg);
        border: 6px solid rgba(13, 13, 14, 0.5);
        box-sizing: border-box;
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
  }
</style>