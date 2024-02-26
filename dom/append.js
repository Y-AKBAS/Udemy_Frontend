
const pokemonContainer = document.querySelector('#container');

for (let i = 1; i <= 5; i++) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add()
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    imageDiv.appendChild(label);
    imageDiv.appendChild(image);
    pokemonContainer.appendChild(imageDiv)
}