const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

console.log(species);
function getEmployeeByName(employeeName) {
  const e = employees.find((w) => w.firstName === employeeName || w.lastName === employeeName);
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return e;
}

console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;

// A função deve retornar um objeto vazio caso não receba parâmetros;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.
