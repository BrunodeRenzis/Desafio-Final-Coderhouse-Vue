//Prepara lo q querés q suceda, es el paso previo al mutation
import axios from "axios";


export const agregarProducto = ({commit},producto) => {
    commit('ADD_PRODUCT', producto);
}

export const quitarProducto = ({commit},producto) => {
    commit('REMOVE_PRODUCT', producto);
}

export const agregarUnidad = ({commit},producto)=>{
    commit('AGREGAR_UNIDAD',producto);
}

export const quitarUnidad = ({commit},producto)=>{
    commit('QUITAR_UNIDAD',producto);
}

  export const traerProductos = ({commit}) => {
    let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";
    axios.get(url)
    .then(response=>{
        commit('CARGAR_PRODUCTOS',response.data);
    })
    .catch(err=>{console.error(err,"No se han podido cargar los datos")});

}