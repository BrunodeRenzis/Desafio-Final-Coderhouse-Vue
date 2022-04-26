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

export const login = ({commit},user)=>{
    commit("LOGIN",user);
}

export const logout = ({commit})=>{
    commit("LOGOUT");
}
