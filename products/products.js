import steaks from '../data/steak.js';
import renderSteak from './render-steak.js';

const list = document.getElementById('steaks');

for (let i = 0; i < steaks.length; i++) {
    const fruit = steaks[i];
    const dom = renderSteak(fruit);
    list.appendChild(dom);
}
