let url = window.location;
const container = document.getElementById("container");
// ----------------------------------------------------------------------
const plantillaLista=(ref,nombre,img,precio)=>{
    return `<article class="card col-3 mx-5 my-5">
    <img src="../assets/images/${img}" class="card-img-top card__img" alt="${nombre}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${precio}€</p>
      <a href="producto.html?producto=${ref}" class="btn btn-outline-dark">Ver</a>
    </div>
  </article>`
}
// --------------------------------------------------------------------------
const listadoCat = (array)=>{
    array.forEach(element => {
        container.innerHTML+= `<div><h1>${element.nombre}</h1><p>${element.descripcion}</p>
        <img src="../assets/images/${element.img}">
        </div>`;
    });
}
// --------------------------------------------------------------------------
const loading = ()=>{
    let cat;
    container.innerHTML="";
        if(url.href.indexOf("?")<0){
            chorizos.forEach(element => {
                container.innerHTML+=plantillaLista(element.ref,element.nombre,element.img,element.precio)
            });
            quesos.forEach(element => {
                container.innerHTML+=plantillaLista(element.ref,element.nombre,element.img,element.precio)
            });
        } else {
            cat = (url.href).slice((url.href).indexOf('?')+1)
            if(cat=="chorizos"){
                chorizos.forEach(element => {
                    container.innerHTML+=plantillaLista(element.ref,element.nombre,element.img,element.precio)
                });
            } else if(cat=="quesos"){
                quesos.forEach(element => {
                    container.innerHTML+=plantillaLista(element.ref,element.nombre,element.img,element.precio)
                });
            }else{
                
            }
        }
    }

window.addEventListener("DOMContentLoaded",loading)