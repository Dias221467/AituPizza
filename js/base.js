class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
        <header>
        <nav>
            <div class="logo">
                <img src="images/logo.png" alt="" width="50px">
                <h2 class="logo-text">Romi<span>no's</span></h2>
            </div>

            <ul>
                <li><a href="#">picca</a></li>
                <li><a href="#">dessert</a></li>
                <li><a href="#">drinks</a></li>
                <li><a href="#">soucess</a></li>
            </ul>
            <a class="button-cart">
                <img class="cart" src="images/cart.png" data-cart-btn="modal" width="60px">

            </a>
        </nav>
  
        <div class="modalwrapper" id="modal-wrapper">
            <div class="modal">
                <div class="modal__header">
                    <div class="modal__title">
                        <h3>Shoping Cart</h3>
                        <h3>Items</h3>
                    </div>
                    <hr>
                </div>
                <div id="modal__body">
                    <div class="modal__content" id="buyItems">
                    </div> 
                </div>   
                        <hr>
                <div class="modal__footer">
                    <div class="modal__wrapper-total-price">
                        <p>Total price</p>
                        <p class="modal__total-price-order">$<span>0</span></p>
                    </div>
            
                    <div class="modal__wrapper-total-button">
                        <button class="modal__buy-btn" data-cart-btn="buy">buy</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
        
        `
    }
}

customElements.define('my-header', MyHeader)

// =======================================================

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <footer>
        <div class="line"></div>
        <hr>
           <div><p>© Dominos 2022 </p></div>
    </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)