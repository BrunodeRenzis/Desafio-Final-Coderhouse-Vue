<template>
    <div class="container mt-4 w-50 p-3">
        <router-link to="/productos" class="cerrar">X</router-link>
      <div class="row bg-dark bg-gradient">
        <div class="card col-sm-12 col presentacionProducto">
          <img class="card-img-top" :src=$route.params.imageUrl alt="Card image cap">
          <div class="card-body col">
            <h5 class="card-title">{{$route.params.nombre}}</h5>
            <h5 class="card-title">{{$route.params.descripcion}}</h5>
          </div>
            <div class="contenedorBotones col d-flex justify-content-around">
              <h3>${{$route.params.precio}}</h3>
              <a class="btn btn-primary btn-danger" @click="agregarProducto({...$route.params,cantidad:1,})">Agregar</a>
            </div>
              <p>Unidades en stock {{$route.params.stock}}</p>
        </div>
    </div>
  </div>

  <!--
      <v-row justify="space-around">

    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="info"
            v-bind="attrs"
            v-on="on"
          >Detalle</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
  -->
</template>

<script>
import {mapMutations,mapState} from 'vuex';
export default {

  computed:{
    ...mapState([
      'carritoProductos',
    ])
  },
  methods:{
    ...mapMutations([
      'ADD_PRODUCT'
    ]),
    agregarProducto(producto){
      this.$store.commit('ADD_PRODUCT',producto);
      console.log(producto);
    }
    
  }
}
</script>

<style>
  .widthImg{
    width: 30%;
    height: 100%;
    margin: auto;
    padding: 3%;
  }

  .cerrar{
    position: absolute;
    display: block;
    float: left;
    font-size: xx-large;
    text-decoration-line: none;
    cursor: pointer;
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