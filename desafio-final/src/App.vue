<template>
  <v-app>
    <Header-Custom>
    </Header-Custom>
    <v-footer>
      <footer-vue/>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderCustom from './components/HeaderCustom.vue';
import FooterVue from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    HeaderCustom,
    FooterVue
  },

  data(){
    return {
    };
  } 
};
</script>
