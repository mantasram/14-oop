class Pet {
    constructor (name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTail = true;
        this.voiceCount = 0;
        this.children = [];
        this.sound = 'miau au nom';
    }

    voice() {
        console.log(`${this.name}: ${this.sound} (${++this.voiceCount})`);
    }

    introduce() {
        console.log(`hi, I'm ${this.name}, my fur color is: ${this.furColor} and I sound like ${this.sound}`);
    }

    childCount() {
        console.log(`${this.name} has ${this.children.length} children.`);
    }
}

module.exports = Pet;