import { price, cardId} from './main.js'
import { pizzaOptions } from "./pizzaOptions.js";
import { productID } from './orderCart.js';

//______________________________________________________
export function updateItemInTheCart(productToCart,itemInTheCart, btnActive){
    for(let i = 0 ; i < itemInTheCart.length; ++i){
        if (itemInTheCart[i].id == productToCart.id && itemInTheCart[i].size == productToCart.size &&  itemInTheCart[i].dough == productToCart.dough){

            itemInTheCart[i].count += 1
            itemInTheCart[i].price = itemInTheCart[i].basePrice * itemInTheCart[i].count
            removeActivBtn(btnActive) 
            return;}}

   itemInTheCart.push(productToCart)
   removeActivBtn(btnActive)}

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
