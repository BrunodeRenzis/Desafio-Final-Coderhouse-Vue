<template>
    <div class="container mt-4 w-50 p-3">
        <router-link to="/productos" class="cerrar">X</router-link>
      <div class="row bg-info">
        <div class="card col-sm-12 col presentacionProducto">
          <img class="card-img-top" :src=$route.params.imagen alt="Card image cap">
          <div class="card-body col">
            <h5 class="card-title">{{$route.params.nombre}}</h5>
            <h5 class="card-title">{{$route.params.descripcion}}</h5>
          </div>
            <div class="contenedorBotones col d-flex justify-content-around">
              <a class="btn btn-primary btn-danger">Agregar</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .widthImg{
    width: 30%;
    height: 100%;
    margin: auto;
    padding: 3%;
  }

  .cerrar{
    position: absolute;
    display: block;
    float: left;
  }

  .presentacionProducto{
        width: 40%;
        margin: 2vh auto;
        background: conic-gradient(from 180deg at 50% 50%, #b1b1a6 0deg, #ffe9ee 360deg);
        border: 6px solid rgba(13, 13, 14, 0.5);
        box-sizing: border-box;
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
  }
</style>