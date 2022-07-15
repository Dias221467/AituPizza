
const modal = document.querySelector('.modal')
window.addEventListener('click', function (event){
  if ( event.target.classList.contains('cart') && !modal.classList.contains('active')){
           modal.classList.add('active')
            
  }
  else if ( event.target.classList.contains('cart') &&  modal.classList.contains('active')){
             modal.classList.remove('active')
  }
})