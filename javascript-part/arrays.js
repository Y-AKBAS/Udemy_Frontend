let days = ['monday', 'tuesday', 'wednesday'];
console.log(days);
console.log(typeof days)

// We can change the values in array indexes but we cannot do the same for strings

days[0] = 'MONDAY';
console.log(days);

let str = 'leipzig';
str[0] = 'L';
console.log(str);

// push and pop adds and removes elems from back of the array.
days.push('thursday');
console.log(days);
days.pop();
console.log(days);

// shift removes from beginning. unshift adds to the beginnig.
days.unshift('sunday');
console.log(days);
days.shift();
console.log(days);


// reverse method changes the actual array
// it is a destructional operation

// slice method just slices without modifying the original array.
// splice method also modifies the original array.

