//variables
//====================================================================================================
import { btnActive, price, cardId } from './main.js'
import { pizzaOptions } from './pizzaOptions.js'
let itemCart = []
let productID
let ItemsOrder
let total = 0
let buyItems = document.querySelector('#buyItems')
const products = document.querySelectorAll('.productInCart')


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
            itemCart[i].dough == ItemsOrder.dough) {

            itemCart[i].count += 1
            itemCart[i].basePrice = itemCart[i].basePrice * itemCart[i].count
            removeActivBtn(btnActive)
            return;
        }
    }
    itemCart.push(ItemsOrder)
    removeActivBtn(btnActive)
}
//==========================================================================================   

//  function for clear buttons after push "Add to cart"
//==========================================================================================
function removeActivBtn(buttons) {
    buttons.forEach(button => {
        let WrapperCardId = button.closest('.card');
        WrapperCardId.dataset.cardId == productID ? button.classList.remove('active') :
            price.textContent = pizzaOptions[cardId][1].price
        console.log(pizzaOptions[cardId][1].price)
    })
}
//==========================================================================================


//==========================================================================================

function updateHtmlCart() {
    if (itemCart.length > 0) {

        let result = itemCart.map(itemCart => {
          
            return ` <div class="modal__items">
                         <div class="modal__name-img"> 
                           <p class="modal__item-title">${itemCart.name}</p>
                           <img src="${itemCart.image}" alt="">
                        </div>   
                        <div class="modal__item-details">
                                <p class="modal__size">${itemCart.size}</p>
                                <p class="modal__dough">${itemCart.dough}</p>
                        </div>
              
                        <div class="modal__conter-wrapper">
                                <div class="modal__minus">-</div>
                                <div class="modal__counter">$<span>${itemCart.count}</span></div>
                                <div class="modal__plus">&#43;</div>
                        </div>
                        <div class="modal__price">$ <span>${itemCart.price*2}</span> </div>
                        <div class="modal__total">$<span>${itemCart.basePrice}</span></div>
                     </div> `});
        


        // const sum = users.reduce((acc, user) => {
        //     const newAcc = acc + user.amount;
        //     return newAcc;
        //   }, 0);

        console.log(total)     
        buyItems.innerHTML = result.join('')
        
    }

    else {
        buyItems.innerHTML = `<h4>Cart is empty</h4>`
    }
}


