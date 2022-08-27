const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function getSpeciesByIds(...ids) {return species.filter((specie) => ids.includes(specie.id) ? true : false)}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
