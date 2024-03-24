import ColorBox from "./ColorBox";
import './ColorBoxGrid.css'

function ColorBoxGrid({colorList}) {
    const boxes = []
    for (let i = 0; i < 25; i++) {
        boxes.push(<div><ColorBox colorList={colorList}/></div>)
    }
    return (
        <div className={'ColorBoxGrid'}>
            {boxes}
        </div>
    )
}

export default ColorBoxGrid;