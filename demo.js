class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getInfo() {
        console.log(this.getName() + ' ' + this.getAge() + ' tủi')
    }
}

module.exports = Person;
