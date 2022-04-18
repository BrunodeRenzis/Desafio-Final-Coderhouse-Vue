<template>    
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
    <v-container fluid>
      <v-row>
        <v-col
        sm="10"
        md="10"
        lg="10">
          <router-link to="/productos">
            <v-img
              alt="Home"
              class="shrink mr-2"
              contain
              src="../assets/restauranteLight.png"
              width="40"
            />
          </router-link>
        </v-col>

        <v-col
        sm="1"
        md="1"
        lg="1">
        <carrito-compra class="carritoCompra"/>
        </v-col>              

        <v-col

        sm="1"
        md="1"
        lg="1">
            <v-img
              alt="User"
              class="shrink mr-2 float-end"
              contain
              src="../assets/usuario.png"
              width="40"
            />
        </v-col>      
      </v-row>
    </v-container>


      <v-spacer></v-spacer>
    </v-app-bar>

  </v-app>
  </template>

  <script>
    import CarritoCompra from './CarritoCompra.vue' 
    export default {
          name: 'HeaderCustom',
          components:{CarritoCompra}
      }
</script>

<style lang="scss"> 
  .v-application--wrap{
    min-height: 5vh !important;
  }

  .carritoCompra{
    padding-top:5%;
  }
</style>