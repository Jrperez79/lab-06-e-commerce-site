import { findById } from '../common/utils.js';

function renderSteak(steak) {
    const li = document.createElement('li');
    li.className = steak.category;
    li.title = steak.description;

    const h3 = document.createElement('h3');
    h3.textContent = steak.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + steak.image;
    img.alt = steak.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + steak.price.toFixed(2);
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = steak.id;
    button.addEventListener('click', () => {
        // Sets variable to the Cart in Local Storage
        const initializedEmptyCart = '[]';
        const cartInLocalStorage = localStorage.getItem('CART') || initializedEmptyCart;
        const cart = JSON.parse(cartInLocalStorage);

        // This looks for if we have a particular steak already in the cart
        let itemInCart = findById(cart, steak.id);
        // If findById has no exact item like this in the cart
        if (!itemInCart) {
            // Adds the steak id item and quantity
            const initializedEmptyCart = {
                id: steak.id,
                quantity: 1
            };
            // adds a itemInCart into the shopping cart
            cart.push(initializedEmptyCart);
        } 
        else {
            // This adds to the quantity of an item already in the cart
            itemInCart.quantity++;
        }
        
        // This stringify our shopping cart
        const stringCart = JSON.stringify(cart);
        // This puts a string cart into the local storage
        localStorage.setItem('CART', stringCart);

        // tell user we added one steak to the cart
        alert('You have place 1 ' + steak.name + ' in your cart.');

    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderSteak;


