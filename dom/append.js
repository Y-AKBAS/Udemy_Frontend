// https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png

const pokemonContainer = document.querySelector('#container');

for (let i = 1; i <= 2; i++) {
    const imageDiv = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    //imageDiv.classList.add("append.css");
    const image = document.createElement('img');
    image.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png`
    imageDiv.appendChild(label);
    imageDiv.appendChild(image);
    pokemonContainer.appendChild(imageDiv)
}