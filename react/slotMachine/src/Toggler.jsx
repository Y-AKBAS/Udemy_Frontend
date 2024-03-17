import {useState} from "react";
import "./Toggler.css"

function Toggler() {
    const [isHappy, setHappy] = useState(false)
    const toggleIsHappy = () => setHappy(!isHappy)
    return (
        <div className="Toggler">
            <div onClick={toggleIsHappy}>{isHappy ? "😊" : "😞"}</div>
        </div>
    )
}

export default Toggler;