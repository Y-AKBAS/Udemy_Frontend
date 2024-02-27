
const input = document.querySelector('input');
input.addEventListener('keydown', () => {
    console.log('keydown pressed')
});

input.addEventListener('keydown', (event) => {
    console.log(event.key); // print which key is pressed
    console.log(event.code);
});