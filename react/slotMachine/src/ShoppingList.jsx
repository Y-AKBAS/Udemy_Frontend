function ShoppingList({items}) {
    const findColor = (item) => item.completed ? "grey" : "red"
    const list = items.map(i => <li key={i.id} style={{color: findColor(i)}}>{i.item}-{i.quantity}</li>);
    return (
        <div>
            <ol>
                {list}
            </ol>
        </div>
    )
}

export default ShoppingList;