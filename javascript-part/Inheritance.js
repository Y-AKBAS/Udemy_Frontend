class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating...`)
    }
}

class Dog extends Pet {
    bark() {
        console.log(`${this.name} is barking!`)
    }
}

class Cat extends Pet {
    meow() {
        console.log(`${this.name} is meowing!`)
    }
}

const cat = new Cat("mecnun", 1);
cat.eat()
cat.meow()

const dog = new Dog("boncuk", 3);
dog.eat()
dog.bark()
