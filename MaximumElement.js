const arr = [12, 5, 8, 12, 5, 93, 13]

const MaxElement = (array) => {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

console.log(MaxElement(arr))
