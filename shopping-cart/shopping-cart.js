import cart from '../data/cart.js';
import steak from '../data/steak.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const steaks = findById(steak, lineItem.id);
    const dom = renderLineItem(lineItem, steaks);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, steaks);
orderTotalCell.textContent = toUSD(orderTotal);
