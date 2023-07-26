const arr = [2, -4, 43, -17, -7, 8, 10]
const len = arr.length

const KadaneAlgo = (arr, len) => {
  let sum = 0
  let maxSum = 0
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i]
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
