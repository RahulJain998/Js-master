const arr = [1, 2, 3, 2]
const len = arr.length
const x = 1
const y = 2

const minDistance = (arr, len, x, y) => {
  let distance = 0
  let i = 0
  let j = 0

  while (i < len && j < len) {
    console.log(i, j, arr[i])
    i++
    j++
  }
}

console.log(minDistance(arr, len, x, y))
