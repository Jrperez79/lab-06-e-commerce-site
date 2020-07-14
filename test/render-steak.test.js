import renderSteak from '../products/render-steak.js';

const test = QUnit.test;

QUnit.module('Render Steak');

test('renders a steak', assert => {
    // arrange
    const filetMignon = {
        id: 'filet-mignon',
        name: 'Filet Mignon',
        image: 'filet-mignon.jpg',
        description: 'The best cut of meat, so tender',
        category: 'steak',
        price: 20.00,
        cost: 10.00
    };
    const expected = '<li class="steak" title="The best cut of meat, so tender"><h3>Filet Mignon</h3><img src="../assets/filet-mignon.jpg" alt="Filet Mignon image"><p class="price">$20.00<button value="filet-mignon">Add</button></p></li>';
    
    // act
    const dom = renderSteak(filetMignon);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
