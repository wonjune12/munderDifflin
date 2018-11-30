'use strict';



let productLineButton = document.querySelector("#showProduct");
let hoverEvent = document.querySelectorAll("#item");
productLineButton.addEventListener("click",(event)=>{
    document.getElementById("productLine").classList.toggle("show");
})


hoverEvent.addEventListener("click",(event)=>{
    alert("The Item has been added to the cart");
})

let submit = document.querySelector("#email-sub");
submit.addEventListener("click",(event)=>{
    alert ("You have been subscribed to our newsletter!");
})