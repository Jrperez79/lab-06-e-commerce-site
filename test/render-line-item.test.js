import steaks from '../data/fruits.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
        id: 'filet-mignon',
        quantity: 3
    };
    const steak = findById(steaks, lineItem.id);
    const expected = '<tr><td class="align-left">Red Apple</td><td>3</td><td>$1.00</td><td class="line-item-total">$3.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, steak);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
