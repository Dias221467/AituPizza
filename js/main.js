
let l = console.log
window.addEventListener( 'click', function(event){

    // buttons for size picca
    let buttons = this.document.querySelectorAll(['label'])
    let btnActiveSmall = this.document.querySelector('[data-size="small"]')
    let btnActiveMedium = this.document.querySelector('[data-size="medium"]')
    let btnActiveLarge = this.document.querySelector('[data-size="large"]')
     let price = this.document.querySelector('.price span')
     if(event.target.dataset.size == "small"){
        event.target.classList.add("active")
        btnActiveMedium.classList.remove("active")
        btnActiveLarge.classList.remove("active")
        price.textContent = 8;
     }
     else if(event.target.dataset.size == "medium"){
        event.target.classList.add("active")
        btnActiveSmall.classList.remove("active")
        btnActiveLarge.classList.remove("active")
        price.textContent = 12;
     }

     else if(event.target.dataset.size == "large"){
        event.target.classList.add("active")
        btnActiveSmall.classList.remove("active")
        btnActiveMedium.classList.remove("active")
        price.textContent = 15;   
     }
    else if (event.target.className ==="button-30"){
        buttons.forEach(function(item){
            item.classList.remove("active")
        })
        price.textContent = 0;
    }

    // buttons for thin or thick
    let btnThin = this.document.querySelector(".thin")
    let btnThick = this.document.querySelector(".thick")
    if (event.target.textContent == "thin")
    {btnThin.classList.add("active")
    btnThick.classList.remove("active")}
    else if(event.target.textContent == "thick")
    {btnThick.classList.add("active")
    btnThin.classList.remove("active")}
   
})


