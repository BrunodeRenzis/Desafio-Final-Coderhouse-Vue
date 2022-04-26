<template>
  <form action="" class="datosProducto">
    <div class="container formProducto">
      <label for="nombre">Nombre</label><input type="text" v-model="nombre" />
      <label for="descripcion">Descripcion</label><input type="text" v-model="descripcion" />
      <label for="precio">Precio</label><input type="text" v-model="precio" />
      <label for="imageUrl">Imagen</label><input type="text" v-model="imageUrl" />
      <button type="submit" class="btn btn-success mt-2" @click.prevent="agregarProducto()">Aceptar</button>
    </div>
  </form>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                nombre:'',
                descripcion:'',
                precio:0,
                imageUrl:''
            }
        },

        methods:{
          agregarProducto() {
            const producto = {
              nombre: this.nombre,
              descripcion: this.descripcion,
              precio: this.precio,
              imageUrl: this.imageUrl
            }
            console.log(producto);
            axios.post('https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos',producto)
            .then(() => {
               //falta llamar a la actualizacion de la lista
            });
          },

        }
    }
</script>

<style>
input {
  border: 3px solid black;
  width: 95%;
}

.formProducto {
  border: 3px solid blue;
  max-width: 900px !important;
}
</style>