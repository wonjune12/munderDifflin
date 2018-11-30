'use strict';

let displayDescription = document.querySelector("#description");
let productLineButton = document.querySelector("#showProductButton");
let hoverEvent = document.querySelectorAll("#item");
let openShoppingCart = document.getElementById("cart");
let shoppingCart = 0;


//to show products that hare hidden after clicking the products button
productLineButton.addEventListener("click",(event)=>{
    document.getElementById("productLine").classList.toggle("show");
})


//to show our information, our motto and descriptions about our company
displayDescription.addEventListener("click",(event)=>{
    document.getElementById("description").classList.add("displayDescription");
})


//to add selected items into the shopping cart and adding the items into the shopping cart
//at selection, alert user that this item has successfully been added to the shopping cart.
for (let i = 0; i < hoverEvent.length; i++){
    hoverEvent[i].addEventListener("click",(event)=>{
        alert ("you have added this item into your shopping cart!");
        shoppingCart++;
    })
}

//display how many items are in the shopping cart using alert box.
openShoppingCart.addEventListener("click",(event)=>{
    if (shoppingCart == 0){
        alert ("Your Shopping Cart is Empty");
    }
    if (shoppingCart ==1){
        alert ("you have 1 item in your shopping cart");
    }
    if (shoppingCart >= 2){
        alert ("you have " + shoppingCart + " items in your shopping cart");
    }
})
