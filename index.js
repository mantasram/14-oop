const Dog = require('./js/Dog');

const rexas = new Dog('Rex', 'brown');
const spaikas = new Dog('Spike', 'white');

console.log(rexas);
console.log(spaikas);

spaikas.voice();
rexas.voice();
spaikas.voice();
rexas.voice();