let url = window.location;
const container = document.getElementById("container");
let cantidad = document.getElementById("cantidad");
let precio =  document.getElementById("precio");
let anadir = document.getElementById("anadir");
let produc;
const producto = ()=>{
    let cat = (url.href).slice((url.href).indexOf('=')+1);
    chorizos.forEach(element => {
        if(element.ref.includes(cat)){
            container.innerHTML+= `<div class="producto my-3 d-flex flex-column">
                <h1 class="producto__titulo text-center my-3">${element.nombre}</h1>
                <img src="../assets/images/${element.img}" class="producto__img my-3">
                <p class="producto__desc">${element.descripcion}</p>
             </div>`;
             produc={
                "producto":element.nombre,
                "precio":element.precio,
                "cantidad":1,
                "img":element.img
            }
        }
    });
    quesos.forEach(element => {
        if(element.ref.includes(cat)){
            container.innerHTML+= `<div class="producto my-3 d-flex flex-column">
                <h1 class="producto__titulo text-center my-3">${element.nombre}</h1>
                <img src="../assets/images/${element.img}" class="producto__img my-3">
                <p class="producto__desc">${element.descripcion}</p>
             </div>`;
             produc={
                "producto":element.nombre,
                "precio":element.precio,
                "cantidad":1,
                "img":element.img
            };
        }
    });
    precio.innerText=produc.precio
}
cantidad.addEventListener("change",()=>{
    precio.innerText = (cantidad.value*produc.precio).toFixed(2);
    produc.cantidad=cantidad.value;
})
anadir.addEventListener("click",()=>{
    let carro;
    if(window.localStorage.getItem("productos")==""){
        window.localStorage.setItem("productos",JSON.stringify([produc]));
    } else {
        carro=JSON.parse(window.localStorage.getItem("productos"))
        carro.push(produc)
        window.localStorage.setItem("productos",JSON.stringify(carro))
    }
    window.localStorage.setItem("n",parseInt(window.localStorage.getItem("n"))+1)
    cart_p.innerText=window.localStorage.getItem("n");
})
window.addEventListener("DOMContentLoaded",producto)