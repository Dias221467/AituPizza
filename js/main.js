export let price, btnActive
const l = console.log

window.addEventListener( 'click', function(event){
    // buttons for size picca and price
    if (event.target.closest('.card')){
    const cardWrapper = event.target.closest('.card')

    // buttons for size picca
    btnActive = cardWrapper.querySelectorAll('label')
    const btnActiveSmall = cardWrapper.querySelector('[data-size="small"]')
    const btnActiveMedium = cardWrapper.querySelector('[data-size="medium"]')
    const btnActiveLarge = cardWrapper.querySelector('[data-size="large"]')

    price = cardWrapper.querySelector('.price span')// variable for price
    
    // loop for swtich on/off size buttons
    if (event.target.className == 'btnActive'){
        btnActiveSmall.classList.remove('active')
        btnActiveMedium.classList.remove('active')
        btnActiveLarge.classList.remove('active')

     if(event.target.dataset.size == "small"){
        event.target.classList.add("active")
        price.textContent = '12';}

     else if(event.target.dataset.size == 'medium'){
        event.target.classList.add('active')
        price.textContent = '16';}

     else if(event.target.dataset.size == 'large'){
        event.target.classList.add('active')
        price.textContent = '20';}
    }
    // buttons for thin or thick dough
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


