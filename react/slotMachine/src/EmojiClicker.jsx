import {useState} from "react";
import {v4 as uuid} from "uuid";

function EmojiClicker() {
    const [emojis, setEmoji] = useState([{id: uuid(), emoji: "😉"}])

    const addEmoji = () => setEmoji((arr) => [...arr, {id: uuid(), emoji: "🤪"}])
    const removeEmoji = (id) => setEmoji((arr) => arr.filter((e) => e.id !== id))

    const doMakeHeart = (arr) => arr.map((item) => {
        return {...item, emoji: "😘"}
    })

    const makeThemHearts = () => setEmoji(doMakeHeart)

    return (
        <div>
            <div>{
                emojis.map((e) => <span onClick={() => removeEmoji(e.id)} key={e.id}>{e.emoji}</span>)
            }</div>
            <br/>
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeThemHearts}>Make them kisses</button>
        </div>
    )
}

export default EmojiClicker;