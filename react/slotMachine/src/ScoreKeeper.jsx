import {v4 as uuid} from "uuid";
import {useState} from "react";

function generateView(players, winningScore, plusOneOnClick) {
    const winner = players.find((p) => p.score === winningScore)
    const gameNotOver = winner === undefined
    return (
        players.map((p) => {
            return <div key={p.id}>
                <li>{p.name} : {p.score} &ensp;
                    {gameNotOver ? <button onClick={() => plusOneOnClick(p.id)}> +1</button> :
                        p.id === winner.id ? "WINNER" : "LOSER"
                    }
                </li>
            </div>
        }))
}

function ScoreKeeper({numOfPlayers, winningScore}) {

    const initialState = []
    for (let i = 1; i <= numOfPlayers; i++) {
        initialState.push({id: uuid(), name: `Player-${i}`, score: 0})
    }

    const [players, setPlayers] = useState(initialState)

    const plusOne = (id) => {
        setPlayers((players) => {
                const gameOver = players.find((p) => p.score === winningScore)
                if (gameOver) {
                    return players
                } else {
                    return players.map(p => {
                            if (p.id === id) {
                                return {...p, score: p.score + 1}
                            }
                            return {...p}
                        }
                    )
                }
            }
        )
    }

    const reset = () => setPlayers((players) => players.map((p) => {
        return {...p, score: 0}
    }))

    return (
        <div>
            <div>Winning Score: {winningScore}</div>
            <br/>
            <ul key={uuid()}>
                {generateView(players, winningScore, plusOne)}
            </ul>
            <br/>
            <button key={uuid()} onClick={reset}>Reset</button>
        </div>
    )
}

export default ScoreKeeper;