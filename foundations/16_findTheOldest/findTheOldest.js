const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const personAge = (person.yearOfDeath || 2026) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || 2026) - oldest.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
