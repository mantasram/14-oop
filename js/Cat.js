const Pet = require('./Pet')

class Cat extends Pet {
    constructor (name, fur) {
        super(name, fur);
        this.sound = 'miau miau';
    }
}

module.exports = Cat;