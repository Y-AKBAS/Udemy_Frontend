
import "./RandomPokemon.css"

export default function RandomPokemon() {
    const randomNum = Math.floor(Math.random() * 120) + 1
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`
    return (
        <div className="RandomPokemon">
            <h1>{randomNum}</h1>
            <img src={imgUrl} alt="pokemon"/>
        </div>
    )
}
