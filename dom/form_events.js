
const form = document.querySelector('#my_form');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName
    list.append(newLi);
    input.value = '';
});