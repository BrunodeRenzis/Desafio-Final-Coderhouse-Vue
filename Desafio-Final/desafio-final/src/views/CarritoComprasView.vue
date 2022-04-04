<template>
    <div class="container mt-5">
        <div v-for="productoAgregado in $store.state.carritoProductos" :key="productoAgregado.id">
            <div class="card">
                <h3>{{productoAgregado.nombre}}</h3>
                <img :src="productoAgregado.imageUrl" width="20%">
                <span>{{productoAgregado.cantidad}}</span>
                <span class="btn btn-primary" @click="quitarUnidad(productoAgregado)">-</span><span class="btn btn-secondary" @click="addACarrito(productoAgregado)">+</span>
                <div class="precio">
                    <p>Precio: {{productoAgregado.precio * productoAgregado.cantidad}}</p>
                </div>
            </div>
        </div>
            <div class="total" v-if="total">
                <p>Total: ${{total}}</p>
                <a class="btn btn-danger" @click="finalizarCompra">Comprar</a>
            </div>
        <router-link to="/productos">Home Productos</router-link>
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';

export default {
    computed:{
        ...mapState([
            'carritoProductos'
        ]),
    total() {
        let total = 0;
        this.carritoProductos?.forEach((item) => {
            item.cantidad = item.cantidad || 1;
            total += (item.cantidad || 1) * item.precio;
        });

        return total;
    }
    },
    methods:{
        ...mapMutations([
            'REMOVE_PRODUCT',
            'AGREGAR_UNIDAD',
            'ADD_A_CARRITO',
            'QUITAR_UNIDAD',
            'FINALIZAR_COMPRA'
        ]),
        quitarProducto(producto){
            this.$store.commit('REMOVE_PRODUCT',producto);
        },
        agregarUnidad(producto){
            this.$store.commit('AGREGAR_UNIDAD',producto);
        },
        quitarUnidad(producto){
            this.$store.commit('QUITAR_UNIDAD',producto);
            if(producto.cantidad<1){
                this.quitarProducto(producto)
            }
        },
        addACarrito(producto){
            this.$store.commit('ADD_A_CARRITO',producto);
        },
        finalizarCompra(){
            this.$store.commit('FINALIZAR_COMPRA');
        }
    }
}
</script>

<style scoped>
    span,h3{
        width: 10%;
    }
</style>