<template>    
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
          width="100"
        />
      </div>

      <div class="d-flex align-center mt-5 listaContainer">
        <ul class="d-flex">
          <li>Usuario</li>
          <li>Compras</li>
        </ul>
      </div>
      <div class="carritoCompra">
        <carrito-compra/> 
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

  </v-app>
  </template>

  <script>
  import CarritoCompra from './CarritoCompra.vue';
  export default {
  components: {CarritoCompra},
        name: 'HeaderCustom'
    }
</script>

<style lang="scss">
  ul{
    width: 15vw;
    list-style: none;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    >li{
      cursor: pointer;

      &:hover{
        color: rgb(171, 243, 243);
        border-bottom: 1px solid;
      }
    }
  }
  .v-application--wrap{
    min-height: 5vh !important;
  }
  .contenedorBotones{
    width: 11%;
    justify-content: space-between;
  }

  .listaContainer{
    width: 80%;
  }

</style>