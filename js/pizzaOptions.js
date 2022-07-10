// import { addInfoPizzaToFront } from "./functions.js";
const pizzArrayCards = document.querySelectorAll('.card')
let insertInHtml
export const pizzaOptions = 
{1:[
    {size:'20sm', 
    price:'12', 
    name:'Vedzhi Fit & Fresh', 
    description: 'Mushrooms, Olives, Fresh tomatoes, Mozzarella cheese,  Feta cheese, Tomato sauce',
    image: '/images/picca/Vedzhi Fit & Fresh.png'},
    {size:'28sm', price:'16'},
    {size:'33sm', price:'20'}]
,
2:[
    {size:'20sm', price:'14', 
    name: 'Four seasons',
    description: ' Bacon, Ham, Mushrooms, Chicken, Onion, Olives, Pickled Cucumbers, Hunting sausages, Pepperoni' ,
    image:'/images/picca/4-seasons.png'},
    {size:'28sm', price:'17'},
    {size:'33sm', price:'23'}]
    
,
3:[
    {size:'20sm', price:'18', 
    name: 'Chicken Teriyaki',
    description: 'Chicken, Onion, Mozzarella cheese, Ham, Mushrooms,Tomato sauce, Teriyaki sauce' ,
    image:'/images/picca/chiken.png'},
    {size:'28sm', price:'21'},
    {size:'33sm', price:'28'}] 
,
4:[
    {size:'20sm', price:'15', 
    name: 'Royal Cheeseburger',
    description: 'Bacon, Chicken, Onion, Pickled cucumbers, Fresh tomatoes, Mozzarella cheese' ,
    image:'/images/picca/royal.png'},
    {size:'28sm', price:'20'},
    {size:'33sm', price:'25'}]     
 }




 //___________________________________________________________________________________________________
//  addInfoPizzaToFront(pizzArrayCards)
const pizzaOptionsLength =  Object.keys(pizzaOptions).length
 let d1 = document.getElementById('one');
  
                  for (let i = 1; i<pizzaOptionsLength+1; ++i){
 d1.insertAdjacentHTML('beforeend', `  <div class="card" data-card-Id="${i}">

                <div class="productInCart">
                    <img src="${pizzaOptions[i][0].image}" width="250px" alt="">
                    <h3 class="title">${pizzaOptions[i][0].name}</h3>
                    <p class="description">
                    ${pizzaOptions[i][0].description}
                    </p>
                    <div class="picca_size">
                        <label  data-size="small"   class="btnActive">20sm</label>
                        <label  data-size="medium" class="btnActive">28sm</label>
                        <label  data-size="large"   class="btnActive">33sm</label>
                    </div>
                    <div class="doughThickness">
                        <label data-dough="thin"   class="dough">thin</label>
                        <label data-dough="thick" class="dough">thick</label>
                    </div>
                        <div class="wrapperPrice">
                        <p class="price">$<span>${pizzaOptions[i][1].price}</span></p>
                        <button class="button-30 addToCart" role="button" data-product-Id="${i}">
                            add to cart
                        </button>
                    </div>
                </div>
             </div>
 
 `)
};
