function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let solutionArray = []
  /* for loop solution
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      solutionArray.push(nums[i])
    }
  }
  */
  
  // forEach solution
  nums.forEach(num => {
    if (num < 1) {
      solutionArray.push(num)
    }
  })
  
  return solutionArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let solutionArray = []
  /* for loop solution
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      solutionArray.push(names[i])
    }
  }
  */

  // forEach Solution
  names.forEach(name => {
    if (name.startsWith(char)) {
      solutionArray.push(name)
    }
  })

  return solutionArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let solutionArray = []
  /* for loop solution
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      solutionArray.push(words[i])
    }
  }
  */

  // forEach solution
  words.forEach(word => {
    if (word.startsWith('to ')) {
      solutionArray.push(word)
    }
  })

  return solutionArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let solutionArray = []

  /* for loop solution
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      solutionArray.push(nums[i])
    }
  }
  */
  
  //forEach solution
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      solutionArray.push(num)
    }
  })

  return solutionArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let solutionArray = []

  /* for loop solution
  for (let i = 0; i < users.length; i++) {
    solutionArray.push(users[i]['data']['city']['displayName'])
  }
  */

  // forEach solution
  users.forEach(user => {
    solutionArray.push(user['data']['city']['displayName'])
  })

  return solutionArray
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let solutionArray = []

  /* for loop solution
  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.sqrt(nums[i])
    solutionArray.push(Math.round((sqrt) * 100 + Number.EPSILON) / 100)
  }
  */

  // forEach solution
  nums.forEach(num => {
    let sqrt = Math.sqrt(num)
    solutionArray.push(Math.round((sqrt) * 100 + Number.EPSILON) / 100)
  })

  return solutionArray
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let solutionArray = []

  /* for loop solution
  for (let i = 0; i <= sentences.length - 1; i++) {
    if (sentences[i].toLowerCase().includes(str)) {
      solutionArray.push(sentences[i])
    }
  }
  */ 

  // forEach solution
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str)) {
      solutionArray.push(sentence)
    }   
  })

  return solutionArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let solutionArray = []

  /* for loop solution
  for (let i = 0; i <= triangles.length - 1; i++) {
    solutionArray.push(Math.max(...triangles[i]))
  }  
  */

  // forEach solution
  triangles.forEach(triangle => {
    solutionArray.push(Math.max(...triangle))
  })

  return solutionArray
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
