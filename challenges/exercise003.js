function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCased = words[0].toLowerCase()
  
  words.slice(1).forEach(word => {    
    let capital = word.slice(0,1).toUpperCase()
    camelCased += capital + word.slice(1)
  });
  return camelCased
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let counter = 0;
  people.forEach(person => {
    counter += person['subjects'].length
  })
  return counter
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let exists = false;
  menu.forEach(item => {
      if (item['ingredients'].includes(ingredient)) {
        exists = true
      }
  })
  return exists
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let resultArray = []
  arr1.forEach(number => {
    if (arr2.includes(number)) {
      if (!resultArray.includes(number))
        resultArray.push(number)
    }
  })
  return resultArray.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
