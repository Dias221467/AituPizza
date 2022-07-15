//variables
//====================================================================================================
import {btnActive, price, cardId} from './main.js'
import {pizzaOptions} from './pizzaOptions.js'
let itemInTheCart = []
let productID
const products = document.querySelectorAll('.productInCart')// variable for loop with or
const innerCart = document.querySelector('.innerCart')
let productToCart //an object containing orders to be sent to the cart


// function creating an object containing order parameters
//========================================================================================
products.forEach(product => {product.addEventListener('click', function(event){
        if (event.target.classList.contains('addToCart')){
            productID = event.target.dataset.productId;
            const productName = product.querySelector('.title').textContent;
            const productPrice = product.querySelector('.price span').textContent;
            const productSize = product.querySelector('.active').textContent;
            const doughThickness = product.querySelector('.dough.active').textContent;
            const productImage = product.querySelector('img').src;
            productToCart = {
                id: productID,
                name: productName,
                count: 1,
                dough:doughThickness,
                size: productSize,
                image: productImage,
                price: +productPrice,
                basePrice: +productPrice,
            }
             updateItemInTheCart(productToCart, itemInTheCart, btnActive)
               }
           })      
} )           
//==========================================================================================

//==========================================================================================
function updateItemInTheCart(){
    for(let i = 0 ; i < itemInTheCart.length; ++i){
        if (itemInTheCart[i].id == productToCart.id && itemInTheCart[i].size == productToCart.size && 
             itemInTheCart[i].dough == productToCart.dough){

            itemInTheCart[i].count += 1
            itemInTheCart[i].price = itemInTheCart[i].basePrice * itemInTheCart[i].count
            removeActivBtn(btnActive) 
            return;}}

   itemInTheCart.push(productToCart)
   removeActivBtn(btnActive)}
//==========================================================================================   

//  function for clear buttons after push "Add to cart"
//==========================================================================================
   function removeActivBtn(buttons){
    buttons.forEach(button=>{
        let WrapperCardId = button.closest('.card')
        let WrapperProductId = WrapperCardId.querySelector('.addToCart')
       if (WrapperCardId.dataset.cardId == productID){
        button.classList.remove('active')
        price.textContent =  pizzaOptions[cardId][1].price
       }
    })
}
//==========================================================================================






// innerCart.addEventListener('click', function(event){
   
//     if (event.target.classList.contains('innerCart')){
//        console.log(itemInTheCart)

//     }
// })

// funciton add items to cart after order