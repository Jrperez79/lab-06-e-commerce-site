import steaks from '../data/steak.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item for each selected steak and with quantity', assert => {
    // arrange
    const lineItem = {
        id: 'filet-mignon',
        quantity: 2
    };
    const steak = findById(steaks, lineItem.id);
    const expected = '<tr><td class="align-left">Filet Mignon</td><td>2</td><td>$20.00</td><td class="line-item-total">$40.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, steak);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
