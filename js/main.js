//variables
//====================================================================================================
export let price, btnActive, cardId
import { pizzaOptions } from "./pizzaOptions.js"
const modal = document.querySelector('.modal')
const cart = document.querySelector('.cart')
const l = console.log

 // function for addListener for all window elements
//====================================================================================================
window.addEventListener( 'click', function(event){
    // buttons for size picca and price
    if (event.target.closest('.card')){
    const cardWrapper = event.target.closest('.card')
    cardId = cardWrapper.dataset.cardId
    btnActive = cardWrapper.querySelectorAll('label')
    const btnActiveSmall = cardWrapper.querySelector('[data-size="small"]')
    const btnActiveMedium = cardWrapper.querySelector('[data-size="medium"]')
    const btnActiveLarge = cardWrapper.querySelector('[data-size="large"]')

    price = cardWrapper.querySelector('.price span')// variable for price
//====================================================================================================

    // pizza size button
//====================================================================================================    
    if (event.target.className == 'btnActive'){
        btnActiveSmall.classList.remove('active')
        btnActiveMedium.classList.remove('active')
        btnActiveLarge.classList.remove('active')

     if(event.target.dataset.size == "small"){
        event.target.classList.add("active")
        price.textContent = pizzaOptions[cardId][0].price}
   
     else if(event.target.dataset.size == 'medium'){
        event.target.classList.add('active')
        price.textContent =  pizzaOptions[cardId][1].price}

     else if(event.target.dataset.size == 'large'){
        event.target.classList.add('active')
        price.textContent =  pizzaOptions[cardId][2].price}
    }
//====================================================================================================

    // buttons for thin or thick pizza dough
//====================================================================================================    
    const btnThin = cardWrapper.querySelector('[data-dough="thin"]')
    const btnThick = cardWrapper.querySelector('[data-dough="thick"]')
    
    if (event.target.textContent == 'thin'){
        btnThin.classList.add('active')
        btnThick.classList.remove('active')}

    else if(event.target.textContent == 'thick'){
        btnThick.classList.add('active')
        btnThin.classList.remove('active')} 
}
})
//====================================================================================================


// function for turn on and turn off modal window for cart 
//====================================================================================================
window.addEventListener('click', function (event){
  if ( event.target.classList.contains('cart') && !modal.classList.contains('active')){
           modal.classList.add('active')
            
  }
  else if ( event.target.classList.contains('cart') &&  modal.classList.contains('active')){
             modal.classList.remove('active')
  }
})
//====================================================================================================

//a function that opens and closes shopping cart modal-window
//====================================================================================================
cart.addEventListener('click', function (event) {
  event.target.classList.contains('cart') && modal.classList.contains('active') ? 
                                    modal.classList.add('active') :modal.classList.remove('active')})