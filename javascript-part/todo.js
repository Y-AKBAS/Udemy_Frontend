let input = prompt("What do you want to do?");
const todos = [];
while (input !== 'quit') {
    input = prompt("What do you want to do?")
    if (input === 'list') {
        todos.forEach(element => {
            console.log(`${element}`);
        });
    }
    else if (input === 'new') {
        todos.push(prompt("add your todo"));
    } else if (input === 'delete') {
        index = prompt("what is the index?");
        todos.splice(index, 1);
    }
}

console.log("Quitting the game!")