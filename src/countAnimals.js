const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  if (animal) {
    const specieAnimal = species.filter((specie) => specie.name === animal.specie);
    const animalAmount = specieAnimal.map((specie) => specie.residents).flat();
    return animalAmount.reduce((acc, curr) => {
      if (curr.sex === animal.sex || !animal.sex) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  //   if (animal.specie) {
  //     const specieAnimal = species.filter((specie) =>  specie.name === animal.specie);
  //     const animalAmount2 = specieAnimal.map((specie) => specie.residents).flat();
  //     return animalAmount2.length

  //   }
  // const specieAnimal = species.find((specie) => specie.name === animal.specie);
  // if(animal.sex) {
  //   return specieAnimal.residents.filter((resident) => resident.sex === animal.sex).length
  // }
  // else {
  //   return specieAnimal.residents.length
  // }
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
