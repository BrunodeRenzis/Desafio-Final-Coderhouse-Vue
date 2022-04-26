<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-container fluid>
        <v-row>
          <v-col sm="9" md="9" lg="9">
            <div v-if="$store.state.user.role === 'ADMIN'">
              <router-link to="/admin">
                <v-img
                  alt="Home"
                  class="shrink mr-2"
                  contain
                  src="../assets/restauranteLight.png"
                  width="40"
                />
              </router-link>
            </div>
            <div v-else>
              <router-link to="/productos">
                <v-img
                  alt="Home"
                  class="shrink mr-2"
                  contain
                  src="../assets/restauranteLight.png"
                  width="40"
                />
              </router-link>
            </div>
          </v-col>
          <v-col sm="1" md="1" lg="1">
            <button class="logout btn btn-danger" @click="logout">
              Logout
            </button>
          </v-col>
          <v-col sm="1" md="1" lg="1">
            <carrito-compra class="carritoCompra" />
          </v-col>

          <v-col sm="1" md="1" lg="1">
            <span id="username">{{ user.username }}</span>
          </v-col>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

  <script>
import CarritoCompra from "./CarritoCompra.vue";
import { mapState } from "vuex";
export default {
  name: "HeaderCustom",
  components: { CarritoCompra },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
.logout {
  height: 5vh;
  width: min-content;
}
.v-application--wrap {
  min-height: 5vh !important;
}

.carritoCompra {
  padding-top: 5%;
}

#username {
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>