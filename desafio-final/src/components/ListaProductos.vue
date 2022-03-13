<template>
  <div>
    <v-item-group>
      <v-container >
        <v-row>
          <v-col
            v-for="n in 12"
            :key="n"
            cols="12"
            md="3"
          class="containerCard">
            <v-item>
              <v-card
                class="d-flex align-center green darken-3"
                max-width="350"
                height="200">
              <v-card>
                  <v-img
                  src="https://picsum.photos/350/165"
                  max-width="350"
                  max-height="350"
                  contain
                  class="grey darken-4 detalleImagen"
                  ></v-img>
              <v-card-title class="text-h6">
                Título genérico
              </v-card-title>
              <v-btn flat color="orange">Agregar al carrito</v-btn>
              </v-card>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
    name: "Lista-Productos",
    components: {  }
}
</script>

<style scoped>
.containerCard{
  margin: 3vw 0vw;
  cursor:pointer;
}
</style>