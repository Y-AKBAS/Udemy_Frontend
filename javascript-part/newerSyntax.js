const sum = (...args) => {
    return args.reduce((acc, elem) => acc + elem);
};

console.log(sum(1, 2, 3, 4));

const myArray = [1, 2, 3, 4];
// array destructuring
console.log(sum(...myArray));
const [firstNum, secondNum] = myArray;

console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}`);

const userInfo = {
    firstName: 'Jack',
    lastName: 'Mueller',
    born: 1990,
    city: 'Tulsa'
}

// object destructuring:
const { firstName, lastName: changedVarName } = userInfo
console.log(`firstName: ${firstName}, lastName: ${changedVarName}`)

const firstUser = {
    firstName: 'Jamie',
    lastName: 'Mueller'
}

const secondUser = {
    firstName: 'John',
    lastName: 'Mueller',
    email: 'jonh@gmail.com'
}
// this merges the object together. Last object vars wins if conflicting. See email
const mergedUser = { ...secondUser, ...firstUser };
console.log(mergedUser)

