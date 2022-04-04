<template>
  <div class="row mt-3">
    <div v-for="producto in listaProductos" :key="producto.id" class="card col-sm-6 presentacionProducto">
      <img class="card-img-top widthImg" :src=producto.imageUrl alt="Card image cap" height="100">
      <div class="card-body prueba">
        <h5 class="card-title">{{producto.nombre}}</h5>
        <div class="toDetail d-flex justify-content-around">
          <router-link :to="{name:'detalleProducto',params:{id:producto.id,nombre:producto.nombre,descripcion:producto.descripcion,imageUrl:producto.imageUrl,precio:producto.precio,stock:producto.stock}}"><a class="btn btn-primary">Detalle</a></router-link>
          <a class="btn btn-danger" @click="agregarProducto({...producto,cantidad:1})">Agregar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
import axios from 'axios';
export default {
    name: "Lista-Productos",
    components: {  },
    data(){
      return{
        listaProductos:[],
      }
    },

    computed:{
      ...mapState([
        'listaProductos',
        'carritoProductos',
      ])
    },

    async created(){
      let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";

      await axios.get(url).then((response)=>(this.listaProductos = response.data));
    },
    mounted(){
      this.$store.dispatch('traerProductos');
    },
  
  methods:{
    ...mapMutations([
      'ADD_PRODUCT',
      'AGREGAR_UNIDAD'
    ]),
    agregarProducto(producto){
          this.$store.commit('ADD_PRODUCT',producto);
    },
    agregarUnidad(producto){
      this.$store.commit('AGREGAR_UNIDAD',producto);
    }
  }
}

</script>

<style lang="scss" scoped>
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



  .contenedorBotones{
    display:flex;
    position:relative;
    flex-direction: row;
    justify-content: space-evenly;

  }
</style>
