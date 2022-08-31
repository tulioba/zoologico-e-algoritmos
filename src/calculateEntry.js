const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visiters = { child: 0, adult: 0, senior: 0 };
  const age = entrants.map((entrant) => entrant.age);
  console.log(age);
  for (const index of age) {
    if (index < 18) {
      visiters.child += 1;
    } else if (index >= 18 && index < 50) {
      visiters.adult += 1;
    } else if (index >= 50) {
      visiters.senior += 1;
    }
  }
  return visiters;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const value = entrants.map((entrant) => entrant.age);
  return parseFloat(value.reduce((acc, curr) => {
    if (curr < 18) {
      acc += prices.child;
    } else if (curr >= 18 && curr < 50) {
      acc += prices.adult;
    } else if (curr >= 50) {
      acc += prices.senior;
    }
    return acc;
  }, 0).toFixed(2));
}

module.exports = { calculateEntry, countEntrants };
