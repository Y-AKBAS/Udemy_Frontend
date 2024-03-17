
function Property({id, name, price, rating}){
   return (
       <div className="Property" key={id}>
           <h2>{name}</h2>
           <h3>${price}</h3>
           <h4>{rating}⭐</h4>
       </div>
   )
}

export default Property;