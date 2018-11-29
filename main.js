'use strict';



let buttonEvent = document.querySelector("#showProduct");

buttonEvent.addEventListener("click",(event)=>{
    document.getElementById("productLine").classList.toggle("show");
})