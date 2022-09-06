const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDayByAnimal(scheduleTarget) {
  const animalByName = species.find((specie) => specie.name === scheduleTarget);
  const availableDay = animalByName.availability;
  return availableDay;
}

function getDaysInfo(scheduleTarget) {
  const hourByDay = hours[scheduleTarget];
  const infoByDay = species.filter((days) => days.availability.includes(scheduleTarget));
  const animalByDay = infoByDay.map((animal) => animal.name);
  const answerPattern = {
    officeHour: `Open from ${hourByDay.open}am until ${hourByDay.close}pm`,
    exhibition: animalByDay,
  };
  return answerPattern;
}

function AllDaysInfo() {
  const expected = {
    Tuesday: getDaysInfo('Tuesday'),
    Wednesday: getDaysInfo('Wednesday'),
    Thursday: getDaysInfo('Thursday'),
    Friday: getDaysInfo('Friday'),
    Saturday: getDaysInfo('Saturday'),
    Sunday: getDaysInfo('Sunday'),
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return expected;
}

function getSchedule(scheduleTarget) {
  const allDays = Object.keys(hours);
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (!scheduleTarget || scheduleTarget === 'qualquercoisa') return AllDaysInfo();
  if (allDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: getDaysInfo(scheduleTarget) };
  }
  return getDayByAnimal(scheduleTarget);
}
console.log(AllDaysInfo());
module.exports = getSchedule;
