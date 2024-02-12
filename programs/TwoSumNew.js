const arr = [20, 9, 10, 50, 10]
const len = arr.length
const number = 19

const TwoSumNew = (arr, len, target) => {
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (arr[j] > target) {
        continue
      }
      if (arr[i] + arr[j] === target) {
        return `number is ${arr[i]} + ${arr[j]}`
      }
    }
  }
  return "No number found"
}

console.log(TwoSumNew(arr, len, number))
