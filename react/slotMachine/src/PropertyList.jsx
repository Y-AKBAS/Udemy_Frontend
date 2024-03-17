import Property from "./Property";
import "./PropertyList.css"

function PropertyList({properties}) {
    return (
        <div className="PropertyList">
            {properties.map(p => <Property {...p} key={p.id}/>)}
        </div>
    )
}

export default PropertyList;