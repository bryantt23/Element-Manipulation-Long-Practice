const h1 = document.createElement('h1');
h1.id = 'h1';
h1.innerText = 'bt';

const ul = document.createElement('ul');

function addLiElements(arr) {
  for (const elem of arr) {
    const li = document.createElement('li');
    li.textContent = elem;
    li.setAttribute('class', 'detail');
    ul.appendChild(li);
  }
}

addLiElements(['hi', 'how', 'goes?']);

document.body.appendChild(h1);
document.body.appendChild(ul);

h1.setAttribute('class', 'name');
ul.setAttribute('class', 'my-details');
