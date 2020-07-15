export function findById(items, id) {
    // loops thru array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        // checks the id against item.id
        if (item.id === id) {
            return item;
        }
    }
    // loop complete, nothing found, thus null
    return null;
}

// returns cost in currency format
export function toUSD(number) {
    return number.toLocalString('en-Us', {
        style: 'currency',
        currency: 'USD'
    });   
}
// Tallies the cost of the combined items.
export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}
 // Rounds off the total amount of the cart items to the second decimal place b/c of / 100
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

// function for calculating order total and price
export function calcOrderTotal(cart, steaks) {
    // initializes value of cart to zero items in the cart
    let orderTotal = 0;
    // loops through the cart array
    for (let i = 0; i < cart.length; i++) {
        // takes object from the array makes a new line item
        const cartItem = cart[i];
        // Finds steak by id and adds to the new line
        const steak = findById(steaks, cartItem.id);
        // Calculates total quantity for the particular item
        const lineTotal = calcLineTotal(cartItem.quantity, steak.price);
        orderTotal += lineTotal;
    }
    // Returns order total with rounded off currency 
    return roundCurrency(orderTotal);
}
