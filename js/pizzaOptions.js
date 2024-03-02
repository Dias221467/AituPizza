document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('/pizza'); // Запрос к вашему новому маршруту
        const pizzas = await response.json();

        const pizzaOptionsLength = pizzas.length;

        let d1;
        for (let i = 0; i < pizzaOptionsLength; ++i) {
            if (i >= 4 && i < 8) {
                d1 = document.getElementById('second');
            } else if (i >= 8) {
                d1 = document.getElementById('third');
            } else {
                d1 = document.getElementById('first');
            }

            d1.insertAdjacentHTML('beforeend', `
                <div class="card" data-card-Id="${i + 1}">
                    <div class="productInCart">
                        <img src="${pizzas[i].image}" width="250px" alt="">
                        <h3 class="title">${pizzas[i].name}</h3>
                        <p class="description">${pizzas[i].description}</p>
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
                            <p class="price">$<span>${pizzas[i].price}</span></p>
                            <button class="button-30 addToCartPizza" role="button" data-product-Id="${i}">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            `);
        }
    } catch (error) {
        console.error("Error fetching pizza data:", error);
    }
});