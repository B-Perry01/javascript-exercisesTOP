const findTheOldest = function(people) {
    return people.reduce((result, person) => {
        let age1 = getAge(person.yearOfDeath, person.yearOfBirth);
        let age2 = getAge(result.yearOfDeath, result.yearOfBirth);

        return age1 > age2 ? person : result;
    });

}

const getAge = function (death, birth) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death-birth;
}

    // Do not edit below this line
module.exports = findTheOldest;
