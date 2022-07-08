
let productsInCart = []
let exam = []
const products = document.querySelectorAll('.productInCart')
const innerCart = document.querySelector('.innerCart')
let productToCart


function updateProductsInCart(product){
    for(let i =0 ; i < productsInCart.length; ++i){
        if (productsInCart[i].id == product.id && productsInCart[i].size == product.size &&  productsInCart[i].dough == product.dough){

            productsInCart[i].count += 1
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            return;
        }
     }
   productsInCart.push(product)
}


products.forEach(product =>{
    product.addEventListener('click', function(event){
        if (event.target.classList.contains('addToCart')){
            const productID = event.target.dataset.productId;
            const productName = product.querySelector('.title').textContent;
            const productPrice = product.querySelector('.price span').textContent;
            const productSize = product.querySelector('.active').textContent;
            const doughThickness = product.querySelector('.dough.active').textContent;
            const productImage = product.querySelector('img').src;
            productToCart = {
                id: productID,
                name: productName,
                count: 1,
                dough:doughThickness,
                size: productSize,
                image: productImage,
                price: +productPrice,
                basePrice: +productPrice,
            }
            updateProductsInCart(productToCart)
           
          
        } 
    })
    
})


innerCart.addEventListener('click', function(event){
    if (event.target.classList.contains('innerCart')){
       console.log(productsInCart)

    }
})