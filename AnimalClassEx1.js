class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "Loud noise") {
        console.log(sound);
    }

    static myRandFunc(temp = "Hello") {
        console.log(temp);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

const cat = new Animal("cat", 4);
cat.legs = 3;
console.log(cat);

cat.makeNoise("Meow");

Animal.myRandFunc("Hello World");

console.log(cat.metaData);

class Dog extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    makeNoise(sound = "Bark") {
        console.log(sound);
    }
}

const dog = new Dog("dog", 4, true);
dog.makeNoise();
console.log(dog.metaData);