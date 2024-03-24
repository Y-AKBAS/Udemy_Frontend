import './App.css';
import SlotMachine from "./SlotMachine";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Toggler from "./Toggler";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";

// react needs unique identifiers(key) to keep track of things in lists etc.
// when we do not provide them, they are still getting rendered though.

const shoppingList = [
    {id: 1, item: "egg", quantity: 12, completed: false},
    {id: 2, item: "milk", quantity: 1, completed: true},
    {id: 3, item: "chicken", quantity: 2, completed: false},
    {id: 4, item: "carrots", quantity: 6, completed: false}
];

const rentalProperties = [
    {id: 1230, name: "Desert Yurt", rating: 4.9, price: 150},
    {id: 1231, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
    {id: 1232, name: "Cactus Retreat", rating: 4.75, price: 300},
    {id: 1233, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
    {id: 1234, name: "Oceanview Condo", rating: 4.7, price: 140},
];

const colors = [
    'red', 'green', 'blue', 'orange', 'magenta', 'purple', 'yellow', 'black'
]

function App() {
    return (
        <div>
            <ScoreKeeper numOfPlayers={8} winningScore={3}/>
            {/*
            <EmojiClicker/>
            <ColorBoxGrid colorList={colors}/>
            <ColorBox colorList={colors}/>
            <Toggler/>
            <Clicker/>
            <PropertyList properties={rentalProperties}/>
            <ShoppingList items={shoppingList}/>
            <SlotMachine val1={"🍐"} val2={"🍐"} val3={"🍐"}/>
            <SlotMachine val1={"🍒"} val2={"🍐"} val3={"🥝"}/>*/
            }
        </div>
    );
}

export default App;
