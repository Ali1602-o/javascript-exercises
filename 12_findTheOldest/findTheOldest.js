const findTheOldest = function(people) {
    // ! this is a solution but it changes the order of the original array
    // return people.sort((person1, person2) => getPersonAge(person2) - getPersonAge(person1)) [0];

    return people.reduce((previousPerson, currentPerson) => {
        let currentPersonAge = getPersonAge(currentPerson);
        let previousPersonAge = getPersonAge(previousPerson);
        return currentPersonAge > previousPersonAge ? currentPerson : previousPerson;
    });
};

function getPersonAge(person) {
    let currentYear = new Date().getFullYear();
    if (person.yearOfDeath == undefined) {
        person.yearOfDeath = currentYear;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
