const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalObject = species.find((specie) => specie.name === animal);
  const ageObject = animalObject.residents.filter((element) => element.age >= age);
  if (ageObject.length === animalObject.residents.length) {
    return true;
  }
  return false;
}

// console.log(getAnimalsOlderThan("lions", 5));
console.log(getAnimalsOlderThan('otters', 20));
module.exports = getAnimalsOlderThan;

// /O que será testado:

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.
