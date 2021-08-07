class Animal {
    constructor (name = "", isMammal = true) {
        this.name = name;
        this.isMammal = isMammal
    }
}
class Frog extends Animal {
    constructor(name, isMammal) {
        super (name, isMammal = false)
        this.isMammal = isMammal
    }
    jump() {
        return `${this.name} hop hop`
    }
}
class Ape extends Animal {
    constructor (name, isMammal) {
        super (name, isMammal = true)
        this.isMammal = isMammal
    }
    yell () {
        return `${this.name} Auooo`
    }
}

let newFrog = new Frog
console.log(newFrog.jump);

let newApe = new Ape
console.log(newApe.yell);
