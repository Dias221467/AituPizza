import { itemInTheCart } from "./orderCart.js"
const modal = document.querySelector('.modal')
window.addEventListener('click', function (event){
  if ( event.target.classList.contains('cart') && !modal.classList.contains('active')){
           modal.classList.add('active')
           console.log(itemInTheCart[0].name)
         
  }
  else if ( event.target.classList.contains('cart') &&  modal.classList.contains('active')){
             modal.classList.remove('active')
  }
})


export function startUp(itemInTheCart){

                 let cartItems = document.getElementById('modal')
                  if (itemInTheCart.length > 0 ){
               
                 for (let i = 0; i < itemInTheCart.length+10; ++i){

                        
                
cartItems.insertAdjacentHTML('afterbegin', `
                      
               

                <div class="modal__body">
                        <div class="modal__items-1">
                            <img src="/images/picca/Chicken Sweet Chili.png" alt="">
                            <div class="modal__item-details">
                                <p class="modal__item-title">${itemInTheCart[i].name}</p>
                                <p class="modal__size">${itemInTheCart[i].size}</p>
                                <p class="modal__dough">${itemInTheCart[i].dough}</p>
                            </div>
                        </div>
                        <div class="modal__items-2">
                            <div class="modal__conter-wrapper">
                                <div class="modal__minus">-</div>
                                <div class="modal__counter">$<span>${itemInTheCart[i].count}</span></div>
                                <div class="modal__plus">&#43;</div>
                            </div>
                            <div class="modal__price">$ <span>${itemInTheCart[i].price}</span> </div>
                            <div class="modal__total">$<span>${itemInTheCart[i].basePrice}</span></div>
                        </div>
                        </div>

        

         

`)
}}
}