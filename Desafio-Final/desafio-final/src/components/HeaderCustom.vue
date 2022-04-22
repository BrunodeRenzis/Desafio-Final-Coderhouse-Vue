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
            <button class="logout btn btn-danger" @click="logout">Logout</button>
        </v-col>      
        <v-col
        sm="1"
        md="1"
        lg="1">
        <carrito-compra class="carritoCompra"/>
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
          components:{CarritoCompra},
          methods:{
            logout() {
            this.$store.dispatch("logout");
            this.$router.push("/");
            }
          }
      }
</script>

<style lang="scss"> 
  .logout{
    height: 5vh;
    width: min-content;
  }
  .v-application--wrap{
    min-height: 5vh !important;
  }

  .carritoCompra{
    padding-top:5%;
  }
</style>