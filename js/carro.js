let carro = document.getElementById("carro");
let total = 0;
let pago = document.getElementById("precio")
let pagar = document.getElementById("pagar")
const actualizar_carro = ()=>{
    total=0;
    if(window.localStorage.getItem("productos")!=""){
        let productos = JSON.parse(window.localStorage.getItem("productos"));
        console.log(productos)
        carro.innerHTML=""
        productos.forEach(element => {
            carro.innerHTML+=`<div class="card">
            <div class="row g-0">
              <div class="col-2 col-sm-4">
                <img src="../assets/images/${element.img}" class="img-fluid" alt="card-horizontal-image">
              </div>
              <div class="col-7 col-sm-8">
                <div class="card-body">
                  <h5 class="card-title">${element.producto}</h5>
                  <p class="card-text">Cantidad: <span id="cantidad">${element.cantidad}</span></p>
                  <p class="card-text">Precio total: <span id="cantidad">${element.cantidad*element.precio}</span>€</p>
                </div>
              </div>
            </div>
          </div>`;
          total+=parseInt(element.precio);
        });
    } else {
        carro.innerHTML="<p>Carro vacio</p>"
    }
    precio.innerText=total;
}
window.addEventListener("DOMContentLoaded",actualizar_carro)
window.addEventListener("click",()=>{
    window.localStorage.setItem("productos","");
    window.localStorage.setItem("n",0);
    actualizar_carro();
})