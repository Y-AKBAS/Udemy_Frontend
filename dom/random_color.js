
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const genRandomNum = (upper = 256) => Math.floor(Math.random() * upper)
const body = document.querySelector('body');

button.addEventListener('click', () => {
    const r = genRandomNum();
    const g = genRandomNum();
    const b = genRandomNum();
    const color = `rgb(${r},${g},${b})`;

    document.body.style.backgroundColor = color;
    h1.innerText = color;
});