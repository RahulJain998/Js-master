const array = [1, 2, 4, 6, 8, 9, 10, 20, 24, 30]
const sum = 8

const SumOfTwoNumber = (arr, num) => {
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    let total = arr[i] + arr[j]
    if (sum === total) {
      return `First Number is ${arr[i]} and Second Number is ${arr[j]}`
    } else if (sum < total) {
      j = j - 1
    } else {
      i = i + 1
    }
  }
  return "Not Present"
}

console.log(SumOfTwoNumber(array, sum))
