<template>
    <div class="row">
        <h1 class="mt-5">PANEL PRODUCTOS</h1>
        <span class="col-sm-11"></span>
        <button class="btn btn-success col-sm-1" id="btnAgregar">Agregar</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in listaProductos" :key="producto.id">
                    <td>{{producto.nombre}}</td>
                    <td>{{producto.precio}}</td>
                    <td>{{producto.descripcion}}</td>
                    <td><img :src="producto.imageUrl" alt="" width="50"></td>
                    <td><button class="btn btn-primary m-2">Editar</button><button class="btn btn-danger">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            listaProductos:[]
        }
    },
    async created(){
      let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";

      await axios.get(url).then((response)=>(this.listaProductos = response.data));
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