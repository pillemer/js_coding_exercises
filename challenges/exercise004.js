function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      solutionArray.push(nums[i])
    }
  }
  */
  
  /* forEach solution
  let solutionArray = []
  nums.forEach(num => {
    if (num < 1) {
      solutionArray.push(num)
    }
  })
  */

  // filter solution
  let solutionArray = nums.filter(function(num) {
    if (num < 1) {
      return true
    } else {
      return false
    }
  });

  return solutionArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      solutionArray.push(names[i])
    }
  }
  */

  /* forEach Solution
  let solutionArray = []
  names.forEach(name => {
    if (name.startsWith(char)) {
      solutionArray.push(name)
    }
  })
  */

  // filter solution
  let solutionArray = names.filter(function(name) {
    if (name.startsWith(char)) {
      return true
    }
    else { return false }
  })

  return solutionArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      solutionArray.push(words[i])
    }
  }
  */

  /* forEach solution
  let solutionArray = []
  words.forEach(word => {
    if (word.startsWith('to ')) {
      solutionArray.push(word)
    }
  })
  */

  // filter solution
  let solutionArray = words.filter(function(word) {
    if (word.startsWith('to ')) {
      return true
    }
    else { return false }
  })
  
  return solutionArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      solutionArray.push(nums[i])
    }
  }
  */
  
  /* forEach solution
  let solutionArray = []
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      solutionArray.push(num)
    }
  })
  */

  // filter solution
  let solutionArray = nums.filter(function(num) {
    if (Number.isInteger(num)) {
      return true
    }
    else { return false }
  })
  
  return solutionArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < users.length; i++) {
    solutionArray.push(users[i]['data']['city']['displayName'])
  }
  */

  /* forEach solution
  let solutionArray = []
  users.forEach(user => {
    solutionArray.push(user['data']['city']['displayName'])
  })
  */

  // map solution
  let solutionArray = users.map(function(user) {
    return user['data']['city']['displayName']
  })

  return solutionArray
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.sqrt(nums[i])
    solutionArray.push(Math.round((sqrt) * 100 + Number.EPSILON) / 100)
  }
  */

  /* forEach solution
  let solutionArray = []
  nums.forEach(num => {
    let sqrt = Math.sqrt(num)
    solutionArray.push(Math.round((sqrt) * 100 + Number.EPSILON) / 100)
  })
  */

  // map solution
  let solutionArray = nums.map(function(num) {
    let sqrt = Math.sqrt(num)
    return (Math.round((sqrt) * 100 + Number.EPSILON) / 100)
  })

  return solutionArray
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i <= sentences.length - 1; i++) {
    if (sentences[i].toLowerCase().includes(str)) {
      solutionArray.push(sentences[i])
    }
  }
  */ 

  /* forEach solution
  let solutionArray = []
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str)) {
      solutionArray.push(sentence)
    }   
  })
  */

  // filter solution
  let solutionArray = sentences.filter(function(sentence) {
    if (sentence.toLowerCase().includes(str)) {
      return true
    }
    else { return false }
  })

  return solutionArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  /* for loop solution
  let solutionArray = []
  for (let i = 0; i <= triangles.length - 1; i++) {
    solutionArray.push(Math.max(...triangles[i]))
  }  
  */

  /* forEach solution
  let solutionArray = []
  triangles.forEach(triangle => {
    solutionArray.push(Math.max(...triangle))
  })
  */

  // map solution
  let solutionArray = triangles.map(function(triangle) {
    return Math.max(...triangle)
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
