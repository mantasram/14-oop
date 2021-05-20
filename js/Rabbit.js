const Pet = require('./Pet')

class Rabbit extends Pet {
    constructor (name, fur) {
        super(name, fur);
        this.sound = 'nom nom';
    }
}

module.exports = Rabbit;