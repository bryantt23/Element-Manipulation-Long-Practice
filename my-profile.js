const h1 = document.createElement('h1');
h1.id = 'h1';
h1.innerText = 'bt';

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'b';
const li2 = document.createElement('li');
li2.textContent = 't';

ul.appendChild(li1);
ul.appendChild(li2);

document.body.appendChild(h1);
document.body.appendChild(ul);
