
let productsInCart = []
const products = document.querySelectorAll('.productInCart')
let productToCart


function updateProductsInCart(product){
    for(let i =0 ; i < productsInCart.length; ++i){
        if (productsInCart[i].id == product[i]){
            productsInCart[i].count += 1
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            return;
        }
        productsInCart.push(product)
        console.log(productsInCart)
    }
   
}


products.forEach(product =>{
    product.addEventListener('click', function(event){
        if (event.target.classList.contains('addToCart')){
            const productID = event.target.dataset.productId;
            const productName = product.querySelector('.title');
            const productPrice = product.querySelector('.price span');
            // const productSize = product.querySelector('.active')
            const productImage = product.querySelector('img').src;
            productToCart = {
                name: productName,
                image: productImage,
                // size: productSize,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice,
            }
            updateProductsInCart(productToCart)
           
          
        } 
    })
    
})


