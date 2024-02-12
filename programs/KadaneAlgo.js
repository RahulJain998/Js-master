// const arr = [2, -4, 43, -17, -7, 8, 10]
// const arr = [-10,-2,-3, -4]
// const arr = [-5,2,-3,7,4]
const arr = [1, 2, 3, 7, 5]
const len = arr.length

const KadaneAlgo = (arr, len) => {
  let sum = 0
  let maxSum = Number.NEGATIVE_INFINITY
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i]
    console.log(sum, i, maxSum)
    if (maxSum < sum) {
      maxSum = sum
    }
    if (sum < 0) {
      sum = 0
    }
  }
  return maxSum
}

console.log(KadaneAlgo(arr, len))
