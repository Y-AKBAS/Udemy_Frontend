// we define a constructor function

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// if we call the function with the new keyword and pass the values it holds these values

const color = new Color(255, 100, 70);
console.log(color);

// if we want to add a function to this pseudo class we can do it on the prototype so that
// it doesn't get created again and again all the time
// if we create these functions as arrow functions(lambdas) we can get into trouble
// since the arrow functions are behaving differently on 'this' keyword.

Color.prototype.myPrintFunc = function () {
    console.log(this.r, this.g, this.b)
};

color.myPrintFunc();
const areFunctionRefSame = new Color(23,232,233).myPrintFunc === color.myPrintFunc
console.log(areFunctionRefSame);
