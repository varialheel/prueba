const imgs = ["slider-1.jpg","slider-2.jpg","slider-3.jpg","slider-4.jpg","slider-5.jpg"];
const slider_img = document.getElementById("slider__img");
const selectores = document.getElementById("selectores");
let n=0;
let marcadores;
// ---------------------------------------------------------------------------------------------
const createSlider = ()=>{
    // let pos = Math.floor(Math.random()*imgs.length)
    let div;
    for (let i = 0; i < imgs.length; i++) {
        div = document.createElement("div");
        if(i==n){
            div.setAttribute("class","slider__selector mx-3  slider__selector--active")
        } else {
            div.setAttribute("class","slider__selector mx-3")
        }
        div.setAttribute("id","selector_"+i);
        selectores.appendChild(div);
    }
    marcadores=document.querySelectorAll(".slider__selector");
}
createSlider();
// -----------------------------------------------------------------------------------------------
const nextImg = ()=>{
    n++;
    if(n>=imgs.length){
        n=0;
    }
    slider_img.setAttribute("src",`assets/images/slider/${imgs[n]}`)
    checkMarc(n);
}
const prevImg = ()=>{
    n--;
    if(n<0){
        n=imgs.length-1;
    }
    slider_img.setAttribute("src",`assets/images/slider/${imgs[n]}`)
    checkMarc(n);
}
const checkMarc = (n)=>{
    marcadores.forEach(element => {
        // console.log(element.getAttribute("id"))
        if(element.getAttribute("id")=="selector_"+n){
            element.setAttribute("class","slider__selector mx-3 slider__selector--active")
        } else {
            element.setAttribute("class","slider__selector mx-3")
        }
    });
}
const selectImg=(event)=>{
    // console.log(event.target.getAttribute("class").split(" ")[0])
    if(event.target.getAttribute("class").split(" ")[0]=="slider__selector"){
        n=event.target.getAttribute("id").split("_")[1]
        slider_img.setAttribute("src",`assets/images/slider/${imgs[n]}`)
        checkMarc(n);
    }
}
// -----------------------------------------------------------------------------------------------

document.querySelector(".slider").addEventListener("click",(event)=>{
    if(event.target.id=="next"){
        nextImg();
    } else if(event.target.id=="previous"){
        prevImg();
    }
})

const inter = setInterval(() => {
    n++;
    if(n>=imgs.length){
        n=0;
    }
    slider_img.setAttribute("src",`assets/images/slider/${imgs[n]}`)
    checkMarc(n);
}, 5000);
selectores.addEventListener("click",(event)=>{selectImg(event)})