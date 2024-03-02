//variables
//====================================================================================================
import { btnActive, price, cardId } from './main.js'
let itemCart = JSON.parse(localStorage.getItem('ShoppingCart'));
if(!itemCart){
    itemCart = [];
}
let productID;
let ItemsOrder;
let buyItems = document.querySelector('#buyItems');
const products = document.querySelectorAll('.productInCart');
let total = document.querySelector('.modal__total-price-order span');

// Fetch pizza data from the server
//====================================================================================================
async function fetchPizzaData() {
    try {
        const response = await fetch('/pizza'); // Update the route to match your backend
        return await response.json();
    } catch (error) {
        console.error("Error fetching pizza data:", error);
        return [];
    }
}

// Load pizza data and initialize event listeners
//====================================================================================================
(async function () {
    const pizzas = await fetchPizzaData();
    initializeEventListeners(pizzas);
})();

// function creating an object containing order parameters
//========================================================================================
function initializeEventListeners(pizzas) {
    products.forEach(product => {
        product.addEventListener('click', function (event) {
            if (event.target.classList.contains('addToCartPizza')) {
                productID = event.target.dataset.productId;
                const productName = product.querySelector('.title').textContent;
                const productPrice = product.querySelector('.price span').textContent;
                const productSize = product.querySelector('.active').textContent;
                const doughThickness = product.querySelector('.dough.active').textContent;
                const productImage = product.querySelector('img').src;
                ItemsOrder = {
                    id: productID,
                    name: productName,
                    count: 1,
                    dough: doughThickness,
                    size: productSize,
                    image: productImage,
                    price: +productPrice,
                    basePrice: +productPrice,
                };
                updateItemOrder();
                updateHtmlCart();
            }
        });
    });
}

// Other functions remain the same...

