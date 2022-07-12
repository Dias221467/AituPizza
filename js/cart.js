const openCartbutton = document.querySelector('[data-cart-target]')
const closeCartbutton = document.querySelector('[data-cart-close]')
const modal = document.querySelector('.modal')


openCartbutton.addEventListener('click', function (event){
    console.log( event.target.getAttribute('[data-cart-target]'))
  if ( event.target.dataset == openCartbutton){
    modal.classList.add('.active')

  }
})


function openCart(modal){
    if (modal == null)return
    model.classList.add('.active')
}

function closeCart(modal){
    if (model == null) return
    modal.classList.remove('.active')
}