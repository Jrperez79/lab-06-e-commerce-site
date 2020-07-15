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

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundSteak = findById(steaks, id);

    // assert
    assert.equal(foundSteak, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const expected = 22.30;

    // act
    const orderTotal = calcOrderTotal(cart, steaks);

    // assert
    assert.equal(orderTotal, expected);
});
