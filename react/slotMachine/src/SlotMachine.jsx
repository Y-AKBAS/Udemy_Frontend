export default function SlotMachine({val1, val2, val3}) {
    const win = (val1 === val2) && (val2 === val3)
    const message = win ? "You win!" : "You lose!"
    const headerColor = win ? "green" : "red"
    return (
        <div>
            <div>{`${val1} ${val2} ${val3}`}</div>
            <h2 style={{color: headerColor}}>{message}</h2>
        </div>
    )
}