import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
import * as mutations from './mutations';
import * as actions from './actions';

export default new Vuex.Store({
  state: {
    carritoProductos: [],
    usuario: String,
    detallePedido:[],
    totalCompra:0,
    pedido: {
      id: Number,
      cliente:String,
      productos:[],
      total: Number
    }
  },
  getters:{},
  mutations,
  actions,
  modules: {
  }
});
