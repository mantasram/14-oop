const Pet = require('./Pet')

class Dog extends Pet {
    constructor (name, fur) {
        super(name,fur);
        this.sound = 'au au';
    }
}

module.exports = Dog;