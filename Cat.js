export class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getData() {
        return "Cats data " + this.name + " " + this.color + " " + this.breed;
    }

    changeName(newName) {
        this.name = newName;
    }
    
}