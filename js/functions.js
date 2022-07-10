import {productID} from './orderCart.js'
import {price, btnActive, cardId} from './main.js'
import { pizzaOptions } from './pizzaOptions.js'

//______________________________________________________
export let productsInCart = []
export function updateProductsInCart(product){
    for(let i =0 ; i < productsInCart.length; ++i){
        if (productsInCart[i].id == product.id && productsInCart[i].size == product.size &&  productsInCart[i].dough == product.dough){

            productsInCart[i].count += 1
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
            return;}
     }
   productsInCart.push(product)
   removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
}

//______________________________________________________
//function to disable active buttons after clicking the "add to cart" button
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

//______________________________________________________
// export function addInfoPizzaToFront(items){
//     items.forEach(item=>{
//         item.querySelector('.title').textContent = pizzaOptions[item.dataset.cardId][0].name;
//         item.querySelector('.description').textContent = pizzaOptions[item.dataset.cardId][0].description;
//         item.querySelector('img').src = pizzaOptions[item.dataset.cardId][0].image;
//         item.querySelector('.price span').textContent = pizzaOptions[item.dataset.cardId][1].price;

        
//     })
// }


//______________________________________________________
 const innerCart = document.querySelector('.innerCart')
innerCart.addEventListener('click', function(event){
   
    if (event.target.classList.contains('innerCart')){
       console.log(productsInCart)

    }
})
