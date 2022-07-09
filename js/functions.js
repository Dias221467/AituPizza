import {productID} from './orderCart.js'
import {price, btnActive} from './main.js'

let productsInCart = []
export function updateProductsInCart(product){
    for(let i =0 ; i < productsInCart.length; ++i){
        if (productsInCart[i].id == product.id && productsInCart[i].size == product.size &&  productsInCart[i].dough == product.dough){

            productsInCart[i].count += 1
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
            return;
        }
     }
   productsInCart.push(product)
   removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
  
}

//function to disable active buttons after clicking the "add to cart" button
function removeActivBtn(buttons){
    buttons.forEach(button=>{
        let WrapperCardId = button.closest('.card')
        let WrapperProductId = WrapperCardId.querySelector('.addToCart')
       if (WrapperCardId.dataset.cardId == productID){
        button.classList.remove('active')
        price.textContent = '0';
       }
    })
}


 const innerCart = document.querySelector('.innerCart')
innerCart.addEventListener('click', function(event){
   
    if (event.target.classList.contains('innerCart')){
       console.log(productsInCart)

    }
})
