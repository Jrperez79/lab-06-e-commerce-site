function renderSteak(steak) {
    const li = document.createElement('li');
    li.className = steak.category;
    li.title = steak.description;

    const h3 = document.createElement('h3');
    h3.textContent = steak.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + steak.image;
    img.alt = steak.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + steak.price.toFixed(2);
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = steak.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderSteak;
