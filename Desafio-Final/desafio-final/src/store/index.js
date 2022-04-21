import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
import * as mutations from './mutations';
import * as actions from './actions';

export default new Vuex.Store({
  state: {
    carritoProductos: [],
    usuario: '',
    detallePedido:[],
    totalCompra:0,
    pedido: []
  },
  getters:{},
  mutations,
  actions,
  modules: {
  }
});
