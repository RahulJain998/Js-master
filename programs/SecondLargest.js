// const arr = [12, 35, 1, 10, 34, 1];
// const arr = [
//   61, 30, 28, 47, 42, 25, 41, 56, 27, 45, 44, 34, 46, 35, 58, 36, 60, 29, 53,
//   55, 32, 31, 33, 59, 50, 51, 52, 37, 39, 38, 43, 49, 54, 57, 40, 26, 48,
// ]
// const arr = [1, 1, 1, 1, 1]
const arr = [
  32, 40, 42, 36, 44, 46, 37, 39, 30, 34, 28, 43, 48, 25, 29, 26, 38, 35, 49,
  27, 45, 31, 33, 41, 47,
]

const len = arr.length

const secondDublicate = (arr, n) => {
  let max = arr[0]
  let secondMax = arr[1]
  let point = 0
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      secondMax = max
      max = arr[i]
    }
    if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i]
      point++
    }
  }

  if (point === 0) {
    return -1
  }

  return secondMax
}

console.log(secondDublicate(arr, len))
