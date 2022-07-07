
let l = console.log
window.addEventListener( 'click', function(event){
    let buttons = this.document.querySelectorAll(['label'])
    let btnActiveSmall = this.document.querySelector('[data-size="small"]')
    let btnActiveMedium = this.document.querySelector('[data-size="medium"]')
    let btnActiveLarge = this.document.querySelector('[data-size="large"]')
    l(btnActiveSmall)
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
   
})


