class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `Hello from ${this.name};`
    }
}

const c1 = new Color(12, 34, 45, 'no idea');
console.log(c1.greet());
