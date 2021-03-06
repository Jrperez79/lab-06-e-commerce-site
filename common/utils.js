export function findById(items, id) {
    // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }

    // loop done, nothing found
    return null;
}

// function to return a style of a particular currency
export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

// function that calculates the amount of items and price with rounded currency
export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

// This help with JS quirks. Think to zeros with /100 gives you two decimal points
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

// Calculates the total items or (steaks) in the cart and adds amount and price
export function calcOrderTotal(cart, steaks) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const steak = findById(steaks, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, steak.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}


