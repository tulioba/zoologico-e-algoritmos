const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeID = employees.find((specie) => specie.id === id);
  const animalID = species.find((specie) => employeeID.responsibleFor.includes(specie.id));
  const animalsInfo = animalID.residents;
  const olderAnimal = animalsInfo.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

// ["Maxwell", "male", 15]
