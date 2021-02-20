const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const targetIndex = nums.indexOf(n);
  if (targetIndex > 0 && (nums[targetIndex + 1])) {
    return nums[targetIndex + 1]
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
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
