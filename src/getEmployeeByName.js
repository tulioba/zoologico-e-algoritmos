const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getEmployeeByName(employeeName) { 
  const employeeFN = employees.find((worker) => worker.firstName === employeeName || worker.lastName === employeeName);
  if (typeof employeeName === 'undefined') {
    return {}
  }
  return employeeFN
  }


console.log(getEmployeeByName('Nigel'))
module.exports = getEmployeeByName;



// A função deve retornar um objeto vazio caso não receba parâmetros;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.

