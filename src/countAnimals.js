const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const specieAnimal = species.filter((specie) => specie.name === animal.specie);
  const animalAmount = specieAnimal.map((specie) => specie.residents).flat();
  return animalAmount.filter((curr) => {
    if (curr.sex === animal.sex || !animal.sex) {
      return true;
    }
    return false;
  }).length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
