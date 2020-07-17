import steaks from '../data/steak.js';
import renderSteak from './render-steak.js';

// This grabs the Element Id of Steak and append steaks to the list (li)
const list = document.getElementById('steaks');
// A loop that runs through all the available steaks
for (let i = 0; i < steaks.length; i++) {
    // Selects a steak based on where it is in the loop
    const steak = steaks[i];
    // Sets it in the DOM
    const dom = renderSteak(steak);
    // Appends the information to the Element By ID
    list.appendChild(dom);
}


