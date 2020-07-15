import cart from '../data/cart.js';
import steaks from '../data/steak.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const steak = findById(steaks, lineItem.id);
    const dom = renderLineItem(lineItem, steak);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, steaks);
orderTotalCell.textContent = toUSD(orderTotal);
