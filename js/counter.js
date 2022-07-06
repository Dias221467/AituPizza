const l = console.log
window.addEventListener('click', function(event){
     const counterWrapper = event.target.closest('.counterWrapper')
     const counter = counterWrapper.querySelector('.counter')
    if(event.target.dataset.action == "plus"){
        if (counter.textContent < 15){
            counter.textContent = ++counter.textContent
        }
    }
    else if(event.target.dataset.action == "minus"){
        if (counter.textContent > 0){
            counter.textContent = --counter.textContent
        }}
})