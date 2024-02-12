const arr = [1, 4, 7, 9, 23, 41, 56, 90, 36, 87, 52]
const target = 36

const findTargetElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `element ${element} find at position ${i + 1}`
    }
  }
  return "Element Not Present in the Given array"
}

console.log(findTargetElement(arr, target))
