<template>
    <div>
        <h1>PANEL PEDIDOS</h1>
        <div class="row">
        <div class="card col-sm-6" v-for="pedido in listaPedidos" :key="pedido.id">
            <div class="pedido d-flex flex-column">
                <p>Cliente: {{pedido.cliente}}</p>
                <p class="productos">Pedido: {{pedido.productos}}</p> 
                <p>Monto: {{pedido.monto}}</p>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    data(){
        return{
            listaPedidos:[]
        }
    },
    async created(){
      let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/pedidos";

      await axios.get(url).then((response)=>(this.listaPedidos = response.data));
    }
}
</script>

<style scoped>

</style>