import { updateItemInTheCart } from "./functions.js"
import {btnActive} from './main.js'
export let  productID;
const products = document.querySelectorAll('.productInCart')// variable for loop with or
const innerCart = document.querySelector('.innerCart')
let productToCart //an object containing orders to be sent to the cart
let itemInTheCart = []

// creating an object containing order parameters
products.forEach(product =>{
    product.addEventListener('click', function(event){
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
          
            updateItemInTheCart(productToCart, itemInTheCart, btnActive) }  })
})           


innerCart.addEventListener('click', function(event){
   
    if (event.target.classList.contains('innerCart')){
       console.log(itemInTheCart)

    }
})

