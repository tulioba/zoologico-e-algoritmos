const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => (manager.managers.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const managed = employees.filter((employee) => employee.managers.includes(managerId));
    return managed.map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83')

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };

// O que será testado:

// A função isManager deve retornar true se o ID passado for de uma pessoa gerente;

// A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;

// A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

// A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
