
const pizzArrayCards = document.querySelectorAll('.card')





function addInforPizzaToFront(items){
    items.forEach(item=>{
        item.querySelector('.title').textContent = pizzaOptions[item.dataset.cardId][0].name;
        item.querySelector('.description').textContent = pizzaOptions[item.dataset.cardId][0].description;
        item.querySelector('img').src = pizzaOptions[item.dataset.cardId][0].image;
        item.querySelector('.price span').textContent = pizzaOptions[item.dataset.cardId][1].price;

        
    })
}



export const pizzaOptions = 
{1:[
    {size:'20sm', 
    price:'12', 
    name:'Vedzhi Fit & Fresh', 
    description: 'Mushrooms, Olives, Fresh tomatoes, Mozzarella cheese,  Feta cheese, Tomato sauce',
    image: '/images/picca/Vedzhi Fit & Fresh.png'
},
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
 }

 addInforPizzaToFront(pizzArrayCards)