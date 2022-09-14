let cart_p = document.getElementById("n_prod");
window.addEventListener("DOMContentLoaded",()=>{
    if (!window.localStorage.getItem("productos")) {
        window.localStorage.setItem("productos",[])
        window.localStorage.setItem("n","0")
    } 
    cart_p.innerText=window.localStorage.getItem("n");
})