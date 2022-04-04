//metodo acción y mutación
export const ADD_PRODUCT = (state,producto)=>{
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(!productoEnCarrito)
        state.carritoProductos = [...state.carritoProductos,producto];
};


export const ADD_A_CARRITO = (state, producto) => {
    
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(productoEnCarrito){
        productoEnCarrito.cantidad ++;
        return
    } else
        state.carrito.push({
            producto
        });
    
}

export const REMOVE_PRODUCT = (state,producto)=>{
    state.carritoProductos = state.carritoProductos.filter(prod=>{
        return prod.id != producto.id;
    });
};

export const CARGAR_PRODUCTOS = (state, productos) => {
    state.listaProductos = productos;
}

export const AGREGAR_UNIDAD = (state, producto) => {
    let productoBuscado = state.carritoProductos.find(prod => {
        return prod.id == producto.id;
    })

    let productoOriginal = state.productos.find(prod => {
        return prod.id == producto.id;
    })
    if(productoBuscado){
        productoBuscado.precio = productoOriginal.precio * productoBuscado.cantidad;
        productoBuscado.cantidad ++;  
    }
    
}

export const QUITAR_UNIDAD = (state, producto) => {
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(productoEnCarrito){
        productoEnCarrito.cantidad --;
        return
    }
    if(productoEnCarrito.cantidad==0){
        state.carritoProductos.filter(prod=>{
            return productoEnCarrito.id == prod.id;
        })
    }
}

export const TOTAL_CARRITO = (state)=>{
    state.carritoProductos.forEach(prod => {
        return state.total+=prod.precio;
    });
}

export const FINALIZAR_COMPRA = (state)=>{
   return state.carritoProductos = [];
}