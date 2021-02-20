function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let capital = word.slice(0,1).toUpperCase()
  return capital + word.slice(1)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.slice(0,1)}.${lastName.slice(0,1)}`
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vatAmount = (vatRate/100) * originalPrice
  return Math.round((originalPrice + vatAmount) * 100 + Number.EPSILON) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let reductionAmount = (reduction/100) * originalPrice
  return Math.round((originalPrice - reductionAmount) * 100 + Number.EPSILON) / 100
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let center = str.length / 2
  if (str.length % 2 === 1) {
    return str.slice(center, center + 1)
  }
  else {
    return str.slice(center - 1, center + 1)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reversedString = ""; 
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i]
  }
  return reversedString
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWordArray = [];
  words.forEach(word => {    
    let reversedString = ""; 
    for (let i = word.length - 1; i >= 0; i--) {
      reversedString += word[i]
    }
    reversedWordArray.push(reversedString)
  });
  return reversedWordArray
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let counter = 0;
  users.forEach(user => {
    if (user['type'] === 'Linux') {
      counter += 1
    }
  })
  return counter
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += parseInt(scores[i])
  }
  return Math.round((sum / scores.length) * 100 + Number.EPSILON) / 100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz"
  }
  else if (n % 5 === 0) {
    return "buzz"
  }
  else if (n % 3 === 0) {
    return "fizz"
  }
  else { return n }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
