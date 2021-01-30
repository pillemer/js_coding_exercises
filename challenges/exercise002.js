function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich['fillings']
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person['city'] === 'Manchester') {
    return true
  }
  else {return false}
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  arr.forEach(animal => {
    if (animal === 'sheep') {
      count += 1
    }
  });
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person['address']['city'] === "Manchester" && person['address']['postCode'][0] === "M") {
    return true
  }
  else { return false }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
