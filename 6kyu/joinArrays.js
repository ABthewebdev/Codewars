// Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input. Each array contains objects that have an id field with an integer value. The function should merge arr1 and arr2 based on their id key and return a new array, joinedArray, as the result.
function joinArraysById(arr1, arr2) {
    const mergedObj = {}
    arr1.forEach(a => mergedObj[a.id] = a)
    arr2.forEach(a => mergedObj[a.id] = {...mergedObj[a.id], ...a})
    return Object.values(mergedObj)
  }

  