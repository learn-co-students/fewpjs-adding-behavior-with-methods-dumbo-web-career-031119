// Your code here

class Cat {
    constructor(name, sex) {
        self.name = name
        self.sex = sex
    }

    speak() {
        return `${name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        self.name = name
        self.sex = sex
    }

    speak() {
        return `${name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        let response = ``;
        console.log(this.sex, this.name)
        // console.log(self)
        if (this.sex == 'male') {
            response = `It's me! ${this.name}, the parrot!`
        } else if (this.sex === 'female') {
            response = `${this.name} says squawk!`
        }
        return response
    }
}