
const pokemonContainer = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    imageDiv.appendChild(image);
    imageDiv.appendChild(label);
    pokemonContainer.appendChild(imageDiv)
}