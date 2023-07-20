const arr = [12, 5, 8, 12, 5, 3, 13]

const MinElement = (array) => {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}

console.log(MinElement(arr))
