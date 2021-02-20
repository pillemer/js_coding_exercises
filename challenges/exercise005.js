const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const nextInt = index => nums[index + 1]
  if (nums.indexOf(n) >= 0 && nextInt(nums.indexOf(n))) {
    return nextInt(nums.indexOf(n))
  }
  else {
    return null
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const ones = [...str].filter(number => number === '1')  
  return {
    0: (str.length - ones.length), 
    1: ones.length}
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const nArray = [...n.toString()]
  let reversedArray = []
  for (let i = nArray.length ; i >= 0; i--) {
    reversedArray.push(nArray[i])
  }
  return +reversedArray.join("")
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (let arr of arrs) {
    for (let number of arr) {
      sum += number;
    }
  }
  return sum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  const last = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = last;
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    if (haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let solutionObject = {};
  const wordArray = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(' ');
  for (let word of wordArray) {
    if (solutionObject[word]) {
      solutionObject[word] += 1;
    } 
    else {
      solutionObject[word] = 1;
    }
  }
  return solutionObject
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
