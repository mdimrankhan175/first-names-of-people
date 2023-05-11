const peopleNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

console.log(getPeopleInCity(peopleNames));
module.exports = getPeopleInCity;
