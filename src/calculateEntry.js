const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visiters = { child: 0, adult: 0, senior: 0 };
  const ages = entrants.map((entrant) => entrant.age);
  return ages.reduce((acc, curr) => {
    if (curr < 18) {
      acc.child += 1;
    } else if (curr < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, visiters);
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  if (Object.keys(entrants).length === 0) return 0;

  const entrantCount = countEntrants(entrants);

  return entrantCount.child * prices.child
   + entrantCount.adult * prices.adult
   + entrantCount.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
