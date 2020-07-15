import steaks from '../data/steak.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('order-button');

const initializedEmptyCart = '[]';
const cartInLocalStorage = localStorage.getItem('CART') || initializedEmptyCart;
const cart = JSON.parse(cartInLocalStorage);

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const steak = findById(steaks, lineItem.id);
    const dom = renderLineItem(lineItem, steak);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, steaks);
orderTotalCell.textContent = toUSD(orderTotal);

// if the cart is empty
if (cart.length === 0) {
    //Disable the place order button
    placeOrderButton.disabled = true;
}
else { 
    placeOrderButton.addEventListener('click', () => {
        // On Click, Removes the Cart from local storage
        localStorage.removeItem('CART');
        // launch an alert with the current state of cart
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        // Redirects the User to the Home page.
        window.location = '../';
    });
}
