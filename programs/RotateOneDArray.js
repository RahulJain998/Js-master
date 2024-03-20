const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const rotation = 20
const len = arr.length
console.log(len)

const RotateArray = (array, len, rotate) => {
  if (rotate === 0) {
    return array
  }
  if (len < rotate) {
    rotate = rotate % len
  }
  console.log("new rotate", rotate)
  for (let i = len - 1; i >= 0; i++) {
    if (rotate === 0) {
      return array
    }
    let elem = array.pop()
    array.unshift(elem)
    console.log(`rotate ${i}`)
    rotate--
  }
}

console.log(RotateArray(arr, len, rotation))
