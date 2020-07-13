import steaks from '../data/steaks.js';
import renderSteaks from './render-steak.js';

const list = document.getElementById('steaks');

for (let i = 0; i < steaks.length; i++) {
    const steaks = steaks[i];
    const dom = renderSteaks(steaks);
    list.appendChild(dom);
}
