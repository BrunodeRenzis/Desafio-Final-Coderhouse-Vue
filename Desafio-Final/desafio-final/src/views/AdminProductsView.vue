<template>
    <div class="row">
        <h1 class="mt-5">PANEL PRODUCTOS</h1>
        <span class="col-sm-11"></span>
        <button class="btn btn-success col-sm-1" id="btnAgregar" @click="showForm = true">Agregar</button>
        <form-producto v-show="showForm"/>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in listaProductos" :key="producto.id">
                    <td>{{producto.nombre}}</td>
                    <td>{{producto.precio}}</td>
                    <td>{{producto.descripcion}}</td>
                    <td><button class="btn btn-primary m-2" @click="editarProducto(producto)">Editar</button><button class="btn btn-danger" @click="eliminarProducto(producto)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import FormProducto from '../components/FormProducto.vue'
export default {
    data(){
        return{
            listaProductos:[],
            showForm:false
        }
    },
    components:{FormProducto},
    async created(){
      this.obtenerProductos();
    },

    methods:{
        obtenerProductos(){
            let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";
            axios.get(url).then((response)=>(this.listaProductos = response.data));
        },

        eliminarProducto(producto) {
			axios
				.delete(
					`https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos/${producto.id}`,)
					.then(() => {
					this.obtenerProductos()
				});
		},

        editarProducto(producto) {
			console.log(producto);
            this.showForm = true;
            // axios
			// 	.put(
			// 		`https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos/${producto.id}`,producto)
			// 		.then(() => {
			// 		this.obtenerProductos()
			// 	});
		},
 


    }
}
</script>

<style scoped>
    table{
        table-layout: fixed;
        margin-top: 2%;
    }
    #btnAgregar{
        width: 10%;
    }

    
</style>