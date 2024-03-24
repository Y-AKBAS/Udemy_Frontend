import "./ColorBox.css"
import {useState} from "react";

const pickRandomColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

function ColorBox({colorList}) {
    const [color, setColor] = useState(pickRandomColor(colorList))

    const onClick = () => {
        setColor(pickRandomColor(colorList))
    }

    return <div className='ColorBox' onClick={onClick} style={{backgroundColor: color.toString()}}></div>
}

export default ColorBox;