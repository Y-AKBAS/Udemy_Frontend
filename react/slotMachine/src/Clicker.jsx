function handleClick() {
    console.log("Button is clicked!");
}

function Clicker() {
    return (
        <div>
            <div>Click the button</div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Clicker;
