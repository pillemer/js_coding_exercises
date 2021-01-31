function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // for loop solution
  let solutionArray = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      solutionArray.push(nums[i])
    }
  }
  return solutionArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // for loop solution
  let solutionArray = []
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      solutionArray.push(names[i])
    }
  }
  return solutionArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // for loop solution
  let solutionArray = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      solutionArray.push(words[i])
    }
  }
  return solutionArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // for loop solution
  let solutionArray = []
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      solutionArray.push(nums[i])
    }
  }
  return solutionArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
