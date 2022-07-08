
const l = console.log

window.addEventListener( 'click', function(event){

    // buttons for size picca and price
    if (event.target.closest('.card')){
    const cardWrapper = event.target.closest('.card')
    const btnActiveSmall = cardWrapper.querySelector('[data-size="small"]')
    const btnActiveMedium = cardWrapper.querySelector('[data-size="medium"]')
    const btnActiveLarge = cardWrapper.querySelector('[data-size="large"]')
    const price = cardWrapper.querySelector('.price span')

    if (event.target.className == 'btnActive'){

        // active off buttons
        btnActiveSmall.classList.remove('active')
        btnActiveMedium.classList.remove('active')
        btnActiveLarge.classList.remove('active')

     if(event.target.dataset.size == "small"){
        event.target.classList.add("active")
        price.textContent = '8';
     }
     else if(event.target.dataset.size == 'medium'){
        event.target.classList.add('active')

        price.textContent = '12';
     }

     else if(event.target.dataset.size == 'large'){
        event.target.classList.add('active')
        price.textContent = '15';   
     }
    }

    // buttons for thin or thick
    const btnThin = cardWrapper.querySelector('[data-dough="thin"]')
    const btnThick = cardWrapper.querySelector('[data-dough="thick"]')
    
    if (event.target.textContent == 'thin'){
        doughThickness = event.target.textContent
        btnThin.classList.add('active')
        btnThick.classList.remove('active')
    }
    else if(event.target.textContent == 'thick'){
        doughThickness = event.target.textContent
        btnThick.classList.add('active')
        btnThin.classList.remove('active')
   
    } 
}
})


