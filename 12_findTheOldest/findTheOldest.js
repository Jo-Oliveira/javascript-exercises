const getAge = function(birth, death) {
    if(!death){
        death = new Date().getFullYear();
    }
    
    return death - birth;
};

const findTheOldest = function(arrPeople) {
    debugger;
     return arrPeople.reduce((oldestPerson, actualPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const actualAge = getAge(actualPerson.yearOfBirth, actualPerson.yearOfDeath);
     return oldestAge < actualAge ? actualPerson : oldestPerson;
    });
    };

// Do not edit below this line
module.exports = findTheOldest;
