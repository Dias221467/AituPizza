//variables
//====================================================================================================
import { btnActive, price, cardId } from './main.js'
import { pizzaOptions } from './pizzaOptions.js'
let itemCart = []
let productID
let ItemsOrder
let buyItems = document.querySelector('#buyItems')
const products = document.querySelectorAll('.productInCart')
let total = document.querySelector('.modal__total-span')

// function creating an object containing order parameters
//========================================================================================
products.forEach(product => {
    product.addEventListener('click', function (event) {
        if (event.target.classList.contains('addToCart')) {
            productID = event.target.dataset.productId;
            const productName = product.querySelector('.title').textContent;
            const productPrice = product.querySelector('.price span').textContent;
            const productSize = product.querySelector('.active').textContent;
            const doughThickness = product.querySelector('.dough.active').textContent;
            const productImage = product.querySelector('img').src;
            ItemsOrder = {
                id: productID,
                name: productName,
                count: 1,
                dough: doughThickness,
                size: productSize,
                image: productImage,
                price: +productPrice,
                basePrice: +productPrice,
            }
            updateItemOrder()
            updateHtmlCart()
        }
    })
})
//==========================================================================================



//a function responsible for adding items to the cart or increasing the quantity of the item if it has already been added
//==========================================================================================
function updateItemOrder() {
    for (let i = 0; i < itemCart.length; ++i) {
        if (itemCart[i].id == ItemsOrder.id &&
            itemCart[i].size == ItemsOrder.size &&
            itemCart[i].dough == ItemsOrder.dough)
         {
            itemCart[i].count += 1
            // itemCart[i].basePrice = ItemsOrder.price *  itemCart[i].count
            itemCart[i].basePrice = ItemsOrder.basePrice * itemCart[i].count
            removeActivBtn(btnActive)
            return;
        }

        else if  (itemCart[i].id == ItemsOrder.id &&
                  itemCart[i].size != ItemsOrder.size &&
                  itemCart[i].dough == ItemsOrder.dough)
                  {
                    itemCart[i].id +='s'
                  }
        
        else if  (itemCart[i].id == ItemsOrder.id &&
                  itemCart[i].size == ItemsOrder.size &&
                  itemCart[i].dough != ItemsOrder.dough)
                 {
                    itemCart[i].id +='d'
                 }

        else if  (itemCart[i].id == ItemsOrder.id &&
                itemCart[i].size != ItemsOrder.size &&
                itemCart[i].dough != ItemsOrder.dough)
                {
                    itemCart[i].id +='sd'
                }
                                             }
    itemCart.push(ItemsOrder)
    removeActivBtn(btnActive)
}



//  a function that, after clicking "add cart", clears the buttons (pizza size and dough thickness) 
//and displays the price on the screen for a medium-sized pizza
//==========================================================================================
function removeActivBtn(buttons) {
    buttons.forEach(button => 
        {
        let WrapperCardId = button.closest('.card');
        if (WrapperCardId.dataset.cardId == productID) 
        {
            button.classList.remove('active') 
            price.textContent = pizzaOptions[cardId][1].price
        }
    })
}



//Function responsible for adding goods to cart with html form
//==========================================================================================
function updateHtmlCart() {
    if (itemCart.length > 0) {
     let   result = itemCart.map(itemCart => {
            return ` <div class="modal__items">
                         <div class="modal__name-img"> 
                           <p class="modal__item-title">${itemCart.name}</p>
                           <img src="${itemCart.image}" alt="">
                        </div>   
                        <div class="modal__item-details">
                                <p class="modal__size">${itemCart.size}</p>
                                <p class="modal__dough">${itemCart.dough}</p>
                        </div>
              
                        <div class="modal__counter-wrapper">
                                <div class="modal__minus" data-action="minus"  data-id=${itemCart.id}>-</div>
                                <div class="modal__counter">${itemCart.count}</div>
                                <div class="modal__plus" data-action="plus"  data-id=${itemCart.id}>+</div>
                        </div>
                            <div class="modal__price">$ <span>${itemCart.price}</span> </div>
                            <div class="modal__total">$<span id=${itemCart.id}>${itemCart.basePrice}</span></div>  
                        </div> `
                    });
                    buyItems.innerHTML = result.join('')     
                    totalPriceCart(itemCart, total)
    }
} 
 

// the counter function in the cart for items
//=======================================================================================

buyItems.addEventListener('click', function(event){
      let btnMinus = event.target.classList.contains('modal__minus')
      let btnPlus  =  event.target.classList.contains('modal__plus')
      for (let i = 0; i < itemCart.length; i++){
            if (itemCart[i].id == event.target.dataset.id){  
                if (btnMinus || btnPlus ){
                             if (btnMinus){
                    --itemCart[i].count
                                        }   
                else if(btnPlus && itemCart[i].count < 20){
                    ++itemCart[i].count
                                       }
                itemCart[i].basePrice = itemCart[i].count * itemCart[i].price
            }    

            if (itemCart[i].count <= 0){
                itemCart.splice(i,1)
            }
        
       
        }        
}
      updateHtmlCart()
})


// Сalculation function for the summary total price in the cart
//==========================================================================================
const totalPriceCart = function()
{
    let sumPrice = 0;
    itemCart.forEach(product =>{
        sumPrice += product.basePrice
});
 return total.textContent = sumPrice
}