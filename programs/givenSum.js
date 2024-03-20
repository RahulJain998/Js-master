const arr = [1, 2, 3, 7, 5]
const s = 12
const n = arr.len

const arrayGivenSum = (arr, s, n) => {
  let j = 0
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (sum > s) {
      if (sum === s) {
        return s
      }
      sum = sum - arr[j]
      j++
    } else {
      sum = sum + arr[i]
    }
  }
  return 0
}

console.log(arrayGivenSum(arr, s, n))
