import {productID} from './orderCart.js'
import {price, btnActive, cardId} from './main.js'
import { pizzaOptions } from './pizzaOptions.js'

//______________________________________________________

export function updateItemInTheCart(product,itemInTheCart ){
    for(let i = 0 ; i < itemInTheCart.length; ++i){
        if (itemInTheCart[i].id == product.id && itemInTheCart[i].size == product.size &&  itemInTheCart[i].dough == product.dough){

            itemInTheCart[i].count += 1
            itemInTheCart[i].price = itemInTheCart[i].basePrice * itemInTheCart[i].count
            removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
            console.log("count")
            return;}
     }
   itemInTheCart.push(product)
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
//  const innerCart = document.querySelector('.innerCart')
// innerCart.addEventListener('click', function(event){
   
//     if (event.target.classList.contains('innerCart')){
//        console.log(itemInTheCart)

//     }
// })
