import steaks from '../data/steak.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    // arrange
    const id = 'filet-mignon';
    const expected = 'Filet Mignon';

    // act
    const foundSteak = findById(steaks, id);

    // assert
    assert.ok(foundSteak);
    assert.equal(foundSteak.name, expected);
});

test('find a steak by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundSteak = findById(steaks, id);

    // assert
    assert.equal(foundSteak, expected);
});

test('calculate line total of a Porterhouse', (assert) => {
    // arrange
    const quantity = 5;
    const price = 25.00;
    const expected = 125.00;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate steak order total from cart', (assert) => {
    // arrange
    const expected = 283.00;

    // act
    const orderTotal = calcOrderTotal(cart, steaks);

    // assert
    assert.equal(orderTotal, expected);
});
