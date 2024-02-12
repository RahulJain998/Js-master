const arr = [1, 2, 3, 7, 5]
const len = arr.length
const sum = 3

const subArrayGivenSum = (arr, len, gSum) => {
  let sum = 0
  let maxSum = Number.NEGATIVE_INFINITY
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i]
    console.log(i, sum)
    if (maxSum === gSum) {
      return maxSum
    }
    if (maxSum < sum) {
      maxSum = sum
    }
    if (sum < 0) {
      sum = 0
    }
  }
  return maxSum
}

console.log(subArrayGivenSum(arr, len, sum))
