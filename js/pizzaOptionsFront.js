
// The object includes all information about the pizza
//====================================================================================================
export const pizzaOptions = 

{1:[
    {size:'20sm', 
    price:'12', 
    name:'Vedzhi', 
    description: 'Mushrooms, Olives, Fresh tomatoes, Mozzarella cheese,  Feta cheese, Tomato sauce',
    image: 'images/pizza/Vedzhi Fit & Fresh.png'},
    {size:'28sm', price:'16'},
    {size:'33sm', price:'20'}],

2:[
    {size:'20sm',
    price:'14', 
    name: '4 seasons',
    description: 'Bacon, Ham, Mushrooms, Chicken, Onion, Olives, Pickled Cucumbers, Hunting sausages, Pepperoni',
    image:'images/pizza/4-seasons.png'},
    {size:'28sm', price:'17'},
    {size:'33sm', price:'23'}],

3:[
    {size:'20sm', 
    price:'18', 
    name: 'Teriyaki',
    description: 'Chicken, Onion, Mozzarella cheese, Ham, Mushrooms,Tomato sauce, Teriyaki sauce' ,
    image:'images/pizza/chiken.png'},
    {size:'28sm', price:'21'},
    {size:'33sm', price:'28'}],

4:[
    {size:'20sm', 
    price:'15', 
    name: 'Peperone',
    description: 'Bacon, Chicken, Onion, Pickled cucumbers, Fresh tomatoes, Mozzarella cheese' ,
    image:'images/pizza/peperoni.png'},
    {size:'28sm', price:'20'},
    {size:'33sm', price:'25'}],  

5:[
    {size:'20sm', 
    price:'12', 
    name: 'Sweet Chili',
    description: 'Fresh tomatoes, Mozzarella cheese, Onion, Olives, Pickled Cucumbers, cucumbers, Fresh tomatoes,' ,
    image:'images/pizza/Chicken Sweet Chili.png'},
    {size:'28sm', price:'14'},
    {size:'33sm', price:'19'}],

6:[
    {size:'20sm', price:'20', 
    name: '4 Cheese',
    description: 'Chicken, Onion, Mozzarella cheese, Ham, Mushrooms,Tomato sauce, Teriyaki sauce' ,
    image:'images/pizza/4 Cheese.png'},
    {size:'28sm', price:'28'},
    {size:'33sm', price:'36'}],

7:[
    {size:'20sm', price:'14', 
    name: 'Carbonara',
    description: ' Onion, Mozzarella cheese, Olives, Chicken, Onion, Mozzarella cheese, Olives',
    image:'images/pizza/Carbonara.png'},
    {size:'28sm', price:'19'},
    {size:'33sm', price:'27'}],

8:[
    {size:'20sm',
    price:'16', 
    name: 'Pepperoni',
    description: 'Chicken, Onion, Mozzarella cheese, Olives, Fresh tomatoes, Mozzarella cheese' ,
    image:'images/pizza/Double Pepperoni.png'},
    {size:'28sm', price:'24'},
    {size:'33sm', price:'29'}],         
9:[
    {size:'20sm', 
    price:'14', 
    name: 'Julien',
    description: 'Fresh tomatoes, Onion, Olives, Pickled Cucumbers, cucumbers,Mozzarella' ,
    image:'images/pizza/julien.png'},
    {size:'28sm', price:'16'},
    {size:'33sm', price:'121'}],

10:[
    {size:'20sm', 
    price:'23', 
    name: 'Gurme',
    description: 'Tomatos, Mushrooms,Tomato sauce, Teriyaki sauce' ,
    image:'images/pizza/gurme.png'},
    {size:'28sm', price:'30'},
    {size:'33sm', price:'38'}],

11:[
    {size:'20sm', 
    price:'19', 
    name: 'Margarita',
    description: 'Mozzarella cheese',
    image:'images/pizza/margarita.png'},
    {size:'28sm', price:'25'},
    {size:'33sm', price:'32'}],

12:[
    {size:'20sm', 
    price:'14', 
    name: 'BBQ',
    description: 'Bacon, Ham, Chicken, Onion, BBQ sauce, Mozzarella cheese, Tomato sauce' ,
    image:'images/pizza/BBQ.png'},
    {size:'28sm', price:'22'},
    {size:'33sm', price:'25'}] 
 }

//=====================================================================================================

//  Product display on the main page of the site
//=====================================================================================================
const pizzaOptionsLength =  Object.keys(pizzaOptions).length

 let d1 = document.getElementById('first');
  
              for (let i = 1; i<pizzaOptionsLength+1; ++i){

                        if (i == 5)
              { d1 = document.getElementById('second');}
 
                        if (i == 9)
               { d1 = document.getElementById('third');}
          
    d1.insertAdjacentHTML('beforeend', ` 
    
    <div class="card" data-card-Id="${i}">
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
                        <button class="button-30 addToCartPizza" role="button" data-product-Id="${i}">
                            add to cart
                        </button>
                    </div>
                </div>
    </div>
  `)};
//=====================================================================================================
