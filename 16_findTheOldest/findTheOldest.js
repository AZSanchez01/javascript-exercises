const findTheOldest = function(people) {
    return people.reduce((max, person) => {
        let oldest = (getAge(max) > getAge(person))? max:person;
        return oldest;
    }, people[0])
};

function getAge(person) {
    let currYear = new Date();
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if(!('yearOfDeath' in person)) death = currYear.getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
