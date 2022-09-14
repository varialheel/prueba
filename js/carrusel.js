let inicio=0;
let fin = 2;
const opiniones = document.getElementById("opiniones");
const opiniones_cards = document.getElementById("opiniones_cards");
const plantilla = (nombre,opinion,img)=>{
    return `<article class="card col-3">
    <img src="${img}" class="card-img-top" alt="${nombre}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${opinion}</p>
    </div>
  </article>`
}
const carrusel =()=>{
    if(inicio<0){
        inicio=cards.length-1;
    }
    if(fin<0){
        fin=cards.length-1;
    }
    if (inicio==cards.length) {
        inicio=0;
    }
    if (fin==cards.length) {
        fin=0;
    }
    opiniones_cards.innerHTML="";
    if(fin==0){
        opiniones_cards.innerHTML+=plantilla(cards[inicio].nombre,cards[inicio].opinion,cards[inicio].imagen);
        opiniones_cards.innerHTML+=plantilla(cards[inicio+1].nombre,cards[inicio+1].opinion,cards[inicio+1].imagen);
        opiniones_cards.innerHTML+=plantilla(cards[fin].nombre,cards[fin].opinion,cards[fin].imagen);
    } else {
        opiniones_cards.innerHTML+=plantilla(cards[inicio].nombre,cards[inicio].opinion,cards[inicio].imagen);
        opiniones_cards.innerHTML+=plantilla(cards[fin-1].nombre,cards[fin-1].opinion,cards[fin-1].imagen);
        opiniones_cards.innerHTML+=plantilla(cards[fin].nombre,cards[fin].opinion,cards[fin].imagen);
    }
    
}
const carruselNext = ()=>{
    inicio++;
    fin++;
    carrusel();
}
const carruselPrev = ()=>{
    inicio--;
    fin--;
    carrusel();
}
document.addEventListener("DOMContentLoaded",()=>{
    opiniones_cards.innerHTML+=plantilla(cards[inicio].nombre,cards[inicio].opinion,cards[inicio].imagen);
    opiniones_cards.innerHTML+=plantilla(cards[inicio+1].nombre,cards[inicio+1].opinion,cards[inicio+1].imagen);
    opiniones_cards.innerHTML+=plantilla(cards[fin].nombre,cards[fin].opinion,cards[fin].imagen);
})
opiniones.addEventListener("click",(event)=>{
    if (event.target.getAttribute("id")=="previousCard") {
        carruselPrev();
    } else if(event.target.getAttribute("id")=="nextCard") {
        carruselNext();
    }
});