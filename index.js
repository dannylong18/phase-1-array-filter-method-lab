// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]
const driversAndTowns = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching (array, string) {
    let matchingName = string.toLowerCase();

    return array.filter(driver => driver.toLowerCase() === matchingName);

}

findMatching(drivers, "Bobby")

function fuzzyMatch (array, string) {
    return array.filter(driver => driver.startsWith(string))
}

fuzzyMatch(drivers, "Sa")

function matchName (array, string) {
    return array.filter(driver => driver.name === string)
}

matchName(driversAndTowns, "Bobby")