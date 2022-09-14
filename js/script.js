const up = document.querySelector(".up")
const registro = ()=> {
    if(confirm("Desea registrarse?")){
        window.location.href="pages/formulario.html"
    }
}
setTimeout(() => {
    registro()
}, 5000);

// ---------------------------------------------------------------------
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=500){
        up.style.display="block"
    } else {
        up.style.display="none"
    }
})